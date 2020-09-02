<template>
  <section class="wrap">
    <section class="content">
      <section class="text-wrap">
        <textarea v-model="text"></textarea>
      </section>
      <section id="jsonChart" class="jsonChart"></section>
    </section>
  </section>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'JsonToChart',
  data() {
    return {
      text: '',
      jsonValue: {},
      chart: null
    }
  },
  watch: {
    text: {
      handler(value) {
        this.jsonValue = JSON.parse(value)
      }
    },
    jsonValue: {
      handler(value) {
        this.initChart()
      }
    }
  },
  mounted() {
    const t = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
          formatter: function(a) {
            return '1'
          }
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      }]
    }
    console.log(JSON.stringify(t))
  },
  methods: {
    initChart() {
      const option = this.jsonValue
      if (this.chart === null) {
        this.chart = echarts.init(document.getElementById('jsonChart'))
      }
      this.chart.setOption(option)
    }
  }
}
</script>

<style scoped lang="scss">
  .wrap {
    width: 100%;
    height: calc(100vh - 84px);
    background: #5a5e66;

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      overflow: hidden auto;

      .text-wrap {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        textarea {
          width: 80%;
          height: 80%;
          border-radius: 10px;
          background: #8c939d;
          color: #F3F3F3;
        }
      }

      .jsonChart {
        width: 50%;
        height: 100%;
      }
    }
  }
</style>
