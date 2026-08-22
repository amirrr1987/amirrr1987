import type { ProjectCaseStudy } from "~/types/project";

export const caseStudies: Record<string, ProjectCaseStudy> = {
  "cv-builder": {
    slug: "cv-builder",
    name: "CV Builder",
    description:
      "A dynamic web application for creating, customizing, and exporting professional resumes.",
    tagline: "Design-first resume builder with live preview & PDF export",
    technologies: ["Vue.js", "Pinia", "TailwindCSS", "Vite"],
    url: "https://cvbuilder-amirmaghami.netlify.app/",
    liveUrl: "https://cvbuilder-amirmaghami.netlify.app/",
    githubUrl: "https://github.com/amirrr1987/amirrr1987",
    preview: "emerald",
    featured: true,
    caseStudy: true,
    year: "2024",
    role: "Design & front-end",
    problem:
      "Job seekers need a fast way to build polished CVs without fighting Word layouts or paying for rigid templates.",
    solution:
      "Built a step-by-step Vue app with real-time preview, theme tokens, and export — focused on clarity and speed on mobile and desktop.",
    outcomes: [
      "Live multi-section editor with instant preview",
      "Theme system for typography & accent colors",
      "One-click PDF export for sharing",
    ],
    highlights: [
      {
        title: "Editor UX",
        text: "Section-based flow so users always know what to fill next.",
      },
      {
        title: "State",
        text: "Pinia stores for profile data with predictable updates across views.",
      },
      {
        title: "Ship",
        text: "Deployed on Netlify with optimized Vite build pipeline.",
      },
    ],
  },
};
