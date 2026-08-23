<template>
  <div class="px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
    <UContainer class="max-w-5xl space-y-5">
      <header class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" data-reveal>
        <div>
          <p class="page-eyebrow mb-2">Open channel</p>
          <h1 class="font-page text-3xl text-highlighted sm:text-4xl">
            <span class="font-mono text-primary">curl</span> contact
          </h1>
          <p class="body-copy mt-2 max-w-lg text-sm text-muted">
            Compose a request — it opens your mail client with the payload ready to send.
          </p>
        </div>
        <p class="font-mono text-xs text-muted">
          <span class="text-primary">HTTP/1.1</span> 200 channel-open
        </p>
      </header>

      <div class="grid gap-4 lg:grid-cols-12 lg:gap-5">
        <!-- Request composer -->
        <section
          class="contact-terminal overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 lg:col-span-7"
          data-reveal
        >
          <div class="flex items-center gap-2 border-b border-white/8 bg-black/40 px-4 py-2.5">
            <span class="size-2.5 rounded-full bg-rose-500/90" />
            <span class="size-2.5 rounded-full bg-amber-400/90" />
            <span class="size-2.5 rounded-full bg-emerald-500/90" />
            <p class="font-mono ml-2 truncate text-[11px] text-muted">
              POST /api/contact — compose payload
            </p>
          </div>

          <form class="space-y-4 p-5 sm:p-6" @submit.prevent="sendRequest">
            <label class="block">
              <span class="font-mono text-[11px] text-violet-300">"from"</span>
              <UInput
                v-model="form.from"
                placeholder="your@email.com"
                size="md"
                class="mt-1 font-mono"
                :ui="{ base: 'bg-black/30 border-white/10' }"
              />
            </label>

            <label class="block">
              <span class="font-mono text-[11px] text-violet-300">"subject"</span>
              <UInput
                v-model="form.subject"
                placeholder="Project inquiry / collaboration"
                size="md"
                class="mt-1 font-mono"
                :ui="{ base: 'bg-black/30 border-white/10' }"
              />
            </label>

            <label class="block">
              <span class="font-mono text-[11px] text-violet-300">"message"</span>
              <UTextarea
                v-model="form.message"
                placeholder="Tell me about timeline, stack, and goals…"
                :rows="4"
                class="mt-1 font-mono"
                :ui="{ base: 'bg-black/30 border-white/10' }"
              />
            </label>

            <!-- Live curl preview -->
            <pre
              class="contact-curl-preview overflow-x-auto rounded-xl border border-white/8 bg-black/50 p-3 font-mono text-[10px] leading-relaxed text-muted sm:text-[11px]"
              aria-live="polite"
            ><code>{{ curlPreview }}</code></pre>

            <UButton
              type="submit"
              color="primary"
              size="lg"
              block
              icon="i-heroicons-paper-airplane"
              class="btn-premium font-mono shadow-lg shadow-primary/20"
            >
              curl — send request
            </UButton>
          </form>
        </section>

        <!-- Channel info -->
        <aside class="space-y-4 lg:col-span-5">
          <div
            class="glass-panel p-5 sm:p-6"
            data-reveal
          >
            <p class="font-mono text-[11px] text-primary">$ host --info</p>
            <dl class="mt-4 space-y-3 font-mono text-xs">
              <div class="flex justify-between gap-4 border-b border-white/5 pb-2">
                <dt class="text-muted">location</dt>
                <dd class="text-right text-highlighted">{{ info.location }}</dd>
              </div>
              <div class="flex justify-between gap-4 border-b border-white/5 pb-2">
                <dt class="text-muted">response</dt>
                <dd class="text-right text-primary">&lt; 24h</dd>
              </div>
              <div class="flex justify-between gap-4 border-b border-white/5 pb-2">
                <dt class="text-muted">availability</dt>
                <dd class="text-right text-highlighted">freelance · full-time</dd>
              </div>
              <div class="flex justify-between gap-4">
                <dt class="text-muted">phone</dt>
                <dd class="text-right text-highlighted">{{ info.phone }}</dd>
              </div>
            </dl>
          </div>

          <div class="space-y-2" data-reveal>
            <p class="font-mono text-[11px] text-muted">Quick connect</p>
            <a
              v-for="cmd in quickCommands"
              :key="cmd.label"
              :href="cmd.href"
              :target="cmd.external ? '_blank' : undefined"
              class="contact-cmd group flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 font-mono text-xs transition-colors hover:border-primary/35 hover:bg-primary/5"
            >
              <UIcon :name="cmd.icon" class="size-4 shrink-0 text-primary" />
              <span class="min-w-0 truncate text-muted group-hover:text-highlighted">
                <span class="text-violet-300">$</span> {{ cmd.command }}
              </span>
            </a>
          </div>

          <div
            class="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 font-mono text-[11px] text-muted"
            data-reveal
          >
            <span class="text-primary">tip:</span> attach a repo link or Figma file in your message — faster scoping.
          </div>
        </aside>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useCvStore } from "~/stores/cv.store";

const cvStore = useCvStore();
const info = cvStore.personalInfo;

const form = reactive({
  from: "",
  subject: "Hello Amir",
  message: "",
});

const curlPreview = computed(() => {
  const payload = JSON.stringify(
    {
      from: form.from || "you@email.com",
      subject: form.subject || "…",
      message: form.message || "…",
    },
    null,
    2,
  );

  return `$ curl -X POST https://amirmaghami.ir/contact \\
  -H "Content-Type: application/json" \\
  -d '${payload}'`;
});

const mailtoLink = computed(() => {
  const body = [
    form.message,
    "",
    form.from ? `— ${form.from}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const params = new URLSearchParams({
    subject: form.subject,
    body,
  });

  return `mailto:${info.email}?${params.toString()}`;
});

const quickCommands = [
  {
    label: "Email",
    command: `mail ${info.email}`,
    href: `mailto:${info.email}`,
    icon: "i-heroicons-envelope",
    external: false,
  },
  {
    label: "GitHub",
    command: "open github.com/amirrr1987",
    href: "https://github.com/amirrr1987",
    icon: "i-simple-icons-github",
    external: true,
  },
  {
    label: "LinkedIn",
    command: "open linkedin.com/in/amirrr1987",
    href: "https://www.linkedin.com/in/amirrr1987/",
    icon: "i-simple-icons-linkedin",
    external: true,
  },
  {
    label: "CV",
    command: "wget AmirMagjami-Resume.pdf",
    href: "/AmirMagjami-Resume.pdf",
    icon: "i-heroicons-document-arrow-down",
    external: false,
  },
];

function sendRequest() {
  if (!import.meta.client) return;
  window.location.href = mailtoLink.value;
}

useSeoMeta({
  title: "Contact — Amir Maghami",
  description: "Get in touch for collaborations, freelance work, and product teams.",
});

useGsapScrollReveal({ stagger: 0.06 });
</script>
