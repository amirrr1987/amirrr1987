<template>
  <div class="flex w-full items-center justify-between gap-3">
    <NuxtLink
      to="/"
      aria-label="Go to home page"
      class="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      @click="isOpen = false"
    >
      <TheLogo class="size-8 shrink-0 text-primary sm:size-9" />
      <span class="min-w-0 truncate">
        <span class="block text-sm font-semibold tracking-tight text-highlighted sm:text-base">
          Amir Maghami
        </span>
        <span class="hidden text-xs text-muted sm:block">Front-End Developer</span>
      </span>
    </NuxtLink>

    <nav class="hidden items-center gap-0.5 lg:flex">
      <ULink
        v-for="link in navigationLinks"
        :key="link.to"
        :to="link.to"
        class="rounded-lg px-2.5 py-2 text-sm font-medium text-muted transition-colors hover:text-highlighted xl:px-3"
        active-class="!text-primary"
      >
        {{ link.label }}
      </ULink>
    </nav>

    <div class="hidden items-center gap-1 lg:flex">
      <UColorModeButton variant="ghost" color="neutral" />
    </div>

    <div class="flex items-center gap-1 lg:hidden">
      <UColorModeButton variant="ghost" color="neutral" size="sm" />
      <UButton
        color="neutral"
        variant="ghost"
        size="lg"
        :icon="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
        :aria-label="isOpen ? 'Close navigation menu' : 'Open navigation menu'"
        :aria-expanded="isOpen"
        aria-controls="mobile-navigation"
        @click="isOpen = !isOpen"
      />
    </div>

    <Transition name="mobile-menu">
      <div
        v-if="isOpen"
        id="mobile-navigation"
        class="fixed inset-0 z-50 bg-slate-950/95 px-4 py-4 backdrop-blur-xl lg:hidden"
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
              <TheLogo class="size-8 text-primary" />
              <span class="truncate text-lg font-semibold text-highlighted">
                Amir Maghami
              </span>
            </NuxtLink>
            <UButton
              color="neutral"
              variant="ghost"
              size="xl"
              icon="i-heroicons-x-mark"
              aria-label="Close navigation menu"
              @click="isOpen = false"
            />
          </div>

          <nav class="grid flex-1 content-center gap-1 py-10">
            <ULink
              v-for="item in navigationLinks"
              :key="item.to"
              :to="item.to"
              class="rounded-xl px-4 py-4 text-base font-medium text-muted transition-colors hover:bg-white/5 hover:text-highlighted"
              active-class="!text-primary !bg-primary/10"
              @click="isOpen = false"
            >
              {{ item.label }}
            </ULink>
          </nav>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const isOpen = ref(false);

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Experiences", to: "/experiences" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact", to: "/contact" },
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
  transition: opacity 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}
</style>
