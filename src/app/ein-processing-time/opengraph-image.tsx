import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN Processing Time - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN Processing Time",
    subtitle: "Standard 14 days - Express 7 days - Current IRS timelines",
    badge: "Guide",
    variant: "guide",
  });
}
