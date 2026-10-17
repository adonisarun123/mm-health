import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Monk Mantra",
  description: "Monk Mantra is a marketing and engineering team working across ten sectors. How we started, how we work, and what you can hold us to.",
  alternates: { canonical: "/about" },
};

const PATH = [
  { title: "Search first", body: "Founded around technical SEO and organic growth, not reselling paid media." },
  { title: "Performance added", body: "Paid search and social brought in-house, so channels could be planned together." },
  { title: "Sector depth", body: "Built a playbook per sector, from D2C margins to RERA and the MCI code, because what a customer is worth differs in each." },
  { title: "Engineering added", body: "We started building software after too many campaigns died between the enquiry and the sale." },
  { title: "One team, both halves", body: "Demand, conversion and reporting in customers, with the tools behind them built in-house." },
];

const COMMITMENTS = [
  { title: "Findings in writing, before you commit", body: "You keep the audit whether or not you hire us." },
  { title: "Fixed price and date on software builds", body: "Changes are quoted before they are built, never after." },
  { title: "Your code, your data, your accounts", body: "Nothing is held hostage if you leave." },
  { title: "We will say no when a tactic isn't worth the risk", body: "Everything is written to the rules of your sector: CCPA guidelines and the DPDP Act everywhere, plus the MCI code, RERA, SEBI and others where they apply." },
];

export default function About() {
  return (
    <>
      <section className="grain relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-44">
        <div aria-hidden="true" className="wash pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <h1 className="display max-w-[16ch] text-5xl sm:text-7xl">A marketing and engineering team for growing businesses.</h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <p className="text-xl leading-relaxed text-paper">
              Monk Mantra helps Indian businesses get found, turn enquiries into customers, and see what each one cost to reach. We work across ten sectors, from D2C and SaaS to hospitality, property, education and healthcare.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              We are based in Bengaluru and led by Arun Mahendran, who has worked in search for more than twenty years. The team pairs search, paid media and content specialists with engineers, so the fix for a lost sale gets built rather than recommended.
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
