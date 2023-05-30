const form = {
    title: "注册",
    dataset: {
        user: {
            inviter_id: 1,
            inviterName: "无",
            nickName: undefined,
            realName: undefined,
        },
        host: {
            name: undefined,
            industry: "",
            contacts: undefined,
            address: undefined,
            mobile: undefined,
            env_desc: undefined,
            products: []
        },
    },
    groups: [{
        title: "用户信息",
        key: "user",
        fields:  [
            {
                title: "用户名",
                type: "ib",
                key: "nickName",
                maxchar: 10
            }, 
            {
                title: "姓名",
                type: "ib",
                key: "realName",
                maxchar: 10
            },
            {
                title: "邀请人",
                type: "lb",
                key: "inviterName",
                maxchar: 10
            },
        ],
    },{
        title: "店铺信息",
        key: "host",
        condition: "true",
        fields:  [
            {
                title: "店名",
                type: "ib",
                key: "name",
                maxchar: 10
            }, 
            {
                title: "地址",
                type: "ib",
                key: "address",
                maxchar: 10
            },
            {
                title: "联系人",
                type: "ib",
                key: "contacts",
                maxchar: 10
            },
            {
                title: "手机号",
                type: "ib",
                key: "mobile",
                maxchar: 10
            },
            {
                title: "所在行业",
                type: "cc",
                note: "选择行业",
                popupTitle: "请选择行业",
                key: "industry",
                options: [
                    {
                      label: '餐饮',
                      value: '餐饮',
                      children: [
                        { value: '小吃', label: '小吃'},
                        { value: '快餐', label: '快餐'},
                        { value: '淮扬菜', label: '淮扬菜'},
                        { value: '面包', label: '面包'},
                        { value: '甜点', label: '甜点'},
                        { value: '火锅', label: '火锅'},
                        { value: '西餐', label: '西餐'},
                        { value: '咖啡厅', label: '咖啡厅'},
                        { value: '烧烤', label: '烧烤'},
                        { value: '烤串', label: '烤串'},
                        { value: '日本菜', label: '日本菜'},
                        { value: '水果', label: '水果'},
                        { value: '生鲜', label: '生鲜'},
                        { value: '本帮江浙菜', label: '本帮江浙菜'},
                        { value: '面馆', label: '面馆'},
                        { value: '饮品店', label: '饮品店'},
                        { value: '特色菜', label: '特色菜'},
                        { value: '川菜', label: '川菜'},
                        { value: '食品滋补', label: '食品滋补'},
                        { value: '茶馆', label: '茶馆'},
                        { value: '家常菜', label: '家常菜'},
                        { value: '小龙虾', label: '小龙虾'},
                        { value: '烤肉', label: '烤肉'},
                        { value: '私房菜', label: '私房菜'},
                        { value: '粤菜', label: '粤菜'},
                        { value: '鱼鲜', label: '鱼鲜'},
                        { value: '农家菜', label: '农家菜'},
                        { value: '北京菜', label: '北京菜'},
                        { value: '酒吧', label: '酒吧'},
                        { value: '韩国料理', label: '韩国料理'},
                        { value: '自助餐', label: '自助餐'},
                        { value: '东北菜', label: '东北菜'},
                        { value: '湘菜', label: '湘菜'},
                        { value: '新疆菜', label: '新疆菜'},
                        { value: '东南亚菜', label: '东南亚菜'},
                        { value: '素食创意菜', label: '素食创意菜'},
                        { value: '螺蛳粉', label: '螺蛳粉'},
                        { value: '早茶', label: '早茶'},
                        { value: '中东菜', label: '中东菜'},
                        { value: '其他餐饮', label: '其他餐饮'},
                      ],
                    },
                    {
                      label: '休闲娱乐',
                      value: '休闲娱乐',
                      children: [
                        { value: '足疗按摩', label: '足疗按摩'},
                        { value: '洗浴/汗蒸', label: '洗浴/汗蒸'},
                        { value: 'KTV', label: 'KTV'},
                        { value: '酒吧', label: '酒吧'},
                        { value: '密室逃脱', label: '密室逃脱'},
                        { value: '轰趴馆', label: '轰趴馆'},
                        { value: '茶馆', label: '茶馆'},
                        { value: '私人影院', label: '私人影院'},
                        { value: '网吧网咖', label: '网吧网咖'},
                        { value: 'DIY手工坊', label: 'DIY手工坊'},
                        { value: '采摘/农家乐', label: '采摘/农家乐'},
                        { value: '文化艺术', label: '文化艺术'},
                        { value: '游乐游艺', label: '游乐游艺'},
                        { value: 'VR', label: 'VR'},
                        { value: '桌游', label: '桌游'},
                        { value: '团建拓展', label: '团建拓展'},
                        { value: '棋牌室', label: '棋牌室'},
                        { value: '桌球馆', label: '桌球馆'},
                      ],
                    },
                    {
                        label: '结婚',
                        value: '结婚',
                        children: [
                            { value: '婚纱摄影', label: '婚纱摄影'},
                            { value: '旅拍', label: '旅拍'},
                            { value: '婚宴', label: '婚宴'},
                            { value: '婚礼策划', label: '婚礼策划'},
                            { value: '婚纱礼服', label: '婚纱礼服'},
                            { value: '西服定制', label: '西服定制'},
                            { value: '婚戒首饰', label: '婚戒首饰'},
                            { value: '彩妆造型', label: '彩妆造型'},
                            { value: '司仪主持', label: '司仪主持'},
                            { value: '婚礼跟拍', label: '婚礼跟拍'},
                            { value: '婚车租赁', label: '婚车租赁'},
                            { value: '婚礼小商品', label: '婚礼小商品'},
                            { value: '个性写真', label: '个性写真'},
                            { value: '婚礼服务', label: '婚礼服务'},
                            { value: '婚房装修', label: '婚房装修'},
                        ]
                    },
                    {
                        label: '电影/演出/赛事',
                        value: '电影/演出/赛事',
                        children: [
                            { value: '电影院', label: '电影院'},
                            { value: '演出赛事', label: '演出赛事'},
                            { value: '演出场馆', label: '演出场馆'},
                            { value: '剧场/影院', label: '剧场/影院'},
                            { value: '音乐厅/礼堂', label: '音乐厅/礼堂'},
                            { value: '艺术中心/文化广场', label: '艺术中心/文化广场'},
                            { value: '赛事展览', label: '赛事展览'},
                            { value: '其他电影演出', label: '其他电影演出'},
                        ]
                    },
                    {
                        label: '丽人',
                        value: '丽人',
                        children: [
                            { value: '美发', label: '美发'},
                            { value: '美甲美睫', label: '美甲美睫'},
                            { value: '美容／SPA', label: '美容／SPA'},
                            { value: '养发', label: '养发'},
                            { value: '瘦身纤体', label: '瘦身纤体'},
                            { value: '瑜伽', label: '瑜伽'},
                            { value: '舞蹈', label: '舞蹈'},
                            { value: '韩式定妆', label: '韩式定妆'},
                            { value: '祛痘', label: '祛痘'},
                            { value: '纹身', label: '纹身'},
                            { value: '化妆品', label: '化妆品'},
                            { value: '产后塑形', label: '产后塑形'},
                            { value: '水光补水', label: '水光补水'},
                            { value: '瘦脸', label: '瘦脸'},
                            { value: '抗衰老', label: '抗衰老'},
                            { value: '双眼皮', label: '双眼皮'},
                            { value: '玻尿酸', label: '玻尿酸'},
                            { value: '美白嫩肤', label: '美白嫩肤'},
                            { value: '除皱瘦脸', label: '除皱瘦脸'},
                            { value: '白瓷娃娃', label: '白瓷娃娃'},
                            { value: '隆鼻', label: '隆鼻'},
                            { value: '超声刀', label: '超声刀'},
                            { value: '冷冻溶脂', label: '冷冻溶脂'},
                            { value: '自体脂肪填充', label: '自体脂肪填充'},
                            { value: '激光溶脂', label: '激光溶脂'},
                            { value: '黑脸娃娃', label: '黑脸娃娃'},
                            { value: '热玛吉', label: '热玛吉'},
                            { value: '开眼角', label: '开眼角'},
                        ]
                    },
                    {
                        label: '酒店',
                        value: '酒店',
                        children: [
                            { value: '五星级/豪华型', label: '五星级/豪华型'},
                            { value: '四星级/高档型', label: '四星级/高档型'},
                            { value: '三星级/舒适型', label: '三星级/舒适型'},
                            { value: '经济连锁', label: '经济连锁'},
                            { value: '情侣酒店', label: '情侣酒店'},
                            { value: '青年旅社', label: '青年旅社'},
                            { value: '客栈', label: '客栈'},
                        ]
                    },
                    {
                        label: '亲子',
                        value: '亲子',
                        children: [
                            { value: '儿童摄影', label: '儿童摄影'},
                            { value: '孕妇写真', label: '孕妇写真'},
                            { value: '满月照', label: '满月照'},
                            { value: '百天照', label: '百天照'},
                            { value: '上门拍', label: '上门拍'},
                            { value: '全家福', label: '全家福'},
                            { value: '儿童乐园', label: '儿童乐园'},
                            { value: '婴儿游泳', label: '婴儿游泳'},
                            { value: '亲子活动', label: '亲子活动'},
                            { value: '亲子会所', label: '亲子会所'},
                            { value: '儿童运动馆', label: '儿童运动馆'},
                            { value: '早教中心', label: '早教中心'},
                            { value: 'STEM', label: 'STEM'},
                            { value: '幼儿园', label: '幼儿园'},
                            { value: '托班/托儿所', label: '托班/托儿所'},
                            { value: '月子会所', label: '月子会所'},
                            { value: '月嫂/育儿嫂', label: '月嫂/育儿嫂'},
                            { value: '开奶催乳', label: '开奶催乳'},
                        ]
                    },
                    {
                        label: '游乐',
                        value: '游乐',
                        children: [
                            { value: '展馆展览', label: '展馆展览'},
                            { value: '采摘/农家乐', label: '采摘/农家乐'},
                            { value: '温泉', label: '温泉'},
                            { value: '动植物园', label: '动植物园'},
                            { value: '水上娱乐', label: '水上娱乐'},
                            { value: '滑雪', label: '滑雪'},
                            { value: '景点', label: '景点'},
                            { value: '其他旅游', label: '其他旅游'},
                        ]
                    },
                    {
                        label: '运动健身',
                        value: '运动健身',
                        children: [
                            { value: '健身中心', label: '健身中心'},
                            { value: '武术场馆', label: '武术场馆'},
                            { value: '游泳馆', label: '游泳馆'},
                            { value: '羽毛球馆', label: '羽毛球馆'},
                            { value: '溜冰场', label: '溜冰场'},
                            { value: '射箭馆', label: '射箭馆'},
                            { value: '篮球场', label: '篮球场'},
                            { value: '桌球馆', label: '桌球馆'},
                            { value: '网球场', label: '网球场'},
                            { value: '攀岩馆', label: '攀岩馆'},
                            { value: '乒乓球馆', label: '乒乓球馆'},
                            { value: '足球场', label: '足球场'},
                            { value: '高尔夫场', label: '高尔夫场'},
                            { value: '保龄球馆', label: '保龄球馆'},
                            { value: '体育场馆', label: '体育场馆'},
                            { value: '壁球馆', label: '壁球馆'},
                            { value: '其他运动', label: '其他运动'},
                        ]
                    },
                    {
                        label: '购物',
                        value: '购物',
                        children: [
                            { value: '综合商场', label: '综合商场'},
                            { value: '服饰鞋包', label: '服饰鞋包'},
                            { value: '运动户外', label: '运动户外'},
                            { value: '珠宝饰品', label: '珠宝饰品'},
                            { value: '其他购物', label: '其他购物'},
                        ]
                    },
                    {
                        label: '家装',
                        value: '家装',
                        children: [
                            { value: '装修公司', label: '装修公司'},
                            { value: '装修美图', label: '装修美图'},
                            { value: '装修资讯', label: '装修资讯'},
                            { value: '全屋定制', label: '全屋定制'},
                            { value: '家具定制', label: '家具定制'},
                            { value: '橱柜', label: '橱柜'},
                            { value: '地板', label: '地板'},
                            { value: '瓷砖石材', label: '瓷砖石材'},
                            { value: '厨卫洁具', label: '厨卫洁具'},
                            { value: '灯饰照明', label: '灯饰照明'},
                            { value: '油漆涂料', label: '油漆涂料'},
                            { value: '集成吊顶', label: '集成吊顶'},
                            { value: '成品家具', label: '成品家具'},
                            { value: '床品家纺', label: '床品家纺'},
                            { value: '窗帘', label: '窗帘'},
                            { value: '家饰餐厨', label: '家饰餐厨'},
                            { value: '智能家居', label: '智能家居'},
                            { value: '家用电器', label: '家用电器'},
                            { value: '建材卖场', label: '建材卖场'},
                            { value: '家居卖场', label: '家居卖场'},
                            { value: '灯饰卖场', label: '灯饰卖场'},
                        ]
                    },
                    {
                        label: '学习培训',
                        value: '学习培训',
                        children: [
                            { value: '外语', label: '外语'},
                            { value: '英语', label: '英语'},
                            { value: '日语', label: '日语'},
                            { value: '韩语', label: '韩语'},
                            { value: '法语', label: '法语'},
                            { value: '德语', label: '德语'},
                            { value: '留学', label: '留学'},
                            { value: '美术', label: '美术'},
                            { value: '音乐', label: '音乐'},
                            { value: '书法', label: '书法'},
                            { value: '舞蹈', label: '舞蹈'},
                            { value: '主持表演', label: '主持表演'},
                            { value: '国学', label: '国学'},
                            { value: '驾校', label: '驾校'},
                            { value: 'IT', label: 'IT'},
                            { value: '会计', label: '会计'},
                            { value: '厨师', label: '厨师'},
                            { value: '学历提升', label: '学历提升'},
                            { value: '自习室', label: '自习室'},
                            { value: '升学辅导', label: '升学辅导'},
                            { value: '学科辅导', label: '学科辅导'},
                            { value: 'STEM', label: 'STEM'},
                        ]
                    },
                    {
                        label: '生活服务',
                        value: '生活服务',
                        children: [
                            { value: '快照冲印', label: '快照冲印'},
                            { value: '文印图文', label: '文印图文'},
                            { value: '搬家运输', label: '搬家运输'},
                            { value: '生活配送', label: '生活配送'},
                            { value: '家政服务', label: '家政服务'},
                            { value: '洗涤护理', label: '洗涤护理'},
                            { value: '生活缴费', label: '生活缴费'},
                            { value: '社区服务', label: '社区服务'},
                            { value: '成人用品', label: '成人用品'},
                            { value: '家电数码维修', label: '家电数码维修'},
                            { value: '居家维修', label: '居家维修'},
                            { value: '回收', label: '回收'},
                            { value: '周边设施', label: '周边设施'},
                            { value: '通信营业厅', label: '通信营业厅'},
                            { value: '售票点', label: '售票点'},
                            { value: '银行', label: '银行'},
                            { value: '交通', label: '交通'},
                            { value: '房屋地产', label: '房屋地产'},
                            { value: '政府机构', label: '政府机构'},
                            { value: '丧葬', label: '丧葬'},
                            { value: '商业服务', label: '商业服务'},
                            { value: '律师服务', label: '律师服务'},
                            { value: '财务服务', label: '财务服务'},
                            { value: '金融', label: '金融'},
                            { value: '文化传媒', label: '文化传媒'},
                        ]
                    },
                    {
                        label: '医疗健康',
                        value: '医疗健康',
                        children: [
                            { value: '口腔齿科', label: '口腔齿科'},
                            { value: '体检中心', label: '体检中心'},
                            { value: '医院', label: '医院'},
                            { value: '药店', label: '药店'},
                            { value: '中医', label: '中医'},
                            { value: '宠物医院', label: '宠物医院'},
                            { value: '整形', label: '整形'},
                            { value: '妇幼医院', label: '妇幼医院'},
                            { value: '其他医疗', label: '其他医疗'},
                        ]
                    },
                    {
                        label: '汽车',
                        value: '汽车',
                        children: [
                            { value: '美容洗车', label: '美容洗车'},
                            { value: '维修保养', label: '维修保养'},
                            { value: '摩托车', label: '摩托车'},
                            { value: '加油站', label: '加油站'},
                            { value: '停车场', label: '停车场'},
                            { value: '汽车租赁', label: '汽车租赁'},
                            { value: '4S店／汽车销售', label: '4S店／汽车销售'},
                            { value: '配件／车饰', label: '配件／车饰'},
                            { value: '交警队', label: '交警队'},
                            { value: '汽车保险', label: '汽车保险'},
                            { value: '年检站', label: '年检站'},
                        ]
                    },
                    {
                        label: '宠物',
                        value: '宠物',
                        children: [
                            { value: '宠物店', label: '宠物店'},
                            { value: '宠物医院', label: '宠物医院'},
                        ]
                    },
                ],
            },
            {
                title: "环境描述",
                type: "ib",
                key: "env_desc",
                maxchar: 10
            },
            {
                title: "产品明细",
                type: "il",
                key: "products",
                params: ["产品名称", "产品描述"],
                defaults: ["产品", "详情"]
            },
        ]
    }],
}
export default form;