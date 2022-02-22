<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="grid" style="--gap:0.5rem;">
    <header>
        <RouterLink to="/"><img src="@/assets/logo.jpeg" alt="" class="logo"></RouterLink>

      <nav>
        <RouterLink to="/adresse-book">Adresse book</RouterLink>
        <RouterLink to="/news">News</RouterLink>
        <RouterLink to="/subscription">Subscription</RouterLink>
        <RouterLink to="/contract">Contract</RouterLink>
        <RouterLink to="/tele-insurance">Tele-insurance</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
      <div class="bg-light" id="acceuille" style="height:80vh">
      
    </div>
  </header>

  <RouterView />
    
    <div class="" id="section">
      
    </div>
    <div class="" id="footer">
      
    </div>
  </div>
  
</template>

<style scoped>
@import '@/assets/base.css';
 /* ************************ */
/* Reset */
/* ************************ */
/* box sizing */
*,*::after,*::before{
    box-sizing: border-box;
}
/* reset margins */
body,h1,h2,h3,h4,h5,p,picture,figure{
    margin: 0;
    padding: 0;
}
/* default */
h1,h2,h3,h4,h5,h6,p{
    font-weight: 400;
}
/* body */
body{
     line-height: 1.15;
     min-height: 100vh;
     font-size: var(--fs-400);
     font-family: var(--ff-normal);
     letter-spacing: 4px;
     background-color: hsl(var(--clr-dark));
     color: hsl(var(--clr-white));
}
section{
  padding: 1rem 0;
}
/* image */
img,picture{
    max-width: 1.5;
    display: block;
}
/* form */
input,button,textarea,select{
    font: inherit;
}
/* table */
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
    /* colors */
    --flow-space:1rem;
    --gap:5rem;
    --clr-white:0 0% 100%;
    --clr-dark:230 35% 7%;
    --clr-light:231 77% 90%;
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
/* ************************ */
/* utilities */
/* ************************ */
.flex{
    display: flex;
    gap:var(--gap,1rem);
}

.grid{
    display: grid;
    gap:var(--gap,1rem);
}
.flow > *:where(:not(:first-child)){
    margin-top: var(--flow-space,1rem);
    outline: 1px solid red;
}
/* .flow >*:not(:last-child){
    margin-bottom: var();
    outline: 1px solid red;
} */
.container{
    padding: 0;
    margin: 0 auto;
    max-width: 86rem;
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
.box{
    background-color: lightblue;
    padding: 3rem;
}
/* color */

.bg-red{
    background-color:hsl(var(--clr-dark));}
.bg-green{background-color:hsl(var(--clr-light));}
.bg-blue{background-color:hsl(var(--clr-white));}
.bg-white{background-color:hsl(var(--clr-white));}
.bg-red{
    background-color:hsl(var(--clr-dark));}


.text-red{
    background-color:hsl(var(--clr-dark));}
.text-green{background-color:hsl(var(--clr-light));}
.text-blue{background-color:hsl(var(--clr-white));}
.text-white{background-color:hsl(var(--clr-white));}
.text-red{
    background-color:hsl(var(--clr-dark));}

 /* typography  */

.ff-black{font-family: var(--ff-black);}
.ff-verd{font-family: var(--ff-verd);}
.ff-time{font-family: var(--ff-time);}

.letter-spacing-1{letter-spacing: 4.75px;}
.letter-spacing-2{letter-spacing: 2.7px;}
.letter-spacing-3{letter-spacing: 2.37px;}

.uppercase { text-transform:uppercase;}

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
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

.logo {
  width: 5rem;
  height: 3rem;
  display: block;
  margin: 0 auto 2rem;
}

a{
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
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
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
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
