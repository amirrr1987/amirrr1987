<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__row">
        <RouterLink to="/" class="navbar__logo">
          <img src="@/assets/logo.png" title="" alt="" />
        </RouterLink>
        <ul class="navbar__menu">
          <RouterLink to="/" class="navbar__link">
            <i class="navbar__icon icon--home"></i>
            <span class="navbar__text">home</span>
          </RouterLink>
          <RouterLink to="/skills" class="navbar__link">
            <i class="navbar__icon icon--chart-pie"></i>
            <span class="navbar__text">skills</span>
          </RouterLink>
          <RouterLink to="/projects" class="navbar__link">
            <i class="navbar__icon icon--file-code"></i>
            <span class="navbar__text">projects</span>
          </RouterLink>
          <RouterLink to="/contact" class="navbar__link">
            <i class="navbar__icon icon--mail"></i>
            <span class="navbar__text">contact</span>
          </RouterLink>
        </ul>

        <ul class="navbar__time">
          {{
            clock
          }}
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";

const clock = ref();

function zeroFielder(time: string | number) {
  return time < 10 ? "0" + time : time;
}

function timeRuner() {
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

  setTimeout(timeRuner, 1000);
}
timeRuner();

// setInterval(timeRuner, 1000);
</script>

<style lang="scss">
.navbar {
  @apply py-3 fixed bottom-0 inset-x-0 z-50 md:shadow md:static bg-[#dcedf1] md:bg-transparent;

  &__container {
    @apply container mx-auto px-5;
  }

  &__row {
    @apply grid md:grid-cols-[max-content,1fr,max-content] items-center gap-x-10;
  }

  &__logo {
    @apply hidden md:block md:w-6;
  }

  &__menu {
    @apply flex justify-evenly md:justify-start gap-x-5;
  }
  &__time {
    @apply hidden md:flex md:items-center;
  }
  &__link {
    @apply text-xl text-[#35495e] hover:text-[#42b883];
  }
  &__text {
    @apply hidden md:block md:capitalize;
  }
  &__icon {
    @apply text-2xl md:hidden;
  }
}
</style>
