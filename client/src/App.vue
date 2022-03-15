<template>
  <main>
    <p>{{login}}</p>
    <HeaderVue v-if="login"/>
     <RouterView />
  </main>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from './components/Header.vue'
//import store from './store/store'

//console.log(this.loginFromVuex())
export default {
  components:{
    HeaderVue,
  },
/*   mounted() {
    sessionStorage.setItem('isLog', 'false');
    //login = sessionStorage.getItem('isLogin')
    console.log(sessionStorage)
  }, */

 /*  computed: {
    loginFromVuex(){
     return this.$store.getters.getLogin
    }
  }, */

  data(){
    return{
      login: true
    }
  }
  
}

</script>

<style scoped>

</style>