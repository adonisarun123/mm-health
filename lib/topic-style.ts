/** Visual identity per blog topic. Pure data, safe to import from client components. */
export type TopicKey = "growth-strategy" | "d2c-ecommerce-marketing" | "travel-hospitality-marketing" | "healthcare-marketing";

export const TOPIC_STYLE: Record<TopicKey, { short: string; bg: string; ink: string; motif: "orbit" | "bars" | "waves" | "cross" }> = {
  "growth-strategy": { short: "Growth", bg: "var(--color-lilac)", ink: "#4b3f8f", motif: "orbit" },
  "d2c-ecommerce-marketing": { short: "D2C", bg: "var(--color-butter)", ink: "#6b5a00", motif: "bars" },
  "travel-hospitality-marketing": { short: "Hospitality", bg: "var(--color-mint)", ink: "#12594d", motif: "waves" },
  "healthcare-marketing": { short: "Healthcare", bg: "var(--color-blush)", ink: "#8a2a55", motif: "cross" },
};

/** Small deterministic hash so each card's motif sits slightly differently. */
export function seedOf(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/** Card data passed to client components (no post HTML). */
export type CardPost = { slug: string; title: string; excerpt: string; date: string; dateLabel: string; readMins: number; topic: TopicKey };
