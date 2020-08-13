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
      const option = {
        img: require('../../assets/map/立案.png'),
        size: [49, 70],
        offset: [-24.5, -70],
        callback: this.click
      }
      this.map.addIconMarkers([{ lng: 114.170474, lat: 22.627021 }], option)
    },
    click(e) {
      alert(JSON.stringify(e))
    }
  }
}
</script>

<style scoped>

</style>
