// 라우터와 1뎁스 페이지 임포트
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/Home.vue'

// 라우터값 설정
const routes = [
    //1deth
    {path: '',name: 'home',component: HomeView},
    // {path: '',name: 'about',component: () => import( './views/AboutView.vue'),},
    {path: '/note',name: 'note',component: () => import( './views/note.vue'),
        //2deth
        children:[
            {path:'',name: 'about',component: () => import( './note/about.vue')},
            {path:'/note/start',name: 'start',component: () => import( './note/start.vue')},

        ]
    },
    {path: '/practice',name: 'practice',component: () => import( './views/practice.vue'),
        //2deth
        children:[
            {path:'',name: 'vonClick',component: () => import( './practice/vonClick.vue')},
            {path:'/practice/test',name: 'test',component: () => import( './practice/test-height.vue')},

        ]
    },

    //2deth
    // {path: '/practice/vonClick',name: 'vonClick',component: () => import( './content/vonClick.vue')},
    // {path: '/practice/test',name: 'test',component: () => import( './content/test-height.vue')},
]
// VueRouter에 라우터값 넣기
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//실행
export default router
