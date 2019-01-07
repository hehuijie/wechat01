const colorArr = ['#de93b4', '#65bee6', '#b1a4dc', '#ebc272', '#65b69d', '#9bc552', '#799ae7', '#de93b4', '#65bee6', '#b1a4dc', '#ebc272', '#65b69d', '#9bc552', '#799ae7']
/**
 * stuNum：学员人数
 * courseBetwn:课程开始时间和课表的开始时间的时间差
 * courseLen：上课时长，以60分钟为基准
 */
const classRoomDay = [
  { roomName: '钢琴1号教室', schoolName: '徐汇校区', courseArr: [{ courseName: '方克音乐赏析 4班', teacher: '刘鑫', stuNum: 20, courseTime: '09:00-10:00', courseBetwn: 0.5, courseLen: 1.5 }] },
  { roomName: '钢琴2号教室', schoolName: '莘庄校区', courseArr: [{ courseName: '方克音乐赏析 3班', teacher: '刘鑫', stuNum: 20, courseTime: '09:00-10:00', courseBetwn: 1.0, courseLen: 1.0 }] },
  { roomName: '钢琴3号教室', schoolName: '浦东校区', courseArr: [{ courseName: '方克音乐赏析 2班', teacher: '刘鑫', stuNum: 20, courseTime: '09:00-10:00', courseBetwn: 4.8, courseLen: 2.0 }] },
  { roomName: '钢琴4号教室', schoolName: '莘庄校区', courseArr: [{ courseName: '方克音乐赏析 1班', teacher: '刘鑫', stuNum: 20, courseTime: '09:00-10:00', courseBetwn: 0.5, courseLen: 2.0 }] },
  { roomName: '钢琴5号教室', schoolName: '浦东校区', courseArr: [{ courseName: '方克音乐赏析 5班', teacher: '刘鑫', stuNum: 20, courseTime: '09:00-10:00', courseBetwn: 0.2, courseLen: 1.5 }] },
  { roomName: '钢琴6号教室', schoolName: '莘庄校区', courseArr: [{ courseName: '方克音乐赏析 6班', teacher: '刘鑫', stuNum: 20, courseTime: '09:00-10:00', courseBetwn: 1.5, courseLen: 1.2 }] },
  { roomName: '钢琴4号教室', schoolName: '莘庄校区', courseArr: [{ courseName: '方克音乐赏析 1班', teacher: '刘鑫', stuNum: 20, courseTime: '09:00-10:00', courseBetwn: 0.5, courseLen: 2.0 }] },
  { roomName: '钢琴8号教室', schoolName: '浦东校区', courseArr: [{ courseName: '方克音乐赏析 7班', teacher: '刘鑫', stuNum: 20, courseTime: '09:00-10:00', courseBetwn: 5.5, courseLen: 1.6 }] },
]
const timeArr = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
const ownSchoolArr = ['徐汇校区']
const limt_week =['周一', '周二', '周四', '周五', '周六', '周日']
const classRoomWeek = [
  { roomName: '钢琴1号教室', schoolName: '徐汇校区', courseArr: [{ courseName: '方克音乐赏析 4班', teacher: '刘鑫', stuNum: 20, courseTime: '09:00-10:00', courseBetwn: 0.5, courseLen: 1.5 }] },
  { roomName: '钢琴2号教室', schoolName: '莘庄校区', courseArr: [{ courseName: '方克音乐赏析 3班', teacher: '刘鑫', stuNum: 20, courseTime: '09:00-10:00', courseBetwn: 1.0, courseLen: 1.0 }] },
  { roomName: '钢琴3号教室', schoolName: '浦东校区', courseArr: [{ courseName: '方克音乐赏析 2班', teacher: '刘鑫', stuNum: 20, courseTime: '09:00-10:00', courseBetwn: 4.8, courseLen: 2.0 }] },
  { roomName: '钢琴4号教室', schoolName: '莘庄校区', courseArr: [{ courseName: '方克音乐赏析 1班', teacher: '刘鑫', stuNum: 20, courseTime: '09:00-10:00', courseBetwn: 0.5, courseLen: 1.5 }] },
  { roomName: '钢琴5号教室', schoolName: '浦东校区', courseArr: [{ courseName: '方克音乐赏析 5班', teacher: '刘鑫', stuNum: 20, courseTime: '09:00-10:00', courseBetwn: 0.2, courseLen: 1.5 }] },
  { roomName: '钢琴6号教室', schoolName: '莘庄校区', courseArr: [{ courseName: '方克音乐赏析 6班', teacher: '刘鑫', stuNum: 20, courseTime: '09:00-10:00', courseBetwn: 1.5, courseLen: 1.2 }] },
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ownSchoolArr: ownSchoolArr,
    classRoom: classRoomDay,
    timeArr: timeArr,
    colorArr: colorArr,
    beginTime: '2019-09-01',
    endTime: '2019-01-06',
    timeCycle: 'day',
    swiper_current:0,
    week: limt_week
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight)
        that.setData({
          winHight: res.windowHeight,
          winWidth: res.windowWidth
        })
      },
      fail: function (res) { },
      complete: function (res) { },
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
  /**
   * 滚动触发事件
   */
  upper: function (e) {
    console.log('upper' + e);
  },
  lower: function (e) {
    console.log('lower' + e);
  },
  /**
   * 切换时间周期===日/周/月
   */
  tabTimeCycle:function(e){
    // console.log(e);
    var that = this;
    that.setData({
      swiper_current:e.currentTarget.dataset.index,
      timeCycle: e.currentTarget.dataset.current
    })
  }
})