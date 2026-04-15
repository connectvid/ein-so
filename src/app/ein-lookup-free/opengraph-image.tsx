import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "Free EIN Lookup - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "Free EIN Lookup",
    subtitle: "5 free methods to find any EIN number",
    badge: "Free Tool",
    variant: "tool",
  });
}
