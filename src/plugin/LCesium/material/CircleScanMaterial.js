import * as Cesium from 'cesium/Cesium'

class CircleScanMaterial {
  constructor(option = {}) {
    this._definitionChanged = new Cesium.Event()
    this._color = undefined
    this._time = (new Date()).getTime()
    this.speed = option.speed ? option.speed : 1
    this.color = option.color ? option.color : Cesium.Color.fromCssColorString('rgba(255,0,0, 0.7)')
    // this.color = option.color ? option.color : new Cesium.Color(1.0, 0.0, 0.0, 0.7)
    this.duration = option.duration ? option.duration : 5000
    // 类型（会自动加载到cesium中）
    this.type = option.type ? option.type : 'CircleScanMaterial'

    // 着色器
    this.source = option.source ? option.source : `
uniform vec4 color;
uniform float speed;

float circle(vec2 uv, float r, float blur) {
  float d = length(uv) * 2.0;
  float c = smoothstep(r+blur, r, d);
  return c;
}

czm_material czm_getMaterial(czm_materialInput materialInput)
{
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st - .5;
  material.diffuse = color.rgb;
  material.emission = vec3(0);
  float t =fract(czm_frameNumber * speed / 1000.0);
  float s = 0.3;
  float radius1 = smoothstep(.0, s, t) * 0.5;
  float alpha1 = circle(st, radius1, 0.01) * circle(st, radius1, -0.01);
  float alpha2 = circle(st, radius1, 0.01 - radius1) * circle(st, radius1, 0.01);
  float radius2 = 0.5 + smoothstep(s, 1.0, t) * 0.5;
  float alpha3 = circle(st, radius1, radius2 + 0.01 - radius1) * circle(st, radius1, -0.01);
  material.alpha = smoothstep(1.0, s, t) * (alpha1 + alpha2*0.1 + alpha3*0.1);
  material.alpha *= color.a;
  return material;
}
`

    this.addMaterial()
  }

  getType() {
    return 'CircleScanMaterial'
  }
  getValue(time, result) {
    if (!Cesium.defined(result)) { result = {} }

    result.color = { red: 1 / 255, green: 0 / 255, blue: 0 / 255, alpha: 0.8 }
    // result.color = { red: this.color.red / 255, green: this.color.green / 255, blue: this.color.blue / 255, alpha: this.color.alpha }
    result.speed = this.speed
    result.time = (((new Date()).getTime() - this._time) % this.duration) / this.duration

    return result
  }
  equals(other) {
    return this === other || (other instanceof CircleScanMaterial && Cesium.Property.equals(this._color, other._color))
  }
  addMaterial() {
    Cesium.Material._materialCache.addMaterial(this.type, {
      fabric: {
        type: this.type,
        uniforms: {
          color: this.color,
          // color: new Cesium.Color(1.0, 0.0, 0.0, 0.7),
          speed: this.speed
        },
        source: this.source
      },
      translucent: (material) => {
        return true
      }
    })

    // 注意Cesium.defineProperties会报错，需要改为Object
    Object.defineProperties(CircleScanMaterial.prototype, {
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
export default CircleScanMaterial
