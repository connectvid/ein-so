import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnnouncementBar from "@/components/AnnouncementBar";
import { SITE, NAV_LINKS } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  keywords: [
    "EIN number",
    "employer identification number",
    "EIN for non-residents",
    "EIN application",
    "get EIN without SSN",
    "Form SS-4",
    "IRS EIN",
    "EIN for LLC",
    "EIN for Amazon sellers",
    "tax ID number",
    "federal tax ID",
    "EIN service",
  ],
  authors: [{ name: "ein.so" }],
  creator: "ein.so",
  publisher: "ein.so",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
  category: "Business Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* Server-rendered nav for crawlers and AI bots */}
        <nav aria-hidden="true" className="sr-only">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <a href="/apply/">Apply for EIN</a>
          <a href="/ein-lookup/">EIN Lookup</a>
          <a href="/who-needs-ein/">Who Needs an EIN</a>
          <a href="/what-can-you-do-with-ein/">What Can You Do With an EIN</a>
          <a href="/ss4-form-guide/">SS-4 Form Guide</a>
          <a href="/ein-without-ssn/">EIN Without SSN</a>
          <a href="/ein-processing-time/">EIN Processing Time</a>
          <a href="/ein-for-llc/">EIN for LLC</a>
          <a href="/ein-for-non-residents/">EIN for Non-Residents</a>
          <a href="/ein-for-amazon-sellers/">EIN for Amazon Sellers</a>
          <a href="/ein-for-bank-account/">EIN for Bank Account</a>
          <a href="/ein-vs-ssn/">EIN vs SSN</a>
          <a href="/boi-filing/">BOI Filing</a>
          <a href="/ein-for-sole-proprietor/">EIN for Sole Proprietor</a>
          <a href="/ein-for-corporation/">EIN for Corporation</a>
          <a href="/ein-for-freelancers/">EIN for Freelancers</a>
          <a href="/tools/ein-eligibility-checker/">EIN Eligibility Checker</a>
          <a href="/tools/ss4-form-helper/">SS-4 Form Helper</a>
          <a href="/tools/ein-processing-calculator/">EIN Processing Calculator</a>
        </nav>
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
