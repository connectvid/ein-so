import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "S-Corp Election Guide - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "S-Corp Election Guide",
    subtitle: "Form 2553 filing - Deadlines and tax benefits",
    badge: "Tax Strategy",
    variant: "guide",
  });
}
