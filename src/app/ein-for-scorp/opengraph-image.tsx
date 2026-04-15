import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for S-Corp - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for S-Corp",
    subtitle: "S-Corp election and EIN requirements explained",
    badge: "Business Type",
    variant: "service",
  });
}
