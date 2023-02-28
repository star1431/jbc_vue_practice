<template>
  <header id="header">  
    <h1 class="app_name">Vue연습</h1>
    <ul class="gnb flex_center">
      <template v-for="(gnb,i) in depthList" :key="i">
        <li v-if="gnb.level === 1"><router-link :to="gnb.path">{{gnb.name}}</router-link></li>
      </template>
    </ul>
    <div class="mo_gnb" ref="moGnb">
      <div class="btn_wrap">
        <button class="menu_open"><i class="fa-solid fa-bars"></i></button>
        <button class="menu_close"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="mo_menu">

        <ul class="depth1">
          <template v-for="(gnb,i) in depthList" :key="i">
            <li class="acco">
              <router-link :to="gnb.path"  v-if="!gnb.depth">{{gnb.name}}</router-link>
              <button v-else>{{gnb.name}}</button>

              <ul class="depth2" v-if="gnb.depth">
                <li v-for="(gnb,i) in gnb.children" :key="i">
                  <router-link :to="gnb.path" v-if="!gnb.depth">{{gnb.name}}</router-link>
                  <button v-else>{{gnb.name}}</button>

                  <ul class="depth3" v-if="gnb.depth">
                    <li v-for="(gnb,i) in gnb.children" :key="i">
                      <router-link :to="gnb.path">{{gnb.name}}</router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </template>
        </ul>
      </div>
      <div class="dimmed"></div>
    </div>
  </header>
</template>

<script>
import linkData from '@/js/linkData'
import UIComponent from '@/js/UiCommon.js'

const depthList = linkData.depthList

export default {
  name: 'Header-App',
  components: {
  },
  props: {
  },
  setup() {
  },
  data(){
    return{
      depthList
    }
  },
  mounted(){
    UIComponent.momenu.init(this.$refs.moGnb)
  },
}
</script>
