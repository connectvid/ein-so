import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for UK Residents - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for UK Residents",
    subtitle: "US business setup guide for UK entrepreneurs",
    badge: "United Kingdom",
    variant: "country",
  });
}
