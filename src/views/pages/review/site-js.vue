<template>
  <div class="section">
    <h3><span>사이트 리뷰</span></h3>
    <div class="info_wrap">
      <h4><i class="fa-brands fa-vuejs"></i>js 설정값</h4>
      <div class="info_box">
        <p class="info_tit">main.js</p>
        <div class="info">
          <CodeEditor
            :value=codeEditorList[0]
            :languages="[['js', 'Js - main.js']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">vue.config.js</p>
        <div class="info">
          <CodeEditor
            :value=codeEditorList[1]
            :languages="[['js', 'Js - vue.config.js']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">UiCommon.js</p>
        <div class="info">
          <CodeEditor
            :value=codeEditorList[2]
            :languages="[['js', 'Js - UiCommon.js']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">linkData.js</p>
        <div class="info">
          <CodeEditor
            :value=codeEditorList[3]
            :languages="[['js', 'Js - linkData.js']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeEditor from 'simple-code-editor';
const codeEditorList = [
`import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import '@/style/style.css'
import CodeEditor from 'simple-code-editor'

const Vue = createApp(App)
Vue.use(CodeEditor)
Vue.use(router)
Vue.use(PerfectScrollbar)
Vue.mount('#app')

export default {
  components: {
    CodeEditor,
    PerfectScrollbar,
  }
}`
,
`const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/jbc_vue_practice/'
  : '/jbc_vue_practice/',
  outputDir: 'docs',
})`
,
`var UIComponent = UIComponent || {}

UIComponent.momenu = {

  init : function(refs) {
    if(!refs) return
    this.clickEvent(refs)
  },
  clickEvent : function(refs) {
    const _this = refs
    const _moNode = _this.childNodes
    const _moBtn = _moNode[0].querySelectorAll('button')
    const _moMenu = _moNode[1]
    const _bgDim = _moNode[2]
    const _accoBtn = _moMenu.querySelectorAll('button') 

    /** 모바일메뉴 show, hide */
    for(let i = 0; i < _moBtn.length; i ++) {
      _moBtn[i].addEventListener('click', (e) => {
        if(e.currentTarget.className === 'menu_open') _this.classList.add('active')
        if(e.currentTarget.className === 'menu_close') _this.classList.remove('active')
      })
    }
    /** dim클릭 */
    _bgDim.addEventListener('click', () => {
      _this.classList.remove('active')
    })

    /** 모바일메뉴 acco, click */ 
    for(let i = 0; i < _accoBtn.length; i ++) {
      _accoBtn[i].addEventListener('click', (e) => {
        const _target = e.currentTarget
        const _listEl = _target.nextSibling
        const _parentLi = _target.closest('ul.depth1 > li')
        const _childUl = _parentLi.querySelector('ul.depth2')

        // on
        _target.classList.toggle('on')
        if(_target.classList.contains('on')) {
          _listEl.style.maxHeight = (_listEl.scrollHeight) + 'px'
          const _testIf = (_listEl === _childUl) ? null : _childUl.style.maxHeight = (_listEl.scrollHeight + _childUl.scrollHeight) + 'px'
          console.log(_testIf, _listEl.scrollHeight )
          return _testIf
        } else {
          _listEl.style.maxHeight = null
          const _testIf = (_listEl === _childUl) ? null : _childUl.style.maxHeight = (_childUl.scrollHeight) + 'px'
          return _testIf
        }
      })
    }
  }
}

export default UIComponent`
,
`const linkData = {
  depthList: [

    //home
    {
      level: 1,
      path: '/',
      name: 'home'
    },

    //note
    {
      level: 1,
      path: '/note',
      name: 'Study-note',
      depth: true,
      children: [
        {
          level: 2,
          path: '/note',
          name: 'Vue 개념과 특징'
        },
        {
          level: 2,
          path: '/note/start',
          name: 'Vue 시작하기'
        },
        {
          level: 2,
          path: '',
          name: 'Vue 기능',
          depth: true,
          children: [
            {
              level: 3,
              path: '/note/vue-basic',
              name: '템플릿 문법'
            },
            {
              level: 3,
              path: '/note/vue-rendering',
              name: 'vue 렌더링'
            },
            {
              level: 3,
              path: '/note/vue-component',
              name: 'vue 컴포넌트'
            },
            {
              level: 3,
              path: '/note/vue-event',
              name: '이벤트 핸들링'
            },
            {
              level: 3,
              path: '/note/vue-router',
              name: '라우터'
            },
          ]
        },
      ]
    },


    //practice
    {
      level: 1,
      path: '/practice',
      name: 'practice',
      depth: true,
      children:[
        {
          level: 2,
          path: '/practice',
          name: 'v-on:Click이벤트'
        },
        {
          level: 2,
          path: '/practice/test',
          name: 'test-height'
        },
      ]
    },

    //site-review
    {
      level: 1,
      path: '/site-review',
      name: 'site-review',
      depth: true,
      children:[
        {
          level: 2,
          path: '/site-review',
          name: '사이트 구조'
        },
        {
          level: 3,
          path: '/site-review/site-router',
          name: '사이트 라우터'
        },
        {
          level: 3,
          path: '/site-review/site-js',
          name: 'js 설정값'
        },
      ]
    },

  ],
}
export default linkData`
,
]
export default {

  name: 'siterouter-App',
  props: {
  },
  components: {
    CodeEditor
  },
  data(){
    return{
      codeEditorList
    }
  },
}
</script>

<style scoped>
.img_box{background: transparent;border:1px solid #ddd;}
</style>