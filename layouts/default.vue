<template>
    <TheNavbar />
    <main class="">
        <div class="h-full grid gap-4 container-row">
            <slot />
        </div>
    </main>
</template>

<style lang="less">
#__nuxt {
    @apply grid min-h-screen text-[#35495e] bg-[#dcedf1] subpixel-antialiased overflow-hidden grid-rows-[max-content_1fr] font-body bg-primary;
    background-image: radial-gradient(circle farthest-corner at center,#f7fbfc 0%,#add9e4 100%);
}
</style>