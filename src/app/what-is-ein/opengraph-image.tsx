import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "What Is an EIN Number? - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "What Is an EIN Number?",
    subtitle: "Complete 2026 guide to Employer Identification Numbers",
    badge: "Guide",
    variant: "guide",
  });
}
