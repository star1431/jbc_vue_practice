<template>
  <perfect-scrollbar ref="scroll">
    <div class="main_wrap">
      <lnb-app :lnb_data="lnb_lists"></lnb-app>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<script>
import linkData from '@/js/linkData'
import LnbApp from '/src/views/layout/lnb-App.vue'

const lnb_lists = linkData.depthList[2]

export default {
  name: 'practice-App',
  components:{
    LnbApp
  },
  data(){
    return {  
      lnb_lists
    }
  },
  watch: {
    $route() {
      this.$refs.scroll.$el.scrollTop = 0
    }
  },
}
</script>