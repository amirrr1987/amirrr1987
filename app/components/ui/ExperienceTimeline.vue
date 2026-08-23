<template>
  <div
    class="git-log overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80"
    data-reveal
  >
    <!-- Terminal chrome -->
    <div class="flex items-center gap-2 border-b border-white/8 bg-black/40 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-rose-500/90" />
      <span class="size-2.5 rounded-full bg-amber-400/90" />
      <span class="size-2.5 rounded-full bg-emerald-500/90" />
      <p class="font-mono ml-2 truncate text-[11px] text-muted">
        amir@portfolio ~ <span class="text-primary">git log --graph --career</span>
      </p>
    </div>

    <div class="grid lg:grid-cols-[minmax(0,24rem)_1fr]">
      <!-- Commit list -->
      <nav
        class="border-b border-white/8 lg:border-b-0 lg:border-r lg:border-white/8"
        aria-label="Career commits"
      >
        <ul class="max-h-48 overflow-y-auto p-2 lg:max-h-none lg:p-3">
          <li v-for="(exp, index) in experiences" :key="`${exp.company}-${exp.period}`">
            <button
              type="button"
              class="group flex w-full items-start gap-1.5 rounded-lg px-2 py-2 text-left font-mono text-[11px] leading-relaxed transition-colors sm:text-xs"
              :class="
                activeIndex === index
                  ? 'bg-primary/15 text-primary'
                  : 'text-muted hover:bg-white/5 hover:text-highlighted'
              "
              @click="activeIndex = index"
            >
              <span class="shrink-0 text-primary/50" aria-hidden="true">
                {{ index === 0 ? '*' : '|' }}
              </span>
              <span class="min-w-0">
                <span class="text-violet-300">{{ commitHash(index, exp.company) }}</span>
                <span v-if="index === 0" class="text-primary"> (HEAD)</span>
                <span class="mt-0.5 block truncate text-muted group-hover:text-highlighted">
                  {{ commitMessage(exp) }}
                </span>
              </span>
            </button>
          </li>

          <li
            v-if="education"
            class="mt-1 border-t border-white/5 pt-2"
          >
            <button
              type="button"
              class="flex w-full items-start gap-1.5 rounded-lg px-2 py-2 text-left font-mono text-[11px] text-muted transition-colors hover:bg-white/5 sm:text-xs"
              :class="activeIndex === -1 ? 'bg-primary/15 text-primary' : ''"
              @click="activeIndex = -1"
            >
              <span class="shrink-0 text-primary/30" aria-hidden="true">|</span>
              <span>
                <span class="text-violet-300/70">0000001</span>
                <span class="mt-0.5 block truncate">init(education): first commit</span>
              </span>
            </button>
          </li>
        </ul>
      </nav>

      <!-- Commit detail -->
      <div class="min-h-0 p-4 sm:p-5">
        <article v-if="activeIndex >= 0 && active" :key="activeIndex">
          <p class="font-mono text-[11px] leading-6 text-muted sm:text-xs">
            <span class="text-violet-300">commit</span>
            {{ commitHash(activeIndex, active.company) }}
            <span v-if="activeIndex === 0" class="text-primary"> (HEAD -&gt; main)</span>
          </p>
          <p class="font-mono text-[11px] leading-6 text-muted sm:text-xs">
            <span class="text-violet-300">Author:</span> Amir Maghami
          </p>
          <p class="font-mono text-[11px] leading-6 text-muted sm:text-xs">
            <span class="text-violet-300">Date:</span> {{ active.period }}
          </p>
          <p class="font-mono text-[11px] leading-6 text-muted sm:text-xs">
            <span class="text-violet-300">Location:</span> {{ active.location }}
          </p>

          <div class="my-3 border-t border-white/5" />

          <p class="font-mono text-sm text-highlighted">
            {{ active.role }} @ {{ active.company }}
          </p>

          <ul class="mt-3 space-y-2 overflow-y-auto h-48">
            <li
              v-for="(item, idx) in active.responsibilities"
              :key="idx"
              class="font-mono text-xs leading-relaxed text-muted"
            >
              <span class="text-primary">+</span> {{ item }}
            </li>
          </ul>
     

          <div class="mt-4 flex flex-wrap gap-1.5">
            <span
              v-for="tech in active.technologies.slice(0, 6)"
              :key="tech"
              class="rounded-md border border-primary/20 bg-primary/8 px-2 py-0.5 font-mono text-[10px] text-primary"
            >
              {{ tech }}
            </span>
          </div>
        </article>

        <article v-else-if="education">
          <p class="font-mono text-[11px] leading-6 text-muted sm:text-xs">
            <span class="text-violet-300">commit</span> 0000001
            <span class="text-muted"> (root)</span>
          </p>
          <p class="font-mono text-[11px] leading-6 text-muted sm:text-xs">
            <span class="text-violet-300">Date:</span> {{ education.years }}
          </p>
          <div class="my-3 border-t border-white/5" />
          <p class="font-mono text-sm text-highlighted">
            {{ education.degree }}
          </p>
          <p class="mt-1 font-mono text-xs text-muted">
            {{ education.institution }} · {{ education.location }}
          </p>
        </article>
      </div>
    </div>
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

type Education = {
  degree: string;
  institution: string;
  location: string;
  years: string;
};

const props = defineProps<{
  experiences: Experience[];
  education?: Education | null;
}>();

const activeIndex = ref(0);

const active = computed(() => props.experiences[activeIndex.value] ?? null);

function commitHash(index: number, company: string) {
  let hash = index * 2654435761;
  for (let i = 0; i < company.length; i++) {
    hash = (hash + company.charCodeAt(i) * (i + 1)) >>> 0;
  }
  return hash.toString(16).slice(0, 7).padStart(7, "0");
}

function commitMessage(exp: Experience) {
  const slug = exp.company
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 12);
  const verb = /lead|architect/i.test(exp.role) ? "feat" : "refactor";
  return `${verb}(${slug}): ${exp.role.toLowerCase()}`;
}

function onKeydown(e: KeyboardEvent) {
  const max = props.experiences.length - 1;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    activeIndex.value = Math.min(activeIndex.value + 1, max);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    activeIndex.value = Math.max(activeIndex.value - 1, 0);
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener("keydown", onKeydown);
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener("keydown", onKeydown);
  }
});
</script>
