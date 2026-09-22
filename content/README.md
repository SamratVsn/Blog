# Content — how to publish an article

Articles live in `content/articles/` as Markdown files. Both `.md` and
`.mdx` extensions are accepted and parsed the same way (frontmatter +
GitHub-flavored Markdown with syntax highlighting).

## Workflow

1. Create a file: `content/articles/my-new-article.md`
2. Add frontmatter (see below)
3. Write the article in Markdown
4. (Optional) Add images under `public/images/<slug>/` and reference them as `/images/<slug>/name.png`
5. Build / deploy — the article appears automatically. No app code changes needed.

The filename (without extension) becomes the URL slug:
`my-new-article.md` → `/articles/my-new-article`

## Frontmatter

```yaml
---
title: "My Article Title"
description: "One or two sentences shown in lists, SEO, and sharing cards."
date: "2026-09-22"
updated: "2026-09-25"   # optional
tags:
  - Android
  - Kotlin
category: "Android"      # optional, shown as the article's primary category
readingTime: "6 min read" # optional — auto-calculated if omitted
mediumUrl: "https://medium.com/..."    # optional — shows an "Originally on Medium" link
canonicalUrl: "https://medium.com/..." # optional — SEO canonical (use for cross-posts)
published: true           # set to false to keep as a draft (hidden everywhere)
---
```

## Supported Markdown

- H1 / H2 / H3 (H2–H3 feed the table of contents)
- Paragraphs, **bold**, *italic*, `inline code`
- Links, ordered / unordered lists, blockquotes
- Fenced code blocks with a copy button and syntax highlighting
  (kotlin, java, javascript, typescript, html, css, bash, json, xml, sql, …)
- Tables, images with captions, horizontal rules (`---`)

Code fences should always declare a language:

````markdown
```kotlin
val greeting = "Hello, Android!"
```
````
