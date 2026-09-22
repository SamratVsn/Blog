import type { Metadata } from "next";
import { ArticleExplorer, type SearchableArticle } from "@/components/ArticleExplorer";
import { getAllMeta, getAllTags, getArticle } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "All notes on Android development, Kotlin, software architecture, and learning to build — newest first.",
  alternates: { canonical: "/articles" },
};

export default async function ArticlesPage() {
  const metas = getAllMeta();
  const tags = getAllTags().map((t) => t.label);

  const searchable: SearchableArticle[] = await Promise.all(
    metas.map(async (m) => {
      const full = await getArticle(m.slug);
      return { ...m, searchText: full ? full.plainText : "" };
    })
  );

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8">
      <p className="font-mono text-xs tracking-widest text-sky-700 uppercase dark:text-cyan-300/90">
        {"//"} index
      </p>
      <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50">
        Articles
      </h1>
      <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-slate-500 italic dark:text-slate-400">
        Everything I&apos;ve written — Android, Kotlin, architecture, and the process of learning to
        build. Newest first.
      </p>
      <div className="mt-8">
        <ArticleExplorer articles={searchable} allTags={tags} />
      </div>
    </div>
  );
}
