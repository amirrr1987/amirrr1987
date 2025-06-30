<template>
  <UButton @click="toggleHandler" class="z-50 relative  md:hidden">=</UButton>
  <UNavigationMenu class="" :class="navClass" :items="navigationLinks" :orientation="orientation">
    <template #item="{ item }">
      <template v-if="item.to === '/'">
        <TheLogo class="h-4 w-4" />
        {{ item.label }}
      </template>
    </template>
  </UNavigationMenu>
</template>

<script setup lang="ts">
  import { useWindowSize } from '@vueuse/core'

  const windowSize = useWindowSize()
  const isMobile = computed(() => (windowSize.width.value < 768 ? true : false))
  const orientation = computed(() => (isMobile.value ? 'vertical' : 'horizontal'))

  const isOpen = ref(false)
  const getClass = () => {
    if (isMobile.value === true) {
      if (isOpen.value) {
        return 'fixed top-0 left-0 w-full h-full bg-slate-950/95 flex items-center justify-center z-40 translate-0'
      }
      if (isOpen.value === false) {
        return 'fixed top-0 left-0 w-full h-full bg-slate-950/95 flex items-center justify-center z-40 -translate-full'
      }
    } else {
      return 'relative flex-1'
    }
  }
  const navClass = computed(() => getClass())
  onMounted(() => {
    isOpen.value = false
    getClass()
  })
  const toggleHandler = () => {
    isOpen.value = !isOpen.value
  }
  const navigationLinks = [
    { label: 'Home', to: '/', icon: 'i-heroicons-home' },
    { label: 'About', to: '/about', icon: 'i-heroicons-user' },
    { label: 'Skills', to: '/skills', icon: 'i-heroicons-light-bulb' },
    { label: 'Projects', to: '/projects', icon: 'i-heroicons-rocket-launch' },
    { label: 'Experience', to: '/experiences', icon: 'i-heroicons-briefcase' },
    { label: 'Blog', to: '/blogs', icon: 'i-heroicons-document-text' },
    { label: 'Contact', to: '/contact', icon: 'i-heroicons-envelope' }
  ]
</script>
