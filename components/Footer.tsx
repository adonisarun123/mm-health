import Link from "next/link";
import { SITE } from "@/lib/site";

const COLS = [
  {
    title: "Industries",
    links: [
      ["Healthcare providers", "/healthcare-marketing"],
      ["Healthcare brands", "/industries/healthcare"],
      ["E-commerce and D2C", "/industries/ecommerce"],
      ["SaaS and technology", "/industries/saas"],
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
    title: "Healthcare",
    links: [
      ["Marketing for doctors", "/healthcare-marketing/doctors"],
      ["Marketing for clinics", "/healthcare-marketing/clinics"],
      ["Marketing for hospitals", "/healthcare-marketing/hospitals"],
      ["SEO for doctors", "/healthcare-marketing/seo-for-doctors"],
      ["Local SEO for clinics", "/healthcare-marketing/local-seo-for-clinics"],
      ["Google Ads for doctors", "/healthcare-marketing/google-ads-for-doctors"],
      ["Reputation management", "/healthcare-marketing/reputation-management"],
    ],
  },
  {
    title: "Front desk",
    links: [
      ["MedDeskOS platform", "/platform"],
      ["Appointment booking", "/custom-tools/patient-appointment-booking-system"],
      ["WhatsApp automation", "/custom-tools/whatsapp-automation-for-clinics"],
      ["Patient CRM and recall", "/custom-tools/patient-crm"],
      ["Tools for hospitals", "/custom-tools/for-hospitals"],
    ],
  },
  {
    title: "Measure",
    links: [
      ["All services", "/services"],
      ["Analytics and reporting", "/services/analytics-reporting"],
      ["Patient acquisition economics", "/healthcare-marketing/patient-acquisition"],
      ["How we measure results", "/case-studies"],
      ["Revenue leak estimator", "/#estimator"],
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
              A performance marketing and software team for Indian businesses, deepest in healthcare. We get you found, fix what happens after the enquiry, and report in customers, not clicks.
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
