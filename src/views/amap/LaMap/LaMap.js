import AMap from 'AMap'
// import AMapUI from 'AMapUI'
import Loca from 'Loca'
import { wgs84togcj02 } from './coordtransform'

class LaMap {
  constructor(option) {
    this.map = null
    this.mapId = option.mapId || 'map'
    this.initCenter = option.initCenter || [114.170474, 22.627021]
    this.initZoom = option.initZoom || 11
    this.wms = null
    this.borderLayer = null // 边界线
    this.lastMarker = null
    this.lastMarkerColor = null
    this.circleMarkers = {} // 圆点数据
    this.polygons = {} // 绘制区域 存放数据
    this.lastPolygonMarker = {}
    this.textMarkers = {} // 文本数据
    this.iconMarkers = {} // ICON标记
    this.massMarkers = {} // 海量标记点
    this.htmlMarkers = {} // dom标记点
    this.currentHtmlMarker = {}
    this.pointCloudLayer = null // 点云
    this.clusterLayer = null // 聚合
    this.markers = {} // 聚合
  }

  // 地图初始化
  // 需要mapId 初始中心点 初始层级
  initMap() {
    console.log('>>', this.mapId)
    console.log('>>', this.initCenter)
    console.log('>>', this.initZoom)
    this.map = new AMap.Map(this.mapId, {
      center: this.initCenter,
      mapStyle: 'amap://styles/e434399121bb5d4fbea1ac2ab6079717', // 设置地图的显示样式
      resizeEnable: true,
      viewMode: '3D',
      zooms: [10, 18],
      zoom: this.initZoom
    })
  }

  getOption(optionDefault, options) {
    return Object.assign({ ...optionDefault }, options)
  }

  // 初始化遮罩
  // paths 三维数组 [[...[113.222, 22.41]...]]
  initMask(paths, options = {}) {
    const option = this.getOption({
      wgs84togcj02: false, // 是否需要转化坐标
      strokeColor: '#00eeff',
      strokeWeight: 1,
      fillColor: '#04101e',
      fillOpacity: 0.7
    }, options)
    const outer = [
      new AMap.LngLat(-360, 90, true),
      new AMap.LngLat(-360, -90, true),
      new AMap.LngLat(360, -90, true),
      new AMap.LngLat(360, 90, true)
    ]
    const holes = []
    paths.forEach(item => {
      const arr = []
      item.forEach(obj => {
        if (option.wgs84togcj02) {
          const tmp = wgs84togcj02(obj[0], obj[1])
          arr.push(new AMap.LngLat(tmp[0], tmp[1], true))
        } else {
          arr.push(new AMap.LngLat(obj[0], obj[1], true))
        }
      })
      holes.push(arr)
    })

    const pathArray = [outer]
    pathArray.push.apply(pathArray, holes)
    const polygon = new AMap.Polygon({
      pathL: pathArray,
      strokeColor: option.strokeColor || '#00eeff',
      strokeWeight: option.strokeWeight || 1,
      fillColor: option.fillColor || '#04101e',
      fillOpacity: option.fillOpacity || 0.7
    })
    polygon.setPath(pathArray)
    this.map.add(polygon)
  }

  // 初始化边界
  // areaData: [{name: '', coordinates: [[...[113,22]...]]}]
  initAreaBorder(areaData, options = {}) {
    const option = this.getOption({
      lnglat: 'coordinates',
      opacity: 1,
      borderWidth: 3,
      color: item => {
        return '#225ea800'
      },
      borderColor: '#418BC2'
    }, options)
    this.borderLayer = new Loca.PolygonLayer({
      map: this.map
    })
    this.borderLayer.setData(areaData, {
      lnglat: option.lnglat || 'coordinates'
    })
    this.borderLayer.setOptions({
      style: {
        opacity: option.opacity || 1,
        borderWidth: option.borderWidth || 3,
        color: option.color,
        borderColor: option.borderColor || '#418BC2'
      }
    })
    this.borderLayer.render()
  }

  initWmsGrid(options = {}) {
    if (this.wms) {
      return
    }
    const option = this.getOption({
      url: '',
      blend: false,
      zooms: [10, 18],
      tileSize: 256,
      params: {
        LAYERS: 'sums_ksh:area_gd_sys',
        FORMAT: 'image/png',
        SRS: 'EPSG:3857'
      }
    }, options)
    this.wms = new AMap.TileLayer.WMS({
      url: option.url,
      blend: option.blend,
      zooms: option.zooms || [10, 18],
      tileSize: option.tileSize || 256,
      params: option.params
    })
    this.wms.setMap(this.map)
  }

  clearWmsGrid() {
    if (this.wms) {
      this.wms.setMap(null)
      this.wms = null
    }
  }

  addWmsLayer(options = {}) {
    const option = this.getOption({
      type: 'default',
      url: 'https://smartum.sz.gov.cn/szcg/geoServerApi/geoserver/sums_ksh/wms',
      blend: false,
      zooms: [10, 18],
      tileSize: 256,
      params: {
        LAYERS: 'sums_ksh:area_gd_sys',
        FORMAT: 'image/png',
        SRS: 'EPSG:3857'
      },
      clearFlag: true
    }, options)
    if (this.wmss[option.type] && option.clearFlag) {
      this.clearWmsLayer(option.type)
    }
    this.wmss[option.type] = new AMap.TileLayer.WMS({
      url: option.url,
      blend: option.blend || false,
      zooms: option.zooms || [10, 18],
      tileSize: option.tileSize || 256,
      params: option.params || {
        LAYERS: 'sums_ksh:area_gd_sys',
        FORMAT: 'image/png',
        SRS: 'EPSG:3857'
      }
    })
    this.wmss[option.type].setMap(this.map)
  }

  clearWmsLayer(type = 'default') {
    if (this.wmss[type]) {
      this.wmss[type].setMap(null)
      this.wmss[type] = null
    }
  }

  /**         圆点         **/
  // 添加点
  addCircleMarkers(data, options = {}) {
    const option = this.getOption({
      type: 'default',
      fillColor: 'rgba(0,255,255,1)',
      fillOpacity: 1,
      radius: 7,
      clickColor: 'rgba(235,97,0,1)',
      clickFlag: true,
      fitViewFlag: false,
      clearFlag: true,
      showFlag: true,
      callback: () => {
      }
    }, options)
    if (this.circleMarkers[option.type] === undefined) {
      this.circleMarkers[option.type] = []
    }

    if (option.clearFlag) {
      this.clearCircleMarkers(option.type)
    }

    data.forEach(item => {
      const center = [Number(item.lng), Number(item.lat)]
      item.markerType = option.type

      const circleMarker = new AMap.CircleMarker({
        center: center,
        radius: option.radius || 7,
        strokeColor: 'white',
        strokeWeight: 0,
        strokeOpacity: option.strokeOpacity || 0,
        fillColor: option.fillColor || 'rgba(0,255,255,1)',
        fillOpacity: option.fillOpacity || 1,
        zIndex: 10,
        bubble: true,
        cursor: 'pointer',
        clickable: true,
        extData: item
      })

      // 点击事件
      if (option.clickFlag) {
        circleMarker.on('click', e => {
          // 上一个点击点变色回来
          if (this.lastMarker !== null) {
            this.lastMarker.target.setOptions({
              map: this.map,
              fillColor: this.lastMarkerColor || 'rgba(0,255,255,1)'
            })
          }
          // 当前点变色
          this.lastMarkerColor = e.target.getOptions().fillColor
          e.target.setOptions({ map: this.map, fillColor: option.clickColor })
          this.lastMarker = e

          // 其他操作
          option.callback(e.target.getExtData())
        })
      }

      this.circleMarkers[option.type].push(circleMarker)
    })

    this.map.add(this.circleMarkers[option.type])
    // 自动调整层级
    if (option.fitViewFlag) {
      this.map.setFitView()
    }
  }

  // 清除type类型的圆点
  clearCircleMarkers(type = 'default') {
    if (this.lastMarker !== null) {
      this.map.remove(this.lastMarker)
      this.lastMarker = null
    }
    if (
      this.circleMarkers[type] &&
      this.circleMarkers[type].length > 0
    ) {
      this.map.remove(this.circleMarkers[type])
      this.circleMarkers[type] = []
    }
  }

  /**         区域         **/
  // data: {name: String, path: [[lng, lat],[lng, lat]]]
  addPolygonMarkers(data, options = {}) {
    const option = this.getOption({
      type: 'default',
      strokeStyle: 'solid',
      strokeColor: '#10CADA',
      strokeDasharray: [5, 3],
      strokeWeight: 2,
      strokeOpacity: 1,
      fillColor: '#1BB2D9',
      fillOpacity: 0.2,
      path: 'path',
      highLightFillColor: '#10CADA',
      highLightFillOpacity: 0,
      clickFlag: true,
      clearFlag: true,
      highLight: false,
      callback: () => {}
    }, options)
    if (this.polygons[option.type] === undefined) {
      this.polygons[option.type] = []
    }
    if (option.clearFlag) {
      this.clearPolygonMarkers(option.type)
    }
    data.forEach(item => {
      const polygon = new AMap.Polygon({
        path: item[option.path],
        strokeStyle: option.strokeStyle,
        strokeColor: option.strokeColor,
        strokeWeight: option.strokeWeight,
        strokeOpacity: option.strokeOpacity,
        strokeDasharray: option.strokeDasharray,
        fillOpacity: option.fillOpacity,
        fillColor: option.fillColor,
        zIndex: option.zIndex || 50,
        extData: item
      })
      polygon.name = item.name
      polygon.adcode = item.adcode
      polygon.original = item
      if (option.clickFlag) {
        polygon.on('click', e => {
          if (option.highLight) {
            // 高亮
            if (
              this.lastPolygonMarker[option.type] ===
              undefined
            ) {
              this.lastPolygonMarker[option.type] = polygon
            } else {
              this.lastPolygonMarker[option.type].setOptions({
                fillOpacity: option.fillOpacity,
                fillColor: option.fillColor
              })
              this.lastPolygonMarker[option.type] = polygon
            }
            polygon.setOptions({
              fillOpacity: option.highLightFillOpacity,
              fillColor: option.highLightFillColor
            })
          }
          option.callback(item)
        })
      }
      polygon.center = item.center || [0, 0] // 区域中心点
      // polygon.center = areasCenter[item.name] // 区域中心点
      this.polygons[option.type].push(polygon)
    })
    this.map.add(this.polygons[option.type])
  }

  clearPolygonMarkers(type = 'default') {
    if (this.polygons[type] && this.polygons[type].length > 0) {
      this.polygons[type].forEach(item => {
        item.hide()
      })
      this.polygons[type] = []
    }
  }

  hidePolygonMarkers(type = 'default') {
    if (this.polygons[type] && this.polygons[type].length > 0) {
      this.polygons[type].forEach(item => {
        item.hide()
      })
    }
  }

  resetPolygonMarkers(type = 'default', options = {}) {
    const option = this.getOption({
      type: 'default',
      strokeStyle: 'solid',
      strokeColor: '#10CADA',
      strokeDasharray: [5, 3],
      strokeWeight: 2,
      strokeOpacity: 1,
      fillColor: '#1BB2D9',
      fillOpacity: 0.2,
      path: 'path',
      highLightFillColor: '#10CADA',
      highLightFillOpacity: 0,
      clickFlag: true,
      clearFlag: true,
      highLight: false,
      callback: () => {
      }
    }, options)
    this.polygons[type].forEach(item => {
      item.setOptions({
        strokeColor: option.strokeColor,
        fillOpacity: option.highLightFillOpacity,
        fillColor: option.highLightFillColor
      })
    })
  }

  highLightPolygonMarker(item, options = {}) {
    if (!item) {
      return
    }
    const option = this.getOption({
      type: 'default',
      strokeStyle: 'solid',
      strokeColor: '#10CADA',
      strokeDasharray: [5, 3],
      strokeWeight: 2,
      strokeOpacity: 1,
      fillColor: '#1BB2D9',
      fillOpacity: 0.2,
      path: 'path',
      highLightFillColor: '#10CADA',
      highLightFillOpacity: 0,
      clickFlag: true,
      clearFlag: true,
      highLight: false,
      callback: () => {
      }
    }, options)
    item.setOptions({
      strokeColor: option.strokeColor,
      fillOpacity: option.fillOpacity,
      fillColor: option.fillColor
    })
  }

  // 清除指定Polygon的高亮样式
  clearPolygonHighLight(item, options = {}) {
    if (!item) {
      return
    }
    const option = this.getOption({
      type: 'default',
      strokeStyle: 'solid',
      strokeColor: '#10CADA',
      strokeDasharray: [5, 3],
      strokeWeight: 2,
      strokeOpacity: 1,
      fillColor: '#1BB2D9',
      fillOpacity: 0.2,
      path: 'path',
      highLightFillColor: '#10CADA',
      highLightFillOpacity: 0,
      clickFlag: true,
      clearFlag: true,
      highLight: false,
      callback: () => {
      }
    }, options)
    item.setOptions({
      strokeColor: option.strokeColor,
      fillOpacity: option.highLightFillOpacity,
      fillColor: option.highLightFillColor
    })
  }

  // 根据类型隐藏绘制区域
  showPolygonMarkers(type = 'default') {
    if (this.polygons[type] && this.polygons[type].length > 0) {
      this.polygons[type].forEach(item => {
        item.show()
      })
    }
  }

  /**         文本         **/
  //  添加文本标签
  addTextMarkers(data, options = {}) {
    const option = this.getOption({
      type: 'default',
      anchor: 'center', // 设置文本标记锚点
      draggable: false,
      cursor: 'pointer',
      angle: 0,
      style: {
        width: '4rem',
        borderWidth: 0,
        background: 'transparent',
        textAlign: 'center',
        fontSize: '0.73rem',
        fontWeight: '400',
        color: '#FFF'
      },
      position: [116.396923, 39.918203],
      clickFlag: true,
      fitViewFlag: false,
      clearFlag: true,
      callback: () => {
      }
    }, options)

    if (this.textMarkers[option.type] === undefined) {
      this.textMarkers[option.type] = []
    }

    if (option.clearFlag) {
      this.clearTextMarkers(option.type)
    }

    data.forEach(item => {
      const textMarker = new AMap.Text({
        text: `${item.label}<br>${
          item.value === 0 ? '0' : item.value || ' '
        }`,
        zIndex: option.zIndex || 50,
        anchor: option.anchor || 'center', // 设置文本标记锚点
        draggable: option.draggable || false,
        cursor: option.cursor || 'pointer',
        angle: option.angle || 0,
        style: {
          width: option.style.width || '4rem',
          borderWidth: option.style.borderWidth || 0,
          background: option.style.background || 'transparent',
          textAlign: option.style.textAlign || 'center',
          fontSize: option.style.fontSize || '0.73rem',
          fontWeight: option.style.fontWeight || '900',
          color: option.style.color || '#FFF'
        },
        position: [item.position[0], item.position[1]] ||
          [item.lng, item.lat] || [option.position[0], option.position[1]],
        extData: item
      })
      // 点击事件
      if (option.clickFlag) {
        textMarker.on('click', e => {
          option.callback(e.target.getExtData(), option)
        })
      }
      this.textMarkers[option.type].push(textMarker)
    })
    this.map.add(this.textMarkers[option.type])
    // 自动调整层级
    if (option.fitViewFlag) {
      this.map.setFitView()
    }
  }

  clearTextMarkers(type = 'default') {
    if (this.textMarkers[type] && this.textMarkers[type].length > 0) {
      this.map.remove(this.textMarkers[type])
      this.textMarkers[type] = []
    }
  }

  /**         icon标记     **/
  // 添加icon点 data: [{lng: Number, lat: Number, name: String}]
  addIconMarkers(data, options = {}) {
    const option = this.getOption({
      img: null,
      size: [15, 15],
      offset: [0, 0],
      pixel: [0, 0],
      type: 'default',
      clickFlag: true,
      fitViewFlag: false,
      clearFlag: true,
      showLabel: false,
      zIndex: 6000,
      callback: () => {
      }
    }, options)
    if (this.iconMarkers[option.type] === undefined) {
      this.iconMarkers[option.type] = []
    }
    if (option.clearFlag) {
      this.clearIconMarkers(option.type)
    }

    data.forEach(item => {
      item.markerType = option.type || 'default'
      const icon = new AMap.Icon({
        size: new AMap.Size(option.size[0], option.size[1]), // 图标尺寸
        image: option.img, // Icon的图像
        imageOffset: new AMap.Pixel(option.pixel[0], option.pixel[1]), // 图像相对展示区域的偏移量，适于雪碧图等
        imageSize: new AMap.Size(option.size[0], option.size[1]) // 根据所设置的大小拉伸或压缩图片
      })

      const marker = new AMap.Marker({
        position: new AMap.LngLat(Number(item.lng), Number(item.lat)),
        offset: new AMap.Pixel(option.offset[0], option.offset[1]),
        icon: icon, // 添加 Icon 实例
        // title: item.name || '',
        zoom: 11,
        extData: item,
        zIndex: option.zIndex
      })

      if (option.clickFlag) {
        marker.on('click', e => {
          option.callback(e.target.getExtData(), option)
        })
      }
      if (option.showLabel) {
        marker.setLabel({
          offset: new AMap.Pixel(0, 0),
          content: item.name,
          direction: 'bottom'
        })
      }
      this.iconMarkers[option.type].push(marker)
    })
    this.map.add(this.iconMarkers[option.type])
    // 自动调整层级
    if (option.fitViewFlag) {
      this.map.setFitView()
    }
  }

  clearIconMarkers(type) {
    if (this.iconMarkers[type] && this.iconMarkers[type].length > 0) {
      this.map.remove(this.iconMarkers[type])
      this.iconMarkers[type] = []
    }
  }

  /**         海量点标记     **/
  addMassMarkers(data, options = {}) {
    const option = this.getOption({
      img: null,
      size: [15, 15],
      pixel: [6, 6],
      type: 'default',
      clickFlag: true,
      clearFlag: true,
      clickType: '',
      callback: () => {
      }
    }, options)

    if (option.clearFlag) {
      this.clearMassMarkers(option.type)
    }

    const styleOption = {
      url: option.img,
      size: new AMap.Size(option.size[0], option.size[1]),
      anchor: new AMap.Pixel(option.pixel[0], option.pixel[1])
    }

    this.massMarkers[option.type] = new AMap.MassMarks(data, {
      zIndex: 5000,
      zooms: [10, 19],
      style: styleOption
    })

    this.massMarkers[option.type].setMap(this.map)

    if (option.clickFlag) {
      this.massMarkers[option.type].on('click', e => {
        option.callback(e)
      })
    }
  }

  clearMassMarkers(type) {
    if (this.massMarkers[type]) {
      this.massMarkers[type].clear()
      this.massMarkers[type] = undefined
    }
  }

  addHtmlMarkers(data, options = {}) {
    if (!data || !data.length) {
      return false
    }
    const option = this.getOption({
      pixel: [6, 6],
      type: 'default',
      clickFlag: true,
      clearFlag: true,
      callback: () => {
      }
    }, options)

    this.currentHtmlMarker = {
      data: data,
      option: option
    }

    if (this.htmlMarkers[option.type] === undefined) {
      this.htmlMarkers[option.type] = []
    }

    if (option.clearFlag) {
      this.clearHtmlMarkers(option.type)
    }

    data.forEach(item => {
      const marker = new AMap.Marker({
        content: item.content || ' ', // 自定义点标记覆盖物内容
        position: item.position || item.center || [0, 0], // 基点位置
        offset: new AMap.Pixel(option.pixel[0], option.pixel[1]), // 相对于基点的偏移位置
        extData: item
      })
      if (option.clickFlag) {
        marker.on('click', e => {
          option.callback(e.target.getExtData(), option)
        })
      }

      this.htmlMarkers[option.type].push(marker)
    })
    this.map.add(this.htmlMarkers[option.type])
  }

  clearHtmlMarkers(type = 'default') {
    if (this.htmlMarkers[type] && this.htmlMarkers[type].length > 0) {
      this.map.remove(this.htmlMarkers[type])
      this.htmlMarkers[type] = []
      this.currentHtmlMarker = {}
    }
  }

  /** *************BASE************* **/
  setZoom(level) {
    this.map.setZoom(level || this.initZoom)
  }

  /** *************EXTRAL************* **/
  // 添加点云图层
  addPointCloudLayer(json, options) {
    const option = this.getOption({
      type: 'json',
      lnglat: 'lnglat',
      style: {
        radius: 0.5,
        color: 'rgb(42, 167, 184)',
        opacity: 0.5
      },
      fitView: false
    }, options)

    this.pointCloudLayer = new Loca.PointCloudLayer({
      map: this.map,
      fitView: option.fitView
    })
    this.pointCloudLayer
      .setData(json, {
        lnglat: option.lnglat,
        type: option.type
      })
      .setOptions({
        style: option.style
      })
      .render()
  }

  clearPointCloudLayer() {
    if (this.pointCloudLayer) {
      this.pointCloudLayer.setMap(null)
      this.pointCloudLayer = null
    }
  }

  // 热力图添加 data: [{"lnglat": [116.191031,39.988585],"count": 10}]
  addHeatmapLayer(json, options) {
    const option = this.getOption({
      value: 'json',
      lnglat: 'lnglat',
      style: {
        radius: 20,
        color: {
          0.5: '#2c7bb6',
          0.65: '#abd9e9',
          0.7: '#ffffbf',
          0.9: '#fde468',
          1.0: '#d7191c'
        }
      },
      fitView: false
    }, options)

    this.heatmapLayer = new Loca.HeatmapLayer({
      map: this.map,
      fitView: option.fitView
    })

    this.heatmapLayer
      .setData(json, {
        lnglat: option.lnglat,
        value: option.value
      })
      .setOptions({
        style: option.style
      })
      .render()
  }

  clearHeatmapLayer() {
    this.heatmapLayer.setMap(null)
  }

  addClusterLayer(data, options = {}) {
    const option = this.getOption({
      gridSize: 80,
      size: [15, 15],
      pixel: [6, 6],
      type: 'cluster',
      clickFlag: true,
      clearFlag: true,
      clickType: '',
      callback: () => {},
      _renderClusterMarker: function(context) {
        var factor = Math.pow(context.count / data.length, 1 / 18)
        var div = document.createElement('div')
        var Hue = 180 - factor * 180
        var bgColor = 'hsla(' + Hue + ',100%,50%,0.7)'
        var fontColor = 'hsla(' + Hue + ',100%,20%,1)'
        var borderColor = 'hsla(' + Hue + ',100%,40%,1)'
        var shadowColor = 'hsla(' + Hue + ',100%,50%,1)'
        div.style.backgroundColor = bgColor
        var size = Math.round(30 + Math.pow(context.count / data.length, 1 / 5) * 20)
        div.style.width = div.style.height = size + 'px'
        div.style.border = 'solid 1px ' + borderColor
        div.style.borderRadius = size / 2 + 'px'
        div.style.boxShadow = '0 0 1px ' + shadowColor
        div.innerHTML = context.count
        div.style.lineHeight = size + 'px'
        div.style.color = fontColor
        div.style.fontSize = '14px'
        div.style.textAlign = 'center'
        context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2))
        context.marker.setContent(div)
      }
    }, options)

    if (this.markers[option.type] === undefined) {
      this.markers[option.type] = []
    }

    if (option.clearFlag) {
      if (this.clusterLayer) {
        this.clusterLayer.clearMarkers()
      }
    }

    data.forEach(item => {
      const marker = new AMap.Marker({
        content: item.content || ' ', // 自定义点标记覆盖物内容
        position: item.position || item.center || [item.lng, item.lat] || [0, 0], // 基点位置
        offset: new AMap.Pixel(option.pixel[0], option.pixel[1]), // 相对于基点的偏移位置
        extData: item
      })
      if (option.clickFlag) {
        marker.on('click', e => {
          option.callback(e.target.getExtData(), option)
        })
      }

      this.markers[option.type].push(marker)
    })

    AMap.plugin(['AMap.MarkerClusterer'], () => {
      this.clusterLayer = new AMap.MarkerClusterer(this.map, this.markers[option.type], {
        gridSize: option.gridSize,
        renderClusterMarker: option._renderClusterMarker
      })
    })
  }
  clearClusterLayer() {
    this.clusterLayer.clearMarkers()
  }
}

export default LaMap
