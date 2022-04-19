<template>
  <div class="self-end">
    <strong class="text-3xl mb-3 inline-block text-[#414141]">Hi, I`m</strong>
    <h1 class="text-5xl capitalize font-bold text-[#414141]">amir maghami</h1>
    <div class="flex py-8">
      <a
        href=""
        class="px-5 py-2 rounded text-white bg-[#42b883] border border-[#42b883]"
      >
        Download CV
      </a>
    </div>
  </div>
  <div class="self-center">
    <div class="grid justify-center text-center gap-y-9">
      <h1 class="text-7xl capitalize font-bold">{{ slide.text }}</h1>
      <h1 class="text-4xl capitalize font-bold">developer</h1>
      <img
        class="block mx-auto max-h-48"
        :class="slide.imgStyle"
        :src="getImgUrl(slide.img)"
        title=""
        alt=""
      />
    </div>
  </div>
  <div class="">
    <img class="w-80 block ml-auto" src="@/assets/img/me.png" title="" alt="" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import useDataStore from "@/stores";
const dataStore = useDataStore();

dataStore.setMainClass("grid");
dataStore.setSectionClass("grid grid-cols-1 gap-y-8");
dataStore.setContainerClass("container mx-auto grid grid-cols-3 p-5");
const slideData = [
  {
    img: "js.png",
    text: "full stack",
    imgStyle: "h-44",
  },
  {
    img: "nodejs.svg",
    text: "back end",
    imgStyle: "h-28",
  },
  {
    img: "vue.svg",
    text: "front end",
    imgStyle: "h-32",
  },
];

const slide = ref({
  img: "js.png",
  text: "full stack",
});

let i = 0;
const slidTimer = 3000;
setTimeout(function run() {
  slide.value = slideData[i];
  i++;
  if (i < slideData.length) {
    setTimeout(run, slidTimer);
  } else {
    i = 0;
    setTimeout(run, slidTimer);
  }
}, slidTimer);

const getImgUrl = (imgName) => {
  return "img/" + imgName;
};
</script>
