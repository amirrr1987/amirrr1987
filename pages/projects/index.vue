<template>
  <section class="p-4 sm:p-6 lg:p-8 text-gray-400 grid md:grid-cols-4 gap-4">
    <template v-for="project in projects" :key="project.id">
      <div>
        <div class="mb-2">{{ project.name }}</div>
        <UCard :ui="projectUi">
          <template #header>
            <NuxtImg
              :src="project.image"
              :title="project.name"
              :alt="project.name"
            />
          </template>
          {{ project.description }}
          <template #footer>
            <NuxtLink :to="`/projects/${project.id}`"> View Project </NuxtLink>
          </template>
        </UCard>
      </div>
    </template>
  </section>
</template>
<script setup lang="ts">
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
