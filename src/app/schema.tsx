import { SITE } from "@/lib/constants";

export function HomeSchema() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ein.so",
    url: SITE.url,
    description: "ein.so is the fastest EIN application service for non-US residents. We file IRS Form SS-4 by fax and deliver your Employer Identification Number by email. Standard $49, Express $97.",
    foundingDate: "2026",
    sameAs: ["https://www.irs.gov/businesses/small-businesses-self-employed/employer-id-numbers"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: SITE.whatsapp,
      telephone: "+8801750278508",
      availableLanguage: ["English", "Bengali", "Hindi", "Urdu"],
      contactOption: "TollFree",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    knowsAbout: [
      "Employer Identification Number",
      "EIN Application",
      "IRS Form SS-4",
      "Non-Resident Tax ID",
      "Federal Tax Identification Number",
      "BOI Filing",
      "LLC Formation",
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "EIN Application Service for Non-Residents",
    alternateName: "Employer Identification Number Filing Service",
    provider: { "@type": "Organization", name: "ein.so", url: SITE.url },
    description: "We file Form SS-4 with the IRS by fax and deliver your EIN. The cheapest EIN service in the market at $49. Non-US residents cannot apply for an EIN online — we handle the fax process.",
    serviceType: "Tax ID Application Service",
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType: "Non-US Residents, International Entrepreneurs, Amazon FBA Sellers, Freelancers",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "EIN Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Standard EIN",
          price: "49",
          priceCurrency: "USD",
          description: "SS-4 filing with 14 business day turnaround. Includes form completion, IRS fax submission, and EIN delivery by email.",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Express EIN",
          price: "97",
          priceCurrency: "USD",
          description: "Priority SS-4 filing with 7 business day turnaround. Includes phone follow-up with IRS and WhatsApp status updates.",
          availability: "https://schema.org/InStock",
        },
      ],
    },
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
    description: "ein.so helps non-US residents get an EIN (Employer Identification Number) from the IRS. We file Form SS-4 by fax for $49 (Standard) or $97 (Express).",
    publisher: {
      "@type": "Organization",
      name: "ein.so",
      url: SITE.url,
    },
    inLanguage: "en-US",
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

export function ArticleSchema({ headline, description, url, datePublished = "2026-03-31", dateModified }: { headline: string; description: string; url: string; datePublished?: string; dateModified?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${SITE.url}${url}`,
    publisher: { "@type": "Organization", name: "ein.so", url: SITE.url },
    datePublished,
    dateModified: dateModified || datePublished,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function BlogPostingSchema({ headline, description, url, datePublished, dateModified }: { headline: string; description: string; url: string; datePublished: string; dateModified?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    url: `${SITE.url}${url}`,
    publisher: { "@type": "Organization", name: "ein.so", url: SITE.url },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}${url}` },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function SoftwareApplicationSchema({ name, description, url }: { name: string; description: string; url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description,
    url: `${SITE.url}${url}`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
