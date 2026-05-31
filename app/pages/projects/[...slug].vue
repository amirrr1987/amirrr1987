<template>
  <div class="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
    <UButton
      to="/projects"
      icon="i-heroicons-arrow-left"
      color="secondary"
      variant="ghost"
      class="mb-8"
    >
      Back to Projects
    </UButton>
    <ContentDoc v-slot="{ doc }">
      <article
        class="rounded-3xl border border-white/10 bg-slate-950/60 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur sm:p-8"
      >
        <h1 class="mb-3 break-words text-3xl font-bold sm:text-4xl md:text-5xl">
          {{ doc.title }}
        </h1>
        <p class="mb-8 text-pretty leading-7 text-gray-400">
          {{ doc.description }}
        </p>
        <div v-if="doc.image" class="mb-8">
          <NuxtImg
            :src="doc.image"
            :alt="doc.title"
            class="h-auto w-full rounded-2xl shadow-lg"
          />
        </div>
        <div class="prose prose-invert max-w-none sm:prose-lg">
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
.prose h1,
.prose h2,
.prose h3 {
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
