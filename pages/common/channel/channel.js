const crmList = require('../../../utils/crmList.js');
const util = require('../../../utils/util.js');
const http = require('../../../utils/http.js');

var app = getApp();
const channel_url = app.globalData.domain + 'common/pub-simple-data';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    channel_index:0,
    tit_index:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (options.channel_1_id != undefined){
      that.setData({
        item_1_index: options.channel_1_id
      })
    }
    var channel_1_arr = [];
    http.apiRequest(channel_url, function (res) {
      console.log(res);
      for (var key in res.data.channel_1) {
        var channel_1_obj = { channel_1_id: null, channel_1_name: null };
        channel_1_obj.channel_1_id = key;
        channel_1_obj.channel_1_name = res.data.channel_1[key]
        channel_1_arr.push(channel_1_obj);
      }
      that.setData({
        channel_1: channel_1_arr
      })
    }, 'post', { items: 'channel_1' });
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
  /**
   * 一级渠道
   */
  get_channel_1:function(e){
    console.log(e);
    var that = this;
    that.setData({
      item_1_index:e.target.dataset.id,
      channel_1_name: e.target.dataset.name,
      channel_index: e.target.dataset.nextindex,
      tit_index: e.target.dataset.nextindex
    });
    var channel_2_arr = [];
    http.apiRequest(channel_url, function (res) {
      console.log(res.data.channel_2);
      for (var key in res.data.channel_2) {
        var channel_2_obj = { channel_2_id: null, channel_2_name: null };
        channel_2_obj.channel_2_id = key;
        channel_2_obj.channel_2_name = res.data.channel_2[key]
        channel_2_arr.push(channel_2_obj);
      }
      that.setData({
        channel_2: channel_2_arr
      })

    }, 'post', { 'channel_2_pid': e.target.dataset.id, items:'channel_2'});
  },
  /**
   * 二级渠道
   */
  get_channel_2:function(e){
    console.log(e);
    var that = this;
    that.setData({
      item_2_index: e.target.dataset.id,
      channel_2_name: e.target.dataset.name,
      channel_index: e.target.dataset.nextindex,
      tit_index: e.target.dataset.nextindex
    });
    var channel_3_arr = [];
    http.apiRequest(channel_url, function (res) {
      console.log(res.data.channel_3);
      for (var key in res.data.channel_3) {
        var channel_3_obj = { channel_3_id: null, channel_3_name: null };
        channel_3_obj.channel_3_id = key;
        channel_3_obj.channel_3_name = res.data.channel_3[key]
        channel_3_arr.push(channel_3_obj);
      }
      that.setData({
        channel_3: channel_3_arr
      })

    }, 'post', { 'channel_3_pid': e.target.dataset.id, items: 'channel_3' });
  },
  /**
   * 三级渠道
   */
  get_channel_3:function(e){
    console.log(e);
    var that = this;
    that.setData({
      item_3_index: e.target.dataset.id,
      channel_3_name: e.target.dataset.name,
    });
  },
  /**
   * 重置渠道
   */
  rest_channel:function(e){
    var that = this;
    console.log(e);
    console.log(e.target.dataset.index <= this.data.tit_index);
    if (e.target.dataset.index <= that.data.tit_index){
        that.setData({
          tit_index: e.target.dataset.index,
          channel_index: e.target.dataset.index
        })
    }else{
      wx.showToast({
        title: '请选择上级渠道',
        icon: 'none',
        duration: 2000,
        mask: true,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },
  /**
   * 提交 channel
   */
  submitAction:function(){
    var that = this;
    var channel_obj = {
      'channel_1':that.data.item_1_index,
      'channel_1_name':that.data.channel_1_name,
      'channel_2':that.data.item_2_index,
      'channel_2_name':that.data.channel_2_name,
      'channnel_3':that.data.item_3_index,
      'channel_3_name':that.data.channel_3_name
    }
    console.log(channel_obj);
    wx.setStorage({
      key: 'selector_channel_obj',
      data: channel_obj,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    wx.navigateBack({
      delta: 1
    })
  }
})