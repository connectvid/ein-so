import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Bank Account - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Bank Account",
    subtitle: "Open a US business bank account from abroad",
    badge: "Banking",
    variant: "service",
  });
}
