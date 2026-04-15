import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Amazon Sellers - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Amazon Sellers",
    subtitle: "Complete your Seller Central tax interview",
    badge: "Amazon",
    variant: "service",
  });
}
