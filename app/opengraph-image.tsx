import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "ShikZya — Smart Education Management for Modern Institutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const chips = ["80+ Modules", "11 Portals", "BS | AD", "Built-in AI"];

  // Logo is colocated with this route so `import.meta.url` resolves it on the
  // edge runtime (where `fs` is unavailable). Satori accepts the raw bytes
  // as an <img> src.
  const logo = await fetch(new URL("./og-logo.png", import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 10,
        color: "#ffffff",
        background:
          "linear-gradient(135deg, #1E3A8A 0%, #2563EB 58%, #3B82F6 100%)",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Decorative translucent shapes (no blur — Satori-safe) */}
      <div
        style={{
          position: "absolute",
          top: -170,
          right: -120,
          width: 520,
          height: 520,
          borderRadius: 9999,
          background: "rgba(249,115,22,0.30)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: -140,
          width: 460,
          height: 460,
          borderRadius: 9999,
          background: "rgba(255,255,255,0.08)",
          display: "flex",
        }}
      />

      {/* Top row: logo card + badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#ffffff",
            borderRadius: 24,
            padding: 18,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo as unknown as string}
            width={128}
            height={128}
            alt="ShikZya"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid rgba(255,255,255,0.35)",
            background: "rgba(255,255,255,0.12)",
            borderRadius: 9999,
            padding: "12px 24px",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          Made for Nepal
        </div>
      </div>

      {/* Headline */}
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 960 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            columnGap: 18,
            rowGap: 4,
            fontSize: 70,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -1.5,
          }}
        >
          <span style={{ color: "#ffffff" }}>Smart</span>
          <span style={{ color: "#ffffff" }}>Education</span>
          <span style={{ color: "#ffffff" }}>Management</span>
          <span style={{ color: "#ffffff" }}>for</span>
          <span style={{ color: "#FDBA74" }}>Modern</span>
          <span style={{ color: "#FDBA74" }}>Institutions</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 30,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          One platform to run your entire school or college — admission to
          marksheet, fees to communication.
        </div>
      </div>

      {/* Bottom: stat chips + url */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 16 }}>
          {chips.map((c) => (
            <div
              key={c}
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid rgba(255,255,255,0.30)",
                background: "rgba(255,255,255,0.12)",
                borderRadius: 9999,
                padding: "12px 22px",
                fontSize: 25,
                fontWeight: 600,
              }}
            >
              {c}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
          shik<span style={{ color: "#FDBA74" }}>zya</span>.com
        </div>
      </div>
    </div>,
    { ...size },
  );
}
