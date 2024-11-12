<template>
  <section
    class="p-4 sm:p-6 lg:p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
  >
    <UCard v-for="blog in data" :key="blog.id">
      <template #header>
        <img :src="blog.img" alt="" />
      </template>
      <h3 class="font-medium tracking-tight mb-2">{{ blog.title }}</h3>
      <p class="font-normal tracking-tighter leading-7">{{ blog.excerpt }}</p>

      <template #footer>
        <ULink
          class="text-primary"
          as="a"
          target="_blank"
          :to="`blogs/${useChangeCase(blog.title, 'kebabCase').value}`"
        >
          View more
        </ULink>
      </template>
    </UCard>
  </section>
</template>
<script setup lang="ts">
import { useChangeCase } from "@vueuse/integrations/useChangeCase";

useHead({
  title: `Amir Maghami | Blogs`,
});

const { data } = await useFetch("/api/blogs");
</script>
