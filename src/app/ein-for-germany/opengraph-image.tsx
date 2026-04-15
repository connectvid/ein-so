import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for German Entrepreneurs - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for German Entrepreneurs",
    subtitle: "Amazon FBA and US market entry from Germany",
    badge: "Germany",
    variant: "country",
  });
}
