import type { Metadata } from "next";
import Link from "next/link";
import { fmtDate, getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Notes on healthcare marketing",
  description: "Practical notes on patient acquisition, local search, compliance and the front-desk tools that turn enquiries into attended appointments.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const posts = getPosts();
  const [lead, ...rest] = posts;
  return (
    <>
      <section className="mx-auto max-w-[1320px] px-4 pb-16 pt-32 sm:px-6 lg:px-10 lg:pt-44">
        <h1 className="display text-5xl sm:text-7xl">Notes</h1>
        <p className="mt-6 max-w-xl text-lg text-muted">On patient acquisition, local search, Indian medical advertising rules and the tools that move appointments.</p>
      </section>

      {lead && (
        <section className="border-t border-line">
          <Link href={`/blog/${lead.slug}`} className="group mx-auto grid max-w-[1320px] gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-10 lg:py-20">
            <h2 className="display text-3xl transition-colors group-hover:text-gold sm:text-5xl">{lead.title}</h2>
            <div>
              <p className="text-lg leading-relaxed text-muted">{lead.excerpt}</p>
              <p className="mt-6 text-sm text-muted"><time dateTime={lead.date}>{fmtDate(lead.date)}</time>, {lead.readMins} min read</p>
            </div>
          </Link>
        </section>
      )}

      <section className="border-t border-line">
        <ul className="mx-auto max-w-[1320px] divide-y divide-line px-4 sm:px-6 lg:px-10">
          {rest.map((p) => (
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
    </>
  );
}
