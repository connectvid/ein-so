import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Non-US Residents - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Non-US Residents",
    subtitle: "Apply from anywhere - No SSN or US address required",
    badge: "Non-Residents",
    variant: "service",
  });
}
