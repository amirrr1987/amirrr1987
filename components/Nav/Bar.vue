<template>
  <nav class="flex-1 flex justify-end md:justify-start z-50">
    <UButton
      size="xl"
      color="secondary"
      variant="outline"
      icon="i-heroicons-document-text"
      class="md:hidden relative"
      @click="toggleMenu"
    />
    <!-- 
      :class="isOpen ? 'absoulte left-0  top-0 inset-0 translate-0' : 'relative hidden -translate-full'"
    flex items-center gap-2 text-sm font-medium text-gray-200 hover:text-primary
      -->
    <div
      class="flex flex-col justify-center items-center gap-y-8 absolute left-0 top-0 w-screen h-screen bg-slate-950/90"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <TheLogo />
      <ul class="flex flex-col gap-y-4">
        <li v-for="link in navigationLinks" :key="link.to" :to="link.to">
          <ULink class="font-mono flex gap-4  z-50">
            <UIcon :name="link.icon" class="!w-8 !h-8" />
            <span class="inline">{{ link.label }}</span>
          </ULink>
        </li>
      </ul>
    </div>
  </nav>
  <!-- <nav class="flex-1 md:flex items-center gap-4 justify-around md:justify-start">

  </nav> -->
</template>

<script setup lang="ts">
  const isOpen = ref(false)
  const toggleMenu = () => {
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
