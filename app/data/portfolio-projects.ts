import type { Project } from "~/types/project";
import { liveDemos } from "~/data/netlify-urls";

/**
 * GitHub: https://github.com/amirrr1987 · orgs arazchat, amirshop, nahal-base
 * Live: Netlify (`*-amirmaghami.netlify.app` + amirmaghami.ir)
 */
export const portfolioProjects: Project[] = [
  {
    slug: "portfolio",
    name: "Portfolio — amirmaghami.ir",
    description:
      "This site — Nuxt 4, spatial Three.js hero, GSAP, and a curated project system. Deployed on Netlify from GitHub.",
    tagline: "Nuxt 4 · Three.js · Netlify · you are here",
    technologies: ["Nuxt 4", "Vue 3", "Nuxt UI", "Three.js", "GSAP"],
    url: liveDemos.portfolio,
    liveUrl: liveDemos.portfolio,
    githubUrl: "https://github.com/amirrr1987/amirrr1987",
    preview: "emerald",
    featured: true,
    year: "2026",
  },
  {
    slug: "cv-builder",
    name: "CV Builder",
    description:
      "Step-by-step resume builder with live preview, themes, and export — on Netlify since 2023.",
    tagline: "Design-first resume builder · live + case study",
    technologies: ["Vue 3", "Pinia", "Tailwind CSS", "Vite"],
    url: liveDemos.cvBuilder,
    liveUrl: liveDemos.cvBuilder,
    githubUrl: "https://github.com/amirrr1987/amirrr1987",
    preview: "emerald",
    caseStudy: true,
    featured: true,
    year: "2023",
  },
  {
    slug: "skill-jumper",
    name: "Skill Jumper",
    description:
      "TypeScript skill-tree / progression UI — deployed May 2026 from GitHub.",
    tagline: "Gamified progression · Netlify live",
    technologies: ["TypeScript", "Vue 3", "Vite"],
    url: liveDemos.skillJumper,
    liveUrl: liveDemos.skillJumper,
    githubUrl: "https://github.com/amirrr1987/skill-jumper",
    preview: "amber",
    featured: true,
    year: "2026",
  },
  {
    slug: "vue-quest",
    name: "Vue Quest",
    description:
      "Interactive Vue learning — quizzes and challenges. Live on Netlify (vuequest-amirmaghami).",
    tagline: "Gamified Vue practice · May 2026",
    technologies: ["Vue 3", "JavaScript", "Vite"],
    url: liveDemos.vueQuest,
    liveUrl: liveDemos.vueQuest,
    githubUrl: "https://github.com/amirrr1987/vue-quest",
    preview: "sky",
    featured: true,
    year: "2026",
  },
  {
    slug: "mazrae-store",
    name: "Mazrae Aftabgardan",
    description:
      "Nuxt storefront for mazrae-aftabgardan — deployed from GitHub, updated May 2026.",
    tagline: "Nuxt e-commerce · Netlify",
    technologies: ["Nuxt 3", "Vue 3", "Pinia", "Tailwind CSS"],
    url: liveDemos.mazraeStore,
    liveUrl: liveDemos.mazraeStore,
    githubUrl: "https://github.com/amirrr1987/mazrae-aftabgardan",
    preview: "violet",
    featured: true,
    year: "2026",
  },
  {
    slug: "araz-chat",
    name: "Araz Chat",
    description:
      "Chat product — live on arazapp-amirmaghami; org repos arazchat/frontend + backend on GitHub.",
    tagline: "Full-stack chat · Netlify + @arazchat",
    technologies: ["Vue 3", "TypeScript", "Socket.IO", "REST"],
    url: liveDemos.arazChat,
    liveUrl: liveDemos.arazChat,
    githubUrl: "https://github.com/arazchat/frontend",
    preview: "violet",
    org: "arazchat",
    year: "2026",
  },
  {
    slug: "movie-db",
    name: "The Movie Database",
    description:
      "TMDB-powered discovery — Nuxt on Netlify (themovie-amirmaghami), open source on GitHub.",
    tagline: "API-driven movie browser",
    technologies: ["Nuxt", "Vue 3", "Axios", "CSS Grid"],
    url: liveDemos.movieDb,
    liveUrl: liveDemos.movieDb,
    githubUrl: "https://github.com/amirrr1987/themovie",
    preview: "sky",
    year: "2024",
  },
  {
    slug: "dongdong",
    name: "DongDong",
    description:
      "Real-time multiplayer party game — Socket.IO on Netlify (dongdong-amirmaghami).",
    tagline: "Live multiplayer in the browser",
    technologies: ["Vue 3", "Socket.IO", "UnoCSS"],
    url: liveDemos.dongdong,
    liveUrl: liveDemos.dongdong,
    githubUrl: "https://github.com/amirrr1987",
    preview: "rose",
    year: "2025",
  },
  {
    slug: "finance-tracker",
    name: "Finance Tracker",
    description:
      "Personal finance UI built with Nuxt — live demo on finance-tracker-amirmaghami.",
    tagline: "Nuxt · budgets & tracking",
    technologies: ["Nuxt 3", "Vue 3", "Chart.js", "Pinia"],
    url: liveDemos.financeTracker,
    liveUrl: liveDemos.financeTracker,
    githubUrl: "https://github.com/amirrr1987/finance-tracker",
    preview: "emerald",
    year: "2024",
  },
  {
    slug: "online-course",
    name: "Online Course Platform",
    description:
      "Learning platform — Nuxt front on Netlify (online-course-amirmaghami) with Nest backend on GitHub.",
    tagline: "Nuxt + Nest · courses & auth",
    technologies: ["Nuxt 3", "NestJS", "TypeScript"],
    url: liveDemos.onlineCourse,
    liveUrl: liveDemos.onlineCourse,
    githubUrl: "https://github.com/amirrr1987/online-course",
    preview: "violet",
    year: "2025",
  },
  {
    slug: "tour",
    name: "Tour",
    description:
      "Tour / travel experience app — Nuxt deploy on tour-amirmaghami (Dec 2025).",
    tagline: "Nuxt · guided tour UX",
    technologies: ["Nuxt 3", "Vue 3", "Tailwind CSS"],
    url: liveDemos.tour,
    liveUrl: liveDemos.tour,
    githubUrl: "https://github.com/amirrr1987/tour",
    preview: "amber",
    year: "2025",
  },
  {
    slug: "threejs-playground",
    name: "Three.js Playground",
    description:
      "WebGL experiments and 3D scenes — matches the spatial direction of this portfolio.",
    tagline: "Three.js · Netlify live",
    technologies: ["Three.js", "Vue 3", "Vite"],
    url: liveDemos.threeJs,
    liveUrl: liveDemos.threeJs,
    githubUrl: "https://github.com/amirrr1987",
    preview: "sky",
    year: "2024",
  },
  {
    slug: "shop-nuxt",
    name: "Shop Nuxt",
    description:
      "E-commerce Nuxt client — shopnuxt-amirmaghami on Netlify, related shop repos on GitHub.",
    tagline: "Nuxt storefront demo",
    technologies: ["Nuxt 3", "Vue 3", "Pinia"],
    url: liveDemos.shopNuxt,
    liveUrl: liveDemos.shopNuxt,
    githubUrl: "https://github.com/amirshop/site",
    preview: "amber",
    org: "amirshop",
    year: "2024",
  },
  {
    slug: "mafia",
    name: "Mafia Manager",
    description:
      "Mafia game management UI — live on mafia-amirmaghami, TypeScript on GitHub.",
    tagline: "Real-time game admin · Netlify",
    technologies: ["Vue 3", "TypeScript", "Socket.IO"],
    url: liveDemos.mafia,
    liveUrl: liveDemos.mafia,
    githubUrl: "https://github.com/amirrr1987/mafia",
    preview: "rose",
    year: "2025",
  },
  {
    slug: "pm",
    name: "PM — Project Management",
    description:
      "Vue + Nest monorepo for tasks and teams — MIT on GitHub (no public Netlify in list).",
    tagline: "Vue + Nest · open source",
    technologies: ["Vue 3", "NestJS", "TypeScript", "Pinia"],
    url: "https://github.com/amirrr1987/pm",
    githubUrl: "https://github.com/amirrr1987/pm",
    preview: "emerald",
    year: "2024",
  },
];

/** All projects with a Netlify / custom live URL */
export const liveProjectCount = portfolioProjects.filter((p) => p.liveUrl).length;

export const featuredProjects = portfolioProjects.filter((p) => p.featured);

export const githubOrgs = [
  {
    name: "Netlify demos",
    url: "https://app.netlify.com/",
    label: `${liveProjectCount}+ live sites`,
  },
  {
    name: "arazchat",
    url: "https://github.com/orgs/arazchat/repositories",
    label: "Chat (Vue + TS)",
  },
  {
    name: "amirshop",
    url: "https://github.com/orgs/amirshop/repositories",
    label: "Shop org",
  },
  {
    name: "amirrr1987",
    url: "https://github.com/amirrr1987?tab=repositories",
    label: "82+ repos",
  },
] as const;
