import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getLegal } from "@/lib/legal";

const d = getLegal("cookie-policy");
export const metadata: Metadata = { title: d.title, description: d.description, alternates: { canonical: "/cookie-policy" } };

export default function Page() {
  return <LegalPage slug="cookie-policy" />;
}
