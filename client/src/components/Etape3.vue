<template>
    <div id="etape3">
    <header-vue/>
       <header>
        <h2>
            3 - IMMIXTION DU MAÎTRE D’OUVRAGE
        </h2>
    </header>

    <div class="all mb-3">
       <p>
         Le demandeur déclare intervenir en qualité de maître d’œuvre ou entrepreneur réalisant ou sous-traitant tout ou
partie des travaux dans le cadre de l’opération à assurer :
      </p> 
<div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" id="inlineCheckbox1" name="accord" value="oui">
    <label class="form-check-label" for="yes">OUI</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" id="inlineCheckbox2" name="accord" value="non">
    <label class="form-check-label" for="no">NON</label>
  </div>

        <p>
            Si OUI :
        </p>

            <div class="mb-3">
                <label for="one" class="form-label"><span style="color: blue;">.</span>&nbsp;indiquer votre mission ou votre activité :  </label>
                <input type="text" style="border-bottom: 2px dotted;" class="form-control" id="one">    
            </div>

            <div class="mb-3">
                <label for="one" class="form-label"><span style="color: blue;">.</span>&nbsp; indiquer le montant des travaux TTC restant à votre charge :   </label>
                <input type="text" style="border-bottom: 2px dotted;" class="form-control" id="one">    
            </div>
             
            <div class="mb-3">
                 
                <label for="exampleInputEmail1" class="form-label">  Etes-vous assuré pour cette activité ou cette mission ? 
                </label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="inlineCheckbox1" name="accord2" value="option1">
                    <label class="form-check-label" for="inlineCheckbox1">oui</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="inlineCheckbox2" name="accord2" value="option2">
                    <label class="form-check-label" for="inlineCheckbox2">non</label>
                  </div>
              </div>

          <h4>
            Si OUI, joindre votre attestation d’assurance valable à la date d’ouverture de chantier indiquant cette activité
            ou cette mission.
          </h4>

    <RouterLink to="/etape4" class="next"><button class="btnNext">Suivant</button></RouterLink>

    </div>
    <RouterView />
      </div>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from '/src/components/Header.vue'
$(document).ready(function() {

   
   // inspired by http://jsfiddle.net/arunpjohny/564Lxosz/1/
   $('.table-responsive-stack').each(function (i) {
      var id = $(this).attr('id');
      //alert(id);
      $(this).find("th").each(function(i) {
         $('#'+id + ' td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">'+             $(this).text() + ':</span> ');
         $('.table-responsive-stack-thead').hide();
         
      });
      
   });
 
$( '.table-responsive-stack' ).each(function() {
  var thCount = $(this).find("th").length; 
   var rowGrow = 100 / thCount + '%';
   //console.log(rowGrow);
   $(this).find("th, td").css('flex-basis', rowGrow);   
});
     
function flexTable(){
   if ($(window).width() < 768) {     
   $(".table-responsive-stack").each(function (i) {
      $(this).find(".table-responsive-stack-thead").show();
      $(this).find('thead').hide();
   });    
   // window is less than 768px   
   } else {
   $(".table-responsive-stack").each(function (i) {
      $(this).find(".table-responsive-stack-thead").hide();
      $(this).find('thead').show();
   });
   }
// flextable   
}      
 
flexTable();
   
window.onresize = function(event) {
    flexTable();
};
// document ready  
});

</script>

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

 .all{
            margin-left: 20%;
            width: 800px;
        }

</style>
