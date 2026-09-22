import { site } from "@/lib/site";
import { ExternalIcon, GitHubIcon, LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/60">
      <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8">
        <p className="font-serif text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          {site.name}
        </p>
        <p className="mt-1 font-mono text-xs text-slate-400 dark:text-slate-500">{site.role}</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="me noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            <GitHubIcon className="h-4 w-4" /> GitHub
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="me noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            <LinkedInIcon className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={site.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            Portfolio <ExternalIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href="/feed.xml"
            className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            RSS
          </a>
        </div>
        <p className="mt-6 text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} {site.name} · Engineering with intent.
        </p>
        <p className="mt-2 font-mono text-[11px] text-slate-400/80 dark:text-slate-600">
          Colophon — set in Newsreader, Inter &amp; JetBrains Mono · built with Next.js ·{" "}
          <a href="/feed.xml" className="underline underline-offset-2 hover:text-slate-600 dark:hover:text-slate-400">
            RSS
          </a>
        </p>
      </div>
    </footer>
  );
}
