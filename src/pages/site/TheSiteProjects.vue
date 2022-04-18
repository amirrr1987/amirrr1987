<template>
    <div class="col-span-full">
        <h3 class="text-xl">Projects:</h3>
    <hr class="my-4 border-[#FFF]">
    </div>
    <figure class="relative overflow-hidden">
      <picture>
        <source media="(min-width:650px)" srcset="https://loremflickr.com/620/440" />
        <source media="(min-width:465px)" srcset="https://loremflickr.com/420/240" />
        <img src="https://loremflickr.com/220/40" alt="Flowers" class="w-full" />
      </picture>
 
      <figcaption class="absolute inset-x-0 bg-[#FF0F0033] top-0 h-full p-3 text-white">
        <h4 class="font-bold">title</h4>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, esse.
        </p>
        <RouterLink to="/single" class="btn btn-primary">
          View Project
        </RouterLink>
      </figcaption>
    </figure>
    <figure class="relative overflow-hidden">
      <picture>
        <source media="(min-width:650px)" srcset="https://loremflickr.com/620/440" />
        <source media="(min-width:465px)" srcset="https://loremflickr.com/420/240" />
        <img src="https://loremflickr.com/220/40" alt="Flowers" class="w-full" />
      </picture>
 
      <figcaption class="absolute inset-x-0 bg-[#FF0F0033] top-0 h-full p-3 text-white">
        <h4 class="font-bold">title</h4>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, esse.
        </p>
        <RouterLink to="/single" class="btn btn-primary">
          View Project
        </RouterLink>
      </figcaption>
    </figure>
    <figure class="relative overflow-hidden">
      <picture>
        <source media="(min-width:650px)" srcset="https://loremflickr.com/620/440" />
        <source media="(min-width:465px)" srcset="https://loremflickr.com/420/240" />
        <img src="https://loremflickr.com/220/40" alt="Flowers" class="w-full" />
      </picture>
 
      <figcaption class="absolute inset-x-0 bg-[#FF0F0033] top-0 h-full p-3 text-white">
        <h4 class="font-bold">title</h4>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, esse.
        </p>
        <RouterLink to="/single" class="btn btn-primary">
          View Project
        </RouterLink>
      </figcaption>
    </figure>
    <figure class="relative overflow-hidden">
      <picture>
        <source media="(min-width:650px)" srcset="https://loremflickr.com/620/440" />
        <source media="(min-width:465px)" srcset="https://loremflickr.com/420/240" />
        <img src="https://loremflickr.com/220/40" alt="Flowers" class="w-full" />
      </picture>
 
      <figcaption class="absolute inset-x-0 bg-[#FF0F0033] top-0 h-full p-3 text-white">
        <h4 class="font-bold">title</h4>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, esse.
        </p>
        <RouterLink to="/single" class="btn btn-primary">
          View Project
        </RouterLink>
      </figcaption>
    </figure>
    <figure class="relative overflow-hidden">
      <picture>
        <source media="(min-width:650px)" srcset="https://loremflickr.com/620/440" />
        <source media="(min-width:465px)" srcset="https://loremflickr.com/420/240" />
        <img src="https://loremflickr.com/220/40" alt="Flowers" class="w-full" />
      </picture>
 
      <figcaption class="absolute inset-x-0 bg-[#FF0F0033] top-0 h-full p-3 text-white">
        <h4 class="font-bold">title</h4>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, esse.
        </p>
        <RouterLink to="/single" class="btn btn-primary">
          View Project
        </RouterLink>
      </figcaption>
    </figure>

</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
import useDataStore from "@/stores";
const dataStore = useDataStore();
dataStore.setContainerClass('container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5');
</script>
