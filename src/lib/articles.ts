import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import type { ArticleMeta, TocEntry } from "./article-utils";

export type { ArticleMeta, TocEntry };

const CONTENT_DIR = path.join(process.cwd(), "content", "articles");

export type Article = ArticleMeta & {
  html: string;
  toc: TocEntry[];
  plainText: string;
};

type RawFrontmatter = {
  title?: unknown;
  description?: unknown;
  date?: unknown;
  updated?: unknown;
  tags?: unknown;
  category?: unknown;
  readingTime?: unknown;
  image?: unknown;
  mediumUrl?: unknown;
  canonicalUrl?: unknown;
  published?: unknown;
};

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

function parseDate(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const time = Date.parse(value);
  return Number.isNaN(time) ? undefined : value;
}

function parseTags(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((t): t is string => typeof t === "string" && t.trim().length > 0);
}

/** GitHub-style slugger (compatible with rehype-slug for plain ASCII headings). */
function slugify(text: string, seen: Map<string, number>): string {
  const base =
    text
      .toLowerCase()
      .trim()
      .replace(/['’]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-") || "section";
  const count = seen.get(base) ?? 0;
  seen.set(base, count + 1);
  return count === 0 ? base : `${base}-${count}`;
}

type MdastNode = {
  type: string;
  value?: string;
  depth?: number;
  children?: MdastNode[];
};

function nodeText(node: MdastNode): string {
  if (typeof node.value === "string" && (node.type === "text" || node.type === "inlineCode")) {
    return node.value;
  }
  return (node.children ?? []).map(nodeText).join("");
}

function extractToc(markdown: string): TocEntry[] {
  const tree = unified().use(remarkParse).use(remarkGfm).parse(markdown) as MdastNode;
  const seen = new Map<string, number>();
  const toc: TocEntry[] = [];

  const visit = (node: MdastNode) => {
    if (node.type === "heading" && (node.depth === 2 || node.depth === 3)) {
      const text = nodeText(node).trim();
      if (text) toc.push({ id: slugify(text, seen), text, depth: node.depth });
    }
    for (const child of node.children ?? []) visit(child);
  };
  visit(tree);
  return toc;
}

function toPlainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^[>\s-]*([*+-]\s+|\d+\.\s+)/gm, "")
    .replace(/[*_~|]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function readingTimeFor(markdown: string, override?: string): string {
  if (override && override.trim()) return override.trim();
  const words = markdown.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export { formatDisplayDate } from "./article-utils";

async function markdownToHtml(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: { light: "github-light", dark: "github-dark" },
      keepBackground: false,
      defaultLang: "plaintext",
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);
  return String(file);
}

function readSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));
}

function readRaw(slug: string): { markdown: string; data: RawFrontmatter } | null {
  for (const ext of [".md", ".mdx"]) {
    const full = path.join(CONTENT_DIR, `${slug}${ext}`);
    if (fs.existsSync(full)) {
      const parsed = matter(fs.readFileSync(full, "utf8"));
      return { markdown: parsed.content, data: parsed.data as RawFrontmatter };
    }
  }
  return null;
}

function toMeta(slug: string, markdown: string, data: RawFrontmatter): ArticleMeta {
  return {
    slug,
    title: asString(data.title, slug),
    description: asString(data.description),
    date: parseDate(data.date) ?? "1970-01-01",
    updated: parseDate(data.updated),
    tags: parseTags(data.tags),
    category: asString(data.category) || undefined,
    readingTime: readingTimeFor(markdown, asString(data.readingTime)),
    words: markdown.split(/\s+/).filter(Boolean).length,
    image: asString(data.image) || undefined,
    mediumUrl: asString(data.mediumUrl) || undefined,
    canonicalUrl: asString(data.canonicalUrl) || undefined,
    published: data.published !== false,
  };
}

const metaCache = new Map<string, ArticleMeta>();

export function getAllMeta(): ArticleMeta[] {
  const metas = readSlugs().map((slug) => {
    const cached = metaCache.get(slug);
    if (cached) return cached;
    const raw = readRaw(slug);
    if (!raw) return null;
    const meta = toMeta(slug, raw.markdown, raw.data);
    metaCache.set(slug, meta);
    return meta;
  });
  return (metas.filter(Boolean) as ArticleMeta[])
    .filter((m) => m.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticle(slug: string): Promise<Article | null> {
  const raw = readRaw(slug);
  if (!raw) return null;
  const meta = toMeta(slug, raw.markdown, raw.data);
  if (!meta.published) return null;
  const [html] = await Promise.all([markdownToHtml(raw.markdown)]);
  return {
    ...meta,
    html,
    toc: extractToc(raw.markdown),
    plainText: toPlainText(raw.markdown).slice(0, 6000),
  };
}

/** Articles for a curated topic: matches the topic label against tags or category. */
export function getArticlesByTopic(label: string): ArticleMeta[] {
  const key = label.toLowerCase();
  return getAllMeta().filter(
    (m) =>
      m.category?.toLowerCase() === key || m.tags.some((t) => t.toLowerCase() === key)
  );
}

export function getAllTags(): { label: string; count: number }[] {
  const counts = new Map<string, { label: string; count: number }>();
  for (const meta of getAllMeta()) {
    for (const tag of meta.tags) {
      const key = tag.toLowerCase();
      const entry = counts.get(key) ?? { label: tag, count: 0 };
      entry.count += 1;
      counts.set(key, entry);
    }
  }
  return [...counts.values()].sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

export function getRelated(slug: string, limit = 3): ArticleMeta[] {
  const all = getAllMeta();
  const current = all.find((a) => a.slug === slug);
  if (!current) return all.slice(0, limit);
  const currentTags = new Set(current.tags.map((t) => t.toLowerCase()));
  return all
    .filter((a) => a.slug !== slug)
    .map((a) => {
      const shared = a.tags.filter((t) => currentTags.has(t.toLowerCase())).length;
      const sameCategory =
        current.category && a.category?.toLowerCase() === current.category.toLowerCase() ? 1 : 0;
      return { article: a, score: shared * 2 + sameCategory };
    })
    .sort((x, y) => y.score - x.score || (x.article.date < y.article.date ? 1 : -1))
    .slice(0, limit)
    .map((r) => r.article);
}

/** Chronological neighbours for prev/next (newer/older) navigation. */
export function getNeighbors(slug: string): { newer: ArticleMeta | null; older: ArticleMeta | null } {
  const all = getAllMeta();
  const i = all.findIndex((a) => a.slug === slug);
  if (i === -1) return { newer: null, older: null };
  return { newer: all[i - 1] ?? null, older: all[i + 1] ?? null };
}
