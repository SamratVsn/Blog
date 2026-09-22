import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { site } from "@/lib/site";
import { ExternalIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Samrat Parajuli (SamratVsn) — a student and Android developer from Nepal building native apps with Kotlin and Jetpack Compose.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-12 sm:px-8">
      <Eyebrow>About</Eyebrow>
      <h1 className="mt-4 text-[2.1rem] leading-[1.05] font-bold tracking-[-0.03em] text-slate-900 sm:text-5xl dark:text-white">
        I&apos;m Samrat.
      </h1>

      <div className="article-body mt-8">
        <p>
          I&apos;m a student and self-taught Android app developer from Nepal. My primary focus
          is <strong>native Android development with Kotlin and Jetpack Compose</strong> — the
          stack I build with every day and the main subject of this journal.
        </p>
        <p>
          I&apos;m interested in software architecture, developer tools, and the craft of
          learning itself. I keep my work open-source oriented on{" "}
          <a href={site.githubUrl} target="_blank" rel="me noopener noreferrer">
            GitHub
          </a>
          , and I write here to document what I learn, build, break, and understand.
        </p>
        <h2>What I&apos;m doing now</h2>
        <ul>
          {site.currentlyLearning.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Elsewhere</h2>
        <p>
          My portfolio — what I build — lives at{" "}
          <a href={site.portfolioUrl} target="_blank" rel="noopener noreferrer">
            samratparajuli0.com.np
          </a>
          . This blog is the companion: <em>how I think, learn, and build.</em>
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={site.githubUrl}
          target="_blank"
          rel="me noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-[#3b82f6]/50 hover:text-slate-900 dark:border-white/[0.08] dark:text-slate-300 dark:hover:border-[#3b82f6]/40 dark:hover:text-white"
        >
          <GitHubIcon className="h-4 w-4" /> GitHub
        </a>
        <a
          href={site.linkedinUrl}
          target="_blank"
          rel="me noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-[#3b82f6]/50 hover:text-slate-900 dark:border-white/[0.08] dark:text-slate-300 dark:hover:border-[#3b82f6]/40 dark:hover:text-white"
        >
          <LinkedInIcon className="h-4 w-4" /> LinkedIn
        </a>
        <a
          href={site.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-[#3b82f6]/50 hover:text-slate-900 dark:border-white/[0.08] dark:text-slate-300 dark:hover:border-[#3b82f6]/40 dark:hover:text-white"
        >
          Portfolio <ExternalIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
