<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

n<template>
  <div id="menu">
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
  </header>
  <div id="slide">

  </div>

  <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';

:root {
  --color-green : #8AB73F;
  --color-blue : #0069B5;
  --color-red : #E3000F;
  --color-white: white;
  --color-black: #24244A;
}
body {
   margin: 0 2px;
   padding: 0;
   background-color: white;
   color:black;
   font-size: 3rem;
   font-family: Arial, sans-serif;
   letter-spacing: 4px;
   line-height: 1.15px;
}
header {
   margin: 0 auto;
   width: 90vw;
}
nav {
  margin-right: 0;
  text-align: end;
}
#menu {
  margin-top: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0;
  background-color: var(--color-blue);
  color: var(--color-white);
  padding-top: 1%;
}

#slide {
  height: 60vh;
  background-color: var(--color-blue);
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
  margin: 0 2rem 2rem;
}

a{
  text-decoration: none;
  color: var(--color-white);
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
    text-align: right;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
