import Link from "next/link";
import type { ArticleMeta } from "@/lib/article-utils";
import { formatDisplayDate } from "@/lib/article-utils";

export function Tag({ label, href }: { label: string; href?: string }) {
  const cls =
    "inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] tracking-wide text-slate-500 transition-colors hover:border-cyan-400 hover:text-sky-700 dark:border-slate-700/60 dark:bg-slate-800/40 dark:text-slate-400 dark:hover:border-cyan-400/50 dark:hover:text-cyan-300";
  if (href) {
    return (
      <Link href={href} className={cls}>
        {label}
      </Link>
    );
  }
  return <span className={cls}>{label}</span>;
}

export function ArticleMetaLine({ article, light = false }: { article: ArticleMeta; light?: boolean }) {
  return (
    <p className={`flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs ${light ? "text-slate-400" : "text-slate-400 dark:text-slate-500"}`}>
      <time dateTime={article.date}>{formatDisplayDate(article.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{article.readingTime}</span>
      {article.category && (
        <>
          <span aria-hidden="true">·</span>
          <span className="text-sky-700 dark:text-cyan-300">{article.category}</span>
        </>
      )}
    </p>
  );
}

export function ArticleRow({ article, number }: { article: ArticleMeta; number?: number }) {
  return (
    <article className="group flex gap-5 border-b border-slate-200/70 py-7 first:pt-0 last:border-b-0 sm:gap-7 dark:border-slate-800/60">
      {typeof number === "number" && (
        <span
          aria-hidden="true"
          className="mt-1 w-8 shrink-0 font-mono text-sm text-slate-300 tabular-nums select-none dark:text-slate-600"
        >
          {String(number).padStart(2, "0")}
        </span>
      )}
      <div className="min-w-0">
      <Link href={`/articles/${article.slug}`} className="block">
        <h3 className="font-serif text-[1.45rem] leading-snug font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-sky-800 dark:text-slate-50 dark:group-hover:text-cyan-300">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 max-w-2xl text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
          {article.description}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <ArticleMetaLine article={article} />
        </div>
        {article.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {article.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        )}
      </Link>
      </div>
    </article>
  );
}
