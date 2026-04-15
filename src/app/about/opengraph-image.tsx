import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "About ein.so - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "About ein.so",
    subtitle: "The fastest EIN service built for non-US residents",
    badge: "About",
    variant: "service",
  });
}
