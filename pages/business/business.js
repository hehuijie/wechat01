{
  Page({
  
    /**
     * 页面的初始数据
     */
    data: {
      businessListArray:[
        { className: 'categoryContinue', categoryTip: '续', categorySchool: '徐汇校区', categoryTime:'2018-09-28 上午10:10', categoryMsg:'您的客户张丹的新概念第一册1班将在2018-10-30结课，请点击这里立即跟进'},
        { className: 'categoryNew', categoryTip: '新', categorySchool: '闵行校区', categoryTime: '2018-09-28 上午10:10', categoryMsg: '有10位新客户被分配到徐汇校区，请点击这里立即跟进' }
      ]
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.setData({
        title:options.title
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
      
    }
  })
}