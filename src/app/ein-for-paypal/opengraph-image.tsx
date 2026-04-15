import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for PayPal - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for PayPal",
    subtitle: "Set up a PayPal Business account as non-resident",
    badge: "Payments",
    variant: "service",
  });
}
