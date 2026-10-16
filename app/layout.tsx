import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { SITE } from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Monk Mantra | Marketing technology for doctors, clinics and hospitals",
    template: "%s | Monk Mantra",
  },
  description:
    "Monk Mantra is the marketing and software team for healthcare in India. We get practices found, run the front desk on MedDeskOS, and report in attended patients, inside medical advertising rules.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: "Monk Mantra | Marketing technology for healthcare",
    description:
      "Get found, convert enquiries into attended appointments, and measure cost per seated patient. Built for doctors, clinics and hospitals.",
  },
  twitter: { card: "summary_large_image", site: "@mantra_monk" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#fffcf9" };

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  areaServed: "IN",
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
  description: "Marketing technology for doctors, clinics and hospitals: search, ads, reputation, MedDeskOS and custom front-desk software.",
  sameAs: Object.values(SITE.social),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={bricolage.variable}>
      <body className="min-h-dvh">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-paper focus:px-4 focus:py-2 focus:text-ink">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        {/* gtag.js is ~500KB uncompressed; load it after the page is idle so it never competes with first paint. */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.ga4}`} strategy="lazyOnload" />
        <Script id="ga4" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${SITE.ga4}');`}
        </Script>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
