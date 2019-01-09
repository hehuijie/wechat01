const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
// 日期 如：2019-01-09
const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}
// 获取 一周的开始日期
const formatWeekFirstDay = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekDay = date.getDay()
  return [year, month, day - weekDay + 1 ].map(formatNumber).join('-')
}
// 获取 一周的结束日期
const formatWeekLastDay = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekDay = date.getDay()
  // new Date(tYear, tMonth, tDay + (6 - tWeekDay) + 1)
  return [year, month, day + (6 - weekDay) + 1].map(formatNumber).join('-')
}

// 获取 某月的开始日期
const formatMonthFirstDay = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, 1].map(formatNumber).join('-')
}

// 获取 某月的结束日期
const formatMonthLastDay = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, formatMonthDays(date)].map(formatNumber).join('-')
}

// 获取某月份的天数
const formatMonthDays = date => {
  const year = date.getFullYear()
  const month = date.getMonth()

  const monthDate = new Date(year, month, 1);
  const nextMonthDate = new Date(year, month + 1, 1);

  return (nextMonthDate - monthDate) / (1000 * 60 * 60 * 24)
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const check = res => {
    return typeof res === 'object' && res.errno === 0;
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  formatWeekFirstDay: formatWeekFirstDay,
  formatWeekLastDay: formatWeekLastDay,
  formatMonthFirstDay: formatMonthFirstDay,
  formatMonthLastDay: formatMonthLastDay,
  formatMonthDays: formatMonthDays,
  check : check
}
