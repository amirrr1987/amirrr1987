<template>
  <nav
    class="border-b border-cool-300 dark:border-cool-700 p-4 flex justify-between items-center lg:justify-start"
  >
    <NuxtLink to="/">
      <AppLogo class="w-12 h-12 object-contain" />
    </NuxtLink>

    <UButton
      :ui="{ base: 'lg:hidden', inline: 'flex z-50' }"
      :class="{ 'fixed end-8 sm:end-12': isOpen }"
      variant="soft"
      icon="i-heroicons-solid:menu"
      @click="toggleMenu"
    />

    <Transition name="fade">
      <NavbarList v-show="isOpen" @opened="toggleMenu" />
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
import { useWindowSize } from "@vueuse/core";
const { width, height } = useWindowSize();

const isOpen = ref<boolean>(false);

onMounted(() => {
  if (width.value >= 1024) {
    isOpen.value = true;
  } else {
    isOpen.value = false;
  }
});
watch(width, (newValue) => {
  if (newValue >= 1024) {
    isOpen.value = true;
  } else {
    isOpen.value = false;
  }
});

const toggleMenu = () => {
  if (width.value <= 1024) {
    isOpen.value = !isOpen.value;
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
