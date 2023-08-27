<template>
      <div class="py-8 h-full flex flex-col justify-evenly gap-y-4">
        <div class="">
            <div class="grid justify-center text-center gap-y-6">
                <h1 class="text-secondary text-5xl font-bold ">
                    {{ slide.text }}
                </h1>
                <h1 class="text-secondary text-2xl font-bold">developer</h1>
                <div class="h-20  mx-auto">
                    <img class="block mx-auto  h-28  object-contain"  :src="getImgUrl(slide.img)" title="" alt="" />
                </div>
            </div>
        </div>
        <div class="text-center">
            <strong class="text-secondary text-2xl leading-[40.32px] font-semibold">Hi, I`m</strong>
            <h1 class="text-secondary text-3xl leading-[50.4px] capitalize font-black">
                amir maghami
            </h1>

            <div class="py-8">
                <a href="/pdf/ResumeFrontEndAmirMaghamiEN-FA.pdf" download
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

</style>
