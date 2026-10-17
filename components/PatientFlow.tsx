"use client";
import { useEffect, useRef, useState } from "react";

/**
 * The hero's one bold moment: enquiries flow left to right through three gates
 * (found, answered, attended). Red dots are patients lost at a gate; teal dots
 * reach a chair. The toggle switches leak rates between a typical practice and
 * one with the gaps closed. Purely illustrative, labelled as such in the UI.
 */
const GATES = [
  { x: 0.3, label: "Found in search" },
  { x: 0.56, label: "Enquiry answered" },
  { x: 0.8, label: "Became a customer" },
] as const;

// Leak probability at each gate. "today" mirrors the estimator's assumptions.
const RATES = { today: [0.2, 0.25, 0.22], closed: [0.07, 0.05, 0.08] } as const;
type Mode = keyof typeof RATES;

/**
 * The headline figure is computed from the stated rates, not counted from the random
 * simulation, so it is the same on every visit: 47 for a typical practice, 81 with leaks closed.
 */
const TURN_UP = Object.fromEntries(
  (Object.keys(RATES) as Mode[]).map((m) => [m, Math.round(RATES[m].reduce((s, r) => s * (1 - r), 100))])
) as Record<Mode, number>;

const C = {
  dot: "rgba(56,52,53,.55)",
  seated: "#12594d",
  lost: (a: number) => `rgba(201,55,44,${a})`,
  gate: ["rgba(233,220,215,0)", "rgba(107,98,100,.45)", "rgba(233,220,215,0)"],
};

type P = { x: number; y: number; lane: number; speed: number; gate: number; dead: boolean; vy: number; life: number };

export function PatientFlow() {
  const ref = useRef<HTMLCanvasElement>(null);
  const modeRef = useRef<Mode>("today");
  const [mode, setMode] = useState<Mode>("today");

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = 1, raf = 0, last = performance.now(), spawn = 0;
    let parts: P[] = [];
    let onScreen = true;

    const laneY = (lane: number, x: number) => {
      // lanes start spread out and converge towards the chair on the right
      const spread = (1 - Math.min(x / 0.9, 1)) * 0.36 + 0.04;
      return h * (0.5 + lane * spread);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < 160; i++) {
        const lane = Math.random() * 2 - 1, x = Math.random();
        ctx.fillStyle = x > 0.9 ? C.seated : Math.random() < 0.15 ? C.lost(1) : C.dot;
        ctx.beginPath(); ctx.arc(x * w, laneY(lane, x), 2, 0, Math.PI * 2); ctx.fill();
      }
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) drawStatic();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const add = () => {
      const lane = Math.random() * 2 - 1;
      parts.push({ x: 0, y: laneY(lane, 0), lane, speed: 0.17 + Math.random() * 0.08, gate: 0, dead: false, vy: 0, life: 1 });
    };

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      spawn += dt * (w < 640 ? 14 : 26);
      while (spawn > 1) { add(); spawn--; }

      ctx.clearRect(0, 0, w, h);

      for (const g of GATES) {
        const gx = g.x * w;
        const grd = ctx.createLinearGradient(0, h * 0.1, 0, h * 0.9);
        grd.addColorStop(0, C.gate[0]); grd.addColorStop(0.5, C.gate[1]); grd.addColorStop(1, C.gate[2]);
        ctx.strokeStyle = grd; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(gx, h * 0.1); ctx.lineTo(gx, h * 0.9); ctx.stroke();
      }

      const rates = RATES[modeRef.current];
      const next: P[] = [];
      for (const p of parts) {
        if (p.dead) {
          p.vy += 260 * dt; p.y += p.vy * dt; p.x += p.speed * 0.25 * dt; p.life -= dt * 0.9;
          if (p.life > 0 && p.y < h + 10) {
            ctx.fillStyle = C.lost(p.life);
            ctx.beginPath(); ctx.arc(p.x * w, p.y, 2.2, 0, Math.PI * 2); ctx.fill();
            next.push(p);
          }
          continue;
        }
        p.x += p.speed * dt;
        if (p.gate < GATES.length && p.x >= GATES[p.gate].x) {
          if (Math.random() < rates[p.gate]) { p.dead = true; p.vy = -30; }
          p.gate++;
        }
        p.y += (laneY(p.lane, p.x) - p.y) * Math.min(1, dt * 6);
        if (p.x > 1.02) continue;
        const seated = p.x > 0.8;
        ctx.fillStyle = seated ? C.seated : C.dot;
        ctx.beginPath(); ctx.arc(p.x * w, p.y, seated ? 3 : 2.3, 0, Math.PI * 2); ctx.fill();
        next.push(p);
      }
      parts = next;
      raf = onScreen && !document.hidden ? requestAnimationFrame(frame) : 0;
    };

    const start = () => {
      if (reduce || raf || !onScreen || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };

    // Only animate while the canvas is visible and the tab is in front: saves battery on phones.
    const io = new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; if (onScreen) start(); else stop(); });
    io.observe(canvas);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);

    if (reduce) drawStatic(); else start();

    return () => { stop(); ro.disconnect(); io.disconnect(); document.removeEventListener("visibilitychange", onVis); };
  }, []);

  return (
    <div className="w-full">
      <div className="relative h-[220px] sm:h-[320px] lg:h-[360px]">
        <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />
        {GATES.map((g) => (
          <span key={g.label} className="absolute top-0 hidden -translate-x-1/2 whitespace-nowrap text-sm text-muted sm:block" style={{ left: `${g.x * 100}%` }}>
            {g.label}
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-5">
        <div role="radiogroup" aria-label="Business state" className="inline-flex rounded-full border border-line bg-white p-1 text-sm">
          {(["today", "closed"] as Mode[]).map((m) => (
            <button
              key={m}
              role="radio"
              aria-checked={mode === m}
              onClick={() => setMode(m)}
              className={`min-h-11 rounded-full px-4 transition-colors ${mode === m ? "bg-paper text-ink" : "text-muted hover:text-paper"}`}
            >
              {m === "today" ? "A typical business" : "Leaks closed"}
            </button>
          ))}
        </div>
        <p className="text-right text-sm text-muted" aria-live="polite">
          <span className="display-condensed mr-2 align-[-0.1em] text-4xl text-gold tabular-nums">{TURN_UP[mode]}</span>
          of every 100 enquiries become customers
          <span className="mt-1 block text-sm font-medium text-paper">Illustration, not a client result</span>
        </p>
      </div>
    </div>
  );
}
