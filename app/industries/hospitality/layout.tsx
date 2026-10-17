import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospitality & Travel Marketing",
  description:
    "Shift the booking mix toward direct without losing OTA visibility — for hotels, resorts, homestays and boutique properties across India.",
  keywords: [
    "hotel marketing agency India",
    "direct booking strategy",
    "OTA commission reduction",
    "homestay marketing",
    "resort digital marketing",
    "metasearch hotel marketing",
    "hospitality SEO India",
  ],
  alternates: { canonical: "/industries/hospitality" },
  openGraph: {
    title: "Hospitality & Travel Marketing | Monk Mantra",
    description:
      "The OTA trade-off, the billboard effect, rate parity and direct booking — hospitality marketing for hotels, resorts, homestays and boutique properties.",
    url: "/industries/hospitality",
    type: "website",
  },
};

export default function HospitalityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
