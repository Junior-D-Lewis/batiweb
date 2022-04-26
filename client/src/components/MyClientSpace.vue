<template>
  <main>
    <header-vue/>
      <RouterView/>
  </main>
</template>

<script>
import HeaderVue from '/src/components/Header.vue'
export default {
  components:{
    HeaderVue,
  },

}
</script>

<style scoped>
@import '@/assets/base.css';
@import '@/assets/bootstrap/css/bootstrap.css';
/* @import '@/assets/bootstrap/js/bootstrap.js'; */
</style>