import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN vs SSN - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN vs SSN",
    subtitle: "Business tax ID vs personal tax ID - Full comparison",
    badge: "Compare",
    variant: "comparison",
  });
}
