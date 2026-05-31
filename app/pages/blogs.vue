<template>
  <section class="relative z-10 flex flex-col justify-center">
    <!-- Header -->
    <UContainer
      :ui="{
        padding: 'px-4 sm:px-6 lg:px-8',
        base: '!container',
      }"
      class="text-center animate-fade-in"
    >
      <h1 class="mb-4 text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
        Blogs
      </h1>
      <p
        class="mx-auto max-w-2xl text-pretty text-base leading-7 text-gray-300 sm:text-lg"
      >
        A collection of my thoughts, tutorials, and insights on web development.
      </p>
    </UContainer>

    <!-- Blog Grid -->
    <UContainer
      :ui="{ padding: 'px-4 sm:px-6 lg:px-8' }"
      class="mt-8 grid grid-cols-1 gap-5 animate-fade-in-up sm:gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3"
    >
      <UCard
        v-for="blog in data"
        :key="blog.id"
        class="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
      >
        <!-- Blog Image -->
        <div class="relative h-44 overflow-hidden rounded-t-lg sm:h-48">
          <NuxtImg
            :src="blog.img"
            :alt="blog.title"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 group-hover:bg-black/50 transition-opacity duration-300"
          />
        </div>

        <!-- Blog Content -->
        <div class="flex min-h-56 flex-col p-5 sm:p-6">
          <h3 class="text-lg font-bold text-gray-100 sm:text-xl">
            {{ blog.title }}
          </h3>
          <p class="mt-3 text-sm leading-7 text-gray-300 sm:text-base">
            {{ blog.excerpt }}
          </p>
          <ULink
            :to="`/blogs/${kebabCase(blog.title)}`"
            target="_blank"
            class="mt-auto inline-flex items-center gap-2 pt-6 font-medium text-primary transition-transform duration-300 hover:translate-x-1"
          >
            Read More
            <UIcon name="i-heroicons-arrow-right" class="h-4 w-4" />
          </ULink>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { kebabCase } from "lodash-es";

import gsap from "gsap";
import { onMounted } from "vue";

// SEO Meta Tags
useHead({
  title: "Amir Maghami | Blogs",
  meta: [
    {
      name: "description",
      content:
        "A collection of my thoughts, tutorials, and insights on web development.",
    },
    { property: "og:title", content: "Amir Maghami | Blogs" },
    {
      property: "og:description",
      content:
        "A collection of my thoughts, tutorials, and insights on web development.",
    },
    { property: "og:image", content: "/social-preview.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Amir Maghami | Blogs" },
    {
      name: "twitter:description",
      content:
        "A collection of my thoughts, tutorials, and insights on web development.",
    },
    { name: "twitter:image", content: "/social-preview.jpg" },
  ],
});

// Fetch Data
const { data } = await useFetch("/api/blogs");

// GSAP Animations
onMounted(() => {
  gsap.from(".animate-fade-in", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
  });

  gsap.from(".animate-fade-in-up", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.4,
    stagger: 0.2,
    ease: "power3.out",
  });
});
</script>

<style scoped>
.animate-fade-in {
  opacity: 1;
}

.animate-fade-in-up {
  opacity: 1;
}
</style>
