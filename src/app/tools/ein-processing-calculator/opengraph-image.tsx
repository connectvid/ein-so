import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN Processing Calculator - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN Processing Calculator",
    subtitle: "Calculate when you'll get your EIN",
    badge: "Free Tool",
    variant: "tool",
  });
}
