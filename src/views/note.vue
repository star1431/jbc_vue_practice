<template>
  <perfect-scrollbar>
    <div class="main_wrap type_3depth">
      <lnb-app :lnb_data="lnb_lists"></lnb-app>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<script>
import LnbApp from '@/components/lnb-App.vue'
export default {
  name: 'note-App',
  components:{
    LnbApp,
  },
  data(){
    return {
      lnb_lists:[
        {
          depth2:true,
          depth3:false,
          depth2_name:'Vue 개념과 특징',
          depth2_link:'/note',
        },
        {
          depth2:true,
          depth3:false,
          depth2_name:'Vue 시작하기',
          depth2_link:'/note/start',
        },
        {
          depth2:false,
          depth3:true,
          depth2_name:'Vue 기능',
          depth2_link:'',
          
          depth3_lists:[
            {
              depth3_name:'vue 기초설명',
              depth3_link:'/note/vue-basic',
            },
            {
              depth3_name:'컴포넌트',
              depth3_link:'/note/vue-component',
            },
            {
              depth3_name:'데이터바인딩',
              depth3_link:'/note/data-bind',
            },
            {
              depth3_name:'vue이벤트',
              depth3_link:'/note/vue-event',
            },
            {
              depth3_name:'라우터',
              depth3_link:'/note/vue-router',
            },
          ]
        },
      ],
    }
  },
  
}

</script>