<template>
  <div id="cesiumContainer"></div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {}
  },
  mounted() {
    const Cesium = this.Cesium
    const cc = new Cesium.Viewer('cesiumContainer', {
      terrainProvider: new Cesium.CesiumTerrainProvider({ // 添加地形
        url: Cesium.IonResource.fromAssetId(1),
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
    cc._cesiumWidget._creditContainer.style.display = 'none'
  }
}
</script>

<style scoped>
  #cesiumContainer{
    width: 100%;
    height: calc(100vh - 84px);
  }
</style>
