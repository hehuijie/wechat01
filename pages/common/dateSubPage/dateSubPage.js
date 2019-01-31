const util = require('../../../utils/util.js');
const http = require('../../../utils/http.js');

const date = new Date()
const yt = date.getFullYear(),
  mt = date.getMonth() + 1,
  dt = date.getDate();

var years = []
var months = []
var days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}
for (let i = 1; i <= 12; i++) {
  months.push(i)
}
for (let i = 1; i <= 31; i++) {
  days.push(i)
}

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date_active: 1,
    years: years,
    months: months,
    days: days,
    value: [9999, 0, 0]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var that = this;
    that.setData({
      start_time: options.start_time,
      end_time: options.end_time
    })
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
  beginTime: function (e) {
    console.log(e);
    var that = this;
    that.setData({
      date_active: e.target.dataset.index,
      pickViewBegin: true,
      pickViewEnd: false
    })
  },
  endTime: function (e) {
    var that = this;
    that.setData({
      date_active: e.target.dataset.index,
      pickViewBegin: false,
      pickViewEnd: true
    })
  },
  /**
   * 日期选择器
   */
  bindChangeDateBegin: function (e) {
    console.log(e);
    var val = e.detail.value;
    var that = this;
    that.setData({
      start_time: util.formatDate(new Date(that.data.years[val[0]], that.data.months[val[1]] - 1, that.data.days[val[2]]))
    })
  },
  bindChangeDateEnd: function (e) {
    const val = e.detail.value;
    const that = this;
    that.setData({
      end_time: util.formatDate(new Date(that.data.years[val[0]], that.data.months[val[1]] - 1, that.data.days[val[2]]))
    })
  },
  /**
   * 确定
   */
  submitChangeTime: function (e) {
    var that = this;
    var date_obj = {};

    date_obj.start_time = that.data.start_time;
    date_obj.end_time = that.data.end_time;
    
    wx.setStorage({
      key: 'selector_date',
      data: date_obj,
    });

    wx.navigateBack({
      delta: 1,
    });
  }
})