import { validatenull } from './validate'

const storage = {}

/**
 * 设置Storage
 * @param params
 */
storage.setStorage = (params) => {
  const { name, content, type/* , datetime */ } = params
  const obj = {
    dataType: typeof (content),
    content: content,
    type: type,
    datetime: new Date().getTime()
  }

  if (type === 'session') {
    window.sessionStorage.setItem(name, JSON.stringify(obj))
  } else {
    window.localStorage.setItem(name, JSON.stringify(obj))
  }
}

/**
 * 获取Storage
 * @param params
 * @returns {number}
 */
storage.getStorage = (params) => {
  const { name, /* type,*/ debug } = params
  let obj = {}
  let content

  obj = window.localStorage.getItem(name)

  // console.info(obj)
  if (validatenull(obj)) {
    obj = window.sessionStorage.getItem(name)
  }
  if (validatenull(obj)) return

  obj = JSON.parse(obj)
  function evil(fn) {
    const Fn = Function // 一个变量指向Function，防止有些前端编译工具报错
    return new Fn('return ' + fn)()
  }
  if (debug) {
    return obj
  }
  if (obj.dataType === 'string') {
    content = obj.content
  } else if (obj.dataType === 'number') {
    content = Number(obj.content)
  } else if (obj.dataType === 'boolean') {
    content = evil(obj.content)
  } else if (obj.dataType === 'object') {
    content = obj.content
  }

  return content
}

/**
 * 删除Storage
 * @param params
 */
storage.removeStorage = (params) => {
  const {
    name
  } = params

  window.localStorage.removeItem(name)
  window.sessionStorage.removeItem(name)
}

storage.getAllStorage = (params) => {
  const list = []
  const {
    type
  } = params

  for (let i = 1; i <= window.sessionStorage.length; i++) {
    if (type === 'session') {
      list.push({
        name: window.sessionStorage.key(i),
        content: storage.getStorage({
          name: window.sessionStorage.key(i),
          type: 'session'
        })
      })
    } else {
      list.push(storage.getStorage({
        name: window.localStorage.key(i),
        content: storage.getStorage({
          name: window.localStorage.key(i)
        })
      }))
    }
  }

  return list
}

/**
 * 清空全部Storage
 * @param params
 */
storage.clearAllStorage = (params) => {
  const {
    type
  } = params

  if (type === 'session') {
    window.sessionStorage.clear()
    return
  }
  window.localStorage.clear()
}

export default storage
