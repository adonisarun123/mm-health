import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TOPICS, getPosts, topicOf } from "@/lib/posts";
import { PostList, TopicNav } from "@/components/PostList";

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
      <section className="mx-auto max-w-[1320px] px-4 pb-16 pt-32 sm:px-6 lg:px-10 lg:pt-44">
        <p className="text-muted">Notes</p>
        <h1 className="display mt-3 text-5xl sm:text-7xl">{t.label}</h1>
        <p className="mt-6 max-w-xl text-lg text-muted">{t.blurb}</p>
        <TopicNav posts={all} active={t.slug} />
      </section>
      <PostList posts={posts} />
    </>
  );
}
