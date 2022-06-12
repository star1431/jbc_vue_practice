<template>
  <header id="header">  
    <h1 class="app_name">Vue연습</h1>
    <ul class="gnb flex_center">
      <li v-for="(gnb,i) in depth_list" :key="i"><router-link :to="gnb.gnb_link">{{gnb.gnb_name}}</router-link></li>
    </ul>
    <div class="mo_gnb">
      <div class="btn_wrap">
        <button class="menu_open"><i class="fa-solid fa-bars"></i></button>
        <button class="menu_close"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="mo_menu">
        <ul class="depth1">
          <li class="acco" v-for="(gnb,i) in depth_list" :key="i">
            <router-link :to="gnb.gnb_link" v-if="gnb.single">{{gnb.gnb_name}}</router-link>
            <p v-else>{{gnb.gnb_name}}</p>

            <ul class="depth2" v-if="gnb.depth2">
              <li v-for="(gnb2,i) in gnb.depth2_list" :key="i">
                <p v-if="gnb2.depth3">{{gnb2.depth2_name}}</p>
                <router-link :to="gnb2.depth2_link" v-else>{{gnb2.depth2_name}}</router-link>
                
                <ul class="depth3" v-if="gnb2.depth3">
                  <li v-for="(gnb3,i) in gnb2.depth3_list" :key="i">
                     <router-link :to="gnb3.depth3_link">{{gnb3.depth3_name}}</router-link>
                  </li>
                </ul>

              </li>
            </ul>

          </li>
        </ul>
      </div>
      <div class="dimmed"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header-App',
  props: {
  },
  data(){
    return{
      depth_list:[
        {single:true,depth2:false,gnb_name:'home',gnb_link:'/',},
        {single:false,depth2:true,gnb_name:'Study-note',gnb_link:'/note',
          depth2_list:[
            {depth2_name:'Vue 개념과 특징', depth2_link:'/note',depth3:false,},
            {depth2_name:'Vue 시작하기', depth2_link:'/note/start',depth3:false,},
            {depth2_name:'Vue 기능', depth2_link:'',depth3:true,
              depth3_list:[
                {depth3_name:'vue 기초설명',depth3_link:'/note/vue-basic',},
                {depth3_name:'컴포넌트',depth3_link:'/note/vue-component',},
                {depth3_name:'데이터바인딩',depth3_link:'/note/data-bind',},
                {depth3_name:'vue이벤트',depth3_link:'/note/vue-event',},
                {depth3_name:'라우터',depth3_link:'/note/vue-router',},
              ]
            },
          ]
        },
        {single:false,depth2:true,gnb_name:'practice',gnb_link:'/practice',
          depth2_list:[
            {depth2_name:'v-on:Click이벤트', depth2_link:'/practice',depth3:false,},
            {depth2_name:'test-height', depth2_link:'/practice/test',depth3:false,},
          ]
        },
        {single:false,depth2:true,gnb_name:'site-review',gnb_link:'/site-review',
          depth2_list:[
            {depth2_name:'사이트 구조', depth2_link:'/site-review',depth3:false,},
            {depth2_name:'사이트 라우터', depth2_link:'/site-review/site-router',depth3:false,},
            {depth2_name:'js 설정값', depth2_link:'/site-review/site-js',depth3:false,},
          ]
        },
      ],
    }
  }
}
</script>
