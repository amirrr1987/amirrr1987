<template>
  <div class="grid grid-cols-[max-content_30rem_1fr] items-center">
    <div class="grid grid-cols-6 grid-rows-6 gap-3 aspect-square lg:-rotate-45">
      <button
        class="bg-gray-500 text-white text-xs"
        :class="item.position"
        @click="setData(item.name)"
        v-for="(item, index) in skills"
        :key="index"
      >
        <div class="lg:rotate-45">{{ item.name }}</div>
      </button>
    </div>
    <div class="-translate-x-40">
      <transition name="list" mode="out-in">
        <div v-if="showCaption" class="">
          <div class="">
            <span class="mr-2 text-[#42b883]">"skill":</span
            ><span class="text-[#42b883]">{</span>
          </div>
          <div class="pl-10 flex gap-x-2">
            <span class="text-[#42b883]">"title": </span
            ><span class="flex-1">"{{ targetSkill.name }}",</span>
          </div>
          <div class="pl-10 flex gap-x-2">
            <span class="text-[#42b883]">"detail": </span>
            <span class="flex-1">"{{ targetSkill.caption }}",</span>
          </div>
          <div class="pl-10 flex gap-x-2">
            <span class="text-[#42b883]">"duration":</span
            ><span class="flex-1">{{ targetSkill.duration }},</span>
          </div>
          <div class="pl-10 flex gap-x-2">
            <span class="text-[#42b883]">"chartData": </span
            ><span class="flex-1">{{ targetSkill.data }},</span>
          </div>
          <div><span class="ml-1 text-[#42b883]">}</span></div>
        </div>
      </transition>
    </div>
    <SkillChart :chartData="chartData" />
  </div>
</template>
<script setup lang="ts">
const skills = reactive([
  {
    name: "Network+",
    caption:
      "lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
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
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-2 col-start-2",
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
  {
    name: "CSS Grid",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-2 col-start-3",
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
  {
    name: "CSS Grid",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-2 col-start-4",
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
    {
    name: "CSS Grid",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-2 col-start-5",
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
  {
    name: "CSS Grid",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-3 col-start-1",
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
  {
    name: "CSS Grid",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-3 col-start-2",
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
  {
    name: "CSS Grid",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-3 col-start-3",
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
    {
    name: "CSS Grid",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-3 col-start-4",
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
  {
    name: "CSS Grid",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-4 col-start-1",
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
  {
    name: "CSS Grid",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-4 col-start-2",
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
    {
    name: "CSS Grid",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-4 col-start-3",
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
  {
    name: "CSS Grid",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-5 col-start-1",
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
   {
    name: "CSS Grid",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-5 col-start-2",
    duration: 34,
    data: [100, 10, 10, 0, 50],
  },
  {
    name: "CSS Grid",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut!",
    position: "row-start-6 col-start-1",
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
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
