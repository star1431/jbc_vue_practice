<template>
  <div class="section">
    <h3><span>Vue 기능</span></h3>
    <div class="info_wrap">
      <h4><i class="fa-brands fa-vuejs"></i>Vue 템플릿 문법</h4>
      <div class="info_box">
        <p class="info_tit">템플릿 문법</p>
        <div class="info">
          <p>
            Vue는 다른 프론트엔드 프레임워크보다 html 문서에 친화적이다. <br>
            다른 프레임워크인 React는 스크립트 내에서 class 선언하여 html 태그 작업을 하지만 Vue에서는 &lt;template&gt; 내에서 html 작업이 가능하다.
          </p>
          <CodeEditor
            :value=codeEditorList[0]
            :languages="[['js', 'React']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
          <CodeEditor
            :value=codeEditorList[1]
            :languages="[['html', 'Vue']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
          <p>이렇게 vue환경에서는 html태그를 직접 tamplate 내 작업이 가능하여, 마크업하는데 편리한 장점을 가지고 있다.</p>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">텍스트 보간법</p>
        <div class="info">
          <p>
            Vue의 텍스트 보간법은 Mustache 문법( &#123;&#123; 	&nbsp;&nbsp;  &#125;&#125; )을 사용하여  Vue 인스턴스의 데이터를 화면에 출력하는 방법이다.  <br>
            vue에서 일반적으로 사용되는 데이터 출력 방법 중 하나이며, 데이터 값이 변경되면 자동으로 실시간 업데이트가 된다.<br>
            그리고 이중괄호안에 삼항연산자 등 스크립트 문법도 사용 가능하여, 다양한 방법으로 데이터 표시가 가능하다.<br>
            사용방법은 간단하게 html 태그 내 &#123;&#123; 데이터값 &#125;&#125; 으로 코드작성하면 된다.
          </p>
          <div class="sample-box flex_center space_medium">
            <p class="sample-tit">sample</p>
            <p>현재번호 : {{ sampleNumber }}</p>
            <button class="btn" @click="sampleNumber ++">클릭시 증가</button>
            <button class="btn" @click="sampleNumber --">클릭시 감소</button>
          </div>
          <CodeEditor
            :value=codeEditorList[2]
            :languages="[['html', 'Vue']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">속성 바인딩</p>
        <div class="info">
          <p>
            html에선 속성(attribute)이 여러가지 존재한다.<br>
            id부터 시작해서 class, style, type, href 등등 이런 다양한 속성을 대부분 사용하여 마크업을 한다.<br>
            Vue의 속성 바인딩은 v-bind 디렉티브(:)를 사용하여 Vue 인스턴스의 데이터를 HTML 속성에 동적으로 바인딩하는 방법이다.<br>
            v-bind:id="test" 혹은 :id="test" 이런 방식으로 작성하여 해당 태그에 대한 속성 컨트롤이 가능해진다.
          </p>
          <CodeEditor
            :value=codeEditorList[3]
            :languages="[['html', 'Vue']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">템플릿 참조(ref)</p>
        <div class="info">
          <p>
            html에서 특정이벤트가 필요한 경우 DOM 참조할때 js에서 querySelector 나 getElementBy 형식으로 참조한다.<br>
            vue에서는 refs를 사용해서 해당 태그에 직접 참조가 가능하다.
          </p>
          <div class="sample-box flex_center space_medium">
            <p class="sample-tit" ref="sampleTarget">sample</p>
            <p ref="sampleTarget">안녕하세요</p>
            <button class="btn" @click="sampleClick()">클릭시 문구변경</button>
          </div>
          <CodeEditor
            :value=codeEditorList[4]
            :languages="[['html', 'Vue']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">참고 사이트</p>
        <div class="info">
          <div class="link_wrap">
            <a href="https://v3-docs.vuejs-korea.org/guide/essentials/template-syntax.html" target="_blank">Vue 공식문서 - 템플릿 문법</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CodeEditor from 'simple-code-editor';
const codeEditorList = [
`/** 리액트인 경우 (app.js) */
import React, { Component } from 'react';
import './App.css';
class Content extends Component {
  render() {
    return (
      <div className="main">
        <h1>Hello, World!</h1>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Content></Content>
      </div>
    );
  }
}
export default App;`
,
`<!-- Vue인 경우 -->

<!-- (Content.vue) -->
<template>
  <h1>Hello, World!</h1>
</template>
<script>
export default {
  name: 'Content',
}
<${'/'}script>
<!--// (Content.vue) -->


<!-- (app.vue) -->
<template>
  <div id="app">
    <content></content>
  </div>
</template>
<script>
import Content from './Content.vue'
export default {
  name: 'Content',
  components: {
    Content,
  }
}
<${'/'}script>
<!--// (app.vue) -->`
,
`<template>
  <p>현재번호 : {{ sampleNumber }}</p>
  <button class="btn" @click="sampleNumber ++">클릭시 증가</button>
  <button class="btn" @click="sampleNumber --">클릭시 감소</button>
</template>
<script>
export default {
  name: 'sampleNumber',
  data(){
    return{
      sampleNumber : 1
    }
  },
}
<${'/'}script>`
,
`<template>
  <input :type="controlObj.type" :class="controlObj.class" :title="controlObj.title" :placeholder="controlObj.placeholder">
</template>
<script>
export default {
  name: 'attribute-bind',
  data(){
    return{
      controlObj: {
        type : 'text',
        class : 'input-text',
        title : 'input텍스트',
        placeholder : '아이디를 입력하세요'
      }
    }
  },
}
<${'/'}script>

결과 :  <input type="text" class="input-text" title="input텍스트" placeholder="아이디를 입력하세요">`
,
`<template>
  <p ref="sampleTarget">안녕하세요</p>
  <button class="btn" @click="sampleClick()">클릭시 문구변경</button>
</template>
<script>
export default {
  name: 'sampleBtn',
  mounted(){
  },
  methods: {
    sampleClick() {
      const _target = this.$refs.sampleTarget
      if(_target.innerText === '안녕하세요') {
        _target.innerText = 'Hello'
      } else {
        _target.innerText = '안녕하세요'
      }
    }
  }
}
<${'/'}script>`
,

]
export default {

  name: 'data-binding',
  props: {
  },
  components: {
    CodeEditor
  },
  data(){
    return{
      codeEditorList,
      sampleNumber : 1
    }
  },
  mounted(){
  },
  methods: {
    sampleClick() {
      const _target = this.$refs.sampleTarget
      if(_target.innerText === '안녕하세요') {
        _target.innerText = 'Hello'
      } else {
        _target.innerText = '안녕하세요'
      }
    }
  }
}
</script>
