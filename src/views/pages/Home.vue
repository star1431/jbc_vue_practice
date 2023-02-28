<template>
  <perfect-scrollbar ref="scroll">
    <div class="main_wrap">
      <div class="content home">
        <div class="section tac">
          <img src="@/assets/img/logo.png" alt="">
          <h1 class="main_tit">Vue.js - Self Study</h1>
          <h6>Vue 독학 공부하면서 연습해볼려고 만든 사이트입니다.</h6>
          <div class="link_wrap">
            <a href="https://github.com/star1431/jbc_vue_practice" target="_blank">github code</a>
          </div>
        </div>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  watch: {
    $route() {
      this.$refs.scroll.$el.scrollTop = 0
    }
  },
}
</script>
