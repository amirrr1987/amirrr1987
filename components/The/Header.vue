<template>
  <header :class="headerUI.wrapper" class="bg-slate-900/75 shadow-md">
    <div :class="headerUI.container" class="flex items-center md:justify-between gap-x-4">
      <ULink to="/" class="flex items-center gap-2">
        <TheLogo />
      </ULink>
  
      <NavBar />

      <UButton
        to="/contact"
        size="xl"
        color="secondary"
        variant="outline"
        icon="i-heroicons-envelope"
        class="hidden md:flex w-full sm:w-auto transition-transform duration-300 hover:scale-105"
      >
        Get in Touch
      </UButton>
    </div>
  </header>
</template>

<script setup lang="ts">
  const headerUI = {
    wrapper: 'sticky top-0 z-50  border-b border-gray-800/50',
    container: 'py-3 px-4 sm:px-6 lg:px-10'
  }

 
</script>
