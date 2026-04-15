import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "How to Get an EIN - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "How to Get an EIN",
    subtitle: "Step-by-step for non-residents - Every method compared",
    badge: "Guide",
    variant: "guide",
  });
}
