<template>
  <UContainer class="max-w-xl space-y-10">
    <UiPageHeader
      title="Contact"
      description="Open to collaborations, freelance work, and interesting product teams."
    />

    <div class="space-y-4 text-center">
      <UButton
        :to="mailtoLink"
        color="primary"
        size="lg"
        block
        icon="i-heroicons-envelope"
      >
        Email me
      </UButton>

      <p class="text-sm text-muted">
        Or reach out directly:
        <ULink
          :to="mailtoLink"
          class="text-primary hover:underline"
        >
          maghami.a1987@gmail.com
        </ULink>
      </p>
    </div>

    <USeparator />

    <div class="flex justify-center gap-2">
      <UButton
        v-for="link in socialLinks"
        :key="link.label"
        :icon="link.icon"
        :to="link.url"
        :target="link.external ? '_blank' : undefined"
        variant="soft"
        color="neutral"
        :aria-label="link.label"
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Contact — Amir Maghami",
  description: "Get in touch for collaborations and project inquiries.",
});

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
