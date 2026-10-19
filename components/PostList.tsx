import Link from "next/link";
import { TOPICS, fmtDate, topicOf, type Post, type TopicSlug } from "@/lib/posts";
import { TOPIC_STYLE, type CardPost } from "@/lib/topic-style";
import { Cover } from "@/components/PostCard";

/** Some restored posts carry the literal string "nan" from the old CMS export. */
const clean = (s?: string) => (s && s.trim().toLowerCase() !== "nan" ? s.trim() : "");

export function toCard(p: Post): CardPost {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: clean(p.excerpt) || clean(p.description),
    date: p.date,
    dateLabel: fmtDate(p.date),
    readMins: p.readMins,
    topic: topicOf(p),
  };
}

export function TopicNav({ posts, active }: { posts: Post[]; active?: TopicSlug }) {
  const count = (t: TopicSlug) => posts.filter((p) => topicOf(p) === t).length;
  const pill = (on: boolean) =>
    `inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors ${on ? "border-paper bg-paper text-ink" : "border-line bg-white/80 text-paper backdrop-blur hover:border-paper"}`;
  return (
    <nav aria-label="Blog topics" className="mt-10 flex flex-wrap gap-2">
      <Link href="/blog" className={pill(!active)} aria-current={!active ? "page" : undefined}>
        All <span className="tabular-nums opacity-60">{posts.length}</span>
      </Link>
      {TOPICS.map((t) => (
        <Link key={t.slug} href={`/blog/category/${t.slug}`} className={pill(active === t.slug)} aria-current={active === t.slug ? "page" : undefined}>
          <span className="h-2 w-2 rounded-full" style={{ background: TOPIC_STYLE[t.slug].ink }} />
          {t.label} <span className="tabular-nums opacity-60">{count(t.slug)}</span>
        </Link>
      ))}
    </nav>
  );
}

/** Shared hero for the blog index and topic pages. */
export function BlogHero({ eyebrow, title, blurb, children }: { eyebrow: string; title: string; blurb: string; children?: React.ReactNode }) {
  return (
    <section className="wash relative overflow-hidden border-b border-line">
      <div className="mx-auto max-w-[1320px] px-4 pb-14 pt-32 sm:px-6 lg:px-10 lg:pb-20 lg:pt-44">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">{eyebrow}</p>
        <h1 className="display mt-4 max-w-4xl text-5xl sm:text-7xl lg:text-8xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{blurb}</p>
        {children}
      </div>
    </section>
  );
}

/** Four topic tiles: the way in for readers who know their sector. */
export function TopicTiles({ posts }: { posts: Post[] }) {
  return (
    <section className="border-y border-line bg-ink-2">
      <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <h2 className="display text-3xl sm:text-5xl">Start with your sector</h2>
        <p className="mt-3 max-w-xl text-muted">The same principles, applied to how your customers actually decide.</p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TOPICS.map((t) => {
            const inTopic = posts.filter((p) => topicOf(p) === t.slug);
            const latest = inTopic[0];
            return (
              <li key={t.slug}>
                <Link href={`/blog/category/${t.slug}`} className="card group flex h-full flex-col overflow-hidden">
                  <Cover topic={t.slug} seed={t.slug} className="h-28 border-b border-line" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-lg font-semibold text-paper transition-colors group-hover:text-gold">{t.label}</h3>
                      <span className="display text-3xl tabular-nums" style={{ color: TOPIC_STYLE[t.slug].ink }}>{inTopic.length}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{t.blurb}</p>
                    {latest && (
                      <p className="mt-auto border-t border-line pt-4 text-sm text-paper">
                        <span className="text-muted">Latest: </span>{latest.title}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** Closing call to action under the archive. */
export function BlogCta() {
  return (
    <section className="mx-auto max-w-[1320px] px-4 pb-24 sm:px-6 lg:px-10">
      <div className="card wash grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <h2 className="display text-3xl sm:text-5xl">Reading is free. So is the audit.</h2>
          <p className="mt-4 max-w-xl text-lg text-muted">Send us your site and ad accounts. We will show you where enquiries leak and what each fix is worth, in plain numbers.</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link href="/get-started" className="btn-primary px-7 py-3">Get a free growth audit</Link>
          <Link href="/services" className="inline-flex min-h-11 items-center rounded-full border border-paper px-6 font-semibold text-paper transition-colors hover:bg-paper hover:text-ink">See services</Link>
        </div>
      </div>
    </section>
  );
}
