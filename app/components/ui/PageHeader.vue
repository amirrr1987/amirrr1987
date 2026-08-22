<template>
  <header class="text-center" data-reveal data-parallax>
    <p v-if="eyebrow" class="page-eyebrow mx-auto mb-4">
      <UIcon v-if="icon" :name="icon" class="size-4" />
      {{ eyebrow }}
    </p>
    <h1
      class="text-gradient-primary text-shimmer font-mono text-3xl font-bold sm:text-4xl md:text-5xl"
    >
      {{ title }}
    </h1>
    <p
      v-if="description"
      class="mx-auto mt-4 max-w-2xl text-pretty font-sans text-base leading-7 text-muted sm:text-lg"
    >
      {{ description }}
    </p>
    <USeparator
      v-if="showSeparator"
      class="mx-auto mt-6 max-w-xs"
      :ui="{ border: 'border-primary/30' }"
    />
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
  eyebrow?: string;
  icon?: string;
  showSeparator?: boolean;
}>();
</script>
