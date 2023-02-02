<script lang="ts" setup></script>

<template>
  <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <nuxt-link class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none" to="/">
          <i class="bi bi-bootstrap me-2" role="img" aria-label="bootstrap" height="40" width="32"></i>
        </nuxt-link>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <nuxt-link class="nav-link px-2 link-secondary" to="#">Overview</nuxt-link>
          </li>
          <li>
            <nuxt-link class="nav-link px-2 link-dark" to="#">Inventory</nuxt-link>
          </li>
          <li>
            <nuxt-link class="nav-link px-2 link-dark" to="#">Customers</nuxt-link>
          </li>
          <li>
            <nuxt-link class="nav-link px-2 link-dark" to="#">Products</nuxt-link>
          </li>
        </ul>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" data-np-checked="1" data-np-autofill-type="other">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="search..." aria-label="search" data-np-checked="1">
        </form>
        <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" class="rounded-circle" width="32" height="32">
          </a>
          <ul class="dropdown-menu text-small">
            <li>
              <nuxt-link class="dropdown-item" to="#">New Project</nuxt-link>
            </li>
            <li>
              <nuxt-link class="dropdown-item" to="#">Settings</nuxt-link>
            </li>
            <li>
              <nuxt-link class="dropdown-item" to="#">Profile</nuxt-link>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <nuxt-link class="dropdown-item" to="#">Sign Out</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
