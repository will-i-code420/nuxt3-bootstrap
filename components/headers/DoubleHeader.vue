<script lang="ts" setup></script>

<template>
  <div>
    <nav class="py-2 bg-light border-bottom">
      <div class="container d-flex flex-wrap">
        <ul class="nav me-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link link-dark px-2" to="#">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link link-dark px-2" to="#">Features</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link link-dark px-2" to="#">Pricing</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link link-dark px-2" to="#">FAQs</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link link-dark px-2" to="#">About</nuxt-link>
          </li>
        </ul>
        <ul class="nav">
          <li class="nav-item">
            <nuxt-link class="nav-link link-dark px-2" to="#">Login</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link link-dark px-2" to="#">Sign Up</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <header class="py-3 mb-4 border-bottom">
      <div class="container d-flex flex-wrap justify-content-center">
        <nuxt-link class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none" to="/">
          <i class="bi bi-bootstrap" width="40" height="32"></i>
          <span class="fs-4">Double Header</span>
        </nuxt-link>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search" data-np-checked="1" data-np-autofill-type="other">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="search..." aria-label="search" data-np-checked="1">
        </form>
      </div>
    </header>
  </div>
</template>

<style scoped></style>
