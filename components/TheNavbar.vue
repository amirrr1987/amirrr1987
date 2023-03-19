<template>
        <nav class="navbar">
        
        <div class="navbar__container">
            <button class="navbar__btn" @click="menuToggle">
                <Icon :name="toggleIcon" />
            </button>
      
            <div class="navbar__row" :class="menuState ? 'translate-x-0	': '-translate-x-full'" >
                <a href="" class="navbar__logo">
                    <img  src="@/assets/logo.png" :title="title" :alt="title">
                </a>
                <ul class="navbar__menu">
                    <li class="navbar__item">
                        <NuxtLink  @click.prevent="menuState = false" class="navbar__link" to="/">home</NuxtLink>
                    </li>
                    <li class="navbar__item">
                        <NuxtLink  @click.prevent="menuState = false" class="navbar__link" to="/about">about</NuxtLink>
                    </li>
                    <li class="navbar__item">
                        <NuxtLink  @click.prevent="menuState = false" class="navbar__link" to="/projects">projects</NuxtLink>
                    </li><li class="navbar__item">
                        <NuxtLink @click.prevent="menuState = false" class="navbar__link" to="/skills">skills</NuxtLink>
                    </li>
                    <li class="navbar__item">
                        <NuxtLink @click.prevent="menuState = false" class="navbar__link" to="/archives">archives</NuxtLink>
                    </li>
                    <li class="navbar__item">
                        <NuxtLink @click.prevent="menuState = false"  class="navbar__link" to="/contact">contact</NuxtLink>
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
const toggleIcon = ref('ic:outline-menu')
const zeroFielder = ({ time }: { time: string | number; }) =>  {
    return time < 10 ? "0" + time : time;
}
const timeRunner =() => {
    const dateNow = new Date();
    let hour: number | string = dateNow.getHours();
    let minute: number | string = dateNow.getMinutes();
    let second: number | string = dateNow.getSeconds();
    let state = "AM";
    if (hour > 12) {
        hour -= 12;
        state = "PM";
    }
    hour = zeroFielder({ time: hour });
    minute = zeroFielder({ time: minute });
    second = zeroFielder({ time: second });
    clock.value = `${hour} : ${minute} : ${second} ${state}`;
    setTimeout(timeRunner, 1000);
}
timeRunner();
const menuState = ref(false)
const menuToggle =()=>{
    menuState.value = !menuState.value 
}
</script>
<style lang="scss">
body{
    overflow-x: hidden;
}
.navbar {
    @apply relative lg:py-4 ;
    &__container {
        @apply container mx-auto px-4;
    }
    &__row {
        @apply bg-[#dcedf1] absolute left-0 top-0 w-screen h-screen duration-700 grid justify-center items-center gap-y-4 z-40;
        @apply lg:relative lg:grid-cols-[max-content_1fr_max-content] lg:gap-x-12 lg:translate-x-0 lg:w-auto lg:h-auto lg:bg-transparent;
    }
    &__logo {
        @apply  lg:justify-self-start;
        img {
            @apply w-20 lg:h-10 lg:w-auto;
        }
    }
    &__menu {
        @apply list-none lg:flex lg:gap-x-4 text-center;
    }
    &__time {
        @apply text-base text-secondary lg:justify-self-end;
    }
    &__link {
        @apply text-base font-medium text-secondary  no-underline capitalize;
    }
    &__btn{
        @apply bg-transparent border-0 text-4xl lg:hidden cursor-pointer z-50 relative;
    }
}
</style>