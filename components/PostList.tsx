import Link from "next/link";
import { TOPICS, fmtDate, topicOf, type Post, type TopicSlug } from "@/lib/posts";

export function TopicNav({ posts, active }: { posts: Post[]; active?: TopicSlug }) {
  const count = (t: TopicSlug) => posts.filter((p) => topicOf(p) === t).length;
  const pill = (on: boolean) =>
    `inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm transition-colors ${on ? "border-paper bg-paper text-ink" : "border-line bg-white text-paper hover:border-gold"}`;
  return (
    <nav aria-label="Blog topics" className="mt-10 flex flex-wrap gap-2">
      <Link href="/blog" className={pill(!active)} aria-current={!active ? "page" : undefined}>
        All <span className="tabular-nums opacity-70">{posts.length}</span>
      </Link>
      {TOPICS.map((t) => (
        <Link key={t.slug} href={`/blog/category/${t.slug}`} className={pill(active === t.slug)} aria-current={active === t.slug ? "page" : undefined}>
          {t.label} <span className="tabular-nums opacity-70">{count(t.slug)}</span>
        </Link>
      ))}
    </nav>
  );
}

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <section className="border-t border-line">
      <ul className="mx-auto max-w-[1320px] divide-y divide-line px-4 sm:px-6 lg:px-10">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="group grid gap-3 py-8 sm:grid-cols-[1.2fr_1.4fr_9rem] sm:gap-10">
              <h2 className="text-xl font-semibold text-paper transition-colors group-hover:text-gold">{p.title}</h2>
              <p className="line-clamp-3 text-muted">{p.excerpt}</p>
              <p className="text-sm text-muted sm:text-right"><time dateTime={p.date}>{fmtDate(p.date)}</time></p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
