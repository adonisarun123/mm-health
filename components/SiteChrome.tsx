"use client";
import { usePathname } from "next/navigation";

/**
 * Wraps the global header, footer and mobile bar. Ads landing pages under /lp/* get none of
 * them: a paid click should see one offer and one form, not the site's navigation.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  if (path.startsWith("/lp/")) return null;
  return <>{children}</>;
}
