import industries from "./industries"

const form = {
    title: "注册",
    dataset: {
        plan: {
            planDetail: "暂未提供"
        },
        contract: {
            contractDetail: "暂未提供"
        },
        host: {

        },
        deposit: {
            depositPayment: "200元"
        }
    },
    groups: [{
        title: "推广计划",
        key: "plan",
        hint: "",
        fields:  [
            {
                title: "合伙人计划书",
                type: "lb",
                key: "planDetail",
            },
        ],
    },{
        title: "登记信息",
        key: "host",
        hint: "",
        fields:  [
            {
                title: "姓名",
                type: "ib",
                key: "name",
                maxchar: 10
            }, 
            {
                title: "身份证号",
                type: "ib",
                key: "identification",
                maxchar: 20
            },
            {
                title: "邮寄地址",
                type: "ib",
                key: "address",
                maxchar: 10
            },
            {
                title: "电子邮箱",
                type: "ib",
                key: "email",
                maxchar: 10
            },
            {
                title: "代理区域",
                type: "cc",
                note: "选择区域",
                popupTitle: "请选择区域",
                key: "district",
                options: industries,
            },
        ]
    },{
        title: "签署合同",
        key: "contract",
        hint: "",
        fields:  [
            {
                title: "合伙人合同文本",
                type: "lb",
                key: "contractDetail",
            },
        ],
    },{
        title: "支付预付金",
        key: "deposit",
        hint: "",
        fields:  [
            {
                title: "支付预付金",
                type: "lb",
                key: "depositPayment",
            },
        ],
    }],
}
export default form;