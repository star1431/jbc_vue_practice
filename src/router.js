// 라우터와 1뎁스 페이지 임포트
import { createRouter,createWebHistory } from 'vue-router'
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
            {path:'/note/data-bind',name: 'data-bind',component: () => import( './note/vue_skill/data-bind.vue')},
            {path:'/note/vue-event',name: 'vue-event',component: () => import( './note/vue_skill/vue-event.vue')},
            //3depth
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
]
// VueRouter에 라우터값 넣기
const router = createRouter({
    history: createWebHistory(),
    // mode: 'history',
    routes
})

//실행
export default router
