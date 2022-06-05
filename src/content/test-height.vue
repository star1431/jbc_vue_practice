<template>
  <div class="section" v-for="test in 5" :key="test">
    <h3><span>height늘리기</span></h3>
      <div class="list_box">
        <ul>
          <li>퍼펙트스크롤 테스트</li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'testHeight-App',
  props: {
  },
}
</script>
<style scoped>
  .section{min-height: 500px;}
</style>