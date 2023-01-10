<template>
    <div class="h-[100svh] grid grid-cols-2 gap-px p-px text-6xl text-gray-600">

        <RourerLink class="bg-primary flex items-center justify-center" to="/">
            <i class="icon--website"></i>
        </RourerLink>
        <a class="bg-primary flex items-center justify-center" href="" target="_blank">
            <i class="icon--linkedin"></i>
        </a>
        <a class="bg-primary flex items-center justify-center" href="" target="_blank">
            <i class="icon--phone"></i>
        </a>
        <a class="bg-primary flex items-center justify-center" href="" target="_blank">
            <i class="icon--mail"></i>
        </a>
        <a class="bg-primary flex items-center justify-center" href="" target="_blank">
            <i class="icon--github"></i>
        </a>
        <a class="bg-primary flex items-center justify-center" href="" target="_blank">
            <i class="icon--stackoverflow"></i>
        </a>
        <a class="bg-primary flex items-center justify-center" href="" target="_blank">
            <i class="icon--skype"></i>
        </a>
        <a class="bg-primary flex items-center justify-center" href="" target="_blank">
            <i class="icon--codeopen"></i>
        </a>
        <a class="bg-primary flex items-center justify-center" href="" target="_blank">
            <i class="icon--whatsapp"></i>
        </a>
        <a class="bg-primary flex items-center justify-center" href="" target="_blank">
            <i class="icon--telegram"></i>
        </a>
    </div>
</template>
<script setup lang="ts">
import useDataStore from "@/stores";
import TheLottiePlayer from "@/components/TheLottiePlayer.vue";

const dataStore = useDataStore();
dataStore.setMainClass("grid");
dataStore.setSectionClass("grid");
dataStore.setContainerClass("container mx-auto grid p-5");
</script>
<style lang="scss">

</style>
