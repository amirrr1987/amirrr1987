export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      secondary: 'emerald',
      neutral: 'slate'
    },
    icons: {
      light: 'i-heroicons-sun',
      dark: 'i-heroicons-moon',
      system: 'i-heroicons-computer-desktop',
      search: 'i-heroicons-magnifying-glass',
      close: 'i-heroicons-x-mark',
      menu: 'i-heroicons-bars-3',
      check: 'i-heroicons-check',
      chevronDown: 'i-heroicons-chevron-down',
      chevronRight: 'i-heroicons-chevron-right',
      chevronLeft: 'i-heroicons-chevron-left',
      arrowLeft: 'i-heroicons-arrow-left',
      arrowRight: 'i-heroicons-arrow-right',
      external: 'i-heroicons-arrow-top-right-on-square',
      loading: 'i-heroicons-arrow-path'
    },
    button: {
      slots: {
        base: 'font-mono'
      }
    },
    card: {
      slots: {
        root: 'ring-1 ring-white/10'
      }
    }
  }
})
