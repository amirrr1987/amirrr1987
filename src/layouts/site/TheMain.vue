<template>
  <main class="pb-16 md:pb-0" :class="dataStore.state.mainClass">
    <section :class="dataStore.state.sectionclass">
      <div :class="dataStore.state.containerClass">
        <router-view v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import useDataStore from "@/stores";
const dataStore = useDataStore();
</script>
<style>
.route-enter-from {
  opacity: 0;
  transform: translateX(50px);
}
.route-enter-active {
  transition: all 0.3s ease-out; 
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
.route-leave-active {
  transition: all 0.3s ease-in; 
}
</style>
