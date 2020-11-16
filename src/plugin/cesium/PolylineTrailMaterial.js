import * as Cesium from 'cesium/Cesium'
class PolylineTrailMaterial {
  constructor(option = {}) {
    this._definitionChanged = new Cesium.Event()
    this._color = undefined
    this._colorSubscription = undefined
    this._time = (new Date()).getTime()

    this.color = option.color ? option.color : Cesium.Color.fromCssColorString('rgba(90,90,255, 1)')
    this.duration = option.duration ? option.duration : 5000
    this.img = option.img ? option.img : require('../../assets/image/color2.png')

    // 类型（会自动加载到cesium中）
    this.type = option.type ? option.type : 'PolylineTrail'

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
    return 'PolylineTrail'
  }
  getValue(time, result) {
    if (!Cesium.defined(result)) {
      result = {}
    }

    result.color = Cesium.Property.getValueOrClonedDefault(this._color, time, Cesium.Color.WHITE, result.color)
    result.image = this.img
    result.time = (((new Date()).getTime() - this._time) % this.duration) / this.duration

    return result
  }
  equals(other) {
    return this === other || (other instanceof PolylineTrailMaterial && Cesium.Property.equals(this._color, other._color))
  }
  addMaterial() {
    Cesium.Material._materialCache.addMaterial(this.type, {
      fabric: {
        type: this.type,
        uniforms: {
          color: new Cesium.Color(1.0, 0.0, 0.0, 0.5),
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
      }
    })
  }
}
export default PolylineTrailMaterial
