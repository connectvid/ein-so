import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN Number Format - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN Number Format",
    subtitle: "XX-XXXXXXX explained - Digit breakdown and IRS codes",
    badge: "Reference",
    variant: "guide",
  });
}
