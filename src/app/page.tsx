import Link from "next/link";
import { ArticleMetaLine, ArticleRow, Tag } from "@/components/ArticleCard";
import { getAllMeta, getAllTags } from "@/lib/articles";
import { site, topics } from "@/lib/site";
import { ExternalIcon } from "@/components/icons";

export default function HomePage() {
  const articles = getAllMeta();
  const [featured, ...rest] = articles;
  const latest = rest.slice(0, 5);
  const tags = getAllTags().slice(0, 10);

  return (
    <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
      {/* Front page */}
      <section className="border-b border-slate-200/70 py-12 sm:py-16 dark:border-slate-800/60">
        <p className="font-mono text-xs tracking-widest text-sky-700 uppercase dark:text-cyan-300/90">
          Vol. 01 — an engineering journal
        </p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.1] font-semibold tracking-tight text-slate-900 text-balance sm:text-5xl dark:text-slate-50">
          {site.tagline}
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-slate-500 italic dark:text-slate-400">
          {site.description}
        </p>
        <p className="mt-6 font-mono text-xs text-slate-400 dark:text-slate-500">
          {site.author.location} · Android &amp; Kotlin ·{" "}
          <a href="/feed.xml" className="underline underline-offset-2 hover:text-slate-600 dark:hover:text-slate-300">
            RSS
          </a>
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/articles"
            className="inline-flex items-center rounded-lg bg-sky-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-900 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
          >
            Browse the index
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-sky-800 underline decoration-cyan-500/60 underline-offset-4 hover:decoration-cyan-500 dark:text-cyan-300"
          >
            About me →
          </Link>
        </div>
      </section>

      {/* Latest entry */}
      {featured && (
        <section aria-labelledby="featured-heading" className="border-b border-slate-200/70 py-10 dark:border-slate-800/60">
          <p id="featured-heading" className="font-mono text-xs tracking-widest text-slate-400 uppercase dark:text-slate-500">
            The latest entry
          </p>
          <article className="group mt-4 border-t-2 border-slate-900 pt-6 dark:border-slate-100">
            <Link href={`/articles/${featured.slug}`} className="block">
              <h2 className="max-w-3xl font-serif text-3xl leading-tight font-semibold tracking-tight text-slate-900 text-balance group-hover:text-sky-800 sm:text-4xl dark:text-slate-50 dark:group-hover:text-cyan-300">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-slate-500 italic dark:text-slate-400">
                {featured.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                <ArticleMetaLine article={featured} />
                <span className="text-sm font-medium text-sky-800 dark:text-cyan-300">
                  Read the entry <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </article>
        </section>
      )}

      <div className="grid gap-12 py-10 lg:grid-cols-[1fr_280px]">
        {/* Index */}
        <section aria-labelledby="latest-heading">
          <div className="mb-2 flex items-baseline justify-between">
            <h2 id="latest-heading" className="font-serif text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              From the index
            </h2>
            <Link href="/articles" className="text-sm font-medium text-sky-800 hover:underline dark:text-cyan-300">
              Full index →
            </Link>
          </div>
          {latest.length > 0 ? (
            <div>
              {latest.map((a, i) => (
                <ArticleRow key={a.slug} article={a} number={i + 2} />
              ))}
            </div>
          ) : (
            <p className="py-6 font-serif text-lg italic">More notes are on the way.</p>
          )}
        </section>

        {/* Marginalia */}
        <aside className="space-y-10">
          <section aria-labelledby="topics-heading">
            <h2 id="topics-heading" className="font-mono text-xs tracking-widest text-slate-400 uppercase dark:text-slate-500">
              Filed under
            </h2>
            <ul className="mt-4 space-y-3">
              {topics.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/topics/${t.slug}`}
                    className="group flex items-baseline justify-between border-b border-slate-200/60 pb-2.5 dark:border-slate-800/60"
                  >
                    <span className="font-serif text-lg text-slate-800 group-hover:text-sky-800 dark:text-slate-100 dark:group-hover:text-cyan-300">
                      {t.label}
                    </span>
                    <span aria-hidden="true" className="font-mono text-xs text-slate-300 transition-transform group-hover:translate-x-0.5 dark:text-slate-600">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            {tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <Tag key={t.label} label={t.label} />
                ))}
              </div>
            )}
          </section>

          <section aria-labelledby="about-heading" className="border-t-2 border-slate-900 pt-4 dark:border-slate-100">
            <h2 id="about-heading" className="font-mono text-xs tracking-widest text-slate-400 uppercase dark:text-slate-500">
              The author
            </h2>
            <p className="mt-3 font-serif text-[17px] leading-relaxed text-slate-600 dark:text-slate-300">
              {site.author.bio}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
              <Link href="/about" className="text-sky-800 hover:underline dark:text-cyan-300">
                More about me →
              </Link>
              <a
                href={site.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-800 hover:underline dark:text-cyan-300"
              >
                Portfolio <ExternalIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </section>

          <section aria-labelledby="learning-heading">
            <h2 id="learning-heading" className="font-mono text-xs tracking-widest text-slate-400 uppercase dark:text-slate-500">
              Currently studying
            </h2>
            <ul className="mt-3 space-y-2 font-serif text-[16px] text-slate-600 dark:text-slate-300">
              {site.currentlyLearning.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden="true" className="text-cyan-600 dark:text-cyan-400">§</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
