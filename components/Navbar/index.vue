<template>
  <nav class="border-b border-[#1e2d3d] py-2">
    <UButton  variant="link"  icon="i-heroicons-solid:menu" />
    <ul class="lg:flex">
      <li v-for="link in links" :key="link.url">
        <NuxtLink
          :to="link.url"
          active-class="text-gray-200"
          class="text-gray-400 border-r border-[#1e2d3d] px-4 py-2"
        >
          _{{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";
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
