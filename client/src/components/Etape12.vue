<template>
  <main>
    <header-vue/>
       <RouterLink to="/" class="next"><button class="btnNext">Finaliser</button></RouterLink>
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

</style>