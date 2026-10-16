import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { NEXT_STEP, fmtDate, getPost, getPosts } from "@/lib/posts";
import { SITE } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.description, publishedTime: p.date },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  const next = NEXT_STEP[p.slug];
  const more = getPosts().filter((x) => x.slug !== p.slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    mainEntityOfPage: `${SITE.url}/blog/${p.slug}`,
    author: { "@type": "Organization", name: "Monk Mantra", url: SITE.url },
    publisher: { "@id": `${SITE.url}/#organization` },
  };

  return (
    <>
      <article>
        <header className="mx-auto max-w-[1320px] px-4 pb-12 pt-32 sm:px-6 lg:px-10 lg:pt-44">
          <Link href="/blog" className="text-sm text-muted hover:text-paper">Notes</Link>
          <h1 className="display mt-6 max-w-[22ch] text-4xl sm:text-6xl">{p.title}</h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-paper">{p.excerpt}</p>
          <p className="mt-6 text-sm text-muted">Monk Mantra, <time dateTime={p.date}>{fmtDate(p.date)}</time>, {p.readMins} min read</p>
        </header>
        <div className="border-t border-line">
          <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,68ch)_1fr] lg:gap-20 lg:px-10 lg:py-20">
            <div className="post-body" dangerouslySetInnerHTML={{ __html: p.html }} />
            {next && (
              <aside className="self-start rounded-3xl border border-line bg-ink-2 p-7 lg:sticky lg:top-28">
                <p className="text-sm text-muted">Want this done for your practice?</p>
                <Link href={next.href} className="mt-3 block text-xl font-semibold text-paper hover:text-gold">{next.title}</Link>
                <Link href="/get-started" className="mt-6 inline-block rounded-full bg-paper px-5 py-2.5 text-sm font-semibold text-ink">Get a free audit</Link>
              </aside>
            )}
          </div>
        </div>
      </article>

      {more.length > 0 && (
        <section className="border-t border-line">
          <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-10">
            <h2 className="display text-3xl">More notes</h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {more.map((m) => (
                <li key={m.slug}>
                  <Link href={`/blog/${m.slug}`} className="group flex items-baseline justify-between gap-6 py-5">
                    <span className="text-lg text-paper group-hover:text-gold">{m.title}</span>
                    <time dateTime={m.date} className="shrink-0 text-sm text-muted">{fmtDate(m.date)}</time>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-10">
          <div>
            <h2 className="display text-4xl sm:text-5xl">Find the patients you are already losing.</h2>
            <p className="mt-6 max-w-md text-lg text-muted">A written audit of your local visibility, ad waste and booking friction. Free, with no obligation.</p>
          </div>
          <LeadForm source={`blog:${p.slug}`} />
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
