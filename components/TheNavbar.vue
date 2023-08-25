<template>
  <nav class="shadow z-50 relative py-2 relative">
    <div class="container mx-auto px-4">
      <div class="flex justify-between">
        <NuxtLink class="no-underline" to="/">
          <img class="w-12 h-12 object-contain" src="@/assets/logo.png" :title="title" :alt="title" />
        </NuxtLink>
        <button @click.prevent="toggleMenu" class="z-50">
          <Icon name="tabler:menu-2" size="32" />
        </button>
        <div
          :class="menuState ? 'menu-open' : 'menu-close'"
          class="menu absolute inset-0 h-screen w-screen flex flex-col justify-between items-center py-40 duration-1000"
        >
          <img class="w-30 h-30 object-contain" src="@/assets/logo.png" :title="title" :alt="title" />
          <ul class="list-none text-center flex flex-col gap-y-4">
            <li><NuxtLink class="no-underline text-xl" to="/">home</NuxtLink></li>
            <li><NuxtLink class="no-underline text-xl" to="/skills">skills</NuxtLink></li>
            <li><NuxtLink class="no-underline text-xl" to="/projects">projects</NuxtLink></li>
            <li><NuxtLink class="no-underline text-xl" to="/contact">contact</NuxtLink></li>
          </ul>
          <span class="text-base">{{clock}}</span>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
const menuState = ref(false);
const toggleMenu = () => {
  menuState.value = !menuState.value;
};
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
</script>
<style lang="scss">

.menu-close {
  transform: translateX(100vw);
}
.menu-open {
  transform: translateX(0);
  background-image: radial-gradient(
    circle farthest-corner at center,
    #f7fbfc 0%,
    #add9e4 100%
  );
}
</style>
