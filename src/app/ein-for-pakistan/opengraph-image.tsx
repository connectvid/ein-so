import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Pakistani Entrepreneurs - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Pakistani Entrepreneurs",
    subtitle: "Freelancing, Amazon, and e-commerce from Pakistan",
    badge: "Pakistan",
    variant: "country",
  });
}
