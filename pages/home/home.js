const app = getApp();

Page({


    data: {
        partnerInfo: {},
        qrimage: "/assets/unregistered.jpg"
    },

    checkisRegistered() {
        if (!app.globalData.partnerInfo.registered) {
            wx.redirectTo({url: '/pages/propa/propa'});
        }
        return true;
    },

    onLoad(options) {
        const that = this;
        const gdata = app.globalData;
        app.loginUserOnBackend()
        .then(function() {
            app.updateUserInfo()
            .then(res => {
                if (that.checkisRegistered()) {
                    that.setData({
                        partnerInfo: res,
                        qrimage: gdata.entries.partner_qr + "?ID=" + res.ID
                    });
                }
            });
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})