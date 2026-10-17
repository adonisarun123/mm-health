import Link from "next/link";
import { EnquiryFlow } from "@/components/EnquiryFlow";
import { Stages } from "@/components/Stages";
import { LeakEstimator } from "@/components/LeakEstimator";
import { LeadForm } from "@/components/LeadForm";
import { PRICE, SITE } from "@/lib/site";

const SECTORS = [
  { name: "E-commerce & D2C", href: "/industries/ecommerce", body: "Contribution margin over revenue, COD and RTO economics, retention before scale." },
  { name: "SaaS & technology", href: "/industries/saas", body: "Bottom-of-funnel content and pipeline metrics, not MQL counts." },
  { name: "Healthcare", href: "/healthcare-marketing", body: "Doctors, clinics, hospitals and health brands, inside India's medical advertising rules." },
  { name: "Hospitality & travel", href: "/industries/hospitality", body: "Shift the mix toward direct bookings without losing OTA visibility." },
  { name: "Real estate", href: "/industries/real-estate", body: "RERA-safe advertising, measured per site visit, not per lead." },
  { name: "Education", href: "/industries/education", body: "Enrolments planned against the admission calendar." },
  { name: "Financial services", href: "/industries/financial", body: "Acquisition inside SEBI, RBI and IRDAI advertising rules." },
  { name: "Professional services", href: "/industries/professional-services", body: "Growth for firms whose regulators restrict advertising." },
  { name: "Manufacturing & B2B", href: "/industries/manufacturing", body: "Specification depth, part-level search and export enquiries." },
  { name: "Nonprofit", href: "/industries/nonprofit", body: "Recurring giving, CSR funding and the FCRA and 80G realities." },
];

const RULES = [
  { sector: "Every sector", law: "CCPA guidelines on misleading advertisements, 2022", body: "Every claim must be substantiated and material limitations disclosed. A technically true statement that misleads overall still breaches them." },
  { sector: "Every sector", law: "Digital Personal Data Protection Act, 2023", body: "Consent, purpose limitation and breach reporting for every form, pixel and CRM, with Rules notified in November 2025. GDPR and HIPAA are not Indian law." },
  { sector: "Real estate", law: "RERA", body: "Projects advertised with their registration number, and no booking claims ahead of registration." },
  { sector: "Financial services", law: "SEBI, RBI and IRDAI codes", body: "Return claims, disclaimers and who may advertise what, set by the regulator rather than the platform." },
  { sector: "Healthcare", law: "MCI Code 2002 and the Drugs and Magic Remedies Act", body: "Doctors may not solicit or tout, and treatment for listed conditions may not be advertised to the public at all." },
];

const STEPS = [
  { when: "Week 1", title: "Audit before opinions", body: "What you rank for, what you pay for, what a customer sees at midnight, and where enquiries drop. Yours in writing whether or not you hire us." },
  { when: "Weeks 2 to 4", title: "Fix the leaks first", body: "Profiles rebuilt, tracking installed, ad waste cut, the enquiry path unblocked and compliance risk removed from live copy." },
  { when: "Months 2 to 4", title: "Build the demand engine", body: "Landing and location pages, content your experts review, structured data, review systems and intent-led campaigns." },
  { when: "Ongoing", title: "Run it as one system", body: "Follow-up, CRM, reminders and reporting wired together, so every enquiry has an owner and every sale is counted." },
];

const FAQ = [
  { q: "What does Monk Mantra do?", a: "We are a performance marketing and software team in Bengaluru. We run SEO, paid media, content, conversion and analytics for Indian businesses across ten sectors, and build the tools that close the gap between an enquiry and a sale: booking, WhatsApp follow-up, CRM routing and dashboards." },
  { q: "Which sectors do you work in?", a: "E-commerce and D2C, SaaS, healthcare, hospitality and travel, real estate, education, financial services, professional services, manufacturing and B2B, and nonprofits. Each has its own page, because what a customer is worth and what you may say to them differ completely between them." },
  { q: "How long does it take to work?", a: "Leak fixes such as profiles, tracking, missed-call recovery and follow-up usually show within the first month. Organic search compounds over three to six months, depending on your sector and how competitive your market is." },
  { q: "How much does it cost?", a: `Retainers start from ${PRICE.base} a month and scale with scope, sector and how much production is included. Custom tools start from ${PRICE.singleTool} one-time. Every figure is scoped against what you actually need, after the audit.` },
  { q: "Why does a marketing team build software?", a: "Because the enquiry is usually the easy part. If calls after seven go unanswered and nobody follows up on Monday, more marketing just buys more leaks. The tools we build close that gap, and give us the sales numbers we report on." },
  { q: "My sector has advertising rules. Is that a problem?", a: "It is the normal case. Healthcare, property, finance, education and the regulated professions all restrict what can be claimed, and the exposure sits with your licence, not the agency. We write every campaign to the stricter standard by default." },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden pt-28 lg:pt-36">
        <div aria-hidden="true" className="wash pointer-events-none absolute inset-0" />
        <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <p className="text-muted">Performance marketing and growth technology, across ten sectors</p>
          <h1 className="display mt-5 max-w-[15ch] text-[12vw] sm:text-7xl lg:text-[5.6rem]">
            Every customer who looked for you, accounted for.
          </h1>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              We get you found, close the gaps between the enquiry and the sale, and report in customers rather than clicks.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#audit" className="btn-primary px-7 py-3">Get a free growth audit</a>
              <a href={SITE.booking} className="inline-flex min-h-11 items-center rounded-full border border-paper/70 bg-white px-7 py-3 text-paper transition-colors hover:border-paper">Book a 30-minute call</a>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-14 w-full max-w-[1320px] px-4 pb-10 sm:px-6 lg:px-10">
          <EnquiryFlow />
        </div>
      </section>

      {/* Statement */}
      <section className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-10 lg:py-28">
        <p className="display max-w-5xl text-[1.6rem] leading-[1.12] sm:text-4xl lg:text-5xl">
          <span className="text-muted">Customers don&apos;t disappear at the search.</span> They disappear at the missed call after seven, the enquiry nobody followed up, and the competitor who answered first. Every one of them was a customer who went to whoever picked up.
        </p>
        <p className="mt-8 max-w-2xl text-lg text-muted">
          So we treat growth as one system: demand, conversion and measurement, run by a single team.
        </p>
      </section>

      <Stages />

      {/* Proof numbers */}
      <section aria-label="Monk Mantra in numbers" className="border-y border-line bg-butter/45">
        <dl className="mx-auto grid max-w-[1320px] grid-cols-2 lg:grid-cols-4">
          {[
            ["20+", "years of search experience leading the team"],
            ["10", "sectors, each with its own playbook"],
            ["1 week", "to a written audit you keep"],
            [PRICE.base, "a month, where retainers start"],
          ].map(([v, k], i) => (
            <div key={k} className={`px-4 py-10 sm:px-6 lg:px-10 lg:py-14 ${i % 2 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}>
              <dt className="sr-only">{k}</dt>
              <dd>
                <span className="display-condensed block text-5xl text-paper tabular-nums sm:text-6xl lg:text-7xl">{v}</span>
                <span className="mt-3 block max-w-[22ch] text-sm text-muted">{k}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Sectors */}
      <section id="sectors" aria-labelledby="sec-h" className="scroll-mt-24 mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="sec-h" className="display max-w-3xl text-4xl sm:text-6xl">Ten sectors. One measurement discipline.</h2>
          <Link href="/industries" className="inline-flex min-h-11 items-center text-paper underline underline-offset-4 hover:text-gold">How the work differs by sector →</Link>
        </div>
        <p className="mt-6 max-w-2xl text-lg text-muted">Keyword research works the same for a hotel and a hospital. What a customer is worth, how long they take to decide and what you may legally say to them does not, so every sector gets its own playbook.</p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SECTORS.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="group block h-full rounded-2xl border border-line bg-white p-6 transition-colors hover:border-gold">
                <h3 className="text-xl font-semibold text-paper group-hover:text-gold">{s.name}</h3>
                <p className="mt-2 text-muted">{s.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Software layer */}
      <section aria-labelledby="sw-h" className="relative overflow-hidden bg-mint">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-14 lg:px-10 lg:py-28">
          <div>
            <p className="text-sm font-medium text-gold">The software layer</p>
            <h2 id="sw-h" className="display mt-4 text-5xl sm:text-6xl">When the leak is software, we build the fix.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/85">
              Most lost sales are not a marketing problem. They are a form that emails nobody, a WhatsApp inbox no one owns, a CRM that never sends the second message. Our engineers build the small tools that close those gaps in two to four weeks, at a fixed price, and wire them into the reporting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services/marketing-automation" className="inline-flex min-h-11 items-center rounded-full bg-gold px-6 py-3 font-semibold text-ink">See automation work</Link>
              <Link href="/services/web-design-development" className="inline-flex min-h-11 items-center rounded-full border border-paper/40 bg-white px-6 py-3 text-paper hover:border-paper">Web and app builds</Link>
            </div>
          </div>
          <ul className="card grid content-start gap-px self-start overflow-hidden bg-line sm:grid-cols-2">
            {[
              ["Booking and enquiry flows", "Slots, site visits, demos or tables, confirmed without a phone call."],
              ["WhatsApp follow-up", "Confirmations, reminders and missed-call recovery on the channel customers answer."],
              ["CRM and lead routing", "Every enquiry lands with an owner, a source and a deadline."],
              ["Dashboards", "Cost per customer by channel, branch and campaign, refreshed daily."],
              ["Integrations", "Ads, site, CRM, billing and Sheets talking to each other."],
              ["DPDP-ready by default", "Consent captured at the form and an audit trail behind it."],
            ].map(([k, v]) => (
              <li key={k} className="bg-white p-5">
                <p className="font-semibold">{k}</p>
                <p className="mt-1 text-sm text-muted">{v}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LeakEstimator />

      {/* Compliance */}
      <section aria-labelledby="law-h" className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <h2 id="law-h" className="display text-4xl sm:text-5xl">Written to the rules your sector actually runs on.</h2>
            <p className="mt-6 max-w-md text-lg text-muted">
              Getting this wrong is a regulatory problem, and the licence at risk is yours, not the agency&apos;s. Two rules apply to everyone; the rest depend on your sector.
            </p>
          </div>
          <dl className="divide-y divide-line border-y border-line">
            {RULES.map((r) => (
              <div key={r.law} className="grid gap-2 py-7 sm:grid-cols-[1fr_1.5fr] sm:gap-8">
                <dt className="font-semibold text-paper"><span className="mb-1 block text-sm font-normal text-gold">{r.sector}</span>{r.law}</dt>
                <dd className="text-muted">{r.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="pro-h" className="border-t border-line">
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-10 lg:py-28">
          <h2 id="pro-h" className="display max-w-3xl text-4xl sm:text-6xl">The first month should pay for itself.</h2>
          <ol className="card mt-12 grid gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="bg-white p-7">
                <p className="flex items-center justify-between text-sm text-muted">
                  <span>{s.when}</span>
                  <span className="display-condensed text-3xl text-gold tabular-nums">{i + 1}</span>
                </p>
                <h3 className="mt-6 text-xl font-semibold text-paper">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-h" className="border-t border-line">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:px-10 lg:py-28">
          <h2 id="faq-h" className="display text-4xl sm:text-5xl">Questions we get asked.</h2>
          <div className="divide-y divide-line border-y border-line">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-paper [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-white text-paper transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="audit" aria-labelledby="cta-h" className="relative scroll-mt-24 overflow-hidden border-t border-line bg-ink-2">
        <div aria-hidden="true" className="wash pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto grid max-w-[1320px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-10 lg:py-28">
          <div>
            <h2 id="cta-h" className="display text-5xl sm:text-6xl">Find the customers you are already losing.</h2>
            <p className="mt-6 max-w-md text-lg text-muted">
              Send your name, number and business. You get a written audit of your search visibility, ad waste and enquiry-to-sale friction, with no obligation.
            </p>
            <p className="mt-6 text-sm text-muted">
              Prefer to talk? <a href={SITE.whatsapp} className="inline-block py-3 font-semibold text-gold underline underline-offset-4">WhatsApp {SITE.phone}</a>
            </p>
          </div>
          <div className="card p-6 sm:p-8"><LeadForm source="home" /></div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
