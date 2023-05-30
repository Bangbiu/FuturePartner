App({
    globalData: {
        partner_openid: "",
        session_key: "",
        partnerInfo: {},
        //backendConection
        //http://127.0.0.1/
        //https://futuremind.mynatapp.cc/
        //http://zhijianpark.top:8000/chatapi
        backendConection: "http://127.0.0.1/",
        entries: {
            login: "login_partner",
            partner_info: "get_partner_info",
            partner_qr: "partner_qr"
        }
        
    },


    sendAPIRequest(entry, data, method="POST") {
        const that = this;
        return new Promise(function(resolve, reject) {
            wx.request({
                method: method,
                url: entry,
                data: JSON.stringify(Object.assign({
                    openid: that.globalData.partner_openid
                }, data)),
                header: {'Content-Type': 'application/json'},
                success: res => {
                    if (res.statusCode == 200) 
                        resolve(res.data);
                    else
                        reject(res.data.detail);
                },
                fail: res => reject(res.errMsg)
            });
        });
    },

    
    loginUserOnBackend() {
        const that = this;
        const gdata = that.globalData;
        wx.showToast({title: "正在登录", icon:  "loading", duration: 10000});
        return new Promise(function(resolve, reject) {
            wx.login({success(res) {if(res.code) {
                that.sendAPIRequest(gdata.entries.login, {code: res.code})
                .then(res => {
                    gdata.partner_openid = res.openid;
                    gdata.session_key = res.session_key;
                    wx.hideToast();
                    console.log("logged in: " + gdata.partner_openid);
                    resolve(res);
                }).catch(err => {
                        console.error(err)
                        wx.hideToast();
                        reject(err);
                });
            }}});  
        });
    },

    
    updateUserInfo() {
        const that = this;
        const gdata = that.globalData;
        wx.showToast({title: "正在获取数据", icon:  "loading", duration: 10000});
        return new Promise(function(resolve, reject) {
            return that.sendAPIRequest(
                gdata.entries.partner_info, 
                {   
                    openid: gdata.partner_openid,
                    session_key: gdata.session_key
                }
            ).then(res => {
                gdata.partnerInfo = res
                wx.hideToast();
                console.log(res);
                resolve(res)
            }).catch(err => {
                console.error(err)
                wx.hideToast();
                reject(err)
            });
        });
    },

    onLaunch() {
        const gdata = this.globalData;
        for(const key in gdata.entries) {
            gdata.entries[key] = gdata.backendConection + gdata.entries[key];
        }
    },
});
