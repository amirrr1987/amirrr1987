<template>
  <section class="h-custom">
    <div
      class="container mx-auto p-4 h-full flex flex-col items-center justify-center space-y-8 text-center"
    >
      <strong class="text-gray-600 text-5xl font-bold">{{ slide.text }}</strong>
      <strong class="text-gray-600 text-2xl font-bold">developer</strong>
      <img
        class="w-42 h-42 object-contain"
        :src="getImgUrl(slide.img)"
        title=""
        alt=""
      />
      <strong>Hi, I`m</strong>
      <h1 class="text-5xl text-gray-600">Amir Maghami</h1>
      <a
        :href="`/pdf/Resume-Frontend-AmirMaghami.pdf`"
        download
        class="px-5 py-2 rounded text-white text-sm no-underline bg-[#42b883] border border-[#42b883]"
      >
        Download CV
      </a>
    </div>
  </section>
</template>
<script setup lang="ts">
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
  imgStyle: "h-44",
});
let i = 1;
const slidTimer = 2500;
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
const getImgUrl = (imgName: string) => {
  return "img/" + imgName;
};
</script>
<style lang="less">
.h-custom {
  height: 100svh;
}
</style>
