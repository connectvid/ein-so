import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Estate - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Estate",
    subtitle: "How executors get a tax ID for a deceased person",
    badge: "Business Type",
    variant: "service",
  });
}
