<template>
  <div class="py-12">
    <UButton to="/projects" icon="i-heroicons-arrow-left" color="secondary" variant="ghost" class="mb-8">
      Back to Projects
    </UButton>
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1 class="text-5xl font-bold mb-2">{{ doc.title }}</h1>
        <p class="text-gray-400 mb-8">{{ doc.description }}</p>
        <div v-if="doc.image" class="mb-8">
          <NuxtImg :src="doc.image" :alt="doc.title" class="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div class="prose prose-invert prose-lg max-w-none">
          <ContentRenderer :value="doc" />
        </div>
      </article>
    </ContentDoc>
  </div>
</template>

<style>
/* Basic styles for the rendered markdown content */
.prose {
  color: #d1d5db; /* gray-300 */
}
.prose h1, .prose h2, .prose h3 {
  color: #ffffff;
}
.prose a {
  color: #4ade80; /* green-400 */
}
.prose code {
    background-color: #1f2937; /* gray-800 */
    color: #f9fafb; /* gray-50 */
    padding: 0.2em 0.4em;
    border-radius: 0.25rem;
}
.prose pre {
    background-color: #111827; /* gray-900 */
}
</style>
