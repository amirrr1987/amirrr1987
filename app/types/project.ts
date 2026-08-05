export type ProjectPreviewTheme = 'emerald' | 'violet' | 'sky' | 'amber' | 'rose'

export interface Project {
  slug: string
  name: string
  description: string
  tagline: string
  technologies: string[]
  /** Primary CTA — live demo when set, otherwise GitHub */
  url: string
  githubUrl: string
  liveUrl?: string
  preview: ProjectPreviewTheme
  caseStudy?: boolean
  featured?: boolean
  org?: string
  year?: string
}

export interface ProjectCaseStudy extends Project {
  caseStudy: true
  year: string
  role: string
  problem: string
  solution: string
  outcomes: string[]
  highlights: { title: string, text: string }[]
}
