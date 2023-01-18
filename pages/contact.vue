<template>
    <div class="grid gap-y-8">
        <TheLottiePlayer class=" lg:block lg:h-72" src="https://assets5.lottiefiles.com/packages/lf20_3ntisyac.json" />
        <img class="w-full h-52 object-contain" src="@/assets/img/contact.svg" title="" alt="" />

        <div class="">
            <h3 class="capitalize font-bold text-lg leading-[30.24px] text-secondary">
                Contact
            </h3>
            <p class="text-secondary font-normal text-base leading-[26.88px] mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                similique aliquid officia! Sit nesciunt voluptatum perspiciatis nulla
                itaque sunt ullam.
            </p>
            <div class="text-secondary font-light text-sm leading-[26.88px]">
                <a class="block">
                    <Icon class="mr-1" name="material-symbols:alternate-email" />
                    <span>maghami.a1987@gmail.com</span>
                </a>
                <a class="block">
                    <Icon class="mr-1" name="ic:baseline-local-phone" />
                    <span>+989198881400</span>
                </a>
            </div>
        </div>
        <div class="">
            <h3 class="capitalize font-bold text-lg leading-[30.24px] text-secondary">
                Code Review
            </h3>
            <div class="text-secondary font-light text-sm leading-[23.52px]">
                <a class="block">
                    <Icon class="mr-1" name="mdi:github" />
                    <span class="text-sm">https://github.com/amirrr1987</span>
                </a>
                <a class="block">
                    <Icon class="mr-1" name="bi:stack-overflow" />
                    <span class="text-sm">https://b2n.ir/b39690</span>
                </a>
                <a class="block">
                    <Icon class="mr-1" name="la:codepen" />
                    <span class="text-sm">https://codepen.io/amirrr1987</span>
                </a>
            </div>
        </div>

        <div class="">
            <h3 class="capitalize font-bold text-lg leading-[30.24px] text-secondary">
                Social
            </h3>
            <div class="text-secondary font-light text-sm leading-[23.52px]">
                <a class="block">
                    <Icon class="mr-1" name="la:codepen" />
                    <span class="text-sm">https://codepen.io/amirrr1987</span>
                </a>
                <a class="block">
                    <Icon class="mr-1" name="la:codepen" />
                    <span class="text-sm">https://codepen.io/amirrr1987</span>
                </a>
            </div>
        </div>


        <form class="grid grid-cols-2 gap-2">
            <legend class="col-span-2 capitalize font-bold text-lg leading-[30.24px] text-secondary">Send a mail</legend>

            <input class="col-span-1 p-2 outline-0" type="text" placeholder="First name:" />

            <input class="col-span-1 p-2 outline-0" type="text" placeholder="Last name:" />

            <input class="col-span-2 p-2 outline-0" type="text" placeholder="Email:" />

            <textarea rows="10" class="col-span-2 p-2 outline-0" placeholder="Your message:"></textarea>

            <div class="col-span-2">
                <button class="bg-primary text-secondary text-white px-4 py-2 rounded border-0">
                    Submit
                </button>
            </div>
        </form>

    </div>
</template>
<script setup lang="ts">
// import useDataStore from "@/stores";
// import TheLottiePlayer from "@/components/TheLottiePlayer.vue";

// const dataStore = useDataStore();
// dataStore.setMainClass("grid");
// dataStore.setSectionClass("grid");
// dataStore.setContainerClass("container mx-auto grid p-5");
</script>
<style lang="scss">

</style>
