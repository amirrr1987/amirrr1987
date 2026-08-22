import type { Project } from "~/types/project";
import { caseStudies } from "~/data/case-studies";
import {
  featuredProjects,
  githubOrgs,
  portfolioProjects,
} from "~/data/portfolio-projects";

export function useProjects() {
  const projects = computed(() => portfolioProjects);

  const featured = computed(() => featuredProjects);

  function getBySlug(slug: string) {
    return portfolioProjects.find((p) => p.slug === slug);
  }

  function getCaseStudy(slug: string) {
    return caseStudies[slug] ?? null;
  }

  return {
    projects,
    featured,
    githubOrgs,
    getBySlug,
    getCaseStudy,
    caseStudies,
  };
}
