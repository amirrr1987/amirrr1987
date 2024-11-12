<template>
  <section class="p-4 sm:p-6 lg:p-8">
    <img
      class="w-56 h-56 object-contain ms-auto"
      src="@/assets/images/me.png"
      alt=""
    />
    <div class="mb-4">
      <div>Hello world,</div>
      <div>
        This is
        <h1 class="inline font-bold">Amir Maghami</h1>
      </div>
      <h2 class="font-medium">Front-end developer</h2>
    </div>
    <p class="mb-12">Width a 5 years of experience in web development</p>

    <UButton to="/cv.pdf"> Download CV </UButton>
  </section>
</template>
<script setup lang="ts">
useHead({
  title: `Amir Maghami | Front-end developer`,
});
</script>
