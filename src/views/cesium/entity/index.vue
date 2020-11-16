<template>
  <section>
    <div id="cesiumContainer"></div>
    <section class="btn-box">
      <el-button @click="fly">复位</el-button>
      <el-button @click="addPoint">加点</el-button>
      <el-button @click="addBox">正方体</el-button>
      <el-button @click="addImage">图片</el-button>
      <el-button @click="addDefaultImage">默认图片</el-button>
      <el-button @click="addEllipse">旋转圆</el-button>
    </section>
  </section>
</template>

<script>
let viewer = null
const entity = {}
const lng = -75.156493
const lat = 39.9060534
export default {
  name: 'Index',
  data() {
    return {
    }
  },
  mounted() {
    this.init()
    this.addPoint()
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
    },
    // 添加点
    addPoint() {
      if (entity.point) {
        viewer.entities.remove(entity.point)
        delete entity.point
      } else {
        entity.point = viewer.entities.add({
          id: 'Citizens Bank Park',
          name: 'Citizens Bank Park',
          position: this.Cesium.Cartesian3.fromDegrees(lng, lat),
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
          data: { a: 1 }, // 额外数据
          click: true
        })
      }
    },
    // 添加正方体
    addBox() {
      if (entity.box) {
        viewer.entities.remove(entity.box)
        delete entity.box
      } else {
        entity.box = viewer.entities.add({
          name: 'this is my box',
          position: this.Cesium.Cartesian3.fromDegrees(lng + 0.03, lat + 0.03, 500.0), // 距离底部的高度 需要正方形的一半，在其中心点，不然会有视差偏移
          box: {
            dimensions: new this.Cesium.Cartesian3(1000.0, 1000.0, 1000.0), // 规模大小
            // material: this.getColorRamp([0.0, 0.045, 0.1, 0.15, 0.37, 0.54, 1.0], true)
            material: this.getColorRamp2(),
            outline: true,
            outlineColor: this.Cesium.Color.BLACK
          },
          data: { a: 1 }, // 额外数据
          click: true
        })
      }
    },
    // 添加图片
    addImage() {
      if (entity.image) {
        viewer.entities.remove(entity.image)
        delete entity.image
      } else {
        entity.image = viewer.entities.add({
          name: '一个图片',
          description: '这是图片',
          position: this.Cesium.Cartesian3.fromDegrees(lng - 0.02, lat, 35),
          billboard: {
            image: require('../../../../public/image/立案.png'), // 两种加载方式
            // image: '/image/立案.png',
            width: 49,
            height: 70,
            sizeInMeters: true // 随着缩放而缩放
          },
          data: { a: 1 }, // 额外数据
          click: true
        })
      }
    },
    // 加载默认标记点
    addDefaultImage() {
      if (entity.defaultImage) {
        viewer.entities.remove(entity.defaultImage)
        delete entity.defaultImage
      } else {
        entity.defaultImage = viewer.entities.add({
          name: '默认标记',
          position: this.Cesium.Cartesian3.fromDegrees(lng, lat, 5),
          billboard: {
            image: new this.Cesium.PinBuilder().fromText('默认', this.Cesium.Color.GREEN, 48).toDataURL(),
            verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM
            // sizeInMeters: true // 随着缩放而缩放
          },
          data: { a: 1 }, // 额外数据
          click: true
        })
      }
    },
    // 加载椭圆
    addEllipse() {
      if (entity.ellipse) {
        viewer.entities.remove(entity.ellipse)
        delete entity.ellipse
      } else {
        let rotation = this.Cesium.Math.toRadians(30)
        const getRotationValue = () => {
          rotation += 0.005
          return rotation
        }
        entity.ellipse = viewer.entities.add({
          position: this.Cesium.Cartesian3.fromDegrees(lng, lat),
          name: 'Blue translucent, rotated, and extruded ellipse with outline',
          ellipse: {
            semiMinorAxis: 500.0, // 半短轴
            semiMajorAxis: 500.0, // 半长轴
            height: 60.0, // 距离地球球面高度
            material: new this.Cesium.ImageMaterialProperty({
              image: '/image/roateCir.png',
              transparent: true// 别忘了把允许透明打开
            }),
            rotation: new this.Cesium.CallbackProperty(getRotationValue, false),
            stRotation: new this.Cesium.CallbackProperty(getRotationValue, false),
            outline: 5// windows 下 不能为1 可以置为false
          },
          data: { a: 1 }, // 额外数据
          click: true
        })
      }
    },
    getColorRamp(elevationRamp) {
      const ramp = document.createElement('canvas')
      ramp.width = 1
      ramp.height = 100
      const ctx = ramp.getContext('2d')

      const values = elevationRamp
      const grd = ctx.createLinearGradient(0, 0, 0, 100)
      grd.addColorStop(values[0], '#000000') // black
      grd.addColorStop(values[1], '#2747E0') // blue
      grd.addColorStop(values[2], '#D33B7D') // pink
      grd.addColorStop(values[3], '#D33038') // red
      grd.addColorStop(values[4], '#FF9742') // orange
      grd.addColorStop(values[5], '#ffd700') // yellow
      grd.addColorStop(values[6], '#ffffff') // white

      ctx.fillStyle = grd
      ctx.fillRect(0, 0, 1, 100)
      return ramp
    },
    // 随机获取
    getColorRamp2() {
      const ramp = document.createElement('canvas')
      ramp.width = 1
      ramp.height = 100
      const ctx = ramp.getContext('2d')

      const values = [0]
      for (let i = 0; i < 6; i++) { values.push((i * 0.166) + Math.random() * 0.166) }
      values.push(1)
      const grd = ctx.createLinearGradient(0, 0, 0, 100)
      grd.addColorStop(values[0], '#000000') // black
      grd.addColorStop(values[1], '#2747E0') // blue
      grd.addColorStop(values[2], '#D33B7D') // pink
      grd.addColorStop(values[3], '#D33038') // red
      grd.addColorStop(values[4], '#FF9742') // orange
      grd.addColorStop(values[5], '#ffd700') // yellow
      grd.addColorStop(values[6], '#ffffff') // white

      ctx.fillStyle = grd
      ctx.fillRect(0, 0, 1, 100)
      return ramp
    },
    // 添加点击事件
    addClick() {
      const handler = new this.Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)

      handler.setInputAction((movement) => {
        const pick = viewer.scene.pick(movement.position)
        if (this.Cesium.defined(pick) && (pick.id.click === true)) {
          alert(JSON.stringify(movement))
          console.log('Pick>>', pick)
        }
      }, this.Cesium.ScreenSpaceEventType.LEFT_CLICK)
    },
    // 去掉entity的点击事件
    removeClick() {
      viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(this.Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
      viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(this.Cesium.ScreenSpaceEventType.LEFT_CLICK)
    },
    // 飞行到点位附近
    fly() {
      viewer.camera.flyTo({
        destination: this.Cesium.Cartesian3.fromDegrees(lng, lat, 4000.0)
        // complete: this.completeFunction
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
  .btn-box {
    position: absolute;
    left: 20px;
    top: 20px;
    width: auto;
    height: auto;
  }
</style>
