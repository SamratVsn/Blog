import Link from "next/link";
import type { ArticleMeta } from "@/lib/article-utils";
import { formatDisplayDate } from "@/lib/article-utils";

export function Tag({ label, href }: { label: string; href?: string }) {
  const cls =
    "inline-flex items-center rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[10px] tracking-wider text-slate-500 uppercase transition-colors hover:border-[#3b82f6]/40 hover:text-[#3b82f6] dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-slate-500 dark:hover:border-[#3b82f6]/40 dark:hover:text-[#3b82f6]";
  if (href) {
    return (
      <Link href={href} className={cls}>
        {label}
      </Link>
    );
  }
  return <span className={cls}>{label}</span>;
}

export function ArticleMetaLine({ article }: { article: ArticleMeta }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px]">
      {article.category && (
        <>
          <span className="font-semibold text-[#3b82f6]/90">{article.category}</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
        </>
      )}
      <time dateTime={article.date} className="text-slate-400 dark:text-slate-500">
        {formatDisplayDate(article.date)}
      </time>
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
      <span className="text-slate-400 dark:text-slate-500">{article.readingTime}</span>
    </p>
  );
}

export function ArticleRow({ article }: { article: ArticleMeta }) {
  return (
    <article className="group border-b border-slate-200/70 py-6 first:pt-0 last:border-b-0 dark:border-white/[0.05]">
      <Link href={`/articles/${article.slug}`} className="block">
        <ArticleMetaLine article={article} />
        <h3 className="mt-2 text-[17px] leading-snug font-semibold text-slate-900 transition-colors group-hover:text-[#3b82f6] dark:text-white dark:group-hover:text-[#3b82f6]">
          {article.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 max-w-2xl text-[13.5px] leading-relaxed text-slate-500">
          {article.description}
        </p>
        {article.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {article.tags.slice(0, 4).map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}
