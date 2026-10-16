import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Monk Mantra",
  description: "Talk to Monk Mantra about marketing and front-desk software for your practice. WhatsApp, email, or book a 30-minute call.",
  alternates: { canonical: "/contact" },
};

const WAYS = [
  { label: "WhatsApp or call", value: SITE.phone, href: SITE.whatsapp },
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "Book a 30-minute call", value: "Pick a slot that suits you", href: SITE.booking },
];

export default function Contact() {
  return (
    <section className="mx-auto grid max-w-[1320px] gap-12 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-10 lg:pt-44">
      <div>
        <h1 className="display text-5xl sm:text-6xl">Talk to us.</h1>
        <p className="mt-6 max-w-md text-lg text-muted">Tell us about your practice and what you want fixed. We reply within one working day.</p>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {WAYS.map((w) => (
            <li key={w.label}>
              <a href={w.href} className="group block py-6">
                <span className="block text-sm text-muted">{w.label}</span>
                <span className="mt-1 block text-xl text-paper group-hover:text-gold">{w.value}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-muted">Monk Mantra, {SITE.city}</p>
      </div>
      <div className="self-start rounded-3xl border border-line bg-ink-2 p-6 sm:p-10">
        <LeadForm source="contact" />
      </div>
    </section>
  );
}
