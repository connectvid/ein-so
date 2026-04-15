import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "Contact ein.so - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "Contact ein.so",
    subtitle: "WhatsApp and email support - We respond within hours",
    badge: "Contact",
    variant: "service",
  });
}
