<template>
  <header id="header">  
    <h1 class="app_name">Vue연습</h1>
    <ul class="gnb flex_center">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/note">Study-note</router-link></li>
      <li><router-link to="/practice">Practice</router-link></li>
    </ul>
    <div class="mo_gnb">
      <div class="btn_wrap">
        <button class="menu_open"><i class="fa-solid fa-bars"></i></button>
        <button class="menu_close"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="mo_menu">
        <ul>
          <li class="acco"><p><router-link to="/">Home</router-link></p></li>
          <li class="acco">
            <p>Study-note</p>
            <ul>
              <li v-for="(deth,i) in Study" :key="i"><router-link :to="Study_link[i]">{{Study[i]}}</router-link></li>
            </ul>
          </li>
          <li class="acco">
            <p>Practice</p>
            <ul>
              <li v-for="(deth,i) in practice" :key="i"><router-link :to="practice_link[i]">{{practice[i]}}</router-link></li>
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
      Study:['Vue 개념과 특징','Vue 시작하기'],
      Study_link:['/note','/note/start'],
      practice:['v-on:Click이벤트','test-height'],
      practice_link:['/practice','/practice/test']
    }
  }
}
</script>
