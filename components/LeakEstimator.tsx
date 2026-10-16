"use client";
import { useMemo, useState } from "react";

// Assumptions carried over from the old site and stated on the page.
const A = { unanswered: 0.25, bookRate: 0.5, noShow: 0.22, localGap: 0.2 };

const TYPES = {
  doctor: { label: "Individual doctor", enquiries: 90, value: 1500 },
  clinic: { label: "Clinic", enquiries: 180, value: 2500 },
  hospital: { label: "Hospital", enquiries: 900, value: 6000 },
} as const;
type T = keyof typeof TYPES;

const ENQ = { min: 20, max: 3000, step: 10 };
const VAL = { min: 300, max: 50000, step: 100 };

/** Rounded to the precision an estimate deserves: thousands below a lakh, one decimal above. */
const inr = (n: number) => {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(1)} crore`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)} lakh`;
  if (n >= 1e4) return `₹${(Math.round(n / 1000) * 1000).toLocaleString("en-IN")}`;
  return `₹${(Math.round(n / 100) * 100).toLocaleString("en-IN")}`;
};

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

function NumberControl({
  label, value, onChange, range, prefix = "", id,
}: { label: string; value: number; onChange: (v: number) => void; range: typeof ENQ; prefix?: string; id: string }) {
  const set = (v: number) => onChange(clamp(Math.round(v / range.step) * range.step, range.min, range.max));
  const big = value >= 1000 ? 10 : 1;
  const btn = "grid size-11 shrink-0 place-items-center rounded-full border border-line text-lg text-paper transition-colors hover:border-muted disabled:opacity-40";
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-sm text-muted">{label}</label>
        <div className="flex items-center gap-2">
          <button type="button" className={btn} aria-label={`Decrease ${label.toLowerCase()}`} disabled={value <= range.min} onClick={() => set(value - range.step * big)}>−</button>
          <div className="flex h-11 items-center rounded-xl border border-line bg-ink px-3 focus-within:border-gold">
            {prefix && <span className="text-muted">{prefix}</span>}
            <input
              id={id}
              type="number"
              inputMode="numeric"
              min={range.min}
              max={range.max}
              step={range.step}
              value={value}
              onChange={(e) => onChange(clamp(+e.target.value || range.min, range.min, range.max))}
              onBlur={(e) => set(+e.target.value || range.min)}
              className="num h-full w-[5.5ch] bg-transparent text-right text-base text-paper tabular-nums focus:outline-none"
            />
          </div>
          <button type="button" className={btn} aria-label={`Increase ${label.toLowerCase()}`} disabled={value >= range.max} onClick={() => set(value + range.step * big)}>+</button>
        </div>
      </div>
      <input
        type="range"
        aria-label={label}
        min={range.min}
        max={range.max}
        step={range.step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        className="range mt-2"
      />
    </div>
  );
}

export function LeakEstimator() {
  const [type, setType] = useState<T>("clinic");
  const [enq, setEnq] = useState<number>(TYPES.clinic.enquiries);
  const [val, setVal] = useState<number>(TYPES.clinic.value);

  const r = useMemo(() => {
    const unanswered = enq * A.unanswered;
    const booked = (enq - unanswered) * A.bookRate;
    const noShow = booked * A.noShow;
    const local = enq * A.localGap * A.bookRate;
    // n is always patients (not enquiries), so n × treatment value = the rupee figure shown.
    const rows = [
      { k: "Enquiries never answered", n: unanswered * A.bookRate, note: `${Math.round(unanswered)} unanswered enquiries, about` },
      { k: "Booked but did not attend", n: noShow, note: "About" },
      { k: "Nearby demand not captured", n: local, note: "About" },
    ].map((x) => ({ ...x, v: x.n * val }));
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
      <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10 lg:py-32">
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
                  className={`min-h-11 rounded-full border px-4 text-sm transition-colors ${type === t ? "border-paper bg-paper text-ink" : "border-line text-paper hover:border-muted"}`}
                >
                  {TYPES[t].label}
                </button>
              ))}
            </div>
          </fieldset>

          <NumberControl id="est-enq" label="Monthly enquiries" value={enq} onChange={setEnq} range={ENQ} />
          <NumberControl id="est-val" label="Average treatment value" value={val} onChange={setVal} range={VAL} prefix="₹" />
        </div>

        <div className="card p-6 sm:p-10" aria-live="polite">
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
                <p className="mt-1.5 text-sm text-muted">{x.note} {Math.round(x.n)} patients a month</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-muted">
            Assumes a quarter of first contacts go unanswered, about half of answered enquiries book, a 22% no-show rate and a 20% local search gap, figures typical of Indian outpatient settings. Yours will differ.
          </p>
          <a href="#audit" className="mt-8 inline-flex min-h-11 items-center rounded-full bg-paper px-6 font-semibold text-ink hover:-translate-y-px">
            Measure my real numbers
          </a>
        </div>
      </div>
    </section>
  );
}
