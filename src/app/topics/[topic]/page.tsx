import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleRow } from "@/components/ArticleCard";
import { getArticlesByTopic } from "@/lib/articles";
import { topics } from "@/lib/site";

export function generateStaticParams() {
  return topics.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const entry = topics.find((t) => t.slug === topic);
  if (!entry) return {};
  return {
    title: `${entry.label} articles`,
    description: entry.description,
    alternates: { canonical: `/topics/${entry.slug}` },
  };
}

export default async function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const entry = topics.find((t) => t.slug === topic);
  if (!entry) notFound();

  const articles = getArticlesByTopic(entry.label);

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8">
      <nav aria-label="Breadcrumb" className="font-mono text-xs text-slate-400 dark:text-slate-500">
        <Link href="/topics" className="hover:text-sky-700 hover:underline dark:hover:text-cyan-300">
          topics
        </Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{entry.slug}</span>
      </nav>
      <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50">
        {entry.label}
      </h1>
      <p className="mt-4 font-serif text-lg leading-relaxed text-slate-500 italic dark:text-slate-400">{entry.description}</p>

      <div className="mt-8">
        {articles.length > 0 ? (
          articles.map((a) => <ArticleRow key={a.slug} article={a} />)
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
            <p className="font-medium text-slate-700 dark:text-slate-200">No notes here yet.</p>
            <p className="mt-1 text-sm">
              I haven&apos;t published anything on {entry.label} so far — check back soon, or{" "}
              <Link href="/articles" className="font-medium text-sky-700 hover:underline dark:text-cyan-300">
                browse all articles
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
