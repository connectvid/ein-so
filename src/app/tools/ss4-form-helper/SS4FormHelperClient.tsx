"use client";

import { useState } from "react";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const formSections = [
  {
    group: "Entity Information (Lines 1-3)",
    lines: [
      {
        line: "1",
        name: "Legal name of entity (or individual) for whom the EIN is being requested",
        instruction:
          "Enter the exact legal name of your business as it appears on your formation documents (articles of organization, certificate of incorporation, etc.). For an LLC, this is the full LLC name including 'LLC' at the end. For a sole proprietor, enter your personal legal name.",
        example:
          "Non-resident example: 'Global Ventures LLC' (must match your state formation documents exactly)",
        mistake:
          "Do not use a trade name or DBA here. The legal name must match your official formation documents. If there is a mismatch, the IRS may reject your application.",
      },
      {
        line: "2",
        name: "Trade name of business (if different from line 1)",
        instruction:
          "Enter your DBA (Doing Business As) name if you operate under a name different from your legal entity name. If your business operates only under its legal name, leave this line blank.",
        example:
          "If your LLC is 'Global Ventures LLC' but you sell under 'GV Store', enter 'GV Store' here.",
        mistake:
          "Do not repeat the same name from line 1. If you do not have a trade name, leave this blank -- do not write 'N/A' or 'Same'.",
      },
      {
        line: "3",
        name: "Executor, administrator, trustee, or 'care of' name",
        instruction:
          "This line is used when someone other than the entity owner is handling the application. For most business entities, leave this blank. For estates, enter the executor name. For trusts, enter the trustee name.",
        example:
          "Leave blank for LLCs and corporations. For an estate: 'John Smith, Executor'.",
        mistake:
          "Do not enter the name of an EIN service or registered agent here unless they are specifically designated as a third-party designee (covered separately on the form).",
      },
    ],
  },
  {
    group: "Address Information (Lines 4a-5b)",
    lines: [
      {
        line: "4a-4b",
        name: "Mailing address (street address, city, state, ZIP)",
        instruction:
          "Enter the mailing address where the IRS should send correspondence. Non-residents can use their foreign address. Include the full street address on line 4a and city, state (or province), and ZIP/postal code on line 4b. If you are outside the US, include your country name.",
        example:
          "Non-resident example: Line 4a: '123 Example Street, Suite 4'. Line 4b: 'London, England SW1A 1AA, United Kingdom'.",
        mistake:
          "Make sure the address is complete. The IRS will mail your CP 575 confirmation letter here. If the address is incomplete or incorrect, you may never receive the letter (though your EIN is still valid once assigned).",
      },
      {
        line: "5a-5b",
        name: "Street address (if different from line 4)",
        instruction:
          "Enter your physical business address if it differs from your mailing address. If your mailing address and physical address are the same, leave lines 5a and 5b blank. Non-residents can use their registered agent address in the US if applicable.",
        example:
          "If you have a US registered agent: Line 5a: '1234 Agent Ave'. Line 5b: 'Wilmington, DE 19801'.",
        mistake:
          "Do not leave this blank if your business has a physical US location different from your mailing address. The IRS uses this to determine your filing requirements.",
      },
    ],
  },
  {
    group: "Responsible Party (Lines 6-7b)",
    lines: [
      {
        line: "6",
        name: "County and state where principal business is located",
        instruction:
          "Enter the US county and state where your business has its principal office. Non-residents who do not have a US office should enter the state where their registered agent is located or where their entity was formed.",
        example:
          "Non-resident with Delaware LLC: 'New Castle County, Delaware'.",
        mistake:
          "Do not leave this blank even if you are a non-resident. Use the state and county of your registered agent or where your entity was formed.",
      },
      {
        line: "7a",
        name: "Name of responsible party",
        instruction:
          "Enter the full legal name of the individual who controls, manages, or directs the entity. For an LLC, this is typically the managing member. For a corporation, this is usually an officer or director. The IRS requires a real person here -- not a company name.",
        example: "Non-resident example: 'Ahmed Khan' (your personal name as it appears on your passport).",
        mistake:
          "You cannot list a company name or registered agent here. The responsible party must be an individual person. If there are multiple owners, list the one with the most control.",
      },
      {
        line: "7b",
        name: "SSN, ITIN, or EIN of responsible party",
        instruction:
          "Enter the SSN, ITIN, or existing EIN of the responsible party listed on line 7a. Non-residents who do not have any of these numbers should leave this line blank or write 'Foreign' or 'N/A'. The IRS will still process your application by fax without this number.",
        example:
          "Non-resident without SSN/ITIN: Leave blank or write 'N/A'. US resident: Enter your SSN (xxx-xx-xxxx).",
        mistake:
          "This is the line that prevents non-residents from using the online application. If you leave this blank on the online form, it will be rejected. However, fax and phone applications will be accepted without it.",
      },
    ],
  },
  {
    group: "Entity Type & Reason (Lines 8a-10)",
    lines: [
      {
        line: "8a-8b",
        name: "Type of entity",
        instruction:
          "Check the box that matches your entity type on line 8a. Options include sole proprietor, partnership, corporation, personal service corp, church, nonprofit, trust, estate, and others. If you select 'Other,' specify on line 8b. For an LLC, check 'LLC' and indicate the number of members.",
        example:
          "Single-member LLC: Check 'LLC' and write '1' for number of members. Corporation: Check 'Corporation'.",
        mistake:
          "This is one of the most common errors. Make sure the entity type matches your actual formation documents. An LLC that elected S-Corp treatment is still an LLC on this form -- do not check 'Corporation'.",
      },
      {
        line: "9a-9b",
        name: "Reason for applying",
        instruction:
          "Select the reason you need an EIN on line 9a. Common reasons include 'Started new business,' 'Hired employees,' and 'Banking purpose only.' If you select 'Other,' specify on line 9b. Most non-residents forming a new US entity should select 'Started new business.'",
        example:
          "New LLC formation: Check 'Started new business.' If you already had a business but need an EIN for a bank account: Check 'Banking purpose only.'",
        mistake:
          "Do not select 'Changed type of organization' unless you are converting from one entity type to another (e.g., sole proprietorship to LLC). Selecting the wrong reason can cause confusion in IRS records.",
      },
      {
        line: "10",
        name: "Date business started or acquired",
        instruction:
          "Enter the date your business was started or the date you acquired it. For new entities, this is typically the date your formation documents were filed with the state. Use the MM/DD/YYYY format.",
        example:
          "If your LLC was formed on January 15, 2026: Enter '01/15/2026'.",
        mistake:
          "Do not enter today's date unless your entity was actually formed today. Use the date from your articles of organization or certificate of incorporation.",
      },
    ],
  },
  {
    group: "Employment & Tax Details (Lines 11-16)",
    lines: [
      {
        line: "11",
        name: "Closing month of accounting year",
        instruction:
          "Enter the last month of your accounting year. Most businesses use a calendar year, which ends in December. Enter '12' for December. Some corporations may have a different fiscal year end.",
        example: "Calendar year: Enter '12'. Fiscal year ending June 30: Enter '06'.",
        mistake:
          "Most small businesses and LLCs should use '12' (December). Do not pick an arbitrary month unless you have a specific tax reason for a different fiscal year.",
      },
      {
        line: "12",
        name: "Highest number of employees expected in the next 12 months",
        instruction:
          "Enter the number of employees you expect to have in the next 12 months. If you do not plan to hire anyone, enter '0.' Break this down into Agricultural, Household, and Other categories if applicable.",
        example:
          "No employees planned: Enter '0' in all fields. Planning to hire 2 contractors: Enter '0' (contractors are not employees).",
        mistake:
          "Independent contractors are not employees. Do not count 1099 contractors in this number. Only count W-2 employees.",
      },
      {
        line: "13",
        name: "First date wages or annuities were paid",
        instruction:
          "Enter the date you first paid or will first pay wages. If you do not have employees and do not plan to hire, enter 'N/A.' If you have not yet paid wages but plan to, enter the expected date.",
        example: "No employees: Enter 'N/A'. First payroll on March 1, 2026: Enter '03/01/2026'.",
        mistake:
          "Leave this as 'N/A' if you do not have employees. Do not enter a date just because you paid an independent contractor.",
      },
      {
        line: "14-16",
        name: "Principal activity, product/service, and prior EIN",
        instruction:
          "Line 14: Describe your principal business activity (e.g., 'E-commerce,' 'Consulting,' 'Software development'). Line 15: Describe the principal product or service (e.g., 'Online retail sales,' 'Business consulting services'). Line 16: Enter any prior EIN if this entity previously applied for one. If not, check 'No.'",
        example:
          "Line 14: 'Retail Trade'. Line 15: 'Online retail sales of clothing'. Line 16: Check 'No' if first time applying.",
        mistake:
          "Be specific but concise. Avoid vague descriptions like 'business' or 'services.' The IRS uses this information to classify your business by NAICS code.",
      },
    ],
  },
  {
    group: "Third-Party Designee & Signature (Lines 17-18)",
    lines: [
      {
        line: "17",
        name: "Third-party designee",
        instruction:
          "If you want to authorize a third party (such as ein.so or your accountant) to receive the EIN on your behalf, check 'Yes' and fill in their name, address, and phone number. This is important for non-residents using a service to handle the application.",
        example:
          "Using ein.so: Check 'Yes' and enter the ein.so designee information as provided during your application process.",
        mistake:
          "If you want to receive the EIN directly and handle all IRS communication yourself, check 'No.' But if you are using a service, you must check 'Yes' or the IRS will not release your EIN to the service provider.",
      },
      {
        line: "18",
        name: "Signature and date",
        instruction:
          "The responsible party listed on line 7a (or a duly authorized individual) must sign and date the form. Print your name and title (e.g., 'Member,' 'President,' 'Owner') below the signature. Include a phone number and fax number if available.",
        example:
          "Sign with your name, write your title (e.g., 'Managing Member'), today's date, and your phone number including country code.",
        mistake:
          "An unsigned form will be rejected. Make sure the signature matches the name on line 7a. If someone else signs on behalf of the responsible party, they need proper authorization.",
      },
    ],
  },
];

export default function SS4FormHelperClient({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({
    0: true,
  });
  const [openLines, setOpenLines] = useState<Record<string, boolean>>({});

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleLine = (key: string) => {
    setOpenLines((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <PageHero
        label="Free Tool"
        title="SS-4 Form Helper:"
        titleAccent="Line-by-Line Guide"
        description="Fill out IRS Form SS-4 correctly with our free interactive guide. Every field explained with examples for non-residents -- no signup required."
      />

      {/* Interactive Tool Widget */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-blue)]/10 flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="text-[var(--color-blue)]"
                    >
                      <path
                        d="M4 4h12v12H4V4z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 8h6M7 11h4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-text)]">
                      IRS Form SS-4 — Field-by-Field Guide
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Click each section to expand. Click individual lines for detailed help.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {formSections.map((section, sectionIndex) => (
                    <div
                      key={sectionIndex}
                      className="border border-[var(--color-border)] rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleSection(sectionIndex)}
                        className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
                      >
                        <span className="font-bold text-[var(--color-text)]">
                          {section.group}
                        </span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          className={`text-[var(--color-text-muted)] transition-transform duration-200 ${
                            openSections[sectionIndex] ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M5 8l5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {openSections[sectionIndex] && (
                        <div className="border-t border-[var(--color-border)] bg-white">
                          {section.lines.map((line) => {
                            const lineKey = `${sectionIndex}-${line.line}`;
                            const isOpen = openLines[lineKey];
                            return (
                              <div
                                key={lineKey}
                                className="border-b last:border-b-0 border-[var(--color-border)]"
                              >
                                <button
                                  onClick={() => toggleLine(lineKey)}
                                  className="w-full flex items-center gap-3 p-4 hover:bg-blue-50/50 transition-colors text-left"
                                >
                                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-blue)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-blue)]">
                                    {line.line}
                                  </span>
                                  <span className="flex-1 text-sm font-medium text-[var(--color-text)]">
                                    {line.name}
                                  </span>
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className={`flex-shrink-0 text-[var(--color-text-muted)] transition-transform duration-200 ${
                                      isOpen ? "rotate-180" : ""
                                    }`}
                                  >
                                    <path
                                      d="M5 8l5 5 5-5"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>

                                {isOpen && (
                                  <div className="px-4 pb-4 pl-[4.25rem] space-y-3">
                                    <div>
                                      <p className="text-xs font-bold text-[var(--color-blue)] uppercase tracking-wider mb-1">
                                        What to enter
                                      </p>
                                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                                        {line.instruction}
                                      </p>
                                    </div>
                                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                                      <p className="text-xs font-bold text-[var(--color-blue)] uppercase tracking-wider mb-1">
                                        Example
                                      </p>
                                      <p className="text-sm text-[var(--color-text)] leading-relaxed">
                                        {line.example}
                                      </p>
                                    </div>
                                    <div className="bg-amber-50 border border-amber-100 rounded-lg p-3">
                                      <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
                                        Common mistake
                                      </p>
                                      <p className="text-sm text-[var(--color-text)] leading-relaxed">
                                        {line.mistake}
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                  <p className="text-sm text-[var(--color-text)] leading-relaxed">
                    <strong>Skip the hassle:</strong> Instead of filling out Form SS-4
                    yourself, let ein.so handle everything. We complete the form, file it
                    with the IRS by fax, and deliver your EIN by email.{" "}
                    <Link
                      href="/apply/"
                      className="text-[var(--color-blue)] underline font-bold"
                    >
                      Get started for $49 &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Supporting Content */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">
              Background
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Understanding <span className="font-display gradient-text">IRS Form SS-4</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                IRS Form SS-4, officially titled &quot;Application for Employer Identification Number,&quot; is the document every business entity must submit to receive an EIN from the Internal Revenue Service. The form itself is only one page, but it contains 18 lines that cover everything the IRS needs to know about your business: entity name, address, type of organization, responsible party, reason for applying, and basic employment and tax details. Despite its apparent simplicity, Form SS-4 is the source of a surprising number of errors that delay EIN applications or cause outright rejections.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The form was originally designed for US-based businesses whose owners have Social Security Numbers. It assumes you have a US address, a US tax identification number, and familiarity with IRS entity classification rules. None of these assumptions hold true for non-US residents, which is why the form can be particularly confusing for international applicants. Our line-by-line helper above addresses each field with specific guidance for non-residents, including what to enter when you do not have an SSN or ITIN, how to format a foreign address, and which entity type to select for a US LLC owned by a foreign national.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                There are four ways to submit Form SS-4 to the IRS: online, by fax, by phone, or by mail. The online method is the fastest (instant EIN) but requires an SSN or ITIN, making it unavailable to most non-residents. Fax submission is the most reliable method for non-residents, with processing times of 4-7 business days for standard filing. The phone method is available but impractical due to extremely long hold times on the IRS international line. Mail is the slowest option at 4-6 weeks. For a comprehensive walkthrough, see our <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] underline">SS-4 Form Guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">
              Non-Resident Tips
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              SS-4 Tips for <span className="font-display gradient-text">Non-Residents</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Non-US residents face several unique challenges when filling out Form SS-4. The first and most significant is line 7b, which asks for the responsible party&apos;s SSN, ITIN, or EIN. If you do not have any of these numbers, you cannot use the IRS online application at all. When filing by fax, you can leave this field blank or write &quot;Foreign&quot; or &quot;N/A&quot; and the IRS will still process your application. This is the single most important thing non-residents need to know about Form SS-4.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The second challenge is the address fields. The IRS accepts foreign addresses, but the form was designed with US address formatting in mind. When entering a foreign address, put your street address on line 4a and your city, province/state, postal code, and country on line 4b. Do not try to force your address into the US state and ZIP code format. Write it naturally and include your country name. The IRS processes thousands of international applications and is accustomed to foreign address formats.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Third, pay close attention to line 8a (entity type). If you formed a US LLC, select &quot;LLC&quot; even if you plan to elect S-Corp tax treatment later. The entity type on Form SS-4 should reflect the legal structure of your business, not the tax election. Similarly, if you formed a corporation, select &quot;Corporation&quot; regardless of whether you will be a C-Corp or S-Corp. The S-Corp election is handled separately through Form 2553 and does not affect your SS-4 filing.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Finally, make sure you sign the form on line 18. An unsigned Form SS-4 will be rejected by the IRS, and you will have to resubmit. The signature should be from the responsible party listed on line 7a. If you are using a service like ein.so, we handle the entire process on your behalf -- from completing the form to filing it by fax and following up with the IRS. Learn more about the process in our <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] underline">How to Get an EIN</Link> guide, or go directly to our <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] underline">EIN Without SSN</Link> page if you need an EIN without a Social Security Number.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Related <span className="font-display gradient-text">Resources</span>
            </h2>
            <StaggerContainer className="grid gap-4 sm:grid-cols-2">
              {[
                { href: "/ss4-form-guide/", label: "SS-4 Form Guide", desc: "Comprehensive guide to Form SS-4" },
                { href: "/how-to-get-ein/", label: "How to Get an EIN", desc: "Step-by-step application process" },
                { href: "/ein-without-ssn/", label: "EIN Without SSN", desc: "Get an EIN without a Social Security Number" },
                { href: "/apply/", label: "Apply for Your EIN", desc: "Let ein.so handle it for $49" },
              ].map((link) => (
                <StaggerItem key={link.href}>
                  <Link
                    href={link.href}
                    className="block p-5 rounded-xl border border-[var(--color-border)] bg-white hover:border-[var(--color-blue)] transition-all group"
                  >
                    <p className="font-bold text-[var(--color-text)] group-hover:text-[var(--color-blue)] transition-colors">
                      {link.label}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">
                      {link.desc}
                    </p>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Frequently Asked <span className="font-display gradient-text">Questions</span>
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6"
                >
                  <h3 className="font-bold text-[var(--color-text)] mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
