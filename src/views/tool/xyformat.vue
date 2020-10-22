<template>
  <section>
    坐标转换
  </section>
</template>

<script>
export default {
  name: 'Xyformat',
  methods: {
    test() {
      const obj = {}
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
