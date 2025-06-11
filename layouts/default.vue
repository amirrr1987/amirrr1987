<template>
  <header :class="headerUI.wrapper">
    <div :class="headerUI.container" class="flex items-center  md:justify-between gap-x-4">
      <ULink to="/" class="flex items-center gap-2">
        <TheLogo />
      </ULink>
      <nav class="flex items-center gap-5 justify-evenly md:justify-start">
        <ULink v-for="link in navigationLinks" :key="link.to" :to="link.to"
          class="flex items-center gap-2 text-sm font-medium text-gray-200 hover:text-primary">
          <UIcon :name="link.icon" class="w-6 h-6" />
          <span class="hidden md:inline">{{ link.label }}</span>
        </ULink>
      </nav>

      <UButton to="/contact" size="xl" color="secondary" variant="outline" icon="i-heroicons-envelope"
        class="hidden md:flex w-full sm:w-auto transition-transform duration-300 hover:scale-105">
        Get in Touch
      </UButton>
    </div>
  </header>

  <main :class="[mainUI.base, mainUI.container]">
    <slot />
  </main>

  <footer :class="[footerUI.background, footerUI.container]">
    <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
      <p class="text-muted text-sm text-center">
        © {{ new Date().getFullYear() }} Amir Maghami — Crafted with ❤️ + Nuxt UI
      </p>
      <div class="flex items-center gap-2">
        <UButton icon="i-simple-icons-telegram" variant="ghost" color="secondary" to="https://chat.telegram.dev"
          target="_blank" aria-label="Telegram" />
        <UButton icon="i-simple-icons-linkedin" variant="ghost" color="secondary"
          to="https://www.linkedin.com/in/amirrr1987/" target="_blank" aria-label="LinkedIn" />
        <UButton icon="i-simple-icons-github" variant="ghost" color="secondary" to="https://github.com/amirrr1987"
          target="_blank" aria-label="GitHub" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const navigationLinks = [
  { label: 'Home', to: '/', icon: 'i-heroicons-home' },
  { label: 'About', to: '/about', icon: 'i-heroicons-user' },
  { label: 'Skills', to: '/skills', icon: 'i-heroicons-light-bulb' },
  { label: 'Projects', to: '/projects', icon: 'i-heroicons-rocket-launch' },
  { label: 'Experience', to: '/experiences', icon: 'i-heroicons-briefcase' },
  { label: 'Blog', to: '/blogs', icon: 'i-heroicons-document-text' },
  { label: 'Contact', to: '/contact', icon: 'i-heroicons-envelope' }
]

const headerUI = {
  wrapper: 'sticky top-0 z-50  border-b border-gray-800/50',
  container: 'py-3 px-4 sm:px-6 lg:px-10'
}

const mainUI = {
  container: 'py-10 px-4 sm:px-6 lg:px-10',
  base: 'grid'
}

const footerUI = {
  container: 'py-4 px-4 sm:px-6 lg:px-10',
  background: 'border-t border-gray-800'
}
</script>
<style>
#__nuxt {
  min-height: 100svh;
  display: grid;
  grid-template-rows: max-content 1fr max-content;

}
</style>