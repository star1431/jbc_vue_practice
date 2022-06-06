import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const Vue = createApp(App)
Vue.use(router).mount('#app')

import './assets/css/style.css'
import './assets/js/ui_common.js'

//퍼펙트스크롤 플러그인
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
Vue.use(PerfectScrollbar)
//코드하이라이터 플러그인
import CodeEditor from 'simple-code-editor';

export default {
    components: {
        CodeEditor
    }
}
Vue.use(CodeEditor)
// const Vue = createApp(App)
// createApp(App).mount('#app')


