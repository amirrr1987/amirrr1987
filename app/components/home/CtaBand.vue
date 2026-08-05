<template>
  <section class="relative z-10 pb-20">
    <UContainer>
      <UiGlassPanel
        padding="lg"
        class="cta-band relative overflow-hidden text-center"
        data-reveal
      >
        <p class="page-eyebrow relative z-[1] mb-4">
          Next step
        </p>
        <h2 class="display-section relative z-[1] text-highlighted">
          Have a product to ship?
        </h2>
        <p class="body-copy relative z-[1] mx-auto mt-4 max-w-lg text-muted">
          From Figma to production — Vue, Nuxt, motion, and performance tuned for real users.
        </p>
        <div class="relative z-[1] mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <UButton
            to="/contact"
            size="xl"
            color="primary"
            icon="i-heroicons-paper-airplane"
            class="btn-premium justify-center shadow-xl shadow-primary/30"
          >
            Start a project
          </UButton>
          <UButton
            to="/AmirMagjami-Resume.pdf"
            download
            target="_blank"
            size="xl"
            color="neutral"
            variant="outline"
            icon="i-heroicons-document-arrow-down"
            class="btn-premium justify-center"
          >
            Download CV
          </UButton>
        </div>
      </UiGlassPanel>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
useGsapScrollReveal()
</script>
