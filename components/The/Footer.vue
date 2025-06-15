<template>
  <footer :class="[footerUI.background, footerUI.container]">
    <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
      <p class="text-muted text-sm text-center">
        © {{ new Date().getFullYear() }} Amir Maghami — Crafted with ❤️ + Nuxt UI
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
    </div>
  </footer>
</template>
<script setup lang="ts">
  const footerUI = {
    container: 'py-4 px-4 sm:px-6 lg:px-10',
    background: 'border-t border-gray-800'
  }
</script>
