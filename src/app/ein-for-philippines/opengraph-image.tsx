import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Filipino Entrepreneurs - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Filipino Entrepreneurs",
    subtitle: "Freelancing and BPO professionals",
    badge: "Philippines",
    variant: "country",
  });
}
