import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#e2e2e2] bg-[#f4f4f4]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-[10px] tracking-[0.22em] text-[#9a9a9a]">
          © {new Date().getFullYear()} {site.handle.toUpperCase()}. ALL RIGHTS RESERVED.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[10px] tracking-[0.22em] text-[#9a9a9a] transition-colors hover:text-[#111111]"
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
