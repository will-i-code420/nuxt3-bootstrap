<script lang="ts" setup></script>

<template>
  <div>
    <header class="p-3 mb-3 border-bottom">
      <div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">
        <div class="dropdown">
          <a href="#" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-bootstrap me-2" role="img" aria-label="bootstrap" height="40" width="32"></i>
          </a>
          <ul class="drowndown-menu text-small shadow">
            <li>
              <nuxt-link class="dropdown-item" to="#">Overview</nuxt-link>
            </li>
            <li>
              <nuxt-link class="dropdown-item" to="#">Inventory</nuxt-link>
            </li>
            <li>
              <nuxt-link class="dropdown-item" to="#">Customers</nuxt-link>
            </li>
            <li>
              <nuxt-link class="dropdown-item" to="#">Products</nuxt-link>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <nuxt-link class="dropdown-item" to="#">Reports</nuxt-link>
            </li>
            <li>
              Analytics
            </li>
          </ul>
        </div>
        <div class="d-flex align-items-center">
          <form class="w-100 me-3" role="search" data-np-checked="1" data-np-autofill-type="other">
            <input type="search" class="form-control" placeholder="search..." aria-label="search" data-np-checked="1">
          </form>
          <div class="flex-shrink-0 dropdown">
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
    <div class="container-fluid pb-3">
      <div class="d-grid gap-3" style="grid-template-columns: 1fr 2fr;">
        <div class="bg-light border rounded-3">
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
        </div>
        <div class="bg-light border rounded-3">
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
