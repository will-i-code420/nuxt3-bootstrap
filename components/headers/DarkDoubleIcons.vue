<script lang="ts" setup></script>

<template>
  <header>
    <div class="px-3 py-2 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <nuxt-link class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none" to="/">
            <i class="bi bi-bootstrap" width="40" height="32"></i>
          </nuxt-link>
          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <nuxt-link class="nav-link text-secondary" to="#">
                <i class="bi bi-house d-block mx-auto mb-1" width="24" height="24"></i>
                Home
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="nav-link text-white" to="#">
                <i class="bi bi-speedometer2 d-block mx-auto mb-1" width="24" height="24"></i>
                Dashboard
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="nav-link text-white" to="#">
                <i class="bi bi-table d-block mx-auto mb-1" width="24" height="24"></i>
                Orders
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="nav-link text-white" to="#">
                <i class="bi bi-grid d-block mx-auto mb-1" width="24" height="24"></i>
                Products
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="nav-link text-white" to="#">
                <i class="bi bi-people-circle d-block mx-auto mb-1" width="24" height="24"></i>
                Customers
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="px-3 py-2 mb-3">
      <div class="container d-flex flex-wrap justify-content-center">
        <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search" dat-np-checked="1" data-np-autofill-type="other">
          <input type="search" class="form-control" placeholder="search..." arai-label="search" data-np-checked="1">
        </form>
        <div class="text-end">
          <button class="btn btn-light text-dark me-2">Login</button>
          <button class="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
