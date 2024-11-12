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
      @apply bg-cool-900 border-cool-700 text-gray-300 leading-8 text-base font-normal;
    }
  }
}
.light {
  body {
    @apply bg-gray-50;
    #__nuxt {
      @apply bg-cool-100 border-cool-300 text-gray-700 leading-8 text-base font-normal;
    }
  }
}
#__nuxt {
  @apply grid border rounded-md;
  min-height: 100svh;
  grid-template-rows: max-content 1fr max-content;
}
</style>
