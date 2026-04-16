"use client";

import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";

export default function PrivacyClient() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy"
        titleAccent="Policy"
        description="How ein.so collects, uses, and protects your personal information."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto prose prose-slate">
              <p className="text-sm text-[var(--color-text-muted)] mb-8">Last updated: April 13, 2026</p>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">What Information Do We Collect?</h2>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Information You Provide Directly</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                When you use ein.so, we collect information you provide directly to us. This includes your name, email address, phone number, country of residence, and business details you submit through our application form. We also collect your payment information through Stripe, our payment processor &mdash; we do not store your credit card details on our servers.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Information Collected Automatically</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                We automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed. We use this information to improve our website and understand how visitors use our service.
              </p>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">How Do We Use Your Information?</h2>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">7 Specific Ways We Use Your Data</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-muted)] mb-8">
                <li>Process your EIN application and file Form SS-4 with the IRS on your behalf</li>
                <li>Communicate with you about your application status via email or WhatsApp</li>
                <li>Process payments through Stripe</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website, services, and user experience</li>
                <li>Send you service-related notifications (not marketing emails)</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">Do We Share Your Information?</h2>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">We Never Sell Your Data</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-muted)] mb-8">
                <li><strong className="text-[var(--color-text)]">IRS:</strong> We submit your Form SS-4 to the Internal Revenue Service as part of the EIN application process. This is the core service you are paying for.</li>
                <li><strong className="text-[var(--color-text)]">Stripe:</strong> Our payment processor handles all credit card transactions. Stripe&apos;s privacy policy governs their handling of your payment data.</li>
                <li><strong className="text-[var(--color-text)]">Vercel:</strong> Our website hosting provider. They process server logs in accordance with their privacy policy.</li>
                <li><strong className="text-[var(--color-text)]">Legal requirements:</strong> We may disclose information if required by law, regulation, or legal process.</li>
              </ul>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">How Do We Protect Your Information?</h2>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">HTTPS Encryption and PCI DSS Level 1 Compliance</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                We implement industry-standard security measures to protect your personal information. Our website uses HTTPS encryption for all data transmission. Payment processing is handled entirely by Stripe, which is PCI DSS Level 1 certified. We limit access to personal information to team members who need it to process your application.
              </p>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">Cookies and Tracking</h2>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Essential Cookies Only -- No Advertising Cookies</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                We use essential cookies to ensure our website functions properly. We may use analytics tools to understand website usage patterns. We do not use cookies for advertising or retargeting purposes. You can configure your browser to refuse cookies, though some features of our website may not function properly.
              </p>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">Data Retention</h2>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">7-Year Minimum for IRS-Related Records</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                We retain your application data for as long as necessary to provide our services and comply with legal obligations. IRS-related records are retained for a minimum of 7 years as required by US tax law. You may request deletion of your personal information by contacting us at support@ein.so, subject to our legal retention requirements.
              </p>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">Your Rights</h2>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Access, Correct, or Delete Your Data</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-muted)] mb-8">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt out of non-essential communications</li>
              </ul>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">Children&apos;s Privacy</h2>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">No Data Collection From Users Under 18</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you are a parent and believe your child has provided us with personal information, contact us at support@ein.so.
              </p>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">Changes to This Policy</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                We may update this privacy policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a revised &quot;Last updated&quot; date.
              </p>

              <h2 className="text-2xl font-extrabold text-[var(--color-text)] mb-4">Contact Us</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If you have questions about this privacy policy, contact us at <a href="mailto:support@ein.so" className="text-[var(--color-blue)] hover:underline">support@ein.so</a> or via <a href="https://wa.me/8801750278508" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] hover:underline">WhatsApp</a>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
