import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Sole Proprietor - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Sole Proprietor",
    subtitle: "Do you need one? Find out when and how to apply",
    badge: "Business Type",
    variant: "service",
  });
}
