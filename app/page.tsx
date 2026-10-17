import Link from "next/link";
import { PatientFlow } from "@/components/PatientFlow";
import { Stages } from "@/components/Stages";
import { LeakEstimator } from "@/components/LeakEstimator";
import { LeadForm } from "@/components/LeadForm";
import { PRICE, SITE } from "@/lib/site";

const PRACTICES = [
  { name: "Individual doctors", price: PRICE.doctor, href: "/healthcare-marketing/doctors", body: "Consultants who practise across two or three hospitals and need patients to find them, not the hospital's switchboard." },
  { name: "Clinics", price: PRICE.clinic, href: "/healthcare-marketing/clinics", body: "Single and multi-chair clinics where the front desk is the bottleneck and the map pack decides the week." },
  { name: "Hospitals", price: PRICE.hospital, href: "/healthcare-marketing/hospitals", body: "Departments, branches and specialists, each needing their own demand and their own numbers." },
];

const SECTORS = [
  { name: "E-commerce & D2C", href: "/industries/ecommerce", body: "Contribution margin over revenue, COD and RTO economics, retention before scale." },
  { name: "SaaS & technology", href: "/industries/saas", body: "Bottom-of-funnel content and pipeline metrics, not MQL counts." },
  { name: "Hospitality & travel", href: "/industries/hospitality", body: "Shift the mix toward direct bookings without losing OTA visibility." },
  { name: "Real estate", href: "/industries/real-estate", body: "RERA-safe advertising, measured per site visit, not per lead." },
  { name: "Education", href: "/industries/education", body: "Enrolments planned against the admission calendar." },
  { name: "Financial services", href: "/industries/financial", body: "Acquisition inside SEBI, RBI and IRDAI advertising rules." },
  { name: "Professional services", href: "/industries/professional-services", body: "Growth for firms whose regulators restrict advertising." },
  { name: "Manufacturing & B2B", href: "/industries/manufacturing", body: "Specification depth, part-level search and export enquiries." },
  { name: "Nonprofit", href: "/industries/nonprofit", body: "Recurring giving, CSR funding and the FCRA and 80G realities." },
];

const RULES = [
  { law: "MCI Code of Ethics 2002, Regulation 6.1", body: "Doctors may not solicit patients or self-promote in ways that tout or exaggerate. The NMC's 2023 replacement was placed in abeyance, so the 2002 code still applies." },
  { law: "Drugs and Magic Remedies Act, 1954", body: "Advertising treatment to the public for a scheduled list of conditions, including infertility, obesity, diabetes and cancer, is a criminal offence. It applies to everyone." },
  { law: "CCPA guidelines on misleading advertisements, 2022", body: "Every claim must be substantiated and material limitations disclosed. A technically true statement that misleads overall still breaches them." },
  { law: "Digital Personal Data Protection Act, 2023", body: "Governs patient data in India, with Rules notified in November 2025 on consent, retention and breach reporting. HIPAA is US law and does not apply here." },
];

const STEPS = [
  { when: "Week 1", title: "Audit before opinions", body: "What you rank for, what you pay for, what a patient sees at midnight, and where enquiries drop. Yours in writing whether or not you hire us." },
  { when: "Weeks 2 to 4", title: "Fix the leaks first", body: "Profiles rebuilt, tracking installed, ad waste cut, the booking path unblocked and compliance risk removed from live copy." },
  { when: "Months 2 to 4", title: "Build the demand engine", body: "Condition and location pages, medically reviewed content, structured data, review systems and intent-led campaigns." },
  { when: "Ongoing", title: "Run the front desk on MedDeskOS", body: "Queue, records, reminders and recall in one place, so every enquiry has an owner and every visit is counted." },
];

const FAQ = [
  { q: "What does Monk Mantra do?", a: "We are a performance marketing and software team in Bengaluru. We run SEO, paid media, content, conversion and analytics for Indian businesses across ten sectors. Healthcare is our deepest practice: for doctors, clinics and hospitals we also run the front desk on MedDeskOS and build custom tools, so enquiries turn into attended appointments." },
  { q: "Can doctors legally advertise in India?", a: "Doctors cannot solicit patients or make promotional claims. They can be accurately listed, explain conditions and treatments, publish their qualifications and timings, and make it easy to book. Most of the growth we deliver comes from that permitted ground, done properly." },
  { q: "How long does it take to work?", a: "Leak fixes such as profiles, tracking, missed-call recovery and reminders usually show within the first month. Organic search compounds over three to six months, depending on your speciality and how competitive your catchment is." },
  { q: "How much does it cost?", a: `Retainers start from ${PRICE.doctor} a month for individual doctors, ${PRICE.clinic} for clinics and ${PRICE.hospital} for hospitals. Custom tools start from ${PRICE.singleTool} one-time. Other sectors start from ₹10,000 a month depending on scope. Every figure is scoped against what you actually need.` },
  { q: "Why does a marketing team run software?", a: "Because in a clinic the enquiry is the easy part. If calls after seven go unanswered and nobody confirms appointments, more marketing just buys more leaks. MedDeskOS and our custom tools close that gap, and give us the attended-patient numbers we report on." },
  { q: "Do you work outside healthcare?", a: "Yes. We work with e-commerce and D2C brands, SaaS companies, hotels and homestays, developers, schools, financial firms, professional practices, manufacturers and nonprofits. Healthcare is where we go deepest, because its rules and its front-desk gap reward specialisation, but the same measurement discipline runs through every sector." },
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
          <p className="text-muted">Performance marketing and growth technology, deepest in healthcare</p>
          <h1 className="display mt-5 max-w-[15ch] text-[12vw] sm:text-7xl lg:text-[5.6rem]">
            Every customer who looked for you, accounted for.
          </h1>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              We get you found, close the gaps between the enquiry and the sale, and report in customers rather than clicks. For doctors, clinics and hospitals, that runs all the way to patients who turned up, on MedDeskOS.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#audit" className="btn-primary px-7 py-3">Get a free growth audit</a>
              <a href={SITE.booking} className="inline-flex min-h-11 items-center rounded-full border border-paper/70 bg-white px-7 py-3 text-paper transition-colors hover:border-paper">Book a 30-minute call</a>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-14 w-full max-w-[1320px] px-4 pb-10 sm:px-6 lg:px-10">
          <PatientFlow />
        </div>
      </section>

      {/* Statement */}
      <section className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-10 lg:py-28">
        <p className="display max-w-5xl text-[1.6rem] leading-[1.12] sm:text-4xl lg:text-5xl">
          <span className="text-muted">Customers don&apos;t disappear at the search.</span> They disappear at the missed call after seven, the enquiry nobody followed up, and the competitor who answered first. In a clinic, that is a patient who went four hundred metres down the road.
        </p>
        <p className="mt-8 max-w-2xl text-lg text-muted">
          So we treat growth as one system: demand, front desk and measurement, run by a single team on one stack.
        </p>
      </section>

      <Stages />

      {/* Proof numbers */}
      <section aria-label="Monk Mantra in numbers" className="border-y border-line bg-butter/45">
        <dl className="mx-auto grid max-w-[1320px] grid-cols-2 lg:grid-cols-4">
          {[
            ["45+", "doctors served in the last 18 months"],
            ["1 week", "to a written audit you keep"],
            ["2–4", "weeks to ship a custom front-desk tool"],
            [PRICE.doctor, "a month, the entry point for a doctor"],
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
          <h2 id="sec-h" className="display max-w-3xl text-4xl sm:text-6xl">Ten sectors. One goes deeper.</h2>
          <Link href="/industries" className="inline-flex min-h-11 items-center text-paper underline underline-offset-4 hover:text-gold">How the work differs by sector →</Link>
        </div>
        <div className="group relative mt-12 grid gap-6 rounded-3xl bg-mint p-8 transition-colors sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="text-sm text-muted">Our deepest practice</p>
            <h3 className="display mt-3 text-4xl sm:text-5xl group-hover:text-gold">
              <Link href="/healthcare-marketing" className="after:absolute after:inset-0 after:rounded-3xl">Healthcare</Link>
            </h3>
            <p className="mt-4 max-w-xl text-lg text-muted">Doctors, clinics, hospitals and diagnostics: compliant patient acquisition, the front desk on MedDeskOS, and reporting in attended patients. Plus a separate practice for <Link href="/industries/healthcare" className="relative z-10 inline-block py-2 text-paper underline underline-offset-2 hover:text-gold">pharma, medtech and wellness brands</Link>.</p>
          </div>
          <p className="flex items-center justify-between gap-4 text-paper lg:justify-end">
            <span>45+ doctors in 18 months</span>
            <span aria-hidden="true" className="grid size-11 place-items-center rounded-full border border-paper/70 bg-white text-lg transition-all group-hover:translate-x-1 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">→</span>
          </p>
        </div>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Practices */}
      <section id="practices" aria-labelledby="pr-h" className="scroll-mt-24 mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-10 lg:py-28">
        <h2 id="pr-h" className="display max-w-3xl text-4xl sm:text-6xl">For healthcare, built around how your practice works.</h2>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {PRACTICES.map((p) => (
            <Link key={p.name} href={p.href} className="group grid gap-3 py-8 transition-colors sm:grid-cols-[1.1fr_1.6fr_auto] sm:items-center sm:gap-10 lg:py-10">
              <h3 className="display text-3xl transition-colors group-hover:text-gold sm:text-4xl">{p.name}</h3>
              <p className="max-w-xl text-muted">{p.body}</p>
              <p className="flex items-center justify-between gap-4 whitespace-nowrap text-paper sm:justify-end">
                <span>from <span className="font-semibold tabular-nums">{p.price}</span>/mo</span>
                <span aria-hidden="true" className="grid size-11 place-items-center rounded-full border border-paper/70 bg-white text-lg transition-all group-hover:translate-x-1 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">→</span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* MedDeskOS */}
      <section aria-labelledby="md-h" className="relative overflow-hidden bg-mint">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-14 lg:px-10 lg:py-28">
          <div>
            <p className="text-sm font-medium text-gold">The platform layer</p>
            <h2 id="md-h" className="display mt-4 text-5xl sm:text-7xl">MedDeskOS</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/85">
              Our cloud front desk and EMR for Indian outpatient practices. It is where marketing ends and care begins: every booking lands here with its source, and the visit, prescription and invoice join the same record we measure against.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/platform" className="inline-flex min-h-11 items-center rounded-full bg-gold px-6 py-3 font-semibold text-ink">How MedDeskOS fits</Link>
              <a href={SITE.meddeskos} className="inline-flex min-h-11 items-center rounded-full border border-paper/40 bg-white px-6 py-3 text-paper hover:border-paper">Visit meddeskos.com</a>
            </div>
          </div>
          <ul className="card grid content-start gap-px overflow-hidden bg-line sm:grid-cols-2">
            {[
              ["Live queue", "Reception and consult room on one line of tokens."],
              ["Notes and prescriptions", "SOAP notes, ICD-10, allergy and interaction warnings."],
              ["Billing", "GST-ready invoices on cash, UPI and card."],
              ["Bookings with their source", "Every appointment knows where the patient came from."],
              ["DPDP-compliant", "Consent at registration and a full audit trail."],
              ["ABDM-ready", "ABHA creation and verification at registration."],
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
            <h2 id="law-h" className="display text-4xl sm:text-5xl">What healthcare can and cannot say in India.</h2>
            <p className="mt-6 max-w-md text-lg text-muted">
              Getting this wrong is a regulatory problem, and the doctor carries the consequence, not the agency. Every campaign we run is written inside these four.
            </p>
          </div>
          <dl className="divide-y divide-line border-y border-line">
            {RULES.map((r) => (
              <div key={r.law} className="grid gap-2 py-7 sm:grid-cols-[1fr_1.5fr] sm:gap-8">
                <dt className="font-semibold text-paper">{r.law}</dt>
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
