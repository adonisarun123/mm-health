"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

// Assumptions carried over from the old site and stated on the page.
const A = { unanswered: 0.25, bookRate: 0.5, noShow: 0.22, localGap: 0.2 };

const TYPES = {
  doctor: { label: "Individual doctor", enquiries: 90, value: 1500 },
  clinic: { label: "Clinic", enquiries: 180, value: 2500 },
  hospital: { label: "Hospital", enquiries: 900, value: 6000 },
} as const;
type T = keyof typeof TYPES;

const inr = (n: number) => {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(1)} crore`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)} lakh`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
};

export function LeakEstimator() {
  const [type, setType] = useState<T>("clinic");
  const [enq, setEnq] = useState<number>(TYPES.clinic.enquiries);
  const [val, setVal] = useState<number>(TYPES.clinic.value);

  const r = useMemo(() => {
    const unanswered = enq * A.unanswered;
    const booked = (enq - unanswered) * A.bookRate;
    const noShow = booked * A.noShow;
    const local = enq * A.localGap * A.bookRate;
    const rows = [
      { k: "Enquiries never answered", n: unanswered, v: unanswered * A.bookRate * val },
      { k: "Booked but did not attend", n: noShow, v: noShow * val },
      { k: "Nearby demand not captured", n: local, v: local * val },
    ];
    const total = rows.reduce((s, x) => s + x.v, 0);
    return { rows, low: total * 0.6, high: total * 1.15, max: Math.max(...rows.map((x) => x.v)) };
  }, [enq, val]);

  const pick = (t: T) => {
    setType(t);
    setEnq(TYPES[t].enquiries);
    setVal(TYPES[t].value);
  };

  return (
    <section id="estimator" aria-labelledby="est-h" className="scroll-mt-24 border-y border-line bg-ink-2">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10 lg:py-32">
        <div>
          <h2 id="est-h" className="display text-4xl sm:text-5xl">What is your practice losing each month?</h2>
          <p className="mt-6 max-w-lg text-lg text-muted">Three inputs. No email required. An estimate, not a measurement; the free audit measures yours.</p>

          <fieldset className="mt-10">
            <legend className="text-sm text-muted">Practice type</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {(Object.keys(TYPES) as T[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  aria-pressed={type === t}
                  onClick={() => pick(t)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${type === t ? "border-paper bg-paper text-ink" : "border-line text-paper hover:border-muted"}`}
                >
                  {TYPES[t].label}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="mt-8 block">
            <span className="flex justify-between text-sm text-muted">Monthly enquiries <span className="text-paper tabular-nums">{enq.toLocaleString("en-IN")}</span></span>
            <input type="range" min={20} max={3000} step={10} value={enq} onChange={(e) => setEnq(+e.target.value)} className="mt-3 w-full accent-[#ffae45]" />
          </label>
          <label className="mt-6 block">
            <span className="flex justify-between text-sm text-muted">Average treatment value <span className="text-paper tabular-nums">₹{val.toLocaleString("en-IN")}</span></span>
            <input type="range" min={300} max={50000} step={100} value={val} onChange={(e) => setVal(+e.target.value)} className="mt-3 w-full accent-[#ffae45]" />
          </label>
        </div>

        <div className="rounded-3xl border border-line bg-ink p-6 sm:p-10" aria-live="polite">
          <p className="text-sm text-muted">Estimated recoverable revenue each month</p>
          <p className="display-condensed mt-3 text-5xl text-gold tabular-nums sm:text-7xl">
            {inr(r.low)} to {inr(r.high)}
          </p>
          <ul className="mt-10 space-y-6">
            {r.rows.map((x) => (
              <li key={x.k}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-paper">{x.k}</span>
                  <span className="tabular-nums text-paper">{inr(x.v)}</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-ink-3">
                  <div className="h-1.5 rounded-full bg-leak transition-[width] duration-500" style={{ width: `${(x.v / r.max) * 100}%` }} />
                </div>
                <p className="mt-1.5 text-xs text-muted">About {Math.round(x.n)} patients a month</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs leading-relaxed text-muted">
            Assumes a quarter of first contacts go unanswered, about half of answered enquiries book, a 22% no-show rate and a 20% local search gap, figures typical of Indian outpatient settings. Yours will differ.
          </p>
          <Link href="/get-started" className="mt-8 inline-block rounded-full bg-paper px-6 py-3 font-semibold text-ink hover:-translate-y-px">
            Measure my real numbers
          </Link>
        </div>
      </div>
    </section>
  );
}
