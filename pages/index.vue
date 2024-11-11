<template>
  <section class="text-gray-400 grid grid-cols-[288px,1fr]">
    <div class="p-4 sm:p-6 lg:p-8"></div>
    <div class="py-8 pr-8 sm:py-12 sm:pr-12 lg:py-16 lg:pr-16 grid md:grid-cols-2">
      <div>
        <div>Hi all, I am</div>
        <h1>Amir Maghami</h1>
        <h2>Front-end developer</h2>
        <p>
          About me I have 5 years of experience in web development lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat
        </p>
        const githubLink = "https://github.com/username"
      </div>
      <ClientOnly>
        <TheThree />
      </ClientOnly>
    </div>
  </section>
</template>
<script setup lang="ts">
useHead({
  title: `Amir Maghami | Front-end developer`,
});
</script>
