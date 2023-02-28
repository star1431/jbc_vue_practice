<template>
  <aside id="lnb">
    <ul class="lnb_depth2">
      <template v-for="(lnb,i) in lnb_data.children" :key="i">
        <li>
          <router-link :to="lnb.path" v-if="!lnb.depth">{{lnb.name}}</router-link>
          <p v-else>{{lnb.name}}</p>

          <ul class="lnb_depth3" v-if="lnb.depth">
            <li v-for="(lnb,i) in lnb.children" :key="i">
              <router-link :to="lnb.path" v-if="!lnb.depth">{{lnb.name}}</router-link>
              <p v-else>{{lnb.name}}</p>

              <ul class="depth3" v-if="lnb.depth">
                <li v-for="(lnb,i) in lnb.children" :key="i">
                  <router-link :to="lnb.path">{{lnb.name}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </template>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'lnb-App',
  props: {
    lnb_data: {
      type: Array, 
      default: () => [] 
    }
  }
}
</script>
