<script setup>

</script>

<template>

  <main class="container">

    <div class="container-large d-grid gap-2">
            <div class="row w-50 mx-auto text-center">
                <span class="mx-auto my-auto" style="width:75vw;"> 
                    <h1 class="h1 fs-1" style="">
                        Bienvenue sur votre espace
                    </h1>
                </span>
            </div>
            <div  id="bg_espace" class="bg-light row d-grid text-center w-75 gap-3 mx-auto rounded-3">
                <h2 class="fs-2">
                    Trouvons votre espace !
                </h2>
                <p class="fs-4">Vous etes ?</p>
                <div role="button" style="background-image: url('@/assets/img-bg-courtier.jpeg' );" class="mb-5 my-auto  btn-courtier btn-outline-primary border border-primary rounded-3 w-50 mx-auto fs-4">
                    <img class="w-25 rounded-circle" src="@/assets/img-user-courtier.jpg" alt="courtier">
                    <br>
                    <b class="fs-6">
                        COURTIER
                    </b>
                </div>
                <div role="button" style="background-image: url('@/assets/img-bg-client.jpeg' );" class="mb-5 my-auto btn-client  btn-outline-primary border border-primary rounded-3 w-50 mx-auto fs-4">
                    <img class="w-25 rounded-circle" src="@/assets/img-user-client.jpg" alt="client">
                        <br>
                        <b class="fs-6">
                            PROFESSIONNEL DU BTP
                        </b>
                </div>
            </div>
        </div>
          
        
            <!-- Remove the container if you want to extend the Footer to full width. -->
    <div class="container my-5">
      <!-- Footer -->
      <footer
              class="text-center text-lg-start text-dark"
              style="background-color: #ECEFF1"
              >
        <!-- Section: Social media -->
            <section class="mt-5 bg-primary">
            <!-- Grid row-->
            <div class="row text-center d-flex justify-content-center pt-5">
              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white">About us</a>
                </h6>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white">REALISATION</a>
                </h6>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white">Contact</a>
                </h6>
              </div>
              <!-- Grid column -->
            </div>
            <!-- Grid row-->
          </section>
      
        <!-- Section: Links  -->
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <!-- Grid row -->
            <div class="row mt-3">
              <!-- Grid column -->
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <!-- Content -->
                <h6 class="text-uppercase fw-bold  letter-spacing-4">BATIWEB</h6>
                <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style="width: 60px; background-color: #7c4dff; height: 2px"
                    />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint suscipit incidunt eveniet unde enim corporis nobis eaque minima et, eos, earum veniam? Maiores dolor nulla totam fuga est, architecto natus?
                </p>
              </div>
              <!-- Grid column -->


              <!-- Grid column -->
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold">Useful links</h6>
                <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style="width: 60px; background-color: #7c4dff; height: 2px"
                    />
                <p>
                  <a href="#!" class="text-dark">Your Account</a>
                </p>
                <p>
                  <a href="#!" class="text-dark">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!" class="text-dark">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!" class="text-dark">Help</a>
                </p>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div id="image" class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold">Contact</h6>
                <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style="width: 60px; background-color: #7c4dff; height: 2px"
                    />
                <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
                <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
              <!-- Grid column -->
            </div>
            <!-- Grid row -->
          </div>
        </section>
        <!-- Section: Links  -->

        <!-- Copyright -->
        <div
            class="text-center p-3"
            style="background-color: rgba(0, 0, 0, 0.2)"
            >
          © 2022 Copyright:
          <a class="text-dark" href="#"><i>AllianceTech</i></a
            >
        </div>
        <!-- Copyright -->
      </footer>
      <!-- Footer -->
    <!-- End of .container -->
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
main{
  background-image:url('../assets/background.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
#bg_espace{
  opacity: .9 !important;
}
#bg_espace *{
  opacity: 1 !important;
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

