<script lang="ts" setup></script>

<template>
  <article class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <nuxt-link class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none" to="/">
        <i class="bi bi-bootstrap" width="40" height="32"></i>
        <span class="fs-4">Simple Header</span>
      </nuxt-link>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="#">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="#">Features</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="#">Pricing</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="#">FAQs</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="#">About</nuxt-link>
        </li>
      </ul>
    </header>
  </article>
</template>

<style scoped></style>
