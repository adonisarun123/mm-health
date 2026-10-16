import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const ROUTES: [string, number][] = [
  ["/", 1], ["/get-started", 0.7], ["/platform", 0.9], ["/case-studies", 0.7],
  ["/healthcare-marketing", 0.95], ["/healthcare-marketing/doctors", 0.9], ["/healthcare-marketing/clinics", 0.9],
  ["/healthcare-marketing/hospitals", 0.9], ["/healthcare-marketing/seo-for-doctors", 0.9], ["/healthcare-marketing/local-seo-for-clinics", 0.9],
  ["/healthcare-marketing/google-ads-for-doctors", 0.9], ["/healthcare-marketing/reputation-management", 0.9], ["/healthcare-marketing/patient-acquisition", 0.9],
  ["/custom-tools", 0.95], ["/custom-tools/for-doctors", 0.85], ["/custom-tools/for-clinics", 0.85], ["/custom-tools/for-hospitals", 0.85],
  ["/custom-tools/patient-appointment-booking-system", 0.9], ["/custom-tools/whatsapp-automation-for-clinics", 0.9], ["/custom-tools/patient-crm", 0.9],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(([p, priority]) => ({ url: `${SITE.url}${p}`, lastModified: new Date(), changeFrequency: "monthly", priority }));
}
