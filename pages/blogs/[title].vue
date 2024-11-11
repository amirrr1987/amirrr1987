<template>
  <section class="p-4 sm:p-6 lg:p-8 text-gray-400">{{  }}</section>
</template>
<script setup lang="ts">
const route = useRoute();


const res = await useFetch(`/api/blogs/${route.params.title}`)
console.log("🚀 ~ res:", res)
</script>
