const crmList = require('../../../utils/crmList.js');
const util = require('../../../utils/util.js');
const http = require('../../../utils/http.js');

var app = getApp();

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
    var that = this;
    that.load_list();
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
   * 数据加载
   */
  load_list:function(){
    var that = this;

    const classroom_url = app.globalData.domain + 'eduaffair/classroom/pub-find';
    http.apiRequest(classroom_url, function (res) {
      console.log(res);
      that.setData({
        classroom_list:res.data.rows
      })
    }, 'post'); 
  },
  selectTeacher:function(e){
    var that = this;
    console.log(e);
    that.setData({
      status:e.target.dataset.index,
      classroom_id: e.target.dataset.id,
      classroom_name: e.target.dataset.name
    })
  },
  submitTeacher:function(){
    var that = this;
    var classroom_data = {
      'classroom_name': that.data.classroom_name,
      'classroom_id': that.data.classroom_id
    }
    console.log(classroom_data);
    wx.setStorage({
      key: 'selector_classroom_data',
      data: classroom_data,
    })
    wx.navigateBack({
      delta: 1
    })
  }
})