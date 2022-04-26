<template>
  <main>
    <header-vue/>
      <div class="container">
          <div class="posi">
            <button class="btn-download">
            <a href="/images/myw3schoolsimage.jpg" download>Telecharger vos appels de cotisation</a>
          </button>
          <button class="btn-download">
            <a href="/images/myw3schoolsimage.jpg" download>Telecharger votre attestation d'assurance</a>
          </button>
          <button class="btn-download">
            <a href="/images/myw3schoolsimage.jpg" download>Telecharger votre relevé de sinistralité</a>
          </button>
          <button class="btn-download">
            <a href="/images/myw3schoolsimage.jpg" download>Telecharger vos pieces contractuelles</a>
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
    .btn-download {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 3% 2%;
        border:  solid 1px black;
        cursor: pointer;
        width: 45%;
        height: 98%;
        font-size: 120%;
    }
    a{
        text-decoration: none;
        text-transform: uppercase;
        color: #000;
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