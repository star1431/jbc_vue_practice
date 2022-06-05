<template>
  <perfect-scrollbar>
    <div class="main_wrap">
      <lnb-app v-bind:linkInfo="lnb_link" :linkName="lnb_list"></lnb-app>
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
      lnb_list:['v-on:Click이벤트','test-height'],
      lnb_link:['/practice','/practice/test'],
    }
  }
}
</script>
