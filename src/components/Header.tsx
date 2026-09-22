"use client";

import { Zilla_Slab } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

const zilla = Zilla_Slab({ subsets: ["latin"], weight: "700", display: "swap" });

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-[#0a1122]">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2" aria-label="SamratVsn — home">
          <span className={`${zilla.className} text-[21px] leading-none text-slate-900 dark:text-white`}>
            SamratVsn
          </span>
          <span className="hidden font-mono text-[11px] text-slate-400 sm:inline dark:text-slate-500">
            ~/blogs
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-sm transition-colors ${
                isActive(item.href)
                  ? "font-semibold text-slate-900 dark:text-white"
                  : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <span aria-hidden="true" className="h-4 w-px bg-slate-200 dark:bg-slate-700/70" />
          <span className="flex items-center gap-5">
            <a
              href={site.githubUrl}
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="GitHub profile"
              className="text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <GitHubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </a>
            <ThemeToggle />
          </span>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 dark:border-slate-700/70 dark:text-slate-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-slate-200/80 bg-white px-5 pb-5 pt-2 md:hidden dark:border-slate-800/60 dark:bg-[#0a1122]"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`block rounded-lg px-3 py-2.5 text-[15px] ${
                isActive(item.href)
                  ? "bg-slate-100 font-semibold text-slate-900 dark:bg-white/[0.05] dark:text-white"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-2 border-t border-slate-200/70 px-3 pt-4 dark:border-slate-800/60">
            <a
              href={site.githubUrl}
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 dark:border-slate-700/60 dark:text-slate-300"
            >
              <GitHubIcon className="h-4 w-4" /> GitHub
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 dark:border-slate-700/60 dark:text-slate-300"
            >
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
