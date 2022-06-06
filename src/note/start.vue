<template>
  <div class="section">
    <h3><span>Vue.js 시작하기</span></h3>
    <div class="list_box text_area">
      <h4><i class="fa-brands fa-vuejs"></i>Vue 설치</h4>
      <div>
        <p class="content_tit">필수 설치</p>
        <div class="content_box">
          <p>Vue 프로젝트 만들기 앞서 node.js와 텍스트에디터 있어야 한다.</p>
          <ul>
            <li>vscode URL : <a href="https://code.visualstudio.com/" target="_blnk">https://code.visualstudio.com/</a></li>
            <li>node.js URL : <a href="https://nodejs.org/en/#download" target="_blnk">https://nodejs.org/en/#download</a></li>
          </ul>
          <p>설치가 끝났다면 vscode 실행하여 <span class="small_key">ctrl + shift + x</span> 키 누르고 Vue Language Features 검색해서 플러그인을 설치한다. </p>
        <div class="img_box"><img src="@/assets/img/vscode.png" alt="플러그인설치"></div>
        </div>
      </div>
      <div>
        <p class="content_tit">프로젝트 만들기</p>
        <div class="content_box">
          <p>임의 폴더 하나 만들어서 vscode에 드래그 하거나 file - folder로 폴더 연 다음</p>
          <p><span class="small_key">ctrl + shift + `</span> 키 누르면 하단에 새 터미널이 열리게 된다.</p>
          <p>거기서 아래와 같이 입력 후 엔터치면 Vue설치가 시작된다.</p>
          <CodeEditor
            value="npm install -g @vue/cli"
            :languages="[['html', 'HTML']]"
            :read_only="true"
            :hide_header="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
          <div class="img_box"><img src="@/assets/img/vue_t.png" alt="플러그인설치"></div>
        </div>
        <div class="content_box">
          <p>설치 다 되고 나서 아래와 같이 'vue create 프로젝트명' 입력하면 vue2,vue3버전 선택하는 항목이 나오는데 vue3로 설치한다.</p>
          <CodeEditor
            value="vue create 프로젝트명 


  Vue CLI v5.0.4
  ? Please pick a preset: (Use arrow keys)
  > Default ([Vue 3] babel, eslint)       
    Default ([Vue 2] babel, eslint)       
    Manually select features"
            :languages="[['html', 'HTML']]"
            :read_only="true"
            :hide_header="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
          <div class="img_box"><img src="@/assets/img/vscode2.png" alt="설치"></div>
          <p>vue3 설치가 완료되면 위와 같이 vue폴더들이 생성되는데 만들어진 vue사이트를 브라우저로 확인하는 방법은</p>    
          <CodeEditor
            value="cd 프로젝트명
npm run serve"
            :languages="[['html', 'HTML']]"
            :read_only="true"
            :hide_header="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
          <p>cd 프로젝트명 입력해서 경로 잡아주고 </p>
          <p>다시 npm run serve 입력하면 빌드되면서 localhost 주소가 나오는데 그 주소로 브라우저 열면 된다.</p>
        </div>
      </div>
      <div>
        <p class="content_tit">프로젝트 결과물</p>
          <div class="img_box"><img src="@/assets/img/site.png" alt="사이트"></div>
      </div>
      <div>
        <p class="content_tit">참고 사이트</p>
        <div class="link_wrap">
          <a href="https://wikidocs.net/17701" target="_blank">Vue란?</a>
          <a href="https://kr.vuejs.org/v2/guide/index.html" target="_blank">Vue 시작하기</a>
          <a href="https://joshua1988.github.io/web-development/vuejs/vuejs-tutorial-for-beginner/" target="_blank">Vue.js 입문서</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeEditor from 'simple-code-editor';

export default {

  name: 'start-App',
  props: {
  },
  components: {
    CodeEditor
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