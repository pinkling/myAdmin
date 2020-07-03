import log from './util.log.js'
import cookies from './util.cookies.js'
import storage from './util.storage.js'
import time from './util.time.js'
// import db from './util.db'

// import CryptoJS from 'crypto-js'
import { validatenull } from './validate'

const util = {
  time,
  storage,
  cookies,
  // db,
  log
}

/**
 * @description 更新标题
 * @param {String} title 标题
 */
util.title = function(titleText) {
  const processTitle = process.env.VUE_APP_TITLE || 'D2Admin'
  window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ''}`
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
util.open = function(url) {
  const a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.setAttribute('id', 'd2admin-menu-link')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById('d2admin-menu-link'))
}

/**
 * 加密处理
 */
// util.encryption = (params) => {
//   // let { data, type, param, key } = params
//   const result = JSON.parse(JSON.stringify(params.data))
//
//   if (params.type === 'Base64') {
//     params.param.forEach(ele => {
//       result[ele] = btoa(result[ele])
//     })
//   } else {
//     params.param.forEach(ele => {
//       const data = result[ele]
//       const key = CryptoJS.enc.Latin1.parse(params.key)
//       const iv = key
//       // 加密
//       const encrypted = CryptoJS.AES.encrypt(
//         data,
//         key, {
//           iv: iv,
//           mode: CryptoJS.mode.CBC,
//           padding: CryptoJS.pad.ZeroPadding
//         })
//       result[ele] = encrypted.toString()
//     })
//   }
//   return result
// }

/**
 * @author jing.fu@topevery.club
 * @date 2018/11/28 11:14:42
 * @Description:  格式化菜单
 */
// util.formatRoutes = (aMenu) => {
//   const aRouter = []
//
//   aMenu.forEach(oMenu => {
//     const {
//       path,
//       component,
//       name,
//       icon,
//       children,
//       routeName,
//       id
//     } = oMenu
//     if (!validatenull(id)) {
//       const oRouter = {
//         path: path,
//         name: routeName,
//         title: name,
//         icon: icon,
//         page: component,
//         meta: { auth: true, title: name },
//         component(resolve) {
//           if (component === 'Layout' || validatenull(component)) {
//             require(['../pages/index/page.vue'], resolve)
//           } else {
//             require([`../${component}.vue`], resolve)
//           }
//         },
//         /* component: (resolve) => {
//           if (component === 'Layout' || validatenull(component)) {
//             import(`@/pages/index/page.vue`).then((module) => {
//               resolve(module)
//             })
//           } else {
//             import(`@/${component}.vue`).then((module) => {
//               resolve(module)
//             })
//           }
//         },*/
//         children: validatenull(children) ? undefined : util.formatRoutes(children)
//       }
//       aRouter.push(oRouter)
//     }
//   })
//
//   return aRouter
// }

/**
 * 动态插入css
 */
util.loadStyle = url => {
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}

/**
 * 根据字典的value查找对应的index
 */
util.findArray = (dic, value, valueKey) => {
  valueKey = valueKey || 'value'

  for (let i = 0; i < dic.length; i++) {
    if (dic[i][valueKey] === value) {
      return i
    }
  }
  return -1
}

/**
 * 根据字典的value显示label
 */
util.findByvalue = (dic, value) => {
  let result = ''
  if (validatenull(dic)) return value

  if (typeof (value) === 'string' || typeof (value) === 'number') {
    let index = 0
    index = util.findArray(dic, value)
    if (index !== -1) {
      result = dic[index].label
    } else {
      result = value
    }
  } else if (value instanceof Array) {
    result = []
    let index = 0

    value.forEach(ele => {
      index = util.findArray(dic, ele)
      if (index !== -1) {
        result.push(dic[index].label)
      } else {
        result.push(value)
      }
    })

    result = result.toString()
  }
  return result
}

/**
 * 总体路由处理器
 */
util.resolveUrlPath = (url, name) => {
  let reqUrl = url

  if (url.indexOf('#') !== -1 && url.indexOf('http') === -1) {
    const port = reqUrl.substr(reqUrl.indexOf(':'))
    reqUrl = `/myiframe/urlPath?src=${this.$baseUrl}${port}${reqUrl.replace('#', '').replace(port, '')}}&name=${name}`
  } else if (url.indexOf('http') !== -1) {
    reqUrl = `/myiframe/urlPath?src=${reqUrl}&name=${name}`
  } else {
    reqUrl = `${reqUrl}`
  }

  return reqUrl
}

/**
 * 递归寻找子类的父类
 */
util.findParent = (menu, id) => {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].children.length !== 0) {
      for (let j = 0; j < menu[i].children.length; j++) {
        if (menu[i].children[j].id === id) {
          return menu[i]
        } else {
          if (menu[i].children[j].children.length !== 0) {
            return util.findParent(menu[i].children[j].children, id)
          }
        }
      }
    }
  }
}

/**
 * 树形数组转线性数组
 * root 树形数组
 * temp 线性数组
 * param 可选 树形数组属性
 */
util.treeConvertList = (root, temp, param) => {
  if (root) {
    for (let i = 0; i < root.length; i++) {
      const node = root[i]
      if (node.children && node.children.length !== 0) {
        util.treeConvertList(node.children, temp, param)
      } else {
        temp.push(param ? node['id'] : node)
      }
    }
  }
  return temp
}

/**
 * @author jing.fu@topevery.club
 * @date 2019/03/14 19:19:55
 * @Description: 线性数组转树形
 */
util.listConvertTree = (root, p_key = 'parentId', p_id = '0') => {
  const retArray = []

  if (root) {
    root.forEach((item) => {
      if (item[p_key] === p_id) {
        const o = {}

        for (const key in item) {
          o[key] = item[key]
        }

        o.children = util.listConvertTree(root, p_key, item.id)

        retArray.push(o)
      }
    })
  }

  return retArray
}

/**
 * 生成随机len位数字
 */
util.randomLenNum = (len, date) => {
  let random = ''
  random = Math.ceil(Math.random() * 10000000000000).toString().substr(0, typeof len === 'number' ? len : 4)
  if (date) random = random + Date.now()
  return random
}

util.cleanArray = (actual) => {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

util.param = (json) => {
  if (!json) return ''
  return util.cleanArray(Object.keys(json).map(key => {
    if (json[key] === undefined) return ''
    return encodeURIComponent(key) + '=' +
      encodeURIComponent(json[key])
  })).join('&')
}

util.param2Obj = (url) => {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  const req = JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
  if (req.params && req.params.length !== 2) {
    req.params = JSON.parse(req.params)
  }
  return req
}
/**
 * @author: zhiheng.shi@topevery.club
 * @Date: 2019-10-25 13:26:14
 * @description: 时间戳转换为时间并格式化
 */
util.timetoData = (v, format, z) => {
  if (v === 10) {
    return ''
  }
  if (z === 10) {
    const save_v_h = parseInt(v / (1000 * 60 * 60))
    const save_v_m = parseInt((v - save_v_h * 1000 * 60 * 60) / (1000 * 60))
    const save_v_s = parseInt((v - (save_v_h * 1000 * 60 * 60) - (save_v_m * 1000 * 60)) / 1000)

    return (save_v_h + '小时' + save_v_m + '分钟' + save_v_s + '秒')
  }
  format = format || 'yyyy-MM-dd hh:mm:ss'
  if (!v) return ''
  var oDate = new Date(v)
  const o = {
    'oDate': oDate,
    'oYear': oDate.getFullYear(),
    'oMonth': (oDate.getMonth() + 1),
    'oDay': oDate.getDate(),
    'oHour': oDate.getHours(),
    'oMin': oDate.getMinutes(),
    'oSec': oDate.getSeconds()
  }
  Object.keys(o).forEach(function(key) {
    if (parseInt(o[key]) < 10) {
      o[key] = '0' + o[key]
    }
  })
  if (format === 'yyyy-MM-dd hh:mm:ss') {
    return (o.oYear + '-' + o.oMonth + '-' + o.oDay + ' ' + o.oHour + ':' + o.oMin + ':' + o.oSec)
  } else if (format === 'yyyy/mm/dd') {
    return (o.oYear + '/' + o.oMonth + '/' + o.oDay + ' ' + o.oHour + ':' + o.oMin + ':' + o.oSec)
  }
}
/**
 * @author jing.fu@topevery.club
 * @date 2019/01/10 10:58:55
 * @Description: 标准时间格式化
 */
util.formatDate = (v, format) => {
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
 * @date 2019/04/29 16:36:55
 * @Description: 根据code查询字典
 */
util.findDicByCode = (list, code) => {
  if (list === undefined || list.length <= 0) return code

  if (code !== undefined && code !== null && code !== '') {
    for (let i = 0; i < list.length; i++) {
      if (code === list[i].code) {
        return list[i].name
      }
    }
  }

  return code
}

/**
 * @author jing.fu@topevery.club
 * @date 2019/06/26 20:26:57
 * @Description: 判断两个对象是否相等
 */
util.isObjectEqual = (a, b) => {
  // 获取a、b的类型
  const classNameA = toString.call(a)
  const classNameB = toString.call(b)

  if (classNameA === '[object Object]' && classNameB === '[object Object]') {
    const propsA = Object.getOwnPropertyNames(a)
    const propsB = Object.getOwnPropertyNames(b)

    if (propsA.length !== propsB.length) {
      return false
    }

    for (let i = 0; i < propsA.length; i++) {
      const propName = propsA[i]

      if (a[propName] !== b[propName]) {
        return false
      }
    }
    return true
  }

  return false
}

//  格式化文件大小
util.renderSize = (value) => {
  if (value === null || value === '') {
    return '0 Bytes'
  }
  // eslint-disable-next-line no-array-constructor
  var unitArr = new Array('Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
  var index = 0
  var srcsize = parseFloat(value)
  index = Math.floor(Math.log(srcsize) / Math.log(1024))
  var size = srcsize / Math.pow(1024, index)
  //  保留的小数位数
  size = size.toFixed(2)
  return size + unitArr[index]
}

util.fontSize = (res) => {
  const docEl = document.documentElement
  const clientWidth = window.innerWidth || docEl.clientWidth || document.body.clientWidth
  if (!clientWidth) return
  const fontSize = 100 * (clientWidth / 3840)
  return res * fontSize
}

util.formatNum = (num, point = 2) => {
  // const numStr = num.toString().split('.')[0]
  // if (numStr.length < 5) { // 判断数字有多长,如果小于6,,表示10万以内的数字,让其直接显示
  //   return numStr + '个'
  // } else if (numStr.length >= 5) { // 如果数字大于6位,小于8位,让其数字后面加单位万
  //   const decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point)
  //   return parseFloat(parseInt(num / 10000) + '.' + decimal)
  // }
  return (Number(num) / 10000).toFixed(point)
}

export default util
