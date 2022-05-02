<template>
  <div class="h-full grid grid-cols-2 grid-rows-2 p-5">
    <div class="grid grid-cols-5">
      <button
        class="skill"
        @mouseenter="setData('HTML')"
        @mouseleave="showCaption = false"
      >
        HTML
      </button>
      <button class="skill" @mouseenter="setData('CSS')">CSS</button>
      <button class="skill" @mouseenter="setData('JavaScript')">
        JavaScript
      </button>
      <button class="skill" @mouseenter="setData('TypeScript')">
        TypeScript
      </button>
    </div>
    <div class="row-span-2">
      <ApexChart :chartData="chartData" />
    </div>
    <div class="relative overflow-hidden">
      <transition name="fade" mode="out-in">
        <div
          v-show="showCaption"
          class="caption"
          :class="showCaption ? '!translate-x-0' : 'translate-x-full'"
        >
          <h3>{{ targetSkill.name }}</h3>
          <p class="e">
            {{ targetSkill.caption }}
          </p>
          <div>{{ targetSkill.duration }}</div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import ApexChart from "@/components/ApexChart.vue";

import useDataStore from "@/stores";
const dataStore = useDataStore();
dataStore.setMainClass("grid");
dataStore.setSectionClass("grid grid-cols-1 gap-y-8");
dataStore.setContainerClass("container mx-auto");
const skills = reactive([
  {
    name: "HTML",
    caption: "lorem10",
    duration: 34,
  },
  {
    name: "CSS",
    caption: "lorem10",
    duration: 34,
  },
  {
    name: "SCSS",
    caption: "lorem10",
    duration: 34,
  },
  {
    name: "JavaScript",
    caption: "lorem10",
    duration: 34,
  },
  {
    name: "TailwindCSS",
    caption: "lorem10",
    duration: 34,
  },
  {
    name: "TypeScript",
    caption: "lorem10",
    duration: 34,
  },
]);
const targetSkill = ref({
  name: "",
  caption: "",
  duration: 0,
});
const skillIndex = (value: string) => {
  skills.find((item: any) => {
    item.name === value ? (targetSkill.value = item) : {};
  });
};
const showCaption = ref(false);
const setData = (value: string) => {
  skillIndex(value);
  showCaption.value = true;
};

const chartData = computed(() => {
  return [{ name: "amir ", data: [100, 10, 10, 0, 50] }];
});
</script>

<style>
.skill {
  @apply border border-[red] w-28 h-28 block hover:bg-[red] duration-500;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  transform: rotateX(-100px);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: rotateX(0px);
}
</style>
