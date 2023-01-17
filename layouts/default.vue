<template>
    <TheNavbar />
    <slot />
</template>

<script setup lang="ts">

// window.addEventListener('resize', documentHeight)
// documentHeight()
</script>

<style>
* {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
}



body {
    font-family: 'Poppins';
    font-size: 22px;
}

#__nuxt {
    /* @apply font-body relative text-[#333] bg-[#dcedf1] subpixel-antialiased grid md: grid-rows-[max-content, 1fr] overflow-hidden; */
    background-image: radial-gradient(circle farthest-corner at center,
            #f7fbfc 0%,
            #add9e4 100%);
    min-height: 100svh;
    display: grid;
height: -webkit-fill-available;
    /* grid-template-rows: max-content 1fr; */
}
</style>