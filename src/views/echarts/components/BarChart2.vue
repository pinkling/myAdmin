<template>
  <section :id="id" class="bar-chart2">
  </section>
</template>
<script>
import echarts from 'echarts'
import util from '@/libs/util'
export default {
  name: 'BarChart2',
  props: {
    data: {
      type: Object,
      default: () => {
        return { name: ['a', 'b', 'c', 'd'], value: [22, 33, 44, 55] }
      }
    }
  },
  data() {
    return {
      id: 'BarChart2' + Math.random() * 100000000,
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
    if (!this.chart) {
      return
    }
    this.chart.dispose()
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
        yAxis: {
          data: data.name,
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#ff253e',
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
        xAxis: [{
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
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
        series: [{
          name: '数量',
          type: 'bar',
          barCategoryGap: '0%',
          barWidth: '35%',
          label: {
            show: true,
            position: 'right',
            distance: 0,
            color: '#ff253e',
            fontWeight: 'bolder',
            fontSize: util.fontSize(0.22)
          },
          itemStyle: {
            normal: {
              color: '#4293F4'
            },
            emphasis: {
              opacity: 1
            }
          },
          data: data.value,
          z: 5
        }],
        animationDuration: function(idx) {
          // 越往后的数据时长越大 初始动画的时长
          return idx * 500
        },
        animationDelay: function(idx) {
          // 越往后的数据延迟越大 初始动画的延迟
          return idx * 200
        },
        animationDurationUpdate: function(idx) {
          // 越往后的数据时长越大 数据更新动画的时长
          return idx * 200
        }
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
  .bar-chart2 {
    width: 100%;
    height: 100%;
  }
</style>
