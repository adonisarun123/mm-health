"use client";
import { useMemo, useState } from "react";
import { PostCard } from "@/components/PostCard";
import type { CardPost } from "@/lib/topic-style";

/** Searchable card grid. Every card is server-rendered, so all links stay crawlable; search only hides cards. */
export function PostGrid({ posts, heading = "All notes" }: { posts: CardPost[]; heading?: string }) {
  const [q, setQ] = useState("");
  const shown = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return posts;
    return posts.filter((p) => (p.title + " " + p.excerpt).toLowerCase().includes(t));
  }, [q, posts]);

  return (
    <section id="all" className="mx-auto max-w-[1320px] scroll-mt-28 px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="display text-3xl sm:text-5xl">{heading}</h2>
          <p className="mt-3 text-muted" aria-live="polite">{shown.length} of {posts.length} notes{q && ` matching “${q}”`}</p>
        </div>
        <label className="relative block w-full sm:w-80">
          <span className="sr-only">Search notes</span>
          <svg aria-hidden viewBox="0 0 24 24" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search: Google Ads, CAC, homestay…"
            className="min-h-12 w-full rounded-full border border-line bg-white pl-11 pr-4 text-paper placeholder:text-muted/70 focus:border-gold focus:outline-none"
          />
        </label>
      </div>

      {shown.length ? (
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug} hidden={!shown.includes(p)}>
              <PostCard p={p} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="card mt-10 p-10 text-center">
          <p className="text-lg font-semibold">Nothing matches “{q}”.</p>
          <button type="button" onClick={() => setQ("")} className="mt-4 text-sm font-semibold text-gold underline underline-offset-4">Clear search</button>
        </div>
      )}
    </section>
  );
}
