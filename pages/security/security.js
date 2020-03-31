// pages/security/security.js
var RSA = require('../../utils/wx_rsa.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputTxt: '',
    outputTxt: '',
    publicKey: '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDbRk91ShVh0/eZlG11GOTVysrgQWFZ/wZc0GhBnqbqRgqL19LOHbddVNzFsu1rVJLPzcqcJWGV1i/CcRnLuR/fcUsgcd3uBAL233akRD3uyCWICJjLO98u9y7+SNb3/D/XLKKK82tYQGKpjCbL08R9MPkn+Oi75cmSXS58I5l9PwIDAQAB-----END PUBLIC KEY-----',
    privateKey: '-----BEGIN PRIVATE KEY-----MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBANtGT3VKFWHT95mUbXUY5NXKyuBBYVn/BlzQaEGepupGCovX0s4dt11U3MWy7WtUks/NypwlYZXWL8JxGcu5H99xSyBx3e4EAvbfdqREPe7IJYgImMs73y73Lv5I1vf8P9csoorza1hAYqmMJsvTxH0w+Sf46LvlyZJdLnwjmX0/AgMBAAECgYASJPRIQVQZnz+azsRr7x5obnpxKhfTKZ4uKfSmkWlAc4FF5xsDgUP+DhqipVauDfaECYRdfV5g1rNnBJLc37m6TVynO7dfqwJAykP7nTNYakrTKFcZLORL8Mj0BbkEmx3EiRQ1SDAErGP3tmA3irpjW1oT4LEJ0t6eg6bw2CqNaQJBAPPIfrmURMiryFagiSlJJdjF5llbsJO3IafHAbEtQRQXTXnkJVPha6267yECddzbzp9yXBGMOuYWObgakpIX4QsCQQDmQ2Typ0DLFmyWHK9fK9h7qNPPU7EOhlS6wijvOpNCfmAd3fYCO6mdb2f643ppDqG9mMVyh5Q3VgBPF/Lc7F0dAkAK9GqFal1A6z9AbUxcl5XkzNfSEiW4LZWMlYvE63SuM3He1Vq8DzgogWr3f8XOG+6ICbqLa1LGPh9v33nQqNQLAkAXXyfT6V4OPwxugCLcyhqDErPNC3WhP8lB24tEHPHtgd5Hqcvaliu1KyWmtYgrOaz5DZSc91337+bAIHIqMmORAkB5gZhRN/398MLE6pqboIglFZTuWkeUfc1R70Lo4rDOOrVTIacZ0Yb1/tMdPvTbxelyTEvNajFehpyPJW2UWaji-----END PRIVATE KEY-----',
  },

  //事件处理函数
  markInputTxt: function (e) {
    this.setData({
      inputTxt: e.detail.value,
    })
  },
  //加密
  encrypt: function () {
    let inputTxt = this.data.inputTxt;
    var encrypt_rsa = new RSA.RSAKey();
    encrypt_rsa = RSA.KEYUTIL.getKey(this.data.publicKey);
    var encStr = encrypt_rsa.encrypt(inputTxt)
    encStr = RSA.hex2b64(encStr);
    this.setData({
      outputTxt: encStr
    })
  },
  //解密
  decrypt: function () {
    let inputTxt = this.data.inputTxt;
    var decrypt_rsa = new RSA.RSAKey();
    decrypt_rsa = RSA.KEYUTIL.getKey(this.data.privateKey);
    var encStr = RSA.b64tohex(inputTxt);
    var decStr = decrypt_rsa.decrypt(encStr)
    this.setData({
      outputTxt: decStr
    })
   },
  back: function () {
    wx.redirectTo({
      url: '../index/index'
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