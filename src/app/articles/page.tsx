import type { Metadata } from "next";
import { ArticleExplorer, type SearchableArticle } from "@/components/ArticleExplorer";
import { Eyebrow } from "@/components/Eyebrow";
import { getAllMeta, getAllTags, getArticle } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "All blogs on Android development, Kotlin, software architecture, and learning to build — newest first.",
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
      <Eyebrow>Index</Eyebrow>
      <h1 className="mt-4 text-[2.1rem] leading-[1.05] font-bold tracking-[-0.03em] text-slate-900 sm:text-5xl dark:text-white">
        Articles<span className="text-[#3b82f6]">.</span>
      </h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
        Everything I&apos;ve written — Android, Kotlin, architecture, and the process of learning to
        build. Newest first.
      </p>
      <div className="mt-8">
        <ArticleExplorer articles={searchable} allTags={tags} />
      </div>
    </div>
  );
}
