//index.js
//获取应用实例
const app = getApp()
var types = ['default','primary','warn']
Page({
  data: {
    motto: 'Hello World',
    userName: 'Hello 小程序',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    defaultSize:'default',
    primarySize: 'default',
    warnSize: 'default',
    loading:false,
    plain:false,
    disabled:false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  },
  switch1Change:function(e){
    console.log('switch1 发生chang事件，携带值为',e.detail.value);
  },
  switch2Change: function (e) {
    console.log('switch2 发生chang事件，携带值为', e.detail.value);
  },
  setDisabled:function(e){
    this.setData({
      disabled:!this.data.disabled
    })
  },
  setPlain:function(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function(e) {
    this.setData({
      loading: !this.data.loading
    })
  },
})
// Page(pageObject);
