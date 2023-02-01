<script lang="ts" setup></script>

<template>
  <section class="container-fluid">
    <h1 class="visually-hidden">Features Examples</h1>
    <HeroesCenteredHero />
    <div class="b-divider"></div>
    <HeroesCenteredScreenshot />
    <div class="b-divider"></div>
    <HeroesResponsiveAlignImage />
    <div class="b-divider"></div>
    <HeroesVerticalCenterForm />
    <div class="b-divider"></div>
    <HeroesBorderImageShadow />
    <div class="b-divider"></div>
    <HeroesDarkMode />
    <div class="b-divider"></div>
  </section>
</template>

<style scoped>
.b-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, 0.1),
              inset 0 .125em .5em rgba(0, 0, 0, .15);
}
</style>
