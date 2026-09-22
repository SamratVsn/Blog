import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-20 text-center sm:px-8 sm:py-28">
      <p className="font-mono text-sm text-slate-400 dark:text-slate-500">
        <span className="text-sky-700 dark:text-cyan-300">404</span> — this route doesn&apos;t exist.
      </p>
      <h1 className="mt-4 font-mono text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
        ~/page-not-found
      </h1>
      <p className="mx-auto mt-4 max-w-md leading-relaxed">
        The page you&apos;re looking for was moved, renamed, or never existed. The notes are all
        intact — let&apos;s get you back to them.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-800 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
        >
          Home
        </Link>
        <Link
          href="/articles"
          className="inline-flex items-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-cyan-400 hover:text-slate-900 dark:border-slate-700/70 dark:text-slate-300 dark:hover:border-cyan-400/60 dark:hover:text-white"
        >
          All articles
        </Link>
      </div>
    </div>
  );
}
