export type BlogTag = "Vue" | "Nuxt" | "UI" | "Motion" | "Performance";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "code"; lang: string; text: string }
  | { type: "ul"; items: string[] };

export interface BlogPost {
  slug: string;
  signal: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: BlogTag[];
  theme: "emerald" | "violet" | "sky" | "amber";
  content: BlogBlock[];
}
