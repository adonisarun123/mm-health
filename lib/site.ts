/** Canonical base URL. A localhost value (e.g. a stray env var) is ignored on Vercel, where it would poison every canonical tag. */
const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteUrl = envUrl && !(process.env.VERCEL && /localhost|127\.0\.0\.1/.test(envUrl)) ? envUrl : "https://www.monkmantra.com";

export const SITE = {
  name: "Monk Mantra",
  url: siteUrl,
  email: "hello@monkmantra.com",
  phone: "+91 98458 60005",
  phoneHref: "tel:+919845860005",
  whatsapp: "https://wa.me/919845860005",
  booking: "https://tidycal.com/monk-mantra/client-onboarding-and-discovery-sessions",
  city: "Bengaluru, India",
  meddeskos: "https://meddeskos.com",
  /** Same GA4 property as the old site, so reporting continues unbroken. */
  ga4: "G-Z5S619DME1",
  social: {
    linkedin: "https://www.linkedin.com/company/monk-mantra/",
    x: "https://x.com/mantra_monk",
    instagram: "https://www.instagram.com/monk_mantra",
  },
} as const;

/**
 * Single source of truth for prices. Carried over from the old site's lib/pricing.ts.
 * House rule: lead with an entry point ("from ₹X"), never a range.
 */
export const PRICE = {
  /** Entry retainer for any sector. */
  base: "₹10,000",
  doctor: "₹12,000",
  clinic: "₹18,000",
  hospital: "₹45,000",
  group: "₹30,000",
  singleTool: "₹15,000",
  whatsapp: "₹9,000",
  booking: "₹15,000",
  patientCrm: "₹25,000",
  doctorSet: "₹35,000",
  clinicSet: "₹50,000",
  hospitalTool: "₹75,000",
} as const;

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "How we measure", href: "/case-studies" },
  { label: "Notes", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
