export const SITE = {
  name: "Monk Mantra",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.monkmantra.com",
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
  { label: "Healthcare", href: "/healthcare-marketing" },
  { label: "Industries", href: "/industries" },
  { label: "Services", href: "/services" },
  { label: "MedDeskOS", href: "/platform" },
  { label: "Notes", href: "/blog" },
  { label: "About", href: "/about" },
] as const;
