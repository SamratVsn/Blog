"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SearchIcon } from "@/components/icons";
import type { ArticleMeta } from "@/lib/article-utils";
import { formatDisplayDate } from "@/lib/article-utils";

export type SearchableArticle = ArticleMeta & { searchText: string };

function stamp(date: string) {
  const d = new Date(`${date}T00:00:00`);
  const month = d.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  return `${month} ${String(d.getDate()).padStart(2, "0")}`;
}

export function ArchiveList({
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

  const tab = (label: string, active: boolean, onClick: () => void) => (
    <button
      key={label}
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`border px-4 py-2 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors ${
        active
          ? "border-[#111111] bg-[#111111] font-bold text-white"
          : "border-[#dcdcdc] bg-white text-[#5a5a5a] hover:border-[#111111] hover:text-[#111111]"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by category">
        {tab("All Entries", activeCategory === "All", () => setActiveCategory("All"))}
        {categories.map((c) => tab(c, activeCategory === c, () => setActiveCategory(c)))}
      </div>

      <div className="mt-10 border-t-[3px] border-[#111111]" aria-hidden="true" />

      <div role="status" aria-live="polite" className="sr-only">
        {results.length} {results.length === 1 ? "entry" : "entries"} found.
      </div>

      {years.length === 0 && (
        <div className="border-b border-[#e4e4e4] py-14 text-center">
          <p className="text-lg font-black tracking-tight text-[#111111]">Nothing in the archive matches.</p>
          <p className="mt-2 text-sm text-[#5a5a5a]">Try a different keyword or category.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveCategory("All");
            }}
            className="mt-5 border border-[#111111] px-5 py-2.5 font-mono text-[11px] tracking-[0.14em] text-[#111111] uppercase transition-colors hover:bg-[#111111] hover:text-white"
          >
            Clear search
          </button>
        </div>
      )}

      {years.map(([year, list]) => (
        <section key={year} aria-label={`Entries from ${year}`}>
          <div className="flex items-center gap-6 pt-12 pb-2">
            <h2 className="text-[26px] font-black tracking-tight text-[#d4d4d4]">{year}</h2>
            <div className="h-px flex-1 bg-[#e9e9e9]" aria-hidden="true" />
          </div>
          <ul>
            {list.map((a) => (
              <li key={a.slug} className="border-b border-[#e9e9e9]">
                <Link
                  href={`/essays/${a.slug}`}
                  className="group grid grid-cols-1 gap-1.5 py-6 sm:grid-cols-12 sm:items-center sm:gap-6 sm:py-7"
                >
                  <span className="font-mono text-[11px] tracking-[0.12em] text-[#9a9a9a] sm:col-span-2">
                    {stamp(a.date)}
                  </span>
                  <span className="text-xl leading-snug font-black tracking-[-0.01em] text-[#111111] uppercase transition-colors group-hover:text-[#1e90ff] sm:col-span-8 sm:text-[22px]">
                    {a.title}
                  </span>
                  <span className="sm:col-span-2 sm:text-right">
                    <span className="inline-block bg-[#f0f0f0] px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-[#8a8a8a] uppercase">
                      {a.category ?? "Blog"}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <div className="mt-14 bg-[#ececec] px-6 py-12 text-center sm:py-14">
        <p className="font-mono text-[12px] tracking-[0.3em] text-[#5a5a5a] uppercase">
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
            className="w-full border border-[#dcdcdc] bg-white py-3.5 pr-12 pl-5 font-mono text-[12px] tracking-[0.12em] text-[#111111] placeholder:text-[#9a9a9a] focus:border-[#1e90ff] focus:outline-none"
          />
          <SearchIcon className="pointer-events-none absolute top-1/2 right-4 h-[18px] w-[18px] -translate-y-1/2 text-[#9a9a9a]" />
        </div>
      </div>
    </div>
  );
}
