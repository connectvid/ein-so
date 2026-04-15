import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Mexican Entrepreneurs - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Mexican Entrepreneurs",
    subtitle: "Cross-border trade under USMCA",
    badge: "Mexico",
    variant: "country",
  });
}
