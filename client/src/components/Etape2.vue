<template>
    <div id="etape2">
    <header-vue/>
      <header>
        <h2>
            2 - QUALITÉ DU DEMANDEUR D’ASSURANCE
        </h2>
    </header>

    <div class="all">
        <p>
            Vous déclarez agir en qualité de (cochez la case correspondante) :

        </p>

        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">Promoteur immobilier</label>
        </div>

        <div class="mb-3">
            <label for="one" class="form-label"><span>.</span>&nbsp; Nom et adresse du maître d’ouvrage si différent du promoteur immobilier (SCI, SCCV…) : </label>
            <input type="text" style="border-bottom: 2px dotted;" class="form-control" id="one">    
        </div>





        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">Vendeur après achèvement</label>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">Mandataire du maître d’ouvrage (maître d’ouvrage délégué)</label>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">Contractant général </label>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">Constructeur de maisons individuelles</label>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">Vendeur d’immeubles à construire</label>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">Personne physique construisant un logement pour l’occuper elle-même ou le faire occuper par son conjoint,
                ses ascendants, ses descendants ou ceux de son conjoint</label>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">Lotisseur aménageur</label>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1"> Autre qualité, à préciser</label>
            <input type="text" style="border-bottom: 2px dotted;" class="form-control" id="one">
        </div>
         
    <RouterLink to="/etape3" class="next"><button class="btnNext">Suivant</button></RouterLink>

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

        header{
            background-color: blue;
        }
</style>
