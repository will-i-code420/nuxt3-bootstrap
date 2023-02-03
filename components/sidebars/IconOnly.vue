<script lang="ts" setup></script>

<template>
  <article class="d-flex flex-column flex-shrink-0 ng-light" style="width: 4.5rem;">
    <nuxt-link class="d-block p-3 link-dark text-decoration-none" to="/" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="icon only">
      <i class="bi bi-bootstrap pe-none" width="40" height="32">
        <span class="visually-hidden">icon only</span>
      </i>
    </nuxt-link>
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <nuxt-link class="nav-link py-3 border-bottom rounded-0" to="#" data-bs-toggle="tooltip" data-bs-placement="right" arai-label="home" data-bs-original-title="home">
          <i class="bi bi-home pe-none" role="img" arai-label="home"></i>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link py-3 border-bottom rounded-0" to="#" data-bs-toggle="tooltip" data-bs-placement="right" arai-label="dashboard" data-bs-original-title="dashboard">
          <i class="bi bi-speedometer2 pe-none" role="img" arai-label="dashboard"></i>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link py-3 border-bottom rounded-0" to="#" data-bs-toggle="tooltip" data-bs-placement="right" arai-label="orders" data-bs-original-title="orders">
          <i class="bi bi-table pe-none" role="img" arai-label="orders"></i>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link py-3 border-bottom rounded-0" to="#" data-bs-toggle="tooltip" data-bs-placement="right" arai-label="products" data-bs-original-title="products">
          <i class="bi bi-grid pe-none" role="img" arai-label="products"></i>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link py-3 border-bottom rounded-0" to="#" data-bs-toggle="tooltip" data-bs-placement="right" arai-label="dashboard" data-bs-original-title="dashboard">
          <i class="bi bi-speedometer2 pe-none" role="img" arai-label="dashboard"></i>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link py-3 border-bottom rounded-0" to="#" data-bs-toggle="tooltip" data-bs-placement="right" arai-label="customers" data-bs-original-title="customers">
          <i class="bi bi-people-circle pe-none" role="img" arai-label="customers"></i>
        </nuxt-link>
      </li>
    </ul>
    <div class="dropdown border-top">
      <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" arai-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" class="rounded-circle" width="24" height="24">
      </a>
      <ul class="dropdown-menu text-small shadow">
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
          <nuxt-link class="dropdown-item" to="#">
            <hr class="dropdown-divider">
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="dropdown-item" to="#">Sign Out</nuxt-link>
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped></style>
