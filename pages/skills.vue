<template>
  <div class="">
    <div class="amir grid grid-cols-3 gap-16">
      <figure class="effect effect--layla" v-for="project in store.projects">
        <img
          class="w-full"
          src="https://tympanus.net/Development/HoverEffectIdeas/img/6.jpg"
          alt="img06"
        />
        <figcaption>
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <NuxtLink
            :to="`/projects/${project.id}`"
            class="text-base leading-[17.088px] font-normal text-secondary no-underline"
          >
            more..</NuxtLink
          >
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "~/stores";

const store = useDataStore();
</script>

<style lang="scss">
.effect {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 320px;
  max-width: 480px;
  max-height: 360px;
  width: 100%;
  background: #3085a3;
  text-align: center;
  cursor: pointer;
  h2 {
    word-spacing: -0.15em;
    font-weight: 300;
    margin: 0;
    span {
      font-weight: 800;
    }
  }
  p {
    margin: 0;
    letter-spacing: 1px;
    font-size: 68.5%;
  }
  img {
    position: relative;
    display: block;
    min-height: 100%;
    max-width: 100%;
    opacity: 0.8;
  }
  figcaption {
    padding: 2em;
    color: #fff;
    // text-transform: uppercase;
    font-size: 1em;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &::before {
      pointer-events: none;
    }
    &::after {
      pointer-events: none;
    }
    & > a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
      text-indent: 200%;
      white-space: nowrap;
      font-size: 0;
      opacity: 0;
    }
  }

  &--layla {
    img {
      height: 390px;
      transform: translate3d(0, -30px, 0);
      transition: opacity 0.35s, transform 0.35s;
    }
    h2 {
      padding-top: 0%;
      transition: transform 0.35s;
      transform: translate3d(0, -30px, 0);
    }
    p {
      padding: 0.5em 2em;
      text-transform: none;
      opacity: 0;
      transform: translate3d(0, -10px, 0);
      transition: opacity 0.35s, transform 0.35s;
    }
    figcaption {
      padding: 3em;
      &::before {
        position: absolute;
        content: "";
        opacity: 0;
        top: 50px;
        right: 30px;
        bottom: 50px;
        left: 30px;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        transform: scale(0, 1);
        transform-origin: 0 0;
        transition: opacity 0.35s, transform 0.35s;
      }
      &::after {
        position: absolute;
        content: "";
        opacity: 0;
        top: 30px;
        right: 50px;
        bottom: 30px;
        left: 50px;
        border-right: 1px solid #fff;
        border-left: 1px solid #fff;
        transform: scale(1, 0);
        transform-origin: 100% 0;
        transition: opacity 0.35s, transform 0.35s;
      }
    }

    &:hover {
      img {
        opacity: 0.7;
        transform: translate3d(0, 0, 0);
        transition-delay: 0.15s;
      }
      h2 {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition-delay: 0.15s;
      }
      p {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition-delay: 0.15s;
      }

      figcaption {
        &::before {
          opacity: 1;
          transform: scale(1);
        }
        ::after {
          opacity: 1;
          transform: scale(1);
          transition-delay: 0.15s;
        }
      }
    }
  }
}
</style>
