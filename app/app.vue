<template>
  <UApp>
    <ClientOnly>
      <EffectsScrollProgress />
      <EffectsCommandMenu />
    </ClientOnly>

    <NuxtLayout>
      <ClientOnly>
        <CanvasBackground />
      </ClientOnly>
      <NuxtLoadingIndicator
        color="var(--ui-primary)"
        :height="3"
      />
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ]
})

useSeoMeta({
  title: 'Amir Maghami — Frontend Developer',
  ogTitle: 'Amir Maghami — Frontend Developer',
  description:
    'Senior front-end developer specializing in Vue.js and Nuxt. Dashboards, tools, and polished product UI — Tehran & remote.',
  ogDescription:
    'Senior front-end developer specializing in Vue.js and Nuxt. Dashboards, tools, and polished product UI — Tehran & remote.',
  ogImage: '/logo.svg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Amir Maghami — Frontend Developer',
  twitterDescription:
    'Senior front-end developer specializing in Vue.js and Nuxt. Dashboards, tools, and polished product UI — Tehran & remote.',
  twitterImage: '/logo.svg'
})
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgb(15 23 42 / 0.5);
}

::-webkit-scrollbar-thumb {
  background: rgb(66 184 131 / 0.55);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(66 184 131 / 0.8);
}

html.light ::-webkit-scrollbar-track {
  background: rgb(241 245 249 / 0.8);
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(0.5rem);
}
</style>
