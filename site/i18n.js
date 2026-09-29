/* UI translation. Pages are rendered in English; this layer rewrites visible text nodes
   and a few attributes after every change, so templates stay untouched.
   dict: exact English -> [Chinese, Korean]. patterns: dynamic strings with numbers/names. */
const I18N = {
  langs: { en: 'English', zh: '中文', ko: '한국어' },
  dict: {
    // navigation, header, footer
    'Home': ['首页', '홈'], 'Launch': ['发射', '런칭'], 'Tribes': ['部落', '트라이브'], 'Market': ['市场', '마켓'],
    'Real Tribe': ['真实部落', '리얼 트라이브'], 'Leaderboard': ['排行榜', '리더보드'], 'Wars': ['战争', '전쟁'], 'Missions': ['任务', '미션'],
    'Docs': ['文档', '문서'], 'Tribe Wars': ['部落战争', '트라이브 워'], 'My Profile': ['我的主页', '내 프로필'], 'My profile': ['我的主页', '내 프로필'],
    'Connect Wallet': ['连接钱包', '지갑 연결'], 'Connect wallet': ['连接钱包', '지갑 연결'], 'Main': ['主导航', '메인'], 'Open menu': ['打开菜单', '메뉴 열기'],
    'Search tribes or tokens...': ['搜索部落或代币...', '트라이브 또는 토큰 검색...'], 'Search tribes or tokens': ['搜索部落或代币', '트라이브 또는 토큰 검색'],
    'TRIBE home': ['TRIBE 首页', 'TRIBE 홈'], 'Robinhood Chain network details': ['Robinhood Chain 网络详情', 'Robinhood Chain 네트워크 정보'],
    'Built on Robinhood Chain': ['基于 Robinhood Chain 构建', 'Robinhood Chain 기반'], 'GOOD TRIBES': ['好部落', '좋은 트라이브는'], 'BUILD GREAT THINGS.': ['成就伟大。', '위대한 것을 만든다.'],
    'Prototype · Tribe data is sample data · Actions marked DEMO are stored in this browser only and send no blockchain transactions.': ['原型 · 部落数据为示例数据 · 标记为 DEMO 的操作仅保存在此浏览器中，不会发送任何区块链交易。', '프로토타입 · 트라이브 데이터는 예시입니다 · DEMO 표시 동작은 이 브라우저에만 저장되며 블록체인 거래를 보내지 않습니다.'],
    'Language': ['语言', '언어'],
    // home
    'THE ULTIMATE LAUNCHPAD': ['终极发射平台', '궁극의 런치패드'], 'Launch a token.': ['发射代币。', '토큰을 런칭하고.'], 'Build a tribe.': ['建立部落。', '트라이브를 만드세요.'],
    'Create your own token, grow your community, and compete with other tribes on Robinhood Chain.': ['创建你自己的代币，壮大你的社区，并在 Robinhood Chain 上与其他部落竞争。', '나만의 토큰을 만들고, 커뮤니티를 키우고, Robinhood Chain에서 다른 트라이브와 경쟁하세요.'],
    'Launch Your Tribe': ['发射你的部落', '트라이브 런칭'], 'Explore Tribes': ['探索部落', '트라이브 둘러보기'], 'Explore tribes': ['探索部落', '트라이브 둘러보기'],
    'Create': ['创建', '만들기'], 'Launch your token': ['发射你的代币', '토큰 런칭'], 'Grow': ['成长', '성장'], 'Build your tribe': ['建立你的部落', '트라이브 키우기'],
    'Compete': ['竞争', '경쟁'], 'Join tribe wars': ['参加部落战争', '트라이브 워 참여'], 'DIFFERENT': ['不同的', '서로 다른'], 'TRIBES.': ['部落。', '트라이브.'], 'SAME CHAIN.': ['同一条链。', '같은 체인.'],
    'Trending Tribes': ['热门部落', '인기 트라이브'], 'The most active tribes on Robinhood Chain.': ['Robinhood Chain 上最活跃的部落。', 'Robinhood Chain에서 가장 활발한 트라이브.'], 'View All': ['查看全部', '전체 보기'],
    'TRIBE WAR': ['部落战争', '트라이브 워'], 'Two tribes. One winner. Who will claim the crown?': ['两个部落，一个赢家。谁将摘得桂冠？', '두 트라이브, 한 승자. 누가 왕관을 차지할까요?'], 'Join the War': ['加入战争', '전쟁 참여'],
    'WAR REWARDS': ['战争奖励', '전쟁 보상'], 'More visibility': ['更高曝光', '더 많은 노출'], 'Exclusive badges': ['专属徽章', '전용 배지'], 'Higher tribe level': ['更高部落等级', '더 높은 트라이브 레벨'],
    'Top Tribes': ['顶级部落', '상위 트라이브'], 'Based on Tribe Power': ['基于部落战力', '트라이브 파워 기준'], 'View Leaderboard': ['查看排行榜', '리더보드 보기'],
    'THE CULTURE FACTORY': ['文化工厂', '컬처 팩토리'], 'More than tokens.': ['不只是代币。', '토큰 그 이상.'], "It's a movement.": ['这是一场运动。', '하나의 움직임입니다.'],
    'Choose a template, customize your tribe, and bring your idea to life.': ['选择模板，定制你的部落，让你的想法成真。', '템플릿을 고르고, 트라이브를 꾸미고, 아이디어를 현실로 만드세요.'], 'Create Your Tribe': ['创建你的部落', '트라이브 만들기'], 'YOURS NEXT': ['下一个就是你', '다음은 당신'],
    // tribes / tribe page
    'Every tribe on TRIBE, from the OG crews to brand-new launches. Tap a card to see its members, treasury and wars.': ['TRIBE 上的每个部落，从元老团队到全新发射。点击卡片查看成员、金库和战争。', 'OG 크루부터 새로 런칭한 곳까지 TRIBE의 모든 트라이브. 카드를 눌러 멤버, 트레저리, 전쟁을 확인하세요.'],
    'Filter by name or $TICKER': ['按名称或 $代号筛选', '이름 또는 $티커로 필터'], 'Filter tribes': ['筛选部落', '트라이브 필터'], 'Tribe Power': ['部落战力', '트라이브 파워'], 'Most Members': ['成员最多', '멤버 많은 순'], 'Most Active': ['最活跃', '활동 많은 순'], 'Newest': ['最新', '최신순'],
    'Members': ['成员', '멤버'], 'Treasury': ['金库', '트레저리'], 'Activity': ['活跃度', '활동'], 'Join Tribe': ['加入部落', '트라이브 가입'], '✓ Member': ['✓ 成员', '✓ 멤버'], 'Leave': ['退出', '탈퇴'], 'Share': ['分享', '공유'],
    'Challenge Tribe': ['挑战部落', '트라이브 도전'], 'About the tribe': ['关于部落', '트라이브 소개'], 'No description yet.': ['暂无描述。', '아직 설명이 없습니다.'], 'Community activity': ['社区动态', '커뮤니티 활동'],
    'Members, activity and war wins': ['成员、活跃度和战争胜利', '멤버, 활동, 전쟁 승리'], 'Active war': ['进行中的战争', '진행 중인 전쟁'], 'Open war': ['打开战争', '전쟁 열기'], 'Tribe missions': ['部落任务', '트라이브 미션'],
    'Post a tribe meme': ['发布部落表情包', '트라이브 밈 올리기'], 'Recruit 5 members': ['招募 5 名成员', '멤버 5명 모집'], 'Win a Tribe War': ['赢得部落战争', '트라이브 워 승리'], 'All missions': ['全部任务', '전체 미션'],
    'DEMO TRIBE': ['演示部落', '데모 트라이브'], 'Token': ['代币', '토큰'], 'not deployed yet': ['尚未部署', '아직 배포 전'], 'Creator:': ['创建者：', '창작자:'], 'Tribe not found': ['未找到部落', '트라이브를 찾을 수 없음'],
    'joined the tribe': ['加入了部落', '님이 트라이브에 가입'], 'Tribe Power rose to': ['部落战力升至', '트라이브 파워 상승:'], 'Rallied 120 members for the next Tribe War': ['为下一场部落战争集结了 120 名成员', '다음 트라이브 워를 위해 멤버 120명 결집'],
    'just now': ['刚刚', '방금'], 'Edit links': ['编辑链接', '링크 수정'], '+ Add X, website, Telegram': ['+ 添加 X、网站、Telegram', '+ X, 웹사이트, 텔레그램 추가'], 'Register in Real Tribe': ['登记到真实部落', '리얼 트라이브에 등록'],
    'The OG potassium-powered crew. Banana holders meme hard, vote fast, and never slip on a raid.': ['元老级钾能量团队。香蕉持有者玩梗凶猛、投票迅速，突袭时从不失手。', '칼륨으로 무장한 원조 크루. 바나나 홀더는 밈에 진심이고, 투표는 빠르며, 레이드에서 미끄러지지 않습니다.'],
    'Every slice counts. Pizza Tribe shares the treasury like a Friday night box, and nobody takes the last piece.': ['每一片都算数。披萨部落像周五夜晚的披萨盒一样分享金库，没人拿最后一块。', '한 조각도 소중합니다. 피자 트라이브는 금요일 밤 피자처럼 트레저리를 나누고, 마지막 조각은 아무도 안 가져갑니다.'],
    'Chill pond energy with a loud chorus. Frogs hop between missions and croak the loudest in every war.': ['悠闲的池塘氛围，响亮的合唱。青蛙在任务间跳跃，在每场战争中叫得最响。', '느긋한 연못 분위기에 우렁찬 합창. 개구리들은 미션 사이를 뛰어다니며 전쟁마다 가장 크게 울어댑니다.'],
    'Calm on the surface, paddling hard underneath. Ducks build steadily and fly in formation.': ['水面平静，水下拼命划水。鸭子稳步建设，编队飞行。', '겉은 평온하고 물 밑에선 열심히 발을 젓습니다. 오리는 꾸준히 쌓아 올리고 대열을 지어 납니다.'],
    'Independent, stylish, and always landing on their feet. Cats show up late and still steal the spotlight.': ['独立、时髦，总能稳稳落地。猫咪来得晚，却依然抢尽风头。', '독립적이고 스타일리시하며 언제나 사뿐히 착지합니다. 고양이는 늦게 와도 주목을 독차지합니다.'],
    'Just landed on Robinhood Chain. Alien Tribe recruits from every galaxy and speaks fluent meme.': ['刚刚降落在 Robinhood Chain。外星人部落从各个星系招募成员，精通表情包语言。', '방금 Robinhood Chain에 착륙했습니다. 에일리언 트라이브는 모든 은하에서 멤버를 모으고 밈을 유창하게 합니다.'],
    // leaderboard
    'Tribes ranked by Tribe Power, the score that grows with members, activity and war wins.': ['按部落战力排名，该分数随成员、活跃度和战争胜利而增长。', '멤버, 활동, 전쟁 승리로 커지는 점수인 트라이브 파워 기준 순위.'],
    'All': ['全部', '전체'], 'Highest Tribe Power': ['部落战力最高', '트라이브 파워 높은 순'], 'Tribe': ['部落', '트라이브'], 'Level': ['等级', '레벨'], 'Created': ['创建时间', '생성일'], 'Power': ['战力', '파워'],
    // wars
    'Pick a side, rally your tribe and push its power bar before the countdown hits zero. Winners earn visibility, exclusive badges and a higher tribe level.': ['选择一方，集结你的部落，在倒计时归零前推高战力条。胜者获得曝光、专属徽章和更高的部落等级。', '편을 고르고 트라이브를 결집해 카운트다운이 끝나기 전에 파워 바를 밀어 올리세요. 승자는 노출, 전용 배지, 더 높은 트라이브 레벨을 얻습니다.'],
    'Start a war': ['发起战争', '전쟁 시작'], 'Participants': ['参与者', '참여자'], 'Ends in': ['剩余时间', '남은 시간'], 'Status': ['状态', '상태'], 'Ended': ['已结束', '종료'],
    'Start a Tribe War': ['发起部落战争', '트라이브 워 시작'], 'Pick the first tribe, then choose who it fights.': ['先选择一个部落，再选择它的对手。', '먼저 트라이브를 고르고, 상대를 선택하세요.'], 'Demo: the war is created in this browser only.': ['演示：战争仅在此浏览器中创建。', '데모: 전쟁은 이 브라우저에서만 생성됩니다.'],
    // missions
    'Complete missions to earn XP and level up your profile. Progress is saved in this browser.': ['完成任务赚取经验值，提升你的等级。进度保存在此浏览器中。', '미션을 완료해 XP를 얻고 프로필 레벨을 올리세요. 진행 상황은 이 브라우저에 저장됩니다.'],
    'Reset demo progress': ['重置演示进度', '데모 진행 초기화'], 'Create your first Tribe': ['创建你的第一个部落', '첫 트라이브 만들기'], 'Launch a tribe with the Launch wizard.': ['使用发射向导发射一个部落。', '런칭 마법사로 트라이브를 런칭하세요.'], 'Launch a tribe': ['发射部落', '트라이브 런칭'],
    'Join a Tribe War': ['参加部落战争', '트라이브 워 참여'], 'Pick a side in any active Tribe War.': ['在任意进行中的部落战争中选择一方。', '진행 중인 트라이브 워에서 한쪽을 선택하세요.'], 'Go to wars': ['前往战争', '전쟁으로 이동'],
    'Invite a member': ['邀请成员', '멤버 초대'], 'Copy your invite code and send it to a friend.': ['复制你的邀请码并发送给朋友。', '초대 코드를 복사해 친구에게 보내세요.'], 'Copy invite code': ['复制邀请码', '초대 코드 복사'],
    'Join a Tribe': ['加入部落', '트라이브 가입'], 'Become a member of any tribe on TRIBE.': ['成为 TRIBE 上任意部落的成员。', 'TRIBE의 아무 트라이브에나 멤버가 되세요.'], 'Browse tribes': ['浏览部落', '트라이브 보기'],
    'Scout 3 tribes': ['浏览 3 个部落', '트라이브 3곳 둘러보기'], 'Visit three different tribe pages.': ['访问三个不同的部落页面。', '서로 다른 트라이브 페이지 3곳을 방문하세요.'],
    'Complete your first onchain action': ['完成你的第一个链上操作', '첫 온체인 활동 완료'], 'Connect a real browser wallet on Robinhood Chain. We check that the address has sent at least one transaction.': ['在 Robinhood Chain 上连接真实的浏览器钱包。我们会检查该地址是否至少发送过一笔交易。', 'Robinhood Chain에 실제 브라우저 지갑을 연결하세요. 해당 주소가 거래를 한 번 이상 보냈는지 확인합니다.'],
    'Verify on Robinhood Chain': ['在 Robinhood Chain 上验证', 'Robinhood Chain에서 확인'], 'Needs a real wallet · Demo Mode can’t complete this': ['需要真实钱包 · 演示模式无法完成', '실제 지갑 필요 · 데모 모드로는 완료 불가'], 'Wallet connected': ['钱包已连接', '지갑 연결됨'],
    'Ready to claim': ['可以领取', '청구 가능'], '✓ Completed': ['✓ 已完成', '✓ 완료'],
    // launch wizard
    'Launch your tribe': ['发射你的部落', '트라이브 런칭'], 'Eight quick steps. Your card updates live as you go.': ['八个快速步骤。卡片会随你的操作实时更新。', '8개의 빠른 단계. 진행하는 동안 카드가 실시간으로 바뀝니다.'],
    'Name': ['名称', '이름'], 'Ticker': ['代号', '티커'], 'Mascot': ['吉祥物', '마스코트'], 'Colors': ['配色', '색상'], 'Describe': ['描述', '설명'], 'Review': ['检查', '검토'],
    'Live preview ✦': ['实时预览 ✦', '실시간 미리보기 ✦'], 'Back': ['返回', '뒤로'], 'Next': ['下一步', '다음'], 'Looks good': ['看起来不错', '좋아요'],
    'Choose a tribe name': ['选择部落名称', '트라이브 이름 정하기'], 'This is what everyone will see on cards, wars and the leaderboard.': ['这是所有人在卡片、战争和排行榜上看到的名称。', '카드, 전쟁, 리더보드에서 모두가 보게 될 이름입니다.'], 'Tribe name': ['部落名称', '트라이브 이름'], 'e.g. Taco Tribe': ['例如 Taco Tribe', '예: Taco Tribe'],
    'Pick your ticker': ['选择你的代号', '티커 정하기'], '2–8 letters or numbers. Tickers are unique on TRIBE.': ['2–8 个字母或数字。代号在 TRIBE 上唯一。', '영문자 또는 숫자 2–8자. 티커는 TRIBE에서 고유합니다.'],
    'Select a mascot': ['选择吉祥物', '마스코트 선택'], 'Start from a template or upload your own image (PNG, JPG or WebP, up to 800 KB).': ['从模板开始，或上传你自己的图片（PNG、JPG 或 WebP，最大 800 KB）。', '템플릿으로 시작하거나 이미지를 업로드하세요 (PNG, JPG, WebP, 최대 800 KB).'], 'Upload': ['上传', '업로드'],
    'Choose your colors': ['选择你的配色', '색상 고르기'], 'Your palette paints the tribe card, profile and war banner.': ['你的调色板会用于部落卡片、主页和战争横幅。', '팔레트가 트라이브 카드, 프로필, 전쟁 배너를 칠합니다.'],
    'Sunny': ['阳光', '써니'], 'Tomato': ['番茄', '토마토'], 'Swamp': ['沼泽', '늪'], 'Sky': ['天空', '하늘'], 'Grape': ['葡萄', '포도'], 'Bubblegum': ['泡泡糖', '풍선껌'], 'Mint': ['薄荷', '민트'], 'Midnight': ['午夜', '미드나잇'],
    'Banana': ['香蕉', '바나나'], 'Frog': ['青蛙', '개구리'], 'Pizza': ['披萨', '피자'], 'Duck': ['鸭子', '오리'], 'Cat': ['猫咪', '고양이'], 'Alien': ['外星人', '에일리언'], 'Blobby': ['团子', '블로비'],
    'Describe your tribe': ['描述你的部落', '트라이브 설명하기'], 'What does your tribe stand for? Keep it short and punchy.': ['你的部落代表什么？简短有力即可。', '트라이브가 추구하는 것은? 짧고 강렬하게.'], 'Description': ['描述', '설명'], 'Who is this tribe for?': ['这个部落适合谁？', '이 트라이브는 누구를 위한 곳인가요?'],
    'A tribe for night owls who ship at 3am.': ['为凌晨三点还在上线的夜猫子打造的部落。', '새벽 3시에 출시하는 올빼미들의 트라이브.'], 'Memes first, roadmap second.': ['先有梗，再有路线图。', '밈이 먼저, 로드맵은 그다음.'], 'We raid together, we win together.': ['一起突袭，一起胜利。', '함께 레이드하고, 함께 이깁니다.'],
    'Links': ['链接', '링크'], 'optional': ['可选', '선택'], 'X account': ['X 账号', 'X 계정'], 'Website': ['网站', '웹사이트'], 'Telegram': ['Telegram', '텔레그램'],
    'Set up your token': ['设置你的代币', '토큰 설정'], 'Total supply': ['总供应量', '총 공급량'], 'Liquidity pool (80%)': ['流动性池（80%）', '유동성 풀 (80%)'], 'War Chest (20%)': ['战争金库（20%）', '워 체스트 (20%)'], 'Per Tribe War (5%)': ['每场部落战争（5%）', '트라이브 워당 (5%)'], 'Creator': ['创建者', '창작자'],
    'Review your tribe': ['检查你的部落', '트라이브 검토'], 'Check everything before launch. You can jump back to any step.': ['发射前检查所有内容。你可以跳回任意步骤。', '런칭 전에 모두 확인하세요. 어느 단계로든 돌아갈 수 있습니다.'], 'Edit': ['编辑', '수정'], 'Network': ['网络', '네트워크'], 'None': ['无', '없음'],
    'One tap and your tribe joins the arena.': ['轻点一下，你的部落就进入竞技场。', '한 번의 탭으로 트라이브가 경기장에 입장합니다.'], 'This is a Demo Launch.': ['这是一次演示发射。', '데모 런칭입니다.'],
    "TRIBE contracts on Robinhood Chain aren't configured yet, so launching creates your tribe in this browser only. No token is deployed, no ETH is spent and no transaction is sent.": ['Robinhood Chain 上的 TRIBE 合约尚未配置，因此发射只会在此浏览器中创建你的部落。不会部署代币、不会花费 ETH，也不会发送交易。', 'Robinhood Chain의 TRIBE 컨트랙트가 아직 설정되지 않아 런칭하면 이 브라우저에만 트라이브가 생성됩니다. 토큰 배포, ETH 사용, 거래 전송은 없습니다.'],
    'Demo Launch': ['演示发射', '데모 런칭'], 'Tip: connect a wallet to set yourself as creator. Optional in demo.': ['提示：连接钱包即可将自己设为创建者。演示中可选。', '팁: 지갑을 연결하면 본인이 창작자로 설정됩니다. 데모에선 선택 사항.'], '(demo wallet)': ['（演示钱包）', '(데모 지갑)'],
    'Launching in Demo Mode…': ['正在以演示模式发射…', '데모 모드로 런칭 중…'], '○ Packing mascot & metadata': ['○ 打包吉祥物和元数据', '○ 마스코트와 메타데이터 준비'], '○ Saving tribe to demo state': ['○ 保存部落到演示状态', '○ 데모 상태에 트라이브 저장'], '○ Adding tribe to leaderboard': ['○ 将部落加入排行榜', '○ 리더보드에 트라이브 추가'],
    '✓ Packing mascot & metadata': ['✓ 打包吉祥物和元数据', '✓ 마스코트와 메타데이터 준비'], '✓ Saving tribe to demo state': ['✓ 保存部落到演示状态', '✓ 데모 상태에 트라이브 저장'], '✓ Adding tribe to leaderboard': ['✓ 将部落加入排行榜', '✓ 리더보드에 트라이브 추가'],
    'Demo launch complete': ['演示发射完成', '데모 런칭 완료'], "Your tribe is saved in this browser. No token was deployed and no transaction was sent, because TRIBE contracts on Robinhood Chain aren't configured yet.": ['你的部落已保存在此浏览器中。由于 Robinhood Chain 上的 TRIBE 合约尚未配置，没有部署代币，也没有发送交易。', '트라이브가 이 브라우저에 저장되었습니다. Robinhood Chain의 TRIBE 컨트랙트가 아직 설정되지 않아 토큰 배포나 거래 전송은 없었습니다.'],
    'View your tribe': ['查看你的部落', '내 트라이브 보기'], 'Launch another': ['再发射一个', '하나 더 런칭'], 'Your Tribe': ['你的部落', '나의 트라이브'], 'Your tribe description shows up here.': ['你的部落描述会显示在这里。', '트라이브 설명이 여기에 표시됩니다.'],
    'Give your tribe a name with at least 3 characters.': ['请给你的部落起一个至少 3 个字符的名称。', '트라이브 이름을 3자 이상으로 지어 주세요.'], 'Keep the name to 24 characters or less.': ['名称请不超过 24 个字符。', '이름은 24자 이하로 해 주세요.'], 'Use 2–8 letters or numbers, like BANANA or GM2.': ['请使用 2–8 个字母或数字，例如 BANANA 或 GM2。', 'BANANA나 GM2처럼 영문자 또는 숫자 2–8자를 쓰세요.'],
    'Write at least one short sentence about your tribe.': ['请至少写一句关于你部落的话。', '트라이브에 대해 짧은 문장을 하나 이상 써 주세요.'], 'Pick a total supply.': ['请选择总供应量。', '총 공급량을 선택하세요.'],
    'That X account doesn’t look right. Use @name or an x.com link.': ['这个 X 账号看起来不对。请使用 @名称 或 x.com 链接。', 'X 계정이 올바르지 않습니다. @이름 또는 x.com 링크를 쓰세요.'], 'That website doesn’t look right. Use something like yourtribe.xyz.': ['这个网站看起来不对。请使用类似 yourtribe.xyz 的地址。', '웹사이트가 올바르지 않습니다. yourtribe.xyz 같은 형식을 쓰세요.'], 'That Telegram link doesn’t look right. Use @group or a t.me link.': ['这个 Telegram 链接看起来不对。请使用 @群组 或 t.me 链接。', '텔레그램 링크가 올바르지 않습니다. @그룹 또는 t.me 링크를 쓰세요.'],
    'That image is over 800 KB. Pick a smaller file.': ['图片超过 800 KB，请选择更小的文件。', '이미지가 800 KB를 넘습니다. 더 작은 파일을 고르세요.'], 'Could not read that file. Try a PNG or JPG.': ['无法读取该文件。请尝试 PNG 或 JPG。', '파일을 읽을 수 없습니다. PNG나 JPG를 시도하세요.'],
    // market & trade
    'Every tribe token, priced from its liquidity pool.': ['每个部落代币，价格来自其流动性池。', '모든 트라이브 토큰, 유동성 풀 기준 가격.'], 'prices and trades live in this browser until TRIBE contracts are on Robinhood Chain.': ['在 TRIBE 合约上线 Robinhood Chain 之前，价格和交易仅保存在此浏览器中。', 'TRIBE 컨트랙트가 Robinhood Chain에 올라가기 전까지 가격과 거래는 이 브라우저에만 존재합니다.'],
    'Total market cap': ['总市值', '총 시가총액'], '24h volume': ['24 小时交易量', '24시간 거래량'], 'Tokens': ['代币', '토큰'], 'Search name or $TICKER': ['搜索名称或 $代号', '이름 또는 $티커 검색'], 'Search tokens': ['搜索代币', '토큰 검색'],
    'Trending': ['热门', '인기'], 'Top gainers': ['涨幅榜', '상승률 상위'], 'Market cap': ['市值', '시가총액'], 'Volume': ['交易量', '거래량'], 'New': ['最新', '신규'], 'Price': ['价格', '가격'], '24h %': ['24 小时 %', '24시간 %'], '24h': ['24 小时', '24시간'],
    'Liquidity': ['流动性', '유동성'], 'Supply': ['供应量', '공급량'], 'Recent trades': ['最近成交', '최근 거래'], 'No trades yet. Be the first.': ['暂无成交，来做第一个吧。', '아직 거래가 없습니다. 첫 거래를 해 보세요.'], 'you': ['你', '나'], 'Tribe page': ['部落页面', '트라이브 페이지'],
    'Buy': ['买入', '매수'], 'Sell': ['卖出', '매도'], 'You pay': ['你支付', '지불'], 'You sell': ['你卖出', '매도 수량'], 'You receive': ['你将收到', '받는 수량'], 'Price impact': ['价格影响', '가격 영향'], 'Fee': ['手续费', '수수료'], 'Your balance': ['你的余额', '내 잔액'],
    'Get 1 demo ETH': ['领取 1 个演示 ETH', '데모 ETH 1개 받기'], 'Demo trading: balances and prices are simulated in this browser. Real swaps open once TRIBE contracts are deployed on Robinhood Chain.': ['演示交易：余额和价格在此浏览器中模拟。TRIBE 合约部署到 Robinhood Chain 后将开放真实兑换。', '데모 거래: 잔액과 가격은 이 브라우저에서 시뮬레이션됩니다. TRIBE 컨트랙트가 Robinhood Chain에 배포되면 실제 스왑이 열립니다.'],
    'Token not found': ['未找到代币', '토큰을 찾을 수 없음'], 'Back to Market': ['返回市场', '마켓으로 돌아가기'], 'Enter an amount above zero.': ['请输入大于零的数量。', '0보다 큰 수량을 입력하세요.'],
    'Your tokens': ['你的代币', '내 토큰'], 'Amount': ['数量', '수량'], 'Value': ['价值', '가치'], 'Total': ['合计', '합계'], 'demo': ['演示', '데모'], 'No tokens yet.': ['还没有代币。', '아직 토큰이 없습니다.'], 'Open the Market →': ['打开市场 →', '마켓 열기 →'],
    // real tribe
    'Same ticker, many tokens. Real Tribe shows which one has the real community: real holders, spread, holding time, wallet age, roll call and a clean-launch (bundle) score.': ['同一个代号，许多代币。真实部落会显示哪一个拥有真实社区：真实持有者、分散度、持有时长、钱包年龄、点名签到以及干净发射（捆绑）评分。', '같은 티커, 여러 토큰. 리얼 트라이브는 어느 토큰에 진짜 커뮤니티가 있는지 보여 줍니다: 실제 홀더, 분산도, 보유 기간, 지갑 나이, 롤콜, 클린 런칭(번들) 점수.'],
    'sample data.': ['示例数据。', '예시 데이터.'], 'Register a token': ['登记代币', '토큰 등록'], 'Check a ticker, e.g. BANANA': ['查询代号，例如 BANANA', '티커 확인, 예: BANANA'], 'Check a ticker': ['查询代号', '티커 확인'],
    'All registered tokens': ['所有已登记代币', '등록된 모든 토큰'], 'Community': ['社区', '커뮤니티'], 'Bundle': ['捆绑', '번들'], 'Real holders': ['真实持有者', '실제 홀더'], 'indexing': ['索引中', '인덱싱 중'], 'Indexing…': ['索引中…', '인덱싱 중…'],
    '✓ REAL TRIBE': ['✓ 真实部落', '✓ 리얼 트라이브'], 'CONTESTED': ['有争议', '경합 중'], 'NO CLEAR COMMUNITY': ['暂无明确社区', '뚜렷한 커뮤니티 없음'], 'All tickers': ['全部代号', '전체 티커'], 'Register one': ['登记一个', '등록하기'], 'No registered token uses this ticker yet.': ['尚无已登记代币使用此代号。', '이 티커를 쓰는 등록 토큰이 아직 없습니다.'],
    'How the score works': ['评分如何计算', '점수 계산 방식'], 'Wallets holding at least $20 for 7+ days. Faking 1,000 of them means locking $20,000 for a week.': ['持有至少 20 美元且超过 7 天的钱包。伪造 1,000 个这样的钱包意味着锁定 20,000 美元一周。', '20달러 이상을 7일 넘게 보유한 지갑. 1,000개를 위조하려면 2만 달러를 일주일 묶어야 합니다.'],
    'Share of supply outside the 10 biggest wallets. Whale-owned tokens score low.': ['前 10 大钱包以外的供应量占比。被巨鲸持有的代币得分低。', '상위 10개 지갑 밖의 공급량 비율. 고래가 쥔 토큰은 점수가 낮습니다.'], 'Average days holders keep the token. Pump-and-dump crowds score low.': ['持有者平均持有代币的天数。拉盘砸盘的人群得分低。', '홀더의 평균 보유 일수. 펌프 앤 덤프 무리는 점수가 낮습니다.'],
    "Holders whose wallet has 30+ days of history. Fresh bot wallets don't count.": ['钱包有 30 天以上历史的持有者。新建的机器人钱包不计入。', '지갑 이력이 30일 이상인 홀더. 새로 만든 봇 지갑은 제외됩니다.'], 'Holders who signed "I\'m part of this tribe" this month. Proves people are active.': ['本月签署“我是这个部落的一员”的持有者。证明成员是活跃的。', '이번 달 "나는 이 트라이브의 일원"에 서명한 홀더. 사람들이 활동 중임을 증명합니다.'],
    'The bundle score below. Wallets funded from one source count as one.': ['即下方的捆绑评分。由同一来源资助的钱包计为一个。', '아래의 번들 점수. 한 곳에서 자금을 받은 지갑은 하나로 계산합니다.'], '100 = clean. Drops with supply bought in the launch block by linked wallets, and with snipers.': ['100 = 干净。随关联钱包在发射区块买入的供应量以及狙击者而下降。', '100 = 깨끗함. 연결된 지갑이 런칭 블록에서 산 공급량과 스나이퍼에 따라 낮아집니다.'],
    '"Real Tribe" goes to the top token only with a score of 50+ and a lead of 10+ points; a closer race shows as Contested. The score is a summary; every raw number is shown so you can judge for yourself.': ['只有得分 50 以上且领先 10 分以上的第一名才会获得“真实部落”；差距更小则显示为有争议。评分只是摘要，所有原始数据都会显示，方便你自行判断。', '"리얼 트라이브"는 점수 50 이상, 10점 이상 앞선 1위에게만 주어지며, 더 박빙이면 경합 중으로 표시됩니다. 점수는 요약일 뿐이며 모든 원자료를 보여 드리니 직접 판단하세요.'],
    'Bundle score': ['捆绑评分', '번들 점수'], 'Top 10 hold': ['前 10 持有', '상위 10 보유'], 'of supply': ['的供应量', '공급량 비율'], 'Avg holding': ['平均持有', '평균 보유'], 'per holder': ['每位持有者', '홀더당'], 'Aged wallets': ['老钱包', '오래된 지갑'], '30+ days old': ['30 天以上', '30일 이상'],
    'Roll call': ['点名签到', '롤콜'], 'signed this month': ['本月签署', '이번 달 서명'], 'Token age': ['代币年龄', '토큰 나이'], 'since launch': ['自发射起', '런칭 이후'], 'Spread (top 10)': ['分散度（前 10）', '분산도 (상위 10)'], 'Holding time': ['持有时长', '보유 기간'], 'Clean launch': ['干净发射', '클린 런칭'],
    'Legendary community': ['传奇社区', '전설적인 커뮤니티'], 'Strong community': ['强大社区', '강한 커뮤니티'], 'Solid community': ['稳固社区', '탄탄한 커뮤니티'], 'Growing community': ['成长中社区', '성장 중인 커뮤니티'], 'Weak community': ['薄弱社区', '약한 커뮤니티'],
    "Registered. Metrics appear once the indexer has read this token's holders (DEMO: sample tokens only).": ['已登记。索引器读取该代币持有者后将显示指标（演示：仅示例代币）。', '등록되었습니다. 인덱서가 이 토큰의 홀더를 읽으면 지표가 표시됩니다 (데모: 예시 토큰만).'],
    'Any token on Robinhood Chain can join Real Tribe. It is grouped with every other token using the same ticker.': ['Robinhood Chain 上的任何代币都可以加入真实部落，并会与使用同一代号的其他代币归为一组。', 'Robinhood Chain의 모든 토큰이 리얼 트라이브에 참여할 수 있으며, 같은 티커를 쓰는 다른 토큰들과 함께 묶입니다.'],
    'Your TRIBE launches:': ['你在 TRIBE 发射的代币：', '내 TRIBE 런칭:'], 'Token contract address': ['代币合约地址', '토큰 컨트랙트 주소'], 'Token name': ['代币名称', '토큰 이름'], 'Register': ['登记', '등록'],
    'Enter a token contract address: 0x followed by 40 hex characters.': ['请输入代币合约地址：0x 后跟 40 个十六进制字符。', '토큰 컨트랙트 주소를 입력하세요: 0x 뒤에 16진수 40자.'], 'Ticker: 2 to 10 letters or numbers.': ['代号：2 到 10 个字母或数字。', '티커: 영문자 또는 숫자 2~10자.'], 'Give the token a name.': ['请为代币命名。', '토큰 이름을 입력하세요.'], 'That token is already registered.': ['该代币已登记。', '이미 등록된 토큰입니다.'],
    'Other launchpad': ['其他发射平台', '다른 런치패드'], 'Registered by you': ['由你登记', '내가 등록함'],
    'Registered by the community': ['由社区登记', '커뮤니티가 등록함'], 'Saving tribe for every visitor': ['为所有访客保存部落', '모든 방문자를 위해 트라이브 저장'],
    '✓ Saving tribe for every visitor': ['✓ 为所有访客保存部落', '✓ 모든 방문자를 위해 트라이브 저장'], '○ Saving tribe for every visitor': ['○ 为所有访客保存部落', '○ 모든 방문자를 위해 트라이브 저장'],
    'Use a PNG, JPG or WebP image.': ['请使用 PNG、JPG 或 WebP 图片。', 'PNG, JPG 또는 WebP 이미지를 사용하세요.'],
    'Could not reach the server. Try again.': ['无法连接服务器，请重试。', '서버에 연결할 수 없습니다. 다시 시도하세요.'],
    'Only the creator can edit these links.': ['只有创建者可以编辑这些链接。', '생성자만 이 링크를 수정할 수 있습니다.'],
    'Too many launches from this network. Try again later.': ['此网络发射次数过多，请稍后再试。', '이 네트워크에서 런칭이 너무 많습니다. 나중에 다시 시도하세요.'],
    'Too many registrations. Try again later.': ['登记次数过多，请稍后再试。', '등록이 너무 많습니다. 나중에 다시 시도하세요.'],
    'Too many edits. Try again later.': ['编辑次数过多，请稍后再试。', '수정이 너무 많습니다. 나중에 다시 시도하세요.'],
    'Image must be PNG, JPG or WebP.': ['图片必须是 PNG、JPG 或 WebP。', '이미지는 PNG, JPG 또는 WebP여야 합니다.'],
    'Server error.': ['服务器错误。', '서버 오류.'],
    // profile, wallet, modals
    'Your tribes, wars and XP in one place.': ['你的部落、战争和经验值集中在一处。', '내 트라이브, 전쟁, XP를 한곳에서.'], 'Your tribes, wars and XP. Saved in this browser.': ['你的部落、战争和经验值。保存在此浏览器中。', '내 트라이브, 전쟁, XP. 이 브라우저에 저장됩니다.'], 'Connect a wallet to see your profile.': ['连接钱包以查看你的主页。', '프로필을 보려면 지갑을 연결하세요.'],
    'Demo wallet': ['演示钱包', '데모 지갑'], 'Browser wallet · Robinhood Chain': ['浏览器钱包 · Robinhood Chain', '브라우저 지갑 · Robinhood Chain'], 'Copy address': ['复制地址', '주소 복사'], 'Disconnect': ['断开连接', '연결 해제'], 'Missions →': ['任务 →', '미션 →'],
    "You haven't launched a tribe yet.": ['你还没有发射过部落。', '아직 런칭한 트라이브가 없습니다.'], 'Launch one →': ['发射一个 →', '런칭하기 →'], "You haven't joined a tribe yet.": ['你还没有加入部落。', '아직 가입한 트라이브가 없습니다.'], 'Browse tribes →': ['浏览部落 →', '트라이브 보기 →'],
    "You're not fighting in any war.": ['你没有参加任何战争。', '참여 중인 전쟁이 없습니다.'], 'Pick a side →': ['选择一方 →', '편 고르기 →'],
    'Your wallet': ['你的钱包', '내 지갑'], 'Demo Mode · simulated wallet. Nothing is signed or sent.': ['演示模式 · 模拟钱包。不会签名或发送任何内容。', '데모 모드 · 시뮬레이션 지갑. 서명이나 전송이 없습니다.'], 'Connected through your browser wallet on Robinhood Chain.': ['已通过浏览器钱包连接到 Robinhood Chain。', '브라우저 지갑으로 Robinhood Chain에 연결되었습니다.'],
    'Address': ['地址', '주소'], 'Mode': ['模式', '모드'], 'Demo (simulated)': ['演示（模拟）', '데모 (시뮬레이션)'], 'Browser wallet': ['浏览器钱包', '브라우저 지갑'], 'View on Blockscout ↗': ['在 Blockscout 上查看 ↗', 'Blockscout에서 보기 ↗'],
    'Join tribes, fight wars and launch on Robinhood Chain.': ['在 Robinhood Chain 上加入部落、参加战争并发射代币。', 'Robinhood Chain에서 트라이브에 가입하고, 전쟁하고, 런칭하세요.'], 'MetaMask, Rabby or any EVM wallet': ['MetaMask、Rabby 或任何 EVM 钱包', 'MetaMask, Rabby 또는 모든 EVM 지갑'], 'DETECTED': ['已检测到', '감지됨'], 'NOT FOUND': ['未找到', '없음'],
    'Demo Mode': ['演示模式', '데모 모드'], 'Simulates a connected wallet. No real transactions.': ['模拟已连接的钱包。没有真实交易。', '연결된 지갑을 시뮬레이션합니다. 실제 거래는 없습니다.'],
    'An Ethereum Layer 2 built on Arbitrum. Network details from the official docs.': ['基于 Arbitrum 的以太坊二层网络。网络信息来自官方文档。', 'Arbitrum 기반 이더리움 레이어 2. 네트워크 정보는 공식 문서 기준입니다.'], 'Chain ID': ['Chain ID', '체인 ID'], 'RPC URL': ['RPC 地址', 'RPC URL'], 'Currency': ['货币', '통화'], 'Explorer': ['浏览器', '익스플로러'], 'Testnet ID': ['测试网 ID', '테스트넷 ID'],
    'Open docs ↗': ['打开文档 ↗', '문서 열기 ↗'], 'Copy RPC URL': ['复制 RPC 地址', 'RPC URL 복사'], 'Close': ['关闭', '닫기'], 'Shown on the tribe and trade pages. Leave a field empty to hide it.': ['显示在部落和交易页面。留空即可隐藏。', '트라이브와 거래 페이지에 표시됩니다. 비워 두면 숨겨집니다.'], 'Save links': ['保存链接', '링크 저장'],
    'No browser wallet was found in this window. Open TRIBE in a browser with a wallet extension (MetaMask, Rabby…) or use Demo Mode.': ['此窗口中未找到浏览器钱包。请在装有钱包扩展（MetaMask、Rabby…）的浏览器中打开 TRIBE，或使用演示模式。', '이 창에서 브라우저 지갑을 찾지 못했습니다. 지갑 확장 프로그램(MetaMask, Rabby…)이 있는 브라우저에서 TRIBE를 열거나 데모 모드를 쓰세요.'],
    'You rejected the request in your wallet.': ['你在钱包中拒绝了请求。', '지갑에서 요청을 거절했습니다.'], 'Wallet connection failed.': ['钱包连接失败。', '지갑 연결에 실패했습니다.'], 'Connect a real browser wallet first. Demo Mode cannot complete on-chain missions.': ['请先连接真实的浏览器钱包。演示模式无法完成链上任务。', '먼저 실제 브라우저 지갑을 연결하세요. 데모 모드로는 온체인 미션을 완료할 수 없습니다.'],
    'Your wallet is not on Robinhood Chain (Chain ID 4663). Switch networks and try again.': ['你的钱包不在 Robinhood Chain（Chain ID 4663）上。请切换网络后重试。', '지갑이 Robinhood Chain(체인 ID 4663)에 있지 않습니다. 네트워크를 바꾼 뒤 다시 시도하세요.'], 'No sent transactions found for this address on Robinhood Chain yet.': ['该地址在 Robinhood Chain 上尚无已发送的交易。', '이 주소에서 Robinhood Chain으로 보낸 거래가 아직 없습니다.'],
    // toasts
    '1 demo ETH added': ['已添加 1 个演示 ETH', '데모 ETH 1개 추가됨'], 'Address copied': ['地址已复制', '주소 복사됨'], 'Connect a wallet first': ['请先连接钱包', '먼저 지갑을 연결하세요'], 'Copy blocked here. Select the URL above instead.': ['此处无法复制，请直接选择上方的地址。', '여기서는 복사가 막혀 있습니다. 위의 URL을 직접 선택하세요.'],
    'Demo progress reset': ['演示进度已重置', '데모 진행 초기화됨'], 'Demo wallet connected': ['演示钱包已连接', '데모 지갑 연결됨'], 'Links saved': ['链接已保存', '링크 저장됨'], 'On-chain activity verified · +500 XP': ['链上活动已验证 · +500 XP', '온체인 활동 확인됨 · +500 XP'], 'RPC URL copied': ['RPC 地址已复制', 'RPC URL 복사됨'],
    'Trade': ['交易', '거래'], 'Spread': ['分散度', '분산도'],
    'LIVE SCORE': ['实时比分', '실시간 스코어'], 'Winner takes both 5% stakes': ['胜者赢得双方 5% 份额', '승자가 양쪽 5% 지분 모두 획득'], 'Hottest Tribe Wars': ['最热部落战争', '가장 뜨거운 트라이브 워'],
    'Previous war': ['上一场战争', '이전 전쟁'], 'Next war': ['下一场战争', '다음 전쟁'], 'NO WARS': ['暂无战争', '전쟁 없음'], 'No war is live right now. Start one!': ['目前没有进行中的战争。发起一场吧！', '지금 진행 중인 전쟁이 없습니다. 하나 시작해 보세요!'],
    'Cool heads in any market. Penguins waddle in formation and slide past every dip together.': ['任何行情都保持冷静。企鹅们列队前行，一起滑过每一次下跌。', '어떤 장에서도 침착함. 펭귄들은 대열을 지어 뒤뚱거리며 모든 하락을 함께 미끄러져 지나갑니다.'],
    'Crunchy on the outside, loyal on the inside. Taco Tuesday is every day for this crew.': ['外脆内忠。对这支队伍来说，每天都是塔可星期二。', '겉은 바삭, 속은 의리. 이 크루에게는 매일이 타코 화요일입니다.'],
    'Always pointing up. Moon Tribe keeps the charts and the vibes in orbit.': ['永远向上。月亮部落让图表和氛围都保持在轨道上。', '언제나 위를 향해. 문 트라이브는 차트와 분위기를 궤도에 올려 둡니다.'],
    'Found early, held long. Gem Tribe polishes its bags and never sells the shine.': ['早发现，长持有。宝石部落擦亮筹码，从不卖掉光芒。', '일찍 발견하고 오래 보유. 젬 트라이브는 가방을 닦을 뿐 반짝임은 절대 팔지 않습니다.'], 'Sound on': ['声音已开启', '사운드 켜짐'], 'Sound off': ['声音已关闭', '사운드 꺼짐'], 'Banana, Frog, Pizza and Penguin tribe mascots standing on a floating island under a green TRIBE flag': ['香蕉、青蛙、披萨和企鹅部落的吉祥物站在绿色 TRIBE 旗帜下的浮空岛上', '초록색 TRIBE 깃발 아래 떠 있는 섬에 선 바나나, 개구리, 피자, 펭귄 트라이브 마스코트'],
    'Tribe link copied': ['部落链接已复制', '트라이브 링크 복사됨'], 'Wallet connected on Robinhood Chain': ['钱包已连接到 Robinhood Chain', 'Robinhood Chain에 지갑 연결됨'], 'Wallet disconnected': ['钱包已断开', '지갑 연결 해제됨'],
  },
  patterns: [
    [/^Step (\d+) of (\d+)$/, '第 $1 步，共 $2 步', '$2단계 중 $1단계'],
    [/^HOTTEST WAR #(\d+)$/, '最热战争 #$1', '최고 인기 전쟁 #$1'], [/^LIVE WAR #(\d+)$/, '进行中的战争 #$1', '진행 중 전쟁 #$1'],
    [/^([\d,]+) fighters$/, '$1 名战士', '전사 $1명'], [/^War (\d+)$/, '战争 $1', '전쟁 $1'],
    [/^(.+) vs (.+)\. Who will claim the crown\?$/, '$1 对 $2。谁将摘得桂冠？', '$1 vs $2. 누가 왕관을 차지할까요?'],
    [/^(\d+)m ago$/, '$1 分钟前', '$1분 전'], [/^(\d+)h ago$/, '$1 小时前', '$1시간 전'], [/^(\d+)d ago$/, '$1 天前', '$1일 전'],
    [/^(.+) mascot$/, '$1 吉祥物', '$1 마스코트'],
    [/^Challenge (.+)$/, '挑战 $1', '$1에 도전'],
    [/^Pick the tribe that goes up against (.+) in a 72-hour Tribe War\.$/, '选择在 72 小时部落战争中对抗 $1 的部落。', '72시간 트라이브 워에서 $1와(과) 맞설 트라이브를 고르세요.'],
    [/^Join (\S+)$/, '加入 $1', '$1 합류'],
    [/^You joined the (.+) side$/, '你加入了 $1 一方', '$1 편에 합류했습니다'], [/^You joined (.+)$/, '你加入了 $1', '$1에 가입했습니다'],
    [/^Welcome to (.+)$/, '欢迎加入 $1', '$1에 오신 것을 환영합니다'], [/^You left (.+)$/, '你已退出 $1', '$1에서 탈퇴했습니다'],
    [/^War ready: (\S+) vs (\S+)$/, '战争就绪：$1 对 $2', '전쟁 준비 완료: $1 vs $2'],
    [/^Buy (\$\S+)$/, '买入 $1', '$1 매수'], [/^Sell (\$\S+)$/, '卖出 $1', '$1 매도'], [/^Trade (\$\S+)$/, '交易 $1', '$1 거래'], [/^Launch (\$\S+)$/, '发射 $1', '$1 런칭'],
    [/^Bought (\S+) (\$\S+)$/, '已买入 $1 $2', '$2 $1 매수 완료'], [/^Sold for (\S+) ETH$/, '已卖出，获得 $1 ETH', '$1 ETH에 매도 완료'],
    [/^You have (\S+) demo ETH\.$/, '你有 $1 个演示 ETH。', '데모 ETH가 $1개 있습니다.'], [/^You hold (\S+) (\$\S+)\.$/, '你持有 $1 $2。', '$2 $1개를 보유 중입니다.'],
    [/^Earn XP for (.+)$/, '为 $1 赚取经验值', '$1을(를) 위해 XP 획득'], [/^Links for (.+)$/, '$1 的链接', '$1 링크'],
    [/^(.+) is live in demo!$/, '$1 已在演示中上线！', '$1 데모 런칭 완료!'], [/^(.+) launched$/, '$1 已发射', '$1 런칭됨'], [/^(.+) was created$/, '$1 已创建', '$1 생성됨'], [/^(.+) reached$/, '$1 达到', '$1 도달:'],
    [/^(.+), ([\d.]+[KMB]?) members$/, '$1，$2 名成员', '$1, 멤버 $2명'],
    [/^(\d+) tokens? use this ticker\.$/, '$1 个代币使用此代号。', '$1개 토큰이 이 티커를 사용합니다.'], [/^(\d+) tokens$/, '$1 个代币', '토큰 $1개'],
    [/^([\d.]+)% bought in launch block$/, '$1% 在发射区块买入', '런칭 블록에서 $1% 매수'], [/^([\d.]+)% snipers$/, '$1% 狙击者', '스나이퍼 $1%'],
    [/^Bundle score (\d+)$/, '捆绑评分 $1', '번들 점수 $1'], [/^Score (\d+) of 100$/, '评分 $1 / 100', '점수 $1 / 100'],
    [/^(\d+) XP to level (\d+) · (\d+)\/(\d+) missions$/, '距离 $2 级还差 $1 经验值 · 任务 $3/$4', '레벨 $2까지 $1 XP · 미션 $3/$4'], [/^(\d+) XP to level (\d+)$/, '距离 $2 级还差 $1 经验值', '레벨 $2까지 $1 XP'],
    [/^Level (\d+) ·$/, '等级 $1 ·', '레벨 $1 ·'], [/^Claim \+(\d+) XP$/, '领取 +$1 经验值', '+$1 XP 받기'], [/^\+(\d+) XP · (.+)$/, '+$1 经验值 · $2', '+$1 XP · $2'],
    [/^Tribes you launched \((\d+)\)$/, '你发射的部落（$1）', '내가 런칭한 트라이브 ($1)'], [/^Tribes you joined \((\d+)\)$/, '你加入的部落（$1）', '내가 가입한 트라이브 ($1)'], [/^Your wars \((\d+)\)$/, '你的战争（$1）', '내 전쟁 ($1)'],
    [/^Tickers with more than one token \((\d+)\)$/, '拥有多个代币的代号（$1）', '토큰이 둘 이상인 티커 ($1)'],
    [/^of ([\d,]+) wallets$/, '共 $1 个钱包', '전체 지갑 $1개 중'], [/^([\d,]+) power to the next milestone \(([\d,]+)\)$/, '距离下一个里程碑（$2）还差 $1 战力', '다음 목표($2)까지 파워 $1'],
    [/^How many (\$\S+) exist\. 80% seeds the liquidity pool and 20% is locked in the War Chest, won only by winning Tribe Wars\. The creator gets no allocation\.$/, '$1 的总量是多少。80% 注入流动性池，20% 锁定在战争金库中，只能通过赢得部落战争获得。创建者没有任何分配。', '$1의 총 발행량. 80%는 유동성 풀에, 20%는 워 체스트에 잠기며 트라이브 워에서 이겨야만 받을 수 있습니다. 창작자 할당은 없습니다.'],
    [/^([\d,]+) × 4 wars$/, '$1 × 4 场战争', '$1 × 전쟁 4회'], [/^([\d.]+) ETH per token$/, '每枚代币 $1 ETH', '토큰당 $1 ETH'],
    [/^(\S+) supply · 80% liquidity · 20% War Chest$/, '供应量 $1 · 80% 流动性 · 20% 战争金库', '공급량 $1 · 유동성 80% · 워 체스트 20%'],
    [/^✓ Real Tribe · community (\d+) · bundle (\d+)$/, '✓ 真实部落 · 社区 $1 · 捆绑 $2', '✓ 리얼 트라이브 · 커뮤니티 $1 · 번들 $2'],
    [/^#(\d+) of (\d+) (\$\S+) · community (\d+) · bundle (\d+)$/, '$3 第 $1 名（共 $2）· 社区 $4 · 捆绑 $5', '$3 $2개 중 $1위 · 커뮤니티 $4 · 번들 $5'],
    [/^(\S+) community$/, '$1 社区', '$1 커뮤니티'],
    [/^No token uses (\$\S+)\.$/, '没有代币使用 $1。', '$1을(를) 쓰는 토큰이 없습니다.'], [/^No tribe uses the ticker (\$\S+) yet\.$/, '还没有部落使用代号 $1。', '아직 티커 $1을(를) 쓰는 트라이브가 없습니다.'],
    [/^(\$\S+) is already taken by another tribe\.$/, '$1 已被其他部落使用。', '$1은(는) 이미 다른 트라이브가 사용 중입니다.'],
    [/^(\$\S+) registered in Real Tribe$/, '$1 已登记到真实部落', '$1 리얼 트라이브에 등록됨'], [/^(\$\S+) registered$/, '$1 已登记', '$1 등록됨'],
    [/^Invite code (\S+) copied$/, '邀请码 $1 已复制', '초대 코드 $1 복사됨'], [/^Your invite code: (\S+)$/, '你的邀请码：$1', '내 초대 코드: $1'], [/^TRIBE on (\S+) is coming soon$/, 'TRIBE 的 $1 即将上线', 'TRIBE $1 곧 오픈'],
    [/^completed “(.+)”$/, '完成了“$1”', '“$1” 완료'],
    [/^War ended · (.+) wins$/, '战争结束 · $1 获胜', '전쟁 종료 · $1 승리'], [/^You're fighting for (.+)$/, '你正在为 $1 而战', '$1 편에서 싸우는 중'], [/^Demo: /, '演示：', '데모: '],
    [/^Network: Robinhood Chain \(Chain ID 4663, gas in ETH\)\. Your wallet will be asked to add or switch to it\.$/, '网络：Robinhood Chain（Chain ID 4663，以 ETH 支付 Gas）。你的钱包将被要求添加或切换到该网络。', '네트워크: Robinhood Chain (체인 ID 4663, 가스는 ETH). 지갑에 이 네트워크를 추가하거나 전환하라는 요청이 뜹니다.'],
  ],
};

const I18nEngine = (() => {
  const store = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (_) { return null; } };
  let lang = store('tribe-lang');
  if (!I18N.langs[lang]) { const n = (navigator.language || '').toLowerCase(); lang = n.startsWith('zh') ? 'zh' : n.startsWith('ko') ? 'ko' : 'en'; }
  const origText = new WeakMap(), lastOut = new WeakMap(), origAttr = new WeakMap(), ATTRS = ['placeholder', 'aria-label', 'title'];
  const one = (src) => {
    const i = lang === 'zh' ? 0 : 1, hit = I18N.dict[src];
    if (hit) return hit[i];
    for (const p of I18N.patterns) if (p[0].test(src)) return src.replace(p[0], p[1 + i]);
    return src;
  };
  // Whole string first; failing that, "A · B · C" is translated part by part.
  const tr = (src) => {
    if (lang === 'en') return src;
    const whole = one(src);
    if (whole !== src || !src.includes(' · ')) return whole;
    const tail = src.endsWith(' ·') ? ' ·' : '';
    return src.slice(0, src.length - tail.length).split(' · ').map(one).join(' · ') + tail;
  };
  const skip = (el) => !el || el.closest('script,style,textarea,[data-no-i18n]');
  function textNode(n){
    if (skip(n.parentElement)) return;
    // A node the page itself rewrote since we last touched it carries a new English original.
    if (!origText.has(n) || (lastOut.has(n) && n.data !== lastOut.get(n))) origText.set(n, n.data);
    const src = origText.get(n), t = src.trim();
    if (!t || !/[A-Za-z]/.test(t)) return;
    const out = src.replace(t, tr(t));
    lastOut.set(n, out);
    if (n.data !== out) n.data = out;
  }
  function element(el){
    // attributes (placeholders) of form fields are translated; only their typed values are not
    if (!el || el.closest('script,style,[data-no-i18n]')) return;
    for (const a of ATTRS) {
      if (!el.hasAttribute(a)) continue;
      let o = origAttr.get(el); if (!o) origAttr.set(el, o = {});
      if (!(a in o)) o[a] = el.getAttribute(a);
      const v = tr(o[a].trim()); if (el.getAttribute(a) !== v) el.setAttribute(a, v);
    }
  }
  function walk(root){
    if (!root) return;
    if (root.nodeType === 3) return textNode(root);
    if (root.nodeType !== 1) return;
    element(root);
    const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    for (let n; (n = tw.nextNode()); ) n.nodeType === 3 ? textNode(n) : element(n);
  }
  // render() always writes the English title first, so it can be translated in place.
  function title(){ document.title = document.title.split(' · ').map(tr).join(' · '); }
  let busy = false;
  const mo = new MutationObserver((ms) => {
    if (busy) return; busy = true;
    for (const m of ms) m.type === 'characterData' ? textNode(m.target) : m.addedNodes.forEach(walk);
    busy = false;
  });
  function start(){ document.documentElement.lang = lang; walk(document.body); mo.observe(document.body, { childList: true, subtree: true, characterData: true }); }
  function set(l){
    if (!I18N.langs[l]) return;
    lang = l; store('tribe-lang', l); document.documentElement.lang = l;
    walk(document.body);
  }
  return { tr, walk, title, start, set, get lang(){ return lang; } };
})();
