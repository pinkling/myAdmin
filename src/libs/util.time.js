/**
 * @author jing.fu@topevery.club
 * @date 2019/04/25 11:21:58
 * @Description: 获取时间工具类
 */

const time = {}

/**
 * @author jing.fu@topevery.club
 * @date 2019/04/25 11:34:32
 * @Description: 时间格式标准化
 */
function formatDate(v, format) {
  format = format || 'yyyy-MM-dd hh:mm:ss'

  if (!v) return ''
  let d = v

  if (typeof v === 'string') {
    if (v.indexOf('/Date(') > -1) d = new Date(parseInt(v.replace('/Date(', '').replace(')/', ''), 10))
    else d = new Date(Date.parse(v.replace(/-/g, '/').replace('T', ' ').split('.')[0]))
  }

  const o = {
    'M+': d.getMonth() + 1,
    'd+': d.getDate(),
    'h+': d.getHours(),
    'm+': d.getMinutes(),
    's+': d.getSeconds(),
    'q+': Math.floor((d.getMonth() + 3) / 3),
    'S': d.getMilliseconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (const k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }

  return format
}

/**
 * @author jing.fu@topevery.club
 * @date 2019/04/29 16:41:06
 * @Description: 获取某个时间的时间段
 */
time.getPeriod = (v, format) => {
  v = v || new Date()
  format = format || 'yyyy-MM-dd hh:mm:ss'

  let d = v

  if (typeof v === 'string') {
    if (v.indexOf('/Date(') > -1) d = new Date(parseInt(v.replace('/Date(', '').replace(')/', ''), 10))
    else d = new Date(Date.parse(v.replace(/-/g, '/').replace('T', ' ').split('.')[0]))
  }

  const start = `${d.getFullYear()}-${(d.getMonth() + 1)}-${d.getDate()} 00:00:00`
  const end = `${d.getFullYear()}-${(d.getMonth() + 1)}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

  return { startTime: formatDate(start, format), endTime: formatDate(end, format) }
}

/**
 * @author jing.fu@topevery.club
 * @date 2019/04/25 11:25:46
 * @Description: 获取当前时间
 */
time.getCurrentTime = (format) => {
  format = format || 'yyyy-MM-dd hh:mm:ss'

  return formatDate(new Date(), format)
}

/**
 * @author jing.fu@topevery.club
 * @date 2019/06/26 10:34:58
 * @Description: 获取时间差
 */
time.getDiffTime = (v, format, diff) => {
  v = v || new Date()
  format = format || 'yyyy-MM-dd hh:mm:ss'
  diff = parseInt(diff) || 0

  v = v.setDate(v.getDate() + diff)
  v = new Date(v)

  return formatDate(v, format)
}

/**
 * @author jing.fu@topevery.club
 * @date 2019/04/25 11:36:49
 * @Description: 获取某个时间的上个月
 * @Return: firstDay:第一天，lastDay:最后一天
 */
time.getLastMonth = (v, format) => {
  v = v || new Date()

  let d = v

  if (typeof v === 'string') {
    if (v.indexOf('/Date(') > -1) d = new Date(parseInt(v.replace('/Date(', '').replace(')/', ''), 10))
    else d = new Date(Date.parse(v.replace(/-/g, '/').replace('T', ' ').split('.')[0]))
  }

  let year = d.getFullYear()
  let month = d.getMonth()
  if (month === 0) {
    month = 12
    year = year - 1
  }

  const myDate = new Date(year, month, 0)

  const startDate = `${year}-${month}-1 00:00:00`// 第一天
  const endDate = `${year}-${month}-${myDate.getDate()} 23:59:59` // 最后一天

  return {
    firstDay: formatDate(startDate, format),
    lastDay: formatDate(endDate, format)
  }
}

/**
 * @author jing.fu@topevery.club
 * @date 2019/04/25 11:36:49
 * @Description: 获取某个时间的月
 * @Return: firstDay:第一天，lastDay:最后一天
 */
time.getMonth = (v, format, needLast = true) => {
  v = v || new Date()

  let d = v

  if (typeof v === 'string') {
    if (v.indexOf('/Date(') > -1) d = new Date(parseInt(v.replace('/Date(', '').replace(')/', ''), 10))
    else d = new Date(Date.parse(v.replace(/-/g, '/').replace('T', ' ').split('.')[0]))
  }

  const year = d.getFullYear()
  const month = d.getMonth() + 1

  const day = needLast ? new Date(d.getFullYear(), month, 0).getDate() : d.getDate()

  const startDate = `${year}-${month}-1 00:00:00`// 第一天
  const endDate = `${year}-${month}-${day} 23:59:59` // 最后一天

  return {
    firstDay: formatDate(startDate, format),
    lastDay: formatDate(endDate, format)
  }
}

/**
 * @author jing.fu@topevery.club
 * @date 2019/04/25 13:08:17
 * @Description: 获取某个时间的星期一和星期日
 * @Return: monday:星期一，sunday:星期天
 */
time.getMonAndSunforTime = (v, format) => {
  v = v || new Date()

  let d = v

  if (typeof v === 'string') {
    if (v.indexOf('/Date(') > -1) d = new Date(parseInt(v.replace('/Date(', '').replace(')/', ''), 10))
    else d = new Date(Date.parse(v.replace(/-/g, '/').replace('T', ' ').split('.')[0]))
  }

  const nowTime = d.getTime()
  const day = d.getDay()
  const oneDayTime = 24 * 60 * 60 * 1000

  const m_time = new Date(nowTime - (day - 1) * oneDayTime)
  const s_time = new Date(nowTime + (7 - day) * oneDayTime)

  const monday = `${m_time.getFullYear()}-${m_time.getMonth() + 1}-${m_time.getDate()} 00:00:00`
  const sunday = `${s_time.getFullYear()}-${s_time.getMonth() + 1}-${s_time.getDate()} 23:59:59`

  return {
    monday: formatDate(monday, format),
    sunday: formatDate(sunday, format)
  }
}

export default time
