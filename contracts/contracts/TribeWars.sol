// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {TribeToken} from "./TribeToken.sol";

/// @title TribeWars
/// @notice Launches tribe tokens and runs wars between them.
///
/// Each token parks 20% of its supply here as a war chest, split into four 5% stakes: a tribe
/// can fight at most four prize wars. In a war, holders of each side vote with the balance
/// they held at the snapshot. The side whose holders voted with the larger SHARE of their
/// circulating supply wins, and its snapshot holders receive BOTH stakes: their own 5% and
/// the loser's 5%. The loser's holders get nothing. Rewards vest: 1% claimable at
/// settlement, the rest unlocking daily over 30 days. A void war (no votes, exact tie)
/// uses no stake. Nothing in a chest ever leaves except through a won war.
///
/// Manipulation resistance:
///  - Weight is token balance, so splitting a bag across many wallets adds nothing.
///  - The snapshot is taken when the challenge is created, before anyone knows a war is
///    coming; buying after that earns neither votes nor rewards.
///  - One vote per address per side, read from the snapshot, so moving tokens to a fresh
///    wallet after voting gives that wallet zero weight.
///  - Pool, war chest and burn addresses are excluded from supply, votes and rewards.
///  - Scores are normalised by circulating supply, so tokens with different supplies or
///    prices compete on turnout, not on raw token counts.
contract TribeWars is ReentrancyGuard {
    using SafeERC20 for IERC20;

    uint256 public constant CHALLENGE_WINDOW = 2 days;
    uint256 public constant VOTE_DURATION = 3 days;
    uint256 public constant VEST_DAYS = 30;
    uint256 public constant INSTANT_BPS = 100; // 1% of each reward is unlocked at settlement
    uint256 public constant MAX_EXTRA_EXCLUDED = 8;
    uint8 public constant MAX_WARS = 4; // 20% chest = four 5% stakes
    address public constant DEAD = 0x000000000000000000000000000000000000dEaD;

    struct Tribe {
        address creator;
        uint256 chest; // full war chest (20% of supply), in this tribe's token
        uint256 chestLeft; // not yet staked in a settled war
        uint8 warsFought; // settled prize wars, at most MAX_WARS
        bool busy; // in a pending or running war
        address[] excluded; // never counted as circulating, never vote, never claim
    }

    enum State { None, Pending, Voting, Settled, Void, Cancelled }

    struct War {
        address a; // challenger
        address b; // challenged
        uint48 snapshot; // balances are read at this timestamp
        uint64 acceptBy;
        uint64 votingEnds;
        uint64 settledAt;
        State state;
        uint256 circA;
        uint256 circB;
        uint256 votesA;
        uint256 votesB;
        address winner;
        address loser;
        uint256 prizeOwn; // winner's own stake, in the winner's token
        uint256 prizeLoot; // loser's stake, in the loser's token
    }

    mapping(address => Tribe) internal _tribes;
    War[] internal _wars;
    mapping(uint256 => mapping(address => mapping(address => bool))) public hasVoted; // war => token => voter
    mapping(uint256 => mapping(address => uint256)) public claimedOwn; // winner's own chest
    mapping(uint256 => mapping(address => uint256)) public claimedLoot; // loser's chest

    event Launched(address indexed token, address indexed creator, uint256 supply, uint256 chest);
    event Challenged(uint256 indexed id, address indexed a, address indexed b, uint48 snapshot);
    event Accepted(uint256 indexed id, uint256 circA, uint256 circB, uint64 votingEnds);
    event Cancelled(uint256 indexed id);
    event Voted(uint256 indexed id, address indexed token, address indexed voter, uint256 weight);
    event Settled(uint256 indexed id, address indexed winner, address indexed loser);
    event Voided(uint256 indexed id);
    event Claimed(uint256 indexed id, address indexed holder, uint256 own, uint256 loot);

    // ---------------------------------------------------------------- launch

    /// @param liquidity receives 80% of supply (the launchpad / pool seeder) and is excluded
    /// @param extraExcluded further addresses that hold tokens on behalf of others (e.g. a pool manager)
    function launch(
        string calldata name,
        string calldata symbol,
        uint256 supply,
        address liquidity,
        address[] calldata extraExcluded
    ) external returns (address token) {
        require(liquidity != address(0), "liquidity=0");
        require(supply >= 1e18 && supply <= 1e33, "supply out of range");
        require(extraExcluded.length <= MAX_EXTRA_EXCLUDED, "too many excluded");

        token = address(new TribeToken(name, symbol, supply, liquidity, address(this)));
        Tribe storage t = _tribes[token];
        t.creator = msg.sender;
        t.chest = supply / 5;
        t.chestLeft = t.chest;
        _exclude(t, address(this));
        _exclude(t, DEAD);
        _exclude(t, liquidity);
        for (uint256 i; i < extraExcluded.length; ++i) _exclude(t, extraExcluded[i]);

        emit Launched(token, msg.sender, supply, t.chest);
    }

    function _exclude(Tribe storage t, address who) private {
        if (who == address(0)) return;
        for (uint256 i; i < t.excluded.length; ++i) if (t.excluded[i] == who) return;
        t.excluded.push(who);
    }

    // ------------------------------------------------------------------ wars

    /// The challenger's creator opens a war. The snapshot is fixed right here.
    function challenge(address a, address b) external returns (uint256 id) {
        Tribe storage A = _tribes[a];
        Tribe storage B = _tribes[b];
        require(A.creator == msg.sender, "not challenger creator");
        require(B.creator != address(0) && a != b, "bad opponent");
        require(A.warsFought < MAX_WARS && B.warsFought < MAX_WARS, "no wars left");
        require(!A.busy, "challenger busy");

        A.busy = true;
        id = _wars.length;
        War storage w = _wars.push();
        w.a = a;
        w.b = b;
        w.snapshot = uint48(block.timestamp - 1);
        w.acceptBy = uint64(block.timestamp + CHALLENGE_WINDOW);
        w.state = State.Pending;
        emit Challenged(id, a, b, w.snapshot);
    }

    function accept(uint256 id) external {
        War storage w = _war(id);
        Tribe storage B = _tribes[w.b];
        require(w.state == State.Pending, "not pending");
        require(block.timestamp <= w.acceptBy, "challenge expired");
        require(B.creator == msg.sender, "not opponent creator");
        require(!B.busy && B.warsFought < MAX_WARS, "opponent unavailable");

        w.circA = _circulating(w.a, w.snapshot);
        w.circB = _circulating(w.b, w.snapshot);
        require(w.circA > 0 && w.circB > 0, "no circulating supply");

        B.busy = true;
        w.votingEnds = uint64(block.timestamp + VOTE_DURATION);
        w.state = State.Voting;
        emit Accepted(id, w.circA, w.circB, w.votingEnds);
    }

    /// Challenger may withdraw, the opponent may decline, anyone may clear an expired challenge.
    function cancel(uint256 id) external {
        War storage w = _war(id);
        require(w.state == State.Pending, "not pending");
        require(
            msg.sender == _tribes[w.a].creator || msg.sender == _tribes[w.b].creator || block.timestamp > w.acceptBy,
            "not allowed"
        );
        w.state = State.Cancelled;
        _tribes[w.a].busy = false;
        emit Cancelled(id);
    }

    /// Vote for the side whose token you held at the snapshot.
    function vote(uint256 id, address side) external {
        War storage w = _war(id);
        require(w.state == State.Voting && block.timestamp < w.votingEnds, "voting closed");
        require(side == w.a || side == w.b, "not in this war");
        require(!_isExcluded(side, msg.sender), "excluded address");
        require(!hasVoted[id][side][msg.sender], "already voted");

        uint256 weight = TribeToken(side).getPastVotes(msg.sender, w.snapshot);
        require(weight > 0, "no balance at snapshot");

        hasVoted[id][side][msg.sender] = true;
        if (side == w.a) w.votesA += weight;
        else w.votesB += weight;
        emit Voted(id, side, msg.sender, weight);
    }

    function finalize(uint256 id) external {
        War storage w = _war(id);
        require(w.state == State.Voting && block.timestamp >= w.votingEnds, "not finished");
        _tribes[w.a].busy = false;
        _tribes[w.b].busy = false;

        // Turnout as a share of circulating supply, in 1e18 fixed point.
        uint256 sA = (w.votesA * 1e18) / w.circA;
        uint256 sB = (w.votesB * 1e18) / w.circB;
        if (sA == sB) {
            // No votes at all, or an exact tie: nobody wins, both chests stay available.
            w.state = State.Void;
            emit Voided(id);
            return;
        }
        (w.winner, w.loser) = sA > sB ? (w.a, w.b) : (w.b, w.a);
        w.prizeOwn = _takeStake(_tribes[w.winner]);
        w.prizeLoot = _takeStake(_tribes[w.loser]);
        w.settledAt = uint64(block.timestamp);
        w.state = State.Settled;
        emit Settled(id, w.winner, w.loser);
    }

    // --------------------------------------------------------------- rewards

    /// What `holder` can claim right now, in the winner's token and in the loser's token.
    function claimable(uint256 id, address holder) public view returns (uint256 own, uint256 loot) {
        War storage w = _wars[id];
        if (w.state != State.Settled || _isExcluded(w.winner, holder)) return (0, 0);
        uint256 bal = TribeToken(w.winner).getPastVotes(holder, w.snapshot);
        if (bal == 0) return (0, 0);
        uint256 circ = w.winner == w.a ? w.circA : w.circB;
        own = _vested((w.prizeOwn * bal) / circ, w.settledAt) - claimedOwn[id][holder];
        loot = _vested((w.prizeLoot * bal) / circ, w.settledAt) - claimedLoot[id][holder];
    }

    function claim(uint256 id) external nonReentrant {
        (uint256 own, uint256 loot) = claimable(id, msg.sender);
        require(own + loot > 0, "nothing to claim");
        War storage w = _wars[id];
        claimedOwn[id][msg.sender] += own;
        claimedLoot[id][msg.sender] += loot;
        if (own > 0) IERC20(w.winner).safeTransfer(msg.sender, own);
        if (loot > 0) IERC20(w.loser).safeTransfer(msg.sender, loot);
        emit Claimed(id, msg.sender, own, loot);
    }

    /// One 5% stake; the last war takes whatever rounding left, so the chest empties exactly.
    function _takeStake(Tribe storage t) private returns (uint256 stake) {
        stake = t.warsFought + 1 == MAX_WARS ? t.chestLeft : t.chest / MAX_WARS;
        t.chestLeft -= stake;
        t.warsFought += 1;
    }

    /// 1% at settlement, the other 99% unlocking in 30 equal daily steps.
    function _vested(uint256 total, uint64 settledAt) internal view returns (uint256) {
        uint256 day = (block.timestamp - settledAt) / 1 days;
        if (day >= VEST_DAYS) return total;
        uint256 instant = (total * INSTANT_BPS) / 10_000;
        return instant + ((total - instant) * day) / VEST_DAYS;
    }

    // --------------------------------------------------------------- helpers

    function _circulating(address token, uint48 at) internal view returns (uint256 c) {
        c = TribeToken(token).getPastTotalSupply(at);
        address[] storage ex = _tribes[token].excluded;
        for (uint256 i; i < ex.length; ++i) c -= TribeToken(token).getPastVotes(ex[i], at);
    }

    function _isExcluded(address token, address who) internal view returns (bool) {
        address[] storage ex = _tribes[token].excluded;
        for (uint256 i; i < ex.length; ++i) if (ex[i] == who) return true;
        return false;
    }

    function _war(uint256 id) internal view returns (War storage) {
        require(id < _wars.length, "no such war");
        return _wars[id];
    }

    // ------------------------------------------------------------------ views

    function war(uint256 id) external view returns (War memory) {
        return _war(id);
    }

    function warCount() external view returns (uint256) {
        return _wars.length;
    }

    function tribe(address token)
        external
        view
        returns (address creator, uint256 chest, uint256 chestLeft, uint8 warsLeft, bool busy, address[] memory excluded)
    {
        Tribe storage t = _tribes[token];
        return (t.creator, t.chest, t.chestLeft, MAX_WARS - t.warsFought, t.busy, t.excluded);
    }
}
