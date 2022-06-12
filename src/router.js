import { createRouter,createWebHashHistory } from 'vue-router'
import HomeView from './views/Home.vue'

// 라우터값 설정
const routes = [
    //1depth
    {path: '',name: 'home',component: HomeView},
    {path: '/note',name: 'note',component: () => import( './views/note.vue'),
        //2depth
        children:[
            {path:'',name: 'about',component: () => import( './note/about.vue')},
            {path:'/note/start',name: 'start',component: () => import( './note/start.vue')},
             //3depth
            {path:'/note/vue-basic',name: 'vue-basic',component: () => import( './note/vue_skill/vue-basic.vue')},
            {path:'/note/data-bind',name: 'data-bind',component: () => import( './note/vue_skill/data-bind.vue')},
            {path:'/note/vue-event',name: 'vue-event',component: () => import( './note/vue_skill/vue-event.vue')},
            {path:'/note/vue-component',name: 'vue-component',component: () => import( './note/vue_skill/vue-component.vue')},
            {path:'/note/vue-router',name: 'vue-router',component: () => import( './note/vue_skill/vue-router.vue')},

        ]
    },
    {path: '/practice',name: 'practice',component: () => import( './views/practice.vue'),
        //2depth
        children:[
            {path:'',name: 'vonClick',component: () => import( './practice/vonClick.vue')},
            {path:'/practice/test',name: 'test',component: () => import( './practice/test-height.vue')},

        ]
    },
    {path: '/site-review',name: 'site-review',component: () => import( './views/site-review.vue'),
        //2depth
        children:[
            {path:'',name: 'site-tree',component: () => import( './review/site-tree.vue')},
            {path:'/site-review/site-router',name: 'site-router',component: () => import( './review/site-router.vue')},
            {path:'/site-review/site-js',name: 'site-js',component: () => import( './review/site-js.vue')},

        ]
    },
]
// VueRouter에 라우터값 넣기
const router = createRouter({
    history: createWebHashHistory(),
    // mode: 'history',
    routes
})

//실행
export default router
