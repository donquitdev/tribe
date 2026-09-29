const { expect } = require("chai");
const { ethers, network } = require("hardhat");

const E = (n) => ethers.parseEther(String(n));
const DAY = 86400;
const travel = async (s) => { await network.provider.send("evm_increaseTime", [s]); await network.provider.send("evm_mine"); };

describe("TribeWars", function () {
  let wars, A, B, creatorA, creatorB, pool, whaleA, alice, bob, carol, attacker, outsider;

  // Tokens leave the pool the way a buy would.
  const buy = (token, who, amount) => token.connect(pool).transfer(who.address ?? who, amount);

  async function launch(creator, name, supply) {
    const tx = await wars.connect(creator).launch(name, name, supply, pool.address, []);
    const ev = (await tx.wait()).logs.map((l) => wars.interface.parseLog(l)).find((x) => x && x.name === "Launched");
    return ethers.getContractAt("TribeToken", ev.args.token);
  }

  async function startWar() {
    await wars.connect(creatorA).challenge(A.target, B.target);
    await wars.connect(creatorB).accept(0);
  }

  beforeEach(async () => {
    [creatorA, creatorB, pool, whaleA, alice, bob, carol, attacker, outsider] = await ethers.getSigners();
    wars = await (await ethers.getContractFactory("TribeWars")).deploy();
    A = await launch(creatorA, "BANANA", E(1e9)); // 1B supply
    B = await launch(creatorB, "PIZZA", E(10e9)); // 10B supply: raw counts are not comparable
    await buy(A, whaleA, E(50e6));
    await buy(A, alice, E(10e6));
    await buy(B, bob, E(300e6));
    await buy(B, carol, E(100e6));
    await travel(10);
  });

  it("launch splits 80% to liquidity and 20% to the war chest", async () => {
    expect(await A.totalSupply()).to.equal(E(1e9));
    expect(await A.balanceOf(wars.target)).to.equal(E(200e6));
    const [creator, chest] = await wars.tribe(A.target);
    expect(creator).to.equal(creatorA.address);
    expect(chest).to.equal(E(200e6));
  });

  it("delegation is disabled: votes always equal balances", async () => {
    await expect(A.connect(alice).delegate(bob.address)).to.be.revertedWith("TribeToken: votes follow balances");
    expect(await A.getVotes(alice.address)).to.equal(E(10e6));
  });

  it("circulating supply excludes pool and war chest", async () => {
    await startWar();
    const w = await wars.war(0);
    expect(w.circA).to.equal(E(60e6)); // whale 50M + alice 10M
    expect(w.circB).to.equal(E(400e6));
  });

  it("only the two creators can challenge and accept", async () => {
    await expect(wars.connect(outsider).challenge(A.target, B.target)).to.be.revertedWith("not challenger creator");
    await wars.connect(creatorA).challenge(A.target, B.target);
    await expect(wars.connect(outsider).accept(0)).to.be.revertedWith("not opponent creator");
  });

  it("a challenge expires after 2 days and can then be cleared by anyone", async () => {
    await wars.connect(creatorA).challenge(A.target, B.target);
    await travel(2 * DAY + 1);
    await expect(wars.connect(creatorB).accept(0)).to.be.revertedWith("challenge expired");
    await wars.connect(outsider).cancel(0);
    expect((await wars.tribe(A.target))[4]).to.equal(false); // no longer busy
  });

  it("SYBIL: 10,000 dust wallets cannot outvote one real holder", async () => {
    // Attacker has 1M PIZZA (0.25% of circulating) and splits it across many wallets BEFORE the snapshot.
    const wallets = Array.from({ length: 40 }, () => ethers.Wallet.createRandom().connect(ethers.provider));
    await buy(B, attacker, E(1e6));
    for (const w of wallets) {
      await network.provider.send("hardhat_setBalance", [w.address, "0x56BC75E2D63100000"]);
      await B.connect(attacker).transfer(w.address, E(1e6 / 40));
    }
    await travel(10);
    await startWar();
    for (const w of wallets) await wars.connect(w).vote(0, B.target);
    await wars.connect(alice).vote(0, A.target); // one holder with 10M of 60M BANANA
    const war = await wars.war(0);
    // All 40 wallets together weigh exactly the 1M they hold: splitting added nothing.
    expect(war.votesB).to.equal(E(1e6));
    const sA = (war.votesA * 10n ** 18n) / war.circA, sB = (war.votesB * 10n ** 18n) / war.circB;
    expect(sA).to.be.greaterThan(sB);
    // Scaled up: 10,000 wallets holding the same 1M total would still sum to 1M.
  });

  it("SNIPING: tokens bought after the challenge give zero votes", async () => {
    await wars.connect(creatorA).challenge(A.target, B.target);
    await buy(B, attacker, E(2e9)); // buys a huge bag right after the challenge
    await wars.connect(creatorB).accept(0);
    await expect(wars.connect(attacker).vote(0, B.target)).to.be.revertedWith("no balance at snapshot");
  });

  it("DOUBLE VOTE: moving tokens to a fresh wallet after voting gives it no weight", async () => {
    await startWar();
    await wars.connect(bob).vote(0, B.target);
    await expect(wars.connect(bob).vote(0, B.target)).to.be.revertedWith("already voted");
    await B.connect(bob).transfer(outsider.address, E(300e6));
    await expect(wars.connect(outsider).vote(0, B.target)).to.be.revertedWith("no balance at snapshot");
    expect((await wars.war(0)).votesB).to.equal(E(300e6));
  });

  it("the pool and the war chest cannot vote", async () => {
    await startWar();
    await expect(wars.connect(pool).vote(0, A.target)).to.be.revertedWith("excluded address");
  });

  it("scores are normalised by circulating supply, not raw token counts", async () => {
    await startWar();
    await wars.connect(alice).vote(0, A.target); // 10M of 60M  = 16.7% turnout
    await wars.connect(carol).vote(0, B.target); // 100M of 400M = 25% turnout, 10x more tokens
    await travel(3 * DAY);
    await wars.finalize(0);
    expect((await wars.war(0)).winner).to.equal(B.target);
  });

  it("no votes at all voids the war and uses no stake", async () => {
    await startWar();
    await travel(3 * DAY);
    await wars.finalize(0);
    expect((await wars.war(0)).state).to.equal(4); // Void
    expect((await wars.tribe(A.target))[3]).to.equal(4n); // still 4 wars left
    expect((await wars.tribe(A.target))[2]).to.equal(E(200e6)); // chest untouched
    await wars.connect(creatorA).challenge(A.target, B.target); // can fight again
  });

  it("EDGE: competing challenges, decline and withdraw", async () => {
    const [, , , , , , , , , creatorC] = await ethers.getSigners();
    const C = await launch(creatorC, "CAT", E(1e9));
    await buy(C, carol, E(5e6));
    await travel(10);
    await wars.connect(creatorA).challenge(A.target, B.target); // war 0
    await wars.connect(creatorC).challenge(C.target, B.target); // war 1
    await expect(wars.connect(creatorA).challenge(A.target, C.target)).to.be.revertedWith("challenger busy");
    await wars.connect(creatorB).accept(1); // B takes C's challenge
    await expect(wars.connect(creatorB).accept(0)).to.be.revertedWith("opponent unavailable");
    await wars.connect(creatorB).cancel(0); // B declines A
    expect((await wars.tribe(A.target))[4]).to.equal(false);
    await expect(wars.connect(outsider).cancel(1)).to.be.revertedWith("not pending");
  });

  it("EDGE: no claim before settlement, no double finalize, no vote after the end", async () => {
    await startWar();
    await wars.connect(whaleA).vote(0, A.target);
    await expect(wars.connect(whaleA).claim(0)).to.be.revertedWith("nothing to claim");
    await expect(wars.finalize(0)).to.be.revertedWith("not finished");
    await travel(3 * DAY);
    await expect(wars.connect(alice).vote(0, A.target)).to.be.revertedWith("voting closed");
    await wars.finalize(0);
    await expect(wars.finalize(0)).to.be.revertedWith("not finished");
  });

  it("EDGE: an unregistered token cannot be challenged and a tribe cannot fight itself", async () => {
    await expect(wars.connect(creatorA).challenge(A.target, outsider.address)).to.be.revertedWith("bad opponent");
    await expect(wars.connect(creatorA).challenge(A.target, A.target)).to.be.revertedWith("bad opponent");
  });

  describe("after BANANA wins", () => {
    beforeEach(async () => {
      await startWar();
      await wars.connect(whaleA).vote(0, A.target); // 50/60 = 83%
      await wars.connect(bob).vote(0, B.target); // 300/400 = 75%
      await travel(3 * DAY);
      await wars.finalize(0);
    });

    it("the winner's holders get BOTH 5% stakes; the loser's holders get nothing", async () => {
      const w = await wars.war(0);
      expect(w.winner).to.equal(A.target);
      expect(w.prizeOwn).to.equal(E(50e6)); // 5% of BANANA's 1B
      expect(w.prizeLoot).to.equal(E(500e6)); // 5% of PIZZA's 10B
      const [own, loot] = await wars.claimable(0, whaleA.address);
      expect(own).to.be.greaterThan(0n);
      expect(loot).to.be.greaterThan(0n);
      expect(await wars.claimable(0, bob.address)).to.deep.equal([0n, 0n]);
      await expect(wars.connect(bob).claim(0)).to.be.revertedWith("nothing to claim");
    });

    it("holders who did not vote still share, by snapshot balance", async () => {
      const [own] = await wars.claimable(0, alice.address); // alice held 10M but did not vote
      expect(own).to.be.greaterThan(0n);
    });

    it("vesting: 1% at settlement, daily after, everything at day 30", async () => {
      // whale holds 50M of 60M circulating: entitled to 5/6 of each chest
      const fullOwn = (E(50e6) * E(50e6)) / E(60e6);
      const fullLoot = (E(500e6) * E(50e6)) / E(60e6);

      let [own, loot] = await wars.claimable(0, whaleA.address);
      expect(own).to.equal(fullOwn / 100n);
      expect(loot).to.equal(fullLoot / 100n);
      await wars.connect(whaleA).claim(0);
      expect(await A.balanceOf(whaleA.address)).to.equal(E(50e6) + fullOwn / 100n);
      expect(await B.balanceOf(whaleA.address)).to.equal(fullLoot / 100n);

      await travel(15 * DAY);
      [own] = await wars.claimable(0, whaleA.address);
      const at15 = fullOwn / 100n + ((fullOwn - fullOwn / 100n) * 15n) / 30n;
      expect(own).to.equal(at15 - fullOwn / 100n);

      await travel(20 * DAY);
      await wars.connect(whaleA).claim(0);
      expect(await A.balanceOf(whaleA.address)).to.equal(E(50e6) + fullOwn);
      expect(await B.balanceOf(whaleA.address)).to.equal(fullLoot);
      await expect(wars.connect(whaleA).claim(0)).to.be.revertedWith("nothing to claim");
    });

    it("claims pay out exactly one 5% stake per side; the other 15% stays locked", async () => {
      await travel(31 * DAY);
      await wars.connect(whaleA).claim(0);
      await wars.connect(alice).claim(0);
      // whale 50M + alice 10M = all 60M circulating, so each stake is paid out up to rounding
      expect(E(150e6) - 0n <= (await A.balanceOf(wars.target))).to.equal(true);
      expect((await A.balanceOf(wars.target)) - E(150e6)).to.be.lessThan(10n);
      expect((await B.balanceOf(wars.target)) - E(1.5e9)).to.be.lessThan(10n);
      expect((await wars.tribe(A.target))[2]).to.equal(E(150e6)); // chestLeft
      expect((await wars.tribe(B.target))[3]).to.equal(3n); // loser also used one of its 4 wars
    });

    it("buying the winner token after the war gives no reward", async () => {
      await buy(A, attacker, E(100e6));
      expect(await wars.claimable(0, attacker.address)).to.deep.equal([0n, 0n]);
    });

    it("a tribe fights at most 4 prize wars and the chest empties exactly", async () => {
      // war 0 already settled above; fight three more
      for (let i = 1; i <= 3; i++) {
        await wars.connect(creatorA).challenge(A.target, B.target);
        await wars.connect(creatorB).accept(i);
        await wars.connect(whaleA).vote(i, A.target);
        await travel(3 * DAY);
        await wars.finalize(i);
      }
      expect((await wars.tribe(A.target))[3]).to.equal(0n); // no wars left
      expect((await wars.tribe(A.target))[2]).to.equal(0n); // chestLeft
      await expect(wars.connect(creatorA).challenge(A.target, B.target)).to.be.revertedWith("no wars left");
      // four stakes of 50M = the whole 200M chest
      let paid = 0n;
      for (let i = 0; i < 4; i++) paid += (await wars.war(i)).prizeOwn;
      expect(paid).to.equal(E(200e6));
    });
  });
});
