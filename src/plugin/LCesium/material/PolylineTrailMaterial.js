import * as Cesium from 'cesium/Cesium'
class PolylineTrailMaterial {
  constructor(option = {}) {
    this._definitionChanged = new Cesium.Event()
    this._time = (new Date()).getTime()

    this.color = option.color ? option.color : Cesium.Color.fromCssColorString('rgba(0,200,255, 1)')
    this._color = undefined
    this._colorSubscription = undefined

    this.duration = option.duration ? option.duration : 5000
    this._duration = undefined
    this._durationSubscription = undefined
    this.img = this.getColorRamp([`rgba(${this.color.red * 255},${this.color.green * 255},${this.color.blue * 255}, ${option.needZero ? '0' : '0.3'})`, `rgba(${this.color.red * 255},${this.color.green * 255},${this.color.blue * 255},1)`], false)
    this.type = option.type ? option.type : 'PolylineTrailMaterial'

    // 着色器
    this.source = option.source ? option.source : 'czm_material czm_getMaterial(czm_materialInput materialInput)' +
      '{' +
      'czm_material material = czm_getDefaultMaterial(materialInput);' +
      'vec2 st = materialInput.st;' +
      'vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));' +
      'material.alpha = colorImage.a * color.a;' +
      'material.diffuse = (colorImage.rgb+color.rgb)/2.0;' +
      'return material;' +
      '}'

    this.addMaterial()
  }

  getType() {
    return 'PolylineTrailMaterial'
  }
  getValue(time, result) {
    if (!Cesium.defined(result)) {
      result = {}
    }

    result.color = Cesium.Property.getValueOrClonedDefault(this._color, time, result.color, Cesium.Color.WHITE)
    result.image = this.img
    result.time = (((new Date()).getTime() - this._time) % this.duration) / this.duration

    return result
  }
  equals(other) {
    return this === other || (
      other instanceof PolylineTrailMaterial &&
      Cesium.Property.equals(this._color, other._color) &&
      Cesium.Property.equals(this._duration, other._duration))
  }
  addMaterial() {
    Cesium.Material._materialCache.addMaterial(this.type, {
      fabric: {
        type: this.type,
        uniforms: {
          color: this.color,
          image: this.img,
          time: this.duration
        },
        source: this.source
      },

      translucent: (material) => {
        return true
      }
    })

    // 注意Cesium.defineProperties会报错，需要改为Object
    Object.defineProperties(PolylineTrailMaterial.prototype, {
      isConstant: {
        get: () => {
          return false
        },
        configurable: true
      },
      definitionChanged: {
        get: () => {
          return this._definitionChanged
        },
        configurable: true
      },
      color: {
        value: Cesium.createPropertyDescriptor('color'),
        configurable: true,
        writable: true
      },
      duration: {
        value: Cesium.createPropertyDescriptor('duration'),
        configurable: true,
        writable: true
      }
    })
  }
  getColorRamp(color, isVertical = true) {
    const ramp = document.createElement('canvas')
    ramp.width = isVertical ? 1 : 100
    ramp.height = isVertical ? 100 : 1
    const ctx = ramp.getContext('2d')

    const grd = isVertical ? ctx.createLinearGradient(0, 0, 0, 100) : ctx.createLinearGradient(0, 0, 100, 0)
    grd.addColorStop(0, color[0])
    grd.addColorStop(1, color[1])

    ctx.fillStyle = grd
    if (isVertical) {
      ctx.fillRect(0, 0, 1, 100)
    } else {
      ctx.fillRect(0, 0, 100, 1)
    }
    return ramp.toDataURL('image/png')
  }
}
export { PolylineTrailMaterial }
