<template>
  <section :id="id" class="cycle-chart"></section>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'CycleChart',
  props: {
    data: {
      type: [String, Number],
      default: 0
    },
    legend: {
      type: String,
      default: '数量'
    },
    colors: {
      type: Array,
      default: () => {
        return ['#4293F4']
      }
    }
  },
  data() {
    return {
      id: 'LineChart' + Math.random() * 100000000,
      chart: null
    }
  },
  watch: {
    data: {
      handler(value) {
        this.init(this.data, this.legend)
      },
      deep: true
    },
    legend: {
      handler(value) {
        this.init(this.data, this.legend)
      },
      deep: true
    },
    colors: {
      handler(value) {
        this.init(this.data, this.legend)
      },
      deep: true
    }
  },
  mounted() {
    this.init(this.data, this.legend)
    this.addChartClick()
  },
  methods: {
    init(data, legend = '出勤率') {
      const option = {
        backgroundColor: '#09101800',
        series: {
          type: 'pie',
          clockWise: false,
          radius: ['90%', '100%'],
          hoverAnimation: false,
          silent: true,
          center: ['50%', '50%'],
          data: [{
            value: (100 - Number(data)),
            name: 'invisible',
            itemStyle: {
              normal: {
                color: '#0E284C'
              }
            }
          }, {
            value: Number(data),
            label: {
              normal: {
                rich: {
                  a: {
                    color: '#FFFFFFAA',
                    align: 'center',
                    lineHeight: '16',
                    fontSize: '16'
                  },
                  b: {
                    color: '#FFF',
                    align: 'center',
                    lineHeight: '16',
                    fontSize: '16'
                  }
                },
                formatter: function(params) {
                  return '{a|' + legend + '}' + '\n\n{b|' + params.value + '%}'
                },
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '16',
                  fontWeight: 'normal',
                  color: '#fff'
                }
              }
            },
            itemStyle: {
              normal: {
                color: this.colors[0]
              }
            }
          }]
        }
      }
      if (this.chart === null) {
        this.chart = echarts.init(document.getElementById(this.id))
      }

      this.chart.setOption(option)
    },
    addChartClick() {
      this.chart.on('click', (params) => {
        this.$emit('click', params)
      })
    }
  }
}
</script>

<style scoped>
  .cycle-chart {
    width: 100%;
    height: 100%;
  }
</style>
