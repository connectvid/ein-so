import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Bangladeshi Entrepreneurs - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Bangladeshi Entrepreneurs",
    subtitle: "Freelancing, IT outsourcing, and e-commerce",
    badge: "Bangladesh",
    variant: "country",
  });
}
