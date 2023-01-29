<script lang="ts" setup>
  const footerLinks = ref([
    { icon: 'bi bi-twitter', href: 'https://twitter.com' },
    { icon: 'bi bi-instagram', href: 'https://www.instagram.com' },
    { icon: 'bi bi-facebook', href: 'https://www.facebook.com' }
  ])
</script>

<template>
  <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div class="col-md-4 d-flex align-items-center">
        <nuxt-link class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1" to="/">
          <i class="bi bi-bootstrap"></i>
        </nuxt-link>
        <span class="mb-3 mb-md-0 text-muted">Company Info</span>
      </div>
      <ul class="nav-col-md-4 justify-content-end list-unstyled d-flex">
        <template v-for="(link,i) in footerLinks" :key="link">
          <nav-menu-item :item="link"></nav-menu-item>
        </template>
      </ul>
    </footer>
  </div>
</template>

<style scoped></style>
