import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "BOI Filing Deadline 2026 - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "BOI Filing Deadline 2026",
    subtitle: "When is your report due? Check your deadline",
    badge: "Deadline",
    variant: "compliance",
  });
}
