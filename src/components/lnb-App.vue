<template>
  <aside id="lnb">
    <ul>
      <li v-for="(lnb,i) in lnb_list" :key="i">
      <router-link :to="lnb_link[i]">{{lnb_list[i]}}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'lnb-App',
  props: ['linkInfo','linkName'],
  data(){
    return{
      lnb_list:this.linkName,
      lnb_link:this.linkInfo
    }
  }
}
</script>