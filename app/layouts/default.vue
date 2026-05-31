<template>
  <div class="grid min-h-svh grid-rows-[auto_1fr_auto]">
    <TheHeader />
    <main :class="[mainUI.base, mainUI.container]">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const mainUI = {
  container: "py-6 sm:py-8 lg:py-10",
  base: "relative z-10 grid min-h-[calc(100svh-9rem)] overflow-x-hidden",
};
</script>
