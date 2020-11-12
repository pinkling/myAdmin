<template>
  <div id="cesiumContainer"></div>
</template>

<script>
let viewer = null
let osmBuildingsTileset = null
// import TrailMaterial from '../../../plugin/cesium/TrailMaterial' // eslint-disable-line
import { default as PolylineTrailMaterial } from '../../../plugin/cesium/PolylineTrailMaterial'
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
    this.baseColor()
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
    addModel() {
      osmBuildingsTileset = this.Cesium.createOsmBuildings()
      viewer.scene.primitives.add(osmBuildingsTileset)
    },
    baseColor() {
      osmBuildingsTileset.style = new this.Cesium.Cesium3DTileStyle({
        defines: {
          material: '${feature[\'building:material\']}'
        },
        color: {
          conditions: [
            ['${material} === null', 'color(\'white\', 0.7)'],
            ['${material} === \'glass\'', 'color(\'skyblue\', 0.7)'],
            ['${material} === \'concrete\'', 'color(\'yellow\', 0.7)'],
            ['${material} === \'brick\'', 'color(\'indianred\', 0.7)'],
            ['${material} === \'stone\'', 'color(\'red\', 0.7)'],
            ['${material} === \'metal\'', 'color(\'blue\')'],
            ['${material} === \'steel\'', 'color(\'lightsteelblue\')'],
            ['true', 'color(\'#6495ED\', 0.7)'] // This is the else case
          ]
        }
      })
    },
    addLine() {
      const positions = this.Cesium.Cartesian3.fromDegreesArrayHeights([
        -122.3612, 47.658, 0.0,
        -122.3722, 47.668, 0.0,
        -122.3832, 47.670, 0.0,
        -122.3942, 47.677, 0.0,
        -122.3992, 47.685, 0.0
      ])
      viewer.entities.add({
        name: '动态线',
        polyline: {
          width: 5,
          positions: positions,
          // material: new this.Cesium.PolylineTrailMaterialProperty({ // 尾迹线材质
          material: new PolylineTrailMaterial({ // 尾迹线材质
            color: this.Cesium.Color.fromCssColorString('rgba(90,90,255, 1)'),
            duration: 6800,
            trailLength: 1
          })
        }
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
