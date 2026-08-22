<template>
  <div ref="root" class="inline-block" :class="props.class">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ class?: string }>();
const root = ref<HTMLElement | null>(null);
useMagnetic(root, { strength: props.class?.includes("strong") ? 0.5 : 0.32 });
</script>
