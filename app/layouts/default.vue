<template>
  <TheHeader />

  <main class="relative z-10">
    <slot />
  </main>

  <TheFooter />
</template>

<style>
#__nuxt {
  min-height: 100svh;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
}
</style>
