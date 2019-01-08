const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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
    
  },
  /**
   * 自定义组件--传值
   */
  chooseData:function(e){
    console.log(e);
    app.globalData.startTime= e.detail.beginTime;
    app.globalData.endTime = e.detail.endTime;
  },
  /**
   * 确定
   */
  submitChangeTime:function(e){
    console.log(app.globalData.startTime)
    wx.switchTab({
      url: '../../workbench/stat/stat',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})