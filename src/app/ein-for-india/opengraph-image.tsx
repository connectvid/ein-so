import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Indian Entrepreneurs - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Indian Entrepreneurs",
    subtitle: "Apply from India - IT, freelancing, Amazon FBA",
    badge: "India",
    variant: "country",
  });
}
