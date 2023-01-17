<template>
    <nav class="navbar" :class="toggleClass">
        <div class="navbar__container">
            <div class="navbar__row">
                <a href="" class="navbar__logo">
                    <img src="@/assets/logo.png" :title="title" alt="title">
                </a>
                <ul class="navbar__menu">
                    <li class="navbar__item">
                        <NuxtLink class="navbar__link no-underline" to="/">home</NuxtLink>
                    </li>
                    <li class="navbar__item">
                        <NuxtLink class="navbar__link no-underline" to="/about">about</NuxtLink>
                    </li>
                    <li class="navbar__item">
                        <NuxtLink class="navbar__link no-underline" to="/projects">projects</NuxtLink>
                    </li>
                    <li class="navbar__item">
                        <NuxtLink class="navbar__link no-underline" to="/contact">contact</NuxtLink>
                    </li>
                </ul>
                <span class="navbar__time">
                    {{
                        clock
                    }}
                </span>
            </div>
        </div>
    </nav>
    <button class="bg-transparent border-0 absolute top-2 left-3 w-8 h-8 text-3xl" @click="toggleMenu">
        <Icon :name="toggleIcon" />
    </button>
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

const toggleClass = ref('')
const toggleIcon = ref('ic:outline-menu')
const toggleMenu = () => {
    if (toggleClass.value === 'open') {
        toggleClass.value = ''
        toggleIcon.value = 'ic:outline-menu'
    }
    else {
        toggleClass.value = 'open'
        toggleIcon.value = 'ic:twotone-close'
    }
}
</script>

<style lang="scss">
.open {
    transform: translateX(0) !important;
    width: 100%;
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
        @apply container mx-auto px-5 py-12 h-full;
    }

    &__row {
        // @apply grid grid-cols-[max-content_1fr_max-content] gap-x-8 items-center;
        // display: grid;

        // @apply grid;
        //     @apply grid md:grid-cols-[max-content, 1fr, max-content] items-center gap-x-10;
        @apply grid grid-rows-3 h-full place-items-center;
    }

    &__logo {
        // @apply hidden md:block md:w-6;

        img {
            width: 100px;
        }
    }

    &__menu {
        @apply list-none text-center flex flex-col gap-y-8 capitalize;
        // @apply flex justify-evenly md:justify-start gap-x-5;
    }

    // &__time {
    //     @apply hidden md:flex md:items-center;
    // }

    &__link {
        @apply text-xl text-secondary hover: text-primary;
    }

    // &__text {
    //     @apply hidden md:block md:capitalize;
    // }

    // &__icon {
    //     @apply text-2xl md:hidden;
    // }
}
</style>
