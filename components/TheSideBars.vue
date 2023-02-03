<script lang="ts" setup></script>

<template>
  <section class="d-flex flex-nowrap">
    <h1 class="visually-hidden">Sidebar Examples</h1>
    <SidebarsDark />
    <div class="b-divider b-vr"></div>
    <SidebarsLight />
    <div class="b-divider b-vr"></div>
    <SidebarsIconOnly />
    <div class="b-divider b-vr"></div>
    <SidebarsCollapsible />
    <div class="b-divider b-vr"></div>
    <SidebarsListGroup />
    <div class="b-divider b-vr"></div>
  </section>
</template>

<style scoped>
.b-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, 0.1),
              inset 0 .125em .5em rgba(0, 0, 0, 0.15);
}
.b-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh
}
</style>
