<template>
  <div class="h-full grid grid-cols-2 grid-rows-3 p-5">
    <div class="row-span-3 flex justify-center items-center">
      <div
        class="grid grid-cols-6 grid-rows-6 gap-3 aspect-square -rotate-45 w-9/12"
      >
        <template v-for="(item, index) in skills" :key="index">
          <button
            class="skill"
            :class="item.position"
            @click="setData(item.name)"
          >
            <div class="rotate-45">{{ item.name }}</div>
          </button>
        </template>
      </div>
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
          <h3>Title: {{ targetSkill.name }}</h3>
          <p class="e">detial: {{ targetSkill.caption }}</p>
          <div>deuration : {{ targetSkill.duration }}</div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import ApexChart from "@/components/ApexChart.vue";

import useDataStore from "@/stores";
const dataStore = useDataStore();
dataStore.setMainClass("grid");
dataStore.setSectionClass("grid grid-cols-1 gap-y-8");
dataStore.setContainerClass("container mx-auto");
// const chartData = ref([]);
const skills = reactive([
  {
    name: "Network+",
    caption: "lorem10",
    position: 'row-start-1 col-start-1',
    duration: 34,
    data: [100, 80, 70, 0, 30],
  },
  {
    name: "HTML",
    caption: "lorem10",
    position: 'row-start-1 col-start-2',
    duration: 34,
    data: [100, 80, 70, 0, 30],
  },
  {
    name: "CSS",
    caption: "lorem10",
    position: 'row-start-1 col-start-3',
    duration: 34,
    data: [100, 10, 10, 80, 90],
  },
  {
    name: "SCSS",
    caption: "lorem10",
    position: 'row-start-1 col-start-4',
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
  {
    name: "JavaScript",
    caption: "lorem10",
    position: 'row-start-1 col-start-5',
    duration: 34,
    data: [100, 10, 100, 0, 50],
  },
  {
    name: "JavaScript",
    caption: "lorem10",
    position: 'row-start-1 col-start-6',
    duration: 34,
    data: [100, 10, 100, 0, 50],
  },
  {
    name: "Tailwind",
    caption: "lorem10",
    position: 'row-start-2 col-start-1',
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
  {
    name: "CSS Grid",
    caption: "lorem10",
    position: 'row-start-2 col-start-2',
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
  {
    name: "CSS Grid",
    caption: "lorem10",
    position: 'row-start-2 col-start-3',
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
]);
const targetSkill = ref({
  name: "",
  caption: "",
  duration: 0,
  data: [],
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
  if (showCaption.value) {
    return [targetSkill.value];
  } else {
    return [{ name: "title", data: [0, 0, 0, 0, 0] }];
  }
});
</script>

<style>
.skill {
  /* @apply border border-[red] w-28 h-28 block hover:bg-[red] duration-500; */
  @apply bg-gray-500 text-white;
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
