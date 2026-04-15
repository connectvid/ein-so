import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN Without SSN - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN Without SSN",
    subtitle: "How non-residents get an EIN without a Social Security Number",
    badge: "Guide",
    variant: "guide",
  });
}
