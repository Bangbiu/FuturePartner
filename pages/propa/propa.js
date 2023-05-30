// pages/home/home.js
Page({
    data: {
        bgh: 560
    },
    onLoad(options) {
        const that = this;
        wx.getSystemInfo({
            success(res) {
                that.setData({
                    bgh: res.screenWidth * 1.7785
                });
                console.log(that.data.bgh);
            }
        })
    },

    onJoin() {
        wx.navigateTo({ url: '/pages/register/register' });
    }
})