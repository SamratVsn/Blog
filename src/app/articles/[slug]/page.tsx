import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeEnhancer } from "@/components/CodeEnhancer";
import { Eyebrow } from "@/components/Eyebrow";
import { ReadingProgress } from "@/components/ReadingProgress";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ShareButtons } from "@/components/ShareButtons";
import { TableOfContents } from "@/components/TableOfContents";
import { Tag } from "@/components/ArticleCard";
import { formatDisplayDate, getAllMeta, getArticle, getNeighbors, getRelated } from "@/lib/articles";
import { site } from "@/lib/site";

export async function generateStaticParams() {
  return getAllMeta().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  const url = `/articles/${article.slug}`;
  const canonical = article.canonicalUrl ?? url;
  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    authors: [{ name: site.name, url: site.url }],
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url,
      publishedTime: new Date(article.date).toISOString(),
      ...(article.updated ? { modifiedTime: new Date(article.updated).toISOString() } : {}),
      authors: [site.name],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const related = getRelated(slug, 3);
  const { newer, older } = getNeighbors(slug);
  const url = `/articles/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: new Date(article.date).toISOString(),
    ...(article.updated ? { dateModified: new Date(article.updated).toISOString() } : {}),
    author: { "@type": "Person", name: site.name, url: site.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}${url}` },
    keywords: article.tags.join(", "),
    wordCount: article.words,
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadingProgress />

      <div className="grid gap-12 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_240px]">
        <article className="min-w-0 max-w-[68ch]">
          <header>
            <Eyebrow>{article.category ?? "Blog"}</Eyebrow>
            <h1 className="mt-4 text-[2.1rem] leading-[1.05] font-bold tracking-[-0.03em] text-balance text-slate-900 sm:text-5xl dark:text-white">
              {article.title}
            </h1>
            {article.description && (
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
                {article.description}
              </p>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-2 border-y border-slate-200/70 py-4 font-mono text-[11px] text-slate-400 dark:border-white/[0.06] dark:text-slate-500">
              <span>
                By <span className="text-slate-600 dark:text-slate-300">{site.name}</span>
              </span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
              <time dateTime={article.date}>{formatDisplayDate(article.date)}</time>
              {article.updated && (
                <>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <time dateTime={article.updated}>Updated {formatDisplayDate(article.updated)}</time>
                </>
              )}
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span>{article.readingTime}</span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span>≈ {article.words.toLocaleString("en-US")} words</span>
              {article.mediumUrl && (
                <>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <a
                    href={article.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-slate-600 dark:hover:text-slate-300"
                  >
                    Originally on Medium
                  </a>
                </>
              )}
            </div>
          </header>

          <div id="article-body" className="article-body mt-8" dangerouslySetInnerHTML={{ __html: article.html }} />
          <CodeEnhancer />

          <footer>
            {article.tags.length > 0 && (
              <div className="mt-10 flex flex-wrap items-center gap-1.5" aria-label="Tags">
                {article.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            )}

            <div className="mt-8 border-t border-slate-200/70 pt-6 dark:border-white/[0.06]">
              <ShareButtons title={article.title} url={`${site.url}${url}`} />
            </div>

            <div className="mt-8 flex gap-4 rounded-xl border border-slate-200 bg-slate-50/60 p-5 dark:border-white/[0.05] dark:bg-panel/60">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3b82f6] text-sm font-bold text-[#020617]"
              >
                S
              </span>
              <div>
                <p className="text-[15px] font-semibold text-slate-900 dark:text-white">
                  {site.name}
                </p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-slate-500 dark:text-slate-400">
                  Student and Android developer from Nepal, building native apps with Kotlin and
                  Jetpack Compose.{" "}
                  <Link href="/about" className="font-medium text-[#3b82f6] hover:underline">
                    More about me →
                  </Link>
                </p>
              </div>
            </div>

            <RelatedArticles articles={related} />

            <nav aria-label="Chronological" className="mt-10 grid gap-4 border-t border-slate-200/70 pt-6 sm:grid-cols-2 dark:border-white/[0.06]">
              <div>
                {older && (
                  <Link href={`/articles/${older.slug}`} className="group block">
                    <span className="font-mono text-[11px] tracking-widest text-slate-400 uppercase dark:text-slate-500">
                      ← Older
                    </span>
                    <span className="mt-1.5 block text-[15px] leading-snug font-medium text-slate-700 group-hover:text-[#3b82f6] dark:text-slate-200">
                      {older.title}
                    </span>
                  </Link>
                )}
              </div>
              <div className="sm:text-right">
                {newer && (
                  <Link href={`/articles/${newer.slug}`} className="group block">
                    <span className="font-mono text-[11px] tracking-widest text-slate-400 uppercase dark:text-slate-500">
                      Newer →
                    </span>
                    <span className="mt-1.5 block text-[15px] leading-snug font-medium text-slate-700 group-hover:text-[#3b82f6] dark:text-slate-200">
                      {newer.title}
                    </span>
                  </Link>
                )}
              </div>
            </nav>

            <p className="mt-8 text-sm">
              <Link href="/articles" className="font-medium text-[#3b82f6] hover:underline">
                ← Back to all blogs
              </Link>
            </p>
          </footer>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents entries={article.toc} />
          </div>
        </aside>
      </div>

      {/* Mobile TOC */}
      {article.toc.length > 0 && (
        <details className="mx-auto mb-12 max-w-[68ch] rounded-xl border border-slate-200 p-5 lg:hidden dark:border-white/[0.06] dark:bg-panel/40">
          <summary className="cursor-pointer text-sm font-medium text-slate-700 dark:text-slate-200">
            On this page
          </summary>
          <ul className="mt-3 space-y-2 text-sm">
            {article.toc.map((entry) => (
              <li key={entry.id} className={entry.depth === 3 ? "pl-4" : ""}>
                <a href={`#${entry.id}`} className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                  {entry.text}
                </a>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
