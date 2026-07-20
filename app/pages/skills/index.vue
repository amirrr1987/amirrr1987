<template>
  <div>
    <h1>Skills</h1>
    {{ skills }}
    <!-- <div v-for="skill in skills.data" :key="skill.slug">
      <h2>{{ skill.name }}</h2>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import type { Skill } from "~/models/skill.model";

const  skills = await useFetch<Skill[]>("/api/skills");

</script>