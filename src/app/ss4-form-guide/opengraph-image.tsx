import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "IRS Form SS-4 Guide - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "IRS Form SS-4 Guide",
    subtitle: "Line-by-line instructions for non-residents",
    badge: "Guide",
    variant: "guide",
  });
}
