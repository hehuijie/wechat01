// pages/workbench/message/message.js
const crmList = require('../../../utils/crmList.js');
const util = require('../../../utils/util.js');
const http = require('../../../utils/http.js');
/**
 * 变量
 * ownSchoolArr==》选中的校区
 * allsz == 全部校区
 * click_type=1 校区单选
 */
// let mySchoolArr = []
const app = getApp();
const allsz_url = app.globalData.domain + 'common/pub-simple-data';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: 0,
    winWidth: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (options.mySchoolArr != undefined) {
      console.log(options.mySchoolArr !== undefined)
      that.setData({
        mySchoolArr: JSON.parse(options.mySchoolArr)
      })
    }
    if (options.click_type != undefined){
      that.setData({
        click_type: options.click_type
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
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var allSchoolArr = [];
    var that = this;
    // allsz 格式转变
    http.apiRequest(allsz_url, function (res) {
      var allsz = res.data.allsz;
      for (var key in allsz) {
        var allSchool = { schoolId: '', status: 0, schoolName: '' }
        allSchool.schoolId = key;
        allSchool.schoolName = allsz[key];
        allSchoolArr.push(allSchool);
      };
      console.log(that.data.mySchoolArr);
      if (that.data.mySchoolArr !=undefined){
        // 之前选中的校区--高亮显示
        for (var i = 0; i < allSchoolArr.length; i++) {
          for (var m = 0; m < that.data.mySchoolArr.length;m++){
            if (allSchoolArr[i].schoolId === that.data.mySchoolArr[m].schoolId){
              allSchoolArr[i].status = 1;
            }
          }
        }
      }
      that.setData({
        allSchool: allSchoolArr
      })
    }, 'post', { items: 'allsz' });

  },

  selectSchool: function (e) {
    // console.log(e);
    var mySchoolArr = [];
    var that = this;
    var index = e.target.id;
    if (that.data.allSchool[index].status == 1) {
      that.data.allSchool[index].status = 0;
    } else if (that.data.allSchool[index].status == 0) {
      that.data.allSchool[index].status = 1;
    }
    /**
     * 选中的校区
     */
    for (var i = 0; i < that.data.allSchool.length; i++) {
      if (that.data.allSchool[i].status == 1) {
        mySchoolArr.push(that.data.allSchool[i]);
      }
    }
    that.setData({
      allSchool: that.data.allSchool,
      mySchoolArr: mySchoolArr
    });
  },

  /**
   *单选 
   */
  select_school:function(e){
    var mySchoolArr = [];
    var that = this;
    var index = e.target.id;
    var item_index = e.target.dataset.sindex;
    mySchoolArr.push(that.data.allSchool[index]);
    that.setData({
      mySchoolArr: mySchoolArr,
      item_index: item_index
    });
  },

  /**
   * 提交数据
   */
  submitChangeTime: function (e) {
    
    var that = this;
    var school_zoon_obj = {};
    if (that.data.click_type == 1){
      for (var i = 0; i < that.data.mySchoolArr.length; i++) {
        school_zoon_obj[that.data.mySchoolArr[i].schoolId] = 
          that.data.mySchoolArr[i].schoolName;
      }
    }else{
      school_zoon_obj = that.data.mySchoolArr
    }
    
    wx.setStorage({
      key: 'selector_school_zoon',
      data: school_zoon_obj,
    });

    wx.navigateBack({
      delta: 1,
    });
    
  }
})