<template>
  <section class="text-gray-400 grid grid-cols-[288px,1fr]">
    <div class="p-4 sm:p-6 lg:p-8"></div>
    <div class="py-8 pr-8 sm:py-12 sm:pr-12 lg:py-16 lg:pr-16 relative">
      <UButton
        variant="outline"
        icon="i-heroicons-x-mark"
        label="all"
        :ui="{
          base: 'absolute top-0 w-28',
          rounded: 'rounded-none',
        }"
      />
      <div class="grid md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
        <template v-for="project in projects" :key="project.id">
          <div>
            <UCard :ui="projectUi">
              <template #header>
                <NuxtImg
                  :src="project.image"
                  :title="project.name"
                  :alt="project.name"
                />
              </template>
              <h4 class="text-base font-medium mb-2">{{ project.name }}</h4>
              <p>
                {{ project.description }}
              </p>
              <template #footer>
                <NuxtLink class="text-primary" :to="`/projects/${project.id}`">
                  View Project
                </NuxtLink>
              </template>
            </UCard>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
useHead({
  title: `Amir Maghami | Projects`,
});
const projectUi = {};
interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
}
const projects = ref<Project[]>([]);

const fetchProjects = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/amirrr1987/repos"
    );
    const data = await response.json();
    projects.value = data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      image: repo.owner.avatar_url,
      description: repo.description || "No description available",
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};
onMounted(() => {
  fetchProjects();
});
</script>
