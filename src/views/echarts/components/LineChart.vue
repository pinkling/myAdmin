<template>
  <section :id="id" class="line-chart">
  </section>
</template>
<script>
import echarts from 'echarts'
import util from '@/libs/util'
export default {
  name: 'LineChart',
  props: {
    data: {
      type: Object,
      default: () => {
        return { name: ['a', 'b', 'c', 'd'], xdata: ['周一', '周二', '周三', '周四'], value: [[32, 33, 54, 25], [52, 38, 34, 75], [42, 63, 14, 75], [72, 53, 24, 45]] }
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
        this.init(this.data)
      },
      deep: true
    }
  },
  mounted() {
    this.init(this.data)
    this.addChartClick()
    this.addResize()
  },
  beforeDestroy() {
    echarts.dispose(this.chart)
    this.chart = null
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    init(data) {
      const option = {
        grid: {
          left: '3%',
          top: '3%',
          bottom: '3%',
          right: '3%',
          containLabel: true
        },
        tooltip: {
          show: 'true',
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          textStyle: {
            fontSize: util.fontSize(0.22)
          }
        },
        xAxis: {
          data: data.name,
          boundaryGap: false,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#0199E0',
              width: 1 // 这里是为了突出显示加上的
            }
          },
          axisLabel: {
            textStyle: {
              color: '#ff253e',
              fontSize: util.fontSize(0.2)
            },
            interval: 0
            // rotate: 15
          }
        },
        yAxis: [{
          axisTick: {
            show: true
          },
          axisLine: {
            lineStyle: {
              color: '#0199E0',
              width: 1 // 这里是为了突出显示加上的
            }
          },
          axisLabel: {
            textStyle: {
              color: '#ff253e',
              fontSize: util.fontSize(0.2),
              fontFamily: 'DIN Condensed'
            }
          },
          splitArea: {
            areaStyle: {
              color: 'rgba(255,255,255,.5)'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 129, 109, 0.1)',
              width: 1,
              type: 'dashed'
            }
          }
        }],
        series: []
      }
      for (let i = 0; i < this.data.name.length; i++) {
        option.series.push({
          name: this.data.name[i],
          type: 'line',
          stack: '数量',
          data: this.data.value[i],
          animationDuration: function(idx) {
            // 越往后的数据时长越大 初始动画的时长
            return (i + 1) * 500
          },
          animationDelay: function(idx) {
            // 越往后的数据延迟越大 初始动画的延迟
            return (i + 1) * 300
          },
          animationDurationUpdate: function(idx) {
            // 越往后的数据时长越大 数据更新动画的时长
            return (i + 1) * 500
          }
        })
      }
      if (this.chart === null) {
        this.chart = echarts.init(document.getElementById(this.id))
      }
      this.chart.setOption(option)
    },
    // 点击效果
    addChartClick() {
      this.chart.on('click', (params) => {
        this.$emit('click', params)
      })
    },
    // 添加窗口自适应
    addResize() {
      window.addEventListener('resize', this.resize)
    },
    resize() {
      this.chart.resize()
    }
  }
}
</script>
<style scoped>
  .line-chart {
    width: 100%;
    height: 100%;
  }
</style>
