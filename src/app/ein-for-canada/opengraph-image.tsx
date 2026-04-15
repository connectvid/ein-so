import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Canadians - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Canadians",
    subtitle: "Cross-border business guide for Canadian entrepreneurs",
    badge: "Canada",
    variant: "country",
  });
}
