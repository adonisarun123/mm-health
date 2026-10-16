import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getLegal } from "@/lib/legal";

const d = getLegal("data-processing");
export const metadata: Metadata = { title: d.title, description: d.description, alternates: { canonical: "/data-processing" } };

export default function Page() {
  return <LegalPage slug="data-processing" />;
}
