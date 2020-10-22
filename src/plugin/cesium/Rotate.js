const Cesium = require('cesium/Cesium')

/**
 * 模型水平方向旋转——主要用于大包翻转台
 * 例子正值、负值代表正反方向旋转
 * modelRotate(entity,270,10);modelRotate(entity,-90,5);
 * @param model 模型
 * @param angle 旋转角度
 * @param seconds 多少秒旋转结束
 */
export function modelHeadingRotate(model, angle, seconds) {
  let state = false
  if (angle > 0) {
    state = true
  }
  const modelHPR = Cesium.Transforms.fixedFrameToHeadingPitchRoll(computeModelMatrix(model, Cesium.JulianDate.now()))
  const angle_ = Cesium.Math.toRadians(angle)
  const starthpr = { heading: modelHPR.heading }; const endhpr = { heading: modelHPR.heading + angle_ }
  const center = model.position._value
  const heading_ = Math.abs((endhpr.heading - starthpr.heading) / (seconds * 20))
  let index = 0
  const interval = setInterval(function() {
    const nowhpr = Cesium.Transforms.fixedFrameToHeadingPitchRoll(computeModelMatrix(model, Cesium.JulianDate.now()))
    if (state) {
      if (index > angle_) {
        clearInterval(interval)
      } else {
        index += heading_
        model.orientation = Cesium.Transforms.headingPitchRollQuaternion(center, new Cesium.HeadingPitchRoll(nowhpr.heading += heading_, 0, 0))
      }
    } else {
      if (index > angle_) {
        index -= heading_
        model.orientation = Cesium.Transforms.headingPitchRollQuaternion(center, new Cesium.HeadingPitchRoll(nowhpr.heading -= heading_, 0, 0))
      } else {
        clearInterval(interval)
      }
    }
  }, 50)
}
/**
 * 模型水平方向旋转——主要用于大包翻转台
 * 例子正值、负值代表正反方向旋转
 * modelRotate(entity,270,10);modelRotate(entity,-90,5);
 * @param model 模型
 * @param angle 旋转角度
 * @param seconds 多少秒旋转结束
 */
export function modelRollRotate(model, angle, seconds) {
  let state = false
  if (angle > 0) {
    state = true
  }
  const modelHPR = Cesium.Transforms.fixedFrameToHeadingPitchRoll(computeModelMatrix(model, Cesium.JulianDate.now()))
  const angle_ = Cesium.Math.toRadians(angle)
  const starthpr = { roll: modelHPR.roll }; const endhpr = { roll: modelHPR.roll + angle_ }
  const center = model.position._value
  const roll_ = Math.abs((endhpr.roll - starthpr.roll) / (seconds * 20))
  let index = 0
  const interval = setInterval(function() {
    const nowhpr = Cesium.Transforms.fixedFrameToHeadingPitchRoll(computeModelMatrix(model, Cesium.JulianDate.now()))
    if (state) {
      if (index > angle_) {
        clearInterval(interval)
      } else {
        index += roll_
        model.orientation = Cesium.Transforms.headingPitchRollQuaternion(center, new Cesium.HeadingPitchRoll(0, 0, nowhpr.roll += roll_))
      }
    } else {
      if (index > angle_) {
        index -= roll_
        model.orientation = Cesium.Transforms.headingPitchRollQuaternion(center, new Cesium.HeadingPitchRoll(0, 0, nowhpr.roll -= roll_))
      } else {
        clearInterval(interval)
      }
    }
  }, 50)
}

// 计算entity的4x4矩阵
function computeModelMatrix(entity, time) {
  // 根据指定的时间为实体的转换计算模型矩阵
  return entity.computeModelMatrix(time, new Cesium.Matrix4())
}
