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
      lnb_list:['Vue 개념과 특징','Vue 시작하기','Vue 기능'],
      lnb_link:['/note','/note/start','1'],
    }
  }
}
</script>
