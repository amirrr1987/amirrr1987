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
      <NuxtLoadingIndicator color="primary" :height="3" />
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
    <UToaster position="top-right" />
  </UApp>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Amir Maghami - Frontend Developer",
  ogTitle: "Amir Maghami - Frontend Developer",
  description:
    "Creative modern spatial portfolio of Amir Maghami, a Frontend Developer specializing in Vue.js and Nuxt.js.",
  ogDescription:
    "Creative modern spatial portfolio of Amir Maghami, a Frontend Developer specializing in Vue.js and Nuxt.js.",
  ogImage: "/social-preview.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Amir Maghami - Frontend Developer",
  twitterDescription:
    "Creative modern spatial portfolio of Amir Maghami, a Frontend Developer specializing in Vue.js and Nuxt.js.",
  twitterImage: "/social-preview.jpg",
});
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
</style>
