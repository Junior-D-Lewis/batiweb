<script setup>

</script>

<template>

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
