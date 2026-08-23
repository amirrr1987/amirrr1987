<template>
  <header class="page-header text-center" data-reveal>
    <p v-if="eyebrow" class="page-eyebrow mb-4">
      {{ eyebrow }}
    </p>
    <h1 class="gradient-text font-page text-4xl sm:text-5xl">
      {{ title }}
    </h1>
    <p
      v-if="description"
      class="body-copy mx-auto mt-4 max-w-2xl text-muted"
    >
      {{ description }}
    </p>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
  eyebrow?: string;
}>();
</script>
