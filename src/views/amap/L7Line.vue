<template>
  <section id="map" style="width: 100%;height: calc(100vh - 84px);">
  </section>
</template>

<script>
import { default as LaMap } from './LaMap/LaMap'
import { Scene, LineLayer } from '@antv/l7'
import { GaodeMap } from '@antv/l7-maps'
import caseFlayData from '../../assets/json/caseFlayLineData'
export default {
  name: 'Index',
  data() {
    return {
      map: null,
      scene: null,
      baseFlyLine: null,
      flyLine: null
    }
  },
  mounted() {
    this.init()
    this.initscene()
    this.addFlyLine()
    this.addFly()
  },
  methods: {
    init() {
      this.map = new LaMap({ mapId: 'map' })
      this.map.initMap()
    },
    initscene() {
      this.scene = new Scene({
        id: 'map',
        map: new GaodeMap({
          mapInstance: this.map.map
        })
      })
    },
    addFlyLine() {
      this.baseFlyLine = new LineLayer()
        .source(caseFlayData, {
          parser: {
            type: 'json',
            coordinates: 'coord'
          }
        })
        .color('#80A98E')
        .shape('arc')
        .size(2)
        .active(true)
        .animate({
          interval: 0.5,
          duration: 0.5,
          trailLength: 1,
          curveness: 0.7
        })
        .style({
          opacity: 0.6
        })
      this.scene.addLayer(this.baseFlyLine)
    },
    clearFlyLine(data) {
      if (data) {
        this.scene.removeLayer(data)
      }
    },
    addFly() {
      this.flyLine = new LineLayer({
        blend: 'normal'
      })
        .source(caseFlayData, {
          parser: {
            type: 'json',
            coordinates: 'coord'
          }
        })
        .size(6)
        .shape('arc')
        .color('#80A98E')
        .animate({
          interval: 0.5,
          trailLength: 0.5,
          duration: 5
        })
        .style({
          opacity: 1
        })
      this.scene.addLayer(this.flyLine)
    }
  }
}
</script>

<style scoped>

</style>
