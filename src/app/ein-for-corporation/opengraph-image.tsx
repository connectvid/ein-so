import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Corporation - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Corporation",
    subtitle: "Required for every C-Corp and S-Corp",
    badge: "Business Type",
    variant: "service",
  });
}
