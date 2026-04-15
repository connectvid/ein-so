import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN vs TIN - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN vs TIN",
    subtitle: "Understanding Taxpayer Identification Numbers",
    badge: "Compare",
    variant: "comparison",
  });
}
