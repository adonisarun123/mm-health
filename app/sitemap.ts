import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
// Phase 1: only routes that exist. Inner pages are added as they are built.
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/get-started"].map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date(), changeFrequency: "weekly", priority: p === "/" ? 1 : 0.7 }));
}
