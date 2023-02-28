<template>
  <header-app/>
  <router-view/>
</template>

<script>
import HeaderApp from '/src/views/layout/Header-App.vue'
export default {
  name: 'App',
  components: {
    HeaderApp,
  }
}
</script>
