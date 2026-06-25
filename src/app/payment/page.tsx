import type { Metadata } from "next";
import EinCheckout from "./EinCheckout";

export const metadata: Metadata = {
  title: "Secure checkout — Get your EIN",
  description:
    "Apply for your US EIN. Standard ($49) or Express ($97) — Form SS-4 prepared and filed with the IRS. No SSN required.",
  // Transactional checkout page — keep it out of search results.
  robots: { index: false, follow: false },
};

export default function PaymentPage() {
  return <EinCheckout />;
}
