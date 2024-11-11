<template>
  <nav
    class="border-b border-[#1e2d3d] grid grid-cols-[max-content,max-content] justify-between items-center p-4"
  >
    <div>
      <UButton
        :ui="{ base: 'md:hidden', inline: 'flex' }"
        variant="soft"
        icon="i-heroicons-solid:menu"
        @click="toggleMenu"
      />
      <ul
        v-show="isOpen"
        class="list-disc list-inside space-y-4 my-4 md:flex md:space-y-0 md:list-none"
      >
        <li
          v-for="link in links"
          :key="link.url"
          class="md:border-r md:border-cool-500"
        >
          <ULink :to="link.url" active-class="text-primary" class="p-4">
            _{{ link.label }}
          </ULink>
        </li>
      </ul>
    </div>
    <div>
      <USelect
        v-model="colorMode.preference"
        :options="['dark', 'light']"
        class="w-max"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { LineLoop } from "three";

const colorMode = useColorMode();

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
const isOpen = ref<boolean>(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
<style>
ul li:nth-child(1) {
  @apply w-72;
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
