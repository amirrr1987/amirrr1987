<template>
  <section class="p-4 sm:p-6 lg:p-8 text-gray-400">
    <template v-for="blog in blogs" :key="blog.id">
      <UCard
        >{{ blog }}

        <template #footer>
          <NuxtLink :to="`blogs/${blog.id}`">sdf</NuxtLink>
        </template>
      </UCard>
    </template>
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
</script>
