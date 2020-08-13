<template>
  <section :id="id" class="pie-chart">
  </section>
</template>
<script>
import echarts from 'echarts'
import util from '@/libs/util'
export default {
  name: 'PieChart',
  props: {
    data: {
      type: Array,
      default: () => {
        return [
          { name: 'a', value: 22 },
          { name: 'b', value: 33 },
          { name: 'c', value: 44 },
          { name: 'd', value: 55 }
        ]
      }
    }
  },
  data() {
    return {
      id: 'PieChart' + Math.random() * 100000000,
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
        series: [{
          name: '数量',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          data: data,
          z: 5
        }],
        animationDuration: function(idx) {
          // 越往后的数据时长越大 初始动画的时长
          return 2500
        },
        animationDelay: function(idx) {
          // 越往后的数据延迟越大 初始动画的延迟
          return 500
        },
        animationDurationUpdate: function(idx) {
          // 越往后的数据时长越大 数据更新动画的时长
          return 2500
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
      window.addEventListener('resize', () => { this.chart.resize() })
    }
  }
}
</script>
<style scoped>
  .pie-chart {
    width: 100%;
    height: 100%;
  }
</style>
