<template>
  <UContainer class="max-w-xl space-y-8 text-center">
    <UiPageHeader
      title="Blog"
      description="Writing is on the way. For now, find updates on GitHub and LinkedIn."
    />

    <div class="flex flex-col justify-center gap-3 sm:flex-row">
      <UButton
        to="https://github.com/amirrr1987"
        target="_blank"
        color="primary"
        icon="i-simple-icons-github"
      >
        GitHub
      </UButton>
      <UButton
        to="https://www.linkedin.com/in/amirrr1987/"
        target="_blank"
        color="neutral"
        variant="outline"
        icon="i-simple-icons-linkedin"
      >
        LinkedIn
      </UButton>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Blog — Amir Maghami",
  description: "Blog and writing — coming soon.",
});
</script>
