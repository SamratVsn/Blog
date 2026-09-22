import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const url = `/blog/${article.slug}`;
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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const { older } = getNeighbors(slug);
  const next = older ?? null;
  const url = `/blog/${article.slug}`;

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
    <div className="mx-auto w-full max-w-7xl p-8 md:p-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadingProgress />

      <article className="mx-auto max-w-4xl">
        <header>
          <p className="font-display text-xs font-bold tracking-[0.25em] text-clinical-blue uppercase">
            {(article.category ?? "Blog").toUpperCase()} <span className="mx-2 text-zinc-300">•</span>{" "}
            {article.readingTime.replace("min read", "MIN READ").toUpperCase()}
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.1] font-black tracking-tight text-balance text-ink md:text-7xl">
            {article.title}
          </h1>
          {article.description && (
            <p className="mt-6 text-2xl leading-snug font-semibold text-zinc-500">
              {article.description}
            </p>
          )}
          <div className="mt-8 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-zinc-200 font-display text-sm font-black text-zinc-500 grayscale"
            >
              S
            </span>
            <div>
              <p className="text-sm font-bold text-ink">{site.name}</p>
              <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
                Published {formatDisplayDate(article.date)}
                {article.mediumUrl ? " · Originally on Medium" : ""}
              </p>
            </div>
          </div>
        </header>

        {article.image && (
          <figure className="mt-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.image}
              alt=""
              loading="lazy"
              className="-mx-6 h-[320px] w-[calc(100%+3rem)] object-cover sm:h-[480px] md:-mx-24 md:w-[calc(100%+12rem)] lg:-mx-32 lg:h-[600px] lg:w-[calc(100%+16rem)]"
            />
          </figure>
        )}

        <div id="article-body" className="article-body mt-12" dangerouslySetInnerHTML={{ __html: article.html }} />
        <CodeEnhancer />

        <footer>
          {article.tags.length > 0 && (
            <div className="mt-14 flex flex-wrap gap-2.5" aria-label="Tags">
              {article.tags.map((tag) => (
                <span key={tag} className="bg-surface px-3.5 py-1.5 font-mono text-[11px] tracking-[0.12em] text-zinc-600 uppercase">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {next && (
            <Link
              href={`/blog/${next.slug}`}
              className="brutal brutal-dark group mt-10 block bg-ink p-8 sm:p-10"
              aria-label={`Next entry: ${next.title}`}
            >
              <p className="font-display text-xs font-bold tracking-[0.25em] text-clinical-blue uppercase">
                Next Entry
              </p>
              <p className="mt-4 flex max-w-2xl items-center gap-4 font-display text-2xl leading-tight font-black tracking-tight text-white sm:text-3xl">
                {next.title}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="shrink-0 text-clinical-blue transition-transform group-hover:translate-x-2"
                />
              </p>
            </Link>
          )}

          <p className="mt-8 text-[15px]">
            <Link href="/essays" className="font-bold text-clinical-blue hover:underline">
              ← Back to all essays
            </Link>
          </p>
        </footer>
      </article>
    </div>
  );
}
