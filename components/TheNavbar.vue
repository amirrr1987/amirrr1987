<template>
    <nav class="navbar">
        
        <div class="navbar__container">
            <button class="navbar__btn" @click="toggleMenu">
                <Icon :name="toggleIcon" />
            </button>
      
            <div class="navbar__row"  :class="toggleClass">
                <a href="" class="navbar__logo">
                    <img  src="@/assets/logo.png" :title="title" alt="title">
                </a>
                <ul class="navbar__menu">
                    <li class="navbar__item">
                        <NuxtLink  @click="toggleMenu" class="navbar__link" to="/">home</NuxtLink>
                    </li>
                    <li class="navbar__item">
                        <NuxtLink  @click="toggleMenu" class="navbar__link" to="/about">about</NuxtLink>
                    </li>
                    <li class="navbar__item">
                        <NuxtLink  @click="toggleMenu" class="navbar__link" to="/projects">projects</NuxtLink>
                    </li><li class="navbar__item">
                        <NuxtLink @click="toggleMenu" class="navbar__link" to="/skills">skills</NuxtLink>
                    </li>
                    <li class="navbar__item">
                        <NuxtLink @click="toggleMenu" class="navbar__link" to="/archives">archives</NuxtLink>
                    </li>
                    <li class="navbar__item">
                        <NuxtLink  @click="toggleMenu" class="navbar__link" to="/contact">contact</NuxtLink>
                    </li>
                </ul>
                <span class="navbar__time">
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
    if (toggleClass.value === '') {
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
    // background-color: gray;
    // position: absolute;
    // transform: translateX(-100%);
    // transition-duration: 0.4s;
    // height: 100svh;
    // @apply lg:shadow py-4;
    @apply relative lg:shadow;
    &__container {
        @apply container mx-auto px-4;
    }
    &__row {
        // @apply grid grid-rows-5 place-items-center absolute h-screen left-0 top-0 w-full duration-700 bg-[#dcedf1]  ;
        // @apply lg:relative lg:h-auto lg:grid-rows-1 lg:grid-cols-[max-content_1fr_max-content] lg:bg-transparent lg:place-items-start lg:items-center lg:gap-x-4;
        @apply bg-[#dcedf1] lg:bg-transparent absolute lg:relative left-0 top-0 w-full h-screen lg:h-auto grid lg:grid-cols-[max-content_1fr_max-content] lg:gap-x-4 items-center justify-center text-center lg:py-2 -translate-x-full;
    }
    &__logo {
        img {
            @apply w-20 lg:h-10 lg:w-auto;
        }
    }
    &__menu {
        @apply list-none lg:flex lg:gap-x-4;
    }
    &__time {
        @apply text-base text-secondary;
    }
    &__link {
        @apply text-base font-medium text-secondary  no-underline capitalize;
    }
    &__btn{
        @apply absolute left-4 top-2 z-10 bg-transparent border-0 text-4xl lg:hidden cursor-pointer duration-500;
    }
}
</style>
