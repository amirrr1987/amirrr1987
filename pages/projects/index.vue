<template>
  <section class="text-gray-400 p-4 sm:p-6 lg:p-8">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      <template v-for="project in projects" :key="project.id">
        <div>
          <UCard :ui="projectUi">
            <template #header>
              <NuxtImg
                :src="project.image"
                :title="project.name"
                :alt="project.name"
                class="w-full"
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
