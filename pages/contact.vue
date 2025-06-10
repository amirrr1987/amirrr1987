<template>
  <section id="contact" class="relative z-10 flex flex-col justify-center items-center text-center">
    <!-- Contact Header -->
    <UContainer :ui="{ padding: 'py-12 px-4 sm:px-6 lg:px-10' }">
      <div class="space-y-4 animate-fade-in">
        <h1 class="text-4xl sm:text-5xl font-bold text-primary">Get in Touch</h1>
        <p class="text-gray-300 text-lg sm:text-xl max-w-md mx-auto">
          Feel free to reach out to me for collaborations, projects, or just to say hello!
        </p>
      </div>
    </UContainer>

    <!-- Contact Form -->
    <UContainer :ui="{ padding: 'py-8 px-4 sm:px-6 lg:px-10' }" class="w-full max-w-2xl mt-8 animate-fade-in-up">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Name Field -->
        <UInput v-model="formData.name" type="text" placeholder="Your Name" icon="i-heroicons-user" required size="lg"
          class="w-full transition-all duration-300 hover:ring-primary/50" />

        <!-- Email Field -->
        <UInput v-model="formData.email" type="email" placeholder="Your Email" icon="i-heroicons-envelope" required
          size="lg" class="w-full transition-all duration-300 hover:ring-primary/50" />

        <!-- Message Field -->
        <UTextarea v-model="formData.message" placeholder="Your Message" :rows="5" required size="lg"
          class="w-full transition-all duration-300 hover:ring-primary/50" />

        <!-- Submit Button -->
        <UButton type="submit" color="primary" size="lg"
          class="w-full sm:w-auto transition-transform duration-300 hover:scale-105">
          Send Message
        </UButton>
      </form>
    </UContainer>

    <!-- Social Links -->
    <UContainer :ui="{ padding: 'py-8 px-4 sm:px-6 lg:px-10' }"
      class="flex justify-center gap-6 mt-8 animate-fade-in-up">
      <ULink v-for="(link, index) in socialLinks" :key="index" :to="link.url" target="_blank" aria-label="Social Link"
        class="transition-transform duration-300 hover:scale-110">
        <UIcon :name="link.icon" class="w-6 h-6 text-gray-300 hover:text-primary" />
      </ULink>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

// Form Data
const formData = ref({
  name: '',
  email: '',
  message: '',
});

// Social Links
const socialLinks = [
  { icon: 'i-simple-icons-github', url: 'https://github.com/amirrr1987' },
  { icon: 'i-simple-icons-linkedin', url: 'https://www.linkedin.com/in/amirrr1987/' },
  { icon: 'i-simple-icons-telegram', url: 'https://chat.telegram.dev' },
];

// Handle Form Submission
function handleSubmit() {
  alert('Thank you for reaching out! I will get back to you soon.');
  formData.value = { name: '', email: '', message: '' };
}

// GSAP Animations
onMounted(() => {
  gsap.from('.animate-fade-in', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.2,
    stagger: 0.2,
    ease: 'power3.out',
  });

  gsap.from('.animate-fade-in-up', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.4,
    stagger: 0.2,
    ease: 'power3.out',
  });
});
</script>

<style scoped>
.animate-fade-in {
  opacity: 1;
}

.animate-fade-in-up {
  opacity: 1;
}
</style>