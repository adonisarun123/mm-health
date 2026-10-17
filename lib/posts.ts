import fs from "fs";
import path from "path";

export type Post = { slug: string; title: string; excerpt: string; description: string; date: string; readMins: number; html: string; category?: string };

const DIR = path.join(process.cwd(), "content/posts");

export function getPosts(): Post[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")) as Post)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);

export const fmtDate = (d: string) =>
  new Date(d + "T00:00:00Z").toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** The service page each post naturally leads to. */
export const NEXT_STEP: Record<string, { title: string; href: string }> = {
  "patient-acquisition-google-ads": { title: "Google Ads for doctors", href: "/healthcare-marketing/google-ads-for-doctors" },
  "local-seo-for-clinics-medical-practice-guide": { title: "Local SEO for clinics", href: "/healthcare-marketing/local-seo-for-clinics" },
  "healthcare-content-marketing-trust-and-compliance": { title: "SEO for doctors and clinics", href: "/healthcare-marketing/seo-for-doctors" },
  "increase-clinic-patients-with-effective-medical-seo": { title: "SEO for doctors and clinics", href: "/healthcare-marketing/seo-for-doctors" },
  "5-effective-social-media-strategies-for-healthcare-brands-in-2023-and-beyond": { title: "Reputation management", href: "/healthcare-marketing/reputation-management" },
  "leverage-linkedin-to-grow-your-healthcare-practice-in-2023": { title: "Marketing for individual doctors", href: "/healthcare-marketing/doctors" },
  "enhance-mental-health-centers-online-presence": { title: "Marketing for clinics", href: "/healthcare-marketing/clinics" },
};

/** Fallback next step for posts not listed above, by the old site's category tag. */
export function nextStepFor(p: Post): { title: string; href: string } {
  if (NEXT_STEP[p.slug]) return NEXT_STEP[p.slug];
  const c = (p.category || "").toLowerCase();
  if (c.includes("hospitality") || c.includes("travel")) return { title: "Marketing for hotels, resorts and homestays", href: "/industries/hospitality" };
  if (c.includes("d2c") || c.includes("ecommerce")) return { title: "Marketing for D2C and ecommerce brands", href: "/industries/ecommerce" };
  if (c.includes("health")) return { title: "Marketing for wellness and healthcare brands", href: "/industries/healthcare" };
  return { title: "Our marketing services", href: "/services" };
}
