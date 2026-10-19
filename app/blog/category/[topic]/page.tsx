import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TOPICS, getPosts, topicOf } from "@/lib/posts";
import { BlogCta, BlogHero, TopicNav, toCard } from "@/components/PostList";
import { PostGrid } from "@/components/PostGrid";

export const dynamicParams = false;
export function generateStaticParams() {
  return TOPICS.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const { topic } = await params;
  const t = TOPICS.find((x) => x.slug === topic);
  if (!t) return {};
  return { title: `${t.label} marketing notes`, description: t.blurb, alternates: { canonical: `/blog/category/${t.slug}` } };
}

export default async function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const t = TOPICS.find((x) => x.slug === topic);
  if (!t) notFound();
  const all = getPosts();
  const posts = all.filter((p) => topicOf(p) === t.slug);
  return (
    <>
      <BlogHero eyebrow="Notes" title={t.label} blurb={t.blurb}>
        <TopicNav posts={all} active={t.slug} />
      </BlogHero>
      <PostGrid posts={posts.map(toCard)} heading={`${t.label} notes`} />
      <BlogCta />
    </>
  );
}
