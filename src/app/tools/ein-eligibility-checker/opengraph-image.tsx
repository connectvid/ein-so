import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN Eligibility Checker - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN Eligibility Checker",
    subtitle: "Free tool - Do you need an EIN? Find out in 60 seconds",
    badge: "Free Tool",
    variant: "tool",
  });
}
