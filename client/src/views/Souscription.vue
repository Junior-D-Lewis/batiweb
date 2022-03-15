<template>
  <main>
      <Etape1/>

      <RouterView />
  </main>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Etape1 from '../components/Etape1.vue'
export default {
  components:{
    Etape1,
  },

}
</script>

<style>

</style>