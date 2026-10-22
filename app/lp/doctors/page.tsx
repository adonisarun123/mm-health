import type { Metadata } from "next";
import Image from "next/image";
import { LpLeadForm } from "@/components/LpLeadForm";
import { PRICE, SITE } from "@/lib/site";

/**
 * Ads landing page for individual doctors (Google / Meta campaigns). No site navigation,
 * one offer, one form. Kept out of the index so it never competes with /healthcare-marketing/doctors.
 */
export const metadata: Metadata = {
  title: "Make your expertise more visible",
  description:
    "Personal websites, easier appointments and a consistent professional identity for doctors. Request a free visibility review from Monk Mantra.",
  alternates: { canonical: "/lp/doctors" },
  robots: { index: false, follow: false },
};

const LP_EMAIL = "arun@monkmantra.com";

function Check() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-0.5 size-5 shrink-0 stroke-gold" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="m8 12 3 3 5-6" />
    </svg>
  );
}

function WhatsApp({ className = "size-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-4-1L3 20l1.2-4.5A8.4 8.4 0 1 1 21 11.5z" />
    </svg>
  );
}

const PILLARS = [
  {
    title: "Your own website",
    body: "Your profile, qualifications, services and patient resources in a responsive website.",
    icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 13h6M7 16h4" /></>,
  },
  {
    title: "Appointments made simpler",
    body: "Manage requests, reschedule visits, set clinic hours and block unavailable dates.",
    icon: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4M8 14h2M12 14h2M16 14h2M8 17h2M12 17h2" /></>,
  },
  {
    title: "A recognisable professional brand",
    body: "One clear voice and visual identity across your website and social profiles.",
    icon: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></>,
  },
];

const ROUTINE = [
  { step: "Check", body: "Site health, search visibility and enquiry forms", tint: "bg-mint", icon: <><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 4.5-5" /></> },
  { step: "Update", body: "Clinic information, content and relevant technology", tint: "bg-ink-2", icon: <><path d="M20 12a8 8 0 1 1-2.3-5.7" /><path d="M20 4v5h-5" /></> },
  { step: "Improve", body: "Priority pages and new opportunities", tint: "bg-mint", icon: <><path d="M4 18V6M4 18h16" /><path d="m7 14 4-4 3 3 5-6" /><path d="M16 7h3v3" /></> },
  { step: "Review", body: "Progress and the next month's plan", tint: "bg-ink-2", icon: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4M8.5 11l2 2 3.5-4" /></> },
];

const FIND = [
  { k: "SEO", label: "Search engines", body: "Strengthen discovery in search results." },
  { k: "AEO", label: "Answer engines", body: "Answer patient questions clearly." },
  { k: "GEO", label: "Generative AI", body: "Help AI systems find and understand you." },
];

export default function DoctorsLandingPage() {
  return (
    <div className="bg-ink text-paper">
      {/* Minimal chrome: logo, phone, one CTA. No navigation on a paid click. */}
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-10">
          <a href="/" aria-label="Monk Mantra home" className="shrink-0 py-1.5">
            <Image src="/logo.png" alt="Monk Mantra" width={120} height={36} sizes="120px" priority className="h-8 w-auto lg:h-9" />
          </a>
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="hidden rounded-full bg-mint px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold md:inline-block">Healthcare MarTech</span>
            <a href={SITE.phoneHref} className="hidden font-semibold text-paper sm:inline-block">{SITE.phone}</a>
            <a href="#review" className="btn-primary px-5 text-sm">Request a free review</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="wash">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-10 lg:pb-28 lg:pt-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">For doctors, clinics and hospitals</p>
            <h1 className="display mt-5 max-w-[12ch] text-5xl sm:text-6xl lg:text-7xl">Make your expertise more visible.</h1>
            <p className="mt-6 max-w-lg text-xl text-paper sm:text-2xl">Personal websites. Easier appointments. A consistent professional identity.</p>
            <p className="mt-4 max-w-lg text-lg text-muted">In a crowded healthcare market, help patients understand your expertise and approach to care.</p>
            <ul className="mt-8 space-y-3 text-paper">
              <li className="flex gap-3"><Check />Your own responsive website, built around your profile and services</li>
              <li className="flex gap-3"><Check />Appointment requests your clinic controls</li>
              <li className="flex gap-3"><Check />One voice and visual identity across web and social</li>
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href={SITE.whatsapp} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-paper/80 bg-white px-6 font-semibold text-paper">
                <WhatsApp className="size-5 text-[#1f9d55]" />WhatsApp us
              </a>
              <p className="text-sm text-muted">45+ doctors served in the last 18 months</p>
            </div>
          </div>

          <div id="review" className="card scroll-mt-24 p-6 sm:p-8">
            <h2 className="display text-2xl sm:text-3xl">Request a free visibility review</h2>
            <p className="mt-3 text-muted">We look at your current website, search presence and enquiry flow, and send you a short plan. No obligation.</p>
            <div className="mt-6"><LpLeadForm /></div>
          </div>
        </div>
      </section>

      {/* Built by our team */}
      <section className="border-y border-line">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-x-12 gap-y-3 px-4 py-6 sm:px-6 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold">Built by our team</span>
          <a href="https://thedoctorindex.com" className="text-lg font-bold text-paper hover:text-gold">thedoctorindex.com</a>
          <a href={SITE.meddeskos} className="text-lg font-bold text-paper hover:text-gold">meddeskos.com</a>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="rounded-3xl bg-mint px-7 py-8 sm:px-10">
          <h2 className="display text-3xl sm:text-4xl">Healthcare MarTech experts.</h2>
          <p className="mt-3 max-w-2xl text-lg text-paper">A large team raising industry standards with quality service and highly competitive prices.</p>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title}>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-10 stroke-gold" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{p.icon}</svg>
              <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight">{p.title}</h3>
              <p className="mt-3 text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Care routine */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Website care + digital visibility</p>
          <h2 className="display mt-4 max-w-[16ch] text-4xl sm:text-5xl">Your website needs a healthy routine too.</h2>
          <p className="mt-5 max-w-2xl text-lg text-muted">Like preventive care, regular attention keeps your digital presence useful, current and competitive. Every month we:</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ROUTINE.map((r) => (
              <div key={r.step} className={`flex gap-4 rounded-2xl p-6 ${r.tint}`}>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-8 shrink-0 stroke-gold" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{r.icon}</svg>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gold">{r.step}</p>
                  <p className="mt-1.5 text-paper">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find and understand */}
      <section className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <h2 className="display text-4xl sm:text-5xl">Be easier to find and understand</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {FIND.map((f) => (
            <div key={f.k} className="border-t-[3px] border-gold pt-5">
              <p className="display text-5xl text-gold">{f.k}</p>
              <p className="mt-3 text-lg font-semibold">{f.label}</p>
              <p className="mt-1 text-muted">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 stroke-paper" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="fill-paper" stroke="none" /></svg>
              <p className="text-xl font-bold">Instagram</p>
              <span className="ml-auto rounded-full bg-mint px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold">Add-on</span>
            </div>
            <p className="mt-3 text-muted">Educational carousels, videos and practice updates.</p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 stroke-paper" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.5M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></svg>
              <p className="text-xl font-bold">LinkedIn</p>
              <span className="ml-auto rounded-full bg-mint px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold">Add-on</span>
            </div>
            <p className="mt-3 text-muted">Professional insights, published work and conference participation.</p>
          </div>
        </div>
        <div className="mt-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-gold">Built around international best practices</p>
          <p className="mt-2 text-muted">Privacy, security, accessibility and applicable legal requirements reviewed for each project's target countries.</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-[1320px] px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-butter px-7 py-9 sm:px-10">
          <div className="max-w-2xl">
            <h2 className="display text-3xl sm:text-4xl">Quality websites. Accessible pricing.</h2>
            <p className="mt-3 text-lg text-paper">Basic monthly care retainers from {PRICE.doctor} a month. Social media support as an add-on. Fees depend on scope; we quote after the review.</p>
          </div>
          <a href="#review" className="btn-primary bg-white px-7 py-3">Get a scope and quote</a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gold text-ink">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-8 px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="max-w-xl">
            <h2 className="display text-4xl sm:text-5xl">Ready to be easier to find?</h2>
            <p className="mt-4 text-lg text-ink/85">Talk to Arun directly. One conversation is usually enough to know whether we are the right fit.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={SITE.whatsapp} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 font-semibold text-gold"><WhatsApp />{SITE.phone}</a>
            <a href={`mailto:${LP_EMAIL}`} className="inline-flex min-h-12 items-center rounded-full border-2 border-ink px-6 font-semibold text-ink">{LP_EMAIL}</a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-8 text-sm text-muted sm:px-6 lg:px-10">
        <p>Monk Mantra · Healthcare MarTech · <a href="/" className="font-semibold text-gold">monkmantra.com</a> · <a href="/privacy-policy" className="underline underline-offset-2">Privacy</a></p>
        <p className="max-w-xl text-xs">Content subject to approval. Fees depend on scope. Rankings and AI mentions are not guaranteed.</p>
      </footer>
    </div>
  );
}
