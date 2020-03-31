//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showView: false,
    txt: '',
    keyword: '',
    imgUrls: [
      '../img/swiper.png',
      '../img/swiper.png',
      '../img/swiper.png',
      '../img/swiper.png',
      '../img/swiper.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  //事件处理函数
  markKeyword: function(e) {
    this.setData({
      keyword: e.detail.value,
    })
  },
  search: function() {
    let keyword = this.data.keyword;
    wx.redirectTo({
      url: '../list/list?keyword=' + keyword
    })
  },
  show_more: function(){
    this.setData({
      showView: !this.data.showView
    })
  },
  to_security:function(){
    wx.redirectTo({
      url: '../security/security'
    })
  },
  to_shares: function () {
    wx.redirectTo({
      url: '../shares/shares'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})