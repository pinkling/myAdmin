import 'ol/ol.css'
import TileLayer from 'ol/layer/Tile'
// import TileGrid from 'ol/tilegrid/TileGrid'
import XYZ from 'ol/source/XYZ'
import { defaults as defaultControls } from 'ol/control'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Cluster from 'ol/source/Cluster'
import ImageLayer from 'ol/layer/Image'
import ImageWMS from 'ol/source/ImageWMS'
import TileWMS from 'ol/source/TileWMS'
import { Map, View, Feature } from 'ol'
import { Point, Polygon } from 'ol/geom'
import { Fill, Circle, Style, Icon, Text, Stroke } from 'ol/style'
import Overlay from 'ol/Overlay'
import { Heatmap as HeatmapLayer } from 'ol/layer'
import { easeOut } from 'ol/easing'
// import {geoServerImageUrl} from '@/config/env'

import util from '@/libs/util'
import $ from 'jquery'

// import http from '@/plugin/axios'

class LMap {
  constructor(option = {}) {
    this.map = undefined
    this.layers = {}
    this.features = {}
    this.lastFeature = null
    this.resolution = [
      1.406250026231578,
      0.703125013115789,
      0.3515625065578945,
      0.17578125327894775,
      0.08789062663947399,
      0.043945313319736994,
      0.021972656659868472,
      0.010986328329934226,
      0.005493164164967124,
      0.0027465820824835504,
      0.0013732910412417797,
      6.866455206208899E-4,
      3.433227603104438E-4,
      1.716613801552224E-4,
      8.583069007761132E-5,
      4.291534503880566E-5,
      2.1457672519402802E-5,
      1.0728836259701401E-5,
      5.364418129850712E-6,
      2.682209064925356E-6,
      1.341104532462678E-6
    ]
    // this.sldt = 'https://mis.sqszhcg.com/arcgis/rest/services/mapsq/sq_sldt/MapServer'
    // this.slbz = 'https://mis.sqszhcg.com/arcgis/rest/services/mapsq/sq_slzj/MapServer'
    // this.sldt = 'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i345013117!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0'
    this.sldt = 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
    this.slbz = 'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i345013117!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0'
    this.yxdt = 'http://172.22.137.81:6080/arcgis/rest/services/mapsq/sq_yxdt/MapServer'
    this.yxbz = 'http://172.22.137.81:6080/arcgis/rest/services/mapsq/sq_yxzj/MapServer'
    this.clickCallback = null
    this.partCallback = null
    this.overlayFeature = {}
    this.partLayer = null
    this.partTmpWms = null
    this.minZoom = option.minZoom || 10
    this.maxZoom = option.maxZoom || 18
    this.zoom = option.zoom || 13
    this.center = option.center || [112.993066, 28.186488]
  }

  // 初始化地图
  initMap(target) {
    // const sqtileGrid = new TileGrid({
    //   origin: [-180, 90],
    //   resolutions: this.resolution,
    //   matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    // })
    // this.layers['sldt'] = new TileLayer({
    //   source: new XYZ({
    //     projection: 'EPSG:4326',
    //     tileGrid: sqtileGrid,
    //     tileUrlFunction: (tileCoord) => {
    //       const z = tileCoord[0]
    //       const x = tileCoord[1]
    //       const y = tileCoord[2]
    //       return this.sldt + '/tile/' + z + '/' + y + '/' + x
    //     },
    //     wrapX: true
    //   })
    // })
    // this.layers['slbz'] = new TileLayer({
    //   source: new XYZ({
    //     projection: 'EPSG:4326',
    //     tileGrid: sqtileGrid,
    //     tileUrlFunction: (tileCoord) => {
    //       const z = tileCoord[0]
    //       const x = tileCoord[1]
    //       const y = tileCoord[2]
    //       return this.slbz + '/tile/' + z + '/' + y + '/' + x
    //     },
    //     wrapX: true
    //   })
    // })
    // this.layers['yxdt'] = new TileLayer({
    //   source: new XYZ({
    //     projection: 'EPSG:4326',
    //     tileGrid: sqtileGrid,
    //     tileUrlFunction: (tileCoord) => {
    //       const z = tileCoord[0]
    //       const x = tileCoord[1]
    //       const y = tileCoord[2]
    //       return this.yxdt + '/tile/' + z + '/' + y + '/' + x
    //     },
    //     wrapX: true
    //   }),
    //   visible: false
    // })
    // this.layers['yxbz'] = new TileLayer({
    //   source: new XYZ({
    //     projection: 'EPSG:4326',
    //     tileGrid: sqtileGrid,
    //     tileUrlFunction: (tileCoord) => {
    //       const z = tileCoord[0]
    //       const x = tileCoord[1]
    //       const y = tileCoord[2]
    //       return this.yxbz + '/tile/' + z + '/' + y + '/' + x
    //     },
    //     wrapX: true
    //   }),
    //   visible: false
    // })
    this.layers['sldt'] = new TileLayer({
      source: new XYZ({
        url: this.sldt
        // url: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
      }),
      zIndex: 0
    })
    // this.layers['slbz'] = new TileLayer({
    //   source: new XYZ({
    //     url: this.slbz
    //     // url: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
    //   })
    // })
    // this.layers['yxdt'] = new TileLayer({
    //   source: new XYZ({
    //     url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
    //   })
    // })
    // this.layers['yxbz'] = new TileLayer({
    //   source: new XYZ({
    //     url: 'http://www.google.cn/maps/vt?lyrs=h@189&gl=cn&x={x}&y={y}&z={z}'
    //   })
    // })
    this.map = new Map({
      target: target,
      layers: [this.layers['sldt']],
      // layers: [this.layers['sldt'], this.layers['slbz'], this.layers['yxdt'], this.layers['yxbz']],
      // projection: 'EPSG:4326',
      view: new View({
        // 指定地图投影模式
        projection: 'EPSG:4326',
        // 定义地图显示的坐标
        center: this.center || [112.993066, 28.186488],
        // 限制地图中心范围，但无法限制缩小范围
        // extent: [110, 26, 114, 30],
        // 定义地图显示层级为16
        zoom: this.zoom,
        // 限制缩放级别，可以和extent同用限制范围
        maxZoom: this.maxZoom,
        // 最小级别，越大则面积越大
        minZoom: this.minZoom
        // resolutions: this.resolution
      }),
      // 控件
      controls: defaultControls({
        zoom: false,
        rotate: false,
        attribution: false
      })
    })

    // 要素悬停样式
    this.map.on('pointermove', (e) => {
      const pixel = this.map.getEventPixel(e.originalEvent)
      const feature = this.map.forEachFeatureAtPixel(pixel, (feature) => {
        return feature
      })
      if (feature === undefined || (!feature.get('features') && !feature.get('clickFlag')) || (feature.get('features') && !feature.get('features').length === 1)) {
        this.map.getTargetElement().style.cursor = 'auto'
      } else {
        this.map.getTargetElement().style.cursor = 'pointer'
      }
    })
    // 要素点击
    this.map.on('singleclick', (e) => {
      this.clearAllOverlay()
      const pixel = this.map.getEventPixel(e.originalEvent)
      let feature = this.map.forEachFeatureAtPixel(pixel, (feature) => {
        return feature
      })
      if (feature !== undefined && (feature.get('clickFlag') || feature.get('features')[0].get('clickFlag') && feature.get('features').length === 1)) {
        if (feature.get('features') && feature.get('features').length) {
          feature = feature.get('features')[0]
        }
        const type = feature.get('type')
        const data = feature.get('data')
        const option = feature.get('option')

        if (!this.lastFeature) {
          this.lastFeature = feature
        } else {
          const oldOption = this.lastFeature.get('option')
          const oldData = this.lastFeature.get('data')
          this.lastFeature.setStyle(this.getDefaultStyle(oldOption.styleType, oldOption, oldData))
          this.lastFeature = feature
        }

        if (option && option.chosedOption) {
          feature.setStyle(this.getDefaultStyle(option.chosedOption.styleType || option.styleType, option.chosedOption, data))
        }

        if (option.fitView) {
          if (data.position || (data.lng || data.lat)) {
            this.setViewCenter(data.position || [Number(data.lng), Number(data.lat)])
          }
        }

        if (option.callback) {
          option.callback(type, data, feature)
        }

        if (this.clickCallback) {
          this.clickCallback(type, data)
        }
      } else {
        if (this.partCallback) {
          this.partCallback(e)
        }
      }
    })
  }

  addPartImageLayerByCode(code, clear = true) {
    if (clear) {
      this.clearPartImageLayer()
    }
    const partSource = new ImageWMS({
      params: {
        LAYERS: 'sums_440300_basic_grid_v20:wh_sys',
        FORMAT: 'image/png',
        CQL_FILTER: `"properties.type"='${code}'`,
        STYLES: `sums_321300_basic_grid_v20:${code}`
      },
      serverType: 'geoserver',
      // url: geoServerImageUrl
      url: 'https://mis.sqszhcg.com/api/geoServerApi/geoserver/sums_321300_basic_grid_v20/wms'
    })
    this.partLayer = new ImageLayer({
      source: partSource
    })
    this.map.addLayer(this.partLayer)
  }

  clearPartImageLayer() {
    if (this.partLayer) {
      this.map.removeLayer(this.partLayer)
    }
  }

  async searchPartInfoByCoordinate(coordinate, type) {
    if (!coordinate || !coordinate.length || !type) {
      return null
    }
    const cqlFilter = `contains(geometry,point(${coordinate[0]} ${coordinate[1]})) or "properties.type"='${type}'`
    this.partTmpWms = new TileWMS({
      // url: null geoServerImageUrl,
      url: null,
      serverType: 'geoserver',
      crossOrigin: 'anonymous',
      params: {
        FORMAT: 'JSON',
        VERSION: '1.3.0',
        QUERY_LAYERS: 'sums_321300_basic_grid_v20:wh_sys',
        LAYERS: 'sums_321300_basic_grid_v20:wh_sys',
        TRANSPARENT: true,
        CQL_FILTER: cqlFilter
      }
    })
    const url = this.partTmpWms.getFeatureInfoUrl(
      coordinate,
      this.map.getView().getResolution(),
      this.map.getView().getProjection(),
      {
        INFO_FORMAT: 'application/json',
        FEATURE_COUNT: 50
      }
    )
    return await $.get(url)
    // return await http.$GET(url.substr(url.indexOf('geoServerApi'), url.length))
  }

  // 切换地图
  changeDefalutLayersVisible(type = 'sl') {
    if (type === 'sl') {
      this.layers['sldt'].setVisible(true)
      this.layers['slbz'].setVisible(true)
      this.layers['yxdt'].setVisible(false)
      this.layers['yxbz'].setVisible(false)
    } else if (type === 'yx') {
      this.layers['sldt'].setVisible(false)
      this.layers['slbz'].setVisible(false)
      this.layers['yxdt'].setVisible(true)
      this.layers['yxbz'].setVisible(true)
    }
  }

  // 添加图层
  addLayers(type = 'default') {
    if (this.layers[type] === undefined) {
      this.layers[type] = new VectorLayer({
        source: new VectorSource()
      })
      this.map.addLayer(this.layers[type])
    }
  }

  // 初始化overlay
  initOverlay(dom, options = {}) {
    const optionDefault = {
      type: 'default',
      stopEvent: false,
      offset: [0, 0],
      positioning: 'bottom-center'
    }
    const option = Object.assign({ ...optionDefault }, options)
    this.overlayFeature[option.type] = new Overlay({
      positioning: option.positioning, // 选填参数，控制marker的相对位置
      element: dom,
      offset: option.offset,
      stopEvent: option.stopEvent // 选填参数，阻止默认事件行为
    })
    this.map.addOverlay(this.overlayFeature[option.type])
  }

  highLighFeature(type, data, key, fit = true) {
    this.layers[type].getSource().getFeatures().forEach(item => {
      const target = item.get('data')
      const option = item.get('option')
      if (target[key] === data[key]) {
        if (!this.lastFeature) {
          this.lastFeature = item
        } else {
          const oldOption = this.lastFeature.get('option')
          const oldData = this.lastFeature.get('data')
          this.lastFeature.setStyle(this.getDefaultStyle(oldOption.styleType, oldOption, oldData))
          this.lastFeature = item
        }

        if (option.chosedOption) {
          item.setStyle(this.getDefaultStyle(option.chosedOption.styleType || option.styleType, option.chosedOption, data))
        }

        if (fit) {
          if (target.position || (target.lng || target.lat)) {
            this.setViewCenter(target.position || [Number(target.lng), Number(target.lat)])
          }
        }
      }
    })
  }

  setViewCenter(position, duration = 500) {
    if (!position || position.length !== 2 || typeof position[0] !== 'number' || typeof position[1] !== 'number') { return }
    if (Number(position[0]) < -180 || Number(position[0]) > 180 || Number(position[1]) < -90 || Number(position[1]) > 90) { return }
    this.map.getView().animate({
      center: position,
      duration: duration,
      easing: easeOut
    })
  }

  // overlay设置坐标
  setOverlay(position, type = 'default') {
    this.overlayFeature[type].setPosition(position)
  }

  // 清除overlay
  clearAllOverlay() {
    this.map.getOverlays().clear()
    this.overlayFeature = {}
  }

  clearOverlay(type = 'default') {
    this.map.removeOverlay(this.overlayFeature[type])
  }

  // 添加标记
  addNormalFeatures(datas, options = {}) {
    const optionDefault = {
      type: 'default',
      textTarget: '',
      styleType: 'point',
      otherStyle: null,
      chosedOption: null,
      clickFlag: true,
      clearFlag: true,
      fitView: true
    }
    const option = Object.assign({ ...optionDefault }, options)

    if (!this.features[option.type]) {
      this.features[option.type] = []
    }
    // 判断layer是否存在
    this.addLayers(option.type)
    // 清除
    if (option.clearFlag) {
      this.clearNormalFeatures(option.type)
    }
    // 批量处理点
    datas.forEach(item => {
      if (item.position || (item.lng && item.lat)) {
        const f = new Feature({
          geometry: new Point(item.position || [Number(item.lng), Number(item.lat)]),
          data: item,
          type: option.type,
          clickFlag: option.clickFlag,
          chosedOption: option.chosedOption,
          option: option
        })
        // 设置样式
        f.setStyle(option.otherStyle || this.getDefaultStyle(option.styleType, option, item))
        this.features[option.type].push(f)
      }
    })
    this.layers[option.type].getSource().addFeatures(this.features[option.type])
  }

  // 清除要素
  clearNormalFeatures(type = 'default') {
    if (this.layers[type]) {
      this.layers[type].getSource().clear()
      this.features[type] = []
    }
  }

  // 清除全部要素
  clearAllFeatures() {
    for (const key in this.layers) {
      if (['sldt', 'slbz', 'yxdt', 'yxbz'].includes(key)) {
        continue
      }
      this.layers[key].getSource().clear()
    }
    for (const key in this.features) {
      this.features[key] = []
      delete this.features[key]
    }
  }

  // 添加区域 datas: [{path: [[lng, lat]], option: {}}]
  addPolygonFeatures(datas, options = {}) {
    const optionDefault = {
      type: 'defaultPolygon',
      clickFlag: true,
      clearFlag: true
    }
    const baseOption = Object.assign({ ...optionDefault }, options)

    if (!this.features[baseOption.type]) {
      this.features[baseOption.type] = []
    }
    // 判断layer是否存在
    this.addLayers(baseOption.type)
    // 清除
    if (baseOption.clearFlag) {
      this.clearFeaturesByLayerType(baseOption.type)
    }
    // 添加
    this.features[baseOption.type] = []
    datas.forEach(item => {
      const optionDefault = {
        styleType: 'polygon',
        type: baseOption.type,
        dataTarget: 'path',
        width: 3,
        strokeColor: [41, 91, 170, 0.8],
        fillColor: [76, 172, 166, 0.6],
        selectOption: {
          width: 3,
          strokeColor: [41, 91, 170, 0.4],
          fillColor: [76, 172, 166, 0.3]
        },
        chosedOption: {
          width: 3,
          strokeColor: [41, 91, 170, 0.4],
          fillColor: [76, 172, 166, 0.3]
        }
      }
      const option = Object.assign({ ...optionDefault }, item.option)

      const feature = new Feature({
        type: 'polygon',
        geometry: new Polygon(item[baseOption.dataTarget] || item.path),
        data: item,
        option: option,
        selectOption: option.selectOption,
        chosedOption: option.chosedOption,
        clickFlag: baseOption.clickFlag
      })

      feature.setStyle(this.getDefaultStyle(option.styleType, option))
      this.features[baseOption.type].push(feature)
    })
    this.layers[baseOption.type].getSource().addFeatures(this.features[baseOption.type])
  }
  // 清除要素
  clearFeaturesByLayerType(type = 'default') {
    if (this.layers[type]) {
      this.layers[type].getSource().clear()
      this.features[type] = []
    }
  }

  // 样式集合
  getDefaultStyle(type = 'point', options = {}, item = {}) {
    const optionDefault = {
      color: 'rgba(0,255,255,1)',
      text: '',
      img: null
    }
    const option = Object.assign({ ...optionDefault }, options)

    if (type === 'point') {
      const fill = new Fill({
        color: option.color
      })
      return new Style({
        image: new Circle({
          fill: fill,
          radius: util.fontSize(0.1)
        }),
        fill: fill
      })
    } else if (type === 'icon') {
      return new Style({
        image: new Icon({
          src: option.img,
          anchor: option.anchor || [0.5, 1],
          scale: option.scale || util.fontSize(0.7) / 100
        })
      })
    } else if (type === 'iconText') {
      item[option.textTarget] = String(item[option.textTarget])
      return new Style({
        image: new Icon({
          src: option.img,
          anchor: [0.5, 0.5],
          scale: util.fontSize(0.7) / 100
        }),
        text: new Text({
          text: item[option.textTarget] + '' || '文本',
          textAlign: 'center',
          font: '.16rem SimHei',
          offsetX: 0,
          offsetY: 30,
          fill: new Fill({
            color: '#FFF'
          }),
          stroke: new Stroke({
            color: '#00a4ff',
            width: 2
          })
        })
      })
    } else if (type === 'circleText') {
      item[option.textTarget] = String(item[option.textTarget])
      const fill = new Fill({
        color: item._color || option.color
      })
      return new Style({
        image: new Circle({
          fill: fill,
          radius: util.fontSize(0.4),
          stroke: new Stroke({
            color: '#FFF',
            width: 5
          })
        }),
        fill: fill,
        text: new Text({
          text: item[option.textTarget] || '文本',
          textAlign: 'center',
          font: '.16rem SimHei',
          offsetX: 0,
          offsetY: 0,
          fill: new Fill({
            color: '#FFF'
          })
        }),
        zIndex: item.zIndex || 'auto'
      })
    } else if (type === 'polygon') {
      return new Style({
        stroke: new Stroke({
          width: option.width === 0 ? 0 : option.width || 3,
          color: option.strokeColor || [41, 91, 170, 0.8]
        }),
        fill: new Fill({
          color: option.fillColor || [76, 172, 166, 0.6]
        })
      })
    }
  }
  // 热力图
  addHeatMap(data, options = {}) {
    const optionDefault = {
      blur: 15,
      radius: 10,
      weightCallBack: (e) => {}
    }
    const option = Object.assign({ ...optionDefault }, options)

    const createFeature = (e) => {
      return new Feature({
        geometry: new Point(e.lnglat || [e.lng, e.lat] || e.position),
        data: e
      })
    }

    const features = []

    for (const i in data) {
      features.push(createFeature(data[i]))
    }
    const source = new VectorSource({})
    source.addFeatures(features)

    this.layers['heatmap'] = new HeatmapLayer({
      source: source,
      blur: option.blur || 5,
      radius: option.radius || 10,
      weight: (e) => {
        if (option.weightCallBack) {
          return option.weightCallBack(e)
        }
      }
    })

    this.map.addLayer(this.layers['heatmap'])
  }

  removeHeatMap() {
    if (this.layers['heatmap']) {
      this.map.removeLayer(this.layers['heatmap'])
      this.layers['heatmap'] = null
      delete this.layers['heatmap']
    }
  }

  addCluster(data, options = {}) {
    const optionDefault = {
      type: 'cluster',
      clearFlag: true,
      distance: 40,
      clickFlag: true,
      color: [76, 172, 166, 0.9],
      style: null,
      callback: () => {}
    }
    const option = Object.assign({ ...optionDefault }, options)

    if (!this.features[option.type]) {
      this.features[option.type] = []
    }
    const styleCache = {}
    // 判断layer是否存在
    if (this.layers[option.type] === undefined) {
      this.layers[option.type] = new VectorLayer({
        source: new Cluster({
          distance: option.distance,
          source: new VectorSource()
        })
      })
      this.map.addLayer(this.layers[option.type])
    }
    // 清除
    if (option.clearFlag) {
      this.clearFeaturesByLayerType(option.type)
    }

    data.forEach(item => {
      const feature = new Feature({
        geometry: new Point(item.position || [Number(item.lng), Number(item.lat)]),
        data: item,
        type: option.type,
        clickFlag: option.clickFlag,
        chosedOption: option.chosedOption,
        option: option
      })

      this.features[option.type].push(feature)
    })
    this.layers[option.type].getSource().setDistance(option.distance)
    this.layers[option.type].getSource().getSource().addFeatures(this.features[option.type])
    this.layers[option.type].setStyle(option.style || function(ite) {
      const size = ite.get('features').length
      let style = styleCache[size]
      if (size === 1) {
        const fill = new Fill({
          color: option.color
        })
        return new Style({
          image: new Circle({
            fill: fill,
            radius: util.fontSize(0.1)
          }),
          fill: fill
        })
      }
      if (!style) {
        style = new Style({
          image: new Circle({
            radius: 10,
            stroke: new Stroke({
              color: '#fff'
            }),
            fill: new Fill({
              color: '#3399CC'
            })
          }),
          text: new Text({
            text: size.toString(),
            fill: new Fill({
              color: '#fff'
            })
          })
        })
        styleCache[size] = style
      }
      return style
    })
  }
}

export default LMap
