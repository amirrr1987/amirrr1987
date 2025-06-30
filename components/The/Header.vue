<template>
  <header class="bg-slate-900/95 shadow-md sticky top-0 z-50 border-b border-gray-800/50">
    <UContainer class="flex justify-between py-2">
      <NavBar />

      <UButton
        to="/contact"
        color="secondary"
        variant="outline"
        icon="i-heroicons-envelope"
        class="md:flex sm:w-auto transition-transform duration-300 hover:scale-105"
      >
        Get in Touch
      </UButton>
    </UContainer>
  </header>
</template>

<script setup lang="ts"></script>
