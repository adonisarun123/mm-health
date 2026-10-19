import Link from "next/link";
import { TOPIC_STYLE, seedOf, type CardPost, type TopicKey } from "@/lib/topic-style";

/** Abstract, topic-coded cover art. Posts have no images, so each topic gets its own motif. */
export function Cover({ topic, seed, className = "" }: { topic: TopicKey; seed: string; className?: string }) {
  const s = TOPIC_STYLE[topic];
  const h = seedOf(seed);
  const c = s.ink;
  // Motif sits in a centred 100x100 box ("meet"), so it never clips on wide or tall covers.
  // Per-post variation: offset, rotation, scale and a filled-vs-outline accent.
  const dx = (h % 21) - 10;
  const dy = ((h >> 5) % 13) - 6;
  const rot = ((h >> 9) % 4) * 90 + (((h >> 11) % 21) - 10);
  const sc = 0.75 + ((h >> 13) % 30) / 100;
  const k = (h >> 17) % 3;
  const motif = {
    orbit: (
      <g fill="none" stroke={c} strokeWidth="1.4">
        {[10, 20, 31, 43].map((rad, i) => <circle key={rad} cx="50" cy="50" r={rad} opacity={0.65 - i * 0.12} />)}
        <circle cx={50 + [20, 31, 43][k]} cy="50" r="4.5" fill={c} stroke="none" />
        <circle cx="50" cy="50" r="3" fill={c} stroke="none" />
      </g>
    ),
    bars: (
      <g fill={c}>
        {[24, 38, 30, 52, 44, 66, 78].map((bh, i) => (
          <rect key={i} x={13 + i * 11} y={88 - bh * (i === 6 - k ? 1 : 0.85)} width="7" height={bh * (i === 6 - k ? 1 : 0.85)} rx="2" opacity={i === 6 - k ? 0.85 : 0.45} />
        ))}
        <path d="M14 70 L 36 58 L 58 52 L 86 22" fill="none" stroke={c} strokeWidth="1.6" opacity=".7" />
      </g>
    ),
    waves: (
      <g fill="none" stroke={c} strokeWidth="1.4">
        {[0, 9, 18, 27].map((o, i) => (
          <path key={o} d={`M-200 ${45 + o} q 25 -${10 + k * 3} 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0`} opacity={0.65 - i * 0.12} />
        ))}
        <circle cx={30 + k * 20} cy="26" r="8" fill={c} stroke="none" opacity=".75" />
      </g>
    ),
    cross: (
      <g fill={c}>
        <rect x="42" y="22" width="16" height="56" rx="4" opacity=".55" />
        <rect x="22" y="42" width="56" height="16" rx="4" opacity=".55" />
        <circle cx="50" cy="50" r={[30, 34, 38][k]} fill="none" stroke={c} strokeWidth="1.4" opacity=".4" />
      </g>
    ),
  }[s.motif];
  const transform = s.motif === "waves" ? `translate(0 ${dy})` : `translate(${50 + dx} ${50 + dy}) rotate(${s.motif === "bars" ? 0 : rot}) scale(${sc}) translate(-50 -50)`;
  return (
    <div aria-hidden className={`relative overflow-hidden ${className}`} style={{ background: s.bg }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <pattern id={`dots-${s.motif}`} width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r=".7" fill={c} opacity=".18" />
          </pattern>
        </defs>
        <rect x="-300" y="-300" width="700" height="700" fill={`url(#dots-${s.motif})`} />
        <g transform={transform}>{motif}</g>
      </svg>
    </div>
  );
}

export function TopicTag({ topic }: { topic: TopicKey }) {
  const s = TOPIC_STYLE[topic];
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: s.ink }}>
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.ink }} />
      {s.short}
    </span>
  );
}

const Meta = ({ p }: { p: CardPost }) => (
  <p className="text-sm text-muted"><time dateTime={p.date}>{p.dateLabel}</time> · {p.readMins} min read</p>
);

/** Standard grid card. */
export function PostCard({ p }: { p: CardPost }) {
  return (
    <Link href={`/blog/${p.slug}`} className="card group flex h-full flex-col overflow-hidden transition-[transform,box-shadow] duration-300 ease-out-quint hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(56,52,53,.35)]">
      <Cover topic={p.topic} seed={p.slug} className="h-36 border-b border-line" />
      <div className="flex flex-1 flex-col p-6">
        <TopicTag topic={p.topic} />
        <h3 className="mt-3 text-lg font-semibold leading-snug text-paper transition-colors group-hover:text-gold">{p.title}</h3>
        {p.excerpt && <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-muted">{p.excerpt}</p>}
        <div className="mt-auto flex items-center justify-between pt-6">
          <Meta p={p} />
          <span aria-hidden className="grid h-9 w-9 place-items-center rounded-full border border-line text-paper transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-ink">→</span>
        </div>
      </div>
    </Link>
  );
}

/** Large lead story card. */
export function FeatureCard({ p }: { p: CardPost }) {
  return (
    <Link href={`/blog/${p.slug}`} className="card group grid h-full overflow-hidden md:grid-cols-[1.1fr_1fr]">
      <Cover topic={p.topic} seed={p.slug + "lead"} className="min-h-56 md:min-h-full" />
      <div className="flex flex-col p-7 sm:p-10">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-ink">Latest</span>
          <TopicTag topic={p.topic} />
        </div>
        <h2 className="display mt-5 text-3xl transition-colors group-hover:text-gold sm:text-4xl">{p.title}</h2>
        {p.excerpt && <p className="mt-5 leading-relaxed text-muted">{p.excerpt}</p>}
        <div className="mt-auto flex items-center justify-between pt-8">
          <Meta p={p} />
          <span className="text-sm font-semibold text-gold">Read the note →</span>
        </div>
      </div>
    </Link>
  );
}

/** Compact horizontal card for the secondary picks beside the lead. */
export function MiniCard({ p }: { p: CardPost }) {
  return (
    <Link href={`/blog/${p.slug}`} className="card group grid grid-cols-[6.5rem_1fr] overflow-hidden sm:grid-cols-[8rem_1fr]">
      <Cover topic={p.topic} seed={p.slug} className="h-full min-h-32" />
      <div className="p-5">
        <TopicTag topic={p.topic} />
        <h3 className="mt-2 font-semibold leading-snug text-paper transition-colors group-hover:text-gold">{p.title}</h3>
        <p className="mt-2 text-sm text-muted">{p.dateLabel} · {p.readMins} min</p>
      </div>
    </Link>
  );
}
