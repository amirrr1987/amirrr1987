<template>
  <header
    class="glass-nav sticky top-0 z-40 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl"
  >
    <UContainer class="py-3 sm:py-4">
      <NavBar />
    </UContainer>
  </header>
</template>

<style scoped>
.glass-nav {
  -webkit-backdrop-filter: blur(16px);
}
</style>
