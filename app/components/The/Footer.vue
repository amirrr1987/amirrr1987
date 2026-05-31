<template>
  <footer class="relative z-10 border-t border-white/10 bg-slate-950/70">
    <UContainer
      class="flex flex-col items-center justify-between gap-4 py-5 text-center sm:flex-row sm:text-left"
    >
      <p class="text-muted text-sm leading-6">
        © {{ new Date().getFullYear() }} Amir Maghami — Crafted with ❤️ + Nuxt
        UI
      </p>
      <div class="flex items-center gap-2">
        <UButton
          icon="i-simple-icons-telegram"
          variant="ghost"
          color="neutral"
          to="https://chat.telegram.dev"
          target="_blank"
          aria-label="Telegram"
        />
        <UButton
          icon="i-simple-icons-linkedin"
          variant="ghost"
          color="neutral"
          to="https://www.linkedin.com/in/amirrr1987/"
          target="_blank"
          aria-label="LinkedIn"
        />
        <UButton
          icon="i-simple-icons-github"
          variant="ghost"
          color="neutral"
          to="https://github.com/amirrr1987"
          target="_blank"
          aria-label="GitHub"
        />
      </div>
    </UContainer>
  </footer>
</template>
