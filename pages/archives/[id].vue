<template>
    <div>
        <figure class="">
            <img class="w-full" src="@/assets/img/camo.png" title="" alt="">
            <figcaption class="p-4">
                <h5 class="text-lg leading-[1.68rem]  font-bold text-secondary capitalize mb-4">{{ singleProject.title }}</h5>
                <p class="text-base leading-[1.068rem] font-normal text-secondary">
                    {{ singleProject.description }}
                </p>
               
            </figcaption>
        </figure>
    </div>
</template>

<script setup lang="ts">
import useDataStore from '~~/stores';
const { id } = useRoute().params
const store = useDataStore()
const singleProject = store.getSingleArchive({ archiveId: id })
</script>

<style lang="scss">

</style>