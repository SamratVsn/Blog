"use client";

import { useState } from "react";

export function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 font-mono text-xs tracking-widest text-slate-400 uppercase dark:text-slate-500">
        Share
      </span>
      <button
        type="button"
        onClick={copyLink}
        className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-[#3b82f6]/50 hover:text-slate-900 dark:border-white/[0.08] dark:text-slate-300 dark:hover:text-white"
        aria-live="polite"
      >
        {copied ? "Copied ✓" : "Copy link"}
      </button>
      <ShareLink
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        label="Share on LinkedIn"
        text="LinkedIn"
      />
      <ShareLink
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        label="Share on X"
        text="X"
      />
    </div>
  );
}

function ShareLink({ href, label, text }: { href: string; label: string; text: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-[#3b82f6]/50 hover:text-slate-900 dark:border-white/[0.08] dark:text-slate-300 dark:hover:text-white"
    >
      {text}
    </a>
  );
}
