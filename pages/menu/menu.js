{
  const date = new Date()
  const years = []
  const months = []
  const days = []

  for (let i = 1990; i <= date.getFullYear(); i++) {
    years.push(i)
  }

  for (let i = 1; i <= 12; i++) {
    months.push(i)
  }

  for (let i = 1; i <= 31; i++) {
    days.push(i)
  }
  /***
   * 还需要调整如下：
   * 1、每月对应的实际天数
   * 2、当前年的后几年也显示
   * 3、根据当天的日期自动定位
   */
  const listData = [];
  Page({
  
    /**
     * 页面的初始数据
     */
    data: {
      workList: ['运营监控','业务数据','待办事项'],
      itemArray: [
        { viewid: 0, message: '主页测试',file:'menu'}, 
        { viewid: 0, message: '运营监控',file: 'oprtate'}, 
        { viewid: 0, message: '业务通知',file: 'business'}
      ],
      msg:'menu',
      item:{
        index:0,
        itemMsg:'this is a template',
        time:'2018-09-27'
      },
      goodList:[
        {textMsg: '消',msgList: '还有12节课待课消'},
        {textMsg: '排',msgList: '还有12节课待课消'},
        {textMsg: '收',msgList: '还有12节课待课消'}
      ],
      winWidth:0,
      winHeight:0,
      currentTab:0,
      searchTimeBegin:'2018-09-01',
      searchTimeEnd:'2018-09-30',
      searchTimeArray:['日','周','月'],
      channelCurrent:0,
      channelArrayOne:['线下活动','线上活动','老生推荐','米校营销','TNT'],
      channelArrayTwo: ['商场活动', '广场活动', '校区活动'],
      channelArrayThree: ['000', '111', '222', '333', '666'],
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: [9999, 1, 1],
    },
    tabChange:function(event){
      console.log(event);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var that = this;
      console.log("37"+that);
      /**
       * 获取系统信息
       */
      wx.getSystemInfo({
        success: function(res) {
          that.setData({
            winWidth:res.windowWidth,
            winHeight:res.windowHeight
          })
        },
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
    bindchange:function(e){
      var that = this;
      that.setData({
        currentTab:e.detail.current
      })
    },
    swichNav:function(e){
      var that = this;
      if(that.data.currentTab == e.target.dataset.current){
        return false;
      }else{
        that.setData({
          currentTab: e.target.dataset.current
        })
      }
    },
    swichChannel:function(e){
      var that = this;
      console.log(e.target.dataset.current + "////" + e.target.dataset+"|||125");
      if(that.data.channelCurrent == e.target.dataset.current){
        return false;
      }else{
        that.setData({
          channelCurrent: e.target.dataset.current
        })
      }
    },
    // 来源渠道tab
    bindchangeChannel:function(e){
      var that = this;
      console.log(e.detail.current + "////" + e.detail + "|||126");
      that.setData({
        channelCurrent: e.detail.current
      })
    },
    // 渠道内容点击事件
    channelValueClick:function(e){
      var that = this;
      console.log(e.target.dataset.value+"|||145");
    },
    /**
     * 在获取属性值的时候，e.target.dataset.***的用法来源
     * 在swiper里的bindchange事件里 e.datail.***的用法来源
     */
    bindChangeDate: function (e) {
      const val = e.detail.value
      this.setData({
        year: this.data.years[val[0]],
        month: this.data.months[val[1]],
        day: this.data.days[val[2]]
      })
    }
  })
}