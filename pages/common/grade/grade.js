const crmList = require('../../../utils/crmList.js');
const util = require('../../../utils/util.js');
const http = require('../../../utils/http.js');

const app = getApp();
const grade_url = app.globalData.domain + 'common/pub-simple-data';
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
    var grade_arr = [];
    if(options.grade_id != undefined){
      that.setData({
        item_index: options.grade_id
      })
    }
    http.apiRequest(grade_url, function (res) {
      console.log(res);
      for (var key in res.data.grade) {
        var grade_obj = { grade_id: null, grade_name: null };
        grade_obj.grade_id = key;
        grade_obj.grade_name = res.data.grade[key]
        grade_arr.push(grade_obj);
      }
      that.setData({
        gradeArr: grade_arr
      })
    }, 'post', { items: 'grade'});

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        })
      }
    });
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

  get_grade_tap:function(e){
    var that = this;
    console.log(e);
    that.setData({
      grade_id: e.target.id,
      grade_name: e.target.dataset.name,
      item_index:e.target.dataset.index
    })
  },
  /**
   * 提交数据
   */
  submitChangeTime: function (e) {
    var that = this;
    var grade_data = {
      'grade_name': that.data.grade_name,
      'grade_id': that.data.grade_id
    }
    wx.setStorage({
      key: 'selector_grade_data',
      data: grade_data,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    wx.navigateBack({
      delta:1
    })
  },
  upper: function (e) {
    // console.log(e)
  },
  lower: function (e) {
    // console.log(e)
  },
  scroll: function (e) {
    // console.log(e)
  }
})