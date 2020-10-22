<template>
  <div id="cesiumContainer"></div>
</template>

<script>
let viewer = null
export default {
  name: 'Index',
  data() {
    return {
      viewer: null
    }
  },
  mounted() {
    this.init()
    this.addRotate()
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
    },
    addRotate() {
      let i = Date.now()
      const Cesium = require('cesium/Cesium')

      function rotate() {
        const a = 0.1
        const t = Date.now()
        const n = (t - i) / 1e3
        i = t
        viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, -a * n)
      }

      viewer.clock.onTick.addEventListener(rotate)
      setTimeout(function() {
        viewer.clock.onTick.removeEventListener(rotate)
      }, 999000)
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
