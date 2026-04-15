import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Shopify Sellers - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Shopify Sellers",
    subtitle: "Tax setup for non-US Shopify merchants",
    badge: "E-Commerce",
    variant: "service",
  });
}
