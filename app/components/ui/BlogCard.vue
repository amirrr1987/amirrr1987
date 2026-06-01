<template>
  <UCard
    data-reveal
    class="group relative h-full overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/15"
    :ui="{
      root: 'ring-1 ring-white/10 bg-slate-950/50 backdrop-blur',
      body: 'p-0',
    }"
  >
    <div class="relative h-44 overflow-hidden sm:h-48">
      <NuxtImg
        :src="blog.img"
        :alt="blog.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
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
        class="mt-6 justify-start px-0 font-mono"
      >
        Read More
      </UButton>
    </div>
  </UCard>
</template>

<script setup lang="ts">
type Blog = {
  id?: number | string;
  title: string;
  excerpt: string;
  img: string;
};

const props = defineProps<{
  blog: Blog;
  slug: string;
}>();
</script>
