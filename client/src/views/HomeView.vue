<script setup>

</script>

<template>

  <main class="container">

      <div class="row" id="slide">
        <div class="col-12">
          <!-- <picture>
            <img src="@/assets/logo.jpeg" alt="img">
          </picture> -->
          <div class="card card-inverse text-center" style="height:80vh;">

            <!-- Image -->
            <img class="" src="@/assets/logo.jpeg" alt="Photo of sunset" style="height:75vh;">

            <!-- Text Overlay -->
            <div class="card-img-overlay text-uppercase" style="position:absolute; margin-top: 20%">
            <h4 class="card-title">BTP</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum placeat quos alias sint beatae praesentium veritatis ipsa atque, quae reprehenderit culpa officiis expedita fuga voluptas nesciunt ex repellendus impedit doloremque.</p>
            <p class="card-text"> france paris 2022</p>
            </div>

            <div class="card-body" style="height:75vh;">
            <span class="text-primary">see more!</span> 
            </div>

          </div>
         
           
        </div>
       
      </div>
      <h2 class="h2 text-success text-uppercase"> About Us </h2>
     <hr class="hr">
   
      <div class="row" id="section-aboutUs">
        <div class="row">

          <div class="col-6">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat delectus eum molestiae provident ipsum nihil ex, vero repellendus maiores in similique inventore est eius iusto ullam odio recusandae labore repellat.</p>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat delectus eum molestiae provident ipsum nihil ex, vero repellendus maiores in similique inventore est eius iusto ullam odio recusandae labore repellat.</p>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat delectus eum molestiae provident ipsum nihil ex, vero repellendus maiores in similique inventore est eius iusto ullam odio recusandae labore repellat.</p>
          
          </div>
          <div class="col-6">
            <div class="card card-inverse text-center" style="height:30vh;">

            <!-- Image -->
            <img class="" src="@/assets/logo.jpeg" alt="Photo of sunset" style="height:30vh;">
          </div>
          </div>
<br>
        </div>
        
        <div class="row">
          <div class="col-4">
            <div class="card card-inverse text-center" style="height:30vh;">
            <!-- Image -->
            <img class="" src="@/assets/logo.jpeg" alt="Photo of sunset" style="height:30vh;">
          </div>
          </div>
          <div class="col-4">
            <div class="card card-inverse text-center" style="height:30vh;">
            <!-- Image -->
            <img class="" src="@/assets/logo.jpeg" alt="Photo of sunset" style="height:30vh;">
          </div>
          </div>
          <div class="col-4">
            <div class="card card-inverse text-center" style="height:30vh;">
            <!-- Image -->
            <img class="" src="@/assets/logo.jpeg" alt="Photo of sunset" style="height:30vh;">
          </div>
          </div>
        </div>
      </div>  
        <h2 class="h2 text-success text-uppercase"> REALISATION </h2>
     <hr class="hr">
      <div class="row" id="section-realisation">
        
      </div>
       <h2 class="h2 text-success text-uppercase">PARTNER </h2>
     <hr class="hr">
      <div class="row" id="section-partner">
        
      </div>
       <h2 class="h2 text-success text-uppercase"> NEWS </h2>
     <hr class="hr">
      <div class="row" id="section-news">
        
      </div>
       <h2 class="h2 text-success text-uppercase"> CONTACT US </h2>
     <hr class="hr">
      <div class="row" id="section-contact">
        
      </div>
      <div class="row bg-primary text-white" id="footer" style="background-color:light-blue;">
        <p> made by allianceTech
        </p>
        <caption>copyright</caption>
      </div>
  </main>
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

