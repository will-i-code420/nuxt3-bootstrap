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
  const computedClass = computed(() => ({
    'nav-item': props.item.to,
    'ms-3': props.item.href
  }))
  const checkActiveRoute = item => {
    return route.path === item.to
  }
</script>

<template>
  <li :class="computedClass">
    <h3 v-if="root" class="text-muted">{{ item.label }}</h3>
    <nuxt-link v-if="item.to && !item.items" class="nav-link" :class="{ active: checkActiveRoute(item) }" :to="item.to">
      <i :class="item.icon" class="pe-none me-2"></i>
      {{ item.label }}
    </nuxt-link>
    <a v-if="item.href && !item.items" :href="item.href" class="nav-link text-muted" target="_blank">
      <i :class="item.icon"></i>
      {{ item.label }}
    </a>
    <Transition v-if="item.items">
      <ul class="nav nav-pills flex-column mb-auto">
        <nav-menu-item
          v-for="(child,i) in item.items"
          :key="child"
          :item="child"
          :root="false"
        ></nav-menu-item>
      </ul>
    </Transition>
  </li>
</template>

<style scoped>
</style>
