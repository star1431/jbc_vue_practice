<template>
  <header id="header">  
    <h4 class="app_name">Vue연습</h4>
    <ul class="gnb flex_center">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/practice">practice</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header-App',
  props: {
  },
  data(){
    return{
    }
  }
}
</script>
