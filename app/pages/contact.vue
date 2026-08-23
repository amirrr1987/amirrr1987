<template>
  <div class="px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
    <UContainer class="max-w-2xl space-y-10">
      <UiPageHeader
        title="Contact"
        description="Open to collaborations, freelance work, and interesting product teams."
      />

      <UiGlassPanel padding="lg" class="text-center" data-reveal>
        <div
          class="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10"
        >
          <UIcon name="i-heroicons-envelope" class="size-8 text-primary" />
        </div>

        <h2 class="font-card text-xl text-highlighted sm:text-2xl">
          Let's build something great
        </h2>
        <p class="body-copy mx-auto mt-3 max-w-md text-muted">
          Tell me about your project, timeline, and goals — I'll get back to you within 24 hours.
        </p>

        <UButton
          :to="mailtoLink"
          color="primary"
          size="xl"
          block
          icon="i-heroicons-paper-airplane"
          class="btn-premium mt-8 shadow-lg shadow-primary/20"
        >
          Email me
        </UButton>

        <p class="mt-4 text-sm text-muted">
          Or reach out directly:
          <ULink
            :to="mailtoLink"
            class="text-primary hover:underline"
          >
            maghami.a1987@gmail.com
          </ULink>
        </p>
      </UiGlassPanel>

      <div class="grid gap-4 sm:grid-cols-3" data-reveal>
        <UiGlassPanel
          v-for="link in socialLinks"
          :key="link.label"
          padding="md"
          class="group text-center transition-colors hover:border-primary/35"
        >
          <ULink
            :to="link.url"
            :target="link.external ? '_blank' : undefined"
            class="flex flex-col items-center gap-3"
          >
            <UIcon
              :name="link.icon"
              class="size-7 text-primary transition-transform group-hover:scale-110"
            />
            <span class="font-card text-sm text-highlighted">{{ link.label }}</span>
          </ULink>
        </UiGlassPanel>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Contact — Amir Maghami",
  description: "Get in touch for collaborations and project inquiries.",
});

useGsapScrollReveal({ stagger: 0.1 });

const mailtoLink =
  "mailto:maghami.a1987@gmail.com?subject=Hello%20Amir&body=Hi%20Amir%2C%0A%0A";

const socialLinks = [
  {
    label: "GitHub",
    icon: "i-simple-icons-github",
    url: "https://github.com/amirrr1987",
    external: true,
  },
  {
    label: "LinkedIn",
    icon: "i-simple-icons-linkedin",
    url: "https://www.linkedin.com/in/amirrr1987/",
    external: true,
  },
  {
    label: "Email",
    icon: "i-heroicons-envelope",
    url: mailtoLink,
    external: false,
  },
];
</script>
