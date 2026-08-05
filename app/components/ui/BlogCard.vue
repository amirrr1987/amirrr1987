<template>
  <UiTiltCard
    class="h-full"
    data-reveal
  >
    <UiShineHover class="h-full">
      <UCard
        class="group relative h-full overflow-hidden glass-panel !rounded-[calc(1.5rem-1px)] !bg-slate-950/60 !shadow-none ring-0"
        :ui="{ body: 'p-0' }"
      >
        <div class="relative h-44 overflow-hidden sm:h-48">
          <NuxtImg
            :src="blog.img"
            :alt="blog.title"
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/25 to-transparent"
          />
        </div>

        <div class="flex min-h-56 flex-col p-5 sm:p-6">
          <h3 class="font-mono text-lg font-bold text-highlighted sm:text-xl">
            {{ blog.title }}
          </h3>
          <p class="mt-3 flex-1 text-sm leading-7 text-muted sm:text-base">
            {{ blog.excerpt }}
          </p>
          <UButton
            :to="`/blogs/${slug}`"
            target="_blank"
            variant="link"
            color="primary"
            trailing-icon="i-heroicons-arrow-right"
            class="btn-premium mt-6 justify-start px-0 font-mono"
          >
            Read More
          </UButton>
        </div>
      </UCard>
    </UiShineHover>
  </UiTiltCard>
</template>

<script setup lang="ts">
type Blog = {
  id?: number | string
  title: string
  excerpt: string
  img: string
}

defineProps<{
  blog: Blog
  slug: string
}>()
</script>
