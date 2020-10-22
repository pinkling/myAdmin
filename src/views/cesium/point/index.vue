<template>
  <div id="cesiumContainer"></div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      cesium: null
    }
  },
  mounted() {
    this.init()
    this.addPoint()
    this.addClick()
    this.addModel()
  },
  methods: {
    init() {
      this.cesium = new this.Cesium.Viewer('cesiumContainer', {
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
      this.cesium._cesiumWidget._creditContainer.style.display = 'none'
    },
    addPoint() {
      this.cesium.entities.add({
        id: 'Citizens Bank Park',
        name: 'Citizens Bank Park',
        position: this.Cesium.Cartesian3.fromDegrees(-75.166493, 39.9060534),
        point: {
          pixelSize: 5,
          color: this.Cesium.Color.RED,
          outlineColor: this.Cesium.Color.WHITE,
          outlineWidth: 2
        },
        label: {
          text: 'Citizens Bank Park',
          font: '14pt monospace',
          style: this.Cesium.LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new this.Cesium.Cartesian2(0, -9)
        },
        data: { a: 1 },
        click: true
      })
    },
    addClick() {
      // 点击事件
      const handler = new this.Cesium.ScreenSpaceEventHandler(this.cesium.scene.canvas)

      handler.setInputAction((movement) => {
        const pick = this.cesium.scene.pick(movement.position)
        if (this.Cesium.defined(pick) && (pick.id.click === true)) {
          alert(JSON.stringify(movement))
          console.log('Pick>>', pick)
        }
      }, this.Cesium.ScreenSpaceEventType.LEFT_CLICK)
    },
    removeClick() {
      // 去掉entity的点击事件
      this.cesium.cesiumWidget.screenSpaceEventHandler.removeInputAction(this.Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
      this.cesium.cesiumWidget.screenSpaceEventHandler.removeInputAction(this.Cesium.ScreenSpaceEventType.LEFT_CLICK)
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
