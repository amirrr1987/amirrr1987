<template>
  <div>
    <h1>{{ skill }}</h1>
  </div>
</template>

<script setup lang="ts">
const { params } = useRoute();
const { skill } = params;
</script>