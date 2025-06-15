<template>
  <nav class="flex-1 md:flex items-center gap-4 justify-around md:justify-start">
    <ULink
      v-for="link in navigationLinks"
      :key="link.to"
      :to="link.to"
      :class="props.isOpen ? 'absoulte left-0  top-0 inset-0 translate-0' : 'relative hidden -translate-full'"
      class="font-mono flex items-center gap-2 text-sm font-medium text-gray-200 hover:text-primary"
    >
      <UIcon :name="link.icon" class="!w-6 !h-6" />
      <span class="hidden md:inline">{{ link.label }}</span>
    </ULink>
  </nav>
</template>

<script setup lang="ts">
  interface Props {
    isOpen: boolean
  }
  const props = withDefaults(defineProps<Props>(), {
    isOpen: false
  })
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
