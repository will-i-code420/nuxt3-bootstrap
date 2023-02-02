<script lang="ts" setup></script>

<template>
  <article class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-md-between py-3 mb-4 border-bottom">
      <nuxt-link class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" to="/">
        <i class="bi bi-bootstrap me-2" role="img" aria-label="bootstrap" height="40" width="32"></i>
      </nuxt-link>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <nuxt-link class="nav-link px-2 link-secondary" to="#">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav-link px-2 link-dark" to="#">Features</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link px-2 link-dark" to="#">Pricing</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link px-2 link-dark" to="#">FAQs</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link px-2 link-dark" to="#">About</nuxt-link>
        </li>
      </ul>
      <div class="col-md-3 text-end">
        <button class="btn btn-outline-primary me-2">Login</button>
        <button class="btn btn-primary">Sign Up</button>
      </div>
    </header>
  </article>
</template>

<style scoped></style>
