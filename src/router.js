// 라우터와 1뎁스 페이지 임포트
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/Home.vue'

// 라우터값 설정
const routes = [
    //1DETH
    {path: '',name: 'home',component: HomeView},
    {path: '/practice',name: 'practice',component: () => import( './views/practice.vue'),
        children:[
            {path:'',name: 'vonClick',component: () => import( './content/vonClick.vue')},
            {path:'/practice/test',name: 'test',component: () => import( './content/test-height.vue')},

        ]
    },

    //2DETH
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
