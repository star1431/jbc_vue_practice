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
  name: 'main-App',
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
          depth2_name:'v-on:Click이벤트',
          depth2_link:'/practice',
        },
        {
          depth2:true,
          depth3:false,
          depth2_name:'test-height',
          depth2_link:'/practice/test',
        },
      ],
    }
  }
}
</script>