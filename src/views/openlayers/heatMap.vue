<template>
  <section id="map" class="map">
  </section>
</template>

<script>
import { default as LMap } from './LMap/LMap'
import { Point } from 'ol/geom'
import { Feature } from 'ol'
import VectorSource from 'ol/source/Vector'
import { Heatmap as HeatmapLayer } from 'ol/layer'

export default {
  name: 'Index',
  data() {
    return {
      LMap: null,
      heatMapLayer: null
    }
  },
  mounted() {
    this.LMap = new LMap({ center: [118.281041, 33.962096] })
    setTimeout(() => {
      const data = [
        {
          total: 69,
          lng: '118.281041',
          lat: '33.962096'
        }, {
          total: 69,
          lng: '118.294699',
          lat: '33.959553'
        }, {
          total: 67,
          lng: '118.274658',
          lat: '33.934377'
        }, {
          total: 58,
          lng: '118.276189',
          lat: '33.92138'
        }
      ]
      this.LMap.initMap('map')
      // this.map.addHeatMap(data, { blur: 8, radius: 10, weightCallBack: (e) => {
      //   return Number(e.get('data')['total']) / 70
      // } })
      this.addHeatMap(data)
    }, 1000)
  },
  methods: {
    addHeatMap(data) {
      // 热力图
      const option = {
        blur: 15,
        radius: 10,
        weightCallBack: (e) => { return Number(e.get('data')['total']) } // 70
      }

      const createFeature = (e) => {
        return new Feature({
          geometry: new Point(e.lnglat || [e.lng, e.lat] || e.position),
          data: e
        })
      }

      const features = []

      for (const i in data) {
        features.push(createFeature(data[i]))
      }
      const source = new VectorSource({})
      source.addFeatures(features)

      this.heatMapLayer = new HeatmapLayer({
        source: source,
        blur: option.blur || 5,
        radius: option.radius || 10,
        weight: (e) => {
          if (option.weightCallBack) {
            return option.weightCallBack(e)
          }
        }
      })

      this.LMap.map.addLayer(this.heatMapLayer)
    }
  }
}
</script>

<style scoped lang="scss">
  .map {
    width: 100%;
    height: calc(100vh - 84px);
    background: #1f2d3d;
  }
</style>
