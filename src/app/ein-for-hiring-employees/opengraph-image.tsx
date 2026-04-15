import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "EIN for Hiring Employees - ein.so";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return generateOGImage({
    title: "EIN for Hiring Employees",
    subtitle: "Payroll tax requirements and setup",
    badge: "Hiring",
    variant: "service",
  });
}
