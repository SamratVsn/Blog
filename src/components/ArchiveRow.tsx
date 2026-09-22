import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import type { ArticleMeta } from "@/lib/article-utils";

function stamp(date: string) {
  const d = new Date(`${date}T00:00:00`);
  const month = d.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  return `${month} ${String(d.getDate()).padStart(2, "0")}`;
}

/** Full-width chronological archive row with hover shift + arrow reveal. */
export function ArchiveRow({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group grid grid-cols-1 gap-1.5 border-b border-zinc-200 py-6 transition-all duration-300 hover:border-ink hover:pl-2 sm:grid-cols-12 sm:items-center sm:gap-6"
    >
      <span className="font-mono text-[11px] tracking-[0.12em] text-zinc-500 uppercase sm:col-span-2">
        {stamp(article.date)}
      </span>
      <span className="font-display text-xl leading-snug font-black tracking-tight text-ink uppercase transition-colors group-hover:text-clinical-blue sm:col-span-8 sm:text-2xl">
        {article.title}
      </span>
      <span className="flex items-center gap-3 sm:col-span-2 sm:justify-end">
        <span className="inline-block bg-zinc-100 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-zinc-500 uppercase">
          {article.category ?? "Blog"}
        </span>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-sm text-clinical-blue opacity-0 transition-opacity group-hover:opacity-100"
        />
      </span>
    </Link>
  );
}
