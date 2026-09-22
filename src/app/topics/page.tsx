import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { getArticlesByTopic } from "@/lib/articles";
import { topics } from "@/lib/site";

export const metadata: Metadata = {
  title: "Topics",
  description: "Browse blogs by topic — Android, Kotlin, development, projects, and events.",
  alternates: { canonical: "/topics" },
};

export default function TopicsPage() {
  const countFor = (label: string) => getArticlesByTopic(label).length;

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8">
      <Eyebrow>Browse</Eyebrow>
      <h1 className="mt-4 text-[2.1rem] leading-[1.05] font-bold tracking-[-0.03em] text-slate-900 sm:text-5xl dark:text-white">
        Topics<span className="text-[#3b82f6]">.</span>
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
        The main things I write about. Pick one to see every related blog.
      </p>

      <ul className="mt-8 divide-y divide-slate-200/70 dark:divide-white/[0.05]">
        {topics.map((topic) => {
          const count = countFor(topic.slug);
          return (
            <li key={topic.slug}>
              <Link href={`/topics/${topic.slug}`} className="group block py-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-[1.15rem] font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-[#3b82f6] dark:text-white">
                    {topic.label}
                  </h2>
                  <span className="shrink-0 font-mono text-xs text-slate-400 dark:text-slate-500">
                    {count} article{count === 1 ? "" : "s"}
                  </span>
                </div>
                <p className="mt-1 text-[15px]">{topic.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
