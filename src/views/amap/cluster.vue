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
    const data = []
    for (let i = 0; i < 2000; i++) {
      data[i] = { lng: 114.17 + Math.random(), lat: 22.62 + Math.random(), content: '<div style="background-color: hsla(180, 100%, 50%, 0.7); height: 24px; width: 24px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>' }
    }
    console.log('data>', data)
    this.map.addClusterLayer(data, { img: require('../../assets/map/立案.png') })
  },
  methods: {
    init() {
      this.map = new LaMap({ mapId: 'map' })
      this.map.initMap()
    }
  }
}
</script>

<style scoped>

</style>
