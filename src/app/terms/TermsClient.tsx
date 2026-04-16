"use client";

import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";

export default function TermsClient() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of"
        titleAccent="Service"
        description="Terms and conditions for using ein.so EIN application services."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto prose prose-slate">
              <p className="text-sm text-[var(--color-text-muted)] mb-8">Last updated: April 13, 2026</p>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">What Service Does ein.so Provide?</h2>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Third-Party SS-4 Filing Service</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                ein.so is a third-party filing service that helps non-US residents obtain an Employer Identification Number (EIN) from the IRS. We complete and file IRS Form SS-4 on your behalf by fax and deliver the resulting EIN to you by email.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">We Are Not the IRS</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                <strong className="text-[var(--color-text)]">ein.so is not the IRS.</strong> We are not affiliated with, endorsed by, or a division of the Internal Revenue Service or any government agency. The IRS issues EINs at no charge to applicants who file Form SS-4 directly. Our service fee covers the preparation, filing, and follow-up work we perform on your behalf.
              </p>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">What Are the Service Packages?</h2>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Standard $49 and Express $97</h3>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-muted)] mb-8">
                <li><strong className="text-[var(--color-text)]">Standard EIN &mdash; $49:</strong> Form SS-4 preparation, IRS fax submission, EIN delivery by email. Estimated turnaround: 5&ndash;7 business days after IRS receipt.</li>
                <li><strong className="text-[var(--color-text)]">Express EIN &mdash; $97:</strong> Everything in Standard plus priority processing, phone follow-up with IRS, and WhatsApp status updates. Estimated turnaround: 2&ndash;3 business days after IRS receipt.</li>
              </ul>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">What Are the Processing Time Expectations?</h2>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Estimates Based on IRS Response Times</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                Processing times are estimates based on current IRS response times and are not guaranteed. The IRS controls all processing timelines. Delays may occur due to IRS backlogs, incomplete information, or government holidays. ein.so is not responsible for delays caused by the IRS. We will keep you informed of your application status throughout the process.
              </p>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">What Is the Refund Policy?</h2>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Full Refund if We Cause a Rejection</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                We offer a full refund if we are unable to file your Form SS-4 with the IRS for any reason within our control. Refund eligibility:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-muted)] mb-8">
                <li><strong className="text-[var(--color-text)]">Full refund:</strong> If we fail to submit your application to the IRS, or if we made an error that caused rejection.</li>
                <li><strong className="text-[var(--color-text)]">No refund:</strong> If the IRS rejects your application due to incorrect information you provided, or if you already received your EIN.</li>
                <li><strong className="text-[var(--color-text)]">Partial refund (Express to Standard):</strong> If Express processing times exceed 5 business days through no fault of yours, you may request a refund of the Express premium ($48).</li>
              </ul>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                To request a refund, contact us at support@ein.so or via WhatsApp within 30 days of payment. Refunds are processed through Stripe within 5&ndash;10 business days.
              </p>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">What Are Your Responsibilities?</h2>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Accurate Information and Timely Responses</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">By using our service, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-muted)] mb-8">
                <li>Provide accurate and truthful information on your application</li>
                <li>Respond to our requests for additional information in a timely manner</li>
                <li>Use the EIN for lawful business purposes only</li>
                <li>Not hold ein.so responsible for IRS processing delays</li>
                <li>Acknowledge that ein.so is a third-party service, not a government agency</li>
              </ul>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">What Are the Limitations of Liability?</h2>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Document Filing Service -- Not Legal or Tax Advice</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                ein.so provides a document preparation and filing service. We are not a law firm, CPA firm, or licensed tax advisor. We do not provide legal or tax advice. For questions about tax obligations, consult a licensed tax professional. Our total liability for any claim arising from our service is limited to the amount you paid for the service.
              </p>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">Intellectual Property</h2>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">All Content Protected by Copyright</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                All content on ein.so &mdash; including text, graphics, logos, and software &mdash; is the property of ein.so and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works from our content without written permission.
              </p>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">Changes to These Terms</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                We may update these terms from time to time. Continued use of our service after changes constitutes acceptance of the revised terms. We will post the updated terms on this page with a revised &quot;Last updated&quot; date.
              </p>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">Contact Us</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For questions about these terms, contact us at <a href="mailto:support@ein.so" className="text-[var(--color-blue)] hover:underline">support@ein.so</a> or via <a href="https://wa.me/8801750278508" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] hover:underline">WhatsApp</a>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
