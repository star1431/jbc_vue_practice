<template>
  <perfect-scrollbar>
    <div class="main_wrap">
      <lnb-app :lnb_data="lnb_lists"></lnb-app>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<script>
import LnbApp from '@/components/lnb-App.vue'
// import VonClick from '@/content/vonClick.vue'
export default {
  name: 'siteReview-App',
  components:{
    LnbApp,
    // VonClick
  },
  data(){
    return {  
      lnb_lists:[
        {
          depth2:true,
          depth3:false,
          depth2_name:'사이트 구조',
          depth2_link:'/site-review',
        },
        {
          depth2:true,
          depth3:false,
          depth2_name:'사이트 라우터',
          depth2_link:'/site-review/site-router',
        },
        {
          depth2:true,
          depth3:false,
          depth2_name:'js 설정값',
          depth2_link:'/site-review/site-js',
        },
      ],
    }
  }
}
</script>