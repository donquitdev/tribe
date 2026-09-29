// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import {ERC20Votes} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import {Nonces} from "@openzeppelin/contracts/utils/Nonces.sol";

/// @notice Fixed-supply tribe token: 80% to the liquidity address, 20% to the war chest.
/// Every balance is its own vote (delegation is disabled) and balances are checkpointed
/// by timestamp, so TribeWars can read what each wallet held at a past moment.
contract TribeToken is ERC20, ERC20Permit, ERC20Votes {
    constructor(string memory name_, string memory symbol_, uint256 supply, address liquidity, address warChest)
        ERC20(name_, symbol_)
        ERC20Permit(name_)
    {
        uint256 chest = supply / 5;
        _mint(liquidity, supply - chest);
        _mint(warChest, chest);
    }

    // Timestamps, not block.number: on Arbitrum-based chains block.number is the L1 block.
    function clock() public view override returns (uint48) {
        return uint48(block.timestamp);
    }

    // solhint-disable-next-line func-name-mixedcase
    function CLOCK_MODE() public pure override returns (string memory) {
        return "mode=timestamp";
    }

    /// Votes always follow the holder's own balance; nobody can lend weight to anyone else.
    function delegates(address account) public pure override returns (address) {
        return account;
    }

    function delegate(address) public pure override {
        revert("TribeToken: votes follow balances");
    }

    function delegateBySig(address, uint256, uint256, uint8, bytes32, bytes32) public pure override {
        revert("TribeToken: votes follow balances");
    }

    function _update(address from, address to, uint256 value) internal override(ERC20, ERC20Votes) {
        super._update(from, to, value);
    }

    function nonces(address owner) public view override(ERC20Permit, Nonces) returns (uint256) {
        return super.nonces(owner);
    }
}
