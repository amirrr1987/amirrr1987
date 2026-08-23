export default defineAppConfig({
  ui: {
    colors: {
      primary: "emerald",
      secondary: "violet",
    },
    badge: {
      slots: {
        base: "font-badge",
      },
    },
    button: {
      slots: {
        base: "font-button rounded-xl",
      },
    },
    card: {
      slots: {
        root: "rounded-2xl",
      },
    },
  },
});
