"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";
import { ArchiveRow } from "@/components/ArchiveRow";
import { FilterChip } from "@/components/FilterChip";
import type { ArticleMeta } from "@/lib/article-utils";

export type SearchableArticle = ArticleMeta & { searchText: string };

export function ArchiveBrowser({
  articles,
  categories,
}: {
  articles: SearchableArticle[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      if (activeCategory !== "All" && a.category !== activeCategory) return false;
      if (!q) return true;
      const haystack =
        `${a.title}\n${a.description}\n${a.tags.join(" ")}\n${a.searchText}`.toLowerCase();
      return q.split(/\s+/).every((word) => haystack.includes(word));
    });
  }, [articles, query, activeCategory]);

  const years = useMemo(() => {
    const groups = new Map<string, SearchableArticle[]>();
    for (const a of results) {
      const year = a.date.slice(0, 4);
      const list = groups.get(year) ?? [];
      list.push(a);
      groups.set(year, list);
    }
    return [...groups.entries()].sort((x, y) => (x[0] < y[0] ? 1 : -1));
  }, [results]);

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by category">
        <FilterChip label="All Entries" active={activeCategory === "All"} onClick={() => setActiveCategory("All")} />
        {categories.map((c) => (
          <FilterChip key={c} label={c} active={activeCategory === c} onClick={() => setActiveCategory(c)} />
        ))}
      </div>

      <div className="mt-10 border-b-4 border-ink" aria-hidden="true" />

      <div role="status" aria-live="polite" className="sr-only">
        {results.length} {results.length === 1 ? "entry" : "entries"} found.
      </div>

      {years.length === 0 && (
        <div className="border-b border-zinc-200 py-14 text-center">
          <p className="font-display text-xl font-black tracking-tight text-ink">Nothing in the archive matches.</p>
          <p className="mt-2 text-[15px] text-zinc-500">Try a different keyword or category.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveCategory("All");
            }}
            className="mt-5 border border-ink bg-white px-5 py-2.5 font-mono text-[11px] tracking-[0.14em] text-ink uppercase transition-colors hover:bg-ink hover:text-white"
          >
            Clear search
          </button>
        </div>
      )}

      {years.map(([year, list]) => (
        <section key={year} aria-label={`Entries from ${year}`}>
          <div className="flex items-center gap-6 pt-12 pb-2">
            <h2 className="font-display text-4xl font-black tracking-tight text-zinc-200">{year}</h2>
            <div className="h-px flex-1 bg-zinc-200" aria-hidden="true" />
          </div>
          <div>
            {list.map((a) => (
              <ArchiveRow key={a.slug} article={a} />
            ))}
          </div>
        </section>
      ))}

      <div className="mt-14 bg-zinc-100 px-6 py-12 text-center sm:py-14">
        <p className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
          Looking for something specific?
        </p>
        <div className="relative mx-auto mt-6 max-w-md">
          <label htmlFor="archive-search" className="sr-only">
            Search the archives
          </label>
          <input
            id="archive-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH THE ARCHIVES..."
            autoComplete="off"
            className="w-full border border-zinc-300 bg-white py-3.5 pr-12 pl-5 font-mono text-xs tracking-[0.12em] text-ink placeholder:text-zinc-400 focus:border-clinical-blue focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-zinc-400"
          />
        </div>
      </div>
    </div>
  );
}
