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
          background: "#f4f4f4",
          color: "#111111",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, color: "#1e90ff", fontFamily: "monospace", letterSpacing: 4 }}>
          {`// ${site.handle} — BLOGS & ESSAYS`.toUpperCase()}
        </div>
        <div style={{ fontSize: 72, fontWeight: 900, marginTop: 24, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          {site.tagline}
        </div>
        <div style={{ fontSize: 26, color: "#5a5a5a", marginTop: 28 }}>{site.description}</div>
      </div>
    ),
    { ...size }
  );
}
