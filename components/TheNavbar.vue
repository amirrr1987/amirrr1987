<template>
    <nav class="">
        
        <div class="navbar__container">
            <button class="bg-transparent border-0 text-4xl text-secondary z-10 relative mr-auto cursor-pointer" @click="toggleMenu">
                <Icon class="text-4xl duration-700" :name="toggleIcon" />
            </button>
      
            <div class="navbar__row"  :class="toggleClass">
                <a href="" class="navbar__logo">
                    <img src="@/assets/logo.png" :title="title" alt="title">
                </a>
                <ul class="navbar__menu">
                    <li class="navbar__item">
                        <NuxtLink  @click="toggleMenu" class="navbar__link no-underline" to="/">home</NuxtLink>
                    </li>
                    <li class="navbar__item">
                        <NuxtLink  @click="toggleMenu" class="navbar__link no-underline" to="/about">about</NuxtLink>
                    </li>
                    <li class="navbar__item">
                        <NuxtLink  @click="toggleMenu" class="navbar__link no-underline" to="/projects">projects</NuxtLink>
                    </li><li class="navbar__item">
                        <NuxtLink @click="toggleMenu" class="navbar__link no-underline" to="/skills">skills</NuxtLink>
                    </li>
                    <li class="navbar__item">
                        <NuxtLink @click="toggleMenu" class="navbar__link no-underline" to="/blogs">blogs</NuxtLink>
                    </li>
                    <li class="navbar__item">
                        <NuxtLink  @click="toggleMenu" class="navbar__link no-underline" to="/contact">contact</NuxtLink>
                    </li>
                </ul>
                <span class="navbar__time row-span-1">
                    {{clock}}
                </span>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
const title = ref('Amir Maghami')
const clock = ref();
function zeroFielder(time: string | number) {
    return time < 10 ? "0" + time : time;
}
function timeRunner() {
    const dateNow = new Date();
    let hour: number | string = dateNow.getHours();
    let minute: number | string = dateNow.getMinutes();
    let second: number | string = dateNow.getSeconds();
    let state = "AM";
    if (hour > 12) {
        hour -= 12;
        state = "PM";
    }
    hour = zeroFielder(hour);
    minute = zeroFielder(minute);
    second = zeroFielder(second);
    clock.value = `${hour} : ${minute} : ${second} ${state}`;
    setTimeout(timeRunner, 1000);
}
timeRunner();
const toggleClass = ref('-translate-x-full')
const toggleIcon = ref('ic:outline-menu')
const toggleMenu = () => {
    if (toggleClass.value === 'translate-x-0') {
        toggleClass.value = '-translate-x-full'
        toggleIcon.value = 'ic:outline-menu'
    }
    else {
        toggleClass.value = 'translate-x-0'
        toggleIcon.value = 'ic:twotone-close'
    }
}
</script>
<style lang="scss">
.open {
    transform: translateX(0) !important;
}
.navbar {
    background-color: gray;
    position: absolute;
    transform: translateX(-100%);
    transition-duration: 0.4s;
    height: 100svh;
    // @apply ;
    // @apply py-3 fixed bottom-0 inset-x-0 z-50 md:shadow md:static bg-[#dcedf1] md:bg-transparent;
    &__container {
        @apply container mx-auto px-4 ;
        // @apply container mx-auto px-5 py-12 h-full;
    }
    &__row {
        // @apply absolute h-screen top-0 left-0 w-full bg-[#dcedf1] duration-700 ;
        // @apply grid grid-cols-[max-content_1fr_max-content] gap-x-8 items-center;
        // display: grid;
        // @apply grid;
        //     @apply grid md:grid-cols-[max-content, 1fr, max-content] items-center gap-x-10;
        // @apply grid grid-rows-3 h-full place-items-center;
        @apply grid grid-rows-5 place-items-center absolute h-screen left-0 top-0 w-full duration-700 bg-[#dcedf1]  ;
    }
    &__logo {
        // @apply hidden md:block md:w-6;

        @apply row-span-2;
        img {
            width: 100px;
        }
    }
    &__menu {
        @apply list-none text-center flex flex-col gap-y-4 capitalize row-span-2;
        // @apply flex justify-evenly md:justify-start gap-x-5;
    }
    &__time {
        // @apply hidden md:flex md:items-center;
        @apply row-span-1 text-secondary;
    }
    &__link {
        @apply text-xl text-secondary hover: text-secondary;
    }
    // &__text {
    //     @apply hidden md:block md:capitalize;
    // }
    // &__icon {
    //     @apply text-2xl md:hidden;
    // }
}
</style>
