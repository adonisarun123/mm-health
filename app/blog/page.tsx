import type { Metadata } from "next";
import { getPosts } from "@/lib/posts";
import { BlogCta, BlogHero, TopicNav, TopicTiles, toCard } from "@/components/PostList";
import { FeatureCard, MiniCard } from "@/components/PostCard";
import { PostGrid } from "@/components/PostGrid";

export const metadata: Metadata = {
  title: "Notes on marketing that pays back",
  description: "Practical notes on search, paid media, conversion and compliance across D2C, SaaS, hospitality, healthcare, property and the other sectors we work in.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const posts = getPosts();
  const cards = posts.map(toCard);
  const [lead, ...picks] = cards.slice(0, 4);
  const rest = cards.slice(4);
  return (
    <>
      <BlogHero
        eyebrow="Notes"
        title="Marketing notes that pay back"
        blurb="On search, paid media, conversion and the rules that constrain them. Written from the work, across every sector we serve."
      >
        <TopicNav posts={posts} />
      </BlogHero>

      {lead && (
        <section className="mx-auto max-w-[1320px] px-4 pt-14 sm:px-6 lg:px-10 lg:pt-20">
          <div className="grid gap-5 lg:grid-cols-[1.7fr_1fr]">
            <FeatureCard p={lead} />
            <div className="grid gap-5">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">Also new</p>
              {picks.map((p) => <MiniCard key={p.slug} p={p} />)}
            </div>
          </div>
        </section>
      )}

      <div className="mt-16 lg:mt-24">
        <TopicTiles posts={posts} />
      </div>

      <PostGrid posts={rest} heading="The archive" />
      <BlogCta />
    </>
  );
}
