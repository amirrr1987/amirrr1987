<template>
  <nav class="border-b border-[#1e2d3d] py-2">
    <UButton class="hidden" variant="link" icon="i-heroicons-solid:menu" />
    <ul class="absolutea inset-0 lg:static lg:flex">
      <li v-for="link in links" :key="link.url" class="border-[#1e2d3d]">
        <NuxtLink
          :to="link.url"
          active-class="text-gray-50"
          class="text-gray-400 p-8"
        >
          _{{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface Link {
  url: string;
  label: string;
}
const links: Link[] = [
  {
    label: "amirrr1987",
    url: "/",
  },
  {
    url: "/skills",
    label: "skills",
  },
  {
    url: "/projects",
    label: "projects",
  },
  {
    url: "/experiences",
    label: "experiences",
  },
  {
    url: "/blogs",
    label: "blogs",
  },
  {
    url: "/contact",
    label: "contact",
  },
];
</script>
<style>
ul li:nth-child(1) {
  @apply w-72;
}
ul li:nth-child(5) {
  @apply flex-1;
}
ul li:nth-child(6) {
  @apply border-l;
}
ul li:not(:nth-child(6)) {
  @apply border-r;
}
</style>
