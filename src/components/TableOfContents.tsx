"use client";

import { useEffect, useState } from "react";
import type { TocEntry } from "@/lib/article-utils";

export function TableOfContents({ entries }: { entries: TocEntry[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (entries.length === 0) return;
    const observer = new IntersectionObserver(
      (obsEntries) => {
        for (const e of obsEntries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    const els: Element[] = [];
    for (const entry of entries) {
      const el = document.getElementById(entry.id);
      if (el) {
        observer.observe(el);
        els.push(el);
      }
    }
    return () => {
      for (const el of els) observer.unobserve(el);
      observer.disconnect();
    };
  }, [entries]);

  if (entries.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="font-mono text-xs tracking-widest text-slate-400 uppercase dark:text-slate-500">
        On this page
      </p>
      <ul className="mt-3 space-y-1 border-l border-slate-200 dark:border-white/[0.08]">
        {entries.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              aria-current={active === entry.id ? "true" : undefined}
              className={`-ml-px block border-l-2 py-1 pr-2 transition-colors ${
                entry.depth === 3 ? "pl-6" : "pl-4"
              } ${
                active === entry.id
                  ? "border-[#3b82f6] font-medium text-slate-900 dark:text-white"
                  : "border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
