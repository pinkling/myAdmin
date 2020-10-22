<template>
  <div id="cesiumContainer"></div>
</template>

<script>
let viewer = null
let osmBuildingsTileset = null
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
    addWall() {
      let alp = 1
      let num = 0
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
          material: new this.Cesium.ImageMaterialProperty({
            image: 'https://img-blog.csdnimg.cn/2020042213353024.png',
            // image: require('../../../assets/logo.png'),
            transparent: true,
            color: new this.Cesium.CallbackProperty(() => {
              if ((num % 2) === 0) { alp -= 0.005 } else { alp += 0.005 }

              if (alp <= 0.3) { num++ } else if (alp >= 1) { num++ }
                return new this.Cesium.Color.WHITE.withAlpha(alp) // eslint-disable-line
              // entity的颜色透明 并不影响材质，并且 entity也会透明
            }, false)
          })
          // material: this.getColorRamp([0.0, 0.045, 0.1, 0.15, 0.37, 0.54, 1.0], false)
        }
      })
      viewer.zoomTo(wyoming)// 相机到entity的位置
    },
    getColorRamp(elevationRamp, isVertical = true) {
      const ramp = document.createElement('canvas')
      ramp.width = isVertical ? 1 : 100
      ramp.height = isVertical ? 100 : 1
      const ctx = ramp.getContext('2d')

      const values = elevationRamp
      const grd = isVertical ? ctx.createLinearGradient(0, 0, 0, 100) : ctx.createLinearGradient(0, 0, 100, 0)
      grd.addColorStop(values[0], '#000000') // black
      grd.addColorStop(values[1], '#2747E0') // blue
      grd.addColorStop(values[2], '#D33B7D') // pink
      grd.addColorStop(values[3], '#D33038') // red
      grd.addColorStop(values[4], '#FF9742') // orange
      grd.addColorStop(values[5], '#ffd700') // yellow
      grd.addColorStop(values[6], '#ffffff') // white

      ctx.fillStyle = grd
      if (isVertical) {
        ctx.fillRect(0, 0, 1, 100)
      } else {
        ctx.fillRect(0, 0, 100, 1)
      }
      return ramp
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
