<template>
  <section id="map" style="width: 100%;height: calc(100vh - 84px)">
  </section>
</template>

<script>
import { default as LaMap } from './LaMap/LaMap'
export default {
  name: 'HotMap',
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.init()
    this.addHotMap()
  },
  methods: {
    init() {
      this.map = new LaMap({ mapId: 'map', initCenter: [116.418261, 39.921984] })
      this.map.initMap()
    },
    addHotMap() {
      const data = require('../../assets/json/heatmapData')
      const option = {
        lnglat: null
      }
      this.map.addHeatmapLayer(data, option)
    }
  }
}
</script>

<style scoped>

</style>
