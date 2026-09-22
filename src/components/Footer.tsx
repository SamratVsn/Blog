import { site } from "@/lib/site";
import { BrandDot } from "./Eyebrow";
import { ExternalIcon, GitHubIcon, LinkedInIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200/80 bg-white dark:border-white/[0.04] dark:bg-[#020617]">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="py-10">
          <div className="flex items-center gap-2">
            <BrandDot />
            <span className="text-[13px] font-bold tracking-tight text-slate-900 dark:text-white">
              {site.name}
            </span>
          </div>
          <p className="mt-3 max-w-[260px] text-[12px] leading-relaxed text-slate-500">
            Learning in public, one commit at a time.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
            <a
              href={site.githubUrl}
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-[#3b82f6]"
            >
              <GitHubIcon className="h-3.5 w-3.5" /> GitHub
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-[#3b82f6]"
            >
              <LinkedInIcon className="h-3.5 w-3.5" /> LinkedIn
            </a>
            <a
              href={site.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-[#3b82f6]"
            >
              Portfolio <ExternalIcon className="h-3 w-3" />
            </a>
            <a
              href="/feed.xml"
              className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-[#3b82f6]"
            >
              RSS
            </a>
          </div>
        </div>
        <div className="border-t border-slate-200/70 py-4 text-center dark:border-white/[0.04]">
          <p className="text-[11px] text-slate-400 dark:text-slate-600">
            © {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
