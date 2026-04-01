import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: "linear-gradient(135deg, #0A1628, #162240)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#2563EB",
          fontWeight: 800,
          borderRadius: 36,
          fontFamily: "system-ui",
        }}
      >
        E
      </div>
    ),
    { ...size }
  );
}
