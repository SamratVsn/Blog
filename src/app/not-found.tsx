import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for was moved, renamed, or never existed.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-2xl p-8 py-20 text-center md:p-12 sm:py-28">
      <p className="font-display text-xs font-bold tracking-[0.3em] text-clinical-blue uppercase">
        Error 404
      </p>
      <h1 className="mt-4 font-mono text-3xl font-bold tracking-tight text-ink">
        ~/page-not-found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-zinc-500">
        The page you&apos;re looking for was moved, renamed, or never existed. The blogs are all
        intact — let&apos;s get you back to them.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="bg-ink px-6 py-2.5 font-display text-[13px] font-bold tracking-[0.18em] text-white uppercase transition-colors hover:bg-clinical-blue"
        >
          Index
        </Link>
        <Link
          href="/essays"
          className="border border-zinc-300 bg-white px-6 py-2.5 font-display text-[13px] font-bold tracking-[0.18em] text-ink uppercase transition-colors hover:border-ink"
        >
          All essays
        </Link>
      </div>
    </div>
  );
}
