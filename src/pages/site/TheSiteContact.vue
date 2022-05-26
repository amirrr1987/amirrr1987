<template>
  <div class="grid lg:grid-cols-2 xl:grid-cols-[3fr,2.5fr] gap-10 ">
    <img
      class="h-72 mx-auto col-span-full lg:col-span-1"
      src="@/assets/img/contact.svg"
      title=""
      alt=""
    />
    <TheLottiePlayer class="hidden lg:block lg:h-72" src="https://assets5.lottiefiles.com/packages/lf20_3ntisyac.json" />
    <div class="grid gap-5">
      <div class="col-span-2">
        <h3 class="mb-3 capitalize font-bold text-2xl text-[#35495e]">
          Contact
        </h3>
        <p class="text-[#35495e] mb-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          similique aliquid officia! Sit nesciunt voluptatum perspiciatis nulla
          itaque sunt ullam.
        </p>
        <div class="">
          <a class="block">
            <i class="icon--mail mr-1"></i>
            <span>Maghami.A1987@gmail.com</span>
          </a>
          <a class="block">
            <i class="icon--phone mr-1"></i>
            <span>+989198881400</span>
          </a>
        </div>
      </div>

      <div class="col-span-2 sm:col-span-1">
        <h3 class="mb-3 capitalize font-bold text-2xl text-[#35495e]">
          Code Review
        </h3>
        <div class="">
          <a class="block">
            <i class="icon--github mr-1"></i>
            <span class="text-sm">https://github.com/amirrr1987</span>
          </a>
          <a class="block">
            <i class="icon--stackoverflow mr-1"></i>
            <span class="text-sm"
              >https://b2n.ir/b39690</span
            >
          </a>
          <a class="block">
            <i class="icon--codeopen mr-1"></i>
            <span class="text-sm">https://codepen.io/amirrr1987</span>
          </a>
        </div>
      </div>

      <div class="col-span-2 sm:col-span-1">
        <h3 class="mb-3 capitalize font-bold text-2xl text-[#35495e]">
          Social
        </h3>
        <div class="">
          <a class="block">
            <i class="icon--skype mr-1"></i>
            <span class="text-sm"
              >https://b2n.ir/u65001</span
            >
          </a>
          <a class="block">
            <i class="icon--linkedin mr-1"></i>
            <span class="text-sm">https://b2n.ir/f24225</span>
          </a>
        </div>
      </div>
    </div>

    <form class="grid grid-cols-2 gap-5">
      <legend class="col-span-2">Send a mail</legend>

      <input
        class="col-span-1 p-3 outline-0"
        type="text"
        placeholder="First name:"
      />

      <input
        class="col-span-1 p-3 outline-0"
        type="text"
        placeholder="Last name:"
      />

      <input
        class="col-span-2 p-3 outline-0"
        type="text"
        placeholder="Email:"
      />

      <textarea
        rows="10"
        class="col-span-2 p-3 outline-0"
        placeholder="Your message:"
      ></textarea>

      <div class="col-span-2">
        <button class="bg-[#35495e] text-white px-5 py-2 rounded">
          Submit
        </button>
      </div>
    </form>
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
<style lang="scss"></style>
