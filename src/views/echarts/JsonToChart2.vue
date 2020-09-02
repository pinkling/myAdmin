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
      chart: null,
      option: null
    }
  },
  watch: {
    text: {
      handler(value) {
        this.jsonValue = value
        this.option = eval('(false || ' + this.jsonValue + ')')// eslint-disable-line
      }
    },
    jsonValue: {
      handler(value) {
        if (this.chart) {
          this.chart.clear()
        }
        this.initChart()
      }
    }
  },
  mounted() {
    console.log('example', '{\n' +
      '    xAxis: {\n' +
      '        type: \'category\',\n' +
      '        boundaryGap: false,\n' +
      '        data: [\'Mon\', \'Tue\', \'Wed\', \'Thu\', \'Fri\', \'Sat\', \'Sun\'],\n' +
      '        axisLabel: {\n' +
      '            formatter: function (a) {\n' +
      '                return \'1\'\n' +
      '            },\n' +
      '            textStyle: {\n' +
      '                fontSize: \'50%\'\n' +
      '            }\n' +
      '        }\n' +
      '    },\n' +
      '    yAxis: {\n' +
      '        type: \'value\'\n' +
      '    },\n' +
      '    series: [{\n' +
      '        data: [820, 932, 901, 934, 1290, 1330, 1320],\n' +
      '        type: \'line\',\n' +
      '        areaStyle: {}\n' +
      '    }]\n' +
      '}')
  },
  methods: {
    initChart() {
      if (this.chart === null) {
        this.chart = echarts.init(document.getElementById('jsonChart'))
        this.chart.on('click', (params) => {
          this.$emit('click', params)
        })
        window.addEventListener('resize', () => {
          this.chart.resize()
        })
      }
      this.chart.setOption(this.option)
    },
    fontSize(res) {
      const docEl = document.documentElement
      const clientWidth = window.innerWidth || docEl.clientWidth || document.body.clientWidth
      if (!clientWidth) return
      const fontSize = 100 * (clientWidth / 1920)
      return res * fontSize
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
