<template>
  <footer class="border-t border-cool-300 dark:border-cool-700 p-2 flex justify-between items-center">
    <ClientOnly>
      <UButton variant="solid" class="w-10 h-10 flex items-enter justify-center" @click="toggleColorMode">
        <UIcon :name="icon" :size="20" />
      </UButton>
    </ClientOnly>
    <NuxtLink
      to="/"
      class="border-l border-cool-300 dark:border-cool-700 px-4 py-2 flex items-center gap-2"
    >
      <Icon name="tabler:brand-github" />
      <span>github</span>
    </NuxtLink>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  useColorMode,
  type BasicColorMode,
  type UseColorModeReturn,
} from "@vueuse/core";

const options = [
  {
    value: "dark",
    icon: "i-heroicons-moon",
  },
  {
    value: "light",
    icon: "i-heroicons-sun",
  },
];

const colorMode = useColorMode();

const toggleColorMode = () => {
  const currentIndex = options.findIndex(
    (option) => option.value === colorMode.value
  );
  colorMode.value = options[(currentIndex + 1) % options.length]
    .value as BasicColorMode;
};

const icon = computed(() => {
  return (
    options.find((option) => option.value === colorMode.value)?.icon ||
    "i-heroicons-moon"
  );
});
</script>
