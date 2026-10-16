import { getLegal } from "@/lib/legal";

export function LegalPage({ slug }: { slug: string }) {
  const d = getLegal(slug);
  return (
    <article className="mx-auto max-w-[1320px] px-4 pb-24 pt-32 sm:px-6 lg:px-10 lg:pt-44">
      <h1 className="display text-5xl sm:text-6xl">{d.title}</h1>
      {d.updated && <p className="mt-6 text-sm text-muted">Last updated {d.updated}</p>}
      <div className="post-body mt-12 max-w-[72ch] border-t border-line pt-12" dangerouslySetInnerHTML={{ __html: d.html }} />
    </article>
  );
}
