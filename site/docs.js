/* TRIBE documentation, one object per language. Each section: [id, title, html]. */
const DOCS = {
en: { title: 'TRIBE Docs', intro: 'Everything about TRIBE in one place: what it is, why it exists, how every feature works and what is live today.', toc: 'Contents', sections: [
['overview', 'What is TRIBE?', `
<p><b>TRIBE is a token launchpad built around communities.</b> Every token launched on TRIBE is a <i>tribe</i>: a token plus the people who hold it. Tribes grow, trade, compete against each other in <b>Tribe Wars</b>, and prove they are real in <b>Real Tribe</b>.</p>
<p>Most launchpads stop at "create a token". TRIBE starts there. The goal is to reward communities that actually show up, and to make fake hype expensive.</p>
<ul><li><b>Network:</b> Robinhood Chain (an Ethereum Layer 2 built on Arbitrum, Chain ID 4663, gas paid in ETH).</li>
<li><b>Who it is for:</b> meme and community token creators, holders who want to back the real community, and traders who want to know which token with a popular ticker is the genuine one.</li></ul>`],
['why', 'Why TRIBE: the advantages', `
<ul>
<li><b>No creator allocation.</b> The creator gets 0% of supply. 80% seeds the liquidity pool and 20% is locked in the War Chest for the community. There is no team bag to dump.</li>
<li><b>Rewards go to holders, not insiders.</b> The War Chest can only ever be paid out to the holders of a tribe that wins a Tribe War. Nobody can withdraw it, including the creator.</li>
<li><b>Manipulation-resistant voting.</b> Votes are weighted by tokens held at a hidden snapshot. Splitting tokens across thousands of wallets adds nothing, and buying after a war is announced counts for nothing.</li>
<li><b>Real Tribe transparency.</b> When many tokens share a ticker, Real Tribe shows which one has the real community, with every raw number visible, plus a clean-launch (bundle) score.</li>
<li><b>Fun by design.</b> Mascots, tribe levels, missions, XP and wars turn holding a token into being part of a team.</li>
</ul>`],
['start', 'Quick start', `
<ol>
<li><b>Connect a wallet.</b> Tap <i>Connect Wallet</i>. Use a browser wallet (MetaMask, Rabby, any EVM wallet) on Robinhood Chain, or <i>Demo Mode</i> to try everything with a simulated wallet.</li>
<li><b>Explore.</b> Browse <i>Tribes</i>, check prices in <i>Market</i>, and see rankings in <i>Leaderboard</i>.</li>
<li><b>Launch.</b> Open <i>Launch</i> and follow 8 steps: name, ticker, mascot, colors, description and links, token supply, review, launch.</li>
<li><b>Trade.</b> Open any token in <i>Market</i> and buy or sell.</li>
<li><b>Fight.</b> Join a side in <i>Wars</i> or challenge another tribe from its page.</li>
<li><b>Verify.</b> Check a ticker in <i>Real Tribe</i> before you buy.</li>
</ol>`],
['launch', 'Launching a token', `
<p>The Launch wizard has 8 steps and a live preview of your tribe card:</p>
<ol><li><b>Name</b> (3 to 24 characters).</li><li><b>Ticker</b> (2 to 8 letters or numbers, unique on TRIBE).</li><li><b>Mascot</b>: pick a template or upload an image (PNG, JPG or WebP, up to 800 KB).</li><li><b>Colors</b>: the palette for your card, profile and war banner.</li><li><b>Description and links</b>: a short description plus optional X account, website and Telegram. Links are checked and only valid https addresses are accepted.</li><li><b>Token supply</b>: 100M, 1B or 10B.</li><li><b>Review</b> everything.</li><li><b>Launch</b>.</li></ol>
<p>After launch your tribe gets its own page, a Market listing, and a trade page. You can edit your links at any time.</p>`],
['pairs', 'Stock pairs', `
<p>Robinhood Chain carries tokenized stocks and ETFs. TRIBE lets you pair your tribe's pool with one of them instead of ETH, so buyers pay in a real-world asset and the pool holds it.</p>
<ul><li><b>Choose the pair at launch</b> (step 6): ETH, or NVDA, TSLA, AAPL, META, COIN, MSTR, SPY, QQQ or GLD.</li>
<li><b>Buying and selling</b> happen in the paired asset. A $BANANA / NVDA pool takes NVDA in and pays NVDA out.</li>
<li><b>Live prices.</b> Stock prices are read from each stock's pool on Robinhood Chain and refresh every minute. Market caps are shown in US dollars so ETH and stock pairs compare directly.</li>
<li><b>The pair is fixed</b> once the tribe is launched.</li>
<li><b>Market filters</b> show all pairs, ETH pairs or stock pairs.</li></ul>
<p>Tokenized stocks track the price of the underlying share, so a stock-paired tribe also moves with that stock. In demo mode you get about $3,000 of each stock to try trades; nothing is sent on-chain.</p>`],
['tokenomics', 'Tokenomics', `
<table class="dtable"><tr><th>Allocation</th><th>Share</th><th>What happens to it</th></tr>
<tr><td>Liquidity pool</td><td>80%</td><td>Seeds the trading pool so the token is tradable from the first minute.</td></tr>
<tr><td>War Chest</td><td>20%</td><td>Locked in the TribeWars contract as four 5% stakes. Paid out only to holders of a tribe that wins a Tribe War.</td></tr>
<tr><td>Creator</td><td>0%</td><td>The creator gets no allocation.</td></tr></table>
<p>Example with a 1B supply: 800M go to the pool, 200M to the War Chest, split into four stakes of 50M, one per Tribe War.</p>`],
['tribes', 'Tribes, Tribe Power, levels and missions', `
<ul><li><b>Tribe page:</b> mascot, ticker, level, members, treasury, activity, Tribe Power, description, links, community activity, active war, and Join, Trade, Share and Challenge buttons.</li>
<li><b>Tribe Power</b> grows with members, activity and war wins. It ranks tribes on the <b>Leaderboard</b>, which can also sort by members, activity and newest.</li>
<li><b>Missions</b> give XP to your profile: launch a tribe, join a tribe, join a war, invite a member, scout 3 tribes, and complete your first on-chain action (checked on Robinhood Chain for real wallets). Every 400 XP is a new level.</li>
<li><b>My Profile</b> shows your wallet, level, token balances, the tribes you launched and joined, and your wars.</li></ul>`],
['market', 'Market and trading', `
<p><b>Market</b> lists every tribe token with price, 24h change, market cap, volume and a 24h chart. You can search and sort by trending, top gainers, market cap, volume or newest.</p>
<p>Each token has a <b>trade page</b> with a chart, market cap, liquidity, volume, supply, recent trades and a Buy / Sell box. Prices come from the token's liquidity pool (constant product, x × y = k). Every trade pays a <b>1% fee</b>. The quote shows what you receive and the <b>price impact</b> before you confirm.</p>`],
['wars', 'Tribe Wars', `
<p>A Tribe War is a 72-hour vote between two tribes. The tribe whose holders vote with the larger <b>share of their circulating supply</b> wins, and its holders receive two War Chest stakes: <b>their own 5% and the loser's 5%</b>. The loser's holders receive nothing.</p>
<ol><li><b>Challenge.</b> A tribe's creator challenges another tribe. <b>The snapshot of every holder's balance is taken at this moment.</b></li>
<li><b>Accept.</b> The other tribe's creator has 2 days to accept. If not, the challenge expires and can be cleared by anyone.</li>
<li><b>Vote.</b> For 3 days, holders vote for the tribe whose token they held at the snapshot. Vote weight is that snapshot balance.</li>
<li><b>Finalize.</b> Anyone can finalize after voting ends. Score = votes ÷ circulating supply at the snapshot, so tokens with different supplies and prices compete fairly on turnout.</li>
<li><b>Claim.</b> Every holder of the winning token at the snapshot can claim, whether they voted or not, in proportion to their snapshot balance.</li></ol>
<p><b>Vesting:</b> 1% of each reward is claimable immediately when the war is won. The other 99% unlocks in equal daily steps over 30 days. Claims never expire.</p>
<p><b>Limits:</b> each tribe can fight at most <b>4 prize wars</b> (four 5% stakes). A war with no votes or an exact tie is <b>void</b>: nobody wins and no stake is used.</p>`],
['chest', 'War Chest rules', `
<ul><li>The War Chest is 20% of supply, locked in the TribeWars contract at launch.</li>
<li>It is split into four 5% stakes, one per prize war.</li>
<li>No function can withdraw it: not the creator, not TRIBE, not anyone. Tokens leave the chest only as rewards to the holders of a winning tribe.</li>
<li>If a creator never takes part in a Tribe War, the War Chest stays locked forever.</li>
<li>Rewards have no expiry date.</li></ul>`],
['fair', 'How manipulation is prevented', `
<table class="dtable"><tr><th>Attack</th><th>Why it fails</th></tr>
<tr><td>Split one bag across 10,000 wallets</td><td>Weight is the token balance. 10,000 wallets holding 1M in total still weigh exactly 1M.</td></tr>
<tr><td>Buy a lot right before the vote</td><td>The snapshot is taken when the challenge is created, before anyone knows a war is coming. Tokens bought after it give zero votes and zero rewards.</td></tr>
<tr><td>Vote, move tokens to a new wallet, vote again</td><td>Each address votes once per side with its snapshot balance. The new wallet held nothing at the snapshot.</td></tr>
<tr><td>Vote with the pool or the War Chest</td><td>Pool, War Chest and burn addresses are excluded from supply, votes and rewards.</td></tr>
<tr><td>Win with a token that has a huge supply</td><td>Scores are a share of circulating supply, not raw token counts.</td></tr>
<tr><td>Buy the winning token after the war to farm rewards</td><td>Rewards use the snapshot balance, so later buyers get nothing.</td></tr>
<tr><td>Lend voting power</td><td>Delegation is disabled. Votes always equal the holder's own balance.</td></tr></table>`],
['realtribe', 'Real Tribe', `
<p>In memecoins many tokens share the same ticker, and it is hard to tell which one has the real community. <b>Real Tribe</b> answers that. It is open to every token on Robinhood Chain, including tokens not launched on TRIBE, and it only informs: it is separate from Tribe Wars and does not decide anything for you.</p>
<p>Tokens with the same ticker are grouped and ranked by a <b>community score from 0 to 100</b>:</p>
<table class="dtable"><tr><th>Part</th><th>Points</th><th>What it measures</th></tr>
<tr><td>Real holders</td><td>30</td><td>Wallets holding at least $20 for 7+ days.</td></tr>
<tr><td>Spread</td><td>20</td><td>Share of supply outside the 10 biggest wallets.</td></tr>
<tr><td>Holding time</td><td>15</td><td>Average days holders keep the token.</td></tr>
<tr><td>Aged wallets</td><td>15</td><td>Holders whose wallet has 30+ days of history.</td></tr>
<tr><td>Roll call</td><td>10</td><td>Holders who signed "I'm part of this tribe" this month.</td></tr>
<tr><td>Clean launch</td><td>10</td><td>The bundle score.</td></tr></table>
<p><b>Bundle score (0 to 100, higher is healthier):</b> drops with the share of supply bought in the launch block by linked wallets, and with snipers. Wallets funded from one source count as one.</p>
<p><b>Verdicts:</b> <i>REAL TRIBE</i> goes to the top token only with a score of 50+ and a lead of 10+ points. A closer race is <i>CONTESTED</i>. A top score below 50 means no clear community yet. Every raw number is shown next to the score so you can judge for yourself.</p>
<p><b>Register</b> any token with its contract address, ticker and name. Your own TRIBE launches register with one tap.</p>`],
['contracts', 'Smart contracts', `
<ul><li><b>TribeToken:</b> a fixed-supply ERC-20. At creation it mints 80% to the liquidity address and 20% to TribeWars. Balances are checkpointed by timestamp so past balances can be read, and delegation is disabled so every balance is its own vote.</li>
<li><b>TribeWars:</b> launches tokens, holds War Chests, and runs challenge, accept, vote, finalize and vested claims. It has no owner and no withdraw function.</li>
<li><b>Tests:</b> the contracts pass an automated test suite covering launch splits, the sybil, sniping and double-vote attacks, supply normalisation, void wars, the 4-war limit, exact chest accounting and 30-day vesting.</li></ul>`],
['status', 'Current status', `
<ul><li><b>This website is a demo.</b> Tribes, prices, trades, wars and Real Tribe metrics are sample data or simulations. Launched tribes, their links and Real Tribe registrations are saved on the TRIBE server so every visitor sees them; trades, joins and war votes stay in your browser. Actions marked DEMO send no blockchain transaction.</li>
<li><b>The contracts are written and tested but not deployed yet,</b> and have not had an external security audit.</li>
<li><b>Next:</b> external audit, deployment on Robinhood Chain, connecting the site to the contracts, and a live indexer for Real Tribe scores.</li></ul>`],
['faq', 'FAQ', `
<p><b>Does the creator get tokens?</b> No. The creator allocation is 0%.</p>
<p><b>Can the creator take the War Chest?</b> No. Nobody can. It only pays out to holders of a winning tribe.</p>
<p><b>Do I have to vote to get rewards?</b> No. Every holder of the winning token at the snapshot gets a share. Voting helps your tribe win.</p>
<p><b>What if I bought after the challenge?</b> Those tokens do not vote and do not earn rewards for that war.</p>
<p><b>How many wars can a tribe fight?</b> Four prize wars, one 5% stake each.</p>
<p><b>What happens in a tie?</b> The war is void and no stake is used.</p>
<p><b>Is Real Tribe a guarantee?</b> No. It is data about the community. Always do your own research.</p>
<p><b>Which languages are supported?</b> English, Chinese and Korean. Switch at the bottom of any page.</p>`],
['glossary', 'Glossary', `
<dl class="kv"><dt>Tribe</dt><dd>A token launched on TRIBE and its community.</dd>
<dt>War Chest</dt><dd>20% of supply locked for Tribe War rewards, in four 5% stakes.</dd>
<dt>Stake</dt><dd>One 5% slice of the War Chest, put at risk in one war.</dd>
<dt>Snapshot</dt><dd>The moment balances are read for a war: when the challenge is created.</dd>
<dt>Circulating supply</dt><dd>Total supply minus pool, War Chest and burn addresses.</dd>
<dt>Vesting</dt><dd>Rewards unlock 1% at once, then daily over 30 days.</dd>
<dt>Bundle</dt><dd>Linked wallets buying a large share of supply at launch.</dd>
<dt>Tribe Power</dt><dd>A score from members, activity and war wins, used on the Leaderboard.</dd></dl>`],
['risk', 'Risks and disclaimer', `
<p>Crypto tokens are volatile and can lose all their value. Smart contracts can contain bugs even after testing. Real Tribe scores are information, not financial advice or a guarantee. Only use funds you can afford to lose and always do your own research.</p>`],
]},

zh: { title: 'TRIBE 文档', intro: '关于 TRIBE 的一切：它是什么、为什么存在、每个功能如何运作，以及当前上线的内容。', toc: '目录', sections: [
['overview', '什么是 TRIBE？', `
<p><b>TRIBE 是一个以社区为核心的代币发射平台。</b>在 TRIBE 上发行的每个代币都是一个<i>部落</i>：代币加上持有它的人。部落可以成长、交易、在<b>部落战争</b>中相互竞争，并在<b>真实部落（Real Tribe）</b>中证明自己是真实的。</p>
<p>大多数发射平台止步于“创建代币”，而 TRIBE 从这里开始。目标是奖励真正参与的社区，并让虚假炒作变得昂贵。</p>
<ul><li><b>网络：</b>Robinhood Chain（基于 Arbitrum 的以太坊二层网络，Chain ID 4663，以 ETH 支付 Gas）。</li>
<li><b>适合谁：</b>表情包和社区代币的创建者、想支持真实社区的持有者，以及想知道热门代号中哪个才是正品的交易者。</li></ul>`],
['why', '为什么选择 TRIBE：优势', `
<ul>
<li><b>创建者零分配。</b>创建者获得 0% 的供应量。80% 注入流动性池，20% 锁定在战争金库中留给社区。没有团队筹码可以砸盘。</li>
<li><b>奖励归持有者，而非内部人士。</b>战争金库只能支付给赢得部落战争的部落持有者。任何人都无法提取，包括创建者。</li>
<li><b>抗操纵投票。</b>投票按隐藏快照时的持币量加权。把代币拆分到成千上万个钱包不会增加任何票数，战争宣布后买入的代币也不计票。</li>
<li><b>真实部落的透明度。</b>当许多代币使用同一代号时，真实部落会显示哪一个拥有真正的社区，所有原始数据都可见，并附带干净发射（捆绑）评分。</li>
<li><b>好玩的设计。</b>吉祥物、部落等级、任务、经验值和战争，让持有代币变成加入一支队伍。</li>
</ul>`],
['start', '快速开始', `
<ol>
<li><b>连接钱包。</b>点击<i>连接钱包</i>。在 Robinhood Chain 上使用浏览器钱包（MetaMask、Rabby 或任何 EVM 钱包），或使用<i>演示模式</i>以模拟钱包体验全部功能。</li>
<li><b>探索。</b>浏览<i>部落</i>，在<i>市场</i>查看价格，在<i>排行榜</i>查看排名。</li>
<li><b>发射。</b>打开<i>发射</i>，完成 8 个步骤：名称、代号、吉祥物、配色、描述与链接、代币供应量、检查、发射。</li>
<li><b>交易。</b>在<i>市场</i>中打开任意代币进行买入或卖出。</li>
<li><b>战斗。</b>在<i>战争</i>中选择一方，或在部落页面挑战另一个部落。</li>
<li><b>核实。</b>买入前在<i>真实部落</i>中查询代号。</li>
</ol>`],
['launch', '发射代币', `
<p>发射向导共有 8 个步骤，并实时预览你的部落卡片：</p>
<ol><li><b>名称</b>（3 到 24 个字符）。</li><li><b>代号</b>（2 到 8 个字母或数字，在 TRIBE 上唯一）。</li><li><b>吉祥物</b>：选择模板或上传图片（PNG、JPG 或 WebP，最大 800 KB）。</li><li><b>配色</b>：用于卡片、主页和战争横幅的调色板。</li><li><b>描述与链接</b>：简短描述，以及可选的 X 账号、网站和 Telegram。链接会经过检查，只接受有效的 https 地址。</li><li><b>代币供应量</b>：1 亿、10 亿或 100 亿。</li><li><b>检查</b>所有内容。</li><li><b>发射</b>。</li></ol>
<p>发射后，你的部落会拥有自己的页面、市场列表和交易页面。你可以随时编辑链接。</p>`],
['pairs', '股票交易对', `
<p>Robinhood Chain 上有代币化的股票和 ETF。TRIBE 允许你把部落的资金池与其中一只配对，而不是 ETH，这样买家用真实世界资产支付，资金池也持有该资产。</p>
<ul><li><b>发射时选择交易对</b>（第 6 步）：ETH，或 NVDA、TSLA、AAPL、META、COIN、MSTR、SPY、QQQ、GLD。</li>
<li><b>买卖</b>都使用配对资产。$BANANA / NVDA 池收入 NVDA，也支付 NVDA。</li>
<li><b>实时价格。</b>股票价格从 Robinhood Chain 上各股票的资金池读取，每分钟刷新。市值以美元显示，方便比较 ETH 与股票交易对。</li>
<li><b>交易对在部落发射后固定</b>，不能更改。</li>
<li><b>市场筛选</b>可显示全部、ETH 交易对或股票交易对。</li></ul>
<p>代币化股票跟随标的股票价格，因此股票配对的部落也会随该股票波动。演示模式下每只股票会给你约 3,000 美元用于试用交易，不会发送任何链上交易。</p>`],
['tokenomics', '代币经济', `
<table class="dtable"><tr><th>分配</th><th>比例</th><th>用途</th></tr>
<tr><td>流动性池</td><td>80%</td><td>注入交易池，让代币从第一分钟起即可交易。</td></tr>
<tr><td>战争金库</td><td>20%</td><td>以四份 5% 的形式锁定在 TribeWars 合约中，只支付给赢得部落战争的部落持有者。</td></tr>
<tr><td>创建者</td><td>0%</td><td>创建者没有任何分配。</td></tr></table>
<p>以 10 亿供应量为例：8 亿进入流动性池，2 亿进入战争金库，分为四份各 5000 万，每场部落战争使用一份。</p>`],
['tribes', '部落、部落战力、等级与任务', `
<ul><li><b>部落页面：</b>吉祥物、代号、等级、成员、金库、活跃度、部落战力、描述、链接、社区动态、进行中的战争，以及加入、交易、分享和挑战按钮。</li>
<li><b>部落战力</b>随成员、活跃度和战争胜利而增长。它决定<b>排行榜</b>的排名，排行榜也可以按成员、活跃度和最新排序。</li>
<li><b>任务</b>为你的个人资料提供经验值：发射部落、加入部落、参加战争、邀请成员、浏览 3 个部落，以及完成你的第一个链上操作（真实钱包会在 Robinhood Chain 上核验）。每 400 经验值升一级。</li>
<li><b>我的主页</b>显示你的钱包、等级、代币余额、你发射和加入的部落，以及你的战争。</li></ul>`],
['market', '市场与交易', `
<p><b>市场</b>列出每个部落代币的价格、24 小时涨跌、市值、交易量和 24 小时图表。你可以搜索，并按热门、涨幅榜、市值、交易量或最新排序。</p>
<p>每个代币都有一个<b>交易页面</b>，包含图表、市值、流动性、交易量、供应量、最近成交以及买入 / 卖出面板。价格来自代币的流动性池（恒定乘积，x × y = k）。每笔交易收取 <b>1% 手续费</b>。报价会在确认前显示你将收到的数量以及<b>价格影响</b>。</p>`],
['wars', '部落战争', `
<p>部落战争是两个部落之间为期 72 小时的投票。持有者以<b>其流通供应量中更高比例</b>参与投票的部落获胜，其持有者获得两份战争金库奖励：<b>自己的 5% 和失败方的 5%</b>。失败方的持有者一无所获。</p>
<ol><li><b>挑战。</b>部落创建者向另一个部落发起挑战。<b>所有持有者的余额快照在此刻记录。</b></li>
<li><b>接受。</b>对方部落的创建者有 2 天时间接受。否则挑战过期，任何人都可以清除。</li>
<li><b>投票。</b>在 3 天内，持有者为自己在快照时所持代币对应的部落投票。票数权重等于快照时的余额。</li>
<li><b>结算。</b>投票结束后任何人都可以结算。得分 = 票数 ÷ 快照时的流通供应量，因此供应量和价格不同的代币可以按参与率公平竞争。</li>
<li><b>领取。</b>快照时持有获胜代币的每一位持有者都可以按快照余额比例领取奖励，无论是否投票。</li></ol>
<p><b>归属：</b>赢得战争时，每份奖励的 1% 可立即领取，其余 99% 在 30 天内按天等额解锁。领取永不过期。</p>
<p><b>限制：</b>每个部落最多参加 <b>4 场奖励战争</b>（四份 5%）。没有投票或完全平局的战争<b>作废</b>：无人获胜，也不消耗任何份额。</p>`],
['chest', '战争金库规则', `
<ul><li>战争金库为供应量的 20%，在发射时锁定在 TribeWars 合约中。</li>
<li>它分为四份 5%，每场奖励战争使用一份。</li>
<li>没有任何函数可以提取它：创建者不行，TRIBE 不行，任何人都不行。代币只会作为奖励发放给获胜部落的持有者。</li>
<li>如果创建者从不参加部落战争，战争金库将永久锁定。</li>
<li>奖励没有过期时间。</li></ul>`],
['fair', '如何防止操纵', `
<table class="dtable"><tr><th>攻击方式</th><th>为什么无效</th></tr>
<tr><td>把一份筹码拆到 10,000 个钱包</td><td>权重就是持币量。10,000 个钱包合计持有 100 万，权重仍然正好是 100 万。</td></tr>
<tr><td>投票前大量买入</td><td>快照在挑战创建时记录，此时还没人知道会有战争。之后买入的代币既没有票数也没有奖励。</td></tr>
<tr><td>投票后把代币转到新钱包再投一次</td><td>每个地址每方只能用快照余额投票一次。新钱包在快照时余额为零。</td></tr>
<tr><td>用流动性池或战争金库投票</td><td>流动性池、战争金库和销毁地址不计入供应量、投票和奖励。</td></tr>
<tr><td>靠巨大供应量的代币获胜</td><td>得分是流通供应量的比例，而不是原始代币数量。</td></tr>
<tr><td>战争结束后买入获胜代币来刷奖励</td><td>奖励按快照余额计算，后来的买家一无所获。</td></tr>
<tr><td>借用投票权</td><td>委托功能已禁用。票数始终等于持有者自己的余额。</td></tr></table>`],
['realtribe', '真实部落（Real Tribe）', `
<p>在表情包代币中，许多代币使用同一个代号，很难分辨哪一个拥有真正的社区。<b>真实部落</b>正是为此而生。它向 Robinhood Chain 上的所有代币开放，包括不是在 TRIBE 上发射的代币。它只提供信息：它与部落战争相互独立，不会替你做任何决定。</p>
<p>使用相同代号的代币会被归为一组，并按 <b>0 到 100 的社区评分</b>排名：</p>
<table class="dtable"><tr><th>部分</th><th>分值</th><th>衡量内容</th></tr>
<tr><td>真实持有者</td><td>30</td><td>持有至少 20 美元且超过 7 天的钱包。</td></tr>
<tr><td>分散度</td><td>20</td><td>前 10 大钱包以外的供应量占比。</td></tr>
<tr><td>持有时长</td><td>15</td><td>持有者平均持有代币的天数。</td></tr>
<tr><td>老钱包</td><td>15</td><td>钱包有 30 天以上历史的持有者。</td></tr>
<tr><td>点名签到</td><td>10</td><td>本月签署“我是这个部落的一员”的持有者。</td></tr>
<tr><td>干净发射</td><td>10</td><td>即捆绑评分。</td></tr></table>
<p><b>捆绑评分（0 到 100，越高越健康）：</b>随关联钱包在发射区块买入的供应量比例以及狙击者比例而下降。由同一来源资助的钱包计为一个。</p>
<p><b>结论：</b>只有得分 50 以上且领先 10 分以上的第一名才会获得<i>真实部落</i>标志。差距更小则显示为<i>有争议</i>。最高分低于 50 表示尚无明确社区。每项原始数据都会显示在评分旁边，方便你自行判断。</p>
<p>使用合约地址、代号和名称即可<b>登记</b>任何代币。你自己在 TRIBE 上发射的代币一键即可登记。</p>`],
['contracts', '智能合约', `
<ul><li><b>TribeToken：</b>固定供应量的 ERC-20。创建时将 80% 铸造到流动性地址，20% 铸造到 TribeWars。余额按时间戳建立检查点，因此可以读取历史余额；委托功能已禁用，每份余额就是自己的投票权。</li>
<li><b>TribeWars：</b>发射代币、保管战争金库，并执行挑战、接受、投票、结算和按归属领取。它没有所有者，也没有提取函数。</li>
<li><b>测试：</b>合约通过了自动化测试，涵盖发射分配、女巫攻击、狙击与重复投票攻击、供应量标准化、作废战争、4 场战争上限、金库精确核算以及 30 天归属。</li></ul>`],
['status', '当前状态', `
<ul><li><b>本网站为演示版。</b>部落、价格、交易、战争和真实部落数据均为示例数据或模拟。已发射的部落、其链接和真实部落登记保存在 TRIBE 服务器上，所有访客都能看到；交易、加入和战争投票只保存在你的浏览器中。标记为 DEMO 的操作不会发送任何区块链交易。</li>
<li><b>合约已编写并测试，但尚未部署，</b>也尚未经过外部安全审计。</li>
<li><b>下一步：</b>外部审计、部署到 Robinhood Chain、将网站接入合约，以及为真实部落评分上线实时索引器。</li></ul>`],
['faq', '常见问题', `
<p><b>创建者会获得代币吗？</b>不会。创建者分配为 0%。</p>
<p><b>创建者能拿走战争金库吗？</b>不能，任何人都不能。它只会支付给获胜部落的持有者。</p>
<p><b>我必须投票才能获得奖励吗？</b>不必。快照时持有获胜代币的每位持有者都能分得一份。投票可以帮助你的部落获胜。</p>
<p><b>如果我是在挑战之后买入的呢？</b>这些代币在该场战争中不能投票，也没有奖励。</p>
<p><b>一个部落能打多少场战争？</b>四场奖励战争，每场一份 5%。</p>
<p><b>平局怎么办？</b>战争作废，不消耗任何份额。</p>
<p><b>真实部落是一种保证吗？</b>不是。它只是关于社区的数据。请务必自行研究。</p>
<p><b>支持哪些语言？</b>英文、中文和韩文。可在任意页面底部切换。</p>`],
['glossary', '术语表', `
<dl class="kv"><dt>部落</dt><dd>在 TRIBE 上发射的代币及其社区。</dd>
<dt>战争金库</dt><dd>为部落战争奖励锁定的 20% 供应量，分为四份 5%。</dd>
<dt>份额</dt><dd>战争金库中的一份 5%，在一场战争中押上。</dd>
<dt>快照</dt><dd>为一场战争读取余额的时刻：挑战创建之时。</dd>
<dt>流通供应量</dt><dd>总供应量减去流动性池、战争金库和销毁地址。</dd>
<dt>归属</dt><dd>奖励先立即解锁 1%，然后在 30 天内按天解锁。</dd>
<dt>捆绑</dt><dd>关联钱包在发射时买入大量供应量。</dd>
<dt>部落战力</dt><dd>由成员、活跃度和战争胜利构成的评分，用于排行榜。</dd></dl>`],
['risk', '风险与免责声明', `
<p>加密代币波动剧烈，可能损失全部价值。即使经过测试，智能合约仍可能存在漏洞。真实部落评分仅为信息，不构成投资建议或任何保证。请只使用你能承受损失的资金，并始终自行研究。</p>`],
]},

ko: { title: 'TRIBE 문서', intro: 'TRIBE에 대한 모든 것: 무엇인지, 왜 만들었는지, 각 기능이 어떻게 작동하는지, 그리고 지금 무엇이 운영 중인지.', toc: '목차', sections: [
['overview', 'TRIBE란?', `
<p><b>TRIBE는 커뮤니티를 중심으로 한 토큰 런치패드입니다.</b> TRIBE에서 런칭된 모든 토큰은 <i>트라이브</i>, 즉 토큰과 그 토큰을 보유한 사람들입니다. 트라이브는 성장하고, 거래되고, <b>트라이브 워</b>에서 서로 경쟁하며, <b>리얼 트라이브</b>에서 진짜임을 증명합니다.</p>
<p>대부분의 런치패드는 "토큰 생성"에서 끝나지만 TRIBE는 거기서 시작합니다. 실제로 참여하는 커뮤니티에 보상하고, 가짜 과열을 비싸게 만드는 것이 목표입니다.</p>
<ul><li><b>네트워크:</b> Robinhood Chain (Arbitrum 기반 이더리움 레이어 2, 체인 ID 4663, 가스는 ETH로 지불).</li>
<li><b>대상:</b> 밈·커뮤니티 토큰 창작자, 진짜 커뮤니티를 지지하려는 홀더, 인기 티커 중 어느 토큰이 진짜인지 알고 싶은 트레이더.</li></ul>`],
['why', '왜 TRIBE인가: 장점', `
<ul>
<li><b>창작자 할당 없음.</b> 창작자는 공급량의 0%를 받습니다. 80%는 유동성 풀에, 20%는 커뮤니티를 위해 워 체스트에 잠깁니다. 덤핑할 팀 물량이 없습니다.</li>
<li><b>보상은 내부자가 아닌 홀더에게.</b> 워 체스트는 트라이브 워에서 승리한 트라이브의 홀더에게만 지급될 수 있습니다. 창작자를 포함해 누구도 인출할 수 없습니다.</li>
<li><b>조작에 강한 투표.</b> 투표는 숨겨진 스냅샷 시점의 보유량으로 가중됩니다. 토큰을 수천 개 지갑으로 쪼개도 표가 늘지 않고, 전쟁이 알려진 뒤 매수한 토큰은 집계되지 않습니다.</li>
<li><b>리얼 트라이브의 투명성.</b> 여러 토큰이 같은 티커를 쓸 때, 리얼 트라이브는 어느 토큰에 진짜 커뮤니티가 있는지 모든 원자료와 클린 런칭(번들) 점수와 함께 보여 줍니다.</li>
<li><b>재미있는 설계.</b> 마스코트, 트라이브 레벨, 미션, XP, 전쟁이 토큰 보유를 팀의 일원이 되는 경험으로 바꿉니다.</li>
</ul>`],
['start', '빠른 시작', `
<ol>
<li><b>지갑 연결.</b> <i>지갑 연결</i>을 누르세요. Robinhood Chain에서 브라우저 지갑(MetaMask, Rabby 등 EVM 지갑)을 쓰거나, <i>데모 모드</i>로 시뮬레이션 지갑을 사용해 모든 기능을 체험할 수 있습니다.</li>
<li><b>둘러보기.</b> <i>트라이브</i>를 둘러보고, <i>마켓</i>에서 가격을, <i>리더보드</i>에서 순위를 확인하세요.</li>
<li><b>런칭.</b> <i>런칭</i>을 열고 8단계를 따르세요: 이름, 티커, 마스코트, 색상, 설명과 링크, 토큰 공급량, 검토, 런칭.</li>
<li><b>거래.</b> <i>마켓</i>에서 아무 토큰이나 열고 매수 또는 매도하세요.</li>
<li><b>전투.</b> <i>전쟁</i>에서 한쪽을 선택하거나 트라이브 페이지에서 다른 트라이브에 도전하세요.</li>
<li><b>확인.</b> 매수 전에 <i>리얼 트라이브</i>에서 티커를 확인하세요.</li>
</ol>`],
['launch', '토큰 런칭', `
<p>런칭 마법사는 8단계로 구성되며 트라이브 카드를 실시간으로 미리 보여 줍니다:</p>
<ol><li><b>이름</b> (3~24자).</li><li><b>티커</b> (영문자 또는 숫자 2~8자, TRIBE에서 고유).</li><li><b>마스코트</b>: 템플릿을 고르거나 이미지를 업로드 (PNG, JPG, WebP, 최대 800 KB).</li><li><b>색상</b>: 카드, 프로필, 전쟁 배너에 쓰일 팔레트.</li><li><b>설명과 링크</b>: 짧은 설명과 선택 사항인 X 계정, 웹사이트, 텔레그램. 링크는 검사되며 유효한 https 주소만 허용됩니다.</li><li><b>토큰 공급량</b>: 1억, 10억 또는 100억.</li><li>모든 내용 <b>검토</b>.</li><li><b>런칭</b>.</li></ol>
<p>런칭 후 트라이브는 자체 페이지, 마켓 목록, 거래 페이지를 갖게 됩니다. 링크는 언제든 수정할 수 있습니다.</p>`],
['pairs', '주식 페어', `
<p>Robinhood Chain에는 토큰화된 주식과 ETF가 있습니다. TRIBE에서는 트라이브의 풀을 ETH 대신 이들 중 하나와 페어로 만들 수 있어, 구매자는 실물 자산으로 결제하고 풀도 그 자산을 보유합니다.</p>
<ul><li><b>런칭 시 페어 선택</b> (6단계): ETH 또는 NVDA, TSLA, AAPL, META, COIN, MSTR, SPY, QQQ, GLD.</li>
<li><b>매수와 매도</b>는 페어 자산으로 이루어집니다. $BANANA / NVDA 풀은 NVDA를 받고 NVDA로 지급합니다.</li>
<li><b>실시간 가격.</b> 주식 가격은 Robinhood Chain의 각 주식 풀에서 읽어 1분마다 갱신됩니다. 시가총액은 달러로 표시되어 ETH 페어와 주식 페어를 바로 비교할 수 있습니다.</li>
<li><b>페어는 런칭 후 고정</b>되어 바꿀 수 없습니다.</li>
<li><b>마켓 필터</b>로 전체, ETH 페어, 주식 페어를 볼 수 있습니다.</li></ul>
<p>토큰화된 주식은 기초 주식 가격을 따르므로 주식 페어 트라이브도 그 주식과 함께 움직입니다. 데모 모드에서는 각 주식을 약 3,000달러어치 받아 거래를 체험할 수 있으며 온체인으로는 아무것도 전송되지 않습니다.</p>`],
['tokenomics', '토크노믹스', `
<table class="dtable"><tr><th>할당</th><th>비율</th><th>용도</th></tr>
<tr><td>유동성 풀</td><td>80%</td><td>거래 풀을 채워 첫 순간부터 토큰을 거래할 수 있게 합니다.</td></tr>
<tr><td>워 체스트</td><td>20%</td><td>TribeWars 컨트랙트에 5% 지분 4개로 잠깁니다. 트라이브 워에서 승리한 트라이브의 홀더에게만 지급됩니다.</td></tr>
<tr><td>창작자</td><td>0%</td><td>창작자에게는 할당이 없습니다.</td></tr></table>
<p>공급량 10억 기준 예시: 8억은 풀로, 2억은 워 체스트로 가며, 전쟁 한 번당 하나씩 쓰이는 5천만 지분 4개로 나뉩니다.</p>`],
['tribes', '트라이브, 트라이브 파워, 레벨과 미션', `
<ul><li><b>트라이브 페이지:</b> 마스코트, 티커, 레벨, 멤버, 트레저리, 활동, 트라이브 파워, 설명, 링크, 커뮤니티 활동, 진행 중인 전쟁, 그리고 가입·거래·공유·도전 버튼.</li>
<li><b>트라이브 파워</b>는 멤버, 활동, 전쟁 승리로 성장합니다. <b>리더보드</b> 순위를 정하며, 리더보드는 멤버·활동·최신순으로도 정렬할 수 있습니다.</li>
<li><b>미션</b>은 프로필에 XP를 줍니다: 트라이브 런칭, 트라이브 가입, 전쟁 참여, 멤버 초대, 트라이브 3곳 둘러보기, 첫 온체인 활동 완료(실제 지갑은 Robinhood Chain에서 확인). 400 XP마다 레벨이 오릅니다.</li>
<li><b>내 프로필</b>은 지갑, 레벨, 토큰 잔액, 내가 런칭하고 가입한 트라이브, 참여한 전쟁을 보여 줍니다.</li></ul>`],
['market', '마켓과 거래', `
<p><b>마켓</b>은 모든 트라이브 토큰의 가격, 24시간 변동, 시가총액, 거래량, 24시간 차트를 보여 줍니다. 검색하고 인기, 상승률, 시가총액, 거래량, 최신순으로 정렬할 수 있습니다.</p>
<p>각 토큰에는 차트, 시가총액, 유동성, 거래량, 공급량, 최근 거래, 매수/매도 박스가 있는 <b>거래 페이지</b>가 있습니다. 가격은 토큰의 유동성 풀(상수곱, x × y = k)에서 나옵니다. 모든 거래에는 <b>1% 수수료</b>가 붙습니다. 확정 전에 받을 수량과 <b>가격 영향</b>이 표시됩니다.</p>`],
['wars', '트라이브 워', `
<p>트라이브 워는 두 트라이브 간의 72시간 투표입니다. 홀더들이 <b>유통 공급량 대비 더 큰 비율</b>로 투표한 트라이브가 승리하고, 그 홀더들은 워 체스트 지분 두 개, 즉 <b>자신의 5%와 패배 측의 5%</b>를 받습니다. 패배 측 홀더는 아무것도 받지 못합니다.</p>
<ol><li><b>도전.</b> 트라이브 창작자가 다른 트라이브에 도전합니다. <b>이 순간 모든 홀더의 잔액 스냅샷이 찍힙니다.</b></li>
<li><b>수락.</b> 상대 트라이브의 창작자는 2일 안에 수락해야 합니다. 그렇지 않으면 도전은 만료되고 누구나 정리할 수 있습니다.</li>
<li><b>투표.</b> 3일 동안 홀더들은 스냅샷 시점에 보유한 토큰의 트라이브에 투표합니다. 투표 가중치는 그 스냅샷 잔액입니다.</li>
<li><b>확정.</b> 투표가 끝나면 누구나 확정할 수 있습니다. 점수 = 투표수 ÷ 스냅샷 시점의 유통 공급량이므로, 공급량과 가격이 다른 토큰도 참여율로 공정하게 겨룹니다.</li>
<li><b>청구.</b> 스냅샷 시점에 승리 토큰을 보유한 모든 홀더는 투표 여부와 관계없이 스냅샷 잔액에 비례해 청구할 수 있습니다.</li></ol>
<p><b>베스팅:</b> 전쟁에서 이기면 각 보상의 1%를 즉시 청구할 수 있습니다. 나머지 99%는 30일 동안 매일 같은 양씩 풀립니다. 청구에는 만료가 없습니다.</p>
<p><b>제한:</b> 각 트라이브는 최대 <b>4번의 보상 전쟁</b>(5% 지분 4개)에 참여할 수 있습니다. 투표가 없거나 완전 동점인 전쟁은 <b>무효</b>이며, 승자도 없고 지분도 쓰이지 않습니다.</p>`],
['chest', '워 체스트 규칙', `
<ul><li>워 체스트는 공급량의 20%로, 런칭 시 TribeWars 컨트랙트에 잠깁니다.</li>
<li>보상 전쟁 한 번당 하나씩 쓰이는 5% 지분 4개로 나뉩니다.</li>
<li>어떤 함수로도 인출할 수 없습니다. 창작자도, TRIBE도, 누구도 불가능합니다. 토큰은 승리한 트라이브 홀더에게 보상으로만 나갑니다.</li>
<li>창작자가 트라이브 워에 한 번도 참여하지 않으면 워 체스트는 영원히 잠겨 있습니다.</li>
<li>보상에는 만료일이 없습니다.</li></ul>`],
['fair', '조작을 막는 방법', `
<table class="dtable"><tr><th>공격</th><th>실패하는 이유</th></tr>
<tr><td>한 물량을 10,000개 지갑으로 쪼개기</td><td>가중치는 토큰 잔액입니다. 10,000개 지갑이 합계 100만을 보유해도 가중치는 정확히 100만입니다.</td></tr>
<tr><td>투표 직전에 대량 매수</td><td>스냅샷은 도전이 생성될 때, 즉 아무도 전쟁을 모를 때 찍힙니다. 이후 매수한 토큰은 투표권도 보상도 없습니다.</td></tr>
<tr><td>투표 후 새 지갑으로 옮겨 다시 투표</td><td>각 주소는 한쪽에 한 번, 스냅샷 잔액으로만 투표합니다. 새 지갑은 스냅샷 때 잔액이 없었습니다.</td></tr>
<tr><td>풀이나 워 체스트로 투표</td><td>풀, 워 체스트, 소각 주소는 공급량, 투표, 보상에서 제외됩니다.</td></tr>
<tr><td>공급량이 거대한 토큰으로 승리</td><td>점수는 원시 토큰 수가 아니라 유통 공급량 대비 비율입니다.</td></tr>
<tr><td>전쟁 후 승리 토큰을 사서 보상 파밍</td><td>보상은 스냅샷 잔액 기준이므로 나중에 산 사람은 받지 못합니다.</td></tr>
<tr><td>투표권 빌려주기</td><td>위임이 비활성화되어 있습니다. 투표권은 항상 본인 잔액과 같습니다.</td></tr></table>`],
['realtribe', '리얼 트라이브', `
<p>밈코인에서는 많은 토큰이 같은 티커를 쓰기 때문에 어느 쪽에 진짜 커뮤니티가 있는지 알기 어렵습니다. <b>리얼 트라이브</b>가 그 답을 줍니다. TRIBE에서 런칭하지 않은 토큰을 포함해 Robinhood Chain의 모든 토큰에 열려 있으며, 정보만 제공합니다. 트라이브 워와는 별개이며 대신 결정을 내려 주지 않습니다.</p>
<p>같은 티커의 토큰들은 묶여서 <b>0~100점의 커뮤니티 점수</b>로 순위가 매겨집니다:</p>
<table class="dtable"><tr><th>항목</th><th>배점</th><th>측정 내용</th></tr>
<tr><td>실제 홀더</td><td>30</td><td>20달러 이상을 7일 넘게 보유한 지갑.</td></tr>
<tr><td>분산도</td><td>20</td><td>상위 10개 지갑 밖에 있는 공급량 비율.</td></tr>
<tr><td>보유 기간</td><td>15</td><td>홀더의 평균 보유 일수.</td></tr>
<tr><td>오래된 지갑</td><td>15</td><td>지갑 이력이 30일 이상인 홀더.</td></tr>
<tr><td>롤콜</td><td>10</td><td>이번 달 "나는 이 트라이브의 일원입니다"에 서명한 홀더.</td></tr>
<tr><td>클린 런칭</td><td>10</td><td>번들 점수.</td></tr></table>
<p><b>번들 점수 (0~100, 높을수록 건강):</b> 연결된 지갑이 런칭 블록에서 매수한 공급량 비율과 스나이퍼 비율에 따라 낮아집니다. 한 곳에서 자금을 받은 지갑들은 하나로 계산합니다.</p>
<p><b>판정:</b> <i>리얼 트라이브</i>는 점수 50 이상이면서 10점 이상 앞선 1위 토큰에게만 주어집니다. 차이가 더 작으면 <i>경합 중</i>으로 표시됩니다. 최고 점수가 50 미만이면 아직 뚜렷한 커뮤니티가 없다는 뜻입니다. 모든 원자료가 점수 옆에 표시되므로 직접 판단할 수 있습니다.</p>
<p>컨트랙트 주소, 티커, 이름으로 어떤 토큰이든 <b>등록</b>할 수 있습니다. TRIBE에서 직접 런칭한 토큰은 한 번의 탭으로 등록됩니다.</p>`],
['contracts', '스마트 컨트랙트', `
<ul><li><b>TribeToken:</b> 공급량이 고정된 ERC-20. 생성 시 80%를 유동성 주소로, 20%를 TribeWars로 발행합니다. 잔액은 타임스탬프 기준 체크포인트로 기록되어 과거 잔액을 읽을 수 있고, 위임이 비활성화되어 모든 잔액이 곧 자기 투표권입니다.</li>
<li><b>TribeWars:</b> 토큰을 런칭하고, 워 체스트를 보관하며, 도전·수락·투표·확정·베스팅 청구를 처리합니다. 소유자도, 인출 함수도 없습니다.</li>
<li><b>테스트:</b> 컨트랙트는 런칭 분배, 시빌·스나이핑·이중 투표 공격, 공급량 정규화, 무효 전쟁, 4회 전쟁 한도, 체스트 정확한 정산, 30일 베스팅을 다루는 자동화 테스트를 통과합니다.</li></ul>`],
['status', '현재 상태', `
<ul><li><b>이 웹사이트는 데모입니다.</b> 트라이브, 가격, 거래, 전쟁, 리얼 트라이브 지표는 예시 데이터이거나 시뮬레이션입니다. 런칭된 트라이브, 링크, 리얼 트라이브 등록은 TRIBE 서버에 저장되어 모든 방문자가 볼 수 있고, 거래·가입·전쟁 투표는 브라우저에만 저장됩니다. DEMO 표시가 있는 동작은 블록체인 거래를 보내지 않습니다.</li>
<li><b>컨트랙트는 작성과 테스트를 마쳤지만 아직 배포되지 않았으며,</b> 외부 보안 감사도 받지 않았습니다.</li>
<li><b>다음 단계:</b> 외부 감사, Robinhood Chain 배포, 사이트와 컨트랙트 연결, 리얼 트라이브 점수를 위한 실시간 인덱서.</li></ul>`],
['faq', '자주 묻는 질문', `
<p><b>창작자가 토큰을 받나요?</b> 아니요. 창작자 할당은 0%입니다.</p>
<p><b>창작자가 워 체스트를 가져갈 수 있나요?</b> 아니요. 누구도 할 수 없습니다. 승리한 트라이브의 홀더에게만 지급됩니다.</p>
<p><b>보상을 받으려면 투표해야 하나요?</b> 아니요. 스냅샷 시점에 승리 토큰을 보유한 모든 홀더가 몫을 받습니다. 투표는 트라이브의 승리를 돕습니다.</p>
<p><b>도전 이후에 샀다면요?</b> 그 토큰은 해당 전쟁에서 투표권도 보상도 없습니다.</p>
<p><b>트라이브는 전쟁을 몇 번 할 수 있나요?</b> 보상 전쟁 4번, 한 번에 5% 지분 하나씩입니다.</p>
<p><b>동점이면요?</b> 전쟁은 무효가 되고 지분은 쓰이지 않습니다.</p>
<p><b>리얼 트라이브가 보증인가요?</b> 아니요. 커뮤니티에 관한 데이터일 뿐입니다. 항상 직접 조사하세요.</p>
<p><b>어떤 언어를 지원하나요?</b> 영어, 중국어, 한국어입니다. 모든 페이지 하단에서 바꿀 수 있습니다.</p>`],
['glossary', '용어집', `
<dl class="kv"><dt>트라이브</dt><dd>TRIBE에서 런칭된 토큰과 그 커뮤니티.</dd>
<dt>워 체스트</dt><dd>트라이브 워 보상을 위해 잠긴 공급량 20%, 5% 지분 4개.</dd>
<dt>지분</dt><dd>한 번의 전쟁에 걸리는 워 체스트의 5% 한 조각.</dd>
<dt>스냅샷</dt><dd>전쟁을 위해 잔액을 읽는 시점: 도전이 생성될 때.</dd>
<dt>유통 공급량</dt><dd>총 공급량에서 풀, 워 체스트, 소각 주소를 뺀 양.</dd>
<dt>베스팅</dt><dd>보상은 1%가 즉시, 이후 30일 동안 매일 풀립니다.</dd>
<dt>번들</dt><dd>연결된 지갑들이 런칭 때 공급량의 큰 몫을 사들이는 것.</dd>
<dt>트라이브 파워</dt><dd>멤버, 활동, 전쟁 승리로 만든 점수로, 리더보드에 쓰입니다.</dd></dl>`],
['risk', '위험 고지 및 면책', `
<p>암호화폐 토큰은 변동성이 크며 모든 가치를 잃을 수 있습니다. 스마트 컨트랙트는 테스트 후에도 버그가 있을 수 있습니다. 리얼 트라이브 점수는 정보일 뿐 투자 조언이나 보증이 아닙니다. 잃어도 되는 자금만 사용하고 항상 직접 조사하세요.</p>`],
]},
};
