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

  <!--  <figure class="reactive">-->
  <!--    <img class="" src="https://picsum.photos/id/337/400/400" title="" alt="">-->
  <!--    <figcaption class="bg-red-400 p-3">-->
  <!--      <div class="flex justify-between">-->
  <!--        <h2 class="">title</h2>-->
  <!--        <span class="">-->
  <!--          <a class="" href=""><i class="icon&#45;&#45;home"></i></a>-->
  <!--        </span>-->
  <!--      </div>-->
  <!--      <p>-->
  <!--        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora debitis iure, aut tenetur reiciendis soluta!-->
  <!--      </p>-->
  <!--    </figcaption>-->
  <!--  </figure>-->


  <figure class="effect-zoe">
    <img src="/img/my.hacoupian.png" alt="img25" />
    <figcaption>
      <!-- <h2>Creative <span>Zoe</span></h2> -->
      <h2>Hacopian Survey</h2>
      <p class="icon-links">
        <a href="#"><i class="icon--home"></i></a>
        <a href="#"><i class="icon--github"></i></a>
        <a href="#"><i class="icon--codeopen"></i></a>
      </p>
      <p class="description">
        Zoe never had the patience of her sisters. She deliberately punched the
        bear in his face.
      </p>
    </figcaption>
  </figure>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
import useDataStore from "@/stores";
import { reactive } from "vue";
import { getImgUrl } from "@/utils";

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
  @apply block m-0 relative overflow-hidden text-center cursor-pointer bg-[#212121] aspect-square duration-1000;
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
    @apply block absolute top-0 left-0 w-full h-full;
    padding: 2em;
    backface-visibility: hidden;

    &:before {
      @apply absolute top-0 left-0 w-full h-full;
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
    @apply absolute right-0 bottom-0 opacity-0 text-right text-white;
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

.effect-zoe {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 320px;
  max-width: 480px;
  max-height: 360px;
  width: 48%;
  
  text-align: center;
  cursor: pointer;
}
.effect-zoe:hover{
  // background: #3085a3;
  background: #000000;
}
.effect-zoe img {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.8;
}

.effect-zoe figcaption {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.effect-zoe figcaption::before,
.effect-zoe figcaption::after {
  pointer-events: none;
}

.effect-zoe figcaption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.effect-zoe h2 {
  word-spacing: -0.15em;
  font-weight: 300;
}

.effect-zoe h2 span {
  font-weight: 800;
}

.effect-zoe h2,
.effect-zoe p {
  margin: 0;
}

.effect-zoe p {
  letter-spacing: 1px;
  font-size: 68.5%;
}

.effect-zoe figcaption {
  top: auto;
  bottom: 0;
  padding: 1em;
  height: 3.75em;
  background: #fff;
  color: #3c4a50;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

.effect-zoe h2 {
  float: left;
}

.effect-zoe p.icon-links a {
  float: right;
  color: #3c4a50;
  font-size: 1.4em;
}

.effect-zoe:hover p.icon-links a:hover,
.effect-zoe:hover p.icon-links a:focus {
  color: #252d31;
}

.effect-zoe p.description {
  position: absolute;
  bottom: 8em;
  padding: 2em;
  color: #fff;
  text-transform: none;
  font-size: 90%;
  opacity: 0;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
  -webkit-backface-visibility: hidden;
}

.effect-zoe h2,
.effect-zoe p.icon-links a {
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, 200%, 0);
  transform: translate3d(0, 200%, 0);
}

.effect-zoe p.icon-links a span::before {
  display: inline-block;
  padding: 8px 10px;
  font-family: "feathericons";
  speak: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-eye::before {
  content: "\e000";
}

.icon-paper-clip::before {
  content: "\e001";
}

.icon-heart::before {
  content: "\e024";
}

.effect-zoe h2 {
  display: inline-block;
}

.effect-zoe:hover p.description {
  opacity: 1;
}

.effect-zoe:hover figcaption,
.effect-zoe:hover h2,
.effect-zoe:hover p.icon-links a {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.effect-zoe:hover h2 {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}

.effect-zoe:hover p.icon-links a:nth-child(3) {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

.effect-zoe:hover p.icon-links a:nth-child(2) {
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

.effect-zoe:hover p.icon-links a:first-child {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

@media screen and (max-width: 50em) {
  .effect-zoe {
    display: inline-block;
    float: none;
    margin: 10px auto;
    width: 100%;
  }
}

/*! CSS Used fontfaces */
@font-face {
  font-weight: normal;
  font-style: normal;
  font-family: "feathericons";
  src: url("https://tympanus.net/Development/HoverEffectIdeas/fonts/feathericons/feathericons.eot?-8is7zf");
  src: url("https://tympanus.net/Development/HoverEffectIdeas/fonts/feathericons/feathericons.eot#iefix-8is7zf")
      format("embedded-opentype"),
    url("https://tympanus.net/Development/HoverEffectIdeas/fonts/feathericons/feathericons.woff?-8is7zf")
      format("woff"),
    url("https://tympanus.net/Development/HoverEffectIdeas/fonts/feathericons/feathericons.ttf?-8is7zf")
      format("truetype"),
    url("https://tympanus.net/Development/HoverEffectIdeas/fonts/feathericons/feathericons.svg?-8is7zf#feathericons")
      format("svg");
}
</style>
