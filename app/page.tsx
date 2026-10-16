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
  { q: "What does Monk Mantra do?", a: "We are a marketing and software team for healthcare. We run local search, SEO, Google Ads, content and reputation for doctors, clinics and hospitals, within Indian medical advertising rules. We also run the front desk on MedDeskOS and build custom tools, so enquiries turn into attended appointments." },
  { q: "Can doctors legally advertise in India?", a: "Doctors cannot solicit patients or make promotional claims. They can be accurately listed, explain conditions and treatments, publish their qualifications and timings, and make it easy to book. Most of the growth we deliver comes from that permitted ground, done properly." },
  { q: "How long does it take to work?", a: "Leak fixes such as profiles, tracking, missed-call recovery and reminders usually show within the first month. Organic search compounds over three to six months, depending on your speciality and how competitive your catchment is." },
  { q: "How much does it cost?", a: `Retainers start from ${PRICE.doctor} a month for individual doctors, ${PRICE.clinic} for clinics and ${PRICE.hospital} for hospitals. Custom tools start from ${PRICE.singleTool} one-time. Every figure is scoped against what you actually need.` },
  { q: "Why does a marketing team run software?", a: "Because in a clinic the enquiry is the easy part. If calls after seven go unanswered and nobody confirms appointments, more marketing just buys more leaks. MedDeskOS and our custom tools close that gap, and give us the attended-patient numbers we report on." },
  { q: "Do you work outside healthcare?", a: "No. We work only with doctors, clinics, hospitals and diagnostic centres. That focus is why we know the rules and the patient journey well." },
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
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 size-[640px] rounded-full bg-violet/20 blur-[140px]" />
        <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <p className="text-muted">Marketing technology for doctors, clinics and hospitals</p>
          <h1 className="display mt-5 max-w-[15ch] text-[12vw] sm:text-7xl lg:text-[5.6rem]">
            Every patient who looked for you, accounted for.
          </h1>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              We get your practice found, book every enquiry into MedDeskOS, and report in patients who turned up. All inside what Indian medical advertising rules permit.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/get-started" className="rounded-full bg-paper px-7 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-px">Get a free growth audit</Link>
              <a href={SITE.booking} className="rounded-full border border-line px-7 py-3.5 text-paper transition-colors hover:border-paper">Book a 30-minute call</a>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-14 w-full max-w-[1320px] px-4 pb-10 sm:px-6 lg:px-10">
          <PatientFlow />
        </div>
      </section>

      {/* Statement */}
      <section className="mx-auto max-w-[1320px] px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
        <p className="display max-w-5xl text-3xl leading-[1.08] sm:text-5xl">
          <span className="text-muted">Patients don&apos;t disappear at the search.</span> They disappear at the missed call after seven, the appointment nobody confirmed, and the clinic four hundred metres away that answered first.
        </p>
        <p className="mt-10 max-w-2xl text-lg text-muted">
          So we treat growth as one system: demand, front desk and measurement, run by a single team on one stack.
        </p>
      </section>

      <Stages />

      {/* Proof numbers */}
      <section aria-label="Monk Mantra in numbers" className="border-y border-line">
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

      {/* Practices */}
      <section id="practices" aria-labelledby="pr-h" className="scroll-mt-24 mx-auto max-w-[1320px] px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
        <h2 id="pr-h" className="display max-w-3xl text-4xl sm:text-6xl">Built around how your practice works.</h2>
        <div className="mt-14 divide-y divide-line border-y border-line">
          {PRACTICES.map((p) => (
            <Link key={p.name} href={p.href} className="group grid gap-4 py-10 transition-colors sm:grid-cols-[1.1fr_1.6fr_auto] sm:items-baseline sm:gap-10">
              <h3 className="display text-3xl transition-colors group-hover:text-gold sm:text-4xl">{p.name}</h3>
              <p className="max-w-xl text-muted">{p.body}</p>
              <p className="whitespace-nowrap text-paper">from <span className="tabular-nums">{p.price}</span>/mo</p>
            </Link>
          ))}
        </div>
      </section>

      {/* MedDeskOS */}
      <section aria-labelledby="md-h" className="relative overflow-hidden bg-paper text-ink">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-10 lg:py-32">
          <div>
            <p className="text-sm text-ink/60">The platform layer</p>
            <h2 id="md-h" className="display mt-4 text-5xl sm:text-7xl">MedDeskOS</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
              Our cloud front desk and EMR for Indian outpatient practices. It is where marketing ends and care begins: every booking lands here with its source, and the visit, prescription and invoice join the same record we measure against.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/platform" className="rounded-full bg-ink px-6 py-3 font-semibold text-paper">How MedDeskOS fits</Link>
              <a href={SITE.meddeskos} className="rounded-full border border-ink/25 px-6 py-3 text-ink hover:border-ink">Visit meddeskos.com</a>
            </div>
          </div>
          <ul className="grid content-start gap-px overflow-hidden rounded-2xl border border-ink/15 bg-ink/15 sm:grid-cols-2">
            {[
              ["Live queue", "Reception and consult room on one line of tokens."],
              ["Notes and prescriptions", "SOAP notes, ICD-10, allergy and interaction warnings."],
              ["Billing", "GST-ready invoices on cash, UPI and card."],
              ["Bookings with their source", "Every appointment knows where the patient came from."],
              ["DPDP-compliant", "Consent at registration and a full audit trail."],
              ["ABDM-ready", "ABHA creation and verification at registration."],
            ].map(([k, v]) => (
              <li key={k} className="bg-paper p-5">
                <p className="font-semibold">{k}</p>
                <p className="mt-1 text-sm text-ink/65">{v}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LeakEstimator />

      {/* Compliance */}
      <section aria-labelledby="law-h" className="mx-auto max-w-[1320px] px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
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
        <div className="mx-auto max-w-[1320px] px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
          <h2 id="pro-h" className="display max-w-3xl text-4xl sm:text-6xl">The first month should pay for itself.</h2>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="bg-ink p-7">
                <p className="flex items-center justify-between text-sm text-muted">
                  <span>{s.when}</span>
                  <span className="display-condensed text-3xl text-gold tabular-nums">{i + 1}</span>
                </p>
                <h3 className="mt-10 text-xl font-semibold text-paper">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-h" className="border-t border-line">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:px-10 lg:py-32">
          <h2 id="faq-h" className="display text-4xl sm:text-5xl">Questions doctors ask us.</h2>
          <div className="divide-y divide-line border-y border-line">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg text-paper [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="audit" aria-labelledby="cta-h" className="scroll-mt-24 border-t border-line bg-ink-2">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-10 lg:py-32">
          <div>
            <h2 id="cta-h" className="display text-5xl sm:text-6xl">Find the patients you are already losing.</h2>
            <p className="mt-6 max-w-md text-lg text-muted">
              Send your practice name. You get a written audit of your local visibility, ad waste and booking friction, specific to your catchment, with no obligation.
            </p>
            <p className="mt-6 text-sm text-muted">
              Prefer to talk? <a href={SITE.whatsapp} className="text-paper underline underline-offset-4 hover:text-gold">WhatsApp {SITE.phone}</a>
            </p>
          </div>
          <LeadForm source="home" />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
