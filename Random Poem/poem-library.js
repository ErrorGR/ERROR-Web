function getRandomPoem() {
    const poems = [
        "读书破万卷，下笔如有神",
        "时不我待，来日方长",
        "君子坦荡荡，小人长戚戚",
        "路漫漫其修远兮，吾将上下而求索",
        "非淡泊无以明志，非宁静无以致远",
        "学而时习之，不亦说乎",
        "己所不欲，勿施于人",
        "三人行，必有我师焉；择其善者而从之，其不善者而改之",
        "事实胜于雄辩",
        "安得广厦千万间，大庇天下寒士俱欢颜",
        "勿以恶小而为之，勿以善小而不为",
        "学而不思则罔，思而不学则殆",
        "知己知彼，百战不殆",
        "言必信，行必果",
        "知足不辱，知止不殆",
        "有志者，事竟成",
        "临渊羡鱼，不如退而结网",
        "纸上得来终觉浅，绝知此事要躬行",
        "非礼勿视，非礼勿听，非礼勿言，非礼勿动",
        "君子成人之美，不成人之恶",
        "人非圣贤，孰能无过",
        "前事不忘，后事之师",
        "良言一句三冬暖，恶语伤人六月寒",
        "己所不欲，勿施于人",
        "不以善小而不为，不以恶小而为之",
        "谋事在人，成事在天",
        "天行健，君子以自强不息",
        "活着就要有意义，否则跟咸鱼有什么区别",
        "人生自古谁无死，留取丹心照汗青",
        "知识就是力量",
        "成功源于不懈的努力",
        "有志者自有千计万计，无志者只感千难万难",
        "失败是成功之母",
        "千里之堤毁于蚁穴",
        "先天下之忧而忧，后天下之乐而乐",
        "因势利导，因人而异",
        "短暂的痛苦胜过长久的懊悔",
        "人生在勤，不索何获",
        "改变自己，改变世界",
        "因为有了黑夜，才会有白昼",
        "变化是唯一不变的东西",
        "把握当下，珍惜现在",
        "不以物喜，不以己悲",
        "活到老学到老",
        "路漫漫其修远兮，吾将上下而求索",
        "坚持不懈，直至成功",
        "成功来自于自信心，自信来自于实力",
        "知识改变命运",
        "穷则思变，变则通,"
        "以直报怨，以德报德",
        "不为失道者让也，不为成功者畏也",
        "有志者事竟成，破釜沉舟，百二秦关终归楚；苦心人天不负，卧薪尝胆，三千越甲可吞吴",
        "傻人有傻福，懒人没福气",
        "莫等闲，白了少年头，空悲切",
        "大丈夫当带三尺之剑，立不欺天",
        "宁为玉碎，不为瓦全",
        "亡羊补牢，犹未晚也",
        "一山还有一山高",
        "路遥知马力，日久见人心",
        "骐骥一跃，不能十步；驽马十驾，功在不舍",
        "聚精会神，善始善终",
        "水滴石穿，绳锯木断",
        "春风得意马蹄疾，一日看尽长安花",
        "静以修身，俭以养德，非淡泊无以明志，非宁静无以致远",
        "养不教，父之过；教不严，师之惰",
        "人生如梦，一尘缘起，万劫苦空，浮生半日",
        "有志者自有千计万计，无志者只感千难万难",
        "莫等闲，白了少年头，空悲切",
        "不做亏心事，不怕鬼叫门",
        "君子喻于义，小人喻于利",
        "有钱能使鬼推磨",
        "失之东隅，收之桑榆",
        "行百里者半九十",
        "谋事在人成事在天",
        "事实胜于雄辩",
        "旧时王谢堂前燕，飞入寻常百姓家",
        "塞翁失马，焉知非福",
        "强枝弱根必倒，强国弱民必亡",
        "百岁山河换人间，一朝风月逝芳年",
        "黄金并不是万能的，但没有黄金几乎什么也做不成",
        "一个人的快乐与否，并不能取决于别人，而完全取决于自己的内心",
        "书中自有颜如玉，书中自有黄金屋",
        "黑发不知勤学早，白首方悔读书迟",
        "良心是人类最基本的道德标准",
        "知足常乐，贪多嚼不烂",
        "天时不如地利，地利不如人和",
        "三思而后行",
        "世上无难事，只怕有心人",
        "欲速则不达",
        "一分耕耘一分收获，一寸光阴一寸金",
        "不打不成器",
        "前人栽树，后人乘凉",
        "宁拆十座庙，不毁一桩婚",
        "千里之堤毁于蚁穴",
        "大智若愚，大勇若怯",
        "智者千虑必有一失，愚者千错必无一得"
    ]; // 中文诗句数组
    const currentDate = new Date(); // 获取当前日期
    const randomIndex = currentDate.getDate() % poems.length; // 计算随机诗句索引

    return poems[randomIndex]; // 返回随机诗句
}