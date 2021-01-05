import * as Cesium from 'cesium/Cesium'

class WallTrailMaterial {
  constructor(option = {}) {
    this._definitionChanged = new Cesium.Event()
    this._color = undefined
    this._colorSubscription = undefined
    this._time = (new Date()).getTime()

    this.color = option.color ? option.color : Cesium.Color.fromCssColorString('rgba(90,90,255, 1)')
    this.duration = option.duration ? option.duration : 5000
    this.img = this.getColorRamp([`rgba(${this.color.red * 255},${this.color.green * 255},${this.color.blue * 255},0)`, `rgba(${this.color.red * 255},${this.color.green * 255},${this.color.blue * 255},1)`], false)
    // this.img = option.img ? option.img : require('../../assets/image/color2.png')
    // 类型（会自动加载到cesium中）
    this.type = option.type ? option.type : 'WallTrail'

    // 着色器
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
    return 'WallTrail'
  }
  getValue(time, result) {
    if (!Cesium.defined(result)) { result = {} }

    // result.color = { red: 0 / 255, green: 0 / 255, blue: 1 / 255, alpha: 0.8 }
    result.color = { red: this.color.red / 255, green: this.color.green / 255, blue: this.color.blue / 255, alpha: this.color.alpha }
    result.image = this.img
    result.time = (((new Date()).getTime() - this._time) % this.duration) / this.duration

    return result
  }
  equals(other) {
    return this === other || (other instanceof WallTrailMaterial && Cesium.Property.equals(this._color, other._color))
  }
  addMaterial() {
    Cesium.Material._materialCache.addMaterial(this.type, {
      fabric: {
        type: this.type,
        uniforms: {
          color: this.color,
          image: this.img,
          time: 100
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
export default WallTrailMaterial
