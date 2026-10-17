"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ConvertPanel, FoundPanel, MeasurePanel } from "./StagePanels";

const STAGES = [
  {
    name: "Get found",
    title: "Be the business a buyer finds first",
    body: "Search, maps, ads and AI answers decide who gets the enquiry. We build the pages, profiles and campaigns that put you there, written to your sector's advertising rules. For a local business, that means the map pack across the area you actually serve and pages your own experts review.",
    items: ["SEO and local search", "Google and Meta ads", "Content that AI answers cite", "Reviews and reputation"],
    href: "/services/seo-organic-growth",
    Panel: FoundPanel,
  },
  {
    name: "Convert",
    title: "Turn enquiries into customers",
    body: "This is where most growth is lost: the missed call, the slow reply, the form nobody followed up. We fix the site, the follow-up and the handover to sales. Every enquiry lands in your CRM with its source attached, and WhatsApp confirms, reminds and recovers missed calls.",
    items: ["Conversion optimisation", "WhatsApp and email automation", "CRM and lead routing", "Custom booking and follow-up tools"],
    href: "/services/conversion-optimization",
    Panel: ConvertPanel,
  },
  {
    name: "Measure",
    title: "Report in customers, not impressions",
    body: "We join marketing to the sales, bookings or visits that actually happened, so budget goes where customers come from. For a showroom, that is cost per site visit and per signed order, by source and branch.",
    items: ["GA4 and call tracking done properly", "Cost per customer by source", "Branch and channel dashboards", "Lost-enquiry reports"],
    href: "/services/analytics-reporting",
    Panel: MeasurePanel,
  },
] as const;

export function Stages() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    refs.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  const ActivePanel = STAGES[active].Panel;

  return (
    <section aria-labelledby="stages-h" className="relative mx-auto max-w-[1320px] px-4 pb-16 pt-4 sm:px-6 lg:px-10 lg:pb-24 lg:pt-8">
      <h2 id="stages-h" className="display max-w-4xl text-4xl sm:text-6xl">
        One team from search result to paying customer.
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        Most agencies stop at the enquiry. The enquiry is usually the easy part, so we run all three stages as one system. The panels show a worked example from an interiors studio; the same three stages run in every sector.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          {STAGES.map((s, i) => {
            const P = s.Panel;
            return (
              <div
                key={s.name}
                ref={(el) => { refs.current[i] = el; }}
                data-i={i}
                className="border-t border-line py-10 lg:min-h-[62vh] lg:py-14"
              >
                <p className="flex items-center gap-3 text-sm">
                  <span className={`grid size-7 place-items-center rounded-full border border-gold tabular-nums transition-colors ${active === i ? "bg-gold text-ink" : "text-gold"}`}>{i + 1}</span>
                  <span className="text-muted">{s.name}</span>
                </p>
                <h3 className="display mt-4 text-3xl sm:text-4xl">{s.title}</h3>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{s.body}</p>
                <ul className="mt-7 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-3 text-paper">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold">
                  How {s.name.toLowerCase()} works <span aria-hidden="true">→</span>
                </Link>
                <div className="mt-10 lg:hidden">
                  <p className="mb-3 text-sm text-muted">Worked example: an interiors studio</p>
                  <P />
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <p className="mb-3 text-sm text-muted">Worked example: an interiors studio</p>
            <ActivePanel key={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
