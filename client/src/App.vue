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
=======
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

    <div>
      <header class="bg-info m-0" style="height:80px">
          <RouterLink to="/"><img src="@/assets/logo.jpeg" alt="" class="logo"></RouterLink>

        <nav>
          <RouterLink to="/address-book">Adresse book</RouterLink>
          <RouterLink to="/news">News</RouterLink>
          <RouterLink to="/subscription">Subscription</RouterLink>
          <RouterLink to="/contract">Contract</RouterLink>
          <RouterLink to="/tele-insurance">Tele-insurance</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
        </nav>
       
    </header>
   


    <RouterView />


    </div>
  
</template>

<style scoped>
@import '@/assets/base.css';
@import '@/assets/bootstrap/css/bootstrap.min.css';
/* remove animation for those who have remove it */
@media (prefers-reduced-motion: reduce){
    *,*::before,*::after{
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
/* ****************** */
/* variables */
:root{
    --flow-space:1rem;
    --gap:5rem;
    /* font-sizes */
    --fs-400:1.125rem;
    --fs-300:1rem;
    --fs-500:1.75rem;
    --fs-600:2.25rem;
    --fs-700:3.5rem;
    --fs-800:4.25rem;
    --fs-900:9.375rem;
    /* font-families */
    --ff-black: "Arial black", serif;
    --ff-verd:"Verdanna", sans-serif;
    --ff-time: "Time new roman", sans-serif;
   
}
.container{
    padding: 0;
    margin: 0 auto;
    max-width: 100vw;
}

.sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
}

 /* typography  */

.ff-black{font-family: var(--ff-black);}
.ff-verd{font-family: var(--ff-verd);}
.ff-time{font-family: var(--ff-time);}

.fs-900{font-size: var(--fs-900);}
.fs-700{font-size: var(--fs-700);}
.fs-400{font-size: var(--fs-400);}
.fs-300{font-size: var(--fs-400);}
.fs-500{font-size: var(--fs-500);}
.fs-600{font-size: var(--fs-600);}
.fs-800{font-size: var(--fs-800);}

.fs-900,
.fs-700,
.fs-500,
.fs-600,
.fs-800{
    line-height: 1.1;
}

#app {
 /* max-width: 1280px; */
  margin: 0;
  padding: 0;
  font-weight: normal;
}
header >a:first-child{
  margin:auto
  ;
}
.logo {
  width: 6rem;
  height: 4rem;
  display: block;
}
nav{
  display: flex;
  margin-right: 0;
  justify-content: end;
}
nav > a{
  text-decoration: none;
  font-family: verdanna;
  font-weight: bolder;
  letter-spacing: 0.15rem;
  display: block;
  z-index: 3;
  box-shadow: 0rem 0rem 0.5rem lightblue;
  line-height:20px;
  margin-right: 2rem;
}

a:hover{
  color:white;
}

@media (hover: hover) {
  
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: auto 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;

  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
