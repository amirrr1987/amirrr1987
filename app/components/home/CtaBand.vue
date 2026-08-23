<template>
  <section class="relative z-10 px-4 pb-14 sm:px-6 sm:pb-16 lg:px-10">
    <UContainer>
      <div
        class="cta-band glass-panel relative flex flex-col items-center justify-between gap-4 overflow-hidden px-6 py-6 text-center sm:flex-row sm:text-left"
        data-reveal
      >
        <div class="relative z-[1]">
          <h2 class="font-section text-xl text-highlighted sm:text-2xl">
            Have a product to ship?
          </h2>
          <p class="body-copy mt-1 text-muted">
            Vue, Nuxt, and UI engineering for real production teams.
          </p>
        </div>
        <div class="relative z-[1] flex shrink-0 flex-col gap-2 sm:flex-row">
          <UButton
            to="/contact"
            size="lg"
            color="primary"
            icon="i-heroicons-paper-airplane"
            class="btn-premium"
          >
            Start a project
          </UButton>
          <UButton
            to="/projects"
            size="lg"
            color="neutral"
            variant="outline"
            trailing-icon="i-heroicons-arrow-right"
            class="btn-premium"
          >
            View work
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
useGsapScrollReveal();
</script>
