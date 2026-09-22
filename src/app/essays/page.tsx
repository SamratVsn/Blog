import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { PostCard } from "@/components/PostCard";
import { getAllMeta } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Essays",
  description:
    "All blogs on Android development, Kotlin, software architecture, and learning to build — newest first.",
  alternates: { canonical: "/essays" },
};

export default function EssaysPage() {
  const articles = getAllMeta();

  return (
    <div className="mx-auto w-full max-w-7xl p-8 md:p-12">
      <Eyebrow>Index of writing</Eyebrow>
      <h1 className="mt-4 font-display text-5xl font-black tracking-tight text-ink sm:text-7xl">
        ESSAYS.
      </h1>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-500">
        Every blog I&apos;ve written — Android, Kotlin, architecture, and the process of learning
        to build. Newest first.
      </p>

      <div className="mt-10 border-t border-zinc-200">
        {articles.map((a) => (
          <PostCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
