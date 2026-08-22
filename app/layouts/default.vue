<template>
  <div class="bg-red-500 text-white">default
    <nav>
      <ULink href="/">Home</ULink>
      <ULink href="/about">About</ULink>
      <ULink href="/skills">Skills</ULink>
      <ULink href="/projects">Projects</ULink>
      <ULink href="/contact">Contact</ULink>
    </nav>
    <slot />
  </div>
</template>