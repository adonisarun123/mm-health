import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Monk Mantra",
  description: "Monk Mantra is a marketing and engineering team that works only in healthcare. How we started, how we work, and what you can hold us to.",
  alternates: { canonical: "/about" },
};

const PATH = [
  { title: "Search first", body: "Founded around technical SEO and organic growth, not reselling paid media." },
  { title: "Performance added", body: "Paid search and social brought in-house, so channels could be planned together." },
  { title: "Healthcare focus", body: "Specialised in compliant patient acquisition for doctors, clinics and hospitals." },
  { title: "Engineering added", body: "We started building software after too many campaigns died at the front desk." },
  { title: "One team, both halves", body: "Demand, the front desk on MedDeskOS, and reporting in patients who turned up." },
];

const COMMITMENTS = [
  { title: "Findings in writing, before you commit", body: "You keep the audit whether or not you hire us." },
  { title: "Fixed price and date on software builds", body: "Changes are quoted before they are built, never after." },
  { title: "Your code, your data, your accounts", body: "Nothing is held hostage if you leave." },
  { title: "We will say no when a tactic isn't worth the risk", body: "Everything is written to the MCI code, the DMR Act, CCPA guidelines and the DPDP Act." },
];

export default function About() {
  return (
    <>
      <section className="grain relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-44">
        <div aria-hidden="true" className="wash pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <h1 className="display max-w-[16ch] text-5xl sm:text-7xl">A marketing and engineering team that only works in healthcare.</h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <p className="text-xl leading-relaxed text-paper">
              Monk Mantra helps doctors, clinics and hospitals in India get found, turn enquiries into attended appointments, and see what each patient cost to reach.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              We are based in Bengaluru and led by Arun Mahendran, who has worked in search for more than twenty years. Over the last eighteen months we have worked with more than 45 doctors, from solo consultants to multi-speciality hospitals.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <h2 className="display max-w-3xl text-3xl sm:text-5xl">How we got here.</h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {PATH.map((p, i) => (
              <li key={p.title} className="bg-ink p-7">
                <span className="display-condensed text-3xl text-gold tabular-nums">{i + 1}</span>
                <h3 className="mt-8 font-semibold text-paper">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:px-10 lg:py-28">
          <div>
            <h2 className="display text-3xl sm:text-5xl">What you can hold us to.</h2>
            <p className="mt-5 max-w-md text-lg text-muted">We would rather publish commitments you can enforce than awards you can&apos;t verify.</p>
          </div>
          <dl className="divide-y divide-line border-y border-line">
            {COMMITMENTS.map((c) => (
              <div key={c.title} className="grid gap-2 py-7 sm:grid-cols-[1.2fr_1fr] sm:gap-8">
                <dt className="text-lg font-semibold text-paper">{c.title}</dt>
                <dd className="text-muted">{c.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <h2 className="display max-w-2xl text-4xl sm:text-5xl">Tell us what isn&apos;t working.</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/get-started" className="rounded-full bg-paper px-7 py-3.5 font-semibold text-ink">Get a free audit</Link>
            <Link href="/contact" className="rounded-full border border-line px-7 py-3.5 text-paper hover:border-paper">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
