<template>
  <section class="relative z-10 pb-20">
    <UContainer>
      <UiGlassPanel
        padding="lg"
        class="cta-band relative overflow-hidden text-center"
        data-reveal
      >
        <span class="cta-band-bg" aria-hidden="true" />
        <p class="page-eyebrow relative z-[1] mb-4">Next step</p>
        <h2 class="relative z-[1] font-mono text-2xl font-bold text-highlighted sm:text-4xl">
          Ready to ship something
          <span class="text-gradient-primary text-shimmer"> unforgettable?</span>
        </h2>
        <p class="relative z-[1] mx-auto mt-4 max-w-lg text-muted">
          Tell me about your product — I'll help you design, build, and launch with Vue & Nuxt.
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
useGsapScrollReveal();
</script>
