<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8 gap-4 auto-rows-max h-full">
        <template v-for="blog in store.state.blogs">
            <figure class="shadow rounded bg-light-200">
                <img class="w-full" src="@/assets/img/camo.png" title="" alt="">
                <figcaption class="p-4">
                    <h5 class="text-lg leading-[1.68rem]  font-bold text-secondary capitalize mb-4">{{ project.title }}
                    </h5>
                    <p class="text-base leading-[1.068rem] font-normal text-secondary">
                        {{ blog.description }}
                    </p>
                    <NuxtLink :to="`/blogs/${blog.id}`"
                        class="text-base leading-[17.088px] font-normal text-secondary no-underline">
                        more..</NuxtLink>
                </figcaption>
            </figure>
        </template>
    </div>
</template>

<script setup lang="ts">
import useDataStore from '~~/stores';

const store = useDataStore()
</script>

<style lang="scss">

</style>