"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinLookupClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="EIN Lookup Guide"
        title="EIN Lookup:"
        titleAccent="How to Find Any EIN Number"
        description="The IRS does not offer a free public EIN lookup tool. But there are several methods to find any EIN number, whether it belongs to a non-profit, a public company, or your own business. This guide covers every option available in 2026."
      />

      {/* Answer Capsule */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-amber)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[var(--color-amber)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[var(--color-text)] mb-2">The Short Answer</h2>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    There is <strong className="text-[var(--color-text)]">no universal free EIN lookup tool</strong>. The IRS does not maintain a public database of all EINs. You can look up non-profit EINs through the{" "}
                    <strong className="text-[var(--color-text)]">IRS Tax Exempt Organization Search</strong>, public company EINs through{" "}
                    <strong className="text-[var(--color-text)]">SEC EDGAR</strong>, and some business EINs through{" "}
                    <strong className="text-[var(--color-text)]">state business registries</strong>. For your own EIN, check your IRS confirmation letter (CP 575) or call the IRS at{" "}
                    <strong className="text-[var(--color-text)]">800-829-4933</strong>.
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Can You Look Up an EIN Online for Free? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn className="mb-10">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">The Reality</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
                Can You Look Up an EIN <span className="font-display gradient-text">Online for Free?</span>
              </h2>
            </AnimateIn>
            <AnimateIn>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  This is one of the most common questions people ask, and the answer is unfortunately limited. <strong className="text-[var(--color-text)]">The IRS does not operate a universal public EIN lookup database.</strong> Unlike a business name search through your state&apos;s Secretary of State website, there is no single place where you can type in a company name and retrieve its EIN.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  An <Link href="/what-is-ein/" className="text-[var(--color-blue)] underline hover:no-underline">EIN (Employer Identification Number)</Link> is considered sensitive taxpayer information by the IRS. Making all EINs publicly searchable would create significant privacy and fraud risks. As a result, the IRS only makes EINs publicly available in specific circumstances, primarily for tax-exempt non-profit organizations that are required to disclose financial information to the public.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  That said, there are several legitimate methods to find an EIN depending on what type of organization you are looking for. Some methods are completely free, while others may require a small fee or direct outreach to the organization in question. The availability of the EIN depends largely on whether the entity is a non-profit, a publicly traded company, or a private business.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Third-party paid databases do exist, but they are often unreliable. These services scrape public records and compile them into searchable databases, but the data is frequently outdated, incomplete, or inaccurate. We do not recommend relying on paid EIN lookup services when free government sources are available for the entity types they cover.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* 5 Methods to Look Up an EIN */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-16">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Proven Methods</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              5 Methods to <span className="font-display gradient-text">Look Up an EIN</span>
            </h2>
          </AnimateIn>

          <StaggerContainer className="space-y-6 max-w-3xl mx-auto" staggerDelay={0.1}>
            {[
              {
                num: "1",
                title: "IRS Tax Exempt Organization Search (Non-Profits Only)",
                desc: "The IRS maintains a free, searchable database of tax-exempt organizations at apps.irs.gov. You can search by organization name, city, or state to find any 501(c) non-profit's EIN. This database includes charities, foundations, religious organizations, and other tax-exempt entities. It also shows whether an organization's tax-exempt status is current or has been revoked. This is the most reliable free EIN lookup tool available, but it only works for non-profit organizations.",
              },
              {
                num: "2",
                title: "SEC EDGAR (Public Companies Only)",
                desc: "Every publicly traded company in the United States is required to file financial reports with the Securities and Exchange Commission (SEC). These filings, including 10-K annual reports, 10-Q quarterly reports, and 8-K current reports, are available through the SEC's EDGAR database at sec.gov/cgi-bin/browse-edgar. These filings typically include the company's EIN (listed as 'IRS Employer Identification No.' on most forms). Simply search for the company name and open any recent filing to find the EIN on the cover page.",
              },
              {
                num: "3",
                title: "State Business Registries",
                desc: "Many states include a business's EIN in their Secretary of State business registration records. However, this varies significantly by state. Some states display the EIN in online search results, while others do not. States like California, New York, and Texas maintain online business entity search tools, but the availability of EIN data in these results is inconsistent. It is worth checking your state's business registry, but do not rely on it as a guaranteed source.",
              },
              {
                num: "4",
                title: "Ask the Organization Directly",
                desc: "If you need a company's EIN for a legitimate purpose, such as filing a 1099 form or verifying a vendor, you can simply ask the organization directly. Businesses are accustomed to sharing their EIN with vendors, contractors, and partners for tax reporting purposes. Most companies will provide their EIN if you request it through their accounting or finance department. A W-9 form request is the standard way to obtain a company's EIN for tax reporting purposes.",
              },
              {
                num: "5",
                title: "Call the IRS (For Your Own EIN)",
                desc: "If you are looking for your own EIN, not someone else's, you can call the IRS Business & Specialty Tax Line at 800-829-4933. The line is available Monday through Friday, 7 a.m. to 7 p.m. local time. You will need to verify your identity as an authorized person on the account. The IRS can confirm your EIN over the phone and, if needed, send you an official EIN verification letter (Letter 147C) by fax or mail.",
              },
            ].map((method) => (
              <StaggerItem key={method.num}>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-blue)] text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                      {method.num}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">{method.title}</h3>
                      <p className="text-[var(--color-text-muted)] leading-relaxed">{method.desc}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How to Find YOUR OWN EIN */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn className="mb-10">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Lost Your EIN?</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
                How to Find <span className="font-display gradient-text">Your Own EIN</span>
              </h2>
            </AnimateIn>
            <AnimateIn>
              <div className="space-y-4 mb-8">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Losing track of your own EIN is more common than you might think. Businesses change accountants, move offices, or simply misplace paperwork over time. The good news is that once the IRS assigns an EIN to your entity, it is permanent. It does not expire or change. You just need to locate it. Here are the four best ways to recover your own EIN:
                </p>
              </div>
            </AnimateIn>

            <StaggerContainer className="space-y-4" staggerDelay={0.08}>
              {[
                {
                  title: "Check Your CP 575 Confirmation Letter",
                  desc: "When the IRS originally issued your EIN, they sent you a confirmation notice called CP 575. This letter contains your EIN, entity name, and the date it was assigned. If you applied online, you also received an immediate confirmation. Search your email, filing cabinet, or document storage for 'CP 575' or 'EIN confirmation.'",
                },
                {
                  title: "Call the IRS at 800-829-4933",
                  desc: "The IRS Business & Specialty Tax Line can look up your EIN over the phone. You will need to verify your identity. The IRS will ask for the name, address, and other details associated with the EIN. The authorized person (responsible party) listed on the original SS-4 application must be the one to call, or someone with a valid Power of Attorney (Form 2848) on file.",
                },
                {
                  title: "Check Previously Filed Tax Returns",
                  desc: "Your EIN appears on every federal tax return you have filed, including Form 1120 (corporations), Form 1065 (partnerships), Form 1040 Schedule C (sole proprietors), and payroll tax returns (Form 941). If you have copies of any previous tax filings, your EIN will be printed on the first page.",
                },
                {
                  title: "Check Your Bank Account Records",
                  desc: "When you opened a business bank account, your bank required your EIN. Contact your bank and ask them to provide the EIN on file for your business account. Your bank should be able to look this up quickly. This works for any financial institution where you used your EIN to open an account.",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 card-hover">
                    <h3 className="text-base font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* EIN Verification Letter (147C) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn className="mb-10">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Official Verification</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
                How to Get an <span className="font-display gradient-text">EIN Verification Letter</span>
              </h2>
            </AnimateIn>
            <AnimateIn>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  An EIN verification letter, officially known as <strong className="text-[var(--color-text)]">IRS Letter 147C</strong>, is an official document from the IRS that confirms your EIN has been assigned to your specific entity. This letter is different from the original CP 575 confirmation notice you received when your EIN was first issued. The 147C is a verification that can be requested at any time after your EIN has been assigned.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Many banks, payment processors, and financial institutions require a 147C letter when you open a business bank account or apply for merchant services. Some institutions will not accept the original CP 575 letter because they want a more recent verification, especially if the CP 575 is several years old.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  <strong className="text-[var(--color-text)]">How to request a 147C letter:</strong> Call the IRS Business & Specialty Tax Line at <strong className="text-[var(--color-text)]">800-829-4933</strong>, Monday through Friday, 7 a.m. to 7 p.m. local time. Verify your identity as an authorized person on the account. Request the 147C letter and specify whether you want it sent by fax (same-day delivery) or by mail (4-6 weeks). Fax delivery is strongly recommended for speed.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  There is no fee for a 147C letter. The IRS provides this service free of charge. You can request a 147C letter as many times as you need. Keep in mind that only the responsible party listed on the EIN account (or someone with an active Power of Attorney via Form 2848) can request this letter.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Free EIN Lookup for Non-Profits */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn className="mb-10">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Non-Profit EINs</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
                Free EIN Lookup for <span className="font-display gradient-text">Non-Profits</span>
              </h2>
            </AnimateIn>
            <AnimateIn>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The <strong className="text-[var(--color-text)]">IRS Tax Exempt Organization Search</strong> is the only truly free, government-operated EIN lookup tool available to the public. It is available at <strong className="text-[var(--color-text)]">apps.irs.gov/app/eos/</strong> and covers all organizations that have been granted tax-exempt status under Section 501(c) of the Internal Revenue Code.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  This tool allows you to search by organization name, city, state, or country. The search results include the organization&apos;s EIN, name, city, state, deductibility status (whether donations to the organization are tax-deductible), and the type of tax exemption (501(c)(3), 501(c)(4), etc.). You can also view the organization&apos;s most recent Form 990 filings, which provide detailed financial information.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  This is particularly useful if you need to verify a charity before making a donation, confirm a non-profit&apos;s tax-exempt status for grant applications, or obtain the EIN for a non-profit you are doing business with. The IRS Tax Exempt Organization Search is the most reliable free method available.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* EIN Lookup for Public Companies */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn className="mb-10">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Public Companies</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
                EIN Lookup for <span className="font-display gradient-text">Public Companies</span>
              </h2>
            </AnimateIn>
            <AnimateIn>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  If you need the EIN for a publicly traded company, the <strong className="text-[var(--color-text)]">SEC EDGAR database</strong> is your best resource. Every public company in the United States is required to file periodic reports with the Securities and Exchange Commission, and these filings are freely accessible at <strong className="text-[var(--color-text)]">sec.gov/cgi-bin/browse-edgar</strong>.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  To find a company&apos;s EIN on EDGAR, search for the company by name or ticker symbol. Open any recent filing. A 10-K (annual report) or 10-Q (quarterly report) is usually the easiest. On the cover page of these filings, you will find the field labeled &quot;IRS Employer Identification No.&quot; with the company&apos;s <span className="font-semibold">9-digit EIN</span>.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  This method works for any company that files with the SEC, including large corporations, publicly traded partnerships, and real estate investment trusts (REITs). It does not work for private companies, LLCs, or sole proprietorships that are not required to file with the SEC.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Why You Might Need to Look Up an EIN */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-16">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Common Scenarios</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Why You Might Need to <span className="font-display gradient-text">Look Up an EIN</span>
            </h2>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.08}>
            {[
              {
                title: "Filing a 1099 Form",
                desc: "If you paid a contractor or vendor more than $600 in a year, you need their EIN (or SSN) to file a 1099-NEC or 1099-MISC with the IRS.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                ),
              },
              {
                title: "Verifying a Charity",
                desc: "Before donating to a non-profit, you may want to verify their tax-exempt status and confirm their EIN matches IRS records.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
              },
              {
                title: "Opening a Bank Account",
                desc: "Banks require your EIN to open a business account. If you lost your EIN, you need to recover it before the bank will proceed.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                  </svg>
                ),
              },
              {
                title: "Due Diligence Research",
                desc: "Investors, lenders, and business partners often verify a company's EIN as part of standard due diligence before entering a business relationship.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                ),
              },
              {
                title: "Grant Applications",
                desc: "Government and private grant applications almost always require the applicant organization's EIN as part of the application process.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
              },
              {
                title: "Tax Return Preparation",
                desc: "Tax professionals and bookkeepers need EINs to accurately prepare business tax returns, payroll filings, and information returns.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] card-hover h-full">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-blue)]/10 flex items-center justify-center text-[var(--color-blue)] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Need Your Own EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn className="mb-10">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Get Your EIN</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
                Need Your Own <span className="font-display gradient-text">EIN?</span>
              </h2>
            </AnimateIn>
            <AnimateIn>
              <div className="space-y-4 mb-8">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  If you are not looking up an existing EIN but instead need to <strong className="text-[var(--color-text)]">obtain a new EIN for your business</strong>, the process is straightforward, but it depends on whether you have a US-based Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN).
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  US residents with an SSN or ITIN can apply directly through the IRS online EIN Assistant at no cost. However, <strong className="text-[var(--color-text)]">non-US residents without an SSN or ITIN cannot use the online system</strong>. Instead, they must file Form SS-4 with the IRS by fax or mail, a process that can be confusing and error-prone, especially if you are unfamiliar with IRS forms and terminology.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  That is exactly what <strong className="text-[var(--color-text)]">ein.so</strong> handles. For <strong className="text-[var(--color-text)]">$49</strong>, we prepare and file your Form SS-4 with the IRS on your behalf. We handle the entire process, from form preparation to IRS submission to delivering your EIN by email. No SSN required, no confusion, no delays from filing errors.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn className="text-center">
              <Link
                href="/apply/"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-blue)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--color-blue-light)] transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--color-blue)]/30"
              >
                Apply for an EIN · $49
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-16">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              EIN Lookup <span className="font-display gradient-text">FAQ</span>
            </h2>
          </AnimateIn>

          <StaggerContainer className="space-y-4 max-w-3xl mx-auto" staggerDelay={0.08}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-base font-bold text-[var(--color-text)] mb-2">{faq.q}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{faq.a}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateIn className="text-center mt-10">
            <p className="text-[var(--color-text-muted)]">
              The IRS Tax Exempt Organization Search at apps.irs.gov is the best free EIN lookup method available to the public.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Your Own EIN? We Get It for You."
        subtitle="No SSN required. $49 flat fee. Delivered by email in days, not weeks."
      />
    </>
  );
}
