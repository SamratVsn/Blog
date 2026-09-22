import type { Metadata } from "next";
import { ArchiveBrowser, type SearchableArticle } from "@/components/ArchiveBrowser";
import { Eyebrow } from "@/components/Eyebrow";
import { getAllMeta, getArticle, getCategories } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Archive",
  description: "Every blog, in chronological order. Filter by category or search the archives.",
  alternates: { canonical: "/archive" },
};

export default async function ArchivePage() {
  const metas = getAllMeta();
  const categories = getCategories();
  const searchable: SearchableArticle[] = await Promise.all(
    metas.map(async (m) => {
      const full = await getArticle(m.slug);
      return { ...m, searchText: full ? full.plainText : "" };
    })
  );

  return (
    <div className="mx-auto w-full max-w-7xl p-8 md:p-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Eyebrow>Chronology</Eyebrow>
          <h1 className="mt-4 font-display text-6xl font-black tracking-tight text-ink md:text-8xl">
            ARCHIVE.
          </h1>
        </div>
      </div>
      <div className="mt-8">
        <ArchiveBrowser articles={searchable} categories={categories} />
      </div>
    </div>
  );
}
