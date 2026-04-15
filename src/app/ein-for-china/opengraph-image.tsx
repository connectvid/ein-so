import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Chinese Entrepreneurs - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Chinese Entrepreneurs",
    subtitle: "Amazon US sellers and cross-border commerce",
    badge: "China",
    variant: "country",
  });
}
