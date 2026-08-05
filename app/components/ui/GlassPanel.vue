<template>
  <div :class="['glass-panel relative', paddingClass, props.class]">
    <span
      class="noise-overlay absolute inset-0 rounded-[inherit]"
      aria-hidden="true"
    />
    <div class="relative z-[1]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    class?: string
    padding?: 'sm' | 'md' | 'lg'
  }>(),
  {
    padding: 'md'
  }
)

const paddingClass = computed(() => {
  const map = {
    sm: 'p-4 sm:p-5',
    md: 'p-5 sm:p-6 md:p-8',
    lg: 'p-6 sm:p-8 md:p-10'
  }
  return map[props.padding]
})
</script>
