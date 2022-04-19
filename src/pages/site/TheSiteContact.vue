<template>
    <div class="col-span-full">
        <h3 class="text-xl">Contact me:</h3>
        <hr class="mt-3 mb-5">
    </div>
    <form class="bg-[#42b883] p-5 rounded">
        <input class="block border outline-none w-full mb-3 rounded px-3 py-2" type="text">
        <input class="block border outline-none w-full mb-3 rounded px-3 py-2" type="text">
        <textarea rows="10" class="block border outline-none w-full mb-3 rounded px-3 py-2 "></textarea>
        <button class="bg-white px-20 py-4 rounded mx-auto block">Send</button>   
    </form>
</template>
<script setup lang="ts">
import useDataStore from "@/stores";
const dataStore = useDataStore();
dataStore.setContainerClass('container mx-auto grid grid-cols-2 gap-5 p-5');
</script>
