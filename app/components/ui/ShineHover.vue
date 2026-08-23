<template>
  <div
    class="shine-hover group relative overflow-hidden"
    :class="$props.class"
  >
    <span class="shine-sweep pointer-events-none" aria-hidden="true" />
    <div class="relative z-1 h-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ class?: string }>();
</script>
