<template>
  <TheHeader />
  <main :class="[mainUI.base, mainUI.container]">
    <slot />
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
const mainUI = {
  container: "py-6 sm:py-8 lg:py-10",
  base: "relative z-10 grid min-h-[calc(100svh-9rem)] overflow-x-hidden",
};
</script>
<style>
#__nuxt {
  min-height: 100svh;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
}
</style>
