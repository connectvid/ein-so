import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Nigerian Entrepreneurs - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Nigerian Entrepreneurs",
    subtitle: "Tech startups and e-commerce expansion to the US",
    badge: "Nigeria",
    variant: "country",
  });
}
