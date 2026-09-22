import Link from "next/link";
import type { ArticleMeta } from "@/lib/article-utils";
import { formatDisplayDate } from "@/lib/article-utils";

/** Essay index row: date + bold uppercase title + category chip. */
export function PostCard({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group grid grid-cols-1 gap-2 border-b border-zinc-200 py-7 transition-all duration-300 hover:pl-2 sm:grid-cols-12 sm:items-center sm:gap-6"
    >
      <span className="font-mono text-[11px] tracking-[0.12em] text-zinc-500 uppercase sm:col-span-2">
        {formatDisplayDate(article.date).toUpperCase()}
      </span>
      <span className="sm:col-span-8">
        <span className="block font-display text-xl leading-snug font-black tracking-tight text-ink uppercase transition-colors group-hover:text-clinical-blue sm:text-2xl">
          {article.title}
        </span>
        <span className="mt-2 line-clamp-2 block max-w-2xl text-[14.5px] leading-relaxed font-normal normal-case tracking-normal text-zinc-500">
          {article.description}
        </span>
      </span>
      <span className="sm:col-span-2 sm:text-right">
        <span className="inline-block bg-surface px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-zinc-500 uppercase">
          {article.category ?? "Blog"}
        </span>
      </span>
    </Link>
  );
}
