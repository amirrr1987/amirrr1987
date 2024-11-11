<template>
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<style>
body {
  @apply p-4 sm:p-6 lg:p-8;
  background-color: #010c15;
}
#__nuxt {
  /* --tw-bg-opacity: 1; */
  /* background-color: rgb(1 22 39 / var(--tw-bg-opacity)); */
  @apply bg-cool-900;
  height: calc(100vh - 60px);
  @apply grid border border-[#1e2d3d] rounded-md;
  grid-template-rows: max-content 1fr max-content;
}
main{
  overflow-y: auto;
}
</style>
