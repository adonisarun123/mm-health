import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getLegal } from "@/lib/legal";

const d = getLegal("terms-of-service");
export const metadata: Metadata = { title: d.title, description: d.description, alternates: { canonical: "/terms-of-service" } };

export default function Page() {
  return <LegalPage slug="terms-of-service" />;
}
