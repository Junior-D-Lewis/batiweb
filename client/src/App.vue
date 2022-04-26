<template>
  <main>

<h1 v-if="login === true">
  <header-vue/>
</h1>
     <RouterView />
  </main>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from './components/Header.vue'

export default {
  components:{
    HeaderVue,
  },
   mounted() {
    localStorage.setItem('isLog', 'false');
    //this.login = localStorage.getItem('isLog');
    console.log('login est '+this.login)
    console.log(localStorage)
  }, 
  data(){
    return{
      login: false,
    }
  },
}

</script>

<style scoped>

</style>