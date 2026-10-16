import Link from "next/link";
import type { ContentPageData } from "@/lib/page-schema";
import { SITE } from "@/lib/site";
import { LeadForm } from "./LeadForm";

const abs = (p: string) => (p.startsWith("http") ? p : `${SITE.url}${p}`);
const ORG = { "@id": `${SITE.url}/#organization` };

function buildSchema(d: ContentPageData) {
  const s = d.schema || {};
  const name = s.serviceName || d.h1;
  const description = s.serviceDescription || d.answer;
  const out: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: d.crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: abs(c.path) })),
    },
  ];
  if (s.type === "SoftwareApplication") {
    out.push({
      "@context": "https://schema.org", "@type": "SoftwareApplication", name, description, url: abs(d.path),
      applicationCategory: s.applicationCategory || "BusinessApplication", operatingSystem: "Web-based",
      provider: ORG, offers: { "@type": "Offer", price: s.offersFrom || "0", priceCurrency: s.offersCurrency || "INR", url: abs(d.path) },
      audience: { "@type": "Audience", audienceType: s.audienceType || "Doctors, clinics and hospitals" },
    });
  } else if (s.type === "CollectionPage") {
    out.push({ "@context": "https://schema.org", "@type": "CollectionPage", name, description, url: abs(d.path), about: ORG });
  } else {
    out.push({
      "@context": "https://schema.org", "@type": "Service", name, description, url: abs(d.path), provider: ORG,
      serviceType: s.serviceType || name, areaServed: (s.areaServed || ["India"]).map((a) => ({ "@type": "Place", name: a })),
      audience: { "@type": "Audience", audienceType: s.audienceType || "Doctors, clinics and hospitals" },
    });
  }
  out.push({
    "@context": "https://schema.org", "@type": "WebPage", url: abs(d.path), name: d.h1, description: d.answer, inLanguage: "en-IN",
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["#answer-summary", "h1"] },
  });
  if (d.faqs?.length)
    out.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: d.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) });
  if (d.process?.items.length)
    out.push({ "@context": "https://schema.org", "@type": "HowTo", name: d.process.title, description: d.process.intro || d.answer, step: d.process.items.map((st, i) => ({ "@type": "HowToStep", position: i + 1, name: st.title, text: st.body })) });
  return out;
}

const WRAP = "mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10";
const SEC = "border-t border-line py-20 lg:py-28";

function Head({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="display text-3xl sm:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

export function ContentPage({ data: d }: { data: ContentPageData }) {
  const primary = d.primaryCta || { label: "Get a free growth audit", href: "/get-started" };
  const secondary = d.secondaryCta;

  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden pb-20 pt-28 lg:pb-28 lg:pt-36">
        <div aria-hidden="true" className="pointer-events-none absolute -right-48 -top-48 size-[560px] rounded-full bg-violet/20 blur-[140px]" />
        <div className={`relative ${WRAP}`}>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-x-2 text-sm text-muted">
              {d.crumbs.map((c, i) => (
                <li key={c.path} className="flex gap-2">
                  {i < d.crumbs.length - 1 ? <Link href={c.path} className="hover:text-paper">{c.name}</Link> : <span aria-current="page" className="text-paper">{c.name}</span>}
                  {i < d.crumbs.length - 1 && <span aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
            <div>
              <p className="text-gold">{d.eyebrow}</p>
              <h1 className="display mt-4 text-[10.5vw] sm:text-6xl lg:text-[4.4rem]">{d.h1}</h1>
              <p id="answer-summary" className="mt-8 max-w-2xl text-xl leading-relaxed text-paper">{d.answer}</p>
              {d.subhead && <p className="mt-5 max-w-2xl leading-relaxed text-muted">{d.subhead}</p>}
              {d.heroBullets?.length ? (
                <ul className="mt-8 grid max-w-2xl gap-x-6 gap-y-2 sm:grid-cols-2">
                  {d.heroBullets.map((b) => (
                    <li key={b} className="flex gap-3 text-paper"><span className="mt-2.5 h-px w-4 shrink-0 bg-gold" />{b}</li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href={primary.href} className="rounded-full bg-paper px-7 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-px">{primary.label}</Link>
                {secondary && <Link href={secondary.href} className="rounded-full border border-line px-7 py-3.5 text-paper hover:border-paper">{secondary.label}</Link>}
              </div>
            </div>

            {d.keyFacts?.length ? (
              <aside aria-labelledby="facts-h" className="self-start rounded-3xl border border-line bg-ink-2/80 p-6 backdrop-blur sm:p-8 lg:sticky lg:top-28">
                <h2 id="facts-h" className="text-sm text-muted">Key facts</h2>
                <dl className="mt-4 divide-y divide-line">
                  {d.keyFacts.map((f) => (
                    <div key={f.label} className="py-3.5">
                      <dt className="text-xs text-muted">{f.label}</dt>
                      <dd className="mt-1 text-[15px] leading-snug text-paper">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            ) : null}
          </div>
        </div>
      </section>

      {d.stats && (
        <section className="border-t border-line">
          {d.stats.title && <div className={`${WRAP} pt-20`}><Head title={d.stats.title} intro={d.stats.intro} /></div>}
          <dl className={`${WRAP} grid grid-cols-2 gap-px lg:grid-cols-4 ${d.stats.title ? "py-14" : "py-0"}`}>
            {d.stats.items.map((s) => (
              <div key={s.label} className="py-8 pr-4">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="display-condensed block text-5xl tabular-nums text-paper sm:text-6xl">{s.value}</span>
                  <span className="mt-2 block text-sm text-paper">{s.label}</span>
                  {s.note && <span className="mt-1 block text-xs text-muted">{s.note}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {d.pains && (
        <section className={SEC}>
          <div className={WRAP}>
            <Head title={d.pains.title} intro={d.pains.intro} />
            <dl className="mt-12 divide-y divide-line border-y border-line">
              {d.pains.items.map((p) => (
                <div key={p.problem} className="grid gap-3 py-8 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
                  <dt className="flex gap-3 text-lg font-semibold text-paper"><span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-leak" />{p.problem}</dt>
                  <dd className="leading-relaxed text-muted">{p.fix}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {d.offerings && (
        <section className={SEC}>
          <div className={WRAP}>
            <Head title={d.offerings.title} intro={d.offerings.intro} />
            <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {d.offerings.items.map((c) => {
                const inner = (
                  <>
                    <h3 className="text-lg font-semibold text-paper">{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
                    {c.href && <span className="mt-5 inline-block text-sm text-gold">Read more</span>}
                  </>
                );
                return (
                  <li key={c.title} className="bg-ink">
                    {c.href ? <Link href={c.href} className="block h-full p-7 transition-colors hover:bg-ink-2">{inner}</Link> : <div className="h-full p-7">{inner}</div>}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {d.process && (
        <section className={SEC}>
          <div className={WRAP}>
            <Head title={d.process.title} intro={d.process.intro} />
            <ol className="mt-12 divide-y divide-line border-y border-line">
              {d.process.items.map((st, i) => (
                <li key={st.title} className="grid gap-3 py-8 sm:grid-cols-[4rem_1fr] lg:grid-cols-[4rem_1fr_1.6fr] lg:gap-10">
                  <span className="display-condensed text-4xl text-gold tabular-nums">{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-paper">{st.title}</h3>
                    {st.duration && <p className="mt-1 text-sm text-muted">{st.duration}</p>}
                  </div>
                  <p className="leading-relaxed text-muted sm:col-start-2 lg:col-start-auto">{st.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {d.table && (
        <section className={SEC}>
          <div className={WRAP}>
            <Head title={d.table.caption} />
            <div className="mt-10 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[640px] text-left text-sm">
                <caption className="sr-only">{d.table.caption}</caption>
                <thead className="bg-ink-2">
                  <tr>{d.table.columns.map((c) => <th key={c} scope="col" className="px-5 py-4 font-semibold text-paper">{c}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {d.table.rows.map((r, ri) => (
                    <tr key={ri}>{r.map((cell, ci) => ci === 0 ? <th key={ci} scope="row" className="px-5 py-4 font-medium text-paper">{cell}</th> : <td key={ci} className="px-5 py-4 text-muted">{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {d.pricing && (
        <section className={SEC}>
          <div className={WRAP}>
            <Head title={d.pricing.title} intro={d.pricing.intro} />
            <div className={`mt-12 grid gap-4 ${d.pricing.tiers.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
              {d.pricing.tiers.map((t) => (
                <div key={t.name} className={`flex flex-col rounded-3xl p-7 sm:p-8 ${t.featured ? "bg-paper text-ink" : "border border-line bg-ink-2"}`}>
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="mt-4"><span className="display-condensed text-5xl tabular-nums">{t.price}</span>{t.cadence && <span className={`ml-2 text-sm ${t.featured ? "text-ink/60" : "text-muted"}`}>{t.cadence}</span>}</p>
                  <p className={`mt-4 text-sm leading-relaxed ${t.featured ? "text-ink/75" : "text-muted"}`}>{t.summary}</p>
                  <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                    {t.features.map((f) => <li key={f} className="flex gap-3"><span className={`mt-2 h-px w-3 shrink-0 ${t.featured ? "bg-ink" : "bg-gold"}`} />{f}</li>)}
                  </ul>
                  <p className={`mt-6 border-t pt-4 text-xs ${t.featured ? "border-ink/15 text-ink/60" : "border-line text-muted"}`}>Best for: {t.bestFor}</p>
                </div>
              ))}
            </div>
            {d.pricing.note && <p className="mt-6 max-w-3xl text-sm text-muted">{d.pricing.note}</p>}
          </div>
        </section>
      )}

      {d.prose && (
        <section className={SEC}>
          <div className={WRAP}>
            {d.prose.title && <Head title={d.prose.title} />}
            <div className="mt-12 grid gap-x-16 gap-y-14 lg:grid-cols-2">
              {d.prose.blocks.map((b) => (
                <article key={b.heading} className="max-w-[65ch]">
                  <h3 className="text-xl font-semibold text-paper">{b.heading}</h3>
                  <div className="prose-mm mt-4">{b.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
                  {b.bullets?.length ? (
                    <ul className="mt-4 space-y-2 text-muted">{b.bullets.map((x) => <li key={x} className="flex gap-3"><span className="mt-2.5 h-px w-3 shrink-0 bg-gold" />{x}</li>)}</ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {d.faqs?.length ? (
        <section className={SEC}>
          <div className={`${WRAP} grid gap-12 lg:grid-cols-[1fr_1.6fr]`}>
            <h2 className="display text-3xl sm:text-5xl">Common questions</h2>
            <div className="divide-y divide-line border-y border-line">
              {d.faqs.map((f) => (
                <details key={f.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg text-paper [&::-webkit-details-marker]:hidden">
                    {f.question}
                    <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {d.related?.items.length ? (
        <section className={SEC}>
          <div className={WRAP}>
            <h2 className="display text-3xl sm:text-4xl">{d.related.title}</h2>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {d.related.items.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="group grid gap-2 py-6 sm:grid-cols-[1fr_1.6fr] sm:gap-10">
                    <span className="text-lg font-semibold text-paper group-hover:text-gold">{r.title}</span>
                    <span className="text-muted">{r.body}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section aria-labelledby="page-cta" className="border-t border-line bg-ink-2">
        <div className={`${WRAP} grid gap-12 py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:py-28`}>
          <div>
            <h2 id="page-cta" className="display text-4xl sm:text-5xl">{d.cta?.title || "Find the patients you are already losing."}</h2>
            <p className="mt-6 max-w-md text-lg text-muted">{d.cta?.body || "Send your practice name. You get a written audit of your local visibility, ad waste and booking friction, with no obligation."}</p>
          </div>
          <LeadForm source={d.path} />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(d)) }} />
    </>
  );
}
