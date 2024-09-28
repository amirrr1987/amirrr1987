<script setup lang="ts"></script>

<template>
  <nav class="py-2 shadow">
    <div class="container mx-auto px-4">
      <NuxtLink>
        <NuxtImg  />
      </NuxtLink>
      <ul class="list-none flex gap-x-4">
        <li><NuxtLink class="no-underline	text-gray-600" to="/">Home</NuxtLink></li>
        <li><NuxtLink class="no-underline	text-gray-600" to="/">Skills</NuxtLink></li>
        <li><NuxtLink class="no-underline	text-gray-600" to="/">Projects</NuxtLink></li>
        <li><NuxtLink class="no-underline	text-gray-600" to="/">Contact</NuxtLink></li>
      </ul>
    </div>
  </nav>
  <main>
    <slot />
  </main>
</template>

<style scoped></style>
