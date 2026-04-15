import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "Apply for Your EIN - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "Apply for Your EIN",
    subtitle: "$49 Standard - $97 Express - No SSN Required",
    badge: "Apply Now",
    variant: "service",
  });
}
