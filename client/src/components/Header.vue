<template>
  <main>
      <header>
        <nav class="navbar navbar-expand-lg m-0 p-0">
            <div class="container-fluid p-0">
              <div class="navbar-brand" >
                <img src="../assets/logo.jpeg" alt="logo" class="logo">
              </div>
              <button class="navbar-toggler bg-success  mr-0 border border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon mr-0"></span>
              </button>
              <div class="collapse justify-content-end navbar-collapse" id="navbarTogglerDemo02">
                <div class="d-none d-lg-flex d-sm-block d-md-block d-xm-block m-sm-0 p-sm-0 h-100 px-2 fs-6 gap-3">
                    <ul class="navbar-nav me-auto mb-2 px-2 mb-lg-0">
                        <li class="fw-bold fs-5 nav-item mr-lg-4 text-center ">
                            <RouterLink to="/souscription" class="nav-link py-3 link-success border-3 border-success border-bottom" aria-current="page">Souscription</RouterLink>
                        </li>
                        <li class="fw-bold fs-5  nav-item mr-lg-4 text-center">
                            <RouterLink to="/address-book" class="nav-link py-3 link-success border-3 rounded-1 border-success border-bottom" aria-current="page" >Carnet d'adresse</RouterLink>
                        </li>
                        <li class="fw-bold fs-5  nav-item mr-lg-4 text-center">
                            <RouterLink to="/portefeuille" class="nav-link py-3 link-success border-3 rounded-1 border-success border-bottom" aria-current="page" >Gestion du portefeuille</RouterLink>
                        </li>
                         <li class="fw-bold fs-5 nav-item mr-lg-4 text-center">
                            <RouterLink to="/contract" class="nav-link py-3 link-success border-3 border-success border-bottom" aria-current="page">Gestion des contrats</RouterLink>
                        </li>
                         <li class="fw-bold fs-5 nav-item mr-lg-4 text-center">
                            <RouterLink to="/news" class="nav-link py-3 link-success border-3 border-success border-bottom" aria-current="page">Actualites</RouterLink>
                        </li>
                         <li class="fw-bold fs-5 nav-item mr-lg-5 text-center">
                            <RouterLink to="tele-insurance" class="nav-link py-3 link-success border-3 border-success border-bottom" aria-current="page">Tele assurance</RouterLink>
                        </li>
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
</style>