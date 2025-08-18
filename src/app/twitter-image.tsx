import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export default function TwitterImage() {
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
          alignItems: "center",
          padding: 56,
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #0e0e0e 55%, #0a0a0a 100%)",
          color: "#fff",
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        {/* corner glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(800px circle at 85% 85%, rgba(56,189,248,0.18), transparent 60%)",
          }}
        />

        {/* inner panel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            padding: 44,
            borderRadius: 28,
            border: "1px solid rgba(255,255,255,0.16)",
            background: "rgba(255,255,255,0.06)",
            maxWidth: 980,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              opacity: 0.95,
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 999,
                background: "#fff",
              }}
            />
            <div style={{ fontSize: 24 }}>{site.name}</div>
            <div style={{ marginLeft: "auto", fontSize: 20, opacity: 0.8 }}>{host}</div>
          </div>

          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: -1,
              lineHeight: 1.06,
            }}
          >
            {site.title}
          </div>

          <div style={{ fontSize: 26, opacity: 0.92 }}>{site.description}</div>
        </div>
      </div>
    ),
    size
  );
}
