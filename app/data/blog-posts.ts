import type { BlogPost } from "~/types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "vue-composition-patterns",
    signal: "SIG-004",
    title: "Composition API patterns that survive production",
    excerpt:
      "How I structure composables, refs, and side-effects so Vue apps stay readable after the third feature sprint.",
    date: "2026-02-14",
    readTime: "6 min",
    tags: ["Vue"],
    theme: "emerald",
    content: [
      {
        type: "p",
        text: "The Composition API shines when your components stop being junk drawers. In production code, the win is not shorter files — it is predictable boundaries between UI, state, and effects.",
      },
      {
        type: "h2",
        text: "One composable, one job",
      },
      {
        type: "p",
        text: "I split by capability, not by file count. A composable should answer one question: fetch projects, animate a counter, or sync scroll state — not all three.",
      },
      {
        type: "code",
        lang: "ts",
        text: `export function useProjects() {
  const projects = computed(() => portfolioProjects);
  function getBySlug(slug: string) {
    return portfolioProjects.find((p) => p.slug === slug);
  }
  return { projects, getBySlug };
}`,
      },
      {
        type: "h2",
        text: "Lifecycle belongs at the edge",
      },
      {
        type: "p",
        text: "onMounted and watchers live in the component or in a composable that explicitly documents client-only behavior. GSAP contexts, ResizeObserver, and matchMedia checks stay scoped and reverted on unmount.",
      },
      {
        type: "ul",
        items: [
          "Return plain refs and computeds — avoid leaking raw DOM nodes unless necessary.",
          "Name composables useX so intent is obvious in <script setup>.",
          "Keep template logic dumb; push branching into computed properties.",
        ],
      },
    ],
  },
  {
    slug: "nuxt-app-architecture",
    signal: "SIG-003",
    title: "Nuxt 4 layout: data, pages, and server boundaries",
    excerpt:
      "A practical split between app/data, composables, and Nitro routes for a portfolio that still scales to product work.",
    date: "2026-01-28",
    readTime: "7 min",
    tags: ["Nuxt"],
    theme: "violet",
    content: [
      {
        type: "p",
        text: "Nuxt 4 rewards folders that mirror how you think about the product. I keep marketing pages thin, push reusable logic into composables, and treat server routes as optional adapters — not the source of truth.",
      },
      {
        type: "h2",
        text: "Data lives in app/data",
      },
      {
        type: "p",
        text: "Projects, case studies, and blog posts are typed modules imported directly. That means zero network waterfall on navigation and predictable builds on Netlify.",
      },
      {
        type: "h2",
        text: "Pages orchestrate, components render",
      },
      {
        type: "p",
        text: "index.vue composes hero, stats, and teasers. Detail routes validate slugs and redirect when missing. SEO meta stays next to the page that owns the content.",
      },
      {
        type: "code",
        lang: "ts",
        text: `useSeoMeta({
  title: \`\${post.title} — Amir Maghami\`,
  description: post.excerpt,
});`,
      },
      {
        type: "ul",
        items: [
          "Pinia for CV-style editable state; static data for portfolio content.",
          "ClientOnly for canvas, cursor, and scroll plugins.",
          "icon.clientBundle.scan for offline icon sets in production.",
        ],
      },
    ],
  },
  {
    slug: "gsap-scroll-without-jank",
    signal: "SIG-002",
    title: "GSAP scroll reveals without layout thrash",
    excerpt:
      "ScrollTrigger setups that respect prefers-reduced-motion and do not fight Vue's DOM updates.",
    date: "2025-12-10",
    readTime: "5 min",
    tags: ["Motion", "Performance"],
    theme: "sky",
    content: [
      {
        type: "p",
        text: "Scroll animations fail when they run on every element individually without cleanup, or when they animate properties that trigger layout. I default to transform and opacity, batch with stagger, and run once.",
      },
      {
        type: "h2",
        text: "A single composable, one context",
      },
      {
        type: "code",
        lang: "ts",
        text: `export function useGsapScrollReveal(options = {}) {
  onMounted(() => {
    ctx = gsap.context(() => {
      gsap.from(targets, { opacity: 0, y: 40, scrollTrigger: { once: true } });
    });
  });
  onUnmounted(() => ctx?.revert());
}`,
      },
      {
        type: "h2",
        text: "Reduced motion is not optional",
      },
      {
        type: "p",
        text: "If matchMedia('(prefers-reduced-motion: reduce)') matches, skip timelines entirely and set final styles immediately. Accessibility and performance align here.",
      },
      {
        type: "ul",
        items: [
          "Prefer ScrollTrigger once: true for reveal sections.",
          "Avoid animating width, height, or top on large lists.",
          "Revert gsap.context on route change in SPA navigation.",
        ],
      },
    ],
  },
  {
    slug: "glass-ui-nuxt-tailwind",
    signal: "SIG-001",
    title: "Glass UI with Tailwind v4 and Nuxt UI",
    excerpt:
      "Backdrop blur, noise overlays, and gradient borders that feel premium without killing mobile GPU.",
    date: "2025-11-02",
    readTime: "6 min",
    tags: ["UI", "Nuxt"],
    theme: "amber",
    content: [
      {
        type: "p",
        text: "Glassmorphism only works when contrast and hierarchy stay readable. I treat glass panels as surfaces with a fixed recipe: dark fill, subtle border, blur, and a noise layer at low opacity.",
      },
      {
        type: "h2",
        text: "The panel recipe",
      },
      {
        type: "code",
        lang: "css",
        text: `.glass-panel {
  @apply rounded-2xl border border-white/10 bg-slate-950/55 backdrop-blur-xl;
  box-shadow: 0 4px 32px rgb(0 0 0 / 0.35),
    inset 0 1px 0 rgb(255 255 255 / 0.06);
}`,
      },
      {
        type: "h2",
        text: "Pair with Nuxt UI tokens",
      },
      {
        type: "p",
        text: "Primary emerald and violet accents come from app.config. Buttons and badges stay on-design-system; glass is the container, not every interactive element.",
      },
      {
        type: "ul",
        items: [
          "Limit backdrop-blur on large full-screen layers.",
          "Use gradient borders on hover via wrapper pseudo-elements.",
          "Test on mid-range Android — blur stacks quickly.",
        ],
      },
    ],
  },
];
