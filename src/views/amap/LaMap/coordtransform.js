/* eslint-disable */
const KEYS = [
  'a8d761a013b3100f0f8ed266faa905e5',
  'cdeaf3868d6a741ba8047106bff57e07',
  '133a16b8bfffe5bd5125b11060976a8f',
  '4f223d057e5e9cf9d775022fb9ceb168',
  '4dfbb93ba03759d30a15d6d8aa56db48',
  '31931dca3593c9d4d43b13a990e62592',
  '3d99eb9c6f82239f8209c856bbc80aa2',
  '428c201636f8e2e1348c2697b8930a47',
  'cbb1eae3f6fc2831d8987f12f559aff6',
  'e71f7095deb1526e41a626830ee5b4cb',
  '4d8c07d80f62ea0fdbec087067324be8',
  '54410fec20bbf78ad8d438654b41bc0c',
  '7fdd9ee9994cb602e3d3f53772a855b8',
  '11981bb37affa7f6f459e7bcb850c524',
  'fc2fb4a93259a474eb45603dc55cedf5',
  'f51c59c1884d83d0ab945a7f59951bfa',
  '5f9cc9e2975f2801de008bb751bfe810',
  'a222444bf839cda5cf877a7ee111a46e',
  'd39d326beded74f354d3e65e556449ef'
]
var KEYINDEX = 0
/**
 * Created by Wandergis on 2015/7/8.
 * 提供了百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系之间的转换
 * coordtransform.js
 */

// 定义一些常量
var XPI = 3.14159265358979324 * 3000.0 / 180.0
var PI = 3.1415926535897932384626
var a = 6378245.0
var ee = 0.00669342162296594323
/**
 * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
 * 即 百度 转 谷歌、高德
 * @param bd_lon
 * @param bd_lat
 * @returns {*[]}
 */
export function bd09togcj02 (bd_lon, bd_lat) {
  var x = bd_lon - 0.0065
  var y = bd_lat - 0.006
  var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * XPI)
  var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * XPI)
  var gg_lng = z * Math.cos(theta)
  var gg_lat = z * Math.sin(theta)
  return [gg_lng, gg_lat]
}

/**
 * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
 * 即谷歌、高德 转 百度
 * @param lng
 * @param lat
 * @returns {*[]}
 */
export function gcj02tobd09 (lng, lat) {
  var z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * XPI)
  var theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * XPI)
  var bd_lng = z * Math.cos(theta) + 0.0065
  var bd_lat = z * Math.sin(theta) + 0.006
  return [bd_lng, bd_lat]
}

/**
 * WGS84转GCj02
 * @param lng
 * @param lat
 * @returns {*[]}
 */
export function wgs84togcj02 (lng, lat) {
  if (out_of_china(lng, lat)) {
    return [lng, lat]
  } else {
    var dlat = transformlat(lng - 105.0, lat - 35.0)
    var dlng = transformlng(lng - 105.0, lat - 35.0)
    var radlat = lat / 180.0 * PI
    var magic = Math.sin(radlat)
    magic = 1 - ee * magic * magic
    var sqrtmagic = Math.sqrt(magic)
    dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI)
    dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI)
    var mglat = lat + dlat
    var mglng = lng + dlng
    return [mglng, mglat]
  }
}
/**
 * GCJ02 转换为 WGS84
 * @param lng
 * @param lat
 * @returns {*[]}
 */
export function gcj02towgs84 (lng, lat) {
  if (out_of_china(lng, lat)) {
    return [lng, lat]
  } else {
    var dlat = transformlat(lng - 105.0, lat - 35.0)
    var dlng = transformlng(lng - 105.0, lat - 35.0)
    var radlat = lat / 180.0 * PI
    var magic = Math.sin(radlat)
    magic = 1 - ee * magic * magic
    var sqrtmagic = Math.sqrt(magic)
    dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI)
    dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI)
    var mglat = lat + dlat
    var mglng = lng + dlng
    return [lng * 2 - mglng, lat * 2 - mglat]
  }
}

function transformlat (lng, lat) {
  var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng))
  ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0
  ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0
  ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0
  return ret
}

function transformlng (lng, lat) {
  var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng))
  ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0
  ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0
  ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0
  return ret
}

/**
 * 判断是否在国内，不在国内则不做偏移
 * @param lng
 * @param lat
 * @returns {boolean}
 */
function out_of_china (lng, lat) {
  // 纬度3.86~53.55,经度73.66~135.05
  return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55)
}

export function getGeocoderAddress (x, y) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.timeout = 3000
    xhr.ontimeout = function (event) {
      resolve('请求超时')
    }
    const formData = new FormData()
    xhr.open('GET',
      `https://restapi.amap.com/v3/geocode/regeo?output=json&location=${x},${y}&key=${KEYS[KEYINDEX]}&radius=0&extensions=all`
    )
    xhr.send(formData)
    xhr.onload = () => {
      const data = JSON.parse(xhr.response)
      let res = ''
      try {
        res = data.regeocode.formatted_address
      } catch (e) {
        res = res.info
      }
      resolve(res)
    }
  })
}

/**
 *
 * @param arr[[pointX, pointY],...]
 * @returns {Promise<any>}
 */
export function getGeocoderAddressBatch (arr) {
  // 批量 转译
  const batchPoints = []
  const unit = 20 // 最多可以请求拿到的单位 （该接口最多同时请求20个点）
  const num = Math.ceil(arr.length / unit) // 拆分组合
  Array.from({length: num}).map((_, index) => {
    if (index === 0) {
      const _arr = arr.slice(0, unit)
      _arr._index = 0
      batchPoints.push(_arr)
    } else {
      const startIndex = unit * index + 1
      const _arr = arr.slice(startIndex, startIndex + unit)
      _arr._index = index
      batchPoints.push(_arr)
    }
  })
  return Promise.all(batchPoints.map(points => {
    return queryBatchPoints(points)
  })).then(pointsArr => {
    let allPoints = []
    pointsArr.map(points => {
      allPoints = allPoints.concat(points)
    })
    return allPoints
  })
  function queryBatchPoints (points) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.timeout = 3000
      xhr.ontimeout = function (event) {
        resolve(points.map(_ => '请求超时'))
      }
      const formData = new FormData()
      xhr.open('GET',
        `https://restapi.amap.com/v3/geocode/regeo?output=json&location=${points}&key=${KEYS[KEYINDEX]}&radius=0&extensions=all&batch=true`
      )
      xhr.send(formData)
      xhr.onload = () => {
        // console.error(xhr.response, '结果')
        const data = JSON.parse(xhr.response)
        let res = []
        try {
          res = data.regeocodes.map(v => v.formatted_address)
          resolve(res)
        } catch (e) {
          if (KEYINDEX++ >= KEYS.length) {
            res = points.map(_ => res.info)
            resolve(res)
          } else {
            queryBatchPoints(points).then(res => {
              resolve(res)
            })
          }
        }
      }
    })
  }
}
