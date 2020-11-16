<template>
  <div id="cesiumContainer" @mousemove="mouseMove"></div>
</template>

<script>
let viewer = null
export default {
  name: 'Index',
  data() {
    return {
      viewer: null,
      timer: null,
      time: 1
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

      const initialPosition = this.Cesium.Cartesian3.fromDegrees(
        -74.01881302800248,
        40.69114333714821,
        7530
      )
      const initialOrientation = new this.Cesium.HeadingPitchRoll.fromDegrees( // eslint-disable-line
        21.27879878293835,
        -21.34390550872461,
        0.0716951918898415
      )
      viewer.scene.camera.setView({
        destination: initialPosition,
        orientation: initialOrientation,
        endTransform: this.Cesium.Matrix4.IDENTITY
      })
    },
    mouseMove() {
      if (this.time) {
        viewer.camera.lookAtTransform(this.Cesium.Matrix4.IDENTITY)
      }
      this.time = 0
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.time = 1
      }, 3000)
    },
    addRotate() {
      // const height = Math.ceil(viewer.camera.positionCartographic.height) > 10000 ? 3000 : Math.ceil(viewer.camera.positionCartographic.height)
      const center = this.Cesium.Cartesian3.fromDegrees(-74.01881302800248, 40.69114333714821)

      let heading = this.Cesium.Math.toRadians(50.0)
      const pitch = this.Cesium.Math.toRadians(-20.0)
      const range = 5000.0
      let x = 50
      viewer.scene.postRender.addEventListener(() => {
        if (this.time) {
          x += 0.05
          heading = this.Cesium.Math.toRadians(x)
          viewer.camera.lookAt(center, new this.Cesium.HeadingPitchRange(heading, pitch, range))
        }
      })
    }
  }
}
</script>

<style scoped>
  #cesiumContainer{
    width: 100%;
    height: calc(100vh - 84px);
  }
</style>
