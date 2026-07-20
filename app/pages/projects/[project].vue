<template>
  <div>
    <h1>{{ project }}</h1>
  </div>
</template>

<script setup lang="ts">
const { params } = useRoute();
const { project } = params;
</script>