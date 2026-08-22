<template>
  <header
    class="glass-nav sticky top-0 z-40 border-b border-white/10 bg-slate-950/55 shadow-lg shadow-black/20 backdrop-blur-2xl"
  >
    <UContainer class="flex items-center py-3 sm:py-4">
      <NavBar />
    </UContainer>
  </header>
</template>

<style scoped>
.glass-nav {
  -webkit-backdrop-filter: blur(20px);
}
</style>
