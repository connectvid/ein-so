import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "What Can You Do With an EIN? - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "What Can You Do With an EIN?",
    subtitle: "Banking, taxes, hiring, Amazon, Stripe, and more",
    badge: "Guide",
    variant: "guide",
  });
}
