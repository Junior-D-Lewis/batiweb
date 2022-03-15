import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state: {
    login: false
  },
  mutations: {
    isLogin () {
      console.log(this.state.login)
      this.state.login = true
      console.log(this.state.login)
    }
  },
  getters: {
    getLogin(state){
      return state.login//setInterval(()=>{state.login},10000000) //state.login
    }
  }, 
  actions: {

  }
})

export default store;