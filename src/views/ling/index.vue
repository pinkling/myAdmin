<template>
  <section class="loadingWrap">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Ling'
}
</script>

<style scoped lang="scss">
.loadingWrap {
  margin: 0;
  padding: 0;
  width: 100%;
  background: #33333320;
  height: calc(100vh - 84px);
}
ul {
  position: absolute;
  left: calc(50% - 160px);
  top: calc(50% - 42px);
  display: flex;
}
ul li {
  width: 40px;
  height: 40px;
  list-style: none;
  background: #ff54a0;
  border-radius: 50%;
  animation: animate 1.6s ease-in-out infinite;
}
  @keyframes animate {
    0%, 40%, 100% {
      transform: scale(0.2);
    }
    20%{
      transform: scale(1);
    }
  }
ul li:nth-child(1) {
  animation-delay: -1.2s;
  background: #ec407a;
  box-shadow: 0 0 50px #ec407a;
}
ul li:nth-child(2) {
  animation-delay: -1s;
  background: #ab47bc;
  box-shadow: 0 0 50px #ab47bc;
}
ul li:nth-child(3) {
  animation-delay: -0.8s;
  background: #7e57c2;
  box-shadow: 0 0 50px #7e57c2;
}
ul li:nth-child(4) {
  animation-delay: -0.6s;
  background: #5c6bc0;
  box-shadow: 0 0 50px #5c6bc0;
}
ul li:nth-child(5) {
  animation-delay: -0.4s;
  background: #42a5f5;
  box-shadow: 0 0 50px #42a5f5;
}
ul li:nth-child(6) {
  animation-delay: -0.2s;
  background: #29b6f6;
  box-shadow: 0 0 50px #29b6f6;
}
</style>
