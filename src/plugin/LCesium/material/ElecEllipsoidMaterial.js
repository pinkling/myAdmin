import * as Cesium from 'cesium/Cesium'

class ElecEllipsoidMaterial {
  constructor(option = {}) {
    this._definitionChanged = new Cesium.Event()
    this._time = (new Date()).getTime()

    this.color = option.color ? option.color : Cesium.Color.fromCssColorString('rgba(255,0,0, 0.7)')
    this._color = undefined
    this._colorSubscription = undefined

    this.speed = option.speed ? option.speed : 1
    this._speed = undefined
    this._speedSubscription = undefined
    // 类型（会自动加载到cesium中）
    this.type = option.type ? option.type : 'ElecEllipsoidMaterial'
    // vec4 colors = vec4(0.2, 0.7, 0.2, 1.0);
    // 着色器
    this.source = option.source ? option.source : `
uniform vec4 color;
uniform float speed;

#define pi 3.1415926535
#define PI2RAD 0.01745329252
#define TWO_PI (2. * PI)

float rands(float p){
  return fract(sin(p) * 10000.0);
}

float noise(vec2 p){
  float time = fract( czm_frameNumber * speed / 1000.0);
  float t = time / 20000.0;
  if(t > 1.0) t -= floor(t);
  return rands(p.x * 14. + p.y * sin(t) * 0.5);
}

vec2 sw(vec2 p){
  return vec2(floor(p.x), floor(p.y));
}

vec2 se(vec2 p){
  return vec2(ceil(p.x), floor(p.y));
}

vec2 nw(vec2 p){
  return vec2(floor(p.x), ceil(p.y));
}

vec2 ne(vec2 p){
  return vec2(ceil(p.x), ceil(p.y));
}

float smoothNoise(vec2 p){
  vec2 inter = smoothstep(0.0, 1.0, fract(p));
  float s = mix(noise(sw(p)), noise(se(p)), inter.x);
  float n = mix(noise(nw(p)), noise(ne(p)), inter.x);
  return mix(s, n, inter.y);
}

float fbm(vec2 p){
  float z = 2.0;
  float rz = 0.0;
  vec2 bp = p;
  for(float i = 1.0; i < 6.0; i++){
    rz += abs((smoothNoise(p) - 0.5)* 2.0) / z;
    z *= 2.0;
    p *= 2.0;
  }
  return rz;
}

czm_material czm_getMaterial(czm_materialInput materialInput)
{
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st;
  vec2 st2 = materialInput.st;
  float time = fract( czm_frameNumber * speed / 1000.0);
  if (st.t < 0.5) {
    discard;
  }
  st *= 4.;
  float rz = fbm(st);
  st /= exp(mod( time * 2.0, pi));
  rz *= pow(15., 0.9);
  vec4 temp = vec4(0);
  temp = mix( color / rz, vec4(color.rgb, 0.1), 0.2);
  if (st2.s < 0.05) {
    temp = mix(vec4(color.rgb, 0.1), temp, st2.s / 0.05);
  }
  if (st2.s > 0.95){
    temp = mix(temp, vec4(color.rgb, 0.1), (st2.s - 0.95) / 0.05);
  }
  material.diffuse = temp.rgb;
  material.alpha = temp.a * 2.0;
  return material;
}
`

    this.addMaterial()
  }

  getType() {
    return 'ElecEllipsoidMaterial'
  }
  getValue(time, result) {
    if (!Cesium.defined(result)) { result = {} }

    result.color = Cesium.Property.getValueOrClonedDefault(this._color, time, result.color, Cesium.Color.WHITE)
    result.speed = this.speed
    result.time = (((new Date()).getTime() - this._time) % this.duration) / this.duration

    return result
  }
  equals(other) {
    return this === other || (
      other instanceof ElecEllipsoidMaterial &&
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

    // 注意Cesium.defineProperties会报错，需要改为Object
    Object.defineProperties(ElecEllipsoidMaterial.prototype, {
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
export { ElecEllipsoidMaterial }
