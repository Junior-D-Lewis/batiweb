<template>
  <main>
    <header-vue/>
      <RouterLink to="/etape5" class="next"><button class="btnNext">Suivant</button></RouterLink>
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

<style>

</style>