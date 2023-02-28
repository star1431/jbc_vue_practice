<template>
  <div class="section">
    <h3><span>사이트 리뷰</span></h3>
    <div class="info_wrap">
      <h4><i class="fa-brands fa-vuejs"></i>라우터</h4>
      <div class="info_box">
        <p class="info_tit">index.js</p>
        <div class="info">
          <CodeEditor
            :value=codeEditorList[0]
            :languages="[['js', 'Js - Router']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">header 라우터 사용</p>
        <div class="info">
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
        <p class="info_tit">lnb 라우터 사용</p>
        <div class="info">
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
    </div>
  </div>
</template>

<script>
import CodeEditor from 'simple-code-editor';
const codeEditorList = [
`import { createRouter, createWebHashHistory } from 'vue-router'

// 라우터값 설정
const routes = [
  //1depth - Home
  {path: '/',name: 'home',component: () => import( '@/views/pages/Home.vue')},

  //1depth - note
  {path: '/note',name: 'Study-note',component: () => import( '@/views/pages/note.vue'),
    //2depth
    children:[
      { path: '', name: 'about',component: () => import( '@/views/pages/note/about.vue') },
      { path: '/note/start',name: 'start',component: () => import( '@/views/pages/note/start.vue') },
      //3depth
      {path:'/note/vue-basic',name: 'vue-basic',component: () => import( '@/views/pages/note/vue_skill/vue-basic.vue')},
      {path:'/note/vue-event',name: 'vue-event',component: () => import( '@/views/pages/note/vue_skill/vue-event.vue')},
      {path:'/note/vue-rendering',name: 'vue-rendering',component: () => import( '@/views/pages/note/vue_skill/vue-rendering.vue')},
      {path:'/note/vue-component',name: 'vue-component',component: () => import( '@/views/pages/note/vue_skill/vue-component.vue')},
      {path:'/note/vue-router',name: 'vue-router',component: () => import( '@/views/pages/note/vue_skill/vue-router.vue')},
    ]
  },

  //1depth - note
  {path: '/practice',name: 'practice',component: () => import( '@/views/pages/practice.vue'),
    //2depth
    children:[
      {path:'',name: 'vonClick',component: () => import( '@/views/pages/practice/vonClick.vue')},
      {path:'/practice/test',name: 'test',component: () => import( '@/views/pages/practice/test-height.vue')},
    ]
  },
  
  //1depth - site-review
  {path: '/site-review',name: 'site-review',component: () => import( '@/views/pages/site-review.vue'),
    //2depth
    children:[
      {path:'',name: 'site-tree',component: () => import( '@/views/pages/review/site-tree.vue')},
      {path:'/site-review/site-router',name: 'site-router',component: () => import( '@/views/pages/review/site-router.vue')},
      {path:'/site-review/site-js',name: 'site-js',component: () => import( '@/views/pages/review/site-js.vue')},
    ]
  },

]

// VueRouter에 라우터값 넣기
const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  routes
})

//실행
export default router`
,
`<template>
  <header id="header">  
    <h1 class="app_name">Vue연습</h1>
    <ul class="gnb flex_center">
      <template v-for="(gnb,i) in depthList" :key="i">
        <li v-if="gnb.level === 1"><router-link :to="gnb.path">{{gnb.name}}</router-link></li>
      </template>
    </ul>
    <div class="mo_gnb" ref="moGnb">
      <div class="btn_wrap">
        <button class="menu_open"><i class="fa-solid fa-bars"></i></button>
        <button class="menu_close"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="mo_menu">

        <ul class="depth1">
          <template v-for="(gnb,i) in depthList" :key="i">
            <li class="acco">
              <router-link :to="gnb.path"  v-if="!gnb.depth">{{gnb.name}}</router-link>
              <button v-else>{{gnb.name}}</button>

              <ul class="depth2" v-if="gnb.depth">
                <li v-for="(gnb,i) in gnb.children" :key="i">
                  <router-link :to="gnb.path" v-if="!gnb.depth">{{gnb.name}}</router-link>
                  <button v-else>{{gnb.name}}</button>

                  <ul class="depth3" v-if="gnb.depth">
                    <li v-for="(gnb,i) in gnb.children" :key="i">
                      <router-link :to="gnb.path">{{gnb.name}}</router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </template>
        </ul>
      </div>
      <div class="dimmed"></div>
    </div>
  </header>
</template>

<script>
import linkData from '@/js/linkData'
import UIComponent from '@/js/UiCommon.js'

const depthList = linkData.depthList

export default {
  name: 'Header-App',
  components: {
  },
  props: {
  },
  setup() {
  },
  data(){
    return{
      depthList
    }
  },
  mounted(){
    UIComponent.momenu.init(this.$refs.moGnb)
  },
}
<${'/'}script>`
,
`<template>
  <aside id="lnb">
    <ul class="lnb_depth2">
      <template v-for="(lnb,i) in lnb_data.children" :key="i">
        <li>
          <router-link :to="lnb.path" v-if="!lnb.depth">{{lnb.name}}</router-link>
          <p v-else>{{lnb.name}}</p>

          <ul class="lnb_depth3" v-if="lnb.depth">
            <li v-for="(lnb,i) in lnb.children" :key="i">
              <router-link :to="lnb.path" v-if="!lnb.depth">{{lnb.name}}</router-link>
              <p v-else>{{lnb.name}}</p>

              <ul class="depth3" v-if="lnb.depth">
                <li v-for="(lnb,i) in lnb.children" :key="i">
                  <router-link :to="lnb.path">{{lnb.name}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </template>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'lnb-App',
  props: {
    lnb_data: {
      type: Array, 
      default: () => [] 
    }
  }
}
<${'/'}script>`
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