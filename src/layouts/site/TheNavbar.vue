<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__row">
        <RouterLink to="/" class="navbar__logo">
          <img src="@/assets/logo.png" title="" alt="" />
        </RouterLink>
        <ul class="navbar__menu">
          <RouterLink to="/" class="navbar__link">
            <i class="navbar__icon icon--home md:hidden"></i>
            <span class="navbar__text">home</span>
          </RouterLink>
          <RouterLink to="/skills" class="navbar__link">
            <i class="navbar__icon icon--chart-pie md:hidden"></i>
            <span class="navbar__text">skills</span>
          </RouterLink>
          <RouterLink to="/projects" class="navbar__link">
            <i class="navbar__icon icon--file-code md:hidden"></i>
            <span class="navbar__text">projects</span>
          </RouterLink>
          <RouterLink to="/contact" class="navbar__link">
            <i class="navbar__icon icon--mail md:hidden"></i>
            <span class="navbar__text">contact</span>
          </RouterLink>
        </ul>

        <ul class="navbar__social items-center">
          <a href="#skills" class="navbar__link">
            <i class="navbar__icon icon--linkedin"></i>
            <span class="navbar__text hidden">linkedin</span>
          </a>
          <a href="#skills" class="navbar__link">
            <i class="navbar__icon icon--github"></i>
            <span class="navbar__text hidden">git</span>
          </a>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style>
.navbar {
  @apply shadow py-3;
}
.navbar__container {
  @apply container mx-auto px-5;
}
.navbar__row {
  @apply grid grid-cols-[max-content,1fr,max-content] items-center gap-x-10;
}
.navbar__logo {
  @apply w-6;
}
.navbar__menu {
  @apply flex gap-x-5;
}
.navbar__social {
  @apply flex gap-x-5;
}
.navbar__link {
  @apply text-xl hover:text-[#42b883];
}
.navbar__text {
  @apply capitalize;
}
.navbar__icon {
}
</style>
