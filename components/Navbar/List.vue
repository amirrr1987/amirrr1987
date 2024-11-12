<template>
  <ul
    class="fixed bg-cool-100 dark:bg-cool-900 inset-0 h-screen flex flex-col justify-center items-center gap-y-4 z-40"
  >
    <AppLogo class="w-32 h-32 mb-8" />
    <li
      v-for="link in links"
      :key="link.url"
      class="md:border-r md:border-cool-500"
    >
      <ULink
        :to="link.url"
        active-class="text-primary"
        class="p-4"
        @click="emits('opened')"
      >
        _{{ link.label }}
      </ULink>
    </li>
  </ul>
</template>
<script setup lang="ts">
const emits = defineEmits(["opened"]);
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
  /* @apply w-72; */
}
ul li:nth-child(5) {
  /* @apply flex-1; */
}
ul li:nth-child(6) {
  /* @apply border-l; */
}
ul li:not(:nth-child(6)) {
  /* @apply border-r; */
}
</style>
