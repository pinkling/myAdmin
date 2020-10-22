<template>
  <div id="cesiumContainer"></div>
</template>

<script>
let viewer = null
let osmBuildingsTileset = null
let handler = null
export default {
  name: 'Index',
  data() {
    return {
      viewer: null
    }
  },
  mounted() {
    this.init()
    this.addModel()
    this.change(-122.34931, 47.62051)
    this.addClick()
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
    addModel() {
      osmBuildingsTileset = this.Cesium.createOsmBuildings()
      viewer.scene.primitives.add(osmBuildingsTileset)
    },
    change(lng, lat) {
      osmBuildingsTileset.style = new this.Cesium.Cesium3DTileStyle({
        defines: {
          distance: 'distance(vec2(${feature[\'cesium#longitude\']}, ${feature[\'cesium#latitude\']}), vec2(' + lng + ',' + lat + '))'
        },
        color: {
          conditions: [
            ['${distance} > 0.014', 'color(\'blue\')'],
            ['${distance} > 0.010', 'color(\'green\')'],
            ['${distance} > 0.006', 'color(\'yellow\')'],
            ['${distance} > 0.0001', 'color(\'red\')'],
            ['true', 'color(\'white\')']
          ]
        }
      })
    },
    addClick() {
      handler = new this.Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
      handler.setInputAction((movement) => {
        viewer.selectedEntity = undefined
        const pickedBuilding = viewer.scene.pick(movement.position)
        if (pickedBuilding) {
          const lat = pickedBuilding.getProperty('cesium#latitude')
          const lng = pickedBuilding.getProperty('cesium#longitude')
          this.change(lng, lat)
        }
      }, this.Cesium.ScreenSpaceEventType.LEFT_CLICK)
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
