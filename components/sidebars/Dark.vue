<script lang="ts" setup></script>

<template>
  <article class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px;">
    <nuxt-link class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <i class="bi bi-bootstrap pe-none me-2" width="40" height="32"></i>
      <span class="fs-4">Sidebar</span>
    </nuxt-link>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <nuxt-link class="nav-link" to="#">
          <i class="bi bi-house pe-none me-2" width="16" height="16"></i>
          Home
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link text-white" to="#">
          <i class="bi bi-speedometer2 pe-none me-2" width="16" height="16"></i>
          Dashboard
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link text-white" to="#">
          <i class="bi bi-table pe-none me-2" width="16" height="16"></i>
          Orders
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link text-white" to="#">
          <i class="bi bi-grid pe-none me-2" width="16" height="16"></i>
          Products
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link text-white" to="#">
          <i class="bi bi-people-circle pe-none me-2" width="16" height="16"></i>
          Customers
        </nuxt-link>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" class="rounded-circle me-2" width="32" height="32">
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
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
