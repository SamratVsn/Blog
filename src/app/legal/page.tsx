import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal",
  description: "Copyright and content ownership for SamratVsn's blogs and essays.",
  alternates: { canonical: "/legal" },
};

export default function LegalPage() {
  return (
    <div className="mx-auto w-full max-w-7xl p-8 md:p-12">
      <div className="max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 font-display text-5xl font-black tracking-tight text-ink md:text-7xl">
          LEGAL.
        </h1>
        <div className="article-body mt-10">
          <h2>Copyright</h2>
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved. The words on this site
            are mine unless stated otherwise.
          </p>
          <h2>Cross-posts</h2>
          <p>
            Some essays here were originally published on Medium. Those versions remain on Medium,
            and each essay links to its original. Search engines are pointed at the original via
            canonical URLs.
          </p>
          <h2>Images</h2>
          <p>
            Cover images are my own post artwork. In-article photo credits appear beneath the
            photos and belong to their respective photographers.
          </p>
          <h2>Code</h2>
          <p>
            Code snippets shown in essays are free to use and adapt for learning and building.
          </p>
        </div>
      </div>
    </div>
  );
}
