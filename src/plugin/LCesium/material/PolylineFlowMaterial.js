import * as Cesium from 'cesium/Cesium'
class PolylineFlowMaterial {
  constructor(option = {}) {
    this._definitionChanged = new Cesium.Event()
    this._time = (new Date()).getTime()
    this.color = option.color ? option.color : Cesium.Color.fromCssColorString('rgba(0,200,255, 1)')
    this._color = undefined
    this._colorSubscription = undefined
    this.speed = option.speed ? option.speed : 1
    this._speed = undefined
    this._speedSubscription = undefined
    // 类型（会自动加载到cesium中）
    this.type = option.type ? option.type : 'PolylineFlowMaterial'
    // 着色器
    this.source = option.source ? option.source : `uniform vec4 color;
      uniform float speed;
      
      czm_material czm_getMaterial(czm_materialInput materialInput){
          czm_material material = czm_getDefaultMaterial(materialInput);
          vec2 st = materialInput.st;
          float t =fract(czm_frameNumber * speed / 1000.0);
          t *= 1.03;
          float alpha = smoothstep(t- 0.03, t, st.s) * step(-t, -st.s);
          alpha += 0.0;
          material.diffuse = color.rgb;
          material.alpha = alpha;
          return material;
      }
      `
    this.addMaterial()
  }

  getType() {
    return 'PolylineFlowMaterial'
  }

  getValue(time, result) {
    if (!Cesium.defined(result)) {
      result = {}
    }
    result.color = Cesium.Property.getValueOrClonedDefault(this._color, time, result.color, Cesium.Color.WHITE)
    // result.color = Cesium.Property.getValueOrUndefined(this._color, time)
    result.spped = this._speed
    return result
  }

  equals(other) {
    return this === other || (
      other instanceof PolylineFlowMaterial &&
      Cesium.Property.equals(this._color, other._color) &&
      Cesium.Property.equals(this._speed, other._speed))
  }

  addMaterial() {
    Cesium.Material._materialCache.addMaterial(this.type, {
      fabric: {
        type: this.type,
        uniforms: {
          color: this.color,
          speed: this.speed
        },
        source: this.source
      },
      translucent: (material) => {
        return true
      }
    })

    Object.defineProperties(PolylineFlowMaterial.prototype, {
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
      speed: {
        value: Cesium.createPropertyDescriptor('speed'),
        configurable: true,
        writable: true
      }
    })
  }
}
export { PolylineFlowMaterial }
