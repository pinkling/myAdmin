<template>
  <section>
    <div id="cesiumContainer" @mousemove="mouseMove"></div>
    <transition mode="out-in" name="slide-fade-top">
      <section v-show="showBox" class="title-wrap">
        智慧城市
      </section>
    </transition>

    <transition mode="out-in" name="slide-fade-left">
      <section v-show="showBox" class="left-wrap">
        <section class="small-title">
          案件信息
        </section>
        <section style="height: 80px;">
          <section class="flex-center" style="width: 100%">
            <section v-for="item in caseData" :key="item.key" class="flex-center case-item" @click="addCases">
              <section style="text-align: center">
                <section class="case-label">{{ item.label }}</section>
                <section class="case-value">{{ item.value }}</section>
              </section>
            </section>
          </section>
        </section>
        <section style="height: 200px">
          <bar-chart2 v-if="showBox"></bar-chart2>
        </section>
        <section class="small-title">
          人员信息
        </section>
        <section style="width: 100%;height: 240px">
          <section class="person-info">
            <section class="sum-bg flex-center" @click="addPerson">
              <section style="display: flex;height: 45px;line-height: 45px;">
                <section style="color:rgba(255,255,255,0.70);font-size: 20px">监督员总人数</section>
                <section style="font-size: 24px;margin-left: 10px">
                  <!--{{leftTopData.ob_num}}-->
                  1410
                </section>
              </section>
            </section>
            <section class="cycle-wrap">
              <section class="flex-center" style="width: 50%;height: 100%;">
                <section style="width: 70%;height: 100%;">
                  <section style="width: 100px;height: 100px;margin: 10px auto;">
                    <cycle-chart
                      :legend="'出勤率'"
                      :data="98.25"
                    ></cycle-chart>
                  </section>
                  <section
                    style="margin: 10px 0; font-size: 16px;color: #FFF; display: flex;align-items: center"
                  >
                    <section class="flex-center" style="width: 20%;">
                      <section
                        style="width: 10px;height: 10px;background: #0E284C"
                      ></section>
                    </section>
                    <section style="width: 40%;color: rgba(255,255,255,0.7)">应出勤</section>
                    <section style="width: 40%;font-size: 18px;">514</section>
                  </section>
                  <section
                    style="margin: 10px 0; font-size: 16px;color: #FFF; display: flex;align-items: center"
                  >
                    <section class="flex-center" style="width: 20%;">
                      <section
                        style="width: 10px;height: 10px;background: #4293F4"
                      ></section>
                    </section>
                    <section style="width: 40%;color: rgba(255,255,255,0.7)">已出勤</section>
                    <section style="width: 40%;font-size: 18px;">505</section>
                  </section>
                </section>
              </section>

              <section class="flex-center" style="width: 50%;height: 100%;">
                <section style="width: 70%;height: 100%;">
                  <section style="width: 100px;height: 100px;margin: 10px auto;">
                    <cycle-chart
                      :legend="'在线率'"
                      :data="97.07"
                      :colors="['#2ED7B4']"
                    ></cycle-chart>
                  </section>
                  <section
                    style="margin: 10px 0; font-size: 16px;color: #FFF; display: flex;align-items: center"
                  >
                    <section class="flex-center" style="width: 20%;">
                      <section
                        style="width: 10px;height: 10px;background: #0E284C"
                      ></section>
                    </section>
                    <section style="width: 40%;color: rgba(255,255,255,0.7)">应在线</section>
                    <section style="width: 40%;font-size: 18px;">512</section>
                  </section>
                  <section
                    style="margin: 10px 0; font-size: 16px;color: #FFF; display: flex;align-items: center"
                  >
                    <section class="flex-center" style="width: 20%;">
                      <section
                        style="width: 10px;height: 10px;background: #2ED7B4"
                      ></section>
                    </section>
                    <section style="width: 40%;color: rgba(255,255,255,0.7)">实在线</section>
                    <section style="width: 40%;font-size: 18px;">497</section>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </transition>

    <section v-show="showTool" class="tool-wrap">
      <section>
        <el-button @click="roamPlay(true)">播放</el-button>
      </section>
      <section>
        <el-button @click="roamPlay(false)">暂停</el-button>
      </section>
      <section>
        <el-button @click="roamClear">清除</el-button>
      </section>
      <section>
        <el-button @click="addRoaming">还原</el-button>
      </section>
      <section>
        <el-button @click="closeRoaming">关闭</el-button>
      </section>
    </section>

    <transition mode="out-in" name="fade">
      <section
        v-if="showInfo === 'person'"
        key="person"
        class="person-wrap"
        style="height: 300px"
        @click="showInfo = ''"
      >
        <section class="title">监督员详情</section>
        <section class="info-box-row">
          <span class="info-label">姓名:</span>
          <span>张三</span>
        </section>
        <section class="info-box-row">
          <span class="info-label">手机号码 :</span>
          <span>18684826696</span>
        </section>
        <section class="info-box-row">
          <span class="info-label">责任片区:</span>
          <span>光明</span>
        </section>
        <section class="info-box-row">
          <span class="info-label">在线情况:</span>
          <span>GPS在线</span>
        </section>
        <section class="info-box-row">
          <span class="info-label">最后在线:</span>
          <span>2020-10-21 11:28:54</span>
        </section>
        <section style="text-align: center">
          <el-button type="primary" @click.stop="trackClick">轨迹回放</el-button>
        </section>
      </section>
      <section v-if="showInfo === 'case'" key="case" class="person-wrap" @click="showInfo = ''">
        <section class="title">案件详情</section>
        <section class="info-box-row">
          <span class="info-label">案件号:</span>
          <span>深光明2020字第1578号</span>
        </section>
        <section class="info-box-row">
          <span class="info-label">问题来源 :</span>
          <span>监督员上报/一般案件</span>
        </section>
        <section class="info-box-row">
          <span class="info-label">举报人:</span>
          <span>test[18524655586]</span>
        </section>
        <section class="info-box-row">
          <span class="info-label">案件类别:</span>
          <span>事件/市容环境/其它市容环境问题</span>
        </section>
        <section class="info-box-row">
          <span class="info-label">所属区域:</span>
          <span>深圳市/光明区/光明/东周</span>
        </section>
        <section class="info-box-row">
          <span class="info-label">事发位置:</span>
          <span>广东省深圳市光明区光明街道华夏路:</span>
        </section>
        <section class="info-box-row">
          <span class="info-label">问题描述:</span>
          <span></span>
        </section>
        <section class="info-box-row">
          <span class="info-label">备注:</span>
          <span></span>
        </section>
      </section>
    </transition>
  </section>
</template>

<script>
import BarChart2 from './components/BarChart2'
let viewer = null
let yViewer = null
let osmBuildingsTileset = null
let helper = null
let handler = null
let person = null
let cases = []
let roam = null
let circleScan = null
let radarScan = null
let wall = null
let wall2 = null
let sjx = null
const entity = {}
// const layers = {}

import Roaming from '../../../plugin/cesium/Roaming'
// import TrailMaterial from '../../../plugin/cesium/TrailMaterial' // eslint-disable-line
import { default as PolylineTrailMaterial } from '../../../plugin/cesium/PolylineTrailMaterial'
import { default as WallTrailMaterial } from '../../../plugin/cesium/WallTrailMaterial'

import YsCesium from '../../../plugin/cesium/ysCesium'
import CycleChart from './components/CycleChart'
export default {
  name: 'Index',
  components: { CycleChart, BarChart2 },
  data() {
    return {
      showBox: false,
      showInfo: '',
      showTool: false,
      timer: null,
      rotateFlag: true,
      caseData: [
        { key: 'sb', label: '上报数', value: '6126' },
        { key: 'la', label: '立案数', value: '6045' },
        { key: 'ja', label: '结案数', value: '3444' },
        { key: 'cs', label: '超时数', value: '4' }
      ]
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    if (viewer) {
      // viewer.dataSource.removeAll()
      viewer.destroy()
      viewer = null
    }
  },
  methods: {
    init() {
      viewer = new this.Cesium.Viewer('cesiumContainer', {
        shouldAnimate: true,
        geocoder: false, // 地理位置查询定位控件
        homeButton: false, // 默认相机位置控件
        timeline: false, // 时间滚动条控件
        navigationHelpButton: false, // 默认的相机控制提示控件
        fullscreenButton: false, // 全屏控件
        scene3DOnly: true, // 每个几何实例仅以3D渲染以节省GPU内存
        baseLayerPicker: false, // 底图切换控件
        CreditsDisplay: false,
        selectionIndicator: false, // 默认的选中指示框
        infoBox: false, // 默认的信息框
        sceneModePicker: false, // 模型
        animation: false // 控制场景动画的播放速度控件
      })
      viewer._cesiumWidget._creditContainer.style.display = 'none'
      viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(this.Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)

      // 是否开启抗锯齿
      viewer.scene.fxaa = true
      viewer.scene.postProcessStages.fxaa.enabled = true

      viewer.imageryLayers.addImageryProvider(new this.Cesium.WebMapTileServiceImageryProvider({
        url: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}',
        layer: 'mapBoxLayer',
        style: 'default',
        format: 'image/jpeg',
        tileMatrixSetID: 'GoogleMapsCompatible',
        show: false
      }))// 注记图层

      yViewer = new YsCesium({ viewer })

      this.addModel()
      this.baseColor()

      helper = new this.Cesium.EventHelper()
      helper.add(viewer.scene.globe.tileLoadProgressEvent, this.initStart)
    },
    mouseMove() {
      if (this.rotateFlag) {
        viewer.camera.lookAtTransform(this.Cesium.Matrix4.IDENTITY)
      }
      this.rotateFlag = false
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.rotateFlag = true
      }, 10000)
    },
    addPointRotate(lng = 112.976322, lat = 28.195325) {
      const center = this.Cesium.Cartesian3.fromDegrees(lng, lat)

      let heading = this.Cesium.Math.toRadians(50.0)
      const pitch = this.Cesium.Math.toRadians(-20.0)
      const range = 2000.0
      let x = 50
      viewer.scene.postRender.addEventListener(() => {
        if (this.rotateFlag) {
          x += 0.05
          heading = this.Cesium.Math.toRadians(x)
          viewer.camera.lookAt(center, new this.Cesium.HeadingPitchRange(heading, pitch, range))
        }
      })
    },
    initStart(e) {
      if (e === 0) {
        this.addRotate()
        helper.removeAll()
      }
    },
    addModel() {
      if (!osmBuildingsTileset) {
        osmBuildingsTileset = this.Cesium.createOsmBuildings()
        viewer.scene.primitives.add(osmBuildingsTileset)
        osmBuildingsTileset.distanceDisplayCondition = new this.Cesium.DistanceDisplayCondition(0.0, 6000.0)
      }
    },
    RemoveModel() {
      viewer.scene.primitives.remove(osmBuildingsTileset)
    },
    baseColor() {
      if (!osmBuildingsTileset) {
        return
      }
      osmBuildingsTileset.style = new this.Cesium.Cesium3DTileStyle({
        defines: {
          material: '${feature[\'building:material\']}'
        },
        color: {
          conditions: [
            ['${material} === null', 'color(\'white\', 1)'],
            ['${material} === \'glass\'', 'color(\'skyblue\', 1)'],
            ['${material} === \'concrete\'', 'color(\'yellow\', 1)'],
            ['${material} === \'brick\'', 'color(\'indianred\', 1)'],
            ['${material} === \'stone\'', 'color(\'red\', 1)'],
            ['${material} === \'metal\'', 'color(\'blue\')'],
            ['${material} === \'steel\'', 'color(\'lightsteelblue\')'],
            ['true', 'color(\'#00FFFF\', 0.9)'] // This is the else case
          ]
        }
      })
    },
    addRotate() {
      let i = Date.now()

      const rotate = () => {
        const a = 0.65
        const t = Date.now()
        const n = (t - i) / 1e3
        i = t
        viewer.scene.camera.rotate(this.Cesium.Cartesian3.UNIT_Z, -a * n)
      }

      viewer.clock.onTick.addEventListener(rotate)
      setTimeout(() => {
        viewer.clock.onTick.removeEventListener(rotate)
        this.flyto({ complete: this.flyCompleteFunction })
      }, 4000)
    },
    flyto(options = {}) {
      const option = Object.assign({
        destination: [112.979486, 28.15526, 3000.0],
        heading: 0,
        pitch: -90,
        roll: 0,
        complete: () => {}
      }, options)

      viewer.camera.flyTo({
        destination: this.Cesium.Cartesian3.fromDegrees(option.destination[0], option.destination[1], option.destination[2]),
        orientation: {
          heading: this.Cesium.Math.toRadians(option.heading),
          pitch: this.Cesium.Math.toRadians(option.pitch),
          roll: this.Cesium.Math.toRadians(option.roll)
        },
        complete: option.complete
      })
    },
    flyCompleteFunction() {
      // this.fly({ destination: [113.006986, 28.00026, 15000.0], pitch: -35 })
      viewer.scene.camera.setView({
        destination: this.Cesium.Cartesian3.fromDegrees(112.979486, 28.15526, 3000),
        orientation: {
          heading: this.Cesium.Math.toRadians(0),
          pitch: this.Cesium.Math.toRadians(-35),
          roll: this.Cesium.Math.toRadians(0)
        }
      })
      this.addPointRotate()
      this.addRoad()
      this.addBound()
      this.addWall2()
      this.addSjx()
      this.addEllipse()

      this.showBox = true
      this.addClick()
      // 限制相机高度
      viewer.scene.screenSpaceCameraController.minimumZoomDistance = 100
      viewer.scene.screenSpaceCameraController.maximumZoomDistance = 30000
    },
    addPerson() {
      const obj = { lng: 112.98059320518198, lat: 28.198428789919138 }
      const position = this.Cesium.Cartesian3.fromDegrees(obj.lng, obj.lat)
      if (person) {
        return
      }
      person = viewer.entities.add({
        // 位置
        position: position,
        name: 'person',
        click: true,
        callback: () => {
          this.showInfo = 'person'
        },
        // 加载模型
        model: {
          // 模型路径
          uri: '/myAdmin/3D/Cesium_Man.glb',
          // 模型最小刻度
          minimumPixelSize: 64,
          maximumSize: 128,
          // 设置模型最大放大大小
          maximumScale: 128,
          // 模型是否可见
          show: true,
          heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND, // 让模型在地形上紧贴
          // 模型轮廓颜色
          silhouetteColor: this.Cesium.Color.WHITE,
          // 模型颜色  ，这里可以设置颜色的变化
          // color: color,
          // 仅用于调试，显示魔仙绘制时的线框
          debugWireframe: false,
          // 仅用于调试。显示模型绘制时的边界球。
          debugShowBoundingVolume: false,

          scale: 20,
          runAnimations: true // 是否运行模型中的动画效果
        }
      })
    },
    trackClick() {
      this.addRoaming(person)
    },
    addRoaming(model) {
      model.show = false
      this.showTool = true
      if (roam) {
        this.roamClear()
      }
      roam = new Roaming(viewer, {
        // modeluri: 'https://sandcastle.cesium.com/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb',
        // modeluri: 'http://192.168.20.98:8080/CesiumMilkTruck.glb',
        modeluri: '/myAdmin/3D/Cesium_Man.glb',
        time: 1000,
        Lines: [
          { lng: 112.98059320518198, lat: 28.198428789919138, height: 0.0 },
          { lng: 112.98061548078061, lat: 28.19832886120624, height: 0.0 },
          { lng: 112.98309072901401, lat: 28.198192635524112, height: 0.0 },
          { lng: 112.98337832604088, lat: 28.19715570115573, height: 0.0 },
          { lng: 112.98352366744732, lat: 28.195610402962462, height: 0.0 },
          { lng: 112.98365035226243, lat: 28.19471715487122, height: 0.0 },
          { lng: 112.9836327248343, lat: 28.194367423786414, height: 0.0 },
          { lng: 112.981946942503, lat: 28.194162341296888, height: 0.0 }
        ],
        isPathShow: true,
        click: true,
        callback: () => {
          this.showInfo = 'person'
        }
      })
      this.roamPlay(false)
    },
    roamPlay(flag = true) {
      if (roam) {
        roam.PauseOrContinue(flag)
      }
    },
    roamClear() {
      if (roam) {
        roam.EndRoaming()
      }
      roam = null
    },
    closeRoaming() {
      this.roamPlay(true)
      this.roamClear()
      person.show = true
      this.showTool = false
    },
    addCase(lng = 112.98159320518198, lat = 28.199428789919138) {
      const position = this.Cesium.Cartesian3.fromDegrees(lng, lat)
      const c = viewer.entities.add({
        // 位置
        position: position,
        name: 'case',
        click: true,
        callback: () => {
          this.showInfo = 'case'
        },
        billboard: {
          id: 'fan',
          // image: '/image/立案.png',
          image: '/image/linePoi.png',
          rotation: 0, // 设置以弧度为单位的旋转角度
          scale: 1.0, // 以像素为单位
          show: true,
          pixelOffset: new this.Cesium.Cartesian2(0, -57),
          width: 46,
          height: 114,
          disableDepthTestDistance: Number.POSITIVE_INFINITY, // 广告牌不进行深度检测
          heightReference: this.Cesium.HeightReference.RELATIVE_TO_GROUND

        }
      })
      return c
    },
    addCases() {
      if (cases.length) {
        cases.forEach(item => {
          viewer.entities.remove(item)
        })
        cases = []
      } else {
        cases.push(this.addCase())
        for (let i = 0; i < 20; i++) {
          cases.push(this.addCase(112.98059320518198 + 0.03 * Math.random(), 28.197428789919138 + 0.03 * Math.random()))
        }
      }
    },
    addClick() {
      handler = new this.Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
      handler.setInputAction((movement) => {
        // viewer.selectedEntity = undefined
        console.log('selectedEntity', viewer.selectedEntity)
        if (viewer.selectedEntity && viewer.selectedEntity.click) {
          console.log('selectedEntity', viewer.selectedEntity)
          viewer.selectedEntity.callback()
        }
        // const pickedBuilding = viewer.scene.pick(movement.position)
        // console.log('pickedBuilding>', pickedBuilding)
      }, this.Cesium.ScreenSpaceEventType.LEFT_CLICK)
    },
    addBound() {
      const polygon = this.Cesium.GeoJsonDataSource.load('/myAdmin/json/430102.json', { // 让地图贴地
        clamToGround: true
      }) // 加载资源
      polygon.then((dataSource) => { // 把数据加到场景里面去
        viewer.dataSources.add(dataSource)
        const neighborhoodsEntities = dataSource.entities.values
        for (let i = 0; i < neighborhoodsEntities.length; i++) {
          const entity = neighborhoodsEntities[i]
          if (this.Cesium.defined(entity.polygon)) {
            entity.name = entity.properties.name
            entity.polygon.material = this.Cesium.Color.fromRandom({ red: 25, green: 32, blue: 111, alpha: 0.2 }) // 修改每一个多边形得材质
            entity.polygon.outlineColor = new this.Cesium.Color(0, 1, 1, 0.5) // 边线颜色
            entity.polygon.classificationType = this.Cesium.ClassificationType.TERRAIN // 区块直接贴在地面上

            const polyPostions = entity.polygon.hierarchy.getValue(this.Cesium.JulianDate.now()).positions // 从多边形上取出他的顶点
            let polyCenter = this.Cesium.BoundingSphere.fromPoints(polyPostions).center // 通过顶点构建一个包围球
            polyCenter = this.Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(polyCenter) // 把包围球得中心做贴地得偏移
            entity.position = polyCenter
            entity.label = { // 创建一个标签，在中心点位置
              text: entity.name,
              showBackground: true,
              scale: 0.6,
              horizontalOrigin: this.Cesium.HorizontalOrigin.CENTER,
              verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM,
              distanceDisplayCondition: new this.Cesium.DistanceDisplayCondition(10.0, 15000.0),
              disableDepthTestDistance: 100.0
            }
          }
        }
      })
    },
    hideModel() {
      osmBuildingsTileset.show = !osmBuildingsTileset.show
    },
    addRoad() {
      const promise = this.Cesium.GeoJsonDataSource.load('/myAdmin/json/road.json') // 显示管线数据  直接加载json数据 比把json转化成czml在加载 快很多
      promise.then((dataSource) => {
        viewer.dataSources.add(dataSource)
        const entities = dataSource.entities.values

        for (let i = 0; i < entities.length; i++) {
          const r = entities[i]
          if (r.polyline === undefined) {
            r.show = false
            continue
          }
          r.nameID = i // 给每条线添加一个编号，方便之后对线修改样式
          r.polyline.width = 1 // 添加默认样式
          r.clampToGround = true
          r.polyline.material = new this.Cesium.PolylineGlowMaterialProperty({
            glowPower: 0.5, // 一个数字属性，指定发光强度，占总线宽的百分比。
            color: this.Cesium.Color.DARKCYAN.withAlpha(0.4)
            // color: new this.Cesium.Color(88 / 255, 88 / 255, 255 / 255, 0.5)
          })
          r.polyline.material = new PolylineTrailMaterial({ // 尾迹线材质
            color: this.Cesium.Color.fromCssColorString('rgba(90,90,255, 1)'),
            duration: 6800,
            trailLength: 1
          })
        }
      })
    },
    addCircleScan() {
      if (circleScan) {
        yViewer.delCircleScan(circleScan)
        circleScan = null
      } else {
        circleScan = yViewer.addCircleScan({
          lon: 112.98159320518198, // 经度
          lat: 28.199428, // 纬度
          scanColor: new this.Cesium.Color(0, 1.0, 0, 1),
          r: 1500, // 扫描半径
          interval: 4000// 时间间隔
        })
      }
    },
    addRadarScan() {
      if (radarScan) {
        yViewer.delRadarScan(radarScan)
        radarScan = null
      } else {
        radarScan = yViewer.addRadarScan({
          lon: 112.98159320518198, // 经度
          lat: 28.199428, // 纬度
          scanColor: new this.Cesium.Color(0, 1.0, 0, 1),
          r: 1500, // 扫描半径
          interval: 4000// 时间间隔
        })
      }
    },
    addWall() {
      if (wall) {
        viewer.entities.remove(wall)
        wall = null
      } else {
        wall = viewer.entities.add({
          name: 'WallTrail',
          wall: {
            positions: this.Cesium.Cartesian3.fromDegreesArrayHeights([112.78, 28.19, 1000.0,
              112.98, 28.19, 1000.0,
              112.98, 28.39, 1000.0,
              112.78, 28.39, 1000.0,
              112.78, 28.19, 1000.0]),
            material: new this.Cesium.PolylineTrailMaterialProperty({
              color: this.Cesium.Color.ORANGE,
              duration: 9000,
              trailLength: 1,
              img: require('../../../../public/image/colors3.png')
            })
          }
        })
      }
    },
    addWall2() {
      if (wall2) {
        viewer.entities.remove(wall2)
        wall2 = null
      } else {
        const pos = []
        const data = require('../../../../public/json/430102.json')
        data.features[0].geometry.coordinates[0][0].forEach(item => {
          pos.push(item[0])
          pos.push(item[1])
          pos.push(60)
        })
        // let alp = 1
        // let num = 0
        wall2 = viewer.entities.add({
          name: 'WallTrail2',
          wall: {
            show: true,
            positions: this.Cesium.Cartesian3.fromDegreesArrayHeights(pos),
            // material: new this.Cesium.ImageMaterialProperty({
            //   image: require('../../../assets/image/color.png'),
            //   transparent: true,
            //   color: new this.Cesium.CallbackProperty(() => {
            //     if ((num % 2) === 0) { alp -= 0.005 } else { alp += 0.005 }
            //     if (alp <= 0.2) { num++ } else if (alp >= 1) { num++ }
            //     return new this.Cesium.Color.WHITE.withAlpha(alp) // eslint-disable-line
            //   }, false)
            // })
            material: new WallTrailMaterial({ // 尾迹线材质
              color: this.Cesium.Color.fromCssColorString('rgba(90,90,255, 0)'),
              duration: 6800,
              trailLength: 1
            })
          }
        })
      }
    },
    addSjx() {
      if (sjx) {
        viewer.entities.remove(sjx)
        sjx = null
      } else {
        const lng = 112.976322
        const lat = 28.195325
        const height = 200
        const position = this.Cesium.Cartesian3.fromDegrees(lng, lat, height)

        let heading = 0// 偏航角（Y轴）
        const pitch = 0 // 俯仰角（X轴）
        const roll = 0// 翻滚角（Z轴）

        const xuanzhuan = () => {
          heading = heading + this.Cesium.Math.toRadians(3)
          const hpr = new this.Cesium.HeadingPitchRoll(heading, pitch, roll)
          const orientation = this.Cesium.Transforms.headingPitchRollQuaternion(position, hpr)
          return orientation
        }

        sjx = viewer.entities.add({
          name: '四棱锥',
          position: position,
          orientation: new this.Cesium.CallbackProperty(xuanzhuan, false),
          click: true,
          callback: () => {
            alert('点击了四棱锥')
          },
          model: {
            // 模型路径
            uri: '/myAdmin/3D/sjx.glb',
            // 模型最小刻度
            minimumPixelSize: 64,
            maximumSize: 128,
            // 设置模型最大放大大小
            maximumScale: 128,
            minimumScale: 64,
            // 模型是否可见
            show: true,
            // heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND, // 让模型在地形上紧贴
            // 模型轮廓颜色
            silhouetteColor: this.Cesium.Color.WHITE,
            // 模型颜色  ，这里可以设置颜色的变化
            color: this.Cesium.Color.WHITE,
            // 仅用于调试，显示魔仙绘制时的线框
            debugWireframe: false,
            // 仅用于调试。显示模型绘制时的边界球。
            debugShowBoundingVolume: false,

            scale: 64,
            runAnimations: true // 是否运行模型中的动画效果
          }
        })
      }
    },
    // 加载椭圆
    addEllipse() {
      if (entity.ellipse) {
        viewer.entities.remove(entity.ellipse)
        delete entity.ellipse
      } else {
        let rotation = this.Cesium.Math.toRadians(30)
        const getRotationValue = () => {
          rotation -= 0.005
          return rotation
        }
        entity.ellipse = viewer.entities.add({
          position: this.Cesium.Cartesian3.fromDegrees(112.976322, 28.195325),
          name: 'Blue translucent, rotated, and extruded ellipse with outline',
          ellipse: {
            semiMinorAxis: 500.0, // 半短轴
            semiMajorAxis: 500.0, // 半长轴
            height: 20.0, // 距离地球球面高度
            material: new this.Cesium.ImageMaterialProperty({
              // image: '/image/roateCir.png',
              image: '/image/bg_circle.png',
              transparent: true// 别忘了把允许透明打开
            }),
            rotation: new this.Cesium.CallbackProperty(getRotationValue, false),
            stRotation: new this.Cesium.CallbackProperty(getRotationValue, false),
            outline: 5// windows 下 不能为1 可以置为false
          },
          data: { a: 1 }, // 额外数据
          click: true
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  * {
    user-select: none;
    -webkit-user-drag: none;
  }
  #cesiumContainer {
    width: 100%;
    height: calc(100vh - 84px);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  /*左侧过渡动画*/
  .slide-fade-left-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-left-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-left-enter, .slide-fade-left-leave-to {
    transform: translateX(-1rem);
    opacity: 0;
  }

  /*右侧过渡动画*/
  .slide-fade-right-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-right-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-right-enter, .slide-fade-right-leave-to {
    transform: translateX(1rem);
    opacity: 0;
  }

  /*下方过渡动画*/
  .slide-fade-bottom-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-bottom-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-bottom-enter, .slide-fade-bottom-leave-to {
    transform: translateY(1rem);
    opacity: 0;
  }

  /*上方过渡动画*/
  .slide-fade-top-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-top-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-top-enter, .slide-fade-top-leave-to {
    transform: translateY(-1rem);
    opacity: 0;
  }

  .title-wrap {
    position: absolute;
    top: 0;
    left: calc(50% - 418px);
    width: 836px;
    height: 60px;
    background: url("../../../assets/image/标题.png") no-repeat;
    background-size: contain;
    background-position: center center;

    font-family: Microsoft YaHei,serif;
    font-weight: bold;
    color: #FFF;
    text-align: center;
    line-height: 50px;
    font-size: 24px;
    letter-spacing: 5px;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left-wrap {
    position: absolute;
    top: 120px;
    left: 0px;
    width: 400px;
    height: 635px;
    background: rgba(7, 17, 25, 0.5);

    color: #FFF;
    overflow-x: hidden;
    overflow-y: auto;

    .btn {
      width: 70%;
      margin: 10px auto;
      height: 30px;
      line-height: 30px;
      color: #FFF;
      border: 1px solid #00ffff;
      background: #0a76a4;
      transition: all .3s ease;
      cursor: pointer;
      text-align: center;
      font-size: 16px;

      &:hover {
        background: #0a98d0;
      }
    }
    .small-title {
      width: 100%;
      height: 38px;
      line-height: 38px;
      background: url("../../../assets/image/titleBg.png") no-repeat;
      background-size: contain;
      background-position: center center;
      font-size: 20px;
      color: #FFF;
      font-weight: 900;
      font-family: "Microsoft YaHei";
      text-indent: 20px;
      letter-spacing: 3px;
    }
    .case-item {
      width: 25%;
      height: 80px;
      cursor: pointer;
      transition: all .3s ease;
      .case-label {
        margin: 5px 0;
        font-size: 16px;
        color: #e2e2e2;
      }
      .case-value {
        margin: 5px 0;
        font-size: 22px;
        font-weight: bold;
      }
      &:hover {
        background: rgba(45, 100, 195, 0.5);
      }
    }
    .person-info {
      width: 100%;
      font-family: "Microsoft YaHei";
      font-weight: 400;

      .container {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 15px auto;

        .left {
          width: 24%;
        }

        .right {
          width: 76%;
          margin: 0 auto;
          border-left: 1px solid rgba(225, 230, 230, 0.5);

          .circle-green {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: rgba(48, 223, 186, 0.1);
            border: 0.04rem solid rgba(48, 223, 186, 1);
            margin: 0 auto;
          }

          .col {
            width: 42%;
            margin: 0 4%;
          }
        }
      }

      .label {
        font-size: 18px;
        color: rgba(255, 255, 255, 0.7);
      }

      .value {
        font-size: 18px;
        color: rgba(255, 255, 255, 1);
      }

      .value-green {
        font-size: 18px;
        color: rgba(48, 223, 186, 1);
      }
      .sum-bg {
        width: 300px;
        height: 45px;
        margin: 15px auto;
        background: url("../../../assets/image/bg1.png") no-repeat;
        background-position: center;
        background-size: cover;
        cursor: pointer;
      }
      .cycle-wrap {
        width: 100%;
        display: flex;
      }
    }
  }

  .person-wrap {
    position: absolute;
    right: 20px;
    top: 120px;
    width: 300px;
    height: 400px;
    background: rgba(7, 17, 25, 0.5);
    border: #0a76a4 1px solid;
    color: #FFF;
    padding: 10px;
    overflow: auto;

    .title {
      font-size: 18px;
      font-weight: bold;
      color: #FFF;
    }

    .info-box-row {
      margin: 5px 0;
      font-size: 15px;

      .info-label {
        color: #e0e0e0;
      }

      span:nth-child(2) {

      }
    }
  }

  .tool-wrap {
    position: absolute;
    right: 240px;
    top: 120px;

    section {
      margin-bottom: 10px;
    }
  }
</style>
