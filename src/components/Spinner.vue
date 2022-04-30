<template>
  <div class="spinner z-50">
    <img class="w-96" src="@/assets/img/vue-anim.svg" title="" alt="Loading..." />
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.spinner {
  @apply bg-[#dcedf1] fixed flex justify-center items-center;
  background-image: radial-gradient(
    circle farthest-corner at center,
    #f7fbfc 0%,
    #add9e4 100%
  );
}
</style>
