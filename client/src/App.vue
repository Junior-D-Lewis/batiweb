<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


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
            <a href="" class="nav-link">
                <RouterLink to="/adresse-book">Adress book</RouterLink>
            </a>
            <a href="" class="nav-link">
              <RouterLink to="/news">News</RouterLink>
            </a>
            <a href="" class="nav-link">
              <RouterLink to="/subscription">Subscription</RouterLink>
            </a>
            <a href="" class="nav-link">
              <RouterLink to="/contract">Contract</RouterLink>
            </a>
            <a href="" class="nav-link">
              <RouterLink to="/tele-insurance">Tele-insurance</RouterLink>
            </a>
        </form>
    </div>
    <form class="d_flex">
      <button class="nav-link btn btn-outline-success" type="submit">
          <RouterLink to="/login">Login</RouterLink>
      </button>
    </form>
  </div>
</nav>        
  </header>
  <div id="slide">

  </div>

  <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';
@import '@/assets/bootstrap/css/bootstrap.css';
/* @import '@/assets/bootstrap/js/bootstrap.js'; */
</style>