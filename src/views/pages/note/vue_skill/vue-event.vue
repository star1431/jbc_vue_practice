<template>
  <div class="section">
    <h3><span>Vue 기능</span></h3>
    <div class="info_wrap">
      <h4><i class="fa-brands fa-vuejs"></i>vue 이벤트 핸들링</h4>
      <div class="info_box">
        <p class="info_tit">v-on 디렉티브</p>
        <div class="info">
          <p>
            Vue의 v-on 디렉티브는 이벤트 처리 방식 중 하나로, html 요소에서 발생하는 이벤트 감지, 혹은 발생할때 실행할 메서드를 지정할 수 있다. <br>
            html 태그에서 제공하는 이벤트종류들 전부 v-on으로 사용가능하지만, html 이벤트와 다르게 v-on은 라이플사이클과 함께 작동한다.<br>
            또한 v-on은 데이터와 연동, 이벤트 함수에 인자값 전달, 수식어를 사용한 버블링 방지 등등 다방면 활용이 가능하다. 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import CodeEditor from 'simple-code-editor';

export default {

  name: 'data-binding',
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
