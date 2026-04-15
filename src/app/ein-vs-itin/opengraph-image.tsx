import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN vs ITIN - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN vs ITIN",
    subtitle: "Which tax ID do you need? Clear comparison",
    badge: "Compare",
    variant: "comparison",
  });
}
