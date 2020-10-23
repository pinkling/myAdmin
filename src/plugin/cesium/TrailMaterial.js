/*
  流动纹理线
  color 颜色
  duration 持续时间 毫秒
*/
var Cesium = require('cesium/Cesium')
var TrailMaterial = {
  PolylineTrailMaterialProperty: function(options) {
    // options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);

    this._definitionChanged = new Cesium.Event()

    this._color = undefined

    this._colorSubscription = undefined

    this.color = options.color

    this.duration = options.duration

    this.img = options.img

    this._time = (new Date()).getTime()

    if (this.img) {
      Cesium.Material.PolylineTrailImage = this.img
    }
  }

}

var PolylineTrailMaterialProperty = TrailMaterial.PolylineTrailMaterialProperty

PolylineTrailMaterialProperty.prototype.getType = function(time) {
  return 'PolylineTrail'
}

PolylineTrailMaterialProperty.prototype.getValue = function(time, result) {
  if (!Cesium.defined(result)) {
    result = {}
  }

  result.color = Cesium.Property.getValueOrClonedDefault(this._color, time, Cesium.Color.WHITE, result.color)

  result.image = Cesium.Material.PolylineTrailImage

  result.time = (((new Date()).getTime() - this._time) % this.duration) / this.duration

  return result
}

PolylineTrailMaterialProperty.prototype.equals = function(other) {
  return this === other ||

    (other instanceof PolylineTrailMaterialProperty &&

      Cesium.Property.equals(this._color, other._color))
}

Cesium.PolylineTrailMaterialProperty = PolylineTrailMaterialProperty

Cesium.Material.PolylineTrailType = 'PolylineTrail'

Cesium.Material.PolylineTrailImage = require('../../assets/image/color2.png')

// 注意，网上有很多坑，没有把PolylineTrailImage的重要性介绍的很清楚，需要注意该图片在调试阶段使用渐变色！！！

Cesium.Material.PolylineTrailSource = 'czm_material czm_getMaterial(czm_materialInput materialInput)' +

  '{' +

  'czm_material material = czm_getDefaultMaterial(materialInput);' +

  'vec2 st = materialInput.st;' +

  'vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));' +

  'material.alpha = colorImage.a * color.a;' +

  'material.diffuse = (colorImage.rgb+color.rgb)/2.0;' +

  'return material;' +

  '}'

Cesium.Material._materialCache.addMaterial(Cesium.Material.PolylineTrailType, {
  fabric: {
    type: Cesium.Material.PolylineTrailType,

    uniforms: {
      color: new Cesium.Color(1.0, 0.0, 0.0, 0.5),

      image: Cesium.Material.PolylineTrailImage,

      time: 100

    },

    source: Cesium.Material.PolylineTrailSource

  },

  translucent: function(material) {
    return true
  }

})

// 注意Cesium.defineProperties会报错，需要改为Object

Object.defineProperties(PolylineTrailMaterialProperty.prototype, {
  isConstant: {
    get: function() {
      return false
    }

  },

  definitionChanged: {
    get: function() {
      return this._definitionChanged
    }

  },

  color: Cesium.createPropertyDescriptor('color')

})

export default TrailMaterial
