<template>
  <div class="section">
    <h3><span>사이트 리뷰</span></h3>
    <div class="info_wrap">
      <h4><i class="fa-brands fa-vuejs"></i>js 설정값</h4>
      <div class="info_box">
        <p class="info_tit">main.js</p>
        <div class="info">
          <p>설명</p>
          <CodeEditor
            value="import { createApp } from 'vue'
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
"
            :languages="[['javascript', 'JS']]"
            :read_only="true"
            :hide_header="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
          <p>설명</p>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">vue.config.js</p>
        <div class="info">
          <p>설명</p>
          <CodeEditor
            value="const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/jbc_vue_practice/'
  : '/jbc_vue_practice/',
  outputDir: 'docs',

})
"
            :languages="[['html', 'HTML']]"
            :read_only="true"
            :hide_header="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
          <p>설명</p>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">ui_common.js</p>
        <div class="info">
          <p>설명</p>
          <CodeEditor
            value="import $ from 'jquery';
$(function(){
    var moblieMenu = function(){
        //모바일메뉴 클릭 이벤트
        var menuBtn = $('.mo_gnb .btn_wrap button');
        menuBtn.click(function(){
            $(this).hide();
            $(this).siblings().show();
            var menuClose = $('.btn_wrap .menu_close');
            if(!menuClose.is(':visible')){
                dimBg.hide();
                $('.mo_gnb').removeClass('active');
                $('.mo_gnb').animate({width:'0'},200);
                $('.mo_menu').hide();
            } else {
                dimBg.show();
                $('.mo_gnb').addClass('active');
                $('.mo_gnb').animate({width:'50%'},200);
                $('.mo_menu').delay(150).fadeIn();
            }
        });
        //bg 클릭시
        var dimBg = $('#header .dimmed');    
        dimBg.click(function(){
            $('.mo_gnb').animate({width:'0'},200);
            $('.mo_menu , .menu_close').hide();
            $(this).hide();
            $('.menu_open').show();
        });
        //메뉴클릭
        var linkTag=$('.mo_menu a');
        linkTag.click(function(){
            $('.mo_gnb').animate({width:'0'},200);
            $('.mo_menu , .menu_close').hide();
            dimBg.hide();
            $('.menu_open').show();
        });
        $('.acco p,.acco a').click(function(){
            let acco = $(this).parent('.acco').siblings('.acco');
            $(this).toggleClass('active');
            acco.children('p,a').removeClass('active');
            acco.children('ul').slideUp();

            if ($(this).siblings('ul').is(':hidden')){
               $(this).siblings('ul').slideDown();
            } else {
               $(this).siblings('ul').slideUp();
            }
         });
    }
    moblieMenu();
});

"
            :languages="[['html', 'HTML']]"
            :read_only="true"
            :hide_header="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
          <p>설명</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeEditor from 'simple-code-editor';

export default {

  name: 'siterouter-App',
  props: {
  },
  components: {
    CodeEditor
  },
  data(){
    return{
    }
  },
}
</script>

<style scoped>
.img_box{background: transparent;border:1px solid #ddd;}
</style>