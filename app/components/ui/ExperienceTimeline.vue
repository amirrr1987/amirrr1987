<template>
  <div class="relative space-y-0">
    <!-- Center rail (desktop) -->
    <div
      class="career-rail pointer-events-none absolute bottom-8 left-1/2 top-8 hidden w-px -translate-x-1/2 lg:block"
      aria-hidden="true"
    />

    <article
      v-for="(exp, index) in experiences"
      :key="`${exp.company}-${exp.period}`"
      class="career-step relative py-6 sm:py-8 lg:py-10"
      :class="index % 2 === 0 ? 'lg:pr-[52%]' : 'lg:pl-[52%]'"
      data-reveal
    >
      <!-- Node on rail -->
      <div
        class="absolute left-0 top-10 z-10 hidden lg:left-1/2 lg:block lg:-translate-x-1/2"
        aria-hidden="true"
      >
        <span
          class="flex size-10 items-center justify-center rounded-full border border-primary/40 bg-slate-950 font-badge text-xs text-primary shadow-[0_0_24px_rgb(66_184_131_/0.35)]"
          :class="index === 0 ? 'timeline-pulse ring-4 ring-primary/15' : ''"
        >
          {{ String(index + 1).padStart(2, "0") }}
        </span>
      </div>

      <div
        class="career-card group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50 p-5 backdrop-blur-xl transition-all duration-400 sm:p-7"
        :class="[
          index === 0 && 'career-card--current',
          index % 2 === 0 ? 'lg:mr-6' : 'lg:ml-6',
        ]"
      >
        <span
          class="noise-overlay absolute inset-0 rounded-[inherit] opacity-[0.04]"
          aria-hidden="true"
        />

        <div class="relative z-1">
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div class="min-w-0">
              <div class="mb-3 flex flex-wrap items-center gap-2 lg:hidden">
                <span class="font-badge text-xs text-primary">
                  {{ String(index + 1).padStart(2, "0") }}
                </span>
                <span
                  v-if="index === 0"
                  class="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-badge text-[10px] uppercase tracking-wider text-primary"
                >
                  <span class="size-1.5 animate-pulse rounded-full bg-primary" />
                  Now
                </span>
              </div>

              <p class="font-label text-xs uppercase tracking-[0.18em] text-primary">
                {{ exp.period }}
              </p>
              <h3 class="font-section mt-2 text-xl text-highlighted sm:text-2xl">
                {{ exp.role }}
              </h3>
              <p class="font-subtitle mt-1 text-sm text-primary/85 sm:text-base">
                {{ exp.company }}
                <span class="text-muted"> · </span>
                <span class="text-muted">{{ exp.location }}</span>
              </p>
            </div>

            <span
              v-if="index === 0"
              class="hidden items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-badge text-[10px] uppercase tracking-wider text-primary lg:inline-flex"
            >
              <span class="size-1.5 animate-pulse rounded-full bg-primary" />
              Current
            </span>
          </div>

          <ul class="mt-5 space-y-3 border-t border-white/5 pt-5">
            <li
              v-for="(responsibility, idx) in exp.responsibilities"
              :key="idx"
              class="flex gap-3 text-sm leading-7 text-muted sm:text-[0.95rem]"
            >
              <span
                class="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary/70"
                aria-hidden="true"
              />
              <span>{{ responsibility }}</span>
            </li>
          </ul>

          <div class="mt-5 flex flex-wrap gap-1.5">
            <UBadge
              v-for="tech in exp.technologies"
              :key="tech"
              color="neutral"
              variant="soft"
              size="sm"
              class="border border-white/5 transition-colors group-hover:border-primary/20"
            >
              {{ tech }}
            </UBadge>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
};

defineProps<{
  experiences: Experience[];
}>();
</script>
