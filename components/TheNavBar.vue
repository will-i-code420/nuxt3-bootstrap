<script lang="ts" setup></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-lg-flex" id="navbarSupportedContent">
        <nuxt-link class="navbar-brand col-lg-3 me-0" to="#">Navbar Logo</nuxt-link>
        <ul class="navbar-nav col-lg-6 justify-content-lg-center">
          <li class="nav-item">
            <nuxt-link class="nav-link active" aria-current="page" to="#">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#">Link</nuxt-link>
          </li>
        </ul>
        <div class="d-lg-flex col-lg-3 justify-content-lg-end">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
