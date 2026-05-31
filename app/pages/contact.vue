<template>
  <section
    id="contact"
    class="relative z-10 flex flex-col items-center justify-center text-center"
  >
    <!-- Contact Header -->
    <UContainer :ui="{ padding: 'px-4 sm:px-6 lg:px-8' }">
      <div class="space-y-4 animate-fade-in">
        <h1
          class="font-mono text-3xl font-bold text-primary sm:text-4xl md:text-5xl"
        >
          Get in Touch
        </h1>
        <p
          class="mx-auto max-w-2xl text-pretty font-mono text-base leading-7 text-gray-300 sm:text-lg"
        >
          Feel free to reach out to me for collaborations, projects, or just to
          say hello!
        </p>
      </div>
    </UContainer>

    <!-- Contact Form -->
    <UContainer
      :ui="{ padding: 'px-4 sm:px-6 lg:px-8' }"
      class="mt-8 w-full max-w-2xl animate-fade-in-up"
    >
      <UCard class="border-white/10 bg-slate-950/70 text-left backdrop-blur">
        <form class="space-y-5" @submit.prevent="handleSubmit">
          <!-- Name Field -->
          <UInput
            v-model="formData.name"
            type="text"
            placeholder="Your Name"
            icon="i-heroicons-user"
            required
            size="lg"
            class="w-full transition-all duration-300 hover:ring-primary/50"
          />

          <!-- Email Field -->
          <UInput
            v-model="formData.email"
            type="email"
            placeholder="Your Email"
            icon="i-heroicons-envelope"
            required
            size="lg"
            class="w-full transition-all duration-300 hover:ring-primary/50"
          />

          <!-- Message Field -->
          <UTextarea
            v-model="formData.message"
            placeholder="Your Message"
            :rows="6"
            required
            size="lg"
            class="w-full transition-all duration-300 hover:ring-primary/50"
          />

          <!-- Submit Button -->
          <UButton
            type="submit"
            color="primary"
            size="lg"
            icon="i-heroicons-paper-airplane"
            class="w-full justify-center font-mono transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
          >
            Send Message
          </UButton>
        </form>
      </UCard>
    </UContainer>

    <!-- Social Links -->
    <UContainer
      :ui="{ padding: 'px-4 sm:px-6 lg:px-8' }"
      class="mt-8 flex flex-wrap justify-center gap-3 animate-fade-in-up"
    >
      <UButton
        v-for="(link, index) in socialLinks"
        :key="index"
        :to="link.url"
        target="_blank"
        :aria-label="link.label"
        :icon="link.icon"
        color="neutral"
        variant="soft"
        size="lg"
        class="transition-transform duration-300 hover:scale-110 hover:text-primary"
      />
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";

// Form Data
const formData = ref({
  name: "",
  email: "",
  message: "",
});
const toast = useToast();

// Social Links
const socialLinks = [
  {
    label: "GitHub",
    icon: "i-simple-icons-github",
    url: "https://github.com/amirrr1987",
  },
  {
    label: "LinkedIn",
    icon: "i-simple-icons-linkedin",
    url: "https://www.linkedin.com/in/amirrr1987/",
  },
  {
    label: "Telegram",
    icon: "i-simple-icons-telegram",
    url: "https://chat.telegram.dev",
  },
];

// Handle Form Submission
function handleSubmit() {
  toast.add({
    title: "Message ready",
    description: "Thank you for reaching out. I will get back to you soon.",
    color: "primary",
    icon: "i-heroicons-check-circle",
  });
  formData.value = { name: "", email: "", message: "" };
}

// GSAP Animations
onMounted(() => {
  gsap.from(".animate-fade-in", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.2,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from(".animate-fade-in-up", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.4,
    stagger: 0.2,
    ease: "power3.out",
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
