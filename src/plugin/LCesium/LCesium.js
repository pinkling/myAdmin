import * as Cesium from 'cesium/Cesium'

import { WallTrailMaterial } from './material/WallTrailMaterial'
import { ElecEllipsoidMaterial } from './material/ElecEllipsoidMaterial'
import { PolylineTrailMaterial } from './material/PolylineTrailMaterial'
import { PolylineFlowMaterial } from './material/PolylineFlowMaterial'

const lnglat = [113.822755, 22.671404]
const defaultOption = {
  lnglat: lnglat,
  viewer: {
    imageryProviderType: 'ArcGIS',
    // imageryProviderType: 'Mapbox',
    imageryProvider: null,
    shouldAnimate: true,
    geocoder: false,
    homeButton: false,
    timeline: false,
    navigationHelpButton: false,
    fullscreenButton: false,
    scene3DOnly: true,
    baseLayerPicker: false,
    CreditsDisplay: false,
    selectionIndicator: false,
    infoBox: false,
    sceneModePicker: false,
    animation: false
  },
  earthRotate: {
    angle: -0.65,
    tmp: null
  },
  earthRotateFn: null,
  fly: {
    destination: [lnglat[0], lnglat[1], 1500.0],
    heading: 0,
    pitch: -90,
    roll: 0,
    offset: false,
    complete: () => {}
  },
  setView: {
    destination: [lnglat[0], lnglat[1], 1500.0],
    heading: 0,
    pitch: -35,
    roll: 0
  },
  polygonWall: {
    nameTarget: 'name',
    positionTarget: 'pos',
    color: 'rgba(153,197,120,0.6)',
    duration: 7000
  },
  arcEllipsoid: {
    name: 'name',
    lng: lnglat[0],
    lat: lnglat[1],
    radii: [100, 100, 100],
    color: 'rgba(255,0,0,0.8)',
    speed: 5
  },
  rotateEllipse: {
    name: 'rotateEllipse',
    r: 500,
    height: 10,
    lng: lnglat[0],
    lat: lnglat[1],
    url: ''
  },
  signalLine: {
    lng: lnglat[0],
    lat: lnglat[1],
    num: 20,
    offset: 0.02,
    minHeight: 1000,
    maxHeight: 3000,
    minLength: 500,
    zero: 500,
    width: 1,
    color: 'rgba(0,255,255, 1)',
    speed: 3
  },
  rotateAroundPoint: {
    lng: lnglat[0],
    lat: lnglat[1],
    heading: 50,
    pitch: -20,
    range: 2000
  },
  rotateAroundPointFn: null,
  aaa: null,
  radarScan: {
    lng: lnglat[0],
    lat: lnglat[1],
    color: [0, 1, 0.5, 1],
    r: 500,
    interval: 5000,
    autoClear: true,
    clearFlag: true
  },
  circleScan: {
    lng: lnglat[0],
    lat: lnglat[1],
    color: [0, 1, 0.5, 1],
    r: 5000, // 扫描半径
    interval: 30000// 时间间隔
  },
  cameraZoomDistance: {
    min: 100,
    max: 30000
  }
}

// function hasVal(v) {
//   if (v === undefined || v === null || v === '' || v === [] || JSON.stringify(v) === '{}') {
//     return false
//   }
//   return true
// }

class LCesium {
  constructor(option = {}) {
    this.id = option.id || 'cesiumContainer'
    this.viewer = option.viewer || null
    this.helper = option.helper || new Cesium.EventHelper()
    this.handler = option.handler || null
    this.cityTileset = null
    this.markers = {}
  }

  /** ******************************************************** **/
  /** ********************   基础配置   *********************** **/
  /** ******************************************************** **/

  /**
   * 创建viewer 默认使用默认配置
   * @param id
   * @param options
   * @returns {defaultOption.viewer|{navigationHelpButton, imageryProvider, selectionIndicator, sceneModePicker, infoBox, geocoder, baseLayerPicker, imageryProviderType, scene3DOnly, homeButton, animation, shouldAnimate, fullscreenButton, timeline, CreditsDisplay}|*|Cesium.Viewer|null}
   */
  createViewer(id, options = {}) {
    const option = Object.assign(defaultOption.viewer, options)

    const params = {}
    Object.keys(option).forEach(key => {
      params[key] = option[key]
    })

    if (params.imageryProvider === null) {
      switch (option.imageryProviderType) {
        case 'ArcGIS': {
          params.imageryProvider = new Cesium.WebMapTileServiceImageryProvider({
            url: '//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}',
            layer: 'mapBoxLayer',
            style: 'default',
            format: 'image/jpeg',
            tileMatrixSetID: 'GoogleMapsCompatible',
            show: true
          })
          break
        }
        case 'Mapbox': {
          params.imageryProvider = new Cesium.MapboxStyleImageryProvider({
            url: 'https://api.mapbox.com/styles/v1',
            username: 'pinkling',
            styleId: 'ckjs7jkjq31q719rnqk6pubw8',
            accessToken: 'pk.eyJ1IjoicGlua2xpbmciLCJhIjoiY2tqczdiY2ttMXpxcTJ1bHl2MGEweWQxZCJ9.z3LFdsEe5HCATXZJQKbMUg',
            scaleFactor: true
          })
          break
        }
        default: {
          params.imageryProvider = new Cesium.WebMapTileServiceImageryProvider({
            url: '//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}',
            layer: 'mapBoxLayer',
            style: 'default',
            format: 'image/jpeg',
            tileMatrixSetID: 'GoogleMapsCompatible',
            show: true
          })
          break
        }
      }
    }

    this.viewer = new Cesium.Viewer(id || this.id, params)
    return this.viewer
  }

  /**
   * 隐藏cesium的标志
   */
  removeSign() {
    this.viewer._cesiumWidget._creditContainer.style.display = 'none'
  }

  /**
   * 取消双击锁定事件
   */
  removeDoubleClickLock() {
    this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
  }

  /**
   * 开启抗锯齿
   */
  startAntialiasing() {
    this.viewer.scene.fxaa = true
    this.viewer.scene.postProcessStages.fxaa.enabled = true

    const supportsImageRenderingPixelated = this.viewer.cesiumWidget._supportsImageRenderingPixelated
    if (supportsImageRenderingPixelated) {
      let vtxf_dpr = window.devicePixelRatio
      while (vtxf_dpr >= 2.0) { vtxf_dpr /= 2.0 }
      this.viewer.resolutionScale = vtxf_dpr
    }
  }

  /** ******************************************************** **/
  /** ********************    操作事件  *********************** **/
  /** ******************************************************** **/

  /**
   * 初始化操作事件
   */
  initHandler() {
    this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas)
  }

  /**
   * 添加左点击事件
   * @param callback
   */
  addLeftClickHandler(callback = null) {
    if (this.handler === null) { this.initHandler() }
    this.handler.setInputAction((movement) => {
      if (typeof callback === 'function') {
        callback(movement)
      } else {
        if (this.viewer.selectedEntity && this.viewer.selectedEntity.click) {
          this.viewer.selectedEntity.callback(this.viewer.selectedEntity.extData, this.viewer.selectedEntity)
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
  }

  /** ******************************************************** **/
  /** ********************   功能效果   *********************** **/
  /** ******************************************************** **/

  // 地球自转方法
  earthRotate(viewer) {
    const a = defaultOption.earthRotate.angle
    const t = Date.now()
    const n = (t - defaultOption.earthRotate.tmp) / 1e3
    defaultOption.earthRotate.tmp = t
    viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, a * n)
  }

  /**
   * 添加地球自转
   */
  addEarthRotate() {
    defaultOption.earthRotate.tmp = Date.now()
    defaultOption.earthRotateFn = this.earthRotate.bind(this, this.viewer)
    this.viewer.clock.onTick.addEventListener(defaultOption.earthRotateFn)
  }

  /**
   * 移除地球自转
   */
  removeEarthRotate() {
    this.viewer.clock.onTick.removeEventListener(defaultOption.earthRotateFn)
  }

  /**
   * 飞行到目标位置
   * @param options
   */
  flyto(options = {}) {
    const option = Object.assign(defaultOption.fly, options)

    this.viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(option.destination[0], option.destination[1], option.destination[2]),
      orientation: {
        heading: Cesium.Math.toRadians(option.heading),
        pitch: Cesium.Math.toRadians(option.pitch),
        roll: Cesium.Math.toRadians(option.roll)
      },
      offset: option.offset ? new Cesium.HeadingPitchRange(0.0, Cesium.Math.toRadians(-20.0)) : null,
      complete: option.complete
    })
  }

  setView(options = {}) {
    const option = Object.assign(defaultOption.setView, options)

    this.viewer.scene.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(option.destination[0], option.destination[1], option.destination[2]),
      orientation: {
        heading: Cesium.Math.toRadians(option.heading),
        pitch: Cesium.Math.toRadians(option.pitch),
        roll: Cesium.Math.toRadians(option.roll)
      }
    })
  }

  setCameraZoomDistance(options = {}) {
    const option = Object.assign(defaultOption.cameraZoomDistance, options)
    this.viewer.scene.screenSpaceCameraController.minimumZoomDistance = option.min
    this.viewer.scene.screenSpaceCameraController.maximumZoomDistance = option.max
  }
  /**
   * 添加城市立体模型 并调整配色
   * @param url
   */
  addCityTileset(url) {
    if (!this.cityTileset) {
      // 加载本地3dtile数据
      this.cityTileset = new Cesium.Cesium3DTileset({ url: url })
      this.viewer.scene.primitives.add(this.cityTileset)

      this.cityTileset.readyPromise.then((tileset) => {
        this.viewer.scene.primitives.add(tileset)
      }).otherwise((error) => {
        console.log(error)
      })

      this.cityTileset.distanceDisplayCondition = new Cesium.DistanceDisplayCondition(0.0, 6000.0)

      this.cityTileset.style = new Cesium.Cesium3DTileStyle({
        color: {
          conditions: [
            ['true', 'rgb(0, 255, 255)']
          ]
        }
      })

      const shader = `
       varying vec3 v_positionEC;
       void main(void){
           vec4 position = czm_inverseModelView * vec4(v_positionEC,1); // 位置
           float glowRange = 100.0; // 光环的移动范围(高度)
           gl_FragColor = vec4(0.0,  0.7, 0.7, 1.0); // 颜色
           gl_FragColor += vec4(vec3(position.z / 100.0), 1.0); // 渐变
           // 动态光环
           float time = fract(czm_frameNumber / 360.0);
           time = abs(time - 0.5) * 2.0;
           float diff = step(0.005, abs( clamp(position.z / glowRange, 0.0, 1.0) - time));
           gl_FragColor.rgb += gl_FragColor.rgb * (1.0 - diff);
       }
      `

      this.cityTileset.tileVisible.addEventListener((tile) => {
        const content = tile.content
        for (let i = 0; i < content.featuresLength; i++) {
          const feature = content.getFeature(i)
          const model = feature.content._model
          if (
            shader &&
            model &&
            model._sourcePrograms &&
            model._rendererResources
          ) {
            Object.keys(model._sourcePrograms).forEach(key => {
              const program = model._sourcePrograms[key]
              model._rendererResources.sourceShaders[program.fragmentShader] = shader
            })
            model._shouldRegenerateShaders = true
          }
        }
      })
    }
  }

  /**
   * 移除城市立体模型
   */
  removeCityTileset() {
    this.viewer.scene.primitives.remove(this.cityTileset)
  }

  /**
   * 添加区域
   * @param url
   */
  addAreaPolygon(url) {
    const polygon = Cesium.GeoJsonDataSource.load(url, { clamToGround: true }) // 让地图贴地 加载资源

    polygon.then((dataSource) => { // 把数据加到场景里面去
      this.viewer.dataSources.add(dataSource)
      dataSource.entities.values.forEach(entity => {
        if (Cesium.defined(entity.polygon)) {
          entity.name = entity.properties.name
          entity.polygon.material = Cesium.Color.fromRandom({ red: 25, green: 32, blue: 111, alpha: 0.2 }) // 修改多边形得材质
          entity.polygon.outlineColor = new Cesium.Color(0, 1, 1, 0.5) // 边线颜色
          entity.polygon.classificationType = Cesium.ClassificationType.TERRAIN // 区块直接贴在地面上

          const polyPostions = entity.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions // 从多边形上取出顶点
          let polyCenter = Cesium.BoundingSphere.fromPoints(polyPostions).center // 通过顶点构建一个包围球
          polyCenter = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(polyCenter) // 把包围球得中心做贴地得偏移
          entity.position = polyCenter
          entity.label = { // 创建一个标签，在中心点位置
            text: entity.name,
            showBackground: true,
            scale: 0.6,
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(10.0, 15000.0),
            disableDepthTestDistance: 100.0
          }
        }
      })
    })
  }

  /**
   * 添加区域边界墙体
   * @param e
   * @param options
   * @returns {*}
   */
  addWallPolygon(e, options = {}) {
    const option = Object.assign(defaultOption.polygonWall, options)
    return this.viewer.entities.add({
      name: e[option.nameTarget],
      wall: {
        show: true,
        positions: Cesium.Cartesian3.fromDegreesArrayHeights(e[option.positionTarget]),
        material: new WallTrailMaterial({
          color: Cesium.Color.fromCssColorString(option.color),
          duration: option.duration
        })
      }
    })
  }

  /**
   * 添加电弧球体
   * @param e
   * @param options
   * @returns {*}
   */
  addArcEllipsoid(options = {}) {
    const option = Object.assign(defaultOption.arcEllipsoid, options)
    return this.viewer.entities.add({
      name: option.name,
      position: Cesium.Cartesian3.fromDegrees(option.lng, option.lat),
      ellipsoid: {
        radii: new Cesium.Cartesian3(option.radii[0], option.radii[1], option.radii[2]),
        maximumCone: Cesium.Math.PI_OVER_TWO,
        material: new ElecEllipsoidMaterial({
          color: Cesium.Color.fromCssColorString(option.color),
          speed: option.speed
        }),
        outline: false
      }
    })
  }

  /**
   * 添加道路数据
   * @param url
   */
  addAreaRoad(url) {
    const road = Cesium.GeoJsonDataSource.load(url) // 直接加载json数据 比把json转化成czml在加载快很多
    road.then((dataSource) => {
      this.viewer.dataSources.add(dataSource)
      dataSource.entities.values.forEach((r, index) => {
        if (r.polyline === undefined) {
          r.show = false
          return true
        }
        r.nameID = index
        r.polyline.width = 5
        r.clampToGround = true
        r.polyline.material = new PolylineTrailMaterial({
          color: Cesium.Color.fromCssColorString('rgba(0,200,255, 0.9)'),
          duration: 6800
        })
      })
    })
  }

  addCZML(url) {
    const dataSource = new Cesium.CzmlDataSource()
    this.viewer.dataSources.add(dataSource)
    dataSource.process(url).then(() => {})
  }

  /**
   * 添加自动旋转圆
   * @param e
   * @param options
   * @returns {*}
   */
  addRotateEllipse(options = {}) {
    const option = Object.assign(defaultOption.rotateEllipse, options)
    let rotation = Cesium.Math.toRadians(30)
    const getRotationValue = () => {
      rotation -= 0.005
      return rotation
    }
    return this.viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(option.lng, option.lat),
      name: option.name || 'rotate ellipse',
      ellipse: {
        semiMinorAxis: option.r, // 半短轴
        semiMajorAxis: option.r, // 半长轴
        height: option.height, // 距地球球面高度
        material: new Cesium.ImageMaterialProperty({
          image: option.url,
          transparent: true // 允许透明
        }),
        rotation: new Cesium.CallbackProperty(getRotationValue, false),
        stRotation: new Cesium.CallbackProperty(getRotationValue, false),
        outline: 5 // windows下不能为1 可以置为false
      }
    })
  }

  /**
   * 增加信号线效果 返回全部线条
   * @param options
   * @returns {Array}
   */
  addSignalLine(options = {}) {
    const option = Object.assign(defaultOption.signalLine, options)
    const list = []
    for (let i = 0; i < option.num; i++) {
      let lng = 0
      let lat = 0
      if (i < option.num / 4) {
        lng = option.lng + Math.random() * option.offset
        lat = option.lat + Math.random() * option.offset
      } else if (i < (option.num / 4) * 2) {
        lng = option.lng - Math.random() * option.offset
        lat = option.lat + Math.random() * option.offset
      } else if (i < (option.num / 4) * 3) {
        lng = option.lng + Math.random() * option.offset
        lat = option.lat - Math.random() * option.offset
      } else if (i < option.num) {
        lng = option.lng - Math.random() * option.offset
        lat = option.lat - Math.random() * option.offset
      }
      let height1 = Math.random() * option.minHeight
      let height2 = Math.random() * option.maxHeight + option.minLength
      if (height1 > height2) {
        const height = height1
        height1 = height2
        height2 = height
      }

      if (height1 < option.zero) {
        height1 = 0
      }

      list.push(this.viewer.entities.add({
        name: 'signalLine' + i,
        polyline: {
          positions: Cesium.Cartesian3.fromDegreesArrayHeights([
            lng, lat, height1,
            lng, lat, height2
          ]),
          width: option.width,
          material: new PolylineFlowMaterial({ // 尾迹线材质
            color: Cesium.Color.fromCssColorString(option.color),
            speed: option.speed
          })
        }
      }))
    }
    return list
  }

  // 绕点旋转效果
  rotateAroundPoint(option) {
    const center = Cesium.Cartesian3.fromDegrees(option.lng, option.lat)
    const pitch = Cesium.Math.toRadians(option.pitch)
    option.heading += 0.05
    const heading = Cesium.Math.toRadians(option.heading)
    this.viewer.camera.lookAt(center, new Cesium.HeadingPitchRange(heading, pitch, option.range))
  }

  /**
   * 添加绕点旋转效果
   */
  addRotateAroundPoint(options = {}) {
    const option = Object.assign(defaultOption.rotateAroundPoint, options)
    defaultOption.rotateAroundPointFn = this.rotateAroundPoint.bind(this, option)
    this.viewer.scene.postRender.addEventListener(defaultOption.rotateAroundPointFn)
    // defaultOption.aaa = this.viewer.scene.postRender.addEventListener(defaultOption.rotateAroundPointFn)
  }

  /**
   * 移除绕点旋转效果
   */
  removeRotateAroundPoint() {
    if (defaultOption.rotateAroundPointFn !== null) {
      this.viewer.scene.postRender.removeEventListener(defaultOption.rotateAroundPointFn)
      this.viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
      defaultOption.rotateAroundPointFn = null
      // defaultOption.aaa()
    }
  }

  addRadarScanPostStage(viewer, cartographicCenter, radius, scanColor, duration) {
    const ScanSegmentShader =
      'uniform sampler2D colorTexture;' +
      'uniform sampler2D depthTexture;' +
      'varying vec2 v_textureCoordinates;' +
      'uniform vec4 u_scanCenterEC;' +
      'uniform vec3 u_scanPlaneNormalEC;' +
      'uniform vec3 u_scanLineNormalEC;' +
      'uniform float u_radius;' +
      'uniform vec4 u_scanColor;' +
      'vec4 toEye(in vec2 uv, in float depth)' +
      ' {' +
      ' vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));' +
      ' vec4 posInCamera =czm_inverseProjection * vec4(xy, depth, 1.0);' +
      ' posInCamera =posInCamera / posInCamera.w;' +
      ' return posInCamera;' +
      ' }' +
      'bool isPointOnLineRight(in vec3 ptOnLine, in vec3 lineNormal, in vec3 testPt)' +
      '{' +
      'vec3 v01 = testPt - ptOnLine;' +
      'normalize(v01);' +
      'vec3 temp = cross(v01, lineNormal);' +
      'float d = dot(temp, u_scanPlaneNormalEC);' +
      'return d > 0.5;' +
      '}' +
      'vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point)' +
      '{' +
      'vec3 v01 = point -planeOrigin;' +
      'float d = dot(planeNormal, v01) ;' +
      'return (point - planeNormal * d);' +
      '}' +
      'float distancePointToLine(in vec3 ptOnLine, in vec3 lineNormal, in vec3 testPt)' +
      '{' +
      'vec3 tempPt = pointProjectOnPlane(lineNormal, ptOnLine, testPt);' +
      'return length(tempPt - ptOnLine);' +
      '}' +
      'float getDepth(in vec4 depth)' +
      '{' +
      'float z_window = czm_unpackDepth(depth);' +
      'z_window = czm_reverseLogDepth(z_window);' +
      'float n_range = czm_depthRange.near;' +
      'float f_range = czm_depthRange.far;' +
      'return (2.0 * z_window - n_range - f_range) / (f_range - n_range);' +
      '}' +
      'void main()' +
      '{' +
      'gl_FragColor = texture2D(colorTexture, v_textureCoordinates);' +
      'float depth = getDepth( texture2D(depthTexture, v_textureCoordinates));' +
      'vec4 viewPos = toEye(v_textureCoordinates, depth);' +
      'vec3 prjOnPlane = pointProjectOnPlane(u_scanPlaneNormalEC.xyz, u_scanCenterEC.xyz, viewPos.xyz);' +
      'float dis = length(prjOnPlane.xyz - u_scanCenterEC.xyz);' +
      'float twou_radius = u_radius * 2.0;' +
      'if(dis < u_radius)' +
      '{' +
      'float f0 = 1.0 -abs(u_radius - dis) / u_radius;' +
      'f0 = pow(f0, 64.0);' +
      'vec3 lineEndPt = vec3(u_scanCenterEC.xyz) + u_scanLineNormalEC * u_radius;' +
      'float f = 0.0;' +
      'if(isPointOnLineRight(u_scanCenterEC.xyz, u_scanLineNormalEC.xyz, prjOnPlane.xyz))' +
      '{' +
      'float dis1= length(prjOnPlane.xyz - lineEndPt);' +
      'f = abs(twou_radius -dis1) / twou_radius;' +
      'f = pow(f, 3.0);' +
      '}' +
      'gl_FragColor = mix(gl_FragColor, u_scanColor, f + f0);' +
      '}' +
      '}'

    const _Cartesian3Center = Cesium.Cartographic.toCartesian(cartographicCenter)
    const _Cartesian4Center = new Cesium.Cartesian4(_Cartesian3Center.x, _Cartesian3Center.y, _Cartesian3Center.z, 1)
    const _CartographicCenter1 = new Cesium.Cartographic(cartographicCenter.longitude, cartographicCenter.latitude, cartographicCenter.height + 500)
    const _Cartesian3Center1 = Cesium.Cartographic.toCartesian(_CartographicCenter1)
    const _Cartesian4Center1 = new Cesium.Cartesian4(_Cartesian3Center1.x, _Cartesian3Center1.y, _Cartesian3Center1.z, 1)
    const _CartographicCenter2 = new Cesium.Cartographic(cartographicCenter.longitude + Cesium.Math.toRadians(0.001), cartographicCenter.latitude, cartographicCenter.height)
    const _Cartesian3Center2 = Cesium.Cartographic.toCartesian(_CartographicCenter2)
    const _Cartesian4Center2 = new Cesium.Cartesian4(_Cartesian3Center2.x, _Cartesian3Center2.y, _Cartesian3Center2.z, 1)
    const _RotateQ = new Cesium.Quaternion()
    const _RotateM = new Cesium.Matrix3()
    const _time = (new Date()).getTime()
    const _scratchCartesian4Center = new Cesium.Cartesian4()
    const _scratchCartesian4Center1 = new Cesium.Cartesian4()
    const _scratchCartesian4Center2 = new Cesium.Cartesian4()
    const _scratchCartesian3Normal = new Cesium.Cartesian3()
    const _scratchCartesian3Normal1 = new Cesium.Cartesian3()
    const ScanPostStage = new Cesium.PostProcessStage({
      fragmentShader: ScanSegmentShader,
      uniforms: {
        u_scanCenterEC: () => {
          return Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center)
        },
        u_scanPlaneNormalEC: () => {
          const temp = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center)
          const temp1 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center1, _scratchCartesian4Center1)
          _scratchCartesian3Normal.x = temp1.x - temp.x
          _scratchCartesian3Normal.y = temp1.y - temp.y
          _scratchCartesian3Normal.z = temp1.z - temp.z
          Cesium.Cartesian3.normalize(_scratchCartesian3Normal, _scratchCartesian3Normal)
          return _scratchCartesian3Normal
        },
        u_radius: radius,
        u_scanLineNormalEC: () => {
          const temp = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center)
          const temp1 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center1, _scratchCartesian4Center1)
          const temp2 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center2, _scratchCartesian4Center2)
          _scratchCartesian3Normal.x = temp1.x - temp.x
          _scratchCartesian3Normal.y = temp1.y - temp.y
          _scratchCartesian3Normal.z = temp1.z - temp.z
          Cesium.Cartesian3.normalize(_scratchCartesian3Normal, _scratchCartesian3Normal)
          _scratchCartesian3Normal1.x = temp2.x - temp.x
          _scratchCartesian3Normal1.y = temp2.y - temp.y
          _scratchCartesian3Normal1.z = temp2.z - temp.z
          const tempTime = (((new Date()).getTime() - _time) % duration) / duration
          Cesium.Quaternion.fromAxisAngle(_scratchCartesian3Normal, tempTime * Cesium.Math.PI * 2, _RotateQ)
          Cesium.Matrix3.fromQuaternion(_RotateQ, _RotateM)
          Cesium.Matrix3.multiplyByVector(_RotateM, _scratchCartesian3Normal1, _scratchCartesian3Normal1)
          Cesium.Cartesian3.normalize(_scratchCartesian3Normal1, _scratchCartesian3Normal1)
          return _scratchCartesian3Normal1
        },
        u_scanColor: scanColor
      }
    })
    viewer.scene.postProcessStages.add(ScanPostStage)
    return (ScanPostStage)
  }

  /**
   * 添加雷达扫描效果
   * @param options
   * @returns {*}
   */
  addRadarScan(options = {}) {
    const option = Object.assign(defaultOption.radarScan, options)

    this.viewer.scene.globe.depthTestAgainstTerrain = true
    const CartographicCenter = new Cesium.Cartographic(Cesium.Math.toRadians(option.lng), Cesium.Math.toRadians(option.lat), 0)
    return this.addRadarScanPostStage(this.viewer, CartographicCenter, option.r, new Cesium.Color(option.color[0], option.color[1], option.color[2], option.color[3]), option.interval)
  }

  /**
   * 删除雷达扫描效果
   * @param target
   */
  removeRadarScan(target) {
    this.viewer.scene.globe.depthTestAgainstTerrain = false
    this.viewer.scene.postProcessStages.remove(target)
  }

  // 圆形波纹扩散效果
  addCircleScanPostStage(viewer, cartographicCenter, maxRadius, scanColor, duration) {
    const ScanSegmentShader = `
      uniform sampler2D colorTexture;
      uniform sampler2D depthTexture;
      varying vec2 v_textureCoordinates;
      uniform vec4 u_scanCenterEC;
      uniform vec3 u_scanPlaneNormalEC;
      uniform float u_radius;
      uniform vec4 u_scanColor;
      
      vec4 toEye(in vec2 uv, in float depth){
        vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));
        vec4 posInCamera = czm_inverseProjection * vec4(xy, depth, 1.0);
        posInCamera =posInCamera / posInCamera.w;
        return posInCamera;
      }
      
      vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point){
          vec3 v01 = point - planeOrigin;
          float d = dot(planeNormal, v01) ;
          return (point - planeNormal * d);
      }
      
      float getDepth(in vec4 depth){
          float z_window = czm_unpackDepth(depth);
          z_window = czm_reverseLogDepth(z_window);
          float n_range = czm_depthRange.near;
          float f_range = czm_depthRange.far;
          return (2.0 * z_window - n_range - f_range) / (f_range - n_range);
      }
      
      void main(){
          gl_FragColor = texture2D(colorTexture, v_textureCoordinates);
          float depth = getDepth(texture2D(depthTexture, v_textureCoordinates));
          vec4 viewPos = toEye(v_textureCoordinates, depth);
          vec3 prjOnPlane = pointProjectOnPlane(u_scanPlaneNormalEC.xyz, u_scanCenterEC.xyz, viewPos.xyz);
          float dis = length(prjOnPlane.xyz - u_scanCenterEC.xyz);
          if(dis < u_radius){
            float f = 1.0 - abs(u_radius - dis) / u_radius;
            f = pow(f, 8.0);
            gl_FragColor = mix(gl_FragColor, u_scanColor, f);
          }
        }`

    const _Cartesian3Center = Cesium.Cartographic.toCartesian(cartographicCenter)
    const _Cartesian4Center = new Cesium.Cartesian4(_Cartesian3Center.x, _Cartesian3Center.y, _Cartesian3Center.z, 1)
    const _CartographicCenter1 = new Cesium.Cartographic(cartographicCenter.longitude, cartographicCenter.latitude, cartographicCenter.height + 500)
    const _Cartesian3Center1 = Cesium.Cartographic.toCartesian(_CartographicCenter1)
    const _Cartesian4Center1 = new Cesium.Cartesian4(_Cartesian3Center1.x, _Cartesian3Center1.y, _Cartesian3Center1.z, 1)
    const _time = (new Date()).getTime()
    const _scratchCartesian4Center = new Cesium.Cartesian4()
    const _scratchCartesian4Center1 = new Cesium.Cartesian4()
    const _scratchCartesian3Normal = new Cesium.Cartesian3()
    const ScanPostStage = new Cesium.PostProcessStage({
      fragmentShader: ScanSegmentShader,
      uniforms: {
        u_scanCenterEC: () => {
          return Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center)
        },
        u_scanPlaneNormalEC: () => {
          const temp = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center)
          const temp1 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center1, _scratchCartesian4Center1)
          _scratchCartesian3Normal.x = temp1.x - temp.x
          _scratchCartesian3Normal.y = temp1.y - temp.y
          _scratchCartesian3Normal.z = temp1.z - temp.z
          Cesium.Cartesian3.normalize(_scratchCartesian3Normal, _scratchCartesian3Normal)
          return _scratchCartesian3Normal
        },
        u_radius: () => {
          return maxRadius * (((new Date()).getTime() - _time) % duration) / duration
        },
        u_scanColor: scanColor
      }
    })
    viewer.scene.postProcessStages.add(ScanPostStage)
    return ScanPostStage
  }

  /**
   * 增加圆形扩散效果
   * @param options
   * @returns {Cesium.PostProcessStage}
   */
  addCircleScan(options = {}) {
    const option = Object.assign(defaultOption.circleScan, options)

    this.viewer.scene.globe.depthTestAgainstTerrain = true // 防止移动、放大缩小会视觉偏移depthTestAgainstTerrain // 设置该属性为true之后，标绘将位于地形的顶部；如果设为false（默认值），那么标绘将位于平面上。缺陷：开启该属性有可能在切换图层时会引发标绘消失的bug。
    const CartographicCenter = new Cesium.Cartographic(Cesium.Math.toRadians(option.lng), Cesium.Math.toRadians(option.lat), 0) // 中心位子
    return this.addCircleScanPostStage(this.viewer, CartographicCenter, option.r, new Cesium.Color(option.color[0], option.color[1], option.color[2], option.color[3]), option.interval)
  }

  /**
   * 移除圆形扩散效果
   * @param circleScan
   */
  removeCircleScan(circleScan) {
    this.viewer.scene.globe.depthTestAgainstTerrain = false
    this.viewer.scene.postProcessStages.remove(circleScan)
  }

  /** ******************************************************** **/
  /** ********************    快捷操作  *********************** **/
  /** ******************************************************** **/

  // 创建指定类型
  createMarkersByType(type = 'default') {
    if (this.markers[type] === undefined) {
      this.markers[type] = []
    }
  }

  // 移除指定类型
  removeMarkersByType(type = 'default') {
    if (this.markers[type] && this.markers[type]) {
      this.markers[type].forEach(item => {
        this.viewer.entities.remove(item)
      })
      this.markers[type] = []
    }
  }

  // 移除全部类型
  removeAllMarkers() {
    Object.keys(this.markers).forEach(type => {
      this.removeMarkersByType(type)
    })
  }

  // 添加Billboard标志
  addBillboardMarkers(data = [], options = {}) {
    const option = Object.assign({
      type: 'default',
      idTarget: 'id',
      imageUrl: 'image/linePoi.png',
      rotation: 0,
      scale: 1.0,
      show: true,
      pixelOffset: [0, 0],
      width: 46,
      height: 114,
      verticalOrigin: 'BOTTOM',
      showBackground: true,
      backgroundColor: [0, 0, 0, 0],
      disableDepthTestDistance: 0,
      // disableDepthTestDistance: Number.POSITIVE_INFINITY,
      heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
      distanceDisplayCondition: [1, 20000],
      scaleByDistance: [3000, 1, 30000, 0.1],
      callback: () => {},
      clearFlag: true,
      clickFlag: true,
      moveFlag: true,
      labelPixelOffset: [0, 0],
      labelFont: '18px sans-serif',
      labelTarget: 'id',
      labelScale: 1
    }, options)
    this.createMarkersByType(option.type)
    if (option.clearFlag) {
      this.removeMarkersByType(option.type)
    }
    data.forEach(item => {
      const marker = this.viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(item.lng, item.lat),
        name: option.type,
        click: option.clickFlag,
        moveFlag: option.moveFlag,
        callback: option.callback,
        extData: item,
        label: {
          id: item[option.idTarget],
          text: item[option.labelTarget],
          font: option.labelFont,
          scale: option.labelScale, // 以像素为单位
          style: Cesium.LabelStyle.FILL,
          showBackground: option.showBackground,
          backgroundColor: new Cesium.Color(option.backgroundColor[0], option.backgroundColor[1], option.backgroundColor[2], option.backgroundColor[3]),
          horizontalOrigin: Cesium.HorizontalOrigin.LEFT, // 确定文字在坐标点的位置, CENTER  RIGHT  LEFT
          fillColor: Cesium.Color.WHITE,
          pixelOffset: new Cesium.Cartesian2(option.labelPixelOffset[0], option.labelPixelOffset[1]),
          verticalOrigin: Cesium.VerticalOrigin[option.verticalOrigin],
          distanceDisplayCondition: option.distanceDisplayCondition.length ? new Cesium.DistanceDisplayCondition(option.distanceDisplayCondition[0], option.distanceDisplayCondition[1]) : undefined, // 可视距
          pixelOffsetScaleByDistance: option.scaleByDistance.length ? new Cesium.NearFarScalar(option.scaleByDistance[0], option.scaleByDistance[1], option.scaleByDistance[2], option.scaleByDistance[3]) : undefined,
          scaleByDistance: option.scaleByDistance.length ? new Cesium.NearFarScalar(option.scaleByDistance[0], option.scaleByDistance[1], option.scaleByDistance[2], option.scaleByDistance[3]) : undefined,
          disableDepthTestDistance: option.disableDepthTestDistance, // 不进行深度检测
          heightReference: option.heightReference
        },
        billboard: {
          id: item[option.idTarget],
          image: this.baseUrl + option.imageUrl,
          rotation: option.rotation, // 设置以弧度为单位的旋转角度
          scale: option.scale, // 以像素为单位
          show: option.show,
          distanceDisplayCondition: option.distanceDisplayCondition.length ? new Cesium.DistanceDisplayCondition(option.distanceDisplayCondition[0], option.distanceDisplayCondition[1]) : undefined, // 可视距离
          pixelOffsetScaleByDistance: option.scaleByDistance.length ? new Cesium.NearFarScalar(option.scaleByDistance[0], option.scaleByDistance[1], option.scaleByDistance[2], option.scaleByDistance[3]) : undefined,
          scaleByDistance: option.scaleByDistance.length ? new Cesium.NearFarScalar(option.scaleByDistance[0], option.scaleByDistance[1], option.scaleByDistance[2], option.scaleByDistance[3]) : undefined,
          pixelOffset: new Cesium.Cartesian2(option.pixelOffset[0], option.pixelOffset[1]),
          verticalOrigin: Cesium.VerticalOrigin[option.verticalOrigin],
          width: option.width,
          height: option.height,
          disableDepthTestDistance: option.disableDepthTestDistance, // 不进行深度检测
          heightReference: option.heightReference
        }
      })
      this.markers[option.type].push(marker)
    })
  }
}
export { LCesium }

