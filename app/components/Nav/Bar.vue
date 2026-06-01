<template>
  <div class="flex w-full items-center justify-between gap-3">
    <NuxtLink
      to="/"
      aria-label="Go to home page"
      class="group flex min-w-0 items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      @click="isOpen = false"
    >
      <span
        class="relative flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 shadow-lg shadow-primary/15 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/50"
      >
        <span class="hero-glow-ring scale-75 opacity-0 transition-opacity group-hover:opacity-100" />
        <TheLogo class="relative z-10 size-6 text-primary" />
      </span>
      <span class="min-w-0 truncate">
        <span class="block font-mono text-sm font-bold tracking-tight text-highlighted sm:text-base">
          Amir Maghami
        </span>
        <span class="hidden text-xs text-muted sm:block">Fullstack Developer</span>
      </span>
    </NuxtLink>

    <UNavigationMenu
      class="hidden flex-1 justify-center lg:flex"
      :items="navigationLinks"
      :ui="{
        link: 'px-3 py-2 font-mono text-sm font-medium text-muted hover:text-highlighted data-[active=true]:text-primary',
        linkLeadingIcon: 'text-primary/80',
      }"
    />

    <div class="hidden items-center gap-2 lg:flex">
      <UButton
        variant="ghost"
        color="neutral"
        class="gap-1.5 font-mono text-muted hover:text-primary"
        aria-label="Open command menu"
        @click="toggle()"
      >
        <UIcon name="i-heroicons-magnifying-glass" class="size-4" />
        <UKbd>Ctrl</UKbd>
        <UKbd>K</UKbd>
      </UButton>
      <UColorModeButton variant="ghost" color="neutral" />
      <UButton
        to="/contact"
        color="primary"
        variant="soft"
        icon="i-heroicons-envelope"
        class="font-mono shadow-lg shadow-primary/10 transition-transform duration-300 hover:scale-105"
      >
        Get in Touch
      </UButton>
    </div>

    <div class="flex items-center gap-1 lg:hidden">
      <UColorModeButton variant="ghost" color="neutral" size="sm" />
      <UButton
        color="primary"
        variant="soft"
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
              <TheLogo class="size-8 text-primary" />
              <span class="truncate font-mono text-lg font-bold text-highlighted">
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

          <nav ref="mobileNav" class="grid flex-1 content-center gap-2 py-10">
            <UButton
              v-for="item in navigationLinks"
              :key="item.to"
              :to="item.to"
              color="neutral"
              variant="ghost"
              size="xl"
              class="mobile-nav-item justify-start rounded-2xl px-4 py-4 font-mono text-base transition-colors hover:bg-primary/10 hover:text-primary"
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
            class="mb-4 justify-center font-mono"
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
const { toggle } = useCommandPalette();

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

const mobileNav = ref<HTMLElement | null>(null);

watch(isOpen, async (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (!open || !import.meta.client || !mobileNav.value) return;

  const { default: gsap } = await import("gsap");
  const items = mobileNav.value.querySelectorAll(".mobile-nav-item");
  gsap.fromTo(
    items,
    { opacity: 0, x: -24 },
    { opacity: 1, x: 0, duration: 0.45, stagger: 0.07, ease: "back.out(1.4)" },
  );
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
