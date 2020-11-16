<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import heatmapFactory from 'heatmap.js'
// import heatMap from '../../openlayers/heatMap'

let viewer = null
// const heatmap = null
export default {
  name: 'Index',
  data() {
    return {
      viewer: null
    }
  },
  mounted() {
    this.init()
    this.addHeatmap()
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
    addHeatmap() {
      var len = 300
      var points = []
      var max = 100
      var width = 600
      var height = 400

      var latMin = 28.364807
      var latMax = 40.251095
      var lonMin = 94.389228
      var lonMax = 108.666357

      var dataRaw = []
      for (var i = 0; i < len; i++) {
        var point = {
          lat: latMin + Math.random() * (latMax - latMin),
          lon: lonMin + Math.random() * (lonMax - lonMin),
          value: Math.floor(Math.random() * 100)
        }
        dataRaw.push(point)
      }
      //
      for (let i = 0; i < len; i++) {
        var dataItem = dataRaw[i]
        const point = {
          x: Math.floor((dataItem.lat - latMin) / (latMax - latMin) * width),
          y: Math.floor((dataItem.lon - lonMin) / (lonMax - lonMin) * height),
          value: Math.floor(dataItem.value)
        }
        max = Math.max(max, dataItem.value)
        points.push(point)
      }

      var heatmapInstance = heatmapFactory.create({
        container: document.querySelector('#cesiumContainer')
      })

      var data = {
        max: max,
        data: points
      }
      //
      heatmapInstance.setData(data)

      var canvas = document.getElementsByClassName('heatmap-canvas')
      canvas[0].style.display = 'none'
      console.log(canvas)
      viewer.entities.add({
        name: 'heatmap',
        rectangle: {
          coordinates: this.Cesium.Rectangle.fromDegrees(lonMin, latMin, lonMax, latMax),
          material: new this.Cesium.ImageMaterialProperty({
            image: canvas[0],
            transparent: true
          })

        }
      })

      viewer.zoomTo(viewer.entities)
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
