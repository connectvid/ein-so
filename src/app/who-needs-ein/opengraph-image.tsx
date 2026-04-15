import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "Who Needs an EIN? - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "Who Needs an EIN?",
    subtitle: "LLCs, corporations, nonprofits, and non-residents",
    badge: "Guide",
    variant: "guide",
  });
}
