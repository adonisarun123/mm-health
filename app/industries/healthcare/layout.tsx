import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare & Medical Marketing",
  description:
    "Marketing for pharma, medical devices, diagnostics, telehealth, health insurance and wellness brands in India — built around what the rules actually allow.",
  keywords: [
    "healthcare marketing agency India",
    "pharma marketing agency",
    "medical device marketing",
    "diagnostics lab marketing",
    "health tech marketing",
    "nutraceutical marketing India",
    "UCPMP compliant marketing",
  ],
  alternates: { canonical: "/industries/healthcare" },
  openGraph: {
    title: "Healthcare & Medical Marketing | Monk Mantra",
    description:
      "Pharma, medtech, diagnostics, telehealth, insurance and wellness marketing in India — scoped to what UCPMP, the Drugs and Magic Remedies Act and FSSAI permit.",
    url: "/industries/healthcare",
    type: "website",
  },
};

export default function HealthcareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
