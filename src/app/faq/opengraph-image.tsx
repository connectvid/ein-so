import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN FAQ - 37+ Questions Answered - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN FAQ - 37+ Questions Answered",
    subtitle: "Everything non-residents need to know about EINs",
    badge: "FAQ",
    variant: "guide",
  });
}
