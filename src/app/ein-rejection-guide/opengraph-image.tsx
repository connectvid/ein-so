import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN Application Rejected? - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN Application Rejected?",
    subtitle: "How to fix errors and reapply successfully",
    badge: "Fix & Reapply",
    variant: "guide",
  });
}
