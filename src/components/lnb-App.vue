<template>
  <aside id="lnb">
    <ul class="lnb_depth2">
      <li v-for="(lnb,i) in lnb_data" :key="i">
        <router-link :to="lnb.depth2_link" v-if="lnb.depth2">{{lnb.depth2_name}}</router-link>
        <p v-else>{{lnb.depth2_name}}</p>
        <ul class="lnb_depth3" v-if="lnb.depth3">
          <li v-for="(lnb2,i2) in lnb.depth3_lists" :key="i2">
            <router-link :to="lnb2.depth3_link">{{lnb2.depth3_name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'lnb-App',
  props: {
    lnb_data:{
      type: Array, 
      default: () => [] 
    }
  }
}
</script>