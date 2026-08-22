<template>
  <header class="page-header text-center">
    <h1
      class="bg-linear-to-br from-primary to-purple-400 bg-clip-text font-page text-4xl text-transparent sm:text-5xl"
    >
      {{ title }}
    </h1>
    <p
      v-if="description"
      class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
    >
      {{ description }}
    </p>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
}>();
</script>
