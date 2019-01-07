var dateStyle = function(obj){
  console.log(objsssss);
}
function addZero(i) {
  if (i <= 9) {
    i = "0" + i
  }
  return i;
}
/**
 * 格式化日期
 */
function formatDate(time) {
  var timeYear = time.getFullYear();
  var timeMonth = time.getMonth();
  var timeDay = time.getDate();
  addZero(timeMonth)
  addZero(timeDay)
  return (timeYear + "-" + timeMonth + "-" + timeDay);
}

/**
 * 获得某月的天数
 */
function getMonthDays(month) {
  var monthStartDate = new Date(tYear, month, 1);
  var monthEndDate = new Date(tYear, month + 1, 1);
  var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
  return days;
}

/**
 * 1、今天是周几
 * 2、本周的起始时间getWeekStartDate/getWeekEndDate
 * 3、本月的起始时间getMonthStartDate/getMonthEndDate
 */
const tWeekDay = date.getDay()
const getWeekStartDate = new Date(tYear, tMonth, tDay - tWeekDay + 1)
console.log('本周开始日期' + formatDate(getWeekStartDate))
const getWeekEndDate = new Date(tYear, tMonth, tDay + (6 - tWeekDay) + 1)
console.log('本周结束日期' + formatDate(getWeekEndDate))
const getMonthStartDate = new Date(tYear, tMonth, 1)
console.log('本月开始日期' + formatDate(getMonthStartDate))
const getMonthEndDate = new Date(tYear, tMonth, getMonthDays(tMonth - 1))
console.log('本月结束日期' + formatDate(getMonthEndDate))

/**
 * 在一个月有31天的时候，本月的结束日期会自动变成下个月的1号
 */
module.exports = dateStyle;