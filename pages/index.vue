<template>
    <!-- <div class=" grid grid-rows-[max-content_1fr_max-content] h-full">
        <div class="self-end lg:order-1 mt-24">
            <strong class="text-2xl md:text-3xl mb-3 inline-block text-secondary">Hi, I`m</strong>
            <h1 class="text-4xl md:text-5xl capitalize font-bold text-secondary">
                amir maghami
            </h1>
            <div class="flex py-8">
                <a href="/pdf/ResumeFrontEndAmirMaghami.pdf" download
                    class="px-5 py-2 rounded text-white text-sm no-underline bg-[#42b883] border border-[#42b883]">
                    Download CV
                </a>
            </div>
        </div>
        <div class="self-center lg:order-2">
            <div class="grid justify-center text-center gap-y-6">
                <h1 class="text-4xl md:text-7xl capitalize font-bold">
                    {{ slide.text }}
                </h1>
                <h1 class="text-xl md:text-4xl capitalize font-bold">developer</h1>
                <img class="block mx-auto max-h-20 md:max-h-48" :class="slide.imgStyle" :src="getImgUrl(slide.img)"
                    title="" alt="" />
            </div>
        </div>
    </div> -->
    <div class="py-8 h-full flex flex-col justify-evenly gap-y-4">
        <div class="">
            <div class="grid justify-center text-center gap-y-6">
                <h1 class="text-secondary text-5xl font-bold ">
                    {{ slide.text }}
                </h1>
                <h1 class="text-secondary text-2xl font-bold">developer</h1>
                <img class="block mx-auto max-h-20 max-w-40 object-contain md:max-h-48" :class="slide.imgStyle" :src="getImgUrl(slide.img)"
                title="" alt="" />
            </div>
        </div>
        <div class="text-center">
            <strong class="text-secondary text-2xl leading-[40.32px] font-semibold">Hi, I`m</strong>
            <h1 class="text-secondary text-3xl leading-[50.4px] capitalize font-black">
                amir maghami
            </h1>
            <div class="py-8">
                <a href="/pdf/ResumeFrontEndAmirMaghami.pdf" download
                    class="px-5 py-2 rounded text-white text-sm no-underline bg-[#42b883] border border-[#42b883]">
                    Download CV
                </a>
            </div>
        </div>
    </div>
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
const slidTimer = 5000;
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
// import { ref } from "vue";
// import { getImgUrl } from "@/utils";
// import useDataStore from "@/stores";
// const dataStore = useDataStore();
// dataStore.setMainClass("grid");
// dataStore.setSectionClass("grid grid-cols-1 gap-y-8");
// dataStore.setContainerClass("container mx-auto grid");
// const slideData = [
//     {
//         img: "js.png",
//         text: "full stack",
//         imgStyle: "h-44",
//     },
//     {
//         img: "nodejs.svg",
//         text: "back end",
//         imgStyle: "h-28",
//     },
//     {
//         img: "vue.svg",
//         text: "front end",
//         imgStyle: "h-32",
//     },
// ];
// const slide = ref({
//     img: "js.png",
//     text: "full stack",
//     imgStyle: "h-44",
// });
// let i = 1;
// const slidTimer = 1500;
// setTimeout(function run() {
//     slide.value = slideData[i];
//     i++;
//     if (i < slideData.length) {
//         setTimeout(run, slidTimer);
//     } else {
//         i = 0;
//         setTimeout(run, slidTimer);
//     }
// }, slidTimer);
</script>
<style lang="scss">
</style>