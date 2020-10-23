<template>
  <section @click="test">
    坐标转换
  </section>
</template>

<script>
import gcoord from 'gcoord'
export default {
  name: 'Xyformat',
  methods: {
    test() {
      const obj = {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'properties': {
              'adcode': 430102,
              'name': '芙蓉区',
              'center': [
                112.988094,
                28.193106
              ],
              'centroid': [
                113.049343,
                28.198177
              ],
              'childrenNum': 0,
              'level': 'district',
              'acroutes': [
                100000,
                430000,
                430100
              ],
              'parent': {
                'adcode': 430100
              }
            },
            'geometry': {
              'type': 'MultiPolygon',
              'coordinates': [[[]]]
            }
          }
        ]
      }
      const data = require('../../../public/json/芙蓉区.json')
      data.features[0].geometry.coordinates[0][0].forEach(item => {
        obj.features[0].geometry.coordinates[0][0].push(gcoord.transform(
          item,
          gcoord.AMap,
          gcoord.WGS84
        ))
      })
      setTimeout(() => {
        // 需要安装Gcoord https://github.com/hujiulong/gcoord
        this.download('xxx.json', JSON.stringify(obj))
      }, 3000)
    },
    download(filename, content, contentType) {
      if (!contentType) contentType = 'application/octet-stream'
      var a = document.createElement('a')
      var blob = new Blob([content], { 'type': contentType })
      a.href = window.URL.createObjectURL(blob)
      a.download = filename
      a.click()
    }
  }
}
</script>

<style scoped>

</style>
