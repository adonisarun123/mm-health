import type { Metadata } from "next";
import Link from "next/link";
import { fmtDate, getPosts } from "@/lib/posts";
import { PostList, TopicNav } from "@/components/PostList";

export const metadata: Metadata = {
  title: "Notes on marketing that pays back",
  description: "Practical notes on search, paid media, conversion and compliance across D2C, SaaS, hospitality, healthcare, property and the other sectors we work in.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const posts = getPosts();
  const [lead, ...rest] = posts;
  return (
    <>
      <section className="mx-auto max-w-[1320px] px-4 pb-16 pt-32 sm:px-6 lg:px-10 lg:pt-44">
        <h1 className="display text-5xl sm:text-7xl">Notes</h1>
        <p className="mt-6 max-w-xl text-lg text-muted">On search, paid media, conversion and the rules that constrain them. Notes from every sector we work in.</p>
        <TopicNav posts={posts} />
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

      <PostList posts={rest} />
    </>
  );
}
