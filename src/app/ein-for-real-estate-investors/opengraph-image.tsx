import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Real Estate Investors - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Real Estate Investors",
    subtitle: "FIRPTA compliance and LLC requirements",
    badge: "Real Estate",
    variant: "service",
  });
}
