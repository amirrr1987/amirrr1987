<template>
  <footer class="font-footer relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-md">
    <UContainer class="py-8 sm:py-10">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="space-y-3 sm:col-span-2 lg:col-span-1">
          <NuxtLink to="/" class="inline-flex items-center gap-2">
            <TheLogo class="size-7 text-primary" />
            <span class="text-base text-highlighted">Amir Maghami</span>
          </NuxtLink>
          <p class="max-w-xs text-sm leading-relaxed text-muted">
            Fullstack developer crafting fast, polished Vue & Nuxt experiences.
          </p>
        </div>

        <div>
          <p class="page-eyebrow mb-3">Navigate</p>
          <ul class="space-y-2">
            <li v-for="link in navLinks" :key="link.to">
              <ULink
                :to="link.to"
                class="text-sm text-muted transition-colors hover:text-primary"
              >
                {{ link.label }}
              </ULink>
            </li>
          </ul>
        </div>

        <div>
          <p class="page-eyebrow mb-3">Connect</p>
          <ul class="space-y-2">
            <li v-for="link in socialLinks" :key="link.label">
              <ULink
                :to="link.url"
                :target="link.external ? '_blank' : undefined"
                class="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
              >
                <UIcon :name="link.icon" class="size-4" />
                {{ link.label }}
              </ULink>
            </li>
          </ul>
        </div>

        <div class="flex flex-col justify-between gap-4">
          <UButton
            to="/contact"
            color="primary"
            variant="soft"
            icon="i-heroicons-paper-airplane"
            class="btn-premium w-fit"
          >
            Let's talk
          </UButton>
          <UButton
            color="neutral"
            variant="ghost"
            size="sm"
            icon="i-heroicons-arrow-up"
            class="w-fit"
            @click="scrollToTop"
          >
            Back to top
          </UButton>
        </div>
      </div>

      <USeparator class="my-6" />

      <p class="text-center text-xs text-muted sm:text-left">
        © {{ year }} Amir Maghami. Built with Nuxt & Vue.
      </p>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experiences" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    icon: "i-simple-icons-github",
    url: "https://github.com/amirrr1987",
    external: true,
  },
  {
    label: "LinkedIn",
    icon: "i-simple-icons-linkedin",
    url: "https://www.linkedin.com/in/amirrr1987/",
    external: true,
  },
  {
    label: "Email",
    icon: "i-heroicons-envelope",
    url: "mailto:maghami.a1987@gmail.com",
    external: false,
  },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>
