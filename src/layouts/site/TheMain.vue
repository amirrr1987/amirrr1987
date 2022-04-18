<template>
  <main :class="dataStore.state.mainClass">
    <section :class="dataStore.state.sectionclass">
      <div :class="dataStore.state.containerClass">
        <RouterView />
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import useDataStore from "@/stores";
const dataStore = useDataStore();
</script>
