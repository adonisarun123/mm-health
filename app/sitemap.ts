import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { TOPICS, getPosts } from "@/lib/posts";

const ROUTES: [string, number][] = [
  ["/", 1], ["/get-started", 0.7], ["/platform", 0.6], ["/case-studies", 0.7],
  ["/healthcare-marketing", 0.8], ["/healthcare-marketing/doctors", 0.75], ["/healthcare-marketing/clinics", 0.75],
  ["/healthcare-marketing/hospitals", 0.75], ["/healthcare-marketing/seo-for-doctors", 0.75], ["/healthcare-marketing/local-seo-for-clinics", 0.75],
  ["/healthcare-marketing/google-ads-for-doctors", 0.75], ["/healthcare-marketing/reputation-management", 0.75], ["/healthcare-marketing/patient-acquisition", 0.75],
  ["/custom-tools", 0.8], ["/custom-tools/for-doctors", 0.75], ["/custom-tools/for-clinics", 0.75], ["/custom-tools/for-hospitals", 0.75],
  ["/custom-tools/patient-appointment-booking-system", 0.75], ["/custom-tools/whatsapp-automation-for-clinics", 0.75], ["/custom-tools/patient-crm", 0.75],
  ["/industries", 0.9], ["/industries/healthcare", 0.85], ["/industries/ecommerce", 0.85], ["/industries/saas", 0.85], ["/industries/hospitality", 0.85],
  ["/industries/real-estate", 0.85], ["/industries/education", 0.85], ["/industries/financial", 0.85], ["/industries/professional-services", 0.85],
  ["/industries/manufacturing", 0.85], ["/industries/nonprofit", 0.85],
  ["/services", 0.9], ["/services/seo-organic-growth", 0.8], ["/services/ppc-management", 0.8], ["/services/content-marketing", 0.8],
  ["/services/social-media-marketing", 0.8], ["/services/email-marketing", 0.8], ["/services/marketing-automation", 0.8],
  ["/services/conversion-optimization", 0.8], ["/services/analytics-reporting", 0.8], ["/services/web-design-development", 0.8],
  ["/services/video-marketing", 0.75], ["/services/mobile-marketing", 0.75], ["/services/ai-marketing-strategy", 0.75],
  ["/about", 0.6], ["/contact", 0.6], ["/careers", 0.4],
  ["/privacy-policy", 0.2], ["/terms-of-service", 0.2], ["/cookie-policy", 0.2], ["/data-processing", 0.2],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = ROUTES.map(([p, priority]) => ({ url: `${SITE.url}${p}`, lastModified: new Date(), changeFrequency: "monthly", priority }));
  const posts: MetadataRoute.Sitemap = getPosts().map((p) => ({ url: `${SITE.url}/blog/${p.slug}`, lastModified: new Date(p.updated || p.date), changeFrequency: "yearly", priority: 0.6 }));
  return [...pages, { url: `${SITE.url}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    ...TOPICS.map((t) => ({ url: `${SITE.url}/blog/category/${t.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.6 })), ...posts];
}
