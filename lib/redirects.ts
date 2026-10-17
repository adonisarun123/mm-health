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
  // Blog categories collapse into the blog index
  r("/blog/category/healthcare-marketing", "/blog"),
  r("/blog/category/:slug*", "/blog"),
];

/**
 * Every other old blog post (D2C, hospitality, general marketing) goes to /blog.
 * Generated from all 73 post files in the old repo, minus the kept healthcare posts.
 * Implemented as a single negative-lookahead rule so new healthcare posts are unaffected:
 * only slugs in this explicit list are redirected.
 */
export const DROPPED_POSTS = [
  "5-proven-revenue-models-for-digital-businesses",
  "a-comprehensive-guide-to-identify-content-gaps",
  "ai-powered-marketing-guide-2024",
  "boost-visibility-with-local-seo-for-wellness-centers",
  "boost-your-nutrition-websites-seo-with-these-expert-tips",
  "boosting-accommodation-bookings-a-dive-into-data-driven-digital-marketing",
  "boosting-b-b-direct-reservations-for-savings",
  "boosting-boutique-beach-stays-seo-strategies-for-hotel-bookings",
  "d2c-retention-email-sms-flows",
  "designing-a-functional-wellness-website",
  "digital-marketing-for-beach-boutiques-tips-strategies",
  "digital-marketing-the-game-changer-for-resort-bookings",
  "digital-strategies-making-your-vacation-stays-truly-stand-out",
  "drive-more-leads-for-your-wellness-business-with-facebook-ads",
  "driving-results-hotel-online-marketing-for-motorists-via-digital-channels",
  "eco-friendly-vacation-branding-crafting-a-sustainable-identity",
  "effective-sem-strategies-to-boost-online-visibility-for-wellness-brands",
  "engaging-budget-travelers-hostel-bookings-social-promotions",
  "enhance-experiences-mobile-optimization-user-testing",
  "enhance-homestay-branding-online-visibility-get-noticed",
  "enhance-homestay-reservations-elevate-digital-presence",
  "enhancing-resort-bookings-online-reputation-management-guide",
  "essential-seo-strategies-to-boost-your-holistic-wellness-website-traffic",
  "get-in-shape-with-a-mobile-friendly-fitness-site",
  "harness-the-power-of-instagram-reels-to-increase-your-brand-visibility",
  "holistic-digital-marketing-for-wellness-brands-seo-content-and-online-strategy",
  "holistic-resort-branding-digital-mastery",
  "homestay-engagement-social-media-connection",
  "how-the-customer-journey-has-changed-and-what-business-owners-need-to-know",
  "how-to-fix-core-web-vitals",
  "identifying-the-appropriate-audience-for-data-analytics",
  "international-seo-guide-for-wellness-brands",
  "key-differences-affiliate-marketing-vs-digital-marketing",
  "lower-d2c-customer-acquisition-cost",
  "maneuvers-to-drive-your-account-based-marketing-process",
  "maneuvers-to-drive-your-account-based-marketing-process-2",
  "mastering-homestay-seo-content-strategies-to-attract-guests-effectively",
  "mastering-resort-landing-pages-the-key-to-boosting-bookings",
  "maximize-resort-bookings-effective-digital-marketing-tips",
  "maximize-seo-and-engagement-on-your-wellness-site",
  "maximizing-search-visibility-through-aipowered-content-writing-platforms",
  "maximizing-your-reach-a-comprehensive-social-media-growth-strategy-for-restaurants",
  "online-success-homestays-digital-marketing",
  "optimize-your-holistic-health-centers-online-presence-with-google-my-business",
  "optimizing-mobile-seo-for-on-the-go-travelers-a-must-for-businesses",
  "optimizing-wellness-through-holistic-ppc-campaigns",
  "promote-your-wellness-brand-on-instagram-for-more-leads",
  "proven-cro-strategies-for-wellness-websites",
  "resort-allure-smart-branding-for-vacation",
  "resort-and-homestay-marketing-secrets",
  "resort-promotions-social-media-storytelling-mastery",
  "resort-voice-search-optimization-engaging-mobile-travelers",
  "roi-boosting-homestay-advertising-targeted-digital-strategies",
  "scale-meta-ads-d2c-brands",
  "sem-strategies-for-homestays-mastering-market-dominance",
  "seo-optimized-content-strategies-to-boost-yoga-website-traffic",
  "stays-to-sales-resort-conversion-strategies",
  "sustainable-travel-digital-eco-strategies",
  "sustainable-travel-influencers-social-synergy",
  "the-future-of-facebook-ads-anticipated-changes-by-2023",
  "the-future-of-google-ads-what-to-expect-in-2023-and-beyond",
  "the-power-of-interdependence-how-sales-and-marketing-enhance-business-success",
  "the-power-of-referral-marketing-for-ecommerce-best-practices",
  "the-real-definition-of-growth-marketing",
  "top-health-and-wellness-seo-experts-to-boost-your-website-traffic",
  "ux-driven-strategies-redefining-resort-digital-experiences",
  "yoga-studio-and-wellness-online-marketing-strategies",
];

export const ALL_REDIRECTS: R[] = [...REDIRECTS, ...DROPPED_POSTS.map((s) => r(`/blog/${s}`, "/blog"))];
