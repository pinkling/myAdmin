<template>
  <section id="map" style="width: 100%;height: calc(100vh - 84px)">
  </section>
</template>

<script>
import { default as LaMap } from './LaMap/LaMap'
export default {
  name: 'Index',
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.map = new LaMap({ mapId: 'map' })
      this.map.initMap()
      this.map.addCircleMarkers([{ lng: 114.170474, lat: 22.627021 }])
    }
  }
}
</script>

<style scoped>

</style>
