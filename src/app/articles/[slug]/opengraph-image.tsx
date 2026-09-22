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
    ? `${article.category ?? "Note"} · ${article.readingTime}`
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
          background: "#0a1122",
          color: "#f1f5f9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#67e8f9", fontFamily: "monospace" }}>
          {`// ${site.handle} · ${subtitle}`}
        </div>
        <div style={{ fontSize: 60, fontWeight: 700, marginTop: 24, lineHeight: 1.2, fontFamily: "Georgia, 'Times New Roman', serif" }}>{title}</div>
        <div style={{ fontSize: 26, color: "#94a3b8", marginTop: 28 }}>{site.url}</div>
      </div>
    ),
    { ...size }
  );
}
