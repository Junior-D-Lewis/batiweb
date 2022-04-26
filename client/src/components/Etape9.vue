<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from '/src/components/Header.vue'
</script>

<template>
    <div id="etape9">
    <header-vue/>
         <div class="card">
                <div class="card-body">
                    <h5 class="card-title"><span>9-</span>PORTÉE DU PRÉSENT QUESTIONNAIRE
                    </h5>
                    <p class="card-text">
                    Vous déclarez sincères et, à votre connaissance exacts, les renseignements ci-avant et certifiez qu’ils ne comportent 
                    aucune restriction de nature à nous induire en erreur.
                    </p>
                    <p class="card-text">
                    Vous acceptez, en conséquence, que le présent questionnaire de déclaration de risque et ses annexes servent de 
                    base au contrat que vous désirez souscrire
                    </p>
                    <p class="card-text fw-bolder">
                    Toute omission, toute déclaration fausse ou inexacte pourrait entraîner la nullité du contrat ou vous exposer 
                    à supporter la charge de tout ou partie des indemnités dans les conditions prévues par les articles L.113-2, 
                    L.113-8 et L.113-9 du Code des assurances.
                    </p>
                </div>
        </div>
        <RouterLink to="/etape10" class="next"><button class="btnNext">Suivant</button></RouterLink>
    <RouterView />
      </div>
</template>

<style scoped>
@import '@/assets/base.css';
@import '@/assets/bootstrap/css/bootstrap.min.css';
@import '@/assets/font-awesome-4.7.0/css/font-awesome.css';
/* remove animation for those who have remove it */
.logo{
  width: 65px;
  height: 45px;
  margin-left: 5px;
}

@media only screen and (max-width : 1024px) {
.nav-item:hover a{
  background-color: #198754;
  color: #DBFFE4;
  transition: 1s;
}
}
</style>

<script setup>

</script>
