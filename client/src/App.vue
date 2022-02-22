<template>
  <div id="menu">
    <header>      
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">  
            <RouterLink to="/"><img src="@/assets/logo.jpeg" alt="Logo" class="logo"></RouterLink>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <form class="d-flex">
          <RouterLink to="/adresse-book" class="nav-link">Adress book</RouterLink>
          <RouterLink to="/news" class="nav-link">News</RouterLink>
          <RouterLink to="/subscription" class="nav-link">Subscription</RouterLink>
          <RouterLink to="/contract" class="nav-link">Contract</RouterLink>
          <RouterLink to="/tele-insurance" class="nav-link">Tele-insurance</RouterLink>
        </form>
    </div>
    <form class="d_flex">
          <RouterLink to="/login" class="login btn-outline-primary nav-link">Login</RouterLink>
    </form>
  </div>
</nav>        
  </header>
  <div class="bg-primary py-4" id="slide" style="height: 70vh;">

  </div>
   <div class="" id="main">
      
    </div>
    <div class="" id="section">
      
    </div>
    <div class="" id="footer">
      
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {

}
</script>

<style>

</style>