import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Trust - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Trust",
    subtitle: "When trusts need their own tax ID",
    badge: "Business Type",
    variant: "service",
  });
}
