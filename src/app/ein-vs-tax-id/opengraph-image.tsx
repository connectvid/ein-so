import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN vs Tax ID - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN vs Tax ID",
    subtitle: "EIN, SSN, and ITIN - Which one do you need?",
    badge: "Compare",
    variant: "comparison",
  });
}
