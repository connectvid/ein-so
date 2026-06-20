export const STRIPE_LINKS = {
  standard: "https://buy.stripe.com/eVqeVd9xAdXnfZad9zfEk0i",
  express: "https://buy.stripe.com/28E00jaBE06x00c1qRfEk0g",
} as const;

export const SITE = {
  name: "ein.so",
  url: "https://www.ein.so",
  title: "Apply for an EIN Online | $49 EIN Application Service | ein.so",
  description:
    "Get your EIN (Employer Identification Number) as a non-US resident. We file your SS-4 form and deliver your EIN fast. Standard $49. Express $97.",
  whatsapp: "https://wa.me/8801750278508",
  whatsappMessage: "Hi, I need help getting an EIN number.",
  whatsappStandard: "Hi, I'd like to apply for the Standard EIN service ($49).",
  whatsappExpress: "Hi, I'd like to apply for the Express EIN service ($97).",
  stripeStandard: STRIPE_LINKS.standard,
  stripeExpress: STRIPE_LINKS.express,
  email: "support@ein.so",
};

export const PRICING = {
  standard: {
    name: "Standard EIN",
    price: 49,
    turnaround: "14 business days",
    cta: "Get My EIN for $49",
    highlighted: false,
    stripeLink: STRIPE_LINKS.standard,
    features: [
      "SS-4 form completion",
      "IRS fax submission",
      "EIN delivered by email",
      "No SSN required",
      "Full support via WhatsApp",
    ],
  },
  express: {
    name: "Express EIN",
    price: 97,
    turnaround: "7 business days",
    cta: "Get My EIN Fast · $97",
    highlighted: true,
    stripeLink: STRIPE_LINKS.express,
    features: [
      "Everything in Standard",
      "Priority fax + phone follow-up",
      "WhatsApp status updates",
      "Faster IRS liaison",
      "Rush processing",
    ],
  },
} as const;

export const NAV_LINKS = [
  { label: "What Is an EIN", href: "/what-is-ein/" },
  { label: "How to Get EIN", href: "/how-to-get-ein/" },
  { label: "EIN vs ITIN", href: "/ein-vs-itin/" },
  { label: "FAQ", href: "/faq/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
] as const;
