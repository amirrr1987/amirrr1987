<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style>
#app {
  @apply relative min-h-screen text-[#333] bg-[#dcedf1] subpixel-antialiased grid grid-rows-[max-content,1fr];
  background-image: radial-gradient(
    circle farthest-corner at center,
    #f7fbfc 0%,
    #add9e4 100%
  );
}
</style>
