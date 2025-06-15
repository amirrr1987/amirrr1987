<template>
  <TheHeader />
  <main :class="[mainUI.base, mainUI.container]">
    <slot />
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
  const mainUI = {
    container: 'py-10 px-4 sm:px-6 lg:px-10',
    base: 'grid'
  }
</script>
<style>
  #__nuxt {
    min-height: 100svh;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
  }
</style>
