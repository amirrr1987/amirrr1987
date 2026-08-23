<template>
  <NuxtLink
    :to="`/blogs/${post.slug}`"
    class="blog-signal group block h-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 transition-all duration-300 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/10"
    data-reveal
  >
    <div
      class="blog-signal-cover relative h-28 overflow-hidden sm:h-32"
      :class="`blog-signal-cover--${post.theme}`"
    >
      <div class="absolute inset-0 flex items-center justify-between px-4 font-mono text-[10px] uppercase tracking-widest text-white/40">
        <span>{{ post.signal }}</span>
        <span>{{ post.readTime }}</span>
      </div>
      <p class="absolute bottom-3 left-4 right-4 font-badge text-xs text-primary/90">
        {{ formattedDate }}
      </p>
    </div>

    <div class="p-4 sm:p-5">
      <div class="mb-2 flex flex-wrap gap-1.5">
        <UBadge
          v-for="tag in post.tags"
          :key="tag"
          color="primary"
          variant="soft"
          size="sm"
        >
          {{ tag }}
        </UBadge>
      </div>
      <h3 class="font-card text-base leading-snug text-highlighted transition-colors group-hover:text-primary sm:text-lg">
        {{ post.title }}
      </h3>
      <p class="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
        {{ post.excerpt }}
      </p>
      <p class="mt-3 font-mono text-[11px] text-primary opacity-0 transition-opacity group-hover:opacity-100">
        decode transmission →
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { BlogPost } from "~/types/blog";

const props = defineProps<{
  post: BlogPost;
}>();

const formattedDate = computed(() =>
  new Date(props.post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }),
);
</script>
