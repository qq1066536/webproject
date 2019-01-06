//app.js
App({
  onLaunch: function() {

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },


  globalData: {
    userInfo: null,
    data: [
      {
      name: "全家",
      logo: {
        url: "../../assets/images/familymart.jpg"
      },
      banner:"/assets/images/banner.png",
      prices: [5, 10, 20, 30, 50],
      index: 0,
      page: "/pages/index/index"
    }, 
    {
      name: "肯德基",
      logo: {
        url: "../../assets/images/kfc.jpg"
      },
      page: "/pages/kfc/kfc",
      banner:"/images/banner.jpg",
      list:[
        {
          price:50,
          src:"/images/kdj1.jpg",
          desc:"今晚一起看球"
        },{
          price:100,
          src:"/images/kdj2.jpg",
          desc:"送你一家人浓浓的心意"
        },{
          price:200,
          src:"/images/kdj3.jpg",
          desc:"一份心意，送去生日的祝福"
        }
      ],
      index: 1
    },
     {
      name: "麦当劳",
      logo: {
        url: "../../assets/images/M.jpg"
      },
      index: 2
    }, {
      name: "山林",
      logo: {
        url: "../../assets/images/shanlin.jpg"
      },
      banner:"/assets/images/xsd_banner.png",
      prices:[5,10,20,50],
      index: 3,
      page:"/pages/xsd/index"
    }, {
      name: "必胜客",
      logo: {
        url: "../../assets/images/bsk.jpg"
      },
      banner:"/images/1_03.png",
      list:[{
        price:50,
        src:"/images/1.1_07.png",
        desc:"世界杯今晚约起"
      },{
        price:100,
        src:"/images/1.2_09.png",
        desc:"祝你节日快乐"
      },{
        price:200,
        src:"/images/1.3_14.png",
        desc:"走，请你吃pizza"
      }],
      page: "/pages/pizza/pizza",
      index: 4
    }, {
      name: "喜士多",
      logo: {
        url: "/assets/images/xsd.jpg"
      },
      index: 5,
      banner:"/assets/images/xsd_banner.png",
      prices:[5,10,20,50],
      page:"/pages/xsd/index"
    },{
      name:"DQ冰雪皇后",
      logo:{
        url:"/assets/images/bingxue.jpg"
      },
      banner:"/assets/images/dq_banner.png",
      index:6,
      list:[
        {
          price:20,
          src:"/assets/images/dq1.png",
          desc:"可直接抵扣等值产品,多次使用"
        },{
          price:30,
          src:"/assets/images/dq1.png",
          desc:"可直接抵扣等值商品,多次使用"
        },{
          price:50,
          src:"/assets/images/dq1.png",
          desc:"可直接抵扣等值产品,多次使用"
        },{
          price:100,
          src:"/assets/images/dq2.png",
          desc:"可直接抵扣等值商品,多次使用"
        },{
          price:200,
          src:"/assets/images/dq3.png",
          desc:"可直接抵扣等值商品,多次使用"
        }
      ],
      page:"/pages/dq/index"
    }]
  }
})