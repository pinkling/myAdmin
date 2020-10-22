const Cesium = require('cesium/Cesium')
export default class Roaming {
  /**
   *Creates an instance of Roaming.
   * @param {*} viewer 需要传入
   * @param {*} options.modeluri 模型的uri 需要传入
   * @param {*} options.time 漫游时间  需要传入
   * @param {*} options.start 开始节点 不需要传入
   * @param {*} options.stop  结束节点 不需要传入
   * @param {*} options.Lines  点集合 需要传入
   * @param {*} options.isPathShow 路径是否显示 需要传入
   * @memberof Roaming
   */
  constructor(viewer, options) {
    this.viewer = viewer
    this.entity = undefined
    this.url = options.modeluri
    this.time = options.time
    this.start = undefined
    this.stop = undefined
    this.Lines = options.Lines
    this.isPathShow = options.isPathShow
    this.click = options.click
    this.callback = options.callback
    this.property = this.ComputeRoamingLineProperty(options.Lines, options.time, options.start)
    this.InitRoaming(this.property, this.start, this.stop, this.isPathShow)
  }
  /**
   *
   *
   * @param {*} Lines 点集合
   * @param {*} time 漫游时间
   * @param {*} start 开始时间节点
   * @returns
   * @memberof Roaming
   */
  ComputeRoamingLineProperty(Lines, time) {
    const property = new Cesium.SampledPositionProperty()
    const lineLength = Lines.length
    const tempTime = time - time % lineLength
    const increment = tempTime / lineLength
    const start = Cesium.JulianDate.now()
    this.start = start
    const stop = Cesium.JulianDate.addSeconds(start, tempTime, new Cesium.JulianDate())
    this.stop = stop
    this.viewer.clock.startTime = start.clone()
    this.viewer.clock.stopTime = stop.clone()
    this.viewer.clock.currentTime = start.clone()
    this.viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP // Loop at the end
    this.viewer.clock.multiplier = 10

    for (let i = 0; i < lineLength; i++) {
      const time = Cesium.JulianDate.addSeconds(start, i * increment, new Cesium.JulianDate())
      // const position = Lines[i]
      const position = Cesium.Cartesian3.fromDegrees(Lines[i].lng, Lines[i].lat, Lines[i].height)
      property.addSample(time, position)
    }
    return property
  }
  /**
   *
   *
   * @param {*} position computeRoamingLineProperty计算的属性
   * @param {*} start 开始时间节点
   * @param {*} stop 结束时间节点
   * @param {*} isPathShow path路径是否显示
   * @memberof Roaming
   */
  InitRoaming(position, start, stop, isPathShow) {
    this.entity = this.viewer.entities.add({
      availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
        start: start,
        stop: stop
      })]),
      // 位置
      position: position,
      // 计算朝向
      orientation: new Cesium.VelocityOrientationProperty(position),
      click: true,
      callback: this.callback,
      // 加载模型
      model: {
        // 模型路径
        uri: this.url,
        // 模型最小刻度
        minimumPixelSize: 64,
        maximumSize: 128,
        // 设置模型最大放大大小
        maximumScale: 200,
        // 模型是否可见
        show: true,
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND, // 让模型在地形上紧贴
        // 模型轮廓颜色
        silhouetteColor: Cesium.Color.WHITE,
        // 模型颜色  ，这里可以设置颜色的变化
        // color: color,
        // 仅用于调试，显示魔仙绘制时的线框
        debugWireframe: false,
        // 仅用于调试。显示模型绘制时的边界球。
        debugShowBoundingVolume: false,

        scale: 20,
        runAnimations: true // 是否运行模型中的动画效果
      },
      path: {
        resolution: 1,
        material: new Cesium.PolylineGlowMaterialProperty({
          glowPower: 0.1,
          color: Cesium.Color.YELLOW
        }),
        width: 10,
        show: isPathShow
      }
    })
    this.entity.position.setInterpolationOptions({// 点插值
      interpolationDegree: 5,
      interpolationAlgorithm: Cesium.LagrangePolynomialApproximation
    })
    // 视角锁定
    // this.viewer.trackedEntity = this.entity
  }
  /**
   *漫游的暂停和继续
   *
   * @param {*} state bool类型 false为暂停，ture为继续
   * @memberof Roaming
   */
  PauseOrContinue(state) {
    this.viewer.clock.shouldAnimate = state
  }
  /**
   *改变飞行的速度
   *
   * @param {*} value  整数类型
   * @memberof Roaming
   */
  ChangeRoamingSpeed(value) {
    this.viewer.clock.multiplier = value
  }
  /**
   *
   *取消漫游
   * @memberof Roaming
   */
  EndRoaming() {
    if (this.entity !== undefined) {
      this.viewer.clock.multiplier = 1
      this.viewer.clock.shouldAnimate = true
      this.viewer.entities.remove(this.entity)
    }
  }
}

