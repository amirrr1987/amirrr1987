<template>
  <transition name="bounce">
    <Spinner v-if="visibility" class="absolute inset-0" />
  </transition>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import Spinner from "@/components/Spinner.vue";
const visibility = ref(true);
onMounted(() => {
  setTimeout(() => {
    visibility.value = false;
  }, 1200);
});

</script>

<style>
#app {
  @apply relative min-h-screen text-[#333] bg-[#dcedf1] subpixel-antialiased grid grid-rows-[max-content,1fr] overflow-hidden;
  background-image: radial-gradient(
    circle farthest-corner at center,
    #f7fbfc 0%,
    #add9e4 100%
  );
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
