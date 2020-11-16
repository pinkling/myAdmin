<template>
  <div id="cesiumContainer"></div>
</template>

<script>
let viewer = null
import { default as WallTrailMaterial } from '../../../plugin/cesium/WallTrailMaterial'
export default {
  name: 'Index',
  data() {
    return {
      viewer: null
    }
  },
  mounted() {
    this.init()
    this.addWall()
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
    addWall() {
      const positions = this.Cesium.Cartesian3.fromDegreesArrayHeights([
        -122.3572, 47.598, 400.0,
        -122.3602, 47.598, 400.0,
        -122.3602, 47.608, 400.0,
        -122.3572, 47.608, 400.0,
        -122.3572, 47.598, 400.0
      ])
      // 绘制墙
      var wyoming = viewer.entities.add({
        name: '动态立体墙',
        wall: {
          show: true,
          positions: positions,
          material: new WallTrailMaterial({ // 尾迹线材质
            color: this.Cesium.Color.fromCssColorString('rgba(90,90,255, 0)'),
            duration: 6800,
            trailLength: 1
          })
        }
      })
      viewer.zoomTo(wyoming)// 相机到entity的位置
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
