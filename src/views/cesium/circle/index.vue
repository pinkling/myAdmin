<template>
  <div id="cesiumContainer"></div>
</template>

<script>
let viewer = null
const line = {}
import CircleWaveMaterial from '../../../plugin/cesium/CircleWaveMaterialType.js' // eslint-disable-line
// import { default as CircleWaveMaterial } from '../../../plugin/cesium/CircleWaveMaterialType.js'
export default {
  name: 'Index',
  data() {
    return {
      viewer: null
    }
  },
  mounted() {
    this.init()
    this.addClick()
    this.addLine()
  },
  methods: {
    init() {
      viewer = new this.Cesium.Viewer('cesiumContainer', {
        terrainProvider: new this.Cesium.CesiumTerrainProvider({ // 添加地形
          url: this.Cesium.IonResource.fromAssetId(1),
          requestWaterMask: true,
          requestVertexNormals: true
        }),
        geocoder: false, // 地理位置查询定位控件
        homeButton: false, // 默认相机位置控件
        timeline: false, // 时间滚动条控件
        navigationHelpButton: false, // 默认的相机控制提示控件
        fullscreenButton: false, // 全屏控件
        scene3DOnly: true, // 每个几何实例仅以3D渲染以节省GPU内存
        baseLayerPicker: false, // 底图切换控件
        CreditsDisplay: false,
        animation: false // 控制场景动画的播放速度控件
      })
      viewer._cesiumWidget._creditContainer.style.display = 'none'

      viewer.scene.camera.setView({
        destination: this.Cesium.Cartesian3.fromDegrees(-122.3472, 47.598, 370),
        orientation: {
          heading: this.Cesium.Math.toRadians(10),
          pitch: this.Cesium.Math.toRadians(-10)
        }
      })
    },
    addClick() {
      const handler = new this.Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)

      handler.setInputAction((movement) => {
        const pick = viewer.scene.pick(movement.position)
        if (this.Cesium.defined(pick) && (pick.id.click === true)) {
          alert(JSON.stringify(pick.id.name))
          console.log('Pick>>', pick)
        }
      }, this.Cesium.ScreenSpaceEventType.LEFT_CLICK)
    },
    addLine() {
      // 流动的线
      line.trailLine = viewer.entities.add({ // 终点
        description: 'end-point',
        name: 'destinationName',
        position: this.Cesium.Cartesian3.fromDegrees(-122.3612, 47.658),
        // 圆形波纹闪烁效果
        ellipse: {
          height: 10,
          semiMinorAxis: 500,
          semiMajorAxis: 500,
          material: new this.Cesium.CircleWaveMaterialProperty({
            duration: 2e3,
            gradient: 3, // 亮度
            color: new this.Cesium.Color(0.0, 0.1, 0.9, 1.0),
            count: 2
          })
        },
        click: true,
        data: { a: 0 }
      })
    }
  }
}
</script>

<style scoped>
  #cesiumContainer {
    width: 100%;
    height: calc(100vh - 84px);
  }
</style>
