<template>

    <div class="text-xl font-bold mb-10 text-secondary-700">
      I can use 
      <span class="typed-text">{{ typeValue }}</span>
      <span class="cursor" :class="{ 'typing': typeStatus }">&nbsp;</span>
      <span> in projects ;</span>
    </div>

</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'Typier',
  props:{
    list: {
      type: Array,
      
    }
  },
  setup() {
    const typeValue = ref('')
    const typeStatus = ref(false)
    const typeArray = ref(['HTML', 'CSS', 'SCSS','TailwindCSS', 'Bootstrap','BEM', 'javaScript', 'Vues.js', 'Vue Router', 'Vuex'],)
    const typingSpeed = ref(200)
    const erasingSpeed = ref(100)
    const newTextDelay = ref(2000)
    const typeArrayIndex = ref(0)
    const charIndex = ref(0)


    const typeText = () => {

      if (charIndex.value < typeArray.value[typeArrayIndex.value].length) {
        if (!typeStatus.value)
          typeStatus.value = true;

        typeValue.value += typeArray.value[typeArrayIndex.value].charAt(charIndex.value);
        charIndex.value += 1;

        setTimeout(typeText, typingSpeed.value);
      }
      else {
        typeStatus.value = false;
        setTimeout(eraseText, newTextDelay.value);
      }

    }

    const eraseText = () => {
      if (charIndex.value > 0) {
        if (!typeStatus.value)
          typeStatus.value = true;

        typeValue.value = typeArray.value[typeArrayIndex.value].substring(0, charIndex.value - 1);
        charIndex.value -= 1;
        setTimeout(eraseText, erasingSpeed.value);
      }
      else {
        typeStatus.value = false;
        typeArrayIndex.value += 1;
        if (typeArrayIndex.value >= typeArray.value.length)
          typeArrayIndex.value = 0;

        setTimeout(typeText, typingSpeed.value + 1000);
      }
    }
    setTimeout(typeText, newTextDelay.value + 200);
    return {
      typeValue,
      typeStatus
    }
  }
})
</script>

<style>
.typed-text {
  @apply text-primary;
}

.cursor {
  @apply inline-block ml-1 w-1 ;
  animation: cursorBlink 1s infinite;
}

.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>