import { createApp } from 'vue'
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
}

