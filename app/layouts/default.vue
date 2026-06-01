<template>
  <div class="grid min-h-svh grid-rows-[auto_1fr_auto]">
    <TheHeader />
    <main class="relative z-10 min-h-[calc(100svh-9rem)] overflow-x-hidden py-6 sm:py-8 lg:py-10">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
