<script lang="ts" setup>
  const sidebarLinks = ref([
    {
      label: 'Home',
      items: [
        { label: 'Dashboard', icon: '', to: '/' },
      ]
    },
    {
      label: 'UI Components',
      items: [
        { label: '', icon: '', to: '' },
      ]
    },
    {
      label: 'Bootstrap Themes',
      items: [
        { label: '', icon: '', to: '' },
      ]
    },
    {
      label: 'Utilities',
      items: [
        { label: '', icon: '', to: '' },
      ]
    },
    {
      label: 'Pages',
      items: [
        { label: '', icon: '', to: '' },
      ]
    },
    {
      label: 'Get Started',
      items: [
        { label: '', icon: '', to: '' },
      ]
    }
  ])
</script>

<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3 sidebar-sticky">
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <nuxt-link class="nav-link" :class="{active: 'router-link-exact-active'}" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
            </svg>
            Home
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
            </svg>
            Link Label
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
            </svg>
            Link Label
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
            </svg>
            Link Label
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
            </svg>
            Link Label
          </nuxt-link>
        </li>
      </ul>
      <hr>
      <div class="dropdown">
        <nuxt-link class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" to="#" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" class="rounded-circle me-2" width="32" height="32">
          <strong>mdo</strong>
        </nuxt-link>
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
            <hr class="dropdown-divider">
          </li>
          <li>
            <nuxt-link class="dropdown-item" to="#">Sign Out</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
