<template>
  <div class="h-full grid grid-cols-2 grid-rows-[1fr,max-content,1fr] lg:grid-rows-[2fr,1fr] p-5">

    <div class="row-start-1 row-end-2 col-start-1 col-end-3 lg:col-start-2 lg:col-end-3">
      <ApexChart :chartData="chartData" />
    </div>

    <div class="row-start-3 row-end-4 col-start-1 col-end-3 lg:row-start-1 lg:row-end-3 lg:col-end-2 flex justify-center items-center">
      <div
        class="grid grid-cols-6 grid-rows-6 gap-3 aspect-square lg:-rotate-45 w-9/12 row-start-2 "
      >
        <template v-for="(item, index) in skills" :key="index">
          <button
            class="skill"
            :class="item.position"
            @click="setData(item.name)"
          >
            <div class="lg:rotate-45">{{ item.name }}</div>
          </button>
        </template>
      </div>
    </div>

    <div class="row-start-2 row-end-3 col-start-1 col-end-3 lg:col-start-2 lg:col-end-3 relative overflow-hidden">
      <transition name="list" mode="out-in">
        
        <div
          v-if="showCaption"
          class="caption"
        >
        <div class=""><span class="mr-2">skill:</span><span class="text-[#42b883]">{</span></div>
            <div class="pl-10 grid grid-cols-[max-content,1fr] gap-x-2"><span class="">title: </span>"{{ targetSkill.name }}",</div>
            <div class="pl-10 grid grid-cols-[max-content,1fr] gap-x-2"><span class="">detial: </span>"{{ targetSkill.caption }}",</div>
            <div class="pl-10 grid grid-cols-[max-content,1fr] gap-x-2"><span class="">deuration: </span>{{ targetSkill.duration }},</div>
            <div class="pl-10 grid grid-cols-[max-content,1fr] gap-x-2"><span class="">chartData: </span>{{ targetSkill.data }},</div>
            <div><span class="text-[#42b883]">}</span></div>
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
    caption: "lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-1 col-start-1",
    duration: 34,
    data: [100, 80, 70, 0, 30],
  },
  {
    name: "HTML",
    caption: "lorem10",
    position: "row-start-1 col-start-2",
    duration: 34,
    data: [100, 80, 70, 0, 30],
  },
  {
    name: "CSS",
    caption: "lorem10",
    position: "row-start-1 col-start-3",
    duration: 34,
    data: [100, 10, 10, 80, 90],
  },
  {
    name: "SCSS",
    caption: "lorem10",
    position: "row-start-1 col-start-4",
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
  {
    name: "JavaScript",
    caption: "lorem10",
    position: "row-start-1 col-start-5",
    duration: 34,
    data: [100, 10, 100, 0, 50],
  },
  {
    name: "JavaScript",
    caption: "lorem10",
    position: "row-start-1 col-start-6",
    duration: 34,
    data: [100, 10, 100, 0, 50],
  },
  {
    name: "Tailwind",
    caption: "lorem10",
    position: "row-start-2 col-start-1",
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
  {
    name: "CSS Grid",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-2 col-start-2",
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
  {
    name: "CSS Grid",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-2 col-start-3",
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
  
    showCaption.value = false;
  setTimeout(() => {
    showCaption.value = true;
  }, 400);
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
.caption{
  
}
.skill {
  /* @apply border border-[red] w-28 h-28 block hover:bg-[red] duration-500; */
  @apply bg-gray-500 text-white;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  transform: rotateX(-200px);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: rotateX(0px);
}

.list-enter-active,
.list-leave-active {
  transition: all .4s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
