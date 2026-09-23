# SamratVsn — Blogs & Essays

Personal blog of **Samrat Parajuli ([SamratVsn](https://github.com/SamratVsn))**,
an Android developer from Nepal building native apps with Kotlin and Jetpack
Compose. Lives at [`blog.samratparajuli0.com.np`](https://blog.samratparajuli0.com.np),
next to the portfolio at
[`samratparajuli0.com.np`](https://www.samratparajuli0.com.np/): the portfolio
shows *what I build*, this site shows *how I think, learn, and build*.

## Design

A light editorial/brutalist system, not a SaaS template:

- **Paper** `#F8F9FA` background, **ink** `#1A1A1A` text/blocks, **clinical blue**
  `#007AFF` as the sole accent, **surface** `#E9ECEF` for muted blocks
- Sharp corners everywhere (`rounded-none` aesthetic, avatars/dots excepted)
- Signature hover: cards lift `-8px` with a hard `12px 12px` offset shadow
  (ink on light cards, blue on dark cards)
- Montserrat Black headlines (tight, often uppercase), Source Sans 3 body,
  JetBrains Mono for kickers/meta/code, Font Awesome icons
- Tiny uppercase eyebrow labels, hairline dividers, generous whitespace

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** — static
  prerendering, per-post metadata, sitemap, RSS, OG images
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **File-based Markdown content** (`.md` / `.mdx` + frontmatter, parsed with
  `gray-matter`)
- **unified / remark / rehype + Shiki** Markdown pipeline (GFM, heading slugs,
  single light syntax theme, auto pull-quote panels — see below)
- **Font Awesome** (`react-fontawesome` + solid + brand packs) for icons
- No database, no CMS, no client-side data fetching — search/filter run on
  build-time data

## Routes

| Route          | What it is                                            |
| -------------- | ----------------------------------------------------- |
| `/`            | Index — bento grid (bio panel, featured post, cards)  |
| `/essays`      | Essays — newest-first index of every blog             |
| `/blog/:slug`  | Reading page — essay with pull-quote + next entry     |
| `/archive`     | Chronology — year groups, category filter, search     |
| `/about`       | About — portrait, timeline, philosophy, contact       |
| `/legal`       | Copyright, cross-post and image-credit notes          |
| `/feed.xml`    | RSS feed                                              |
| `/sitemap.xml` | Sitemap (`/robots.txt` included)                      |

Legacy paths redirect so old links keep working: `/articles` → `/essays`,
`/articles/:slug` → `/blog/:slug`, `/topics*` → `/archive`.

## Writing a blog

Full guide in [`content/README.md`](content/README.md). Short version:

1. Create `content/articles/my-new-blog.md`
2. Add frontmatter:

```yaml
title: "My Blog Title"
description: "One or two sentences for lists, SEO, and cards."
date: "2026-09-23"        # YYYY-MM-DD
tags: [Android, Kotlin]   # free-form
category: "Android"       # drives archive filters + kicker
image: "https://…"        # optional cover (featured card + hero)
mediumUrl: "https://…"    # optional — "Originally on Medium" link
canonicalUrl: "https://…" # optional — SEO canonical for cross-posts
published: true           # false = draft, hidden everywhere
```

3. Write Markdown, build, deploy — no app code changes needed.

Two content conventions enforced by the pipeline:

- **Cover images** come from `image` frontmatter (remote URLs allowed).
- **Pull-quote:** the first short (≤ 400 chars), link-free blockquote that
  isn't a sign-off renders as the black featured panel. Everything else stays
  a regular quote. Sign-offs and link blocks are never promoted.

House rule for this site: only publish real content. No invented stats,
testimonials, achievements, or placeholder text presented as real.

## Develop

Prerequisites: **Node.js 20+** and npm.

```bash
npm install     # install dependencies
npm run dev     # local dev server (http://localhost:3000)
npm run build   # production build — type-checks + prerenders all pages
npm run lint    # eslint
npm run preview # serve the production build locally (next start)
```

## Project structure

```
src/app/                  routes: /, /essays, /blog/[slug], /archive, /about, /legal
src/app/*.ts              sitemap.ts, robots.ts, feed.xml/route.ts, OG images
src/components/           Header, Footer, BentoCard, PostCard, ArchiveBrowser,
                          ArchiveRow, FilterChip, TimelineItem, Eyebrow,
                          ReadingProgress, CodeEnhancer, icons
src/lib/                  site.ts (brand, links, nav), articles.ts (Markdown →
                          HTML pipeline, related posts, neighbours),
                          article-utils.ts (client-safe types/helpers)
content/articles/         Markdown blogs with frontmatter (+ content/README.md)
public/                   favicon.svg, images/samrat.png (portrait)
next.config.ts            redirects for legacy /articles/* and /topics/* URLs
```

## Deploy

Standard Next.js deployment (e.g. Vercel: import repo, deploy — no extra
config). Point `blog.samratparajuli0.com.np` at the deployment. All content
pages are prerendered at build time, so any static-capable Next host works.

## License

© Samrat Parajuli. Words and images are mine unless credited otherwise —
see [/legal](/legal) for copyright, cross-post, and image-credit notes.
