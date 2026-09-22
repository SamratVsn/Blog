"use client";

import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <header className="bg-paper">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-8 md:p-12">
        <Link
          href="/"
          className="font-display text-2xl font-black tracking-tighter text-ink"
          aria-label="SamratVsn — index"
        >
          SAMRAT.
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-xs font-bold tracking-widest uppercase transition-colors ${
                isActive(item.href) ? "text-clinical-blue" : "text-ink hover:text-clinical-blue"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          <FontAwesomeIcon icon={faBarsStaggered} className="text-xl" />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-zinc-200 bg-paper px-8 pb-6 md:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`block py-3 text-xs font-bold tracking-widest uppercase ${
                isActive(item.href) ? "text-clinical-blue" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
