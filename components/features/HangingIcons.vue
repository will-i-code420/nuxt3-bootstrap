<script lang="ts" setup></script>

<template>
  <article class="container px-4 py-5">
    <h2 class="pb-2 border-bottom">
      Hanging Icons
    </h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <i class="bi bi-toggles2"></i>
        </div>
        <div>
          <h3 class="fs-2">Featured Title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.
          </p>
          <nuxt-link class="btn btn-primary" to="#">Primary Button</nuxt-link>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <i class="bi bi-cpu-fill"></i>
        </div>
        <div>
          <h3 class="fs-2">Featured Title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.
          </p>
          <nuxt-link class="btn btn-primary" to="#">Primary Button</nuxt-link>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <i class="bi bi-tools"></i>
        </div>
        <div>
          <h3 class="fs-2">Featured Title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.
          </p>
          <nuxt-link class="btn btn-primary" to="#">Primary Button</nuxt-link>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.icon-square {
  width: 3rem;
  height: 3rem;
  border-radius: .75rem;
}
</style>
