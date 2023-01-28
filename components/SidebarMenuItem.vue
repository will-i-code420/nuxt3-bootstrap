<script lang="ts" setup>
  const route = useRoute()

  const props = defineProps({
    item: {
      type: Object,
      required: false,
      default: () => ({})
    },
    root: {
      type: Boolean,
      required: false,
      default: true
    }
  })
  const checkActiveRoute = item => {
    return route.path === item.to
  }
</script>

<template>
  <li class="nav-item">
    <h3 v-if="root" class="text-muted">{{ item.label }}</h3>
    <nuxt-link v-if="item.to && !item.items" class="nav-link" :class="{ active: checkActiveRoute(item) }" :to="item.to">
      <i :class="item.icon" class="pe-none me-2"></i>
      {{ item.label }}
    </nuxt-link>
    <Transition v-if="item.items">
      <ul class="nav nav-pills flex-column mb-auto">
        <sidebar-menu-item
          v-for="(child,i) in item.items"
          :key="child"
          :item="child"
          :root="false"
        ></sidebar-menu-item>
      </ul>
    </Transition>
  </li>
</template>

<style scoped>
</style>
