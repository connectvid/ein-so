import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "BOI Filing - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "BOI Filing",
    subtitle: "$500/day penalty for non-compliance - Don't risk it",
    badge: "Compliance",
    variant: "compliance",
  });
}
