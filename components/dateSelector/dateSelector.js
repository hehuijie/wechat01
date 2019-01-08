const date = new Date()
const yt = date.getFullYear(),
  mt = date.getMonth() + 1,
  dt = date.getDate();
// const toDay = year + '-' + month + '-' + day

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
/**
 * 10以下的数字前面加0
 */
function addZero(i) {
  if (i <= 9) {
    i = "0" + i
  }
  return i;
}
/**
 * 格式化日期
 */
function formatDate(year, month, day) {
  addZero(month)
  addZero(day)
  return (year + "-" + month + "-" + day)
}
const app = getApp();
Component({
  properties:{
  },
  data:{
    // 这里是一些组件内部数据
    beginVal:false,
    endVal:false,
    pickViewBegin:false,
    pickViewEnd: false,
    dateBegin: '开始日期',
    dateEnd: '结束日期',
    years: years,
    months: months,
    days: days,
    beginTime: formatDate(yt,mt,dt),
    endTime: formatDate(yt, mt, dt),
    value:[9999,0,0]
  },
  methods:{
    // 自定义方法
    beginTime: function (e) {
      var that = this;
      that.setData({
        pickViewBegin: true,
        pickViewEnd: true,
        beginVal: true,
        endVal: false
      })
    },
    endTime: function (e) {
      var that = this;
      that.setData({
        pickViewBegin: false,
        pickViewEnd: true,
        beginVal: true,
        endVal: true
      })
      var myEventDetail = {};
      myEventDetail.beginTime = that.data.beginTime;
      myEventDetail.endTime = that.data.endTime;
      that.triggerEvent('chooseDataTap', myEventDetail);
    },
    bindChangeDateBegin: function (e) {
      const val = e.detail.value;
      const that = this;
      that.setData({
        beginTime: formatDate(that.data.years[val[0]], that.data.months[val[1]], that.data.days[val[2]])
      })
    },
    bindChangeDateEnd: function (e) {
      const val = e.detail.value;
      const that = this;
      that.setData({
        endTime: formatDate(that.data.years[val[0]], that.data.months[val[1]], that.data.days[val[2]])
      })
      var myEventDetail = {};
      myEventDetail.beginTime = that.data.beginTime;
      myEventDetail.endTime = that.data.endTime;
      that.triggerEvent('chooseDataTap', myEventDetail);
    },
  }
})