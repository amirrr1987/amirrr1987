<template>
  <div class="grid min-h-svh grid-rows-[auto_1fr_auto]">
    <TheHeader />
    <main class="relative z-10 min-h-[calc(100svh-9rem)] overflow-x-hidden py-6 sm:py-8 lg:py-10">
      <ClientOnly>
        <SceneFloatingShape v-if="showAccent3d" />
      </ClientOnly>
      <Transition name="page-fade" mode="out-in">
        <div :key="routeKey">
          <slot />
        </div>
      </Transition>
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const routeKey = computed(() => route.fullPath);
const showAccent3d = computed(() => route.path !== "/");
</script>
