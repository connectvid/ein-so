import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Brazilian Entrepreneurs - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Brazilian Entrepreneurs",
    subtitle: "Amazon FBA and US real estate investment",
    badge: "Brazil",
    variant: "country",
  });
}
