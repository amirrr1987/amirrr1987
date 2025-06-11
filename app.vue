<template>
  <UApp :ui="appConfig">
    <NuxtLayout>
      <ClientOnly>
        <SpatialCanvas />
      </ClientOnly>
      <NuxtLoadingIndicator color="primary" />
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
    <UToaster position="top-right" />
  </UApp>
</template>

<script setup lang="ts">
const appConfig = {
  base: 'min-h-screen',

  colors: {
    primary: 'purple'
  }
}
useSeoMeta({
  title: 'Amir Maghami - Frontend Developer',
  ogTitle: 'Amir Maghami - Frontend Developer',
  description: 'Creative modern spatial portfolio of Amir Maghami, a Frontend Developer specializing in Vue.js and Nuxt.js.',
  ogDescription: 'Creative modern spatial portfolio of Amir Maghami, a Frontend Developer specializing in Vue.js and Nuxt.js.',
  ogImage: '/social-preview.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Amir Maghami - Frontend Developer',
  twitterDescription: 'Creative modern spatial portfolio of Amir Maghami, a Frontend Developer specializing in Vue.js and Nuxt.js.',
  twitterImage: '/social-preview.jpg'
})
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(31, 41, 55, 0.5);
}

::-webkit-scrollbar-thumb {
  background: rgba(139, 92, 246, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(139, 92, 246, 0.7);
}

* {
  scroll-behavior: smooth;
    /* font-family: 'B612 Mono'; */
  font-family: 'Silkscreen';
}
/* 

 

*/
</style>
