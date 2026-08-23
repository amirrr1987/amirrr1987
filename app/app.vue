<template>
  <UApp>
    <div
      class="page-vignette pointer-events-none fixed inset-0 -z-[5]"
      aria-hidden="true"
    />
    <ClientOnly>
      <CanvasBackground />
      <EffectsScrollProgress />
    </ClientOnly>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
