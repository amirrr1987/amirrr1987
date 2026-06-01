<template>
  <UModal
    v-model:open="open"
    :ui="{ content: 'max-w-lg glass-panel ring-1 ring-primary/25 shadow-2xl shadow-primary/20' }"
  >
    <template #content>
      <div class="p-2">
        <div class="flex items-center gap-2 border-b border-white/10 px-3 py-3">
          <UIcon name="i-heroicons-magnifying-glass" class="size-5 text-primary" />
          <UInput
            v-model="query"
            placeholder="Jump to… projects, skills, contact"
            autofocus
            variant="none"
            class="flex-1 font-mono"
            :ui="{ base: 'text-base' }"
          />
          <UKbd>Esc</UKbd>
        </div>
        <ul class="max-h-72 overflow-y-auto p-2">
          <li v-for="item in filtered" :key="item.to">
            <UButton
              :to="item.to"
              variant="ghost"
              color="neutral"
              block
              class="justify-start gap-3 rounded-xl px-3 py-3 font-mono hover:bg-primary/10 hover:text-primary"
              :icon="item.icon"
              @click="close()"
            >
              <span class="flex-1 text-left">{{ item.label }}</span>
              <UKbd v-if="item.shortcut" size="sm">{{ item.shortcut }}</UKbd>
            </UButton>
          </li>
          <li v-if="!filtered.length" class="px-4 py-6 text-center text-sm text-muted">
            No matches
          </li>
        </ul>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
const { open, close, toggle } = useCommandPalette();
const query = ref("");

const items = [
  { label: "Home", to: "/", icon: "i-heroicons-home" },
  { label: "About", to: "/about", icon: "i-heroicons-user" },
  { label: "Projects", to: "/projects", icon: "i-heroicons-rocket-launch", shortcut: "P" },
  { label: "Skills", to: "/skills", icon: "i-heroicons-cpu-chip" },
  { label: "Experience", to: "/experiences", icon: "i-heroicons-briefcase" },
  { label: "Blog", to: "/blogs", icon: "i-heroicons-document-text" },
  { label: "Contact", to: "/contact", icon: "i-heroicons-envelope", shortcut: "C" },
  { label: "Download CV", to: "/AmirMagjami-Resume.pdf", icon: "i-heroicons-document-arrow-down" },
];

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return items;
  return items.filter((i) => i.label.toLowerCase().includes(q));
});

function onKey(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    toggle();
    query.value = "";
  }
  if (e.key === "Escape" && open.value) {
    close();
  }
}

onMounted(() => window.addEventListener("keydown", onKey));
onUnmounted(() => window.removeEventListener("keydown", onKey));
</script>
