import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Partnership - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Partnership",
    subtitle: "Required for Form 1065 and K-1 filing",
    badge: "Business Type",
    variant: "service",
  });
}
