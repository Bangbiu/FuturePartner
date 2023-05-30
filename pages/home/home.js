const app = getApp();

Page({


    data: {
        partner_id: 1,
        partner_name: "无",
        qrimage: "/assets/unregistered.jpg"
    },

    checkisRegistered() {
        if (!app.globalData.partnerInfo.registered) {
            wx.navigateTo({ url: '/pages/propa/propa' });
            return false;
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
                        partner_id: res.ID,
                        partner_name: res.name,
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