import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for LLC - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for LLC",
    subtitle: "Every LLC needs an EIN - Here's how to get yours",
    badge: "Business Type",
    variant: "service",
  });
}
