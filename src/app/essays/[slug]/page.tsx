import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeEnhancer } from "@/components/CodeEnhancer";
import { ReadingProgress } from "@/components/ReadingProgress";
import { formatDisplayDate, getAllMeta, getArticle, getNeighbors } from "@/lib/articles";
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
  const url = `/essays/${article.slug}`;
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

export default async function EssayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const { older } = getNeighbors(slug);
  const next = older ?? null;
  const url = `/essays/${article.slug}`;

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
    <div className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadingProgress />

      <article className="mx-auto max-w-[720px] pt-10 sm:pt-14">
        <header>
          <p className="font-mono text-[11px] font-bold tracking-[0.22em] text-[#1e90ff] uppercase">
            {(article.category ?? "Blog").toUpperCase()} <span className="mx-2 text-[#c9c9c9]">—</span>{" "}
            {article.readingTime.replace("min read", "MIN READ").toUpperCase()}
          </p>
          <h1 className="mt-4 text-4xl leading-[1.04] font-black tracking-[-0.03em] text-balance text-[#111111] sm:text-6xl">
            {article.title}
          </h1>
          {article.description && (
            <p className="mt-5 text-[16px] leading-relaxed text-[#5a5a5a]">{article.description}</p>
          )}
          <div className="mt-6 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4e4e4] text-[13px] font-black text-[#111111]"
            >
              S
            </span>
            <div>
              <p className="text-[12px] font-black tracking-wide text-[#111111]">
                SAMRAT VSN
              </p>
              <p className="font-mono text-[10px] tracking-[0.16em] text-[#9a9a9a] uppercase">
                Published {formatDisplayDate(article.date).toUpperCase()}
                {article.mediumUrl ? " · Originally on Medium" : ""}
              </p>
            </div>
          </div>
        </header>

        {article.image && (
          <figure className="mt-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={article.image} alt="" className="w-full object-cover" loading="lazy" />
          </figure>
        )}

        <div id="article-body" className="article-body mt-10" dangerouslySetInnerHTML={{ __html: article.html }} />
        <CodeEnhancer />

        <footer>
          {article.tags.length > 0 && (
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-[#e4e4e4] pt-7" aria-label="Tags">
              {article.tags.map((tag) => (
                <span key={tag} className="font-mono text-[11px] tracking-[0.2em] text-[#2b2b2b] uppercase">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {next && (
            <Link
              href={`/essays/${next.slug}`}
              className="group mt-8 block bg-[#111111] p-7 sm:p-9"
              aria-label={`Next entry: ${next.title}`}
            >
              <p className="font-mono text-[11px] font-bold tracking-[0.24em] text-[#1e90ff] uppercase">
                Next entry
              </p>
              <p className="mt-3 max-w-xl text-2xl leading-tight font-black tracking-[-0.02em] text-white sm:text-[28px]">
                {next.title}{" "}
                <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1.5">
                  →
                </span>
              </p>
            </Link>
          )}

          <p className="mt-8 text-sm">
            <Link href="/essays" className="font-semibold text-[#1e90ff] hover:underline">
              ← Back to all essays
            </Link>
          </p>
        </footer>
      </article>
    </div>
  );
}
