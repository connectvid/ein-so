import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "Privacy Policy - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "Privacy Policy",
    subtitle: "How ein.so protects your information",
    badge: "Legal",
    variant: "legal",
  });
}
