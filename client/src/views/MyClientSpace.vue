<template>
  <div>
    <nav class="navbar navbar-expand-xl navbar-primary bg-light">
        <a href="#" class="navbar-brand"><i class="fa fa-cube"></i><img src="@/assets/logo.jpeg" alt="" class="logo"></a>  		
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Collection of nav links, forms, and other content for toggling -->
        <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">		
            <div class="navbar-nav ml-auto">
                <a href="#" class="nav-item nav-link link-success active fs-5 d-grid text-center" style=""><i class="fa fa-home"></i><span>Home</span></a>
                <a href="#" class="nav-item nav-link link-success fs-5 d-grid text-center"><i class="fa fa-gears"></i><span>Projects</span></a>
                <div class="nav-item dropdown">
                    <a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle user-action fs-5 link-success my-auto"><img src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg" class="avatar" alt="Avatar"> Antonio Moreno <b class="caret"></b></a>
                    <div class="dropdown-menu">
                        <a href="#" class="dropdown-item"><i class="fa fa-user-o"></i> Profile</a>
                        <a href="#" class="dropdown-item"><i class="fa fa-calendar-o"></i> Calendar</a>
                        <a href="#" class="dropdown-item"><i class="fa fa-sliders"></i> Settings</a>
                        <div class="divider dropdown-divider"></div>
                        <a href="#" class="dropdown-item"><i class="material-icons">&#xE8AC;</i> Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="bg-primary container-large vh-100">
        <div class="row h-25 w-50 mx-auto text-center">
            <span class="mx-auto my-auto" style="width:75vw;"> 
                <h1 class="h1 fs-1" style="">
                    Bienvenue sur vos espaces clients
                </h1>
            </span>
        </div>
        <div class="bg-light row d-grid text-center w-75 h-50 mx-auto rounded-3">
            <h2 class="fs-2">
                Trouvons votre espace client !
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