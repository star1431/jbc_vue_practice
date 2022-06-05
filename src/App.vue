<template>
  <header-app/>
  <router-view/>
</template>

<script>
import HeaderApp from './components/Header-App.vue'
export default {
  name: 'App',
  components: {
    HeaderApp,
  }
}
</script>
