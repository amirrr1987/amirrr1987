<template>
  <UiGradientSection id="contact" class="relative z-10">
    <UContainer class="space-y-10 sm:space-y-12">
      <UiPageHeader
        title="Get in Touch"
        eyebrow="Contact"
        icon="i-heroicons-envelope"
        description="Feel free to reach out for collaborations, projects, or just to say hello!"
        show-separator
      />

      <div class="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
        <div class="space-y-5" data-reveal>
          <UiGlassPanel padding="md" class="space-y-5">
            <h2 class="font-mono text-lg font-bold text-highlighted">
              Let's build something great
            </h2>
            <p class="text-sm leading-7 text-muted">
              I typically respond within 1–2 business days. Reach out directly
              or use the form.
            </p>
            <USeparator />
            <div class="space-y-2">
              <UButton
                v-for="channel in contactChannels"
                :key="channel.label"
                :to="channel.href"
                :icon="channel.icon"
                variant="ghost"
                color="neutral"
                class="w-full justify-start font-mono transition-colors hover:bg-primary/10 hover:text-primary"
                :target="channel.external ? '_blank' : undefined"
              >
                {{ channel.label }}
              </UButton>
            </div>
          </UiGlassPanel>

          <div class="flex flex-wrap gap-2">
            <UTooltip
              v-for="link in socialLinks"
              :key="link.label"
              :text="link.label"
            >
              <UButton
                :to="link.url"
                target="_blank"
                :icon="link.icon"
                color="primary"
                variant="soft"
                size="lg"
                :aria-label="link.label"
                class="transition-transform hover:scale-110"
              />
            </UTooltip>
          </div>
        </div>

        <UiTiltCard data-reveal>
          <UCard
            class="glass-panel text-left !rounded-[calc(1.5rem-1px)] !shadow-none ring-0"
            :ui="{ body: 'space-y-5 p-5 sm:p-7' }"
          >
            <form class="space-y-5" @submit.prevent="handleSubmit">
              <UFormField label="Name" name="name" required>
                <UInput
                  v-model="formData.name"
                  type="text"
                  placeholder="Your name"
                  icon="i-heroicons-user"
                  size="lg"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Email" name="email" required>
                <UInput
                  v-model="formData.email"
                  type="email"
                  placeholder="you@example.com"
                  icon="i-heroicons-envelope"
                  size="lg"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Message" name="message" required>
                <UTextarea
                  v-model="formData.message"
                  placeholder="Tell me about your project..."
                  :rows="6"
                  size="lg"
                  class="w-full"
                />
              </UFormField>

              <UButton
                type="submit"
                color="primary"
                size="lg"
                icon="i-heroicons-paper-airplane"
                block
                class="btn-premium justify-center shadow-lg shadow-primary/25 sm:w-auto"
              >
                Send Message
              </UButton>
            </form>
          </UCard>
        </UiTiltCard>
      </div>
    </UContainer>
  </UiGradientSection>
</template>

<script setup lang="ts">
const toast = useToast();
const cvStore = useCvStore();

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const contactChannels = computed(() => [
  {
    label: cvStore.personalInfo.email,
    href: `mailto:${cvStore.personalInfo.email}`,
    icon: "i-heroicons-envelope",
    external: false,
  },
  {
    label: cvStore.personalInfo.phone,
    href: `tel:${cvStore.personalInfo.phone.replace(/\s/g, "")}`,
    icon: "i-heroicons-phone",
    external: false,
  },
  {
    label: "LinkedIn",
    href: `https://${cvStore.personalInfo.linkedin}`,
    icon: "i-simple-icons-linkedin",
    external: true,
  },
]);

const socialLinks = [
  { label: "GitHub", icon: "i-simple-icons-github", url: "https://github.com/amirrr1987" },
  { label: "LinkedIn", icon: "i-simple-icons-linkedin", url: "https://www.linkedin.com/in/amirrr1987/" },
  { label: "Telegram", icon: "i-simple-icons-telegram", url: "https://chat.telegram.dev" },
];

function handleSubmit() {
  toast.add({
    title: "Message sent",
    description: "Thank you for reaching out. I will get back to you soon.",
    color: "success",
    icon: "i-heroicons-check-circle",
  });
  formData.value = { name: "", email: "", message: "" };
}

useGsapScrollReveal();
</script>
