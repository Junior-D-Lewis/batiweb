<template>
  <main>
    <HeaderVue v-if="login"/>
     <RouterView />
  </main>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from './components/Header.vue'
//import store from './store/store'
export default {
  components:{
    HeaderVue,
  },

  data(){
    return{
      login: false //store.state.login
    }
  }
}
</script>

<style scoped>

</style>