<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div id="etape10">
        
 <div class="card">
            <div class="card-body">
                <h5 class="card-title"><span>10-</span> OBLIGATIONS RELATIVES À LA LUTTE CONTRE LE BLANCHIMENT DES CAPITAUX ET LE 
                   FINANCEMENT DU TERRORISME
                </h5>
                <p class="card-text">
                  <span>Nous vous prions de :</span><br>
                   - joindre une copie d’un extrait Kbis datant de moins de 3 mois ; <br>
                  - effectuer tout règlement à partir d’un compte bancaire ouvert au sein d’un établissement situé dans l’Union 
                  Européenne ou dans un pays tiers équivalent ;<br>
                  - renseigner les informations suivantes concernant le ou les bénéficiaire(s) effectif(s)* :
                </p>
                <div class="row">
                  <p class="col-12 card-text form-group"><label for="nom_prenom">Nom et Prenom</label> 
                   <input type="text" class="form-control" name="nom_prenom" id="nom_prenom" placeholder=".............."></p>
                  <p class="col-12 card-text form-group"><label for="nom_naissance">Nom de naissance</label> 
                  <input type="text" class="form-control" name="nom_naissance" id="nom_naissance" placeholder=".............."></p>
                  <p class="col-6 card-text form-group"><label for="date_naissance">Date de naissance</label> 
                  <input type="text" class="form-control" name="date_naissance" id="date_naissance" placeholder=".............."></p>
                  <p class="col-6 card-text form-group"><label for="lieux">Lieux</label> 
                  <input type="text" class="form-control" name="lieux" id="lieux" placeholder=".............."></p>
                </div>
                  <p class="card-text">
                    - joindre une copie de la pièce d’identité du dirigeant et celle du bénéficiaire effectif si ce dernier est différent du 
                    dirigeant ;<br><br>
                    * Selon les articles R.561-1 à R.561-3-0 du Code monétaire et financier, le bénéficiaire effectif est la ou les personnes 
                    physiques qui soit détiennent, directement ou indirectement, plus de 25 % du capital ou des droits de vote de la 
                    société, soit exercent, par tout autre moyen, un pouvoir de contrôle sur la société au sens des 3° et 4° du I de l’article 
                    L. 233-3 du Code de commerce ; à défaut, lorsqu’aucune personne physique n’a pu être identifiée selon ces deux 
                    critères, et qu’il n’existe pas de soupçon de blanchiment de capitaux ou de financement du terrorisme à l’encontre 
                    du client, le bénéficiaire effectif est le dirigeant de la personne morale.
                  </p>
            </div>

         </div>
    <RouterLink to="/etape11" class="next"><button class="btnNext">Suivant</button></RouterLink>
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
