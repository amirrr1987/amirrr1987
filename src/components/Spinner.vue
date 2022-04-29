<template>
  <div class="spinner">
    <VueIcon class="absolute inset-0 m-auto" />
  </div>
</template>

<script setup lang="ts">
import VueIcon from "@/components/VueIcon.vue";
</script>

<style>
.spinner {
  @apply bg-[#dcedf1] fixed;
  background-image: radial-gradient(
    circle farthest-corner at center,
    #f7fbfc 0%,
    #add9e4 100%
  );
}
</style>
