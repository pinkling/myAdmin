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
