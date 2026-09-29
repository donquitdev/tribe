# TRIBE Docs

Everything about TRIBE in one place: what it is, why it exists, how every feature works and what is live today.

## What is TRIBE?
**TRIBE is a token launchpad built around communities.** Every token launched on TRIBE is a _tribe_: a token plus the people who hold it. Tribes grow, trade, compete against each other in **Tribe Wars**, and prove they are real in **Real Tribe**.

Most launchpads stop at "create a token". TRIBE starts there. The goal is to reward communities that actually show up, and to make fake hype expensive.

- **Network:** Robinhood Chain (an Ethereum Layer 2 built on Arbitrum, Chain ID 4663, gas paid in ETH).

- **Who it is for:** meme and community token creators, holders who want to back the real community, and traders who want to know which token with a popular ticker is the genuine one.

## Why TRIBE: the advantages
- **No creator allocation.** The creator gets 0% of supply. 80% seeds the liquidity pool and 20% is locked in the War Chest for the community. There is no team bag to dump.

- **Rewards go to holders, not insiders.** The War Chest can only ever be paid out to the holders of a tribe that wins a Tribe War. Nobody can withdraw it, including the creator.

- **Manipulation-resistant voting.** Votes are weighted by tokens held at a hidden snapshot. Splitting tokens across thousands of wallets adds nothing, and buying after a war is announced counts for nothing.

- **Real Tribe transparency.** When many tokens share a ticker, Real Tribe shows which one has the real community, with every raw number visible, plus a clean-launch (bundle) score.

- **Fun by design.** Mascots, tribe levels, missions, XP and wars turn holding a token into being part of a team.

## Quick start
- **Connect a wallet.** Tap _Connect Wallet_. Use a browser wallet (MetaMask, Rabby, any EVM wallet) on Robinhood Chain, or _Demo Mode_ to try everything with a simulated wallet.

- **Explore.** Browse _Tribes_, check prices in _Market_, and see rankings in _Leaderboard_.

- **Launch.** Open _Launch_ and follow 8 steps: name, ticker, mascot, colors, description and links, token supply, review, launch.

- **Trade.** Open any token in _Market_ and buy or sell.

- **Fight.** Join a side in _Wars_ or challenge another tribe from its page.

- **Verify.** Check a ticker in _Real Tribe_ before you buy.

## Launching a token
The Launch wizard has 8 steps and a live preview of your tribe card:

- **Name** (3 to 24 characters).
- **Ticker** (2 to 8 letters or numbers, unique on TRIBE).
- **Mascot**: pick a template or upload an image (PNG, JPG or WebP, up to 800 KB).
- **Colors**: the palette for your card, profile and war banner.
- **Description and links**: a short description plus optional X account, website and Telegram. Links are checked and only valid https addresses are accepted.
- **Token supply**: 100M, 1B or 10B.
- **Review** everything.
- **Launch**.

After launch your tribe gets its own page, a Market listing, and a trade page. You can edit your links at any time.

## Stock pairs
Robinhood Chain carries tokenized stocks and ETFs. TRIBE lets you pair your tribe's pool with one of them instead of ETH, so buyers pay in a real-world asset and the pool holds it.

- **Choose the pair at launch** (step 6): ETH, or NVDA, TSLA, AAPL, META, COIN, MSTR, SPY, QQQ or GLD.

- **Buying and selling** happen in the paired asset. A $BANANA / NVDA pool takes NVDA in and pays NVDA out.

- **Live prices.** Stock prices are read from each stock's pool on Robinhood Chain and refresh every minute. Market caps are shown in US dollars so ETH and stock pairs compare directly.

- **The pair is fixed** once the tribe is launched.

- **Market filters** show all pairs, ETH pairs or stock pairs.

Tokenized stocks track the price of the underlying share, so a stock-paired tribe also moves with that stock. In demo mode you get about $3,000 of each stock to try trades; nothing is sent on-chain.

## Tokenomics
| Allocation | Share | What happens to it |
| --- | --- | --- |
| Liquidity pool | 80% | Seeds the trading pool so the token is tradable from the first minute. |
| War Chest | 20% | Locked in the TribeWars contract as four 5% stakes. Paid out only to holders of a tribe that wins a Tribe War. |
| Creator | 0% | The creator gets no allocation. |

Example with a 1B supply: 800M go to the pool, 200M to the War Chest, split into four stakes of 50M, one per Tribe War.

## Tribes, Tribe Power, levels and missions
- **Tribe page:** mascot, ticker, level, members, treasury, activity, Tribe Power, description, links, community activity, active war, and Join, Trade, Share and Challenge buttons.

- **Tribe Power** grows with members, activity and war wins. It ranks tribes on the **Leaderboard**, which can also sort by members, activity and newest.

- **Missions** give XP to your profile: launch a tribe, join a tribe, join a war, invite a member, scout 3 tribes, and complete your first on-chain action (checked on Robinhood Chain for real wallets). Every 400 XP is a new level.

- **My Profile** shows your wallet, level, token balances, the tribes you launched and joined, and your wars.

## Market and trading
**Market** lists every tribe token with price, 24h change, market cap, volume and a 24h chart. You can search and sort by trending, top gainers, market cap, volume or newest.

Each token has a **trade page** with a chart, market cap, liquidity, volume, supply, recent trades and a Buy / Sell box. Prices come from the token's liquidity pool (constant product, x × y = k). Every trade pays a **1% fee**. The quote shows what you receive and the **price impact** before you confirm.

## Tribe Wars
A Tribe War is a 72-hour vote between two tribes. The tribe whose holders vote with the larger **share of their circulating supply** wins, and its holders receive two War Chest stakes: **their own 5% and the loser's 5%**. The loser's holders receive nothing.

- **Challenge.** A tribe's creator challenges another tribe. **The snapshot of every holder's balance is taken at this moment.**

- **Accept.** The other tribe's creator has 2 days to accept. If not, the challenge expires and can be cleared by anyone.

- **Vote.** For 3 days, holders vote for the tribe whose token they held at the snapshot. Vote weight is that snapshot balance.

- **Finalize.** Anyone can finalize after voting ends. Score = votes ÷ circulating supply at the snapshot, so tokens with different supplies and prices compete fairly on turnout.

- **Claim.** Every holder of the winning token at the snapshot can claim, whether they voted or not, in proportion to their snapshot balance.

**Vesting:** 1% of each reward is claimable immediately when the war is won. The other 99% unlocks in equal daily steps over 30 days. Claims never expire.

**Limits:** each tribe can fight at most **4 prize wars** (four 5% stakes). A war with no votes or an exact tie is **void**: nobody wins and no stake is used.

## War Chest rules
- The War Chest is 20% of supply, locked in the TribeWars contract at launch.

- It is split into four 5% stakes, one per prize war.

- No function can withdraw it: not the creator, not TRIBE, not anyone. Tokens leave the chest only as rewards to the holders of a winning tribe.

- If a creator never takes part in a Tribe War, the War Chest stays locked forever.

- Rewards have no expiry date.

## How manipulation is prevented
| Attack | Why it fails |
| --- | --- |
| Split one bag across 10,000 wallets | Weight is the token balance. 10,000 wallets holding 1M in total still weigh exactly 1M. |
| Buy a lot right before the vote | The snapshot is taken when the challenge is created, before anyone knows a war is coming. Tokens bought after it give zero votes and zero rewards. |
| Vote, move tokens to a new wallet, vote again | Each address votes once per side with its snapshot balance. The new wallet held nothing at the snapshot. |
| Vote with the pool or the War Chest | Pool, War Chest and burn addresses are excluded from supply, votes and rewards. |
| Win with a token that has a huge supply | Scores are a share of circulating supply, not raw token counts. |
| Buy the winning token after the war to farm rewards | Rewards use the snapshot balance, so later buyers get nothing. |
| Lend voting power | Delegation is disabled. Votes always equal the holder's own balance. |

## Real Tribe
In memecoins many tokens share the same ticker, and it is hard to tell which one has the real community. **Real Tribe** answers that. It is open to every token on Robinhood Chain, including tokens not launched on TRIBE, and it only informs: it is separate from Tribe Wars and does not decide anything for you.

Tokens with the same ticker are grouped and ranked by a **community score from 0 to 100**:

| Part | Points | What it measures |
| --- | --- | --- |
| Real holders | 30 | Wallets holding at least $20 for 7+ days. |
| Spread | 20 | Share of supply outside the 10 biggest wallets. |
| Holding time | 15 | Average days holders keep the token. |
| Aged wallets | 15 | Holders whose wallet has 30+ days of history. |
| Roll call | 10 | Holders who signed "I'm part of this tribe" this month. |
| Clean launch | 10 | The bundle score. |

**Bundle score (0 to 100, higher is healthier):** drops with the share of supply bought in the launch block by linked wallets, and with snipers. Wallets funded from one source count as one.

**Verdicts:** _REAL TRIBE_ goes to the top token only with a score of 50+ and a lead of 10+ points. A closer race is _CONTESTED_. A top score below 50 means no clear community yet. Every raw number is shown next to the score so you can judge for yourself.

**Register** any token with its contract address, ticker and name. Your own TRIBE launches register with one tap.

## Smart contracts
- **TribeToken:** a fixed-supply ERC-20. At creation it mints 80% to the liquidity address and 20% to TribeWars. Balances are checkpointed by timestamp so past balances can be read, and delegation is disabled so every balance is its own vote.

- **TribeWars:** launches tokens, holds War Chests, and runs challenge, accept, vote, finalize and vested claims. It has no owner and no withdraw function.

- **Tests:** the contracts pass an automated test suite covering launch splits, the sybil, sniping and double-vote attacks, supply normalisation, void wars, the 4-war limit, exact chest accounting and 30-day vesting.

## Current status
- **This website is a demo.** Tribes, prices, trades, wars and Real Tribe metrics are sample data or simulations. Launched tribes, their links and Real Tribe registrations are saved on the TRIBE server so every visitor sees them; trades, joins and war votes stay in your browser. Actions marked DEMO send no blockchain transaction.

- **The contracts are written and tested but not deployed yet,** and have not had an external security audit.

- **Next:** external audit, deployment on Robinhood Chain, connecting the site to the contracts, and a live indexer for Real Tribe scores.

## FAQ
**Does the creator get tokens?** No. The creator allocation is 0%.

**Can the creator take the War Chest?** No. Nobody can. It only pays out to holders of a winning tribe.

**Do I have to vote to get rewards?** No. Every holder of the winning token at the snapshot gets a share. Voting helps your tribe win.

**What if I bought after the challenge?** Those tokens do not vote and do not earn rewards for that war.

**How many wars can a tribe fight?** Four prize wars, one 5% stake each.

**What happens in a tie?** The war is void and no stake is used.

**Is Real Tribe a guarantee?** No. It is data about the community. Always do your own research.

**Which languages are supported?** English, Chinese and Korean. Switch at the bottom of any page.

## Glossary
TribeA token launched on TRIBE and its community.
War Chest20% of supply locked for Tribe War rewards, in four 5% stakes.
StakeOne 5% slice of the War Chest, put at risk in one war.
SnapshotThe moment balances are read for a war: when the challenge is created.
Circulating supplyTotal supply minus pool, War Chest and burn addresses.
VestingRewards unlock 1% at once, then daily over 30 days.
BundleLinked wallets buying a large share of supply at launch.
Tribe PowerA score from members, activity and war wins, used on the Leaderboard.

## Risks and disclaimer
Crypto tokens are volatile and can lose all their value. Smart contracts can contain bugs even after testing. Real Tribe scores are information, not financial advice or a guarantee. Only use funds you can afford to lose and always do your own research.

