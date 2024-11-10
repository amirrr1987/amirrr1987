<template>
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<style>
body {
  background-color: #010c15;
  padding: 30px;
}
#__nuxt {
  --tw-bg-opacity: 1;
  background-color: rgb(1 22 39 / var(--tw-bg-opacity));
  height: calc(100vh - 60px);
  @apply grid border border-[#1e2d3d] rounded-md;
  grid-template-rows: max-content 1fr max-content;
}
main{
  overflow-y: auto;
}
</style>
