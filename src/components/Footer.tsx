import Link from "next/link";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-paper">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 p-8 sm:flex-row sm:items-center sm:justify-between md:p-12">
        <p className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase">
          © {new Date().getFullYear()} {site.handle.toUpperCase()}. ALL RIGHTS RESERVED.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase transition-colors hover:text-clinical-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
