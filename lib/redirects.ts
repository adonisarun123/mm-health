/**
 * 301 map from the old monkmantra.com for pages that did not come back.
 * Healthcare, /industries/* and /services/* keep their paths, so they are not listed here.
 */
type R = { source: string; destination: string; permanent: true };
const r = (source: string, destination: string): R => ({ source, destination, permanent: true });

// Healthcare and clinical blog posts that migrate with their slugs intact.
export const KEPT_POSTS = [
  "patient-acquisition-google-ads",
  "local-seo-for-clinics-medical-practice-guide",
  "healthcare-content-marketing-trust-and-compliance",
  "increase-clinic-patients-with-effective-medical-seo",
  "5-effective-social-media-strategies-for-healthcare-brands-in-2023-and-beyond",
  "leverage-linkedin-to-grow-your-healthcare-practice-in-2023",
  "enhance-mental-health-centers-online-presence",
];

export const REDIRECTS: R[] = [
  // Resources that are not coming back
  r("/marketing-calculator", "/"),
  r("/free-templates", "/blog"),
  r("/industry-reports", "/blog"),
  r("/webinars", "/blog"),
  r("/help-center", "/contact"),
  r("/resources", "/blog"),
  r("/partnership", "/contact"),
  r("/api-documentation", "/"),
  // Old blog categories with no direct successor (healthcare-marketing and travel-hospitality-marketing are live)
  ...["ai-marketing", "analytics", "content-marketing", "cro", "email-marketing", "ppc-marketing", "seo", "social-media"].map((c) => r(`/blog/category/${c}`, "/blog/category/growth-strategy")),
];

/**
 * Old posts deliberately not republished: unsubstantiated performance claims about Monk Mantra
 * and third parties, or duplicate body text. Everything else from the old blog is live again at its original slug.
 */
export const RETIRED_POSTS: R[] = [
  r("/blog/ai-powered-marketing-guide-2024", "/services/ai-marketing-strategy"),
  r("/blog/top-health-and-wellness-seo-experts-to-boost-your-website-traffic", "/industries/healthcare"),
  // Duplicates of other live posts (same body text); 301 to the copy whose title matches the content
  r("/blog/maneuvers-to-drive-your-account-based-marketing-process-2", "/blog/maneuvers-to-drive-your-account-based-marketing-process"),
  r("/blog/digital-strategies-making-your-vacation-stays-truly-stand-out", "/blog/online-success-homestays-digital-marketing"),
  r("/blog/promote-your-wellness-brand-on-instagram-for-more-leads", "/blog/drive-more-leads-for-your-wellness-business-with-facebook-ads"),
];

export const ALL_REDIRECTS: R[] = [...REDIRECTS, ...RETIRED_POSTS];
