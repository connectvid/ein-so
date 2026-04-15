import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Business Credit - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Business Credit",
    subtitle: "Build credit without an SSN",
    badge: "Credit",
    variant: "service",
  });
}
