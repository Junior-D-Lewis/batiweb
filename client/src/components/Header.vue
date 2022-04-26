<template>
  <main>
      <header class="mb-3">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <img src="../assets/logo.jpeg" alt="logo" class="logo">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse ml-3" id="navbarTogglerDemo02">
                <div class="d-none d-lg-flex d-sm-block d-md-block d-xm-block m-sm-0 p-sm-0 h-100 px-2 fs-6 gap-3">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
<div class="btn-group">
  <button type="button" class="btn bg-ligth dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Souscription
  </button>
  <ul class="dropdown-menu">
    <li>
      <RouterLink to="/souscription" class="nav-link " aria-current="page">Declaration nouvelle opération de chantier</RouterLink>
    </li>
    <li><RouterLink to="/suivi" class="nav-link " aria-current="page">Suivi état du projet</RouterLink></li>
  </ul>
</div>
<div class="btn-group">
  <button type="button" class="btn bg-ligth dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Gestion des contrats
  </button>
  <ul class="dropdown-menu">
    <li>
      <RouterLink to="/contract" class="nav-link " aria-current="page">Declaration de sinistre</RouterLink>
    </li>
    <li><RouterLink to="/suivi" class="nav-link " aria-current="page">Suivi de sinistre</RouterLink></li>
    <li><RouterLink to="/doc-admin" class="nav-link " aria-current="page">Documents administratifs</RouterLink></li>
  </ul>
</div>
<div class="btn-group">
   <RouterLink to="/news" class="btn bg-ligth parti" aria-current="page"> Gestion du portefeuille</RouterLink>
</div>
<div class="btn-group">
  <button type="button" class="btn bg-ligth dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Actualites
  </button>
  <ul class="dropdown-menu">
    <li>
      <RouterLink to="/news" class="nav-link " aria-current="page">Obligations d'assurance</RouterLink>
    </li>
    <li><RouterLink to="/suivi" class="nav-link " aria-current="page">Assurance construction</RouterLink></li>
    <li><RouterLink to="/suivi" class="nav-link " aria-current="page">Fiches methodes pathologies du batiment</RouterLink></li>
  </ul>
</div>
<div class="btn-group">
  <button type="button" class="btn bg-ligth dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Carnet d'adresse
  </button>
  <ul class="dropdown-menu">
    <li>
      <RouterLink to="/address-book" class="nav-link " aria-current="page">Gestionnaire sinistre</RouterLink>
    </li>
    <li><RouterLink to="/suivi" class="nav-link " aria-current="page">Souscripteur</RouterLink></li>
    <li><RouterLink to="/suivi" class="nav-link " aria-current="page">Comptable</RouterLink></li>
    <li><RouterLink to="/suivi" class="nav-link " aria-current="page">Service courtage</RouterLink></li>
  </ul>
</div>
<div class="btn-group">
   <RouterLink to="/tele-insurance" class="btn bg-ligth parti" aria-current="page">Tele assurance</RouterLink>
</div>
                      </ul><!-- Button trigger modal -->
                </div>
              </div>
            </div>
          </nav> 
      </header>

    
  </main>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
@import '@/assets/base.css';
@import '@/assets/bootstrap/css/bootstrap.css';
/* @import '@/assets/bootstrap/js/bootstrap.js'; */

.logo{
  margin-left: 3%;
}
.parti{
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
}
.parti:hover{
  text-decoration: none;
  color: #000;
}
</style>