/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: '系统通知',
		body: '紧急通知：因积水倒灌，图书馆提前闭馆……',
		icon: ''
	},
	'Newspaper': {
		title: '获得关键证物',
		body: '「旧报纸」',
		icon: ''
	},
	'WarningNote': {
		title: '获得关键证物',
		body: '「警告纸条」',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {
	'photo1': 'photo_1_2026-06-22_02-30-02.jpg',
	'photo2': 'photo_2_2026-06-22_02-30-02.jpg',
	'photo3': 'photo_3_2026-06-22_02-30-02.jpg',
	'photo4': 'photo_4_2026-06-22_02-30-02.jpg',
	'photo5': 'photo_5_2026-06-22_02-30-02.jpg',
	'photo6': 'photo_6_2026-06-22_02-30-02.jpg',
	'photo7': 'photo_7_2026-06-22_02-30-02.jpg',
	'photo8': 'photo_8_2026-06-22_02-30-02.jpg',
	'photo9': 'photo_9_2026-06-22_02-30-02.jpg',
	'photo10': 'photo_10_2026-06-22_02-30-02.jpg',
	'photo11': 'photo_11_2026-06-22_02-30-02.jpg',
	'photo12': 'photo_12_2026-06-22_02-30-02.jpg',
	'photo13': 'photo_13_2026-06-22_02-30-02.jpg',
	'photo14': 'photo_14_2026-06-22_02-30-02.jpg',
	'photo15': 'photo_15_2026-06-22_02-30-02.jpg',
	'photo16': 'photo_16_2026-06-22_02-30-02.jpg',
	'photo17': 'photo_17_2026-06-22_02-30-02.jpg',
	'photo18': 'photo_18_2026-06-22_02-30-02.jpg',
	'photo19': 'photo_19_2026-06-22_02-30-02.jpg',
	'photo20': 'photo_20_2026-06-22_02-30-02.jpg',
	'photo21': 'photo_21_2026-06-22_02-30-02.jpg',
	'photo22': 'photo_22_2026-06-22_02-30-02.jpg'
});

// Define the music used in the game.
monogatari.assets('music', {
	'bgm1': 'bgm1.mp3',
	'bgm0': 'bgm0.mp3',
	'bgm2': 'bgm2.mp3'
});

// Define the voice files used in the game.
monogatari.assets('voices', {
	'voc1': 'voc1.mp3'
});

// Define the sounds used in the game.
monogatari.assets('sounds', {
	'rain': 'rain.mp3'
});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
	'classroom': 'bg0.jpg',
	'kfc_plaza': 'bg1.jpg',
	'playground': 'bg2.jpg',
	'library': 'bg3.jpg',
	'dormitory': 'bg4.jpg'
});


// Define the Characters
monogatari.characters({
	'q': {
		name: '清欢',
		color: '#5bffa8',
		directory: 'qinghuan',
		sprites: {
			normal: 'jpg2.jpg'
		},
		expressions: {
			normal: 'jpg2.jpg'
		},
		default_expression: 'normal'
	},
	'z': {
		name: '张哥',
		color: '#ff5bda',
		directory: 'zhangge',
		sprites: {
			normal: 'jpg4.jpg'
		},
		expressions: {
			normal: 'jpg4.jpg'
		},
		default_expression: 'normal'
	},
	'x': {
		name: '咸鱼',
		color: '#ffda5b',
		directory: 'xianyu',
		sprites: {
			normal: 'jpg5.jpg'
		},
		expressions: {
			normal: 'jpg5.jpg'
		},
		default_expression: 'normal'
	},
	'l': {
		name: '李哥',
		color: '#ff5b5b',
		directory: 'lige',
		sprites: {
			normal: 'jpg3.jpg'
		},
		expressions: {
			normal: 'jpg3.jpg'
		},
		default_expression: 'normal'
	},
	'p': {
		name: '我',
		color: '#5bcaff',
		directory: 'wo',
		sprites: {
			normal: 'jpg0.jpg'
		},
		expressions: {
			normal: 'jpg0.jpg'
		},
		default_expression: 'normal'
	}
});

monogatari.script({
	// The game starts here.
	'Start': [
		'play music bgm1 with loop',
		'play sound rain with loop',
		'show scene library with fadeIn',
		'F大图书馆二楼自习区，傍晚，暴雨声贯穿全场。',
		'show scene playground with fadeIn',
		'窗外暴雨如注，操场积水成湖，路灯晕开橘黄色光团。',
		'show scene library with fadeIn',
		'室内光线昏暗，只有应急灯和电脑屏幕的光。',
		'show notification Welcome',
		'屏幕上弹出通知框：“紧急通知：因积水倒灌，图书馆提前闭馆……”。',
		'同时，远处传来管理员老陈锁门的声音：“还有人吗？锁门了啊！”声音渐渐远去。',
		'（桌上一个空的KFC全家桶，桶内鸡骨头被整齐码放）',
		'p （猛地惊醒，拍桌）卧槽——我的KFC呢？！',
		'show character q normal at left with fadeIn',
		'show character z normal at center with fadeIn',
		'show character x normal at right with fadeIn',
		'q （头也没抬，语气平淡）先验地讲，你睡着的时候，它就已经不存在了。',
		'show scene dormitory with fadeIn',
		'z （猛扑到桌前，眼睛盯着空桶）你买了KFC？！你居然不V我50？！我从宿舍冒雨跑到图书馆赶作业，饿得能吞下一头牛！',
		'show scene playground with fadeIn',
		'x （迷迷糊糊抬头，嘴角粘着一粒明显的脆皮碎屑）嗯？谁叫我？我刚从操场跑回来躲雨，累死了……',
		'show scene library with fadeIn',
		'show character l normal at center with fadeIn',
		'李哥坐在最角落，耳机线垂着，面前摊着旧剧本《三只瞎老鼠》，手指无声地敲着节拍，目光平静地扫过众人。',
		'hide character l',
		'show character q normal at left with fadeIn',
		'show character z normal at center with fadeIn',
		'show character x normal at right with fadeIn',
		'p （视线锁定咸鱼嘴角，愤怒地）咸鱼——你嘴角是什么？',
		'x （猛擦嘴角，慌张）啊？没、没有！我下午在操场跑了十圈，回来就睡了，什么都没吃！',
		'z （一把揪住咸鱼领子）你他妈的——那是老子熬通宵的精神支柱——你——',
		'q （用笔敲桌，冷静地）停。',
		'q 先搞清楚：图书馆锁了，窗封了，我们五个从下午四点半到现在没出去过。所以KFC只可能在我们嘴里。',
		'q （看向李哥的剧本）但——我刚才翻了一下这个，里面夹了张东西。',
		'show notification Newspaper',
		'【旧报纸】标题：“2006年·F大附中‘白嫖门’”，内容清晰可见。',
		'stop music bgm1 with fade 2',
		'（短暂停静默）',
		'show scene kfc_plaza with fadeIn',
		'q （念报纸）“……三名学生长期冒领贫困生外卖，致其两个月营养不良胃穿孔……贫困生每周四都会在校内KFC餐厅打工，用工资换一份特价套餐，却屡次被人冒领。”',
		'q （翻到背面，皱眉）背面有字。',
		'报纸背面特写：红笔写的“闭上眼的老鼠，比瞎了更可悲。”以及三个油渍字：“星期四。”',
		'show scene library with fadeIn',
		'play music bgm0 with loop',
		'show character l normal at center with fadeIn',
		'l （终于抬头，声音平静，带着一丝冷意）这剧本里有个童谣。“三只瞎老鼠，跑呀跑呀跑……”你们不觉得，我们现在就是那三只老鼠吗？',
		'hide character l',
		'show character z normal at center with fadeIn',
		'z （急眼）哪里像？',
		'show character l normal at left with fadeIn',
		'l （看向玩家“我”，又扫视众人）看见外卖却不吭声的人。你睡着的时候，有人路过你桌边，看见了KFC，拿走了它。而我们其他人——要么没看见，要么看见了也当没看见。',
		'show scene playground with fadeIn',
		'窗外暴雨如鼓点，操场积水倒映破碎的路灯光。',
		'show scene library with fadeIn',
		'【系统提示】手机信号彻底中断。宿舍回不去，食堂关门，校内KFC餐厅也早打烊了。',
		'五个人，一桶失踪的KFC，和一份二十年前的旧报纸。',
		'stop music bgm0 with fade 2',
		'jump Act2'
	],

	'Act2': [
		'play music bgm1 with loop',
		'p （打破沉默）好，那每个人都说说，四点半到现在，你们在干什么。',
		'show scene dormitory with fadeIn',
		'show character z normal at center with fadeIn',
		'z （指着电脑屏幕）我从宿舍跑出来，在门口撞见管理员，进来后一直在写策划案。共享文档的修改记录白纸黑字，时间连续，我可没空偷吃！',
		'show scene library with fadeIn',
		'show character q normal at center with fadeIn',
		'q （推了推眼镜，语气生硬）我下午三点就来了，中间去饮水机三次，路过你桌边两次。但我专注于康德，没留意那个桶。',
		'q （指了指桌上的干面包）这是我午饭剩的。',
		'hide character q',
		'show scene playground with fadeIn',
		'show character x normal at center with fadeIn',
		'x （举手发誓状）我下午在操场跑了十圈，五点左右冲进来躲雨，进来就趴桌睡了！我真的啥也不知道！',
		'show scene library with fadeIn',
		'p （指着咸鱼嘴角）那你嘴角的渣呢？',
		'x （语塞，拼命擦嘴）这……这……',
		'show character l normal at center with fadeIn',
		'l （打断，声音像在陈述事实）我一直坐这看剧本。中途去了一趟厕所。回来时，看到有人在你桌前停过。',
		'l （停顿）只看到校服袖子，没看清脸。',
		'p （立刻警觉）校服袖子？我们五个都没穿校服，哪来的校服？',
		'所有人目光转向咸鱼，他下意识地裹紧了身上的校服外套。',
		'hide character l',
		'show scene classroom with fadeIn',
		'show character q normal at left with fadeIn',
		'show character z normal at center with fadeIn',
		'show character x normal at right with fadeIn',
		'q （举起旧报纸，脸色凝重）注意“白嫖门”——当年那个贫困生转学后，据说他弟弟后来考上了F大。有没有可能……就在我们中间？',
		'show scene library with fadeIn',
		'z （脸色发白）你是说有人为了报复，故意偷KFC来制造恐慌？',
		'show character l normal at center with fadeIn',
		'l （不动声色地从剧本里抽出第二张纸条）不只是偷。',
		'show notification WarningNote',
		'【警告纸条】内容：“下一个被拿走的，会是你的论文。”背面是三只闭眼老鼠简笔画。',
		'stop music bgm1',
		'（突然收住，静默）',
		'话音刚落，清欢的电脑屏幕猛地一闪，文档界面瞬间变为空白回收站。',
		'hide character l',
		'show character q normal at left with fadeIn',
		'show character z normal at center with fadeIn',
		'show character x normal at right with fadeIn',
		'q （猛地站起，撞到椅子，惊怒交加）我操——谁干的？！',
		'z （声音发抖）这不是偷外卖了，这是恐吓。得报警……但手机没信号！',
		'x （用力拽锁着的门，徒劳无功）门锁了，宿舍也回不去。管理员下班了，外面雨这么大，没人会来。',
		'hide character q',
		'hide character z',
		'hide character x',
		'show character l normal at center with fadeIn',
		'李哥站起来，走到中央，他的冷静在此时显得异常突出。',
		'l （语气带着不容置疑的权威）那就我们自己查。按照剧本重演——每个人回到你声称自己在的位置，重复你当时的行为。我来计时。',
		'play music bgm1 with loop',
		'画面开始“重演”，众人如提线木偶般回到原位，动作重复。李哥像导演一样观察。',
		'张哥敲键盘，清欢去接水，我趴在空桶前，咸鱼用校服蒙头趴下。',
		'l 停！',
		'李哥走向咸鱼，镜头紧跟。',
		'l （指着咸鱼的右手）咸鱼，你趴下去的时候，右手伸到了隔壁桌——那是我放剧本的位置。',
		'hide character l',
		'show character x normal at center with fadeIn',
		'x （猛地抬头，眼神惊慌）我没有！我睡觉手不老实……',
		'hide character x',
		'show character l normal at center with fadeIn',
		'l （抓起咸鱼的右手，展示他的指尖，又翻开剧本的某一页）但你的手指尖，有油渍。而我的剧本上——书页边缘一小块油印，形状与手指吻合。',
		'stop music bgm1',
		'所有人都看向咸鱼。静默。',
		'hide character l',
		'show character x normal at center with fadeIn',
		'x （脸涨得通红，崩溃）我、我下午醒了一次，看到桶开着，以为是别人吃剩不要的……我就……',
		'hide character x',
		'show character z normal at center with fadeIn',
		'z （冷笑，但声音里带着疲惫）你饿了，就吃了。你是真的饿了。',
		'hide character z',
		'show character x normal at center with fadeIn',
		'x （低下头，声音闷闷的）我赔你！我明天V你一百！不，两百！',
		'hide character x',
		'show character l normal at center with fadeIn',
		'l （打断，声音忽然变轻，却更让人发冷）问题不是赔。问题是——报纸、纸条、删论文，这些是谁干的？咸鱼只会吃，不会策划这些。',
		'l （目光如刀，缓缓扫过所有人）我们中间，有一个人不仅“瞎”了，还在故意把水搅浑。他的目标不是KFC，是让我们互相撕咬。',
		'长时间的沉默。只有暴雨声。',
		'hide character l',
		'show character q normal at center with fadeIn',
		'q （声音干涩）那纸条上说“下一个目标”——是针对我的。因为我刚才说过……“少一顿不会死”？',
		'hide character q',
		'show character l normal at center with fadeIn',
		'l （摇头，声音低沉）不。因为你的那句话，和当年那个教导主任说的一模一样。你刚才重演时，对张哥说的——“饿了就喝点水”。',
		'hide character l',
		'show character q normal at center with fadeIn',
		'q （脸瞬间失去血色，惨白如纸）你怎么……知道当年教导主任说了什么？',
		'p （看向李哥，问出了关键问题）对啊，李哥。你怎么知道？',
		'hide character q',
		'show character l normal at center with fadeIn',
		'所有目光聚焦在李哥身上。他缓缓摘下耳机，微微侧头。特写：李哥耳后，一道浅浅的旧伤疤。',
		'l （声音很平，像在念一段褪色的课文）因为当年那个贫困生，是我哥。',
		'stop music bgm1',
		'jump Act3'
	],

	'Act3': [
		'play music bgm0 with loop',
		'空气仿佛凝固。背景暴雨声忽然变得遥远。',
		'l （语气平静得可怕，目光虚焦，仿佛在回忆）他每周四在校内KFC餐厅打工，用攒下的工资买一份特价桶。每次都被人冒领。他不敢告诉家里，因为家里穷，他怕被骂“乱花钱”。',
		'show scene kfc_plaza with fadeIn',
		'l （声音轻了）日记里写：“今天又被拿走了，那个穿校服的人从我身边走过，我认识他，但我不敢说。”他后来胃穿孔住院，转学了，去年去世了。',
		'show scene library with fadeIn',
		'众人沉默，咸鱼把头埋得更低了。',
		'l （看向众人，嘴角有一丝苦涩）我来F大，只想看看当年那些“闭眼的人”现在过得怎么样。今天暴雨封楼，你们都在——我本来只想放一份旧报纸，让你们互相猜疑一下。',
		'l 但咸鱼偷吃了KFC，正好给了我一个完美的“模仿犯罪”现场。我临时用U盘做了个脚本，删了你的文档，吓唬你一下。',
		'show character z normal at center with fadeIn',
		'z （喃喃）所以你根本没有恶意？',
		'show character l normal at center with fadeIn',
		'l （摇摇头）我只是想让他记住——一句话能碾死人。（从口袋里掏出手机，点亮屏幕。信号格是空的）没信号。但本地相册里有一张照片。',
		'手机屏幕特写：一张旧照片，一个瘦弱但笑容灿烂的少年，举着KFC全家桶，背景是灯火通明的校内KFC餐厅红色招牌。',
		'l （看着照片，眼神温柔下来）他后来在新学校，遇到了好同学，天天被投喂。我来这里，不是为了报仇。我只是想找一个机会，让你们亲口说一句——',
		'长久的沉默。雨声渐小。',
		'hide character l',
		'show character q normal at center with fadeIn',
		'q （第一个开口，声音艰涩）……对不起。我不该说那种话。',
		'hide character q',
		'show character z normal at center with fadeIn',
		'z （跟着说，脸上带着愧疚）对不起，我光顾着自己饿，没想过你哥当年多难。',
		'hide character z',
		'show character x normal at center with fadeIn',
		'x （猛地站起来，对着李哥深深鞠了一躬）对不起！我偷吃了你的KFC……我以后再也不乱拿别人东西了！',
		'p （也站起身，语气郑重）……我也对不起，我睡着了没看好桶。但更重要的是——当年那些真正冒领的人，他们欠你哥一个道歉。',
		'hide character x',
		'show character l normal at center with fadeIn',
		'l （低下头，飞快地用袖子擦了一下眼睛。当他抬起头时，却笑了一声，带着释然）他日记最后一行写——“如果有一天有人为这事道歉，我就原谅全世界。”',
		'show scene playground with fadeIn',
		'stop sound rain with fade 3',
		'（高潮段落渐强）窗外雨声渐歇，一道微光从云层透出。操场积水映出对面宿舍楼的灯光，来电了。',
		'show scene library with fadeIn',
		'远处传来钥匙开锁的“咔嗒”声，管理员老陈的喊声：“咦？怎么还有人？”',
		'show character z normal at left with fadeIn',
		'show character x normal at center with fadeIn',
		'show character l normal at right with fadeIn',
		'z （狠狠拍了咸鱼后脑勺一下，打破了沉重的气氛）你吃了人家一桶，今晚必须补上！雨停了，校内KFC餐厅外卖能送了！',
		'x （哭丧着脸）我没钱！',
		'z 我借你——但你得帮我写完策划案！',
		'x 我写！我今晚通宵写！',
		'x （惊喜地）卧槽！KFC APP推送——‘疯狂星期四加时回归，今晚外送正常接单！’（一把拉住李哥的袖子，急切而真诚）走走走，我请你吃！你想吃几桶都行！就当我赎罪！',
		'李哥被拽得一个踉跄，向前走了两步，回头看向“我”。',
		'p （笑着朝他比了个“V”字手势）V我50，这次我先请！',
		'l （低下头，这次是真的笑了，脚步轻快地跟上咸鱼）……那走吧。',
		'show scene kfc_plaza with fadeIn',
		'五个人推开图书馆大门。雨后的清新空气扑面而来，操场边的路灯在水面上碎成一片温暖的金光。五人踩着积水，勾肩倒背，嬉闹着向校内的KFC餐厅走去，背影被拉长。',
		'屏幕渐变至白，出现文字：雨后的校园安静得像什么都没发生过。',
		'stop music bgm0 with fade 2',
		'jump EasterEgg'
	],

	'EasterEgg': [
		'play music bgm0 with loop',
		'show scene library with fadeIn',
		'【彩蛋】第二天清晨，图书馆二楼，阳光洒进。',
		'保洁阿姨在扫地，从垃圾桶里发现一个揉成团的便签纸，展开来看。',
		'画面转为便签纸特写，上面是各种笔迹的留言：',
		'（铅笔，歪歪扭扭）：对不起，下次我会先问。——咸鱼',
		'（中性笔，字迹清秀）：谢谢你的KFC，我哥说他收到了。——李哥',
		'（圆珠笔，严谨的字体）：先验地讲，道歉和KFC一样，都是存在的。——清欢',
		'（红色水笔，在上面粗暴地划了一道，旁边批注）：说人话。——张哥',
		'最后一行，是我们熟悉的字迹：下次疯狂星期四，我们五个一起拼单。V我50，这次我先请。',
		'（画面定格在便签纸上。）',
		'stop music bgm0',
		'（剧终）',
		'end'
	]
});