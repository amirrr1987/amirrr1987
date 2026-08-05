<template>
  <div
    class="project-preview"
    :class="[
      `project-preview--${theme}`,
      compact && 'project-preview--compact',
      props.class
    ]"
    aria-hidden="true"
  >
    <div class="project-preview-chrome">
      <span class="project-preview-dot" />
      <span class="project-preview-dot" />
      <span class="project-preview-dot" />
      <span class="project-preview-url">{{ urlLabel }}</span>
    </div>
    <div class="project-preview-body">
      <div class="project-preview-ui">
        <div class="project-preview-sidebar" />
        <div class="project-preview-main">
          <div class="project-preview-line project-preview-line--lg" />
          <div class="project-preview-line" />
          <div class="project-preview-line project-preview-line--sm" />
          <div class="project-preview-blocks">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <p class="project-preview-label font-mono">
        {{ label }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectPreviewTheme } from '~/types/project'

const props = withDefaults(
  defineProps<{
    theme: ProjectPreviewTheme
    label: string
    urlLabel?: string
    compact?: boolean
    class?: string
  }>(),
  {
    urlLabel: 'app.demo',
    compact: false
  }
)
</script>
