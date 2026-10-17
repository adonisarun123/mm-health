import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free growth audit for your business",
  description: "A written audit of your search visibility, ad waste and enquiry-to-sale friction. Free, with no obligation.",
  alternates: { canonical: "/get-started" },
};

export default function GetStarted() {
  return (
    <section className="mx-auto grid max-w-[1320px] gap-12 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-10 lg:pt-44">
      <div>
        <h1 className="display text-5xl sm:text-6xl">Get your free growth audit.</h1>
        <p className="mt-6 max-w-md text-lg text-muted">A strategist reviews your business and sends a written audit within a week. You keep it whether or not you hire us.</p>
        <ul className="mt-10 space-y-4 text-paper">
          {["Where you rank across your real catchment", "What a patient sees when they try to book at night", "Ad spend that buys no appointments", "Compliance risks in your live copy"].map((t) => (
            <li key={t} className="flex gap-3"><span className="mt-2.5 h-px w-4 shrink-0 bg-gold" />{t}</li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-muted">Or <a className="text-paper underline underline-offset-4" href={SITE.booking}>book a 30-minute call</a>.</p>
      </div>
      <div className="rounded-3xl border border-line bg-ink-2 p-6 sm:p-10"><LeadForm source="get-started" /></div>
    </section>
  );
}
