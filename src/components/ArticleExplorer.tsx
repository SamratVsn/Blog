"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArticleRow, Tag } from "@/components/ArticleCard";
import type { ArticleMeta } from "@/lib/article-utils";

export type SearchableArticle = ArticleMeta & { searchText: string };

const PAGE_SIZE = 8;

export function ArticleExplorer({
  articles,
  allTags,
}: {
  articles: SearchableArticle[];
  allTags: string[];
}) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      if (activeTag && !a.tags.some((t) => t.toLowerCase() === activeTag.toLowerCase())) return false;
      if (!q) return true;
      const haystack = `${a.title}\n${a.description}\n${a.tags.join(" ")}\n${a.searchText}`.toLowerCase();
      return q.split(/\s+/).every((word) => haystack.includes(word));
    });
  }, [articles, query, activeTag]);

  const shown = results.slice(0, visible);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="article-search" className="sr-only">
          Search articles
        </label>
        <input
          id="article-search"
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setVisible(PAGE_SIZE);
          }}
          placeholder="Search title, tags, or content…"
          autoComplete="off"
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none dark:border-slate-700/70 dark:bg-panel dark:text-slate-100 dark:placeholder:text-slate-500"
        />
      </div>

      {allTags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5" role="group" aria-label="Filter by tag">
          {activeTag && (
            <button
              type="button"
              onClick={() => {
                setActiveTag(null);
                setVisible(PAGE_SIZE);
              }}
              className="inline-flex items-center rounded-md border border-cyan-500 bg-cyan-50 px-2 py-0.5 font-mono text-[11px] text-sky-800 dark:bg-cyan-400/10 dark:text-cyan-300"
            >
              ✕ {activeTag}
            </button>
          )}
          {!activeTag &&
            allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setActiveTag(tag);
                  setVisible(PAGE_SIZE);
                }}
                aria-pressed="false"
              >
                <Tag label={tag} />
              </button>
            ))}
        </div>
      )}

      <p className="mt-6 font-mono text-xs text-slate-400 dark:text-slate-500" role="status" aria-live="polite">
        {results.length === 0
          ? "No articles found."
          : `Showing ${shown.length} of ${results.length} article${results.length === 1 ? "" : "s"} · newest first`}
      </p>

      {shown.length > 0 ? (
        <div className="mt-2">
          {shown.map((a) => {
            const year = a.date.slice(0, 4);
            const showYear =
              shown.indexOf(a) === 0 || shown[shown.indexOf(a) - 1].date.slice(0, 4) !== year;
            return (
              <div key={a.slug}>
                {showYear && (
                  <p className="mt-8 mb-1 font-mono text-xs tracking-widest text-slate-400 first:mt-2 dark:text-slate-500">
                    {year}
                  </p>
                )}
                <ArticleRow article={a} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
          <p className="font-medium text-slate-700 dark:text-slate-200">Nothing matched that search.</p>
          <p className="mt-1 text-sm">Try a different keyword, or browse everything.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveTag(null);
              setVisible(PAGE_SIZE);
            }}
            className="mt-4 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium transition-colors hover:border-cyan-400 dark:border-slate-700/70"
          >
            Clear search
          </button>
        </div>
      )}

      {visible < results.length && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium transition-colors hover:border-cyan-400 dark:border-slate-700/70"
          >
            Load more ({results.length - visible} remaining)
          </button>
        </div>
      )}

      <p className="mt-10 border-t border-slate-200/70 pt-6 text-sm dark:border-slate-800/60">
        Looking for something specific?{" "}
        <Link href="/topics" className="font-medium text-sky-700 hover:underline dark:text-cyan-300">
          Browse by topic →
        </Link>
      </p>
    </div>
  );
}
