<script lang="ts" setup></script>

<template>
  <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <nuxt-link class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" to="/">
          <i class="bi bi-bootstrap me-2" role="img" aria-label="bootstrap" height="40" width="32"></i>
        </nuxt-link>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <nuxt-link class="nav-link px-2 link-secondary" to="#">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link class="nav-link px-2 link-white" to="#">Features</nuxt-link>
          </li>
          <li>
            <nuxt-link class="nav-link px-2 link-white" to="#">Pricing</nuxt-link>
          </li>
          <li>
            <nuxt-link class="nav-link px-2 link-white" to="#">FAQs</nuxt-link>
          </li>
          <li>
            <nuxt-link class="nav-link px-2 link-white" to="#">About</nuxt-link>
          </li>
        </ul>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" data-np-checked="1" data-np-autofill-type="other">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="search..." aria-label="search" data-np-checked="1">
        </form>
        <div class="text-end">
          <button class="btn btn-outline-light me-2">Login</button>
          <button class="btn btn-warning">Sign Up</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
