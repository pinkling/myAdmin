<template>
  <section id="map" class="map">
  </section>
</template>

<script>
import { default as LMap } from './LMap/LMap'

export default {
  name: 'Index',
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.map = new LMap()
    setTimeout(() => {
      this.map.initMap('map')
      const data = []
      for (let i = 0; i < 2000; i++) {
        data[i] = { lng: 112.6 + Math.random(), lat: 27.6 + Math.random() }
      }
      this.map.addCluster(data)
    }, 1000)
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
