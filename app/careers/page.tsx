import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers at Monk Mantra",
  description: "We hire slowly and rarely. The kind of people we look for, and how to send us your work even when nothing is listed.",
  alternates: { canonical: "/careers" },
};

const ROLES = [
  { title: "Healthcare SEO strategist", body: "You have ranked a practice in a competitive catchment and can explain why. You know the difference between a condition page that helps and one that breaches the code." },
  { title: "Performance marketer", body: "You judge Google Ads by cost per attended patient, not cost per click, and you know which healthcare keywords policy will refuse." },
  { title: "Full-stack engineer", body: "Next.js, Postgres and integrations with WhatsApp and Google. You like shipping a scoped tool in weeks for a real front desk." },
  { title: "Medical content writer", body: "You write clearly for patients, work well with a reviewing doctor, and never reach for a superlative." },
];

export default function Careers() {
  return (
    <>
      <section className="mx-auto max-w-[1320px] px-4 pb-16 pt-32 sm:px-6 lg:px-10 lg:pt-44">
        <h1 className="display max-w-[16ch] text-5xl sm:text-7xl">We hire slowly, and for depth.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          We don&apos;t list roles we aren&apos;t actively filling. These are the people we look for when we do. If one sounds like you, send us your work anyway.
        </p>
      </section>
      <section className="border-t border-line">
        <ul className="mx-auto max-w-[1320px] divide-y divide-line px-4 sm:px-6 lg:px-10">
          {ROLES.map((r) => (
            <li key={r.title} className="grid gap-3 py-10 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
              <h2 className="display text-2xl sm:text-3xl">{r.title}</h2>
              <p className="max-w-2xl text-lg leading-relaxed text-muted">{r.body}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 lg:px-10">
          <h2 className="display max-w-2xl text-3xl sm:text-5xl">Show us something you made.</h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            A ranking you moved, a campaign you fixed, a tool you shipped. Email{" "}
            <a href={`mailto:${SITE.email}?subject=Careers`} className="text-paper underline underline-offset-4 hover:text-gold">{SITE.email}</a> with &ldquo;Careers&rdquo; in the subject.
          </p>
        </div>
      </section>
    </>
  );
}
