<template>
  <section class="text-gray-400 grid grid-cols-[288px,1fr]">
    <div class="p-4 sm:p-6 lg:p-8"></div>
    <div
      class="py-8 pr-8 sm:py-12 sm:pr-12 lg:py-16 lg:pr-16 grid md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16"
    >
      <template v-for="blog in data" :key="blog.id">
        <div>
          <UCard>
            <template #header>
              <img :src="blog.img" alt="" />
            </template>
            <h3 class="font-medium mb-2">{{ blog.title }}</h3>
            <p class="">{{ blog.excerpt }}</p>

            <template #footer>
              <NuxtLink
                class="text-primary"
                :to="`blogs/${useChangeCase(blog.title, 'kebabCase').value}`"
              >
                View more
              </NuxtLink>
            </template>
          </UCard>
        </div>
      </template>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useChangeCase } from "@vueuse/integrations/useChangeCase";

useHead({
  title: `Amir Maghami | Blogs`,
});

const { data } = await useFetch("/api/blogs");
</script>
