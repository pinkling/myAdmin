import * as Cesium from 'cesium/Cesium'

class WallTrailMaterial {
  constructor(option = {}) {
    this._definitionChanged = new Cesium.Event()
    this._time = (new Date()).getTime()
    this.color = option.color ? option.color : Cesium.Color.fromCssColorString('rgba(90,90,255, 1)')
    this._color = undefined
    this._colorSubscription = undefined
    this.duration = option.duration ? option.duration : 5000
    this._duration = undefined
    this._durationSubscription = undefined
    this.img = this.getColorRamp([`rgba(${this.color.red * 255},${this.color.green * 255},${this.color.blue * 255},0)`, `rgba(${this.color.red * 255},${this.color.green * 255},${this.color.blue * 255},1)`], false)
    this.type = option.type ? option.type : 'WallTrailMaterial'

    this.source = option.source ? option.source : `czm_material czm_getMaterial(czm_materialInput materialInput)\n\
      {\n\
          czm_material material = czm_getDefaultMaterial(materialInput);\n\
          vec2 st = materialInput.st;\n\
          vec4 colorImage = texture2D(image, vec2(fract((st.t - time)), st.t));\n\
          vec4 fragColor;\n\
          fragColor.rgb = (colorImage.rgb+color.rgb) / 1.0;\n\
          fragColor = czm_gammaCorrect(fragColor);\n\
          material.alpha = colorImage.a * color.a;\n\
          material.diffuse = (colorImage.rgb+color.rgb)/2.0;\n\
          material.emission = fragColor.rgb;\n\
          return material;\n\
      }`

    this.addMaterial()
  }

  getType() {
    return 'WallTrailMaterial'
  }
  getValue(time, result) {
    if (!Cesium.defined(result)) { result = {} }

    result.color = Cesium.Property.getValueOrClonedDefault(this._color, time, result.color, Cesium.Color.WHITE)
    result.image = this.img
    result.time = (((new Date()).getTime() - this._time) % this.duration) / this.duration

    return result
  }
  equals(other) {
    return this === other || (
      other instanceof WallTrailMaterial &&
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
    Object.defineProperties(WallTrailMaterial.prototype, {
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
export { WallTrailMaterial }
