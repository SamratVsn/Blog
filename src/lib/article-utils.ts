/** Pure, client-safe article helpers and types (no Node.js imports). */

export type TocEntry = {
  id: string;
  text: string;
  depth: 2 | 3;
};

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  category?: string;
  readingTime: string;
  words: number;
  image?: string;
  mediumUrl?: string;
  canonicalUrl?: string;
  published: boolean;
};

export function formatDisplayDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
