import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "SS-4 Form Helper - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "SS-4 Form Helper",
    subtitle: "Free line-by-line guide for non-residents",
    badge: "Free Tool",
    variant: "tool",
  });
}
