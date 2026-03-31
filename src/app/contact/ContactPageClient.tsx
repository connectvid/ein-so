"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { SITE } from "@/lib/constants";
import Link from "next/link";

export default function ContactPageClient() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Get in"
        titleAccent="Touch"
        description="Have a question about your EIN application? We're here to help. Reach out through WhatsApp or email."
      />

      {/* Contact Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-16">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Reach Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Choose How to <span className="font-display gradient-text">Connect</span>
            </h2>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto" staggerDelay={0.15}>
            {/* WhatsApp Card */}
            <StaggerItem>
              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent("Hi, I need help getting an EIN number.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8 card-hover h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">WhatsApp</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                    Our primary support channel. Chat with us directly for the fastest response.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#25D366]">
                    Message Us on WhatsApp
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </StaggerItem>

            {/* Email Card */}
            <StaggerItem>
              <a href={`mailto:${SITE.email}`} className="block h-full">
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8 card-hover h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-blue)]/10 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-[var(--color-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Email</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                    Prefer email? Send us a message and we&apos;ll get back to you promptly.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-blue)]">
                    {SITE.email}
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateIn>
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-amber)]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-amber)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-4">
                We Respond Within <span className="font-display gradient-text">Hours</span>, Not Days
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-xl mx-auto">
                Whether you have a question about the EIN process, need help with your application, or want to check on your status — we&apos;re fast. Most messages are answered within a few hours during business hours.
              </p>
            </AnimateIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6" staggerDelay={0.1}>
              {[
                { label: "WhatsApp", value: "< 2 hours", note: "Primary channel" },
                { label: "Email", value: "< 12 hours", note: "For detailed inquiries" },
                { label: "Application Updates", value: "Real-time", note: "Via WhatsApp" },
              ].map((item) => (
                <StaggerItem key={item.label}>
                  <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 card-hover">
                    <p className="text-2xl font-extrabold text-[var(--color-text)] mb-1">{item.value}</p>
                    <p className="text-sm font-bold text-[var(--color-blue)] mb-1">{item.label}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{item.note}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-text)]">
              Looking for Something Else?
            </h2>
          </AnimateIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.05}>
            {[
              { label: "Apply for EIN", href: "/apply/" },
              { label: "What Is an EIN?", href: "/what-is-ein/" },
              { label: "FAQ", href: "/faq/" },
              { label: "About Us", href: "/about/" },
            ].map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-blue)]/30 hover:text-[var(--color-blue)] transition-all"
                >
                  {link.label}
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Your EIN?"
        subtitle="Start your application today. Just $49, no SSN required."
      />
    </>
  );
}
