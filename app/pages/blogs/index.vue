<template>
  <div class="px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
    <UContainer class="max-w-xl space-y-10 text-center">
      <UiPageHeader
        eyebrow="Coming soon"
        title="Blog"
        description="Writing is on the way. For now, find updates on GitHub and LinkedIn."
      />

      <UiGlassPanel padding="lg" data-reveal>
        <UIcon
          name="i-heroicons-pencil-square"
          class="mx-auto size-12 text-primary/80"
        />
        <p class="body-copy mt-4 text-muted">
          Articles about Vue, Nuxt, UI engineering, and performance will land here soon.
        </p>
        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <UButton
            to="https://github.com/amirrr1987"
            target="_blank"
            color="primary"
            icon="i-simple-icons-github"
            class="btn-premium"
          >
            GitHub
          </UButton>
          <UButton
            to="https://www.linkedin.com/in/amirrr1987/"
            target="_blank"
            color="neutral"
            variant="outline"
            icon="i-simple-icons-linkedin"
            class="btn-premium"
          >
            LinkedIn
          </UButton>
        </div>
      </UiGlassPanel>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Blog — Amir Maghami",
  description: "Blog and writing — coming soon.",
});

useGsapScrollReveal();
</script>
