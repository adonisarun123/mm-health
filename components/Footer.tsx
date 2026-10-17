import Link from "next/link";
import { SITE } from "@/lib/site";

const COLS = [
  {
    title: "Industries",
    links: [
      ["E-commerce and D2C", "/industries/ecommerce"],
      ["SaaS and technology", "/industries/saas"],
      ["Healthcare", "/healthcare-marketing"],
      ["Hospitality and travel", "/industries/hospitality"],
      ["Real estate", "/industries/real-estate"],
      ["Education", "/industries/education"],
      ["Financial services", "/industries/financial"],
      ["Professional services", "/industries/professional-services"],
      ["Manufacturing and B2B", "/industries/manufacturing"],
      ["Nonprofit", "/industries/nonprofit"],
    ],
  },
  {
    title: "Services",
    links: [
      ["SEO and organic growth", "/services/seo-organic-growth"],
      ["PPC management", "/services/ppc-management"],
      ["Content marketing", "/services/content-marketing"],
      ["Social media marketing", "/services/social-media-marketing"],
      ["Conversion optimisation", "/services/conversion-optimization"],
      ["Marketing automation", "/services/marketing-automation"],
      ["Web design and development", "/services/web-design-development"],
      ["All services", "/services"],
    ],
  },
  {
    title: "Measure",
    links: [
      ["Analytics and reporting", "/services/analytics-reporting"],
      ["AI marketing strategy", "/services/ai-marketing-strategy"],
      ["How we measure results", "/case-studies"],
      ["Revenue leak estimator", "/#estimator"],
      ["Free growth audit", "/get-started"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Notes", "/blog"],
      ["Careers", "/careers"],
      ["Contact", "/contact"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-mint">
      <div className="mx-auto max-w-[1320px] px-4 pt-20 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <p className="text-lg leading-snug text-paper">
              A performance marketing and software team for Indian businesses. We get you found, fix what happens after the enquiry, and report in customers, not clicks.
            </p>
            <div className="mt-6 text-muted">
              <a className="flex min-h-11 items-center hover:text-paper" href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <a className="flex min-h-11 items-center hover:text-paper" href={SITE.phoneHref}>{SITE.phone}</a>
              <p>Serving India from {SITE.city}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLS.map((c) => (
              <div key={c.title}>
                <h2 className="text-sm font-semibold text-paper">{c.title}</h2>
                <ul className="mt-3 space-y-0.5">
                  {c.links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} prefetch={false} className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-paper lg:min-h-9">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 text-sm text-muted">
          <p>© {new Date().getFullYear()} Monk Mantra. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5">
            <Link href="/privacy-policy" prefetch={false} className="inline-flex min-h-11 items-center hover:text-paper">Privacy</Link>
            <Link href="/terms-of-service" prefetch={false} className="inline-flex min-h-11 items-center hover:text-paper">Terms</Link>
            <Link href="/cookie-policy" prefetch={false} className="inline-flex min-h-11 items-center hover:text-paper">Cookies</Link>
            <a href={SITE.social.linkedin} className="inline-flex min-h-11 items-center hover:text-paper">LinkedIn</a>
            <a href={SITE.social.instagram} className="inline-flex min-h-11 items-center hover:text-paper">Instagram</a>
            <a href={SITE.social.x} className="inline-flex min-h-11 items-center hover:text-paper">X</a>
          </div>
        </div>
      </div>
      <p aria-hidden="true" className="display pointer-events-none select-none whitespace-nowrap px-2 pb-2 text-center text-[17.5vw] leading-[0.8] text-[#cfe5df]">
        monk mantra
      </p>
    </footer>
  );
}
