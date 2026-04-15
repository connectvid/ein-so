import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Freelancers - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Freelancers",
    subtitle: "Protect your SSN on W-9 forms",
    badge: "Freelancers",
    variant: "service",
  });
}
