<template>
    <div id="etape1">
    <header-vue/>
     <header class="bg-info text-center bg-gradient"><h2> 1 - IDENTIFICATION DU DEMANDEUR D'ASSURANCE </h2> </header>
   <div class="tout">
       <div class="uphere">
           <form>
            <div class="mb-3">
                <label for="one" class="form-label"><span>.</span>&nbsp; Nom et prémon ou raison sociale ( sigle éventuel)*:  </label>
                <input type="text" style="border-bottom: 2px dotted;" class="form-control" id="one">    
            </div>
            <div class="mb-3">
                <label for="two" class="form-label">Forme juridique *:</label>
                <input type="text" class="form-control" id="two">    
            </div>

            <div class="mb-3">
                <label for="one" class="form-label"><span>.</span>&nbsp; Adresse du siége social*:  </label>
                <input type="text" style="border-bottom: 2px dotted;" class="form-control" id="one">    
            </div>

            <div class="row g-3 mb-3">
            <div class="col-sm-6">
                <label for="firstName" class="form-label">Code Postal*:</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
              </div>
  
              <div class="col-sm-6">
                <label for="lastName" class="form-label">Ville *:</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required>               
              </div>
            </div>

            <div class="mb-3">
                <label for="one" class="form-label"><span>.</span>&nbsp; N° téléphone fixe </label>
                <input type="text" style="border-bottom: 2px dotted;" class="form-control" id="one">    
            </div>

            <div class="mb-3">
                <label for="one" class="form-label"><span>.</span>&nbsp; Adresse de correspondance si différente du siège social*:  </label>
                <input type="text" style="border-bottom: 2px dotted;" class="form-control" id="one">    
            </div>

            <div class="row g-3 mb-3">
                <div class="col-sm-6">
                    <label for="firstName" class="form-label">Code Postal*:</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
                  </div>
      
                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">Ville *:</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required>               
                  </div>
            </div>

                <div class="input-group mb-3 ">
                    <label for="lastName" class="input-group">Adresse e-mail de l’entreprise  *:</label> <br>
                    <span class="input-group-text" id="addon-wrapping">@</span>
                    <input type="text" class="form-control" placeholder="e-mail" aria-label="e-mail" aria-describedby="addon-wrapping">
                </div>

                <div class="mb-3">
                    <label for="one" class="form-label"><span>.</span>&nbsp; <span>.</span> Nom et prénom de la personne chargée des assurances*:  </label>
                    <input type="text" style="border-bottom: 2px dotted;" class="form-control" id="one">    
                </div>

                <div class="row g-3 mb-3">
                    <div class="col-sm-6">
                        <label for="firstName" class="form-label">N° téléphone fixe *:</label>
                        <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
                      </div>
          
                      <div class="col-sm-6">
                        <label for="lastName" class="form-label">N° de téléphone portable *:</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" value="" required>               
                      </div>
                </div>

                <div class="input-group mb-3 ">
                    <label for="lastName" class="input-group">Adresse e-mail :</label> <br>
                    <span class="input-group-text" id="addon-wrapping">@</span>
                    <input type="text" class="form-control" placeholder="e-mail" aria-label="e-mail" aria-describedby="addon-wrapping">
                </div>

                <div class="row g-3 mb-3">
                    <div class="col-sm-6">
                        <label for="firstName" class="form-label"><span>.</span> N° SIREN *:</label>
                        <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
                      </div>
          
                      <div class="col-sm-6">
                        <label for="lastName" class="form-label">Code A.P.E./N.A.F. *:</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" value="" required>               
                      </div>
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">&nbsp;<span class="bo">.</span> Origine du contact *: Site Internet
                    </label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="choix" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">oui</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="choix" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">non</label>
                      </div>
                  </div>

                 


           </form>
<!--    la parti du cadre a l'auxilliaire   -->
       </div>

        

        <div class="downhere">
            <header><h2> CADRE RESERVE A L'AUXILLIAIRE</h2></header>
            <nav class="clientpart">
            <form>
                <table class="table">
                    
                    <tbody>
                        <tr>
                         <td><div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">N° Client *:</span>
                            <input type="text" class="form-control" placeholder="N° Client" aria-label="N° Client" aria-describedby="basic-addon1">
                          </div></td>
                         <td><div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">N° Sociétaire</span>
                            <input type="text" class="form-control" placeholder="N° Sociétaire" aria-label="Username" aria-describedby="basic-addon1">
                          </div></td>
                        </tr>
                    </tbody>
                    

                        

                        
                    
                </table>

                <table class="table">
                    <tbody>
                        <tr>
                            <td><div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">N° Projet *: DO</span>
                                <input type="text" class="form-control" placeholder="DO" aria-label="DO" aria-describedby="basic-addon1">
                              </div></td>

                              <td><div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">CNR</span>
                                <input type="text" class="form-control" placeholder="CNR" aria-label="CNR" aria-describedby="basic-addon1">
                              </div></td>

                              <td><div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">TRC</span>
                                <input type="text" class="form-control" placeholder="TRC" aria-label="TRC" aria-describedby="basic-addon1">
                              </div></td>

                              <td><div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">SCI</span>
                                <input type="text" class="form-control" placeholder="SCI" aria-label="SCI" aria-describedby="basic-addon1">
                              </div></td>

                             

                              <td><div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">CCRD</span>
                                <input type="text" class="form-control" placeholder="CCRD" aria-label="CCRD" aria-describedby="basic-addon1">
                              </div></td>
                        </tr>
                    </tbody>
                </table>

                <table class="table">
                    <tbody>
                        <tr>
                            <td><div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Code Inspecteur/Courtier *:</span>
                                <input type="text" class="form-control" placeholder="Code Inspecteur/Courtier" aria-label="Code Inspecteur/Courtier" aria-describedby="basic-addon1">
                              </div></td>

                              <td><div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Code contrat *: DO</span>
                                <input type="text" class="form-control" placeholder="Code contrat : DO" aria-label="Code contrat : DO" aria-describedby="basic-addon1">
                              </div></td>

                              <td><div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">CNR *:</span>
                                <input type="text" class="form-control" placeholder="CNR" aria-label="CNR" aria-describedby="basic-addon1">
                              </div></td>


                              <td><div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">TRC *:</span>
                                <input type="text" class="form-control" placeholder="TRC" aria-label="TRC" aria-describedby="basic-addon1">
                              </div></td>

                              <td><div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">SCI *:</span>
                                <input type="text" class="form-control" placeholder="SCI" aria-label="SCI" aria-describedby="basic-addon1">
                              </div></td>

                              <td><div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">CCRD *:</span>
                                <input type="text" class="form-control" placeholder="CCRD" aria-label="CCRD" aria-describedby="basic-addon1">
                              </div></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            </nav>
        </div>

  <RouterLink to="/etape2" class="next"><button class="btnNext">Suivant</button></RouterLink>
        
   </div>
    <RouterView />
      </div>
</template>
<script setup>
import MyClientSpace from './MyClientSpace.vue';
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

.tout{
  margin-left: 20%;
  width: 800px;

}
.downhere header{
  text-align: center;
  border-style: none;
}

.clientpart{
            border-style: solid;
            border-width: medium;
            border-color: blue;
        }

</style>