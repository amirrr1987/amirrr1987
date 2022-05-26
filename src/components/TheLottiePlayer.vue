<template>
<lottie-player
  autoplay
  loop
  mode="normal"
  :src="props.src"
>
</lottie-player>
  
</template>

<script setup lang="ts">
import "@lottiefiles/lottie-player";


const props = defineProps({
  src: {
    type: String,
    required: true
  }
});

</script>
