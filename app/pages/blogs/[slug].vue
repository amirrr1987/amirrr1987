<template>
  <div v-if="post" class="px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
    <UContainer class="max-w-3xl">
      <UButton
        to="/blogs"
        color="neutral"
        variant="ghost"
        icon="i-heroicons-arrow-left"
        size="sm"
        class="mb-6 font-mono"
      >
        All transmissions
      </UButton>

      <article class="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80" data-reveal>
        <div class="flex items-center gap-2 border-b border-white/8 bg-black/40 px-4 py-2.5">
          <span class="size-2.5 rounded-full bg-rose-500/90" />
          <span class="size-2.5 rounded-full bg-amber-400/90" />
          <span class="size-2.5 rounded-full bg-emerald-500/90" />
          <p class="font-mono ml-2 truncate text-[11px] text-muted">
            decode {{ post.signal }}.log
          </p>
        </div>

        <header
          class="border-b border-white/8 p-5 sm:p-6"
          :class="`blog-signal-cover--${post.theme}`"
        >
          <p class="font-mono text-xs text-primary">
            {{ post.signal }} · {{ formattedDate }} · {{ post.readTime }}
          </p>
          <h1 class="font-section mt-3 text-2xl text-highlighted sm:text-3xl">
            {{ post.title }}
          </h1>
          <div class="mt-3 flex flex-wrap gap-1.5">
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
        </header>

        <div class="space-y-5 p-5 sm:p-8">
          <template v-for="(block, i) in post.content" :key="i">
            <p
              v-if="block.type === 'p'"
              class="body-copy text-muted"
            >
              {{ block.text }}
            </p>

            <h2
              v-else-if="block.type === 'h2'"
              class="font-card pt-2 text-lg text-highlighted"
            >
              {{ block.text }}
            </h2>

            <pre
              v-else-if="block.type === 'code'"
              class="overflow-x-auto rounded-xl border border-white/8 bg-black/50 p-4 font-mono text-xs leading-relaxed text-primary/90 sm:text-sm"
            ><code>{{ block.text }}</code></pre>

            <ul
              v-else-if="block.type === 'ul'"
              class="space-y-2 border-l-2 border-primary/30 pl-4"
            >
              <li
                v-for="(item, j) in block.items"
                :key="j"
                class="text-sm leading-relaxed text-muted"
              >
                {{ item }}
              </li>
            </ul>
          </template>
        </div>

        <footer class="flex flex-wrap items-center justify-between gap-3 border-t border-white/8 px-5 py-4 sm:px-6">
          <p class="font-mono text-[11px] text-muted">
            end of transmission
          </p>
          <div class="flex gap-2">
            <UButton
              v-if="prev"
              :to="`/blogs/${prev.slug}`"
              color="neutral"
              variant="outline"
              size="sm"
              icon="i-heroicons-arrow-left"
              class="font-mono"
            >
              {{ prev.signal }}
            </UButton>
            <UButton
              v-if="next"
              :to="`/blogs/${next.slug}`"
              color="primary"
              variant="soft"
              size="sm"
              trailing-icon="i-heroicons-arrow-right"
              class="font-mono"
            >
              {{ next.signal }}
            </UButton>
          </div>
        </footer>
      </article>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { posts, getBySlug } = useBlog();

const slug = String(route.params.slug);
const post = getBySlug(slug);

if (!post) {
  await navigateTo("/blogs");
}

const formattedDate = new Date(post!.date).toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const currentIndex = posts.value.findIndex((p) => p.slug === slug);
const prev = currentIndex > 0 ? posts.value[currentIndex - 1] : null;
const next =
  currentIndex >= 0 && currentIndex < posts.value.length - 1
    ? posts.value[currentIndex + 1]
    : null;

useSeoMeta({
  title: `${post!.title} — Amir Maghami`,
  description: post!.excerpt,
});

useGsapScrollReveal();
</script>
