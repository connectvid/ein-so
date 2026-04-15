import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "BOI Filing Penalties - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "BOI Filing Penalties",
    subtitle: "$500/day civil fines - $10,000 criminal penalties",
    badge: "Warning",
    variant: "compliance",
  });
}
