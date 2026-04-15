import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Stripe - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Stripe",
    subtitle: "Accept US payments as a non-resident",
    badge: "Payments",
    variant: "service",
  });
}
