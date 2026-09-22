"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="bg-[#f4f4f4]">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-[19px] font-black tracking-tight text-[#111111]" aria-label="SamratVsn — index">
          SAMRAT.
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`font-mono text-[11px] font-semibold tracking-[0.18em] transition-colors ${
                isActive(item.href) ? "text-[#1e90ff]" : "text-[#2b2b2b] hover:text-black"
              }`}
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center text-[#111111] md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h20M4 12h20M4 17h20" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-[#e4e4e4] bg-[#f4f4f4] px-5 py-4 md:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`block py-3 font-mono text-xs font-semibold tracking-[0.18em] ${
                isActive(item.href) ? "text-[#1e90ff]" : "text-[#2b2b2b]"
              }`}
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
