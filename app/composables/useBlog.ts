import type { BlogPost, BlogTag } from "~/types/blog";
import { blogPosts } from "~/data/blog-posts";

export function useBlog() {
  const posts = computed(() =>
    [...blogPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    ),
  );

  function getBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((p) => p.slug === slug);
  }

  const tags = computed(() => {
    const set = new Set<BlogTag>();
    blogPosts.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return [...set];
  });

  return { posts, getBySlug, tags };
}
