import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "Terms of Service - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "Terms of Service",
    subtitle: "Service terms and refund policy",
    badge: "Legal",
    variant: "legal",
  });
}
