<template>
  <Spinner v-if="visibility" class="absolute inset-0" />
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import Spinner from "@/components/Spinner.vue";
const visibility = ref(false);
onMounted(() => {
  visibility.value = true;
  setTimeout(() => {
    visibility.value = false;
  }, 3000);
});
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
