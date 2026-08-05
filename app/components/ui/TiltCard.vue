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
const props = withDefaults(
  defineProps<{ class?: string, tilt?: boolean }>(),
  { tilt: true }
)
const tiltRoot = ref<HTMLElement | null>(null)

useCardTilt(tiltRoot, { max: 8, scale: 1.015, enabled: props.tilt })
</script>
