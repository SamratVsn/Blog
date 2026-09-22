import type { Metadata } from "next";
import { ArchiveList, type SearchableArticle } from "@/components/ArchiveList";
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
    <div className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
      <div className="pt-10 sm:pt-14">
        <Eyebrow>Chronology</Eyebrow>
        <h1 className="mt-4 text-6xl font-black tracking-[-0.03em] text-[#111111] sm:text-8xl">
          ARCHIVE.
        </h1>
      </div>
      <div className="mt-10">
        <ArchiveList articles={searchable} categories={categories} />
      </div>
    </div>
  );
}
