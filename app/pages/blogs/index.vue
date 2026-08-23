<template>
  <div class="px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
    <UContainer class="max-w-5xl space-y-6">
      <!-- Dispatch header -->
      <header class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" data-reveal>
        <div>
          <p class="page-eyebrow mb-2">Field notes</p>
          <h1 class="font-page text-3xl text-highlighted sm:text-4xl">
            <span class="font-mono text-primary">signal</span> dispatch
          </h1>
          <p class="body-copy mt-2 max-w-lg text-sm text-muted">
            Short transmissions on Vue, Nuxt, UI, and motion —
            {{ posts.length }} archived, no fluff.
          </p>
        </div>
        <p class="font-mono text-xs text-muted">
          <span class="text-primary">●</span> receiver online
        </p>
      </header>

      <!-- Tag filter -->
      <div class="flex flex-wrap gap-2" data-reveal>
        <button
          type="button"
          class="blog-filter-chip"
          :class="{ 'is-active': activeTag === 'all' }"
          @click="activeTag = 'all'"
        >
          All
        </button>
        <button
          v-for="tag in tags"
          :key="tag"
          type="button"
          class="blog-filter-chip"
          :class="{ 'is-active': activeTag === tag }"
          @click="activeTag = tag"
        >
          {{ tag }}
        </button>
      </div>

      <!-- Featured -->
      <NuxtLink
        v-if="featured"
        :to="`/blogs/${featured.slug}`"
        class="blog-featured group relative block overflow-hidden rounded-2xl border border-primary/25 p-6 sm:p-8"
        :class="`blog-signal-cover--${featured.theme}`"
        data-reveal
      >
        <div class="relative z-1 max-w-2xl">
          <p class="font-mono text-xs text-primary">
            {{ featured.signal }} · latest transmission
          </p>
          <h2 class="font-section mt-2 text-2xl text-highlighted sm:text-3xl">
            {{ featured.title }}
          </h2>
          <p class="body-copy mt-3 text-muted">
            {{ featured.excerpt }}
          </p>
          <p class="mt-4 font-mono text-sm text-primary opacity-80 transition-opacity group-hover:opacity-100">
            Read transmission →
          </p>
        </div>
      </NuxtLink>

      <!-- Grid -->
      <div
        v-if="filtered.length"
        class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <UiBlogSignal
          v-for="post in gridPosts"
          :key="post.slug"
          :post="post"
        />
      </div>

      <UiGlassPanel
        v-else
        padding="md"
        class="text-center"
        data-reveal
      >
        <p class="text-muted">No transmissions on this frequency.</p>
        <UButton
          class="btn-premium mt-3"
          variant="soft"
          color="primary"
          @click="activeTag = 'all'"
        >
          Show all
        </UButton>
      </UiGlassPanel>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { BlogTag } from "~/types/blog";

const { posts, tags } = useBlog();

const activeTag = ref<BlogTag | "all">("all");

const filtered = computed(() => {
  const tag = activeTag.value;
  if (tag === "all") return posts.value;
  return posts.value.filter((p) => p.tags.includes(tag));
});

const featured = computed(() =>
  activeTag.value === "all" ? posts.value[0] : null,
);

const gridPosts = computed(() => {
  const list = filtered.value;
  if (activeTag.value === "all") return list.slice(1);
  return list;
});

useSeoMeta({
  title: "Blog — Amir Maghami",
  description: "Field notes on Vue, Nuxt, UI engineering, and performance.",
});

useGsapScrollReveal({ stagger: 0.06 });
</script>
