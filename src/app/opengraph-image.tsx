import { ImageResponse } from "next/og";

export const alt = "ein.so - EIN Number for Non-Residents";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #162240 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui",
          padding: 60,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: "#2563EB",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            E
          </div>
          <span style={{ fontSize: 36, fontWeight: 800, color: "white" }}>
            ein<span style={{ color: "#2563EB" }}>.so</span>
          </span>
        </div>

        {/* Main text */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          Get Your EIN Number
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#60A5FA",
            marginTop: 16,
            textAlign: "center",
          }}
        >
          Fastest EIN Service for Non-US Residents
        </div>

        {/* Price badges */}
        <div style={{ display: "flex", gap: 20, marginTop: 40 }}>
          <div
            style={{
              background: "#2563EB",
              color: "white",
              padding: "12px 24px",
              borderRadius: 12,
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Standard $49
          </div>
          <div
            style={{
              background: "#F59E0B",
              color: "#0A1628",
              padding: "12px 24px",
              borderRadius: 12,
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Express $97
          </div>
        </div>

        {/* URL */}
        <div style={{ position: "absolute", bottom: 30, color: "#64748B", fontSize: 16 }}>
          ein.so
        </div>
      </div>
    ),
    { ...size }
  );
}
