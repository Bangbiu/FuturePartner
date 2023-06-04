import Message from 'tdesign-miniprogram/message/index';
import form from "./data/form.js"
const app = getApp();

Page({

    data: {
        form,
        state: "editing",
        step: 0,

        cas: {
            on: false,
            title: "",
            group: "",
            field: "",
        },

        pop: {
            on: false,
            target: undefined,
            params: [],
            values: []
        },

        inputStyle: 'border: 2rpx solid rgba(220,220,220,1);border-radius: 12rpx;margin-top: 40rpx;',
        cellStyle: 'border: 2rpx solid rgba(220,220,220,1);margin-top: 40rpx;',
    },
    onLoad(options) {
        const that = this;
        this.setData({form: that.data.form});
    },

    onUserInput(args) {
        const group = args.currentTarget.dataset.group;
        const field = args.currentTarget.dataset.field;
        const that = this;
        this.data.form.dataset[group][field] = args.detail.value;
        this.setData({
            form: that.data.form,
            casField: "",
            casGroup: ""
        })
    },

    onAddItem(args) {
        const ds = args.currentTarget.dataset;
        const target = this.data.form.dataset[ds.group][ds.field]
        const that = this;
        if (target.length >= 20) return;
        target.push(ds.defs);
        this.setData({
            form: that.data.form,
        });
        this.onEdit({
            currentTarget: {
                dataset: {
                    group: ds.group,
                    field: ds.field,
                    params: ds.params,
                    index: that.data.form.dataset[ds.group][ds.field].length - 1
                }
            }
        });
    },

    onDelete(args) {
        const ds = args.currentTarget.dataset;
        const that = this;
        this.data.form.dataset[ds.group][ds.field].splice(ds.index, 1);
        this.setData({
            form: that.data.form,
        })
    },

    onEdit(args) {
        const ds = args.currentTarget.dataset;
        const pop = {
            on: true,
            target: this.data.form.dataset[ds.group][ds.field][ds.index],
            params: ds.params,
        };
        pop["values"] = [...pop.target];
        this.setData({pop: pop});
    },

    onPopInput(args) {
        const index = args.currentTarget.dataset.index;
        this.setData({['pop.values[' + index + ']']: args.detail.value});
        //console.log(this.data.pop.values);
    },

    onConfirmEdit(args) {
        const that = this;
        this.onCancelEdit();
        Object.assign(this.data.pop.target, this.data.pop.values);
        this.setData({form: that.data.form});
    },

    onCancelEdit(args) {
        this.setData({
            ['pop.on']: false,
            ['cas.on']: false
        }) ;
    },

    onChangeStep(args) {
        if (args.detail.current != undefined)
            this.setData({ step: args.detail.current });
        else
        this.setData({ step: this.data.step + 1 });
        //this.setData({step: this.data.step + 1});
    },

    onSubmit(args) {
        const ds = this.data.form.dataset;
        const that = this;
        // Verify
        if (!this.verifyDataIntegrity(ds)) {
            this.showError();
            return;
        }
        //Loading
        this.setData({state: "processing"});
        wx.showToast({title: "正在上传", icon:  "loading", duration: 10000});
        //Preprocessing
        const hostInfo = Object.assign({}, ds.host);
        hostInfo.inviter_id = ds.inviter.id;
        hostInfo.inviter_type = ds.inviter.type;
        hostInfo.products = JSON.stringify(hostInfo.products);
        hostInfo.owner_id = app.globalData.user_openid;
        console.log(hostInfo);
        
        //Send
        app.sendAPIRequest(app.globalData.entries.reg_user, ds.user)
        .then(res => {
            app.sendAPIRequest(app.globalData.entries.reg_host, hostInfo)
            .then(res => {
                that.setData({state: "editing"});
                wx.hideToast();
                wx.showToast({title: "注册成功", icon:  "success", duration: 3000});
                setTimeout(wx.reLaunch, 1000, {url: '/pages/home/home'});
            });
        });

    },

    verifyDataIntegrity(ds) {
        console.log(ds);
        for (const grp in ds) {
            for (const fld in ds[grp]) {
                const value = ds[grp][fld];
                if (value == undefined) return false
                if (value instanceof Array && value.length == 0) return false;
            }
        }
        return true;
    },

    showError(args) {
        Message.error({
            context: this,
            offset: [20, 20],
            duration: 5000,
            content: '输入信息不完整',
        });
        return;
    },

    showCascader(args) {
        const ds = args.currentTarget.dataset;
        const cas = Object.assign({on: true}, ds);
        this.setData({
            cas: cas
        });
    },
})