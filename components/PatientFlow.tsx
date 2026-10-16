"use client";
import { useEffect, useRef, useState } from "react";

/**
 * The hero's one bold moment: enquiries flow left to right through three gates
 * (found, answered, attended). Red dots are patients lost at a gate; gold dots
 * reach a chair. The toggle switches leak rates between a typical practice and
 * one with the gaps closed. Purely illustrative, labelled as such in the UI.
 */
const GATES = [
  { x: 0.3, label: "Found in search" },
  { x: 0.56, label: "Enquiry answered" },
  { x: 0.8, label: "Turned up" },
] as const;

// Leak probability at each gate. "today" mirrors the estimator's assumptions.
const RATES = { today: [0.2, 0.25, 0.22], closed: [0.07, 0.05, 0.08] } as const;
type Mode = keyof typeof RATES;

type P = { born: number; x: number; y: number; lane: number; speed: number; gate: number; dead: boolean; vy: number; life: number; seated: boolean };

export function PatientFlow() {
  const ref = useRef<HTMLCanvasElement>(null);
  const modeRef = useRef<Mode>("today");
  const [mode, setMode] = useState<Mode>("today");
  const [stats, setStats] = useState({ seated: 0, total: 0 });

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = 1, raf = 0, last = performance.now(), spawn = 0;
    let parts: P[] = [];
    let seated = 0, lost = 0, statTick = 0, resetAt = performance.now();

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const laneY = (lane: number, x: number) => {
      // lanes start spread out and converge towards the chair on the right
      const spread = (1 - Math.min(x / 0.9, 1)) * 0.36 + 0.04;
      return h * (0.5 + lane * spread);
    };

    const add = () => {
      const lane = Math.random() * 2 - 1;
      parts.push({ born: performance.now(), x: 0, y: laneY(lane, 0), lane, speed: 0.17 + Math.random() * 0.08, gate: 0, dead: false, vy: 0, life: 1, seated: false });
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < 160; i++) {
        const lane = Math.random() * 2 - 1, x = Math.random();
        ctx.fillStyle = x > 0.9 ? "#ffae45" : Math.random() < 0.15 ? "#ff4a3d" : "rgba(243,238,246,.55)";
        ctx.beginPath(); ctx.arc(x * w, laneY(lane, x), 2, 0, Math.PI * 2); ctx.fill();
      }
    };

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      spawn += dt * (w < 640 ? 14 : 26);
      while (spawn > 1) { add(); spawn--; }

      ctx.clearRect(0, 0, w, h);

      // gate lines
      for (const g of GATES) {
        const gx = g.x * w;
        const grd = ctx.createLinearGradient(0, h * 0.1, 0, h * 0.9);
        grd.addColorStop(0, "rgba(51,37,74,0)"); grd.addColorStop(0.5, "rgba(167,151,184,.6)"); grd.addColorStop(1, "rgba(51,37,74,0)");
        ctx.strokeStyle = grd; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(gx, h * 0.1); ctx.lineTo(gx, h * 0.9); ctx.stroke();
      }

      const rates = RATES[modeRef.current];
      const next: P[] = [];
      for (const p of parts) {
        if (p.dead) {
          p.vy += 260 * dt; p.y += p.vy * dt; p.x += p.speed * 0.25 * dt; p.life -= dt * 0.9;
          if (p.life > 0 && p.y < h + 10) {
            ctx.fillStyle = `rgba(255,74,61,${p.life})`;
            ctx.beginPath(); ctx.arc(p.x * w, p.y, 2.2, 0, Math.PI * 2); ctx.fill();
            next.push(p);
          }
          continue;
        }
        p.x += p.speed * dt;
        if (p.gate < GATES.length && p.x >= GATES[p.gate].x) {
          if (Math.random() < rates[p.gate]) { p.dead = true; p.vy = -30; if (p.born >= resetAt) lost++; }
          p.gate++;
        }
        p.y += (laneY(p.lane, p.x) - p.y) * Math.min(1, dt * 6);
        if (p.x >= 0.93 && !p.seated) { p.seated = true; if (p.born >= resetAt) seated++; }
        if (p.x > 1.02) continue;
        const gold = p.x > 0.8;
        ctx.fillStyle = gold ? "#ffae45" : "rgba(243,238,246,.7)";
        ctx.beginPath(); ctx.arc(p.x * w, p.y, gold ? 3 : 2.3, 0, Math.PI * 2); ctx.fill();
        next.push(p);
      }
      parts = next;

      statTick += dt;
      // Show a figure only once a full cohort has crossed, so early leaks don't skew it.
      if (statTick > 0.5) { statTick = 0; const ready = now - resetAt > 7000; setStats({ seated: ready ? seated : 0, total: ready ? seated + lost : 0 }); }
      raf = requestAnimationFrame(frame);
    };

    if (reduce) drawStatic(); else raf = requestAnimationFrame(frame);

    const onMode = () => { seated = 0; lost = 0; resetAt = performance.now(); };
    window.addEventListener("mm-flow-reset", onMode);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); window.removeEventListener("mm-flow-reset", onMode); };
  }, []);

  const choose = (m: Mode) => {
    setMode(m);
    window.dispatchEvent(new Event("mm-flow-reset"));
    setStats({ seated: 0, total: 0 });
  };

  const pct = stats.total > 30 ? Math.round((stats.seated / stats.total) * 100) : null;

  return (
    <div className="w-full">
      <div className="relative h-[260px] sm:h-[340px] lg:h-[380px]">
        <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />
        {GATES.map((g) => (
          <span key={g.label} className="absolute top-0 hidden -translate-x-1/2 whitespace-nowrap text-xs text-muted sm:block" style={{ left: `${g.x * 100}%` }}>
            {g.label}
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-5">
        <div role="radiogroup" aria-label="Practice state" className="inline-flex rounded-full border border-line bg-ink/70 p-1 text-sm backdrop-blur">
          {(["today", "closed"] as Mode[]).map((m) => (
            <button
              key={m}
              role="radio"
              aria-checked={mode === m}
              onClick={() => choose(m)}
              className={`rounded-full px-4 py-1.5 transition-colors ${mode === m ? "bg-paper text-ink" : "text-muted hover:text-paper"}`}
            >
              {m === "today" ? "A typical practice" : "Leaks closed"}
            </button>
          ))}
        </div>
        <p className="text-right text-sm text-muted" aria-live="polite">
          <span className="display-condensed mr-2 align-[-0.1em] text-4xl text-gold tabular-nums">{pct ?? "—"}</span>
          of every 100 enquiries turn up
          <span className="block text-xs opacity-70">Illustration, not a client result</span>
        </p>
      </div>
    </div>
  );
}
