import type { Metadata } from "next";
import Link from "next/link";
import { getArticlesByTopic } from "@/lib/articles";
import { topics } from "@/lib/site";

export const metadata: Metadata = {
  title: "Topics",
  description: "Browse notes by topic — Android, Kotlin, development, projects, and events.",
  alternates: { canonical: "/topics" },
};

export default function TopicsPage() {
  const countFor = (label: string) => getArticlesByTopic(label).length;

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8">
      <p className="font-mono text-xs tracking-widest text-sky-700 uppercase dark:text-cyan-300/90">
        {"//"} topics
      </p>
      <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50">
        Topics
      </h1>
      <p className="mt-4 font-serif text-lg leading-relaxed text-slate-500 italic dark:text-slate-400">
        The main things I write about. Pick one to see every related note.
      </p>

      <ul className="mt-8 divide-y divide-slate-200/70 dark:divide-slate-800/60">
        {topics.map((topic) => {
          const count = countFor(topic.slug);
          return (
            <li key={topic.slug}>
              <Link href={`/topics/${topic.slug}`} className="group block py-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-serif text-[1.4rem] font-semibold tracking-tight text-slate-900 group-hover:text-sky-800 dark:text-slate-50 dark:group-hover:text-cyan-300">
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
