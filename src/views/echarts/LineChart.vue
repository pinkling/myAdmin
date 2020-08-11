<template>
  <section style="width: 100%;height: calc(100vh - 84px)">
    <line-chart></line-chart>
  </section>
</template>

<script>
import LineChart from './components/LineChart'
export default {
  name: 'Index',
  components: { LineChart }
}
</script>

<style scoped>

</style>
