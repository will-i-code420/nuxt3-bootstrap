<script lang="ts" setup></script>

<template>
  <section>
    <h1 class="visually-hidden">Header Examples</h1>
    <HeadersSimple />
    <div class="b-divider"></div>
    <HeadersCentered />
    <div class="b-divider"></div>
    <HeadersThreePiece />
    <div class="b-divider"></div>
    <HeadersSplit />
    <div class="b-divider"></div>
    <HeadersLeftLinkRightSearch />
    <div class="b-divider"></div>
    <HeadersSearchWithContent />
    <div class="b-divider"></div>
    <HeadersDoubleHeader />
    <div class="b-divider"></div>
    <HeadersDarkDoubleIcons />
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
