<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div id="etape10">
         <div class="card">
              <div class="card-body">
                        <h5 class="card-title"><span>7-</span>RENSEIGNEMENTS COMPLÉMENTAIRES
                        </h5>
                        <p class="card-text">
                        Indiquer le cas échéant les bénéficiaires de la garantie de responsabilité civile décennale Constructeur Non 
                        Réalisateur autres que le souscripteur (maître d’ouvrage, maître d’ouvrage délégué…) :

                        </p>
                        <table class="table table-bordered table-striped table-responsive-stack" id="tableOne">
                            <thead class="thead-secondary">
                            <tr>
                                <th>Nom ou raison sociale</th>
                                <th>Adresse</th>
                                <th>Qualité</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><textarea rows="3" class="form-control" name="Nom ou raison sociale"></textarea></td>
                                <td><textarea rows="3" class="form-control" name="Adresse"></textarea></td>
                                <td><textarea rows="3" class="form-control" name="Qualité"></textarea></td>
                            </tr>
                            <tr>
                                <td><textarea rows="3" class="form-control" name="Nom ou raison sociale"></textarea></td>
                                <td><textarea rows="3" class="form-control" name="Adresse"></textarea></td>
                                <td><textarea rows="3" class="form-control" name="Qualité"></textarea></td>
                            </tr>
                            <tr>
                                <td><textarea rows="3" class="form-control" name="Nom ou raison sociale"></textarea></td>
                                <td><textarea rows="3" class="form-control" name="Adresse"></textarea></td>
                                <td><textarea rows="3" class="form-control" name="Qualité"></textarea></td>
                            </tr>
                            <tr>
                                <td><textarea rows="3" class="form-control" name="Nom ou raison sociale"></textarea></td>
                                <td><textarea rows="3" class="form-control" name="Adresse"></textarea></td>
                                <td><textarea rows="3" class="form-control" name="Qualité"></textarea></td>
                            </tr>
                            </tbody>
                        </table>
                        <p class="card-text fw-bolder">
                        Si vous êtes par ailleurs titulaire d’un contrat de responsabilité civile décennale Constructeur Non 
                        Réalisateur par abonnement, joindre l’attestation d’assurance.
                        </p>
                </div>

         </div>
         <RouterLink to="/etape8" class="next"><button class="btnNext">Suivant</button></RouterLink>
    <RouterView />
      </div>
</template>
<script>
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

/* table style */

.table-responsive-stack tr {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
}


.table-responsive-stack td,
.table-responsive-stack th {
   display:block;
/*      
   flex-grow | flex-shrink | flex-basis   */
   -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.table-responsive-stack .table-responsive-stack-thead {
   font-weight: bold;
}

@media screen and (max-width: 768px) {
   .table-responsive-stack tr {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      border-bottom: 3px solid #ccc;
      display:block;
      
   }
   /*  IE9 FIX   */
   .table-responsive-stack td {
      float: left\9;
      width:100%;
   }
}

</style>

<script setup>

</script>
