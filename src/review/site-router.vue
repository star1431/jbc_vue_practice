<template>
  <div class="section">
    <h3><span>사이트 리뷰</span></h3>
    <div class="info_wrap">
      <h4><i class="fa-brands fa-vuejs"></i>라우터</h4>
      <div class="info_box">
        <p class="info_tit">router.js</p>
        <div class="info">
          <p>설명</p>
          <CodeEditor
            value="import { createRouter,createWebHashHistory } from 'vue-router'
import HomeView from './views/Home.vue'

/* 라우터값 설정*/
const routes = [
    /*1depth*/
    {path: '',name: 'home',component: HomeView},
    {path: '/note',name: 'note',component: () => import( './views/note.vue'),
        /*2depth*/
        children:[
            {path:'',name: 'about',component: () => import( './note/about.vue')},
            {path:'/note/start',name: 'start',component: () => import( './note/start.vue')},
             /*3depth*/
            {path:'/note/vue-basic',name: 'vue-basic',component: () => import( './note/vue_skill/vue-basic.vue')},
            {path:'/note/data-bind',name: 'data-bind',component: () => import( './note/vue_skill/data-bind.vue')},
            {path:'/note/vue-event',name: 'vue-event',component: () => import( './note/vue_skill/vue-event.vue')},
            {path:'/note/vue-component',name: 'vue-component',component: () => import( './note/vue_skill/vue-component.vue')},
            {path:'/note/vue-router',name: 'vue-router',component: () => import( './note/vue_skill/vue-router.vue')},

        ]
    },
    {path: '/practice',name: 'practice',component: () => import( './views/practice.vue'),
        /*2depth*/
        children:[
            {path:'',name: 'vonClick',component: () => import( './practice/vonClick.vue')},
            {path:'/practice/test',name: 'test',component: () => import( './practice/test-height.vue')},

        ]
    },
    {path: '/site-review',name: 'site-review',component: () => import( './views/site-review.vue'),
        /*2depth*/
        children:[
            {path:'',name: 'site-tree',component: () => import( './review/site-tree.vue')},
            {path:'/site-review/site-router',name: 'site-router',component: () => import( './review/site-router.vue')},

        ]
    },
]
/* VueRouter에 라우터값 넣기*/
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

/*실행*/
export default router
"
            :languages="[['javascript', 'JS']]"
            :read_only="true"
            :hide_header="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
          <p>설명</p>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">header 라우터 사용</p>
        <div class="info">
          <p>설명</p>
          <CodeEditor
            value="<template>
  <header id=&#34;header&#34;>  
    <h1 class=&#34;app_name&#34;>Vue연습</h1>
    <ul class=&#34;gnb flex_center&#34;>
      <li v-for=&#34;(gnb,i) in depth_list&#34; :key=&#34;i&#34;><router-link :to=&#34;gnb.gnb_link&#34;>{{gnb.gnb_name}}</router-link></li>
    </ul>
    <div class=&#34;mo_gnb&#34;>
      <div class=&#34;btn_wrap&#34;>
        <button class=&#34;menu_open&#34;><i class=&#34;fa-solid fa-bars&#34;></i></button>
        <button class=&#34;menu_close&#34;><i class=&#34;fa-solid fa-xmark&#34;></i></button>
      </div>
      <div class=&#34;mo_menu&#34;>
        <ul class=&#34;depth1&#34;>
          <li class=&#34;acco&#34; v-for=&#34;(gnb,i) in depth_list&#34; :key=&#34;i&#34;>
            <router-link :to=&#34;gnb.gnb_link&#34; v-if=&#34;gnb.single&#34;>{{gnb.gnb_name}}</router-link>
            <p v-else>{{gnb.gnb_name}}</p>

            <ul class=&#34;depth2&#34; v-if=&#34;gnb.depth2&#34;>
              <li v-for=&#34;(gnb2,i) in gnb.depth2_list&#34; :key=&#34;i&#34;>
                <p v-if=&#34;gnb2.depth3&#34;>{{gnb2.depth2_name}}</p>
                <router-link :to=&#34;gnb2.depth2_link&#34; v-else>{{gnb2.depth2_name}}</router-link>
                
                <ul class=&#34;depth3&#34; v-if=&#34;gnb2.depth3&#34;>
                  <li v-for=&#34;(gnb3,i) in gnb2.depth3_list&#34; :key=&#34;i&#34;>
                     <router-link :to=&#34;gnb3.depth3_link&#34;>{{gnb3.depth3_name}}</router-link>
                  </li>
                </ul>

              </li>
            </ul>

          </li>
        </ul>
      </div>
      <div class=&#34;dimmed&#34;></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header-App',
  props: {
  },
  data(){
    return{
      depth_list:[
        {single:true,depth2:false,gnb_name:'home',gnb_link:'/',},
        {single:false,depth2:true,gnb_name:'Study-note',gnb_link:'/note',
          depth2_list:[
            {depth2_name:'Vue 개념과 특징', depth2_link:'/note',depth3:false,},
            {depth2_name:'Vue 시작하기', depth2_link:'/note/start',depth3:false,},
            {depth2_name:'Vue 기능', depth2_link:'',depth3:true,
              depth3_list:[
                {depth3_name:'vue 기초설명',depth3_link:'/note/vue-basic',},
                {depth3_name:'컴포넌트',depth3_link:'/note/vue-component',},
                {depth3_name:'데이터바인딩',depth3_link:'/note/data-bind',},
                {depth3_name:'vue이벤트',depth3_link:'/note/vue-event',},
                {depth3_name:'라우터',depth3_link:'/note/vue-router',},
              ]
            },
          ]
        },
        {single:false,depth2:true,gnb_name:'practice',gnb_link:'/practice',
          depth2_list:[
            {depth2_name:'v-on:Click이벤트', depth2_link:'/practice',depth3:false,},
            {depth2_name:'test-height', depth2_link:'/practice/test',depth3:false,},
          ]
        },
        {single:false,depth2:true,gnb_name:'site-review',gnb_link:'/site-review',
          depth2_list:[
            {depth2_name:'사이트 구조', depth2_link:'/site-review',depth3:false,},
            {depth2_name:'사이트 라우터', depth2_link:'/site-review/site-router',depth3:false,},
          ]
        },
      ],
    }
  }
}
</script>
"
            :languages="[['html', 'HTML']]"
            :read_only="true"
            :hide_header="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
          <p>설명</p>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">lnb 라우터 사용</p>
        <div class="info">
          <p>설명</p>
          <CodeEditor
            value="<template>
  <aside id=&#34;lnb&#34;>
    <ul class=&#34;lnb_depth2&#34;>
      <li v-for=&#34;(lnb,i) in lnb_data&#34; :key=&#34;i&#34;>
        <router-link :to=&#34;lnb.depth2_link&#34; v-if=&#34;lnb.depth2&#34;>{{lnb.depth2_name}}</router-link>
        <p v-else>{{lnb.depth2_name}}</p>
        <ul class=&#34;lnb_depth3&#34; v-if=&#34;lnb.depth3&#34;>
          <li v-for=&#34;(lnb2,i) in lnb.depth3_lists&#34; :key=&#34;i&#34;>
            <router-link :to=&#34;lnb2.depth3_link&#34;>{{lnb2.depth3_name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'lnb-App',
  props: {
    lnb_data:{
      type: Array, 
      default: () => [] 
    }
  }
}
</script>"
            :languages="[['html', 'HTML']]"
            :read_only="true"
            :hide_header="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
          <p>설명</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeEditor from 'simple-code-editor';

export default {

  name: 'siterouter-App',
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