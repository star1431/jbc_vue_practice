<template>
  <div class="section">
    <h3><span>Vue 기능</span></h3>
    <div class="info_wrap">
      <h4><i class="fa-brands fa-vuejs"></i>vue 렌더링</h4>
      <div class="info_box">
        <p class="info_tit">조건부 렌더링 (v-if)</p>
        <div class="info">
          <p>
            v-if 디렉티브는 Vue 인스턴스의 데이터에 따라 해당 요소를 동적으로 렌더링을 한다. <br>
            v-if가 적용된 요소는 Vue 인스턴스의 데이터가 true인 경우 DOM 노출이 되며, false인 경우 DOM 생성이 되지 않는다. <br>
            따라서 v-if 사용하여 돔 생성 및 제거 반복되는 경우에는 메서드사용 및 템플릿 참조(ref)시 주의해야 한다. (다른방식 : v-show) <br>
            또한 인라인요소를 가진 엘리먼트에는 v-if 디렉티브 적용이 안되어, 해당 인라인요소를 블럭요소로 대체하거나 인라인요소를 감싸는 블럭요소에 사용할 것을 권장한다.  
          </p>
          <div class="sample-box flex_center space_medium">
            <p class="sample-tit" ref="sampleTarget">sample</p>
            <button class="btn" @click="sampleIf01 = !sampleIf01">문구 생성/삭제 토글</button>
            <p v-if="sampleIf01">안녕하세요!</p>
          </div>
          <CodeEditor
            :value=codeEditorList[0]
            :languages="[['html', 'Vue']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">조건부 렌더링 심화 (v-else-if, v-else)</p>
        <div class="info">
          <p>
            Vue에서 v-if 디렉티브와 함께 v-else-if와 v-else 디렉티브를 사용하여 좀 더 구체적인 조건부 렌더링을 구현할 수 있다.<br> 
            v-else-if 디렉티브는 이전 조건이 false일 경우 추가적인 조건을 제시하고, v-else 디렉티브는 이전 조건이 모두 false일 경우에 동작한다.<br> 
            이를 통해 다양한 조건에 따라 요소를 동적으로 렌더링할 수 있다.
          </p>
          <div class="sample-box flex_center space_medium">
            <p class="sample-tit" ref="sampleTarget">sample</p>
            <button class="btn" @click="sampleToggle()"> data 현재값 : {{ sampleIf02 }} </button>
            <p v-if="sampleIf02 ==='one'">('one')조건 참</p>
            <p v-else-if="sampleIf02 ==='two'">('two')조건 참</p>
            <p v-else>1,2조건 거짓 / 클릭시 다시 ('one') 리턴</p>
          </div>
          <CodeEditor
            :value=codeEditorList[1]
            :languages="[['html', 'Vue']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">조건부 렌더링 다른 방식 (v-show)</p>
        <div class="info">
          <p>
            Vue에서 v-if 디렉티브는 DOM 자체를 렌더링하여 생성/삭제를 하기 때문에 처음 조건이 false일때 dom관련 메서드나 dom참조할때 까다롭다.<br>
            그래서 v-if를 사용하기 애매한 경우, 자주 토글되는 경우에선 v-show 사용하는걸 권장한다.<br>
            v-show 디렉티브는 css의 display none 기능과 동일하다고 볼 수 있다. 단순히 dom 자체를 none/block 시키는 요소일 경우 v-show 사용하기 적합하다.<br>
            단, v-else와 같이 사용 불가능함.
          </p>
          <div class="sample-box flex_center space_medium">
            <p class="sample-tit" ref="sampleTarget">sample</p>
            <button class="btn" @click="sampleIf03 = !sampleIf03"> v-show 토글 </button>
            <p v-show="sampleIf03">v-show가 {{sampleIf03}}임!</p>
            <p v-show="!sampleIf03">v-show가 {{sampleIf03}}임!</p>
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
        <p class="info_tit">리스트 렌더링 (v-for)</p>
        <div class="info">
          <p>
            v-for 디렉티브는 반복성을 가진 리스트 형태를 배열이나 객체로 하여금 각 항목을 반복하여 요소를 렌더링 하는 방법이다.<br>
            반복할 엘리먼트에
            <CodeEditor
              :value=codeEditorInline[0]
              :languages="[['html', 'HTML']]"
              :read_only="true"
              :wrap_code="false"
              width="auto"
              font_size="14px"
            ></CodeEditor>
            혹은
            <CodeEditor
              :value=codeEditorInline[1]
              :languages="[['html', 'HTML']]"
              :read_only="true"
              :wrap_code="false"
              width="auto"
              font_size="14px"
            ></CodeEditor>
            로 표현 한다.<br>
            - '변수' 는 각 요소의 값.<br>
            - '인덱스'는 각 요소의 인덱스 값.<br>
            - '데이터'는 반복할 배열이나 객체 혹은 반복할 횟수.<br>

            
          </p>
          <div class="sample-box">
            <p class="sample-tit">sample (1)</p>
            <ul>
              <li v-for="(item, i) in sampleArr" :key="i">
                <span>{{ item.title }} : </span>
                <span>{{ item.content }}</span>
              </li>
            </ul>
            <p class="sample-tit">sample (2)</p>
            <ul>
              <li v-for="number in 3" :key="number">
                <span>숫자 : {{ number }}</span>
              </li>
            </ul>
          </div>
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
        <p class="info_tit">참고 사이트</p>
        <div class="info">
          <div class="link_wrap">
            <a href="https://v3-docs.vuejs-korea.org/guide/essentials/conditional.html" target="_blank">Vue 공식문서 - 조건부 렌더링</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeEditor from 'simple-code-editor'
const codeEditorInline = [
`<div v-for="변수 in 데이터" :key="변수">`,
`<div v-for="(변수, 인덱스) in 데이터" :key="인덱스">`
]
const codeEditorList = [
`<template>
  <button class="btn" @click="sampleIf01 = !sampleIf01">문구 생성/삭제 토글</button>
  <p v-if="sampleIf01">안녕하세요!</p>
</template>

<script>
export default {
  data() {
    return {
      sampleIf01: false
    }
}
<${'/'}script>`
,
`<template>
  <button class="btn" @click="sampleToggle()"> data 현재값 : {{ sampleIf02 }} </button>
  <p v-if="sampleIf02 ==='one'">('one')조건 참</p>
  <p v-else-if="sampleIf02 ==='two'">('two')조건 참</p>
  <p v-else>1,2조건 거짓 / 클릭시 다시 ('one') 리턴</p>
</template>

<script>
export default {
  data() {
    return {
      sampleIf02 : "one"
    }
  },
  methods:{
    sampleToggle() {
      if (this.sampleIf02 === "one") {
        this.sampleIf02 = "two"
      } else if (this.sampleIf02 === "two") {
        this.sampleIf02 = "three"
      } else {
        this.sampleIf02 = "one"
      }
    }
  }
}
<${'/'}script>`
,
`<template>
  <button class="btn" @click="sampleIf03 = !sampleIf03"> v-show 토글 </button>
  <p v-show="sampleIf03">v-show가 {{sampleIf03}}임!</p>
  <p v-show="!sampleIf03">v-show가 {{sampleIf03}}임!</p>
</template>

<script>
export default {
  data() {
    return {
      sampleIf03 : true
    }
  },
}
<${'/'}script>`
,`<template>
  <p class="sample-tit">sample (1)</p>
  <ul>
    <li v-for="(item, i) in sampleArr" :key="i">
      <span>{{ item.title }} : </span>
      <span>{{ item.content }}</span>
    </li>
  </ul>

  <p class="sample-tit">sample (2)</p>
  <ul>
    <li v-for="number in 3" :key="number">
      <span>숫자 : {{ number }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      sampleArr: [
        {title: '타이틀1', content: '내용1'},
        {title: '타이틀2', content: '내용2'}
      ]
    }
  }
}
<${'/'}script>`
,
]
export default {

  name: 'vueRendering-App',
  props: {
  },
  components: {
    CodeEditor
  },
  data(){
    return{
      codeEditorInline,
      codeEditorList,
      sampleIf01 : false,
      sampleIf02 : "one",
      sampleIf03 : true,
      sampleArr: [
        {title: '타이틀1', content: '내용1'},
        {title: '타이틀2', content: '내용2'},
      ],

    }
  },
  methods:{
    sampleToggle() {
      if (this.sampleIf02 === "one") {
        this.sampleIf02 = "two"
      } else if (this.sampleIf02 === "two") {
        this.sampleIf02 = "three"
      } else {
        this.sampleIf02 = "one"
      }
    }
  }
}
</script>
<style>
.info p .code_editor{display:inline-flex;margin:0;vertical-align:text-bottom;border-radius:0 !important;}
.info p .code_editor .header{display:none !important;}
.info p .code_editor > .code_area > pre{line-height:initial;}
.info p .code_editor > .code_area > pre > code{padding:0 !important;}
</style>
