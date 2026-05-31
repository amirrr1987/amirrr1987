<template>
  <div class="flex w-full items-center justify-between gap-3">
    <NuxtLink
      to="/"
      aria-label="Go to home page"
      class="group flex min-w-0 items-center gap-2 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      @click="isOpen = false"
    >
      <span
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-lg shadow-primary/10 transition-transform duration-300 group-hover:scale-105"
      >
        <TheLogo class="h-6 w-6 text-primary" />
      </span>
      <span
        class="truncate text-base font-bold tracking-tight text-white sm:text-lg"
      >
        Amir Maghami
      </span>
    </NuxtLink>

    <UNavigationMenu
      class="hidden flex-1 justify-center lg:flex"
      :items="navigationLinks"
      :ui="{
        link: 'px-3 py-2 text-sm font-medium text-gray-300 hover:text-white data-[active=true]:text-primary',
      }"
    />

    <div class="hidden items-center gap-2 lg:flex">
      <UButton
        to="/contact"
        color="secondary"
        variant="outline"
        icon="i-heroicons-envelope"
        class="transition-transform duration-300 hover:scale-105"
      >
        Get in Touch
      </UButton>
    </div>

    <UButton
      class="lg:hidden"
      color="primary"
      variant="soft"
      size="lg"
      :icon="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
      :aria-label="isOpen ? 'Close navigation menu' : 'Open navigation menu'"
      :aria-expanded="isOpen"
      aria-controls="mobile-navigation"
      @click="isOpen = !isOpen"
    />

    <Transition name="mobile-menu">
      <div
        v-if="isOpen"
        id="mobile-navigation"
        class="fixed inset-0 z-50 overflow-y-auto bg-slate-950/95 px-4 py-4 backdrop-blur-xl lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div class="mx-auto flex min-h-full max-w-md flex-col">
          <div class="flex items-center justify-between gap-3">
            <NuxtLink
              to="/"
              class="flex min-w-0 items-center gap-2"
              @click="isOpen = false"
            >
              <TheLogo class="h-8 w-8 text-primary" />
              <span class="truncate text-lg font-bold text-white">
                Amir Maghami
              </span>
            </NuxtLink>
            <UButton
              color="primary"
              variant="ghost"
              size="xl"
              icon="i-heroicons-x-mark"
              aria-label="Close navigation menu"
              @click="isOpen = false"
            />
          </div>

          <nav class="grid flex-1 content-center gap-3 py-10">
            <UButton
              v-for="item in navigationLinks"
              :key="item.to"
              :to="item.to"
              color="neutral"
              variant="ghost"
              size="xl"
              class="justify-start rounded-2xl px-4 py-4 text-base transition-colors duration-200 hover:bg-white/10 hover:text-primary"
              :icon="item.icon"
              @click="isOpen = false"
            >
              {{ item.label }}
            </UButton>
          </nav>

          <UButton
            to="/contact"
            block
            size="xl"
            color="primary"
            icon="i-heroicons-envelope"
            class="mb-4 justify-center"
            @click="isOpen = false"
          >
            Start a conversation
          </UButton>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
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

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false;
  },
);

watch(isOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? "hidden" : "";
  }
});

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.body.style.overflow = "";
  }
});
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-0.75rem);
}
</style>
