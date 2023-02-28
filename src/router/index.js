import { createRouter, createWebHashHistory } from 'vue-router'

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
export default router
