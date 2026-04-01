import { SITE } from "@/lib/constants";

export function HomeSchema() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ein.so",
    url: SITE.url,
    description: SITE.description,
    sameAs: ["https://www.irs.gov/businesses/small-businesses-self-employed/employer-id-numbers"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: SITE.whatsapp,
      availableLanguage: ["English", "Bengali", "Hindi"],
    },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "EIN Application Service for Non-Residents",
    provider: { "@type": "Organization", name: "ein.so" },
    description: "We file Form SS-4 with the IRS by fax and deliver your EIN.",
    offers: [
      { "@type": "Offer", name: "Standard EIN", price: "49", priceCurrency: "USD", description: "SS-4 filing with 5-7 business day turnaround" },
      { "@type": "Offer", name: "Express EIN", price: "97", priceCurrency: "USD", description: "Priority SS-4 filing with 2-3 business day turnaround" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
    </>
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ein.so",
    url: SITE.url,
    description: SITE.description,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function HowToSchema({ steps }: { steps: { name: string; text: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get an EIN Number as a Non-Resident",
    description: "Step-by-step guide to getting an EIN number in 2026 for non-US residents using Form SS-4 filed by fax.",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ArticleSchema({ headline, description, url }: { headline: string; description: string; url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${SITE.url}${url}`,
    publisher: { "@type": "Organization", name: "ein.so", url: SITE.url },
    datePublished: "2026-03-31",
    dateModified: "2026-03-31",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
