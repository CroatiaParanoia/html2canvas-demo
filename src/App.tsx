import React, {useCallback, useMemo, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import ShortcutContext, {TransformParams} from './ShortcutContext'

const context = `
我终于嫁给顾言之了。

此刻，他带着薄薄的醉意，两只手撑在床上，衬衫口袋上别着的胸花开的格外艳丽。

我爱顾言之，爱到要死了。

我伸出手拽住他的领带，他很合作地向我压低了脑袋。

刚才的婚礼上，顾言之第一次吻我，虽然只是隔着面纱蜻蜓点水一般吻了一下我的唇，但他嘴唇的温度，我想我一辈子都不会忘掉。

他的吻，终于落下来了。

但不是我的唇，只是轻轻落在我的额头上。

我的心肝很没出息地颤了颤，伸出手抱住了他的后背。

上个月我过生日，傅泳泗问我许了什么愿。

我说，跟顾言之睡。

她说我就这点出息。

没错，我目前的人生目标，就是跟顾言之睡。

今天，我如愿了。

这时，电话铃声很不识相地在床头柜上响起来。

顾言之的电话铃声一直都像是拉警报的声音，二里地都能听得见。

他看了一眼，开始没理会，电话铃声锲而不舍死不断气地鸣叫着。

顾言之接通了：“喂。”他低声道。

我偷偷啃他的脖子，有点痒，他的眉头蹙了蹙，然后就越蹙越紧。，我不知道是谁给他打电话。

“什么？在哪里？你确定？”

他忽然推开了我的脸，从我的身上翻身下床，随意裹了一条毛巾就走进了洗手间。

伴随着淋浴室里哗哗的水声，他讲电话的声音断断续续地落进我耳朵里。

“哪个医院？真的是她？我马上来。”

他带着湿漉漉的气息从洗手间里走出来，我拥着被子在床上坐起来，看着他飞快地穿上刚才脱下的衬衫，西裤，外套。

“顾言之。”我莫名地看着他，他的表情很紧张，我很长时间都没从他的脸上看到如此的表情了：“你去哪？”

他一边套上西装，一边匆匆地看了我一眼，语速极快地跟我说：“你先睡。”

顾言之走了，关上房门的声音，快速下楼的声音，再接着是窗外楼下汽车发动的声音。

我裹着睡袍跑到窗口去看，只看到了顾言之的汽车尾灯。

外面不知道什么时候下雨了，湿气卷着冷风吹进来，我露着大片胸口，然后就打了个大大的喷嚏。

关上窗，拉上窗帘，抱着双膝坐在床上。

到底发生了什么事，让他在我们的洞房花烛夜跑走，还有...

我的目光落在白色印花缎面床单上的红色印迹上，伸出手摸了摸，还有点点潮湿。

如果这件事情被傅泳泗知道，估计她会笑话我一辈子。

能让顾言之如此失神的，可能只有一个人了。

溫采音，他的初恋女友。

她失踪好久了，久到我都快忘了这个人的存在。

我保持了这个姿势睡着了，第二天早上醒来，我的腿和胳膊都僵掉了。

手机响了，我僵直着胳膊去接，不是顾言之打来的，而是傅泳泗。

她的声音鬼祟又带着点兴奋：“喂，新婚之夜过得怎样？有没有翻云覆雨？”

翻她的死人头，我独守空闺一整晚。

我努力伸直了麻木的双腿，疼的我都哼了一声。

她在电话那头色迷迷的：“你不会直接表演给我看吧！”

“滚。”我没好气地挂掉电话。

我又发了会愣，等胳膊腿不麻了就起床，顾言之的一个生活秘书给我打电话：“顾太太，顾先生之前订了今天下午四点钟飞北欧的航班，下午两点钟会派车准时来接你们。”

“顾言之呢？”我问她。

“啊？”秘书小姐的语气比我还要惊讶。

看来她不知道顾言之去哪了。

不管了，反正今天下午我们就要去北欧度蜜月了，之前我说我要去冰岛看极光，没想到他就记住了。

洗漱完我就收拾行李，冰岛很冷，顾言之特意准备了又厚又长的羽绒服，还是情侣款。

我摸了摸滑溜溜的面料，一扭头看到了床上那斑驳的血迹。

也没什么好遗憾的，来日方长，等到了冰岛，听说有时候会遇到极夜，几天几夜都是夜晚，到时候还怕没有机会？

我的脸热了，要是被叶馨知道，肯定说我没羞没臊的。

行李收拾好了两大箱，已经快中午了，我饿的头晕眼花。

下楼去厨房找了点东西吃，再换了衣服化了淡妆，给顾言之打过去电话。

电话倒是通的，但是他没接。

我坐在皮箱上等啊等啊，等到了他的生活秘书带着司机来接我。

我往车里看了看：“顾言之呢？”

生活秘书比我还傻：“顾先生没跟您在一起吗？”

秘书给顾言之打电话，他也没接。

于是我就先去机场等他，他肯定是有什么事，估计会直接去机场跟我汇合。

我发了微信给他说先去机场了，还肉麻地发了一堆嘴唇和心心。

他没回。

我有点忐忑，心跳的乱七八糟。

我在机场大门口等到三点，顾言之的电话怎么打都没有回应。

时间快要来不及了，我先过了安检，在值机口等他。

我等到银色的大铁鸟乘风归去，叹了口气。

到底发生了什么事，他居然放了我鸽子？

送我来的车已经走了，我又不想打电话让我的司机过来接我，不然我妈会知道，她会刨根问底地问个没完。

在打车回去的路上，我不停地给顾言之打电话，这次，电话直接关机了。

我新婚的当天晚上，新郎失踪了。

一直到了晚上，顾言之还是杳无讯息，大半夜的叶馨打给我，问我到了冰岛没有。

我说到了，她问我冷不冷。

我说何止冷，简直冰到了极致，从里到外都冻的像根冰棍。

我现在的心，就像是放进了冻库一样，冷冰冰邦邦硬。

临睡前我急中生智，打给了顾言之的头号走狗小九。

一般来说，顾言之在哪，他就在哪。

小九的电话也很久都没人接听，我都快绝望了，他终于接了，语气硬硬的。

“喂，傅小姐。”

我已经和顾言之结婚了，他还叫我傅小姐。

我舔舔嘴唇，嗓子有点干。

“顾，顾言之跟你在一起？”

“嗯。”他言简意赅。

我松了口气。

不管怎样，顾言之还在这个世界上，没消失在四维空间里。

“那，你们在哪？”

“医院。”

“谁出了事？”

“傅小姐，您应该自己去问顾先生。”

如果我能找得到他，何苦费这个事？

“小九...”

我话音未落，电话就挂断了。

他一向拽，顾言之的跟班，通常和他一样拽。

不过，他拽他的，我手机里装了一个软件，只要我和对方通电话超过一分钟，我就能迅速定位到他的手机，虽然定位时间只有三十秒，但只要他不换地方，我就能找到他。

定位软件显示，小九他们在养和医院。

事不宜迟，我换了衣服拿着包包就向医院出发。

我找到了定位中的大楼，但不知道哪一层，只能一层一层地找。

还好私人医院人少，电梯不拥堵。

在我找到了第八层的时候，我在走廊的尽头看到了一个熟悉的身影。

他还穿着昨天晚上临走的时候穿的衬衫，一边的衣角耷拉下来，有点邋遢。

顾言之是个精致怪，他每天都要换衣服，里里外外都会换一遍的。

所以，现在他这样不休篇幅的模样，一定是大事件。

我踩着高跟鞋一步一步向他走过去，他听到了脚步声转身看到了我。

他应该从昨晚到现在都没睡，眼睛下面有淡淡的黑气，甚至下巴处都冒出了青青的胡茬。

从电梯门口走到他面前也就二三十米的距离，我脑子里急速运转，在想该用一个什么样的开场白。

当我走到他的面前时还没想好，只能傻傻地跟他打了招呼：“嗨。”

他看着我，眼中无光。

顾言之已经很久没有这样面若寒霜地对着我了，我还以为昨天我们婚礼过后，我们之间的关系会更进一步。

“谁，生病了？”我问。

“你怎么来了？”他终于开口了。

“我的新郎在新婚之夜落跑，你说我要不要找？”

他垂眸，没搭我的话。

我顺势往边上的病房里看了一眼，床上躺着一个人，插着呼吸机，从凌乱的长发上能看出来是个女人。

“朋友生病了？”我笑着没话找话，迈步就往病房里走：“我去探个病。”

他飞快地拉住了我的胳膊，而且很用力，捏到了我的麻筋。

“你先回去。”

他把我拽出门，大步流星往电梯口走，我脚步凌乱地跟着他。

我不知道床上的人是谁，但能让他不眠不休地守在这里的，只有一个人。

难道是她回来了？

“床上的人是溫采音？”

他把我推进了电梯，他推的太用力了，我的后背撞在电梯轿厢内的铁质扶手上。

我的老腰，快要断了...

电梯门合上了顾言之面无表情的脸，我痛的龇牙咧嘴他也视而不见。

“顾言之。”我硬从电梯门即将关上之前从里面挤出来：“病房里的人是不是溫采音？我是你太太，你彻夜不归是不是要给我打电话告知一下？你知不知道我在机场里等了你几个小时？”

他注视我三秒，不会再多，然后转身就走。

暴怒的火焰在胸膛中腾的一下就燃烧起来了，我绕到他的面前挡住他：“顾言之，到底发生了什么？”

顾言之眼中的冷淡吓住了我，后面的话梗在喉咙里。

这么久以来，我觉得顾言之看我的眼神越来越有温度，越来越有爱意。

到底发生了什么，一夜之间让一切都回到解放前？

他从我身边走过去，这一次我没有再缠上去。

现在他看着我只是冷淡，如果我再纠缠，冷淡里就会多一份厌恶。

识时务者为俊杰，我暂时消失。

我无精打采地下楼，提着包包走出医院大门。

夜里起风了，裹着细细的雨丝，冷的我缩紧了脖子。

忽然，一个什么东西从天上飘下来，落在了我的脸上。

我拿起来一看，是一条浅紫色的丝巾。

太诡异了，大半夜的从天上飘下来一条丝巾。

我下意识地仰起头往天空看了一眼，魂飞魄散。

我看到一个蓝白条纹的影子在天台顶楼的栏杆边晃悠。

那好像是个女人，这条丝巾应该就是从她身上掉下来的。

她这是要跳楼？人生苦短，也不必如此想不开。

我不敢跟她喊，怕吓着她反而从楼上掉下来，抓着她的丝巾转身就折回医院，匆匆忙忙跑到了楼顶。

天台边的栏杆处有个女人，一手拉着栏杆，另一只手打开着，呈飞翔状，好像马上要跳下去了。

我紧张的心脏咚咚咚跳，一张口灌了一嘴的西北风。

“喂，小姐...”

她听到了声音向我转头，在灯光的照射下，我看到了她的脸。

啊，失踪了三年之久的溫采音，回来了...



`

function App() {


    const paragraph = useMemo(() => {
        return context.split(/\n/,).map(v => v.trim()).filter(v => v)
    }, [])

    const [imgUrls, setImgUrls] = useState<string[]>([])

    const [progress, setProgress] = useState(0)


    const handleTransform = useCallback(({ list, progress }: TransformParams) => {
        setProgress(progress)
    }, [])

    return (
    <div className="App">
        <ShortcutContext beforeTransform={(list) => {
            console.time(`生成${list.length}张图耗时`)
            return list
        }} onTransformEnd={(list) => {
            console.timeEnd(`生成${list.length}张图耗时`)

            setImgUrls(list.map(v => v.localUrl))
        }} onTransform={handleTransform}>
            <div className="animation"></div>
            <div>进度：{progress}</div>
            <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                    {
                        paragraph.map((v, i) => {
                            return (
                                <p style={{color: 'red', fontSize: 20}} className="shortcut" data-shortcut-id={`paragraph-${i}`} key={v}>{v}</p>
                            )
                        })
                    }
                </div>

                <div style={{flex: 1, borderLeft: '1px solid #000'}}>
                    {
                        imgUrls.map(url => {
                            return (
                                <img src={url} alt="" key={url}/>
                            )
                        })
                    }
                </div>
            </div>
        </ShortcutContext>
    </div>
  );
}

export default App;
