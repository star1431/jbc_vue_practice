<template>
  <div class="section">
    <h3><span>사이트 리뷰</span></h3>
    <div class="info_wrap">
      <h4><i class="fa-brands fa-vuejs"></i>사이트 구조</h4>
      <div class="info_box">
        <p class="info_tit">디렉토리 상태</p>
        <div class="info">
          <p>설명</p>
        <div class="img_box"><img src="@/assets/img/tree.png" alt="디렉토리"></div>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">설명</p>
        <div class="info">
          <p>설명</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CodeEditor from 'simple-code-editor';

export default {

  name: 'tree-App',
  props: {
  },
  components: {
    // CodeEditor
  },
  data(){
    return{
    }
  },
}
</script>

<style scoped>
.img_box{background: transparent;border:1px solid #ddd;}
</style>