<template>
  <main>
    <header-vue/>
    
    <div >
        <img src="https://cdn.discordapp.com/attachments/945803415156559913/968565791001821225/unknown.png" alt="" srcset="">
    </div>
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
    img{
        width: 70%;
        height: 70%;
        margin: 5% 10% 0% 15%;
    }
</style>