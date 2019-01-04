//category.js
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: 'Wechat',
    headMessage: '分类列表',
    a: 1,
    b: 2,
    c: 3,
    toView: 'red',
    scrollTop: 100,
    array01: [{ message: '下标名默认index'}, { message: '变量名默认item'}],
    array02: ['array01','array02'],
    array03:[
      { message:'步先生'},
      { message: '赵先生' },
      { message: '朱先生' },
      { message: '张先生' },
      { message: '刘先生' },
      { message: '袁先生' },
      { message: '徐先生' }
    ],
    objectArray:[
      { id: 5, unq:'unique_5'},
      { id: 4, unq:'unique_4'},
      { id: 3, unq:'unique_3'},
      { id: 2, unq:'unique_2'},
      { id: 1, unq:'unique_1'},
      { id: 0, unq:'unique_0'},
    ],
    numberArray:[1,2,3,4],
    num:11
  },
  changeName:function(e){
    this.setData({
      name:'MINA',
      headMessage:'第二个页面'
    })
  },
  changeNum:function(e){
    this.setData({
      num:5.5
    })
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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
  switch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function (e) {
    const length = this.data.objectArray.length
    console.log(length + '----' + this.data.objectArray)
    this.data.objectArray = [{ id: length, unq: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  }
})