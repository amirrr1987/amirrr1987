<template>
  <section class="p-4 sm:p-6 lg:p-8 text-gray-400">
    <div class="grid md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      <template v-for="blog in data" :key="blog.id">
        <UCard>
          <template #header>
            <img :src="blog.img" alt="" />
          </template>
          <h3 class="font-medium mb-2">{{ blog.title }}</h3>
          <p class="">{{ blog.excerpt }}</p>

          <template #footer>
            <!-- <NuxtLink :to="`blogs/${blog.id}`">sdf</NuxtLink> -->
          </template>
        </UCard>
      </template>
    </div>
  </section>
</template>
<script setup lang="ts">
useHead({
  title: `Amir Maghami | blogs`,
});
const blogs = [
  {
    id: 1,
    label: "sdf",
  },
];
const { data } = await useFetch("/api/blogs");
console.log("🚀 ~ data:", data);
</script>
