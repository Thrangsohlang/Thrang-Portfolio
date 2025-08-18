import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export default function OpengraphImage() {
  const host = (() => {
    try {
      return new URL(site.url).host;
    } catch {
      return "localhost:3000";
    }
  })();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 56,
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #0e0e0e 55%, #0a0a0a 100%)",
          color: "#fff",
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        {/* soft glows */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(800px circle at 20% 15%, rgba(124,58,237,0.25), transparent 60%), radial-gradient(900px circle at 85% 85%, rgba(56,189,248,0.18), transparent 60%)",
          }}
        />

        {/* brand row */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#fff",
              marginRight: 8,
            }}
          />
          <div style={{ fontSize: 24, opacity: 0.9 }}>{site.name}</div>
        </div>

        {/* title + description */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 1000 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: -1,
              lineHeight: 1.06,
            }}
          >
            {site.title}
          </div>
          <div style={{ fontSize: 28, opacity: 0.92 }}>{site.description}</div>
        </div>

        {/* host */}
        <div style={{ fontSize: 22, opacity: 0.85 }}>{host}</div>
      </div>
    ),
    size
  );
}
