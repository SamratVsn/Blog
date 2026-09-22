import Link from "next/link";
import { ArticleMetaLine, ArticleRow, Tag } from "@/components/ArticleCard";
import { Eyebrow } from "@/components/Eyebrow";
import { ExternalIcon } from "@/components/icons";
import { getAllMeta, getAllTags } from "@/lib/articles";
import { site, topics } from "@/lib/site";

export default function HomePage() {
  const articles = getAllMeta();
  const [featured, ...rest] = articles;
  const latest = rest.slice(0, 5);
  const tags = getAllTags().slice(0, 10);

  return (
    <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
      {/* Hero */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 dark:block"
          style={{
            background:
              "radial-gradient(55% 45% at 12% 20%, rgba(59,130,246,0.07) 0%, rgba(59,130,246,0) 60%), radial-gradient(45% 40% at 92% 78%, rgba(34,211,238,0.05) 0%, rgba(34,211,238,0) 60%)",
          }}
        />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/15 bg-[#3b82f6]/[0.06] px-3 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#3b82f6] motion-reduce:animate-none" />
            <span className="text-[11px] font-semibold tracking-wide text-[#3b82f6]">
              Writing in public
            </span>
          </div>
          <h1 className="mt-5 max-w-2xl text-[2.1rem] leading-[1.06] font-bold tracking-[-0.02em] text-balance text-slate-900 sm:text-5xl dark:text-white">
            {site.tagline}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base dark:text-slate-400">
            {site.description}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 rounded-lg bg-[#3b82f6] px-6 py-2.5 text-sm font-bold text-[#020617] transition-all hover:bg-[#3b82f6]/90 active:scale-[0.97]"
            >
              Browse blogs
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-6 py-2.5 text-sm font-medium text-slate-500 transition-all hover:border-slate-300 hover:text-slate-900 dark:border-slate-800/60 dark:hover:border-slate-700 dark:hover:bg-white/[0.03] dark:hover:text-white"
            >
              About me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section aria-labelledby="featured-heading" className="pb-4">
          <Link
            href={`/articles/${featured.slug}`}
            className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-[#3b82f6]/30 dark:border-white/[0.05] dark:bg-panel/60 dark:hover:border-[#3b82f6]/20"
          >
            <div className="flex flex-col md:flex-row">
              {featured.image && (
                <div className="relative h-52 shrink-0 overflow-hidden bg-slate-100 sm:h-64 md:h-auto md:w-1/2 dark:bg-slate-800/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-[10px] font-bold tracking-[0.1em] text-[#3b82f6]/80 uppercase">
                      Featured
                    </span>
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
                      {featured.category}
                    </span>
                  </div>
                  <h2 id="featured-heading" className="text-lg leading-snug font-semibold text-slate-900 transition-colors group-hover:text-[#3b82f6] sm:text-xl dark:text-white dark:group-hover:text-[#3b82f6]">
                    {featured.title}
                  </h2>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {featured.description}
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-slate-200/70 pt-4 dark:border-white/[0.04]">
                  <ArticleMetaLine article={featured} />
                  <span className="ml-4 inline-flex shrink-0 items-center gap-1.5 text-[13px] text-slate-500 transition-colors group-hover:text-[#3b82f6]">
                    Read <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      <div className="grid gap-12 py-10 lg:grid-cols-[1fr_280px]">
        <section aria-labelledby="latest-heading">
          <div className="mb-6">
            <Eyebrow>Latest</Eyebrow>
            <div className="mt-3 flex items-baseline justify-between gap-4">
              <h2 id="latest-heading" className="text-[1.6rem] font-bold tracking-[-0.02em] text-slate-900 dark:text-white">
                More blogs
              </h2>
              <Link href="/articles" className="shrink-0 text-sm font-medium text-slate-500 transition-colors hover:text-[#3b82f6]">
                All blogs →
              </Link>
            </div>
          </div>
          {latest.length > 0 ? (
            <div>
              {latest.map((a) => (
                <ArticleRow key={a.slug} article={a} />
              ))}
            </div>
          ) : (
            <p className="py-6 text-sm text-slate-500">More blogs are on the way.</p>
          )}
        </section>

        <aside className="space-y-8">
          <section aria-labelledby="topics-heading" className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 dark:border-white/[0.05] dark:bg-panel/60">
            <h2 id="topics-heading" className="text-sm font-semibold text-slate-900 dark:text-white">
              Topics
            </h2>
            <ul className="mt-4 space-y-2.5">
              {topics.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/topics/${t.slug}`}
                    className="group flex items-center justify-between text-[13.5px] text-slate-500 transition-colors hover:text-[#3b82f6] dark:text-slate-400"
                  >
                    <span>{t.label}</span>
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            {tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-200/70 pt-4 dark:border-white/[0.05]">
                {tags.map((t) => (
                  <Tag key={t.label} label={t.label} />
                ))}
              </div>
            )}
          </section>

          <section aria-labelledby="about-heading" className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 dark:border-white/[0.05] dark:bg-panel/60">
            <h2 id="about-heading" className="text-sm font-semibold text-slate-900 dark:text-white">
              About
            </h2>
            <p className="mt-3 text-[13.5px] leading-relaxed text-slate-500 dark:text-slate-400">
              {site.author.bio}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-medium">
              <Link href="/about" className="text-slate-500 transition-colors hover:text-[#3b82f6]">
                More about me →
              </Link>
              <a
                href={site.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-500 transition-colors hover:text-[#3b82f6]"
              >
                Portfolio <ExternalIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </section>

          <section aria-labelledby="learning-heading" className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 dark:border-white/[0.05] dark:bg-panel/60">
            <h2 id="learning-heading" className="text-sm font-semibold text-slate-900 dark:text-white">
              Currently learning
            </h2>
            <ul className="mt-3 space-y-2.5 text-[13.5px]">
              {site.currentlyLearning.map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b82f6]" />
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
