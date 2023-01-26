<script lang="ts" setup></script>

<template>
  <div>
    <TheNavBar />
    <div class="container-fluid">
      <div class="row">
        <TheSidebarMenu />
        <section class="col-md-9 col-lg-10 px-md-4 ms-sm-auto">
          <h2>Main Section</h2>
          <slot />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
