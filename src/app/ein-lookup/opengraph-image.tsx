import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN Lookup - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN Lookup",
    subtitle: "5 verified ways to find any business EIN number",
    badge: "Guide",
    variant: "guide",
  });
}
