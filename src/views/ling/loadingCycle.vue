<template>
  <section style="position:relative;">
    <canvas id="canvas" style="width:100%;height:calc(100vh - 84px);z-index: 1; opacity: 1;position:absolute;background: #588598; "></canvas>
  </section>
</template>

<script>
import { init, onresize } from '@/plugin/background/draw'
export default {
  name: 'LoadingCycle',
  mounted() {
    this.initBg()
  },
  methods: {
    initBg() {
      init()
      window.addEventListener('resize', onresize)
    }
  }
}
</script>

<style scoped>

</style>
