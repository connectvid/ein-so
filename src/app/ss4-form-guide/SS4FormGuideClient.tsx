"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function SS4FormGuideClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Step-by-Step Guide"
        title="IRS Form SS-4 Guide:"
        titleAccent="Line-by-Line Instructions (2026)"
        description="A complete walkthrough of every field on IRS Form SS-4, the official Application for Employer Identification Number. Includes special instructions for non-residents who do not have an SSN."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>IRS Form SS-4 is the one-page application you submit to get an Employer Identification Number (EIN). You fill in your legal name, entity type, responsible party details, business address, and reason for applying, then fax it to the IRS at 855-215-1627. The IRS returns your EIN within 4-7 business days.</strong>{" "}
                  This guide walks through every line of the form so you know exactly what to enter. Non-residents who lack an SSN can still complete this form -- we cover the specific adjustments you need to make.
                </p>
              </div>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Who Needs to File Form SS-4?</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Form SS-4 is the only way for non-US residents without an SSN or ITIN to apply for an EIN, since the IRS online application requires one of those numbers. Over 400,000 fax-based SS-4 forms are processed by the IRS each year. The form itself is straightforward, but certain lines cause confusion -- especially for non-resident applicants and first-time business owners. This guide eliminates that confusion by explaining every field in plain language.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Filing Options and Costs</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                If you prefer to skip the paperwork entirely, <Link href="/apply/" className="text-[var(--color-blue)] underline">ein.so handles the entire SS-4 filing process</Link> for $49 (Standard, 14 business days) or $97 (Express, 7 business days). We complete the form, fax it to the IRS, and deliver your EIN by email. For those who want to do it themselves, read on for the complete line-by-line breakdown. You can also review our broader <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] underline">How to Get an EIN</Link> guide for all three application methods.
              </p>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">SS-4 Filing Method Comparison</h3>
              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Factor</th><th className="px-4 py-3 font-semibold">Fax (855-215-1627)</th><th className="px-4 py-3 font-semibold">Phone (267-941-1099)</th><th className="px-4 py-3 font-semibold">Mail (Cincinnati, OH)</th></tr></thead>
                  <tbody>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Processing Time</td><td className="px-4 py-3 text-[var(--color-text-muted)]">4-7 business days</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Same day (if connected)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">4-6 weeks</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">SSN Required?</td><td className="px-4 py-3 text-[var(--color-text-muted)]">No</td><td className="px-4 py-3 text-[var(--color-text-muted)]">No</td><td className="px-4 py-3 text-[var(--color-text-muted)]">No</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Cost (DIY)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Free + fax fees</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Free + intl call fees</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Free + postage</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Cost (ein.so)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">$49 Standard / $97 Express</td><td className="px-4 py-3 text-[var(--color-text-muted)]">N/A</td><td className="px-4 py-3 text-[var(--color-text-muted)]">N/A</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Availability</td><td className="px-4 py-3 text-[var(--color-text-muted)]">24/7</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Mon-Fri, 6 AM - 11 PM ET</td><td className="px-4 py-3 text-[var(--color-text-muted)]">24/7</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Hold Times</td><td className="px-4 py-3 text-[var(--color-text-muted)]">None</td><td className="px-4 py-3 text-[var(--color-text-muted)]">30-120 minutes typical</td><td className="px-4 py-3 text-[var(--color-text-muted)]">None</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Best For</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Non-residents without SSN</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Urgent same-day needs</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Not recommended</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">SS-4 Line-by-Line Quick Reference</h3>
              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] mb-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Line</th><th className="px-4 py-3 font-semibold">Field Name</th><th className="px-4 py-3 font-semibold">What to Enter</th><th className="px-4 py-3 font-semibold">Non-Resident Tip</th></tr></thead>
                  <tbody>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">1</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Legal Name of Entity</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Exact name from Articles of Organization/Incorporation</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Use name on state filing, not passport name</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">2</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Trade Name / DBA</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Business operating name if different from Line 1</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Leave blank if no DBA registered</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">3</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Executor/Trustee Name</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Name of executor (estate) or trustee (trust)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Leave blank for LLCs/corps</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">4a-4b</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Mailing Address</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Street, city, state, ZIP for IRS correspondence</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Foreign addresses accepted; include country</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">5a-5b</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Street Address (if different)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Physical business location</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Leave blank if no US office</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">6</td><td className="px-4 py-3 text-[var(--color-text-muted)]">County and State</td><td className="px-4 py-3 text-[var(--color-text-muted)]">County and state of principal business</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Use registered agent state (e.g., Wyoming)</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">7a</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Responsible Party Name</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Full legal name of individual who controls entity</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Must match passport exactly</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">7b</td><td className="px-4 py-3 text-[var(--color-text-muted)]">SSN/ITIN of Responsible Party</td><td className="px-4 py-3 text-[var(--color-text-muted)]">9-digit SSN or ITIN</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Write &quot;N/A&quot; or &quot;Foreign&quot;; attach passport copy</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">8a</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Type of Entity</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Check one box: LLC, Corporation, Partnership, etc.</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Match your state formation type</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">8b</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Number of LLC Members</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Enter &quot;1&quot; for single-member; total for multi-member</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Required only for LLCs</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">8c</td><td className="px-4 py-3 text-[var(--color-text-muted)]">State/Country of LLC Organization</td><td className="px-4 py-3 text-[var(--color-text-muted)]">State or foreign country where LLC was formed</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Enter US state (e.g., &quot;Wyoming&quot;) even if you live abroad</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">9a</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Reason for Applying</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Check: Started new business, Banking purpose, etc.</td><td className="px-4 py-3 text-[var(--color-text-muted)]">&quot;Started new business&quot; is the most common choice</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">10</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Date Business Started</td><td className="px-4 py-3 text-[var(--color-text-muted)]">MM/DD/YYYY of state registration</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Use date on Articles of Organization</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">11</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Closing Month of Accounting Year</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Enter &quot;December&quot; (standard for 95%+ of businesses)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Always use December unless advised otherwise</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">12-13</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Wages and Employees</td><td className="px-4 py-3 text-[var(--color-text-muted)]">First wage date; expected employee count (enter &quot;0&quot; if none)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Write &quot;N/A&quot; for Line 12 if no employees</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">14-15</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Principal Activity</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Check activity category; describe business in 1 sentence</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Be specific: &quot;online retail sales&quot; not &quot;business&quot;</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">16-17</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Previous EIN Application</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Check &quot;No&quot; for new entities; enter prior EIN if &quot;Yes&quot;</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Refers to the entity, not you personally</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">18</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Third-Party Designee</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Name, address, fax of authorized recipient</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Check &quot;Yes&quot; if using ein.so; &quot;No&quot; if filing yourself</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Signature</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Sign, Date, Title, Phone</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Responsible party signs; title = Member, President, etc.</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Include international phone with country code</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Lines 1-3: Legal Name and Trade Name */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Lines 1-3</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Do You Enter on Lines 1-3 of <span className="font-display gradient-text">Form SS-4?</span>
            </h2>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Line 1: Legal Name of Entity</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 1 -- Legal Name of Entity:</strong> Enter the exact legal name of your business as registered with your state. For an LLC, this is the name on your Articles of Organization (for example, &quot;Acme Trading LLC&quot;). For a corporation, it is the name on your Articles of Incorporation. For a sole proprietor, enter your full legal name as it appears on your passport or government ID.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Line 2: Trade Name / DBA</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 2 -- Trade Name / DBA:</strong> If your business operates under a different name than your legal name, enter it here. For example, if your LLC is &quot;Acme Trading LLC&quot; but you do business as &quot;Acme Goods,&quot; enter &quot;Acme Goods&quot; on Line 2. If you do not have a trade name, leave this line blank.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Line 3: Executor or Trustee Name</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 3 -- Executor/Trustee Name:</strong> This line is only for estates and trusts. If you are applying for an EIN for an estate, enter the executor&apos;s or administrator&apos;s name. For a trust, enter the trustee&apos;s name. For all other entity types (LLCs, corporations, sole proprietors, partnerships), leave Line 3 blank.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Lines 4-6: Mailing and Street Address */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Lines 4-6</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Do You Enter on Lines 4-6 of <span className="font-display gradient-text">Form SS-4?</span>
            </h2>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Lines 4a-4b: Mailing Address</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Lines 4a-4b -- Mailing Address:</strong> Enter the address where you want the IRS to send correspondence. This can be a US address or a foreign address. Non-residents can use their home address abroad -- the IRS accepts international addresses on Form SS-4. Include your street address, city, state/province, country, and postal code.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Lines 5a-5b: Street Address</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Lines 5a-5b -- Street Address (if different):</strong> If your physical business location is different from your mailing address, enter it here. If your business does not have a separate physical location (common for non-residents and online businesses), leave Lines 5a-5b blank. The IRS will use the mailing address from Lines 4a-4b.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Line 6: County and State</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 6 -- County and State:</strong> Enter the county and state where your principal business is located. Non-residents who do not have a US business location can enter the state where their registered agent is located or the state where their LLC/corporation is registered. For example, if you formed a Wyoming LLC, enter &quot;Wyoming&quot; on Line 6.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Lines 7a-7b: Responsible Party */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Lines 7a-7b</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Do You Enter on Lines 7a-7b of <span className="font-display gradient-text">Form SS-4?</span>
            </h2>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Line 7a: Responsible Party Name</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 7a -- Name of Responsible Party:</strong> The IRS requires every EIN application to identify a &quot;responsible party&quot; -- an individual (not an entity) who controls, manages, or directs the entity and the disposition of its funds and assets. For a single-member LLC, this is the sole member. For a corporation, it is the president or CEO. For a partnership, it is a managing partner.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Line 7b: SSN, ITIN, or EIN</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 7b -- SSN, ITIN, or EIN of Responsible Party:</strong> This is the line that causes the most confusion for non-residents. If you have an SSN or ITIN, enter it here. If you are a non-resident without either number, write &quot;N/A&quot; or &quot;Foreign&quot; on this line. The IRS will still process your application -- this is one of the key advantages of the fax method over the online application, which requires a valid SSN or ITIN.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Non-residents should attach a copy of their passport to the faxed SS-4 form to help the IRS verify the responsible party&apos;s identity. While not strictly required, including a passport copy reduces the chance of delays or additional follow-up requests from the IRS. For more on how non-residents navigate this process, see our <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] underline">EIN Without SSN</Link> guide.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Lines 8a-8c: Entity Type */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Lines 8a-8c</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Do You Enter on Lines 8a-8c of <span className="font-display gradient-text">Form SS-4?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 8a -- Type of Entity:</strong> Check the box that matches your entity type. The options include: Sole Proprietor, Partnership, Corporation (including S-Corp election), Personal Service Corp, Church or Church-Controlled Organization, Other Nonprofit Organization, Trust, Estate, Plan Administrator, and Limited Liability Company. Only check one box.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 8b -- Number of LLC Members:</strong> If you checked &quot;Limited Liability Company&quot; on Line 8a, you must enter the number of members in your LLC. A single-member LLC enters &quot;1.&quot; A multi-member LLC enters the total number of members. This information determines how the IRS classifies your LLC for tax purposes -- single-member LLCs are disregarded entities by default, while multi-member LLCs are treated as partnerships.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 8c -- State/Foreign Country (for LLC):</strong> If you are an LLC, enter the state or foreign country where your LLC was organized. For example, &quot;Wyoming&quot; or &quot;Delaware.&quot; If you formed your LLC in a foreign country, enter the country name. This line helps the IRS identify which state&apos;s LLC laws govern your entity.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Lines 9-10: Reason and Start Date */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Lines 9-10</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Do You Enter on Lines 9-10 of <span className="font-display gradient-text">Form SS-4?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 9a -- Reason for Applying:</strong> Check the box that best describes why you are applying for an EIN. The most common reasons are &quot;Started new business&quot; (for newly formed entities), &quot;Hired employees&quot; (if you already have a business and are adding your first employee), and &quot;Banking purpose only&quot; (for entities that need an EIN solely to open a bank account). Choose the most accurate option for your situation.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 9b -- Type of Entity (if &quot;Other&quot;):</strong> If you checked &quot;Other&quot; on Line 9a, specify the reason here. Common entries include &quot;Compliance with IRS withholding regulations&quot; and &quot;Required to have an EIN for payment processing.&quot; Most applicants will not need to use this line.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 10 -- Date Business Started:</strong> Enter the date your business began or was acquired. For newly formed entities, this is the date your LLC or corporation was officially registered with the state. If you are applying for an EIN before your business officially starts, enter the expected start date. Use the MM/DD/YYYY format.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Lines 11-17: Business Details */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Lines 11-17</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Do You Enter on Lines 11-17 of <span className="font-display gradient-text">Form SS-4?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 11 -- Closing Month of Accounting Year:</strong> Most businesses use December (12) as their fiscal year-end. Enter &quot;December&quot; unless your business uses a different fiscal year. If you are unsure, use December -- it is the standard choice and simplifies tax filing.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 12 -- First Date Wages Paid:</strong> If you have employees or plan to hire them, enter the date you first paid (or expect to pay) wages. If you do not have and do not plan to hire employees, write &quot;N/A.&quot; <strong className="text-[var(--color-text)]">Line 13 -- Highest Number of Employees Expected:</strong> Enter the maximum number of employees you expect to have in the next 12 months across three categories: agricultural, household, and other. If you do not plan to hire employees, enter &quot;0&quot; in all categories.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 14 -- Check One Box for Principal Activity:</strong> Select the category that best describes your business: construction, real estate, manufacturing, transportation, finance, health care, accommodation/food, wholesale, retail, or other. <strong className="text-[var(--color-text)]">Line 15 -- Describe Principal Business:</strong> Write a brief description of what your business does, such as &quot;online retail sales&quot; or &quot;software development consulting.&quot;
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 16 -- Has the applicant ever applied for an EIN before?:</strong> Check &quot;Yes&quot; if this entity (not you personally) has previously applied for an EIN. If you are applying for a brand-new entity, check &quot;No.&quot; <strong className="text-[var(--color-text)]">Line 17 -- Previous EIN:</strong> If you checked &quot;Yes&quot; on Line 16, enter the previous EIN here. Otherwise, leave it blank.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Line 18 and Signature: Third-Party Designee */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Line 18 & Signature</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Do You Enter on Line 18 and the Signature Section of <span className="font-display gradient-text">Form SS-4?</span>
            </h2>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Line 18: Third-Party Designee</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Line 18 -- Third-Party Designee:</strong> If you want to authorize someone else to receive your EIN on your behalf, check &quot;Yes&quot; and fill in the designee&apos;s name, address, telephone number, and fax number. This is the line that allows services like ein.so to file on your behalf and receive the EIN directly from the IRS. If you are filing the form yourself, check &quot;No&quot; and provide your own fax number so the IRS can return your EIN to you.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Signature and Date</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Signature Section:</strong> The responsible party named on Line 7a (or an authorized delegate) must sign and date the form. Print the signer&apos;s name and title below the signature. The title should match your role in the entity -- &quot;Member&quot; for an LLC, &quot;President&quot; for a corporation, &quot;General Partner&quot; for a partnership, &quot;Trustee&quot; for a trust, or &quot;Executor&quot; for an estate. Include a daytime phone number and fax number.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                After signing, fax the completed form to the IRS at <strong className="text-[var(--color-text)]">855-215-1627</strong>. Keep a copy for your records. The IRS will fax your EIN confirmation back to the fax number you provided. Processing takes 4-7 business days. If you do not want to handle the fax process yourself, <Link href="/apply/" className="text-[var(--color-blue)] underline">ein.so files your SS-4 for $49 (Standard) or $97 (Express)</Link>. For details on the overall EIN application process, see our <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] underline">How to Get an EIN</Link> guide or our dedicated <Link href="/ein-processing-time/" className="text-[var(--color-blue)] underline">EIN Processing Time</Link> page.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ Section */}
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

      <CTASection />
    </>
  );
}
