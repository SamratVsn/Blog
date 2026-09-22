import Link from "next/link";
import { ArticleMetaLine } from "./ArticleCard";
import type { ArticleMeta } from "@/lib/article-utils";

export function RelatedArticles({ articles }: { articles: ArticleMeta[] }) {
  if (articles.length === 0) return null;
  return (
    <section aria-labelledby="continue-reading" className="mt-14 border-t border-slate-200/70 pt-8 dark:border-slate-800/60">
      <h2 id="continue-reading" className="text-[1.4rem] font-bold tracking-[-0.02em] text-slate-900 dark:text-white">
        Continue reading
      </h2>
      <ul className="mt-5 space-y-5">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link href={`/articles/${a.slug}`} className="group block">
              <p className="text-[15px] font-medium text-slate-800 group-hover:text-[#3b82f6] dark:text-slate-200">
                {a.title}
              </p>
              <div className="mt-1">
                <ArticleMetaLine article={a} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
