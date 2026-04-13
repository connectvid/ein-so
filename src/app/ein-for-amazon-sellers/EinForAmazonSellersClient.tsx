"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForAmazonSellersClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Amazon Sellers"
        title="EIN for Amazon Sellers:"
        titleAccent="Required for FBA & Seller Central (2026)"
        description="Amazon requires an EIN to complete the Seller Central tax interview. Learn how to get your EIN, pass the tax interview, and start selling on Amazon from anywhere in the world."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Amazon Seller Central requires a Tax Identification Number (TIN) to complete the mandatory tax interview during registration. Non-US residents must use an EIN because they do not have an SSN. Even US-based sellers should use an EIN to protect their SSN.</strong>{" "}
                  Without completing the tax interview, you cannot list products or receive payments on Amazon. Getting your EIN is the first step to selling on Amazon, whether you are using FBA or fulfilling orders yourself.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Amazon is the largest e-commerce marketplace in the world, and thousands of new sellers register every day. For non-US residents, the EIN requirement is the biggest hurdle to getting started. The IRS online tool does not work without an SSN, leaving international sellers stuck -- unless they know about the fax method or use a service like ein.so.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide covers everything an Amazon seller needs to know about EINs: why Amazon requires one, how to get one (especially if you are outside the US), how to complete the tax interview, and the step-by-step process from EIN application to your first Amazon sale.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Does Amazon Require an EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Amazon Requirements</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Does Amazon Seller Central <span className="font-display gradient-text">Require an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Amazon is required by US tax law to collect tax identification information from every seller on its platform. This is because Amazon reports seller income to the IRS using Form 1099-K. To generate these tax forms, Amazon needs your TIN -- either an SSN, ITIN, or EIN.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The tax interview is a mandatory part of the Amazon Seller Central registration process. You cannot skip it, delay it, or work around it. Until you complete the tax interview with a valid TIN, Amazon will not activate your seller account. You cannot list products, receive orders, or collect payments.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For <strong className="text-[var(--color-text)]">non-US residents</strong>, the only practical option is an EIN. You do not have an SSN, and getting an ITIN is a longer process that requires a tax return filing. An EIN can be obtained in days through the fax method, making it the fastest path to completing your Amazon registration.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For <strong className="text-[var(--color-text)]">US residents</strong>, using an EIN instead of your SSN is a smart privacy decision. Your SSN is your most sensitive personal identifier. By using an EIN on your Amazon account, you keep your SSN off yet another platform, reducing your exposure to data breaches and identity theft.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* EIN for Amazon FBA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">FBA Sellers</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Do Amazon FBA Sellers <span className="font-display gradient-text">Need an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Yes.</strong> Amazon FBA (Fulfillment by Amazon) sellers must complete the same tax interview as all other Amazon sellers. FBA is a fulfillment method, not a different seller category -- the tax requirements are identical whether you ship products yourself or use Amazon&apos;s warehouses.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                FBA is especially popular with non-US sellers because it eliminates the need for a US shipping address or warehouse. You ship your products to Amazon&apos;s fulfillment centers, and Amazon handles storage, packing, shipping, and customer service. This makes FBA the most accessible way for international entrepreneurs to sell physical products in the US market.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The typical path for a non-US FBA seller is: <strong className="text-[var(--color-text)]">Form LLC</strong> (usually in Wyoming or Delaware) &rarr; <strong className="text-[var(--color-text)]">Get EIN</strong> &rarr; <strong className="text-[var(--color-text)]">Open US bank account</strong> &rarr; <strong className="text-[var(--color-text)]">Register on Amazon Seller Central</strong> &rarr; <strong className="text-[var(--color-text)]">Complete tax interview</strong> &rarr; <strong className="text-[var(--color-text)]">Start selling</strong>. Your EIN is needed for step 2 and is used again in step 5.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If you are a non-US resident planning to sell on Amazon FBA, start with your EIN. It is the first domino that makes everything else possible. <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] hover:underline font-semibold">Learn how non-residents get an EIN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Step-by-Step: EIN to Amazon */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Roadmap</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Step-by-Step: From EIN Application <span className="font-display gradient-text">to Amazon Sales</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Here is the complete roadmap for non-US residents who want to sell on Amazon. Each step builds on the previous one, and the EIN is the foundation that makes everything else possible.
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Form a US LLC",
                    desc: "Register an LLC in a business-friendly state like Wyoming or Delaware. This gives you a legal US business entity. Many formation services handle this remotely for non-residents.",
                  },
                  {
                    step: "2",
                    title: "Get Your EIN",
                    desc: "Apply for an EIN through ein.so ($49 Standard, $97 Express). You need your LLC formation documents, passport, and foreign address. We handle the SS-4 filing and IRS follow-up.",
                    link: "/apply/",
                  },
                  {
                    step: "3",
                    title: "Open a US Bank Account",
                    desc: "Use your EIN and LLC formation documents to open a US bank account. Online banks like Mercury and Relay accept non-resident LLC owners. This account will receive your Amazon payouts.",
                    link: "/ein-for-bank-account/",
                  },
                  {
                    step: "4",
                    title: "Register on Amazon Seller Central",
                    desc: "Create your Amazon Seller Central account. You will need your business name, EIN, bank account details, credit card, phone number, and passport or government ID.",
                  },
                  {
                    step: "5",
                    title: "Complete the Amazon Tax Interview",
                    desc: "Navigate to Settings > Account Info > Tax Information in Seller Central. Enter your EIN when asked for a TIN. Provide your business details exactly as they appear on your EIN confirmation letter.",
                  },
                  {
                    step: "6",
                    title: "Start Selling",
                    desc: "Once Amazon validates your EIN (typically 24-48 hours), your account is fully active. You can list products, ship inventory to FBA warehouses, and start generating sales.",
                  },
                ].map((item) => (
                  <StaggerItem key={item.step}>
                    <div className="flex gap-4 bg-white rounded-xl border border-[var(--color-border)] p-5">
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-blue)] text-white flex items-center justify-center text-lg font-bold">{item.step}</span>
                      <div>
                        <h3 className="font-bold text-[var(--color-text)] mb-1">{item.title}</h3>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                        {"link" in item && item.link && (
                          <Link href={item.link} className="text-sm text-[var(--color-blue)] hover:underline font-semibold mt-1 inline-block">
                            Learn more
                          </Link>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How to Complete the Amazon Tax Interview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Interview</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Complete the Amazon Tax Interview <span className="font-display gradient-text">With Your EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The Amazon tax interview is a guided form within Seller Central that collects your tax information. Amazon uses this information to generate 1099-K tax forms and to comply with IRS reporting requirements. Here is how to complete it with your EIN:
              </p>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Step 1: Access the Tax Interview</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">In Seller Central, go to <strong className="text-[var(--color-text)]">Settings &gt; Account Info &gt; Tax Information</strong>. Click the <strong className="text-[var(--color-text)]">&quot;Tax Interview&quot;</strong> button to begin.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Step 2: Select Your Entity Type</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">If you are operating through an LLC, select <strong className="text-[var(--color-text)]">&quot;Business&quot;</strong> (not &quot;Individual&quot;). If you are a sole proprietor without an LLC, select &quot;Individual.&quot; This determines which IRS form Amazon generates (W-9 for US entities, W-8BEN or W-8BEN-E for foreign entities).</p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Step 3: Enter Your EIN</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">When prompted for a <strong className="text-[var(--color-text)]">Taxpayer Identification Number (TIN)</strong>, enter your 9-digit EIN in the format XX-XXXXXXX. Make sure the business name you enter matches exactly what appears on your IRS EIN confirmation letter.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Step 4: Provide Business Details</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Enter your business address, country of incorporation, and other details as requested. For non-US entities, you will also need to indicate your tax treaty country (if applicable) and provide a foreign TIN if you have one.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Step 5: Submit and Wait for Validation</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Amazon validates your EIN with the IRS. This typically takes <strong className="text-[var(--color-text)]">24-48 hours</strong>. If validation fails, double-check that your EIN and business name match your IRS records exactly. Note: newly issued EINs may take up to 2 weeks to appear in the IRS database.</p>
                </div>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Important:</strong> The business name on your Amazon Seller Central account must match the legal name on your EIN confirmation letter exactly. A mismatch will cause validation to fail. This is one of the most common issues new sellers face. If your LLC is &quot;Smith Enterprises LLC&quot; on your EIN letter, that is exactly what you must enter in Amazon -- not &quot;Smith Enterprises&quot; or &quot;Smith Enterprises, LLC&quot;.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Non-US Sellers */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">International Sellers</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Non-US Residents Get an EIN <span className="font-display gradient-text">for Amazon?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Non-US residents cannot use the IRS online EIN application because it requires an SSN or ITIN. Instead, you must apply using Form SS-4, submitted by fax to the IRS. This is the same process for all non-residents, regardless of whether you are selling on Amazon, opening a bank account, or filing taxes.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so handles this process for Amazon sellers every day. Our service is built specifically for non-US residents who need an EIN quickly and correctly. We prepare your Form SS-4, verify every field, fax it to the IRS, and deliver your EIN by email and WhatsApp.
              </p>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">What you need to get started:</h3>
                <ul className="space-y-2 text-[var(--color-text-muted)]">
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Valid passport (any country)</span>
                  </li>
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>US LLC formation documents (if you have an LLC)</span>
                  </li>
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Your foreign home address</span>
                  </li>
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    <span className="line-through">SSN or ITIN (not required)</span>
                  </li>
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    <span className="line-through">US visa or physical presence (not required)</span>
                  </li>
                </ul>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For the complete guide on the non-resident EIN process, see <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for non-US residents</Link>. For details on applying without an SSN, see <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN without SSN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Troubleshooting</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What If Amazon Cannot Validate <span className="font-display gradient-text">Your EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                EIN validation failures during the Amazon tax interview are common and almost always fixable. Here are the most frequent causes and solutions:
              </p>

              <div className="space-y-4">
                {[
                  { issue: "EIN is too new", solution: "The IRS takes up to 2 weeks to propagate a new EIN through all its systems. If you just received your EIN, wait 2 weeks before completing the Amazon tax interview. This is the most common cause of validation failures." },
                  { issue: "Business name mismatch", solution: "The business name in Seller Central must match your EIN confirmation letter exactly. Check for differences in punctuation, spacing, LLC vs. L.L.C., and capitalization. Even minor differences can cause a mismatch." },
                  { issue: "Wrong TIN type selected", solution: "Make sure you select EIN (not SSN or ITIN) as your TIN type in the tax interview. Selecting the wrong type causes an automatic mismatch because the IRS validates against different databases." },
                  { issue: "EIN entered incorrectly", solution: "Double-check that you entered all 9 digits correctly in the XX-XXXXXXX format. Transposed digits are a common typo. Compare digit by digit against your IRS confirmation letter." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.issue}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.solution}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If you obtained your EIN through ein.so and are having trouble with Amazon validation, contact us via WhatsApp. We provide free support for EIN validation issues and can provide additional documentation if Amazon requires it. For more on EIN processing timelines, see our <Link href="/ein-processing-time/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN processing time guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* After Your EIN */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Next Steps</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Do Amazon Sellers Do <span className="font-display gradient-text">After Getting Their EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Your EIN unlocks the full Amazon selling experience. After receiving your EIN from ein.so, here is what you should do next:
              </p>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 space-y-4">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <h3 className="font-bold text-[var(--color-text)] mb-1">Open a US Bank Account</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">You need a US bank account to receive Amazon payouts. Use your EIN and LLC documents to open an account with Mercury, Relay, or a similar bank that accepts non-resident applications. <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">Learn more</Link>.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <h3 className="font-bold text-[var(--color-text)] mb-1">Complete the Amazon Tax Interview</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Wait 2 weeks after receiving your EIN (for IRS database propagation), then complete the tax interview in Seller Central using the steps outlined above.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <h3 className="font-bold text-[var(--color-text)] mb-1">Set Up Amazon FBA</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Create your product listings, prepare your inventory, and ship your products to Amazon&apos;s fulfillment centers. FBA handles storage, packing, shipping, and customer service.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <h3 className="font-bold text-[var(--color-text)] mb-1">Plan for Tax Compliance</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">As a US business entity, you have tax filing obligations. Consult with a tax professional who specializes in non-resident US tax obligations to ensure you stay compliant. Your EIN is used on all tax filings.</p>
                  </div>
                </div>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The entire process -- from EIN application to first Amazon sale -- typically takes 3-6 weeks depending on how quickly you complete each step. Getting your EIN is the fastest part when you use ein.so. <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">Start your EIN application today</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-4">
              Frequently Asked <span className="font-display gradient-text">Questions</span>
            </h2>
          </AnimateIn>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-[var(--color-border)] rounded-xl overflow-hidden">
                <summary className="cursor-pointer px-6 py-4 flex items-center justify-between">
                  <span className="font-semibold text-[var(--color-text)] pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 flex-shrink-0 text-[var(--color-text-muted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 py-4 border-t border-[var(--color-border)] text-[var(--color-text-muted)] leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Sell on Amazon?" subtitle="Get your EIN in days. $49 Standard. $97 Express. No SSN required." />
    </>
  );
}
