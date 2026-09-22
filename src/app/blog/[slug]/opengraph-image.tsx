import { ImageResponse } from "next/og";
import { getArticle } from "@/lib/articles";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  const title = article?.title ?? site.tagline;
  const subtitle = article
    ? `${article.category ?? "Blog"} · ${article.readingTime}`
    : site.description;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#F8F9FA",
          color: "#1A1A1A",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, color: "#007AFF", fontFamily: "monospace", letterSpacing: 5 }}>
          {subtitle.toUpperCase()}
        </div>
        <div style={{ fontSize: 64, fontWeight: 900, marginTop: 24, lineHeight: 1.08, letterSpacing: "-0.02em" }}>{title}</div>
        <div style={{ fontSize: 26, color: "#5a5a5a", marginTop: 28 }}>{site.url}</div>
      </div>
    ),
    { ...size }
  );
}
