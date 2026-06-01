<template>
  <div
    ref="tiltRoot"
    class="gradient-border-wrap h-full"
    :class="props.class"
  >
    <div class="gradient-border-inner h-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ class?: string }>();
const tiltRoot = ref<HTMLElement | null>(null);

useCardTilt(tiltRoot, { max: 8, scale: 1.015 });
</script>
