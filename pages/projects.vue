<template>
  <div class="">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <figure class="card" v-for="(project,index) in store.projects" :key="index">
        <nuxt-img class="card__img" :src="`https://picsum.photos/id/${index+1}/600/400`" alt="" />
        <figcaption class="card__body">
          <h3 class="card__title">{{ project.title }}</h3>
          <p class="card__description">
            {{ project.description }}
		
          </p>
          <p class="card__icons">
            <a href="#">
              <Icon name="tabler:heart" size="24" />
            </a>
            <a href="#">
              <Icon name="tabler:eye" size="24" />
            </a>
          </p>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "~/stores";

const store = useDataStore();
</script>

<style lang="less">
@namespace: ~"card";

.@{namespace} {
  @apply h-80 z-50 relative rounded-3xl shadow overflow-hidden;

  &__img {
    @apply absolute inset-0 m-auto w-full h-full object-cover;
  }

  &__body {
    @apply absolute inset-0 m-auto w-full h-full p-4 text-center duration-500 bg-transparent grid;

    &::after {
      @apply bg-white absolute inset-x-0 bottom-0 w-full h-16 border-t;
      content: "";
    }
  }

  &__title {
    @apply absolute bottom-0 left-0 z-50 duration-500 h-16 flex items-center px-4;
  }

  &__description {
    @apply flex justify-center items-center text-white duration-500 translate-y-full duration-500 translate-y-0 opacity-0 z-50 select-none;
  }

  &__icons {
    @apply absolute bottom-0 right-0 z-50 flex gap-x-4 duration-500 translate-y-full h-16 flex items-center px-4;
  }


  &:hover {
    .@{namespace}__body {
      @apply bg-gray-500;

      &::after {
        @apply translate-y-0;
      }
    }

    .@{namespace}__title {
      @apply translate-y-0;
    }

    .@{namespace}__description {
      @apply -translate-y-8 opacity-100;
    }

    .@{namespace}__icons {
      @apply translate-y-0;
    }
  }
}
</style>
