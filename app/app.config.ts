export default defineAppConfig({
  ui: {
    colors: {
      primary: "green",
      secondary: "emerald",
      neutral: "slate",
    },
    button: {
      slots: {
        base: "font-mono",
      },
    },
    card: {
      slots: {
        root: "ring-1 ring-white/10",
      },
    },
  },
});
