import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          {`// ${site.handle}'s engineering journal`}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 24, lineHeight: 1.15, fontFamily: "Georgia, 'Times New Roman', serif" }}>
          {site.tagline}
        </div>
        <div style={{ fontSize: 26, color: "#94a3b8", marginTop: 28 }}>{site.description}</div>
      </div>
    ),
    { ...size }
  );
}
