<template>
  <div class="flex items-center gap-2">
    <TheLogo class="h-6 w-6 text-primary" />
    <span class="text-white font-bold text-lg">Amir Maghami</span>
  </div>

  <!-- Desktop Navigation -->
  <UNavigationMenu
    v-if="!isMobile"
    class="hidden md:flex gap-1"
    :items="navigationLinks"
  >
    <!-- <template #item="{ item }">
      <UButton
        :to="item.to"
        color="info"
        variant="ghost"
        class="hover:bg-slate-800/50 hover:text-primary transition-colors duration-200"
        :icon="item.icon"
      >
        {{ item.label }}dfg
      </UButton>
    </template> -->
  </UNavigationMenu>

  <!-- Mobile Toggle Button -->
  <UButton
    v-if="isMobile"
    @click="isOpen = !isOpen"
    color="info"
    variant="ghost"
    size="xl"
    class="md:hidden"
  />

  <!-- Mobile Navigation -->
  <Transition name="slide">
    <div
      v-if="isMobile && isOpen"
      class="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex flex-col items-center justify-center gap-8"
    >
      <UButton
        @click="isOpen = false"
        color="primary"
        variant="ghost"
        icon="i-heroicons-x-mark"
        class="absolute top-4 right-4"
      />

      <div
        v-for="item in navigationLinks"
        :key="item.to"
        class="w-full text-center"
      >
        <UButton
          :to="item.to"
          @click="isOpen = false"
          color="info"
          variant="ghost"
          size="xl"
          class="w-full max-w-xs text-xl hover:bg-slate-800/50 hover:text-primary transition-colors duration-200"
          :icon="item.icon"
        >
          {{ item.label }}
        </UButton>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

const windowSize = useWindowSize();
const isMobile = computed(() => windowSize.width.value < 768);
const isOpen = ref(false);

const navigationLinks = [
  { label: "Home", to: "/", icon: "i-heroicons-home" },
  { label: "About", to: "/about", icon: "i-heroicons-user" },
  { label: "Skills", to: "/skills", icon: "i-heroicons-light-bulb" },
  { label: "Projects", to: "/projects", icon: "i-heroicons-rocket-launch" },
  { label: "Experience", to: "/experiences", icon: "i-heroicons-briefcase" },
  { label: "Blog", to: "/blogs", icon: "i-heroicons-document-text" },
  { label: "Contact", to: "/contact", icon: "i-heroicons-envelope" },
];
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
