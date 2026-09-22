# SamratVsn — Engineering Journal

Personal developer blog for **Samrat Parajuli (SamratVsn)**, hosted at
`blog.samratparajuli0.com.np`. Companion to the portfolio at
`samratparajuli0.com.np`: the portfolio shows *what I build*, this blog shows
*how I think, learn, and build*.

## Stack

- **Next.js 16** (App Router, static export-friendly) + **TypeScript**
- **Tailwind CSS v4** (CSS-based theme, class dark mode)
- File-based Markdown content (`.md` / `.mdx`) with frontmatter
- Unified/remark/rehype pipeline + **Shiki** syntax highlighting
- Zero client-side data fetching; search/filter runs on build-time data

Every dependency has a reason: `gray-matter` (frontmatter), `remark` +
`remark-gfm` + `remark-parse` (Markdown), `remark-rehype` + `rehype-slug` +
`rehype-stringify` (HTML + heading anchors), `rehype-pretty-code` + `shiki`
(highlighting), `tailwindcss` + `@tailwindcss/postcss` (styling).

## Writing an article

See [`content/README.md`](content/README.md). Short version:

1. Create `content/articles/my-article.md`
2. Add frontmatter (`title`, `description`, `date`, `tags`, …)
3. Write Markdown, build, deploy — no app code changes needed.

## Develop

```bash
npm run dev     # local dev server
npm run build   # production build (static pages + search index at build time)
npm run lint    # eslint
```

## Project structure

```
src/app/            routes: /, /articles, /articles/[slug], /topics, /topics/[topic], /about
src/app/*.ts        sitemap.ts, robots.ts, feed.xml/route.ts, opengraph images
src/components/     Header, Footer, ArticleCard, ArticleExplorer, Tag, TOC,
                    CodeEnhancer, ReadingProgress, ThemeToggle, ShareButtons, RelatedArticles
src/lib/            site.ts (brand/links/topics), articles.ts (content pipeline)
content/articles/   Markdown articles with frontmatter
public/             favicon, images
```
