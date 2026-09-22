import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-20 text-center sm:px-8 sm:py-28">
      <p className="font-mono text-sm text-slate-400 dark:text-slate-500">
        <span className="font-semibold text-[#3b82f6]">404</span> — this route doesn&apos;t exist.
      </p>
      <h1 className="mt-4 font-mono text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        ~/page-not-found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-500">
        The page you&apos;re looking for was moved, renamed, or never existed. The blogs are all
        intact — let&apos;s get you back to them.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-[#3b82f6] px-6 py-2.5 text-sm font-bold text-[#020617] transition-all hover:bg-[#3b82f6]/90 active:scale-[0.97]"
        >
          Home
        </Link>
        <Link
          href="/articles"
          className="inline-flex items-center rounded-lg border border-slate-200 px-6 py-2.5 text-sm font-medium text-slate-500 transition-all hover:border-slate-300 hover:text-slate-900 dark:border-white/[0.08] dark:hover:border-slate-700 dark:hover:text-white"
        >
          All blogs
        </Link>
      </div>
    </div>
  );
}
