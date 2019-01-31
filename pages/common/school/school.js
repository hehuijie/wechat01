// pages/workbench/message/message.js
const crmList = require('../../../utils/crmList.js');
const util = require('../../../utils/util.js');
const http = require('../../../utils/http.js');
/**
 * 变量
 * ownSchoolArr==》选中的校区
 * allsz == 全部校区
 */
// let mySchoolArr = []
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: 0,
    winWidth: 0,
    defaultSize: 'default'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    var that = this;
    if (options.mySchoolArr !== undefined || !options.mySchoolArr !== null) {
      console.log('school-onload');
      that.setData({
        mySchoolArr: JSON.parse(options.mySchoolArr)
      })
    }
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        })
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('school-onReady');
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('school-onshow');
    var allSchoolArr = [];
    var that = this;
    // allsz 格式转变
    const allsz_url = app.globalData.domain + 'common/pub-simple-data';
    http.apiRequest(allsz_url, function (res) {
      var allsz = res.data.allsz;
      for (var key in allsz) {
        var allSchool = { schoolId: '', status: 0, schoolName: '' }
        allSchool.schoolId = key;
        allSchool.schoolName = allsz[key];
        allSchoolArr.push(allSchool);
      };
      // 之前选中的校区--高亮显示
      for (var i = 0; i < allSchoolArr.length; i++) {
        for (var m = 0; m < that.data.mySchoolArr.length;m++){
          if (allSchoolArr[i].schoolId === that.data.mySchoolArr[m].schoolId){
            allSchoolArr[i].status = 1;
          }
        }
      }
      that.setData({
        allSchool: allSchoolArr
      })

    }, 'post', { items: 'allsz' });
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
   * 获取组件修改后的数据
   */
  submitActionList: function (e) {
    var that = this;
    console.log(e.detail);
    app.globalData.schoolZone=e.detail
  },
  /**
   * 提交数据
   */
  submitChangeTime: function (e) {
    var that = this;
    wx.navigateBack({
      data:1
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