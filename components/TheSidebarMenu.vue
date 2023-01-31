<script lang="ts" setup>
  const sidebarLinks = ref([
    {
      label: 'Home',
      items: [
        { label: 'Dashboard', icon: 'bi bi-house', to: '/' },
      ]
    },
    {
      label: 'UI Components',
      items: [
        { label: 'Album', icon: 'bi bi-images', to: '/uikit/album' },
        { label: 'Features', icon: 'bi bi-list-stars', to: '/uikit/features' },
        { label: 'Headers', icon: '', to: '/uikit/headers' },
        { label: 'Heroes', icon: '', to: '/uikit/heroes' },
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
      <ul class="list-unstyled flex-column mb-auto">
        <template v-for="(link,i) in sidebarLinks" :key="link">
          <nav-menu-item :item="link"></nav-menu-item>
        </template>
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
