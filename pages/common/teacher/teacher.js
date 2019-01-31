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
    var name, school_zone;
    const teacher_url = app.globalData.domain + 'eduaffair/teacher/pub-find';
    http.apiRequest(teacher_url, function (res) {
      console.log(res);
      // for (var key in res.data.rows){
      //   var teacher = {};
      //   teacher.id = res.data.rows[key].id;
      //   teacher.name = res.data.rows[key].name;
      //   teacher.level = res.data.rows[key].level,
      //   teacher.status = 0;
      // }
      that.setData({
        teacher_list:res.data.rows
      })
    }, 'post'); 
  },
  selectTeacher:function(e){
    var that = this;
    console.log(e);
    that.setData({
      status:e.target.dataset.index,
      teacher_id: e.target.dataset.id,
      teacher_name: e.target.dataset.name
    })
  },
  submitTeacher:function(){
    var that = this;
    var teacher_data = {
      'teacher_name': that.data.teacher_name,
      'teacher_id': that.data.teacher_id
    }
    console.log(teacher_data);
    wx.setStorage({
      key: 'selector_teacher_data',
      data: teacher_data,
    })
    wx.navigateBack({
      delta: 1
    })
  }
})