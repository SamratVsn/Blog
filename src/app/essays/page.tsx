import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { formatDisplayDate, getAllMeta } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Essays",
  description:
    "All blogs on Android development, Kotlin, software architecture, and learning to build — newest first.",
  alternates: { canonical: "/essays" },
};

export default function EssaysPage() {
  const articles = getAllMeta();

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
      <div className="pt-10 sm:pt-14">
        <Eyebrow>Index of writing</Eyebrow>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.03em] text-[#111111] sm:text-7xl">
          ESSAYS.
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#5a5a5a]">
          Every blog I&apos;ve written — Android, Kotlin, architecture, and the process of
          learning to build. Newest first.
        </p>
      </div>

      <div className="mt-12 border-t border-[#dcdcdc]">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/essays/${a.slug}`}
            className="group grid grid-cols-1 gap-2 border-b border-[#e4e4e4] py-7 sm:grid-cols-12 sm:gap-6 sm:py-8"
          >
            <p className="font-mono text-[11px] tracking-[0.14em] text-[#9a9a9a] uppercase sm:col-span-2 sm:pt-1.5">
              {formatDisplayDate(a.date).toUpperCase()}
            </p>
            <div className="sm:col-span-7">
              <h2 className="text-xl leading-snug font-black tracking-[-0.01em] text-[#111111] transition-colors group-hover:text-[#1e90ff] sm:text-2xl">
                {a.title}
              </h2>
              <p className="mt-2 line-clamp-2 max-w-2xl text-[14.5px] leading-relaxed text-[#5a5a5a]">
                {a.description}
              </p>
            </div>
            <div className="flex items-center gap-3 sm:col-span-3 sm:justify-end">
              <span className="bg-[#ececec] px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] text-[#6e6e6e] uppercase">
                {a.category ?? "Blog"}
              </span>
              <span className="font-mono text-[11px] tracking-[0.1em] text-[#9a9a9a] uppercase">
                {a.readingTime.replace("min read", "MIN READ").toUpperCase()}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
