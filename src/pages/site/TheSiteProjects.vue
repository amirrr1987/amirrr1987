<template>
  <div class="col-span-full">
    <h3 class="text-xl">Projects:</h3>
    <hr class="my-4 border-[#FFF]" />
  </div>
  <template v-for="(item, index) in projects" :key="index">
    <figure class="effect">
      <img class="effect__img" :src="getImgUrl(item.img)" alt="Flowers" />
      <figcaption class="effect__caption">
        <h2 class="effect__title">{{ item.title }}</h2>
        <p class="effect__text">{{ item.text }}</p>
        <router-link :to="item.link" class="effect__link">more</router-link>
      </figcaption>
    </figure>
  </template>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
import useDataStore from "@/stores";
import { reactive } from "vue";
import { getImgUrl } from '@/utils'

const dataStore = useDataStore();
dataStore.setContainerClass(
  "container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 auto-rows-max	"
);

const projects = reactive([
  {
    img: "my.hacoupian.png",
    title: "My Hacopian",
    text: "Apollo's last game of pool was so strange.",
    link: "/single",
  },
  {
    img: "dr-jamei.png",
    title: "Dr-Jamei",
    text: "Apollo's last game of pool was so strange.",
    link: "/single",
  },
]);



</script>

<style lang="scss">
.effect {
  @apply block m-0 relative overflow-hidden text-center cursor-pointer bg-[#dcedf1] aspect-square duration-1000;
  &:hover {
    .effect__img {
      @apply opacity-60;
      transform: scale3d(1, 1, 1);
    }

    .effect__caption::before {
      transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
        translate3d(0, 100%, 0);
    }

    .effect__text {
      @apply opacity-100;
      transition-delay: 0.1s;
    }
    .effect__title {
      @apply bg-[#f1f1f1] text-[#35495e] shadow border max-w-full text-center m-0;      
    }
  }

  &__img {
    @apply border-0 relative block min-h-full max-w-full;
    opacity: 0.95;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale3d(1.05, 1.05, 1);
  }

  &__caption {
    @apply block;
    padding: 2em;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.5);
      content: "";
      transition: transform 0.6s;
      transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
        translate3d(0, -100%, 0);
      pointer-events: none;
    }

    &:after {
      pointer-events: none;
    }
  }

  &__title {
    @apply text-blue-500 py-2 px-5 capitalize max-w-max rounded-full m-0 text-left duration-1000;
  }

  &__text {
    @apply absolute right-0 bottom-0 opacity-0 text-right bg-[red];
    margin: 3em;
    padding: 0 1em;
    border-right: 4px solid #fff;
    opacity: 0;
    transition: opacity 0.35s;
  }

  &__link {
    @apply absolute top-0 left-0 w-full h-full z-50 text-[0px] opacity-0 text-[#dcedf1];
    text-indent: 200%;
    white-space: nowrap;
  }
}
</style>
