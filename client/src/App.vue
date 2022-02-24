<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class=" text-success">
        <nav class="navbar navbar-expand-lg m-0 p-0">
            <div class="container-fluid p-0">
              <a class="navbar-brand" href="#"><img src="../src/assets/logo.jpeg" alt="logo" class="logo"></a>
              <button class="navbar-toggler bg-success  mr-0 border border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon mr-0"></span>
              </button>
              <div class="collapse justify-content-end navbar-collapse" id="navbarTogglerDemo02">
                <div class="d-none d-lg-flex d-sm-block d-md-block d-xm-block m-sm-0 p-sm-0 h-100 px-2 fs-6 gap-3">
                    <ul class="navbar-nav me-auto mb-2 px-2 mb-lg-0">
                        <li class="fw-bold fs-5  nav-item mr-lg-4 text-center">
                            <a class="nav-link py-3 link-success border-3 rounded-1 border-success border-bottom" aria-current="page" href="#">Address Book</a>
                        </li>
                         <li class="fw-bold fs-5 nav-item mr-lg-4 text-center">
                            <a class="nav-link py-3 link-success border-3 border-success border-bottom" aria-current="page" href="#">Contract</a>
                        </li>
                         <li class="fw-bold fs-5 nav-item mr-lg-4 text-center ">
                            <a class="nav-link py-3 link-success border-3 border-success border-bottom" aria-current="page" href="#">Subscription</a>
                        </li>
                         <li class="fw-bold fs-5 nav-item mr-lg-4 text-center">
                            <a class="nav-link py-3 link-success border-3 border-success border-bottom" aria-current="page" href="#">News</a>
                        </li>
                         <li class="fw-bold fs-5 nav-item mr-lg-5 text-center">
                            <a class="nav-link py-3 link-success border-3 border-success border-bottom" aria-current="page" href="#">Tele-insurance</a>
                        </li>
                      </ul><!-- Button trigger modal -->
                      <button type="button" class="btn border-3 m-auto px-5 btn-success ml-3 text-center rounded-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Login
                      </button>
                </div>
              </div>
            </div>
          </nav>    
<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>     
    <RouterView />
      </header>
</template>

<style scoped>
@import '@/assets/base.css';
@import '@/assets/bootstrap/css/bootstrap.min.css';
@import '@/assets/font-awesome-4.7.0/css/font-awesome.css';
/* remove animation for those who have remove it */
.logo{
  width: 65px;
  height: 45px;
  margin-left: 5px;
}
</style>
