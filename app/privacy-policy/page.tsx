import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getLegal } from "@/lib/legal";

const d = getLegal("privacy-policy");
export const metadata: Metadata = { title: d.title, description: d.description, alternates: { canonical: "/privacy-policy" } };

export default function Page() {
  return <LegalPage slug="privacy-policy" />;
}
