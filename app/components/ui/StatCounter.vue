<template>
  <UiGlassPanel
    :padding="padding"
    class="group text-center transition-colors hover:border-primary/50"
    data-reveal
  >
    <UIcon
      v-if="icon"
      :name="icon"
      class="mx-auto mb-2 size-6 text-primary opacity-90 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(66,184,131,0.6)]"
    />
    <p
      ref="counterRef"
      class="counter-pop font-mono text-xl font-bold text-primary sm:text-2xl"
    >
      {{ display }}
    </p>
    <p class="mt-1 text-xs text-muted sm:text-sm">
      {{ label }}
    </p>
  </UiGlassPanel>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value: number
    label: string
    icon?: string
    suffix?: string
    padding?: 'sm' | 'md' | 'lg'
    immediate?: boolean
  }>(),
  {
    padding: 'sm',
    suffix: '',
    immediate: false
  }
)

const counterRef = ref<HTMLElement | null>(null)
const { display } = useAnimatedCounter(counterRef, props.value, {
  suffix: props.suffix,
  immediate: props.immediate
})
</script>
