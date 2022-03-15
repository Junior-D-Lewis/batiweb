<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div id="etape11">
        <div class="card">
         <div class="card">
            <div class="card-body">
                <h5 class="card-title"><span>11-</span>TRAITEMENT DES DONNÉES PERSONNELLES</h5>
                <p class="card-text">L’assureur, responsable de traitement, est amené à recueillir et traiter vos données personnelles nécessaires à la 
                  passation, gestion et exécution de votre contrat d’assurance, à la gestion de la relation commerciale ainsi qu'à 
                  l'exercice de toute obligation réglementaire. Vos données pourront être transmises à ses partenaires ou aux autorités 
                  compétentes. Vous disposez de droits que vous pouvez exercer par courrier postal au siège de l’assureur ou par 
                  mail à contactdpd@auxiliaire.fr.
                </p>
                <div class="row">
                  <p class="col-6 card-text form-group"><label for="fait_A">Fait a</label> 
                   <input type="text" class="form-control" name="fait_A" id="fait_A" placeholder="......"></p>
                  <p class="col-6 card-text form-group"><label for="le">Le</label> 
                  <input type="text" class="form-control" name="le" id="le" placeholder="......"></p>
                </div>
                <div class="row">
                  <p class="col-6 card-text form-group text-center"><label for="signature">Le demandeur <br>
                    (cachet et signature indispensables)</label> 
                  <textarea rows="5" class="form-control" name="signature" id="signature">
                    </textarea>
                  </p>
                </div>
                <br>
                <div class="row border border-primary">
                  <div class="col-12">
                    <h3 class="text-center card-text">
                      DOCUMENTS À JOINDRE OBLIGATOIREMENT
                    </h3>
                  </div>
                  <p class="card-text text-left">
               
                    - la déclaration d’ouverture de chantier (DOC), <br>
                    - le permis de construire et ses attendus,<br>
                    - le rapport d’études de sol (G2 PRO),<br>
                    - la convention de contrôle technique et le rapport initial (RICT), <br>
                    - les descriptifs (CCTP) et quantitatifs (DPGF),<br>
                    - les marchés de travaux signés et les contrats de maîtrise d’œuvre, <br>
                    - les attestations d’assurance Responsabilité Civile Décennale obligatoire valables au jour de la DOC de tous les 
                    intervenants y compris les sous-traitants indiquant clairement les activités qu’ils exercent dans l’opération de 
                    construction,<br>
                    - les plans de situation et les plans de masse en coupes, façades et niveaux, <br>
                    - le planning d’avancement des travaux,<br>
                    - la convention d’assistance à maîtrise d’ouvrage, <br>
                    - la convention de délégation de maîtrise d’ouvrage et l’attestation d’assurance Responsabilité Civile Décennale 
                    du maître d’ouvrage délégué, <br>
                    - les conventions particulières de renonciation ou de transfert de responsabilité, <br>
                    - les conventions particulières de co-promotion,<br>
                    - le constat d’huissier sur les avoisinants ou l’ordonnance de référé préventif avant démarrage des travaux, <br>
                    - les diagnostics réalisés sur l’ouvrage existant dans le cadre d’opération de rénovation (amiante, solidité des 
                    ouvrages, état de conservation des bois…),<br>
                    - les statuts de la société maître d’ouvrage,<br>
                    - une copie d’un extrait Kbis datant de moins de 3 mois,<br>
                    - une copie de la pièce d’identité du dirigeant et celle du bénéficiaire effectif si ce dernier est différent du dirigeant. <br>
                  
                  </p>
                </div>
            </div>
         </div>
         </div>
         <RouterLink to="/etape12" class="next"><button class="btnNext">Suivant</button></RouterLink>
 
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
