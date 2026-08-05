<template>
  <footer
    class="footer-glow relative z-10 border-t border-white/10 bg-slate-950/70 backdrop-blur-2xl"
  >
    <UContainer class="py-8">
      <div
        class="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-start"
      >
        <div class="text-center sm:text-left">
          <p class="font-mono text-sm font-semibold text-highlighted">
            Amir Maghami
          </p>
          <p class="mt-1 text-sm text-muted">
            © {{ year }} — Crafted with Nuxt UI & Vue
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-2">
          <UTooltip
            v-for="link in socialLinks"
            :key="link.label"
            :text="link.label"
          >
            <UButton
              :icon="link.icon"
              variant="soft"
              color="neutral"
              size="lg"
              :to="link.url"
              target="_blank"
              :aria-label="link.label"
              class="transition-all hover:scale-110 hover:text-primary hover:shadow-md hover:shadow-primary/20"
            />
          </UTooltip>
        </div>
      </div>

      <USeparator class="my-6 opacity-20" />

      <div
        class="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-between"
      >
        <p class="text-xs text-muted">
          Open to collaborations & interesting projects
        </p>
        <UButton
          to="/contact"
          size="sm"
          color="primary"
          variant="soft"
          icon="i-heroicons-paper-airplane"
          class="btn-premium font-mono"
        >
          Let's talk
        </UButton>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()

const socialLinks = [
  { label: 'Telegram', icon: 'i-simple-icons-telegram', url: 'https://chat.telegram.dev' },
  { label: 'LinkedIn', icon: 'i-simple-icons-linkedin', url: 'https://www.linkedin.com/in/amirrr1987/' },
  { label: 'GitHub', icon: 'i-simple-icons-github', url: 'https://github.com/amirrr1987' }
]
</script>
