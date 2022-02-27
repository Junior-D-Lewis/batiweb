<template>
  <div>
   
    <div class="bg-primary container-large vh-100">
        <div class="row h-25 w-50 mx-auto text-center">
            <span class="mx-auto my-auto" style="width:75vw;"> 
                <h1 class="h1 fs-1" style="">
                    Bienvenue sur votre espace client
                </h1>
            </span>
        </div>
        <div class="bg-light row d-grid text-center w-75 h-50 mx-auto rounded-3">
            <h2 class="fs-2">
                Trouve ton espace client !
            </h2>
            <p class="fs-4">Vous etes ?</p>
            <div role="button" style="background-image: url('@/assets/img-bg-courtier.jpeg' );" class="mb-5 my-auto  btn-courtier btn-outline-primary border border-primary rounded-3 w-50 mx-auto fs-4">
                <img class="w-25 rounded-circle" src="@/assets/img-user-courtier.jpg" alt="courtier">
                <p class="fs-6">
                    COURTIER
                </p>
            </div>
            <div role="button" style="background-image: url('@/assets/img-bg-client.jpeg' );" class="mb-5 my-auto btn-client  btn-outline-primary border border-primary rounded-3 w-50 mx-auto fs-4">
                <img class="w-25 rounded-circle" src="@/assets/img-user-client.jpg" alt="client">
                    <p class="fs-6">
                        CLIENT
                    </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import '@/assets/base.css';
@import '@/assets/bootstrap/css/bootstrap.css';
/* @import '@/assets/bootstrap/js/bootstrap.js'; */
</style>