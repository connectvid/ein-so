import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type OGVariant = "service" | "guide" | "comparison" | "country" | "tool" | "compliance" | "legal";

const variantColors: Record<OGVariant, { accent: string; badge: string; badgeText: string }> = {
  service: { accent: "#2563EB", badge: "#2563EB", badgeText: "#FFFFFF" },
  guide: { accent: "#60A5FA", badge: "#0F172A", badgeText: "#60A5FA" },
  comparison: { accent: "#F59E0B", badge: "#F59E0B", badgeText: "#0A1628" },
  country: { accent: "#10B981", badge: "#10B981", badgeText: "#FFFFFF" },
  tool: { accent: "#8B5CF6", badge: "#8B5CF6", badgeText: "#FFFFFF" },
  compliance: { accent: "#EF4444", badge: "#EF4444", badgeText: "#FFFFFF" },
  legal: { accent: "#64748B", badge: "#64748B", badgeText: "#FFFFFF" },
};

export function generateOGImage({
  title,
  subtitle,
  badge,
  variant = "service",
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  variant?: OGVariant;
}) {
  const colors = variantColors[variant];

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(145deg, #0A1628 0%, #0F1D32 50%, #162240 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: 60,
          position: "relative",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            background: `radial-gradient(circle, ${colors.accent}22, transparent 70%)`,
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            background: `radial-gradient(circle, ${colors.accent}15, transparent 70%)`,
            borderRadius: "50%",
          }}
        />

        {/* Top: Logo + Badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 44,
                height: 44,
                background: "#2563EB",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 22,
                fontWeight: 800,
              }}
            >
              E
            </div>
            <span style={{ fontSize: 28, fontWeight: 800, color: "white" }}>
              ein
            </span>
            <span style={{ fontSize: 28, fontWeight: 800, color: "#2563EB" }}>
              .so
            </span>
          </div>

          {badge && (
            <div
              style={{
                background: colors.badge,
                color: colors.badgeText,
                padding: "8px 20px",
                borderRadius: 20,
                fontSize: 14,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {badge}
            </div>
          )}
        </div>

        {/* Middle: Title + Subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative", flex: 1, justifyContent: "center" }}>
          <div
            style={{
              fontSize: title.length > 40 ? 44 : 52,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: 22,
                color: colors.accent,
                lineHeight: 1.4,
                maxWidth: 750,
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* Bottom: Price bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
          <div style={{ display: "flex", gap: 16 }}>
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "10px 20px",
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 700,
                color: "white",
              }}
            >
              Standard $49
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "10px 20px",
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 700,
                color: "#F59E0B",
              }}
            >
              Express $97
            </div>
          </div>
          <div style={{ color: "#475569", fontSize: 16, fontWeight: 600 }}>
            ein.so
          </div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
