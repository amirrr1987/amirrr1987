<template>
  <section class="relative z-10  flex flex-col justify-center">
    <!-- Header -->
    <UContainer :ui="{ padding: 'py-12 px-4 sm:px-6 lg:px-10' }" class="text-center animate-fade-in">
      <h1 class="text-4xl sm:text-5xl font-bold text-primary mb-4">Blogs</h1>
      <p class="text-gray-300 text-lg sm:text-xl max-w-md mx-auto">
        A collection of my thoughts, tutorials, and insights on web development.
      </p>
    </UContainer>

    <!-- Blog Grid -->
    <UContainer :ui="{ padding: 'py-8 px-4 sm:px-6 lg:px-10' }"
      class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
      <UCard v-for="blog in [{ id: 1, img: '', title: '', excerpt : ''}]" :key="blog.id"
        class="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02]">
        <!-- Blog Image -->
        <div class="relative h-48 overflow-hidden rounded-t-lg">
          <img :src="blog.img" :alt="blog.title"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 group-hover:bg-black/50 transition-opacity duration-300">
          </div>
        </div>

        <!-- Blog Content -->
        <div class="p-6 space-y-4">
          <h3 class="text-xl font-bold text-gray-100">{{ blog.title }}</h3>
          <p class="text-gray-300">{{ blog.excerpt }}</p>
          <ULink :to="`/blogs/${useChangeCase(blog.title, 'kebabCase').value}`" target="_blank"
            class="text-primary font-medium transition-transform duration-300 hover:scale-105">
            Read More
          </ULink>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useChangeCase } from "@vueuse/integrations/useChangeCase";

import { onMounted } from 'vue';
import gsap from 'gsap';

// SEO Meta Tags
useHead({
  title: 'Amir Maghami | Blogs',
  meta: [
    { name: 'description', content: 'A collection of my thoughts, tutorials, and insights on web development.' },
    { property: 'og:title', content: 'Amir Maghami | Blogs' },
    { property: 'og:description', content: 'A collection of my thoughts, tutorials, and insights on web development.' },
    { property: 'og:image', content: '/social-preview.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Amir Maghami | Blogs' },
    { name: 'twitter:description', content: 'A collection of my thoughts, tutorials, and insights on web development.' },
    { name: 'twitter:image', content: '/social-preview.jpg' },
  ],
});

// Fetch Data
// const { data } = await useFetch('/api/blogs');

// GSAP Animations
onMounted(() => {
  gsap.from('.animate-fade-in', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out',
  });

  gsap.from('.animate-fade-in-up', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.4,
    stagger: 0.2,
    ease: 'power3.out',
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