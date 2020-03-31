// pages/security/security.js
var RSA = require('../../utils/wx_rsa.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inPut: '',
    outPut: '',
    count: '',
    outputTxt: '',
    outputCount: ''
  },

  //事件处理函数
  cal: function (e) {
    let rate = 2.5 / 10000;//佣金率
    let inPrice = this.data.inPut;//买入价
    let outPrice = this.data.outPut;//卖出价

    if (outPrice <= inPrice) {
      this.setData({
        outputTxt: '赚不了钱'
      })
    } else {
      let inTotal = 0;//总收入
      let outTotal = 0;//总付出
      let count = 99;//最低100股
      do {
        count++;
        if (outPrice * count * rate < 5) {
          inTotal = outPrice * count - 5;
        } else {
          inTotal = outPrice * count - outPrice * count * rate;
        }
        if (inPrice * count * rate < 5) {
          outTotal = inPrice * count + 5;
        } else {
          outTotal = inPrice * count + inPrice * count * rate;
        }
        inTotal = inTotal.toFixed(2);
        outTotal = outTotal.toFixed(2);
      } while (inTotal <= outTotal);

      let profit = inTotal - outTotal;
      profit = profit.toFixed(2);
      let msg = '至少买入' + count + '股\n'
        + '付出' + outTotal + '元\n'
        + '收益' + inTotal + '元\n'
        + '净落袋' + profit + '元'
      this.setData({
        outputTxt: msg
      })
    }
  },
  calCount: function () {
    let rate = 2.5 / 10000;//佣金率
    let inPrice = this.data.inPut;//买入价
    let outPrice = this.data.outPut;//卖出价
    let inTotal = 0;//总收入
    let outTotal = 0;//总付出
    let count = this.data.count;

    if (outPrice * count * rate < 5) {
      inTotal = outPrice * count - 5;
    } else {
      inTotal = outPrice * count - outPrice * count * rate;
    }
    if (inPrice * count * rate < 5) {
      outTotal = inPrice * count + 5;
    } else {
      outTotal = inPrice * count + inPrice * count * rate;
    }
    inTotal = inTotal.toFixed(2);
    outTotal = outTotal.toFixed(2);

    let profit = inTotal - outTotal;
    profit = profit.toFixed(2);

    let msg = '买入' + count + '股\n'
      + '付出' + outTotal + '元\n'
      + '收益' + inTotal + '元\n'
      + '净落袋' + profit + '元'
    this.setData({
      outputCount: msg
    })
  },
  inInput: function (e) {
    this.setData({
      inPut: e.detail.value
    })
  },
  countInput: function (e) {
    this.setData({
      count: e.detail.value
    })
  },
  outInput: function (e) {
    this.setData({
      outPut: e.detail.value
    })
  },
  back: function () {
    wx.redirectTo({
      url: '../index/index'
    })
  },
  clear: function () {
    this.setData({
      inPut: '',
      outPut: '',
      count: '',
      outputTxt: '',
      outputCount: ''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  }
})