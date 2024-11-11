<template>
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<style lang="less">
body {
  @apply p-4 sm:p-6 lg:p-8;
}
.dark {
  body {
    @apply bg-gray-950;
    #__nuxt {
      @apply bg-cool-900 border-cool-900 text-gray-400;
    }
  }
}
.light {
  body {
    @apply bg-gray-100;
    #__nuxt {
      @apply bg-cool-50 border-cool-300;
    }
  }
}
#__nuxt {
  @apply grid border rounded-md;
  height: calc(100vh - 2rem);
  grid-template-rows: max-content 1fr max-content;
  main {
    overflow-y: auto;
  }
}
</style>
