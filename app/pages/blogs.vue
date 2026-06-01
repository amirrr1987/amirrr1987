<template>
  <UiGradientSection class="relative z-10">
    <UContainer class="space-y-10 sm:space-y-12">
      <UiPageHeader
        title="Blogs"
        eyebrow="Writing"
        icon="i-heroicons-document-text"
        description="A collection of my thoughts, tutorials, and insights on web development."
        show-separator
      />

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UiBlogCard
          v-for="blog in data ?? []"
          :key="blog.id"
          :blog="blog"
          :slug="kebabCase(blog.title)"
        />
      </div>
    </UContainer>
  </UiGradientSection>
</template>

<script setup lang="ts">
import { kebabCase } from "lodash-es";

useHead({
  title: "Amir Maghami | Blogs",
  meta: [
    {
      name: "description",
      content:
        "A collection of my thoughts, tutorials, and insights on web development.",
    },
  ],
});

const { data } = await useFetch("/api/blogs");
useGsapScrollReveal({ stagger: 0.14 });
</script>
