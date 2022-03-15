<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div id="etape8">
         <div class="card">
            <div class="card-body">
                    <h5 class="card-title"><span>8-</span>GARANTIES OPTIONNELLES
                    </h5>
                    <p class="card-text">
                    Choisir les garanties optionnelles des contrats Dommages-ouvrage et Tous risques chantier (cocher la ou les cases 
                    correspondantes) :
                    </p>
                    <div class="form-group">
                        <h6> En DOMMAGES-OUVRAGE :</h6>
                        <div class="container-fluid">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="Garantie_fonctionnement" value="Garantie de bon fonctionnement" />
                                <label class="form-check-label" name="Garantie_fonctionnement" for="Garantie_fonctionnement">Garantie de bon fonctionnement</label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="Garantie_immatériels" value=" Garantie des dommages immatériels" />
                                <label class="form-check-label" name="Garantie_immatériels" for="Garantie_immatériels">Garantie des dommages immatériels</label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="Garantie_après_réception" value="Garantie des dommages aux existants divisibles après réception"/>
                                <label class="form-check-label" name="Garantie_ après_réception" for="Garantie_ après_réception">Garantie des dommages aux existants divisibles après réception</label>
                                </div>
                        </div>
                    </div>
                    <div class="form-group">
                       <h6>En TOUS RISQUES CHANTIER : </h6>
                       <div class="container-fluid">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="Garantie_visite" value="Garantie maintenance visite" />
                              <label class="form-check-label" name="Garantie_visite" for="Garantie_visite">Garantie maintenance visite</label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="Garantie_étendue" value="Garantie maintenance étendue" />
                              <label class="form-check-label" name="Garantie_étendue" for="Garantie_étendue">Garantie maintenance étendue</label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="Garantie_travaux" value="Garantie des dommages aux existants en cours de travaux"/>
                              <label class="form-check-label" name="Garantie_travaux" for="Garantie_travaux">Garantie des dommages aux existants en cours de travaux</label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="Extension_supplémentaires" value="Extension de garantie à des biens supplémentaires" />
                              <label class="form-check-label" name="Extension_supplémentaires" for="Extension_supplémentaires">Extension de garantie à des biens supplémentaires (matériels et outillages de chantier hors cause interne, 
                                baraques de chantier, appartements témoins à l’extérieur du chantier, documents techniques, 
                                administratifs et comptables)
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="Extension_exceptionnels" value="Extension de garantie à des frais exceptionnels"/>
                              <label class="form-check-label" name="Extension_exceptionnels" for="Extension_exceptionnels">Extension de garantie à des frais exceptionnels (frais de transport express y compris par avion, heures 
                                de travail supplémentaires en dehors des heures normales, frais de location de matériel de chantier 
                                supplémentaires).</label>
                            </div>
                        </div>
                    </div>
            </div>
      
         </div>
      <RouterLink to="/etape9" class="next"><button class="btnNext">Suivant</button></RouterLink>
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
