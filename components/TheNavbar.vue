<template>
    <nav class="py-2 shadow">
        <div class="container mx-auto px-4">
            <div class="hidden lg:grid lg:grid-cols-[max-content_1fr_max-content] lg:items-center lg:gap-x-4">
                <NuxtLink to="/" class="lg:h-12 lg:inline-flex">
                    <img class="lg:h-12" src="@/assets/logo.png" :title="title" :alt="title">
                </NuxtLink>
                <ul class="lg:list-none lg:flex lg:gap-x-4">
                    <li class=""><NuxtLink @click.prevent="menuState = false" class="lg:decoration-none text-base lg:text-secondary" to="/">home</NuxtLink></li>
                    <li class=""><NuxtLink @click.prevent="menuState = false" class="lg:decoration-none text-base lg:text-secondary" to="/about">about</NuxtLink></li>
                    <li class=""><NuxtLink @click.prevent="menuState = false" class="lg:decoration-none text-base lg:text-secondary" to="/projects">projects</NuxtLink></li>
                    <li class=""><NuxtLink @click.prevent="menuState = false" class="lg:decoration-none text-base lg:text-secondary" to="/skills">skills</NuxtLink></li>
                    <li class=""><NuxtLink @click.prevent="menuState = false" class="lg:decoration-none text-base lg:text-secondary" to="/archives">archives</NuxtLink></li>
                    <li class=""><NuxtLink @click.prevent="menuState = false" class="lg:decoration-none text-base lg:text-secondary" to="/contact">contact</NuxtLink></li>
                </ul>
                <span class="text-base">{{clock}}</span>
            </div>
            <div class="flex justify-between items-center lg:hidden">
                <NuxtLink to="/" class="h-12 inline-flex">
                    <img class="h-12" src="@/assets/logo.png" :title="title" :alt="title">
                    
                </NuxtLink>
                <button @click="toggleVisibilityMenu" class="bg-transparent border-0 text-4xl lg:hidden cursor-pointer relative z-50">
                    <Icon :name="toggleIcon" />
                </button>
                <div class="fixed left-0 top-0 w-screen h-screen bg-[#dcedf1] flex flex-col justify-between items-center pb-12 py-24 duration-400" :class="menuState ? 'translate-x-0	': '-translate-x-full'">
                    <NuxtLink to="/" class="h-12 inline-flex">
                        <img class="h-32" src="@/assets/logo.png" :title="title" :alt="title">
                    </NuxtLink>
                    <ul class="list-none text-center flex flex-col gap-y-2">
                        <li class=""><NuxtLink @click.prevent="menuState = false" class="decoration-none text-lg text-secondary" to="/">home</NuxtLink></li>
                        <li class=""><NuxtLink @click.prevent="menuState = false" class="decoration-none text-lg text-secondary" to="/about">about</NuxtLink></li>
                        <li class=""><NuxtLink @click.prevent="menuState = false" class="decoration-none text-lg text-secondary" to="/projects">projects</NuxtLink></li>
                        <li class=""><NuxtLink @click.prevent="menuState = false" class="decoration-none text-lg text-secondary" to="/skills">skills</NuxtLink></li>
                        <li class=""><NuxtLink @click.prevent="menuState = false" class="decoration-none text-lg text-secondary" to="/archives">archives</NuxtLink></li>
                        <li class=""><NuxtLink @click.prevent="menuState = false" class="decoration-none text-lg text-secondary" to="/contact">contact</NuxtLink></li>
                    </ul>
                    <span class="text-base">{{clock}}</span>
                </div>
            </div>
            <!-- <div class="grid grid-cols-[max-content_1fr_max-content] items-center gap-x-4">
                <NuxtLink to="/" class="h-12 inline-flex">
                    <img class="h-12" src="@/assets/logo.png" :title="title" :alt="title">
                </NuxtLink>
                <ul class="list-none flex gap-x-4">
                    <li class="lg:mr-4"><NuxtLink @click.prevent="menuState = false" class="decoration-none text-base" to="/">home</NuxtLink></li>
                    <li class="lg:mr-4"><NuxtLink @click.prevent="menuState = false" class="decoration-none text-base" to="/about">about</NuxtLink></li>
                    <li class="lg:mr-4"><NuxtLink @click.prevent="menuState = false" class="decoration-none text-base" to="/projects">projects</NuxtLink></li>
                    <li class="lg:mr-4"><NuxtLink @click.prevent="menuState = false" class="decoration-none text-base" to="/skills">skills</NuxtLink></li>
                    <li class="lg:mr-4"><NuxtLink @click.prevent="menuState = false" class="decoration-none text-base" to="/archives">archives</NuxtLink></li>
                    <li><NuxtLink @click.prevent="menuState = false" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white" to="/contact">contact</NuxtLink></li>
                </ul>
                <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-900 mr-2">{{clock}}</span>
                <button @click="toggleVisibilityMenu" class="">
                    <Icon :name="toggleIcon" />
                </button>
            </div> -->
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
const toggleVisibilityMenu =()=>{
    menuState.value = !menuState.value 
}
</script>