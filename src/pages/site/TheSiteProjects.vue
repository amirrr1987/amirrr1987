<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 p-5 auto-rows-max"
  >
    <div class="col-span-full">
      <h3 class="text-xl">Projects:</h3>
      <hr class="my-4 border-[#FFF]" />
    </div>
    <template v-for="(item, index) in projects" :key="index">
      <figure class="effect">
        <img class="effect__img" :src="getImgUrl(item.img)" alt="img25" />
        <figcaption class="effect__caption">
          <h2 class="effect__title">{{ item.title }}</h2>
          <p class="effect__links">
            <a href="#"><i class="icon--link"></i></a>
            <a href="#"><i class="icon--github"></i></a>
          </p>
          <p class="effect__description">
            {{ item.text }}
          </p>
        </figcaption>
      </figure>
    </template>
  </div>
</template>
<script setup lang="ts">
import useDataStore from "@/stores";
import { reactive } from "vue";
import { getImgUrl } from "@/utils";

const dataStore = useDataStore();
dataStore.setContainerClass("container mx-auto");

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
  {
    img: "dr-jamei.png",
    title: "Dr-Jamei",
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
$color_1: #3498db;
$color_2: #528cb3;
$color_3: #fff;
$color_4: #3c4a50;
$color_5: #252d31;
$font-family_1: "feathericons";

.effect {
  @apply relative overflow-hidden w-full aspect-square text-center cursor-pointer rounded-full duration-75;
  background: #3085a3;
  &:hover {
    @apply rounded;
    .effect__links {
      a {
        transform: translate3d(0, 0, 0);
        &:hover {
          color: $color_5;
        }

        &:focus {
          color: $color_5;
        }
        &:first-child {
          @apply duration-[3s];
        }
        &:nth-child(2) {
          @apply duration-[2s];
        }
      }
    }

    .effect__description {
      opacity: 1;
      font-size: 1.2rem;
    }

    .effect__caption {
      transform: translate3d(0, 0, 0);
    }

    .effect__title {
      transform: translate3d(0, 0, 0);
      @apply duration-[1s];
    }
  }

  &__img {
    position: relative;
    display: block;
    min-height: 100%;
    max-width: 100%;
    opacity: 0.8;
  }

  &__caption {
    text-transform: uppercase;
    font-size: 1.25em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    left: 0;
    width: 100%;
    top: auto;
    bottom: 0;
    padding: 1em;
    height: 3.75em;
    background: #fff;
    color: $color_4;
    transition: transform 0.35s;
    transform: translate3d(0, 100%, 0);

    &::before {
      pointer-events: none;
    }

    &::after {
      pointer-events: none;
    }
  }

  &__title {
    word-spacing: -0.15em;
    font-weight: 300;
    margin: 0;
    float: left;
    transition: transform 0.35s;
    transform: translate3d(0, 200%, 0);
    display: inline-block;

    span {
      font-weight: 800;
    }
  }

  p {
    margin: 0;
    letter-spacing: 1px;
    font-size: 68.5%;
  }

  &__links {
    a {
      float: right;
      color: $color_4;
      font-size: 1.4em;
      transition: transform 0.35s;
      transform: translate3d(0, 200%, 0);

      span {
        &::before {
          display: inline-block;
          padding: 8px 10px;
          font-family: $font-family_1;
        }
      }
    }
  }

  &__description {
    position: absolute;
    bottom: 8em;
    padding: 2em;
    color: $color_3;
    text-transform: none;
    font-size: 90%;
    opacity: 0;
    transition: opacity 0.35s;
  }
}
</style>
