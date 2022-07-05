<template>
  <main>
    <header-vue/>
      <div class="container">
          <div class="posi">
            <button class="btn">
            <h1>Prendre rendez-vous avec votre conseiller</h1>
          </button>
          </div>

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
    .btn {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 3% 2%;
        border:  solid 1px black;
        cursor: pointer;
        font-size: 120%;
    }

    a:hover{
        text-decoration: none;
        text-transform: uppercase;
        color: #000;
    }
    .divi{
        width: 20%;
        height: 90%;
        margin-left: 3%;
        background-color: aqua;
    }

    .posi{
        margin-top: 7%;
    }
</style>