<template>
  <footer class="font-footer relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-md">
    <UContainer class="py-5">
      <div class="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p class="text-center text-sm text-muted sm:text-left">
          © {{ year }} Amir Maghami
        </p>

        <div class="flex items-center gap-1">
          <UButton
            icon="i-simple-icons-github"
            variant="ghost"
            color="neutral"
            size="sm"
            to="https://github.com/amirrr1987"
            target="_blank"
            aria-label="GitHub"
          />
          <UButton
            icon="i-simple-icons-linkedin"
            variant="ghost"
            color="neutral"
            size="sm"
            to="https://www.linkedin.com/in/amirrr1987/"
            target="_blank"
            aria-label="LinkedIn"
          />
          <UButton
            icon="i-heroicons-envelope"
            variant="ghost"
            color="neutral"
            size="sm"
            to="mailto:maghami.a1987@gmail.com"
            aria-label="Email"
          />
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
