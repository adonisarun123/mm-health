"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ConvertPanel, FoundPanel, MeasurePanel } from "./StagePanels";

const STAGES = [
  {
    name: "Get found",
    title: "Be the practice a patient finds first",
    body: "Most near-me clicks go to the map pack. We rank your Google Business Profile across your real catchment, write condition pages your doctors review, and structure them so AI answers cite you.",
    items: ["Local SEO and Google Business Profile", "SEO for doctors and clinics", "Google Ads that survive policy", "Reviews without gating"],
    href: "/healthcare-marketing",
    Panel: FoundPanel,
  },
  {
    name: "Convert",
    title: "Turn enquiries into people in the chair",
    body: "This is where most growth is lost. Bookings land in MedDeskOS with their source attached, and our WhatsApp automation confirms, reminds, reschedules and recovers missed calls. When something doesn't fit, our engineers build what does.",
    items: ["MedDeskOS: queue, EMR, billing", "WhatsApp confirmations and reminders", "Booking built to your slot rules", "Patient CRM and recall"],
    href: "/platform",
    Panel: ConvertPanel,
  },
  {
    name: "Measure",
    title: "Report in patients, not impressions",
    body: "We join marketing to the appointments that actually happened. You see cost per attended patient by source, by doctor and by branch, so budget goes where patients come from.",
    items: ["GA4 and call tracking done properly", "Cost per attended patient", "Branch and department dashboards", "Lost-enquiry reports"],
    href: "/healthcare-marketing/patient-acquisition",
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
        One team from search result to seated patient.
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        Most agencies stop at the enquiry. In a clinic the enquiry is the easy part, so we run all three stages on one stack.
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
                  <P />
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <ActivePanel key={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
