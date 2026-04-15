import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Nonprofit - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Nonprofit",
    subtitle: "Required before applying for 501(c)(3) status",
    badge: "Business Type",
    variant: "service",
  });
}
