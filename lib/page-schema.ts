// Shared content model for Monk Mantra's programmatic content pages.
// Every landing page is authored as data, then rendered by
// components/blocks/ContentPage.tsx. This keeps design consistent,
// makes structured data automatic, and makes the copy easy to audit.

export interface Crumb {
  name: string;
  path: string;
}

export interface FactRow {
  label: string;
  value: string;
}

export interface Stat {
  value: string;
  label: string;
  note?: string;
}

export interface Card {
  title: string;
  body: string;
  /** Optional lucide icon name resolved in ContentPage. */
  icon?: string;
  href?: string;
}

export interface PainPoint {
  problem: string;
  fix: string;
}

export interface Step {
  title: string;
  body: string;
  duration?: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface PriceTier {
  name: string;
  price: string;
  cadence?: string;
  summary: string;
  features: string[];
  bestFor: string;
  featured?: boolean;
}

export interface TableBlock {
  caption: string;
  columns: string[];
  rows: string[][];
}

export interface ProseBlock {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface RelatedLink {
  title: string;
  href: string;
  body: string;
}

export interface ContentPageData {
  /** Route path, e.g. "/healthcare-marketing/doctors" */
  path: string;
  crumbs: Crumb[];

  /** Hero */
  eyebrow: string;
  h1: string;
  /** The 40-60 word answer-first paragraph. Feeds the AEO answer box. */
  answer: string;
  subhead?: string;
  heroBullets?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };

  /** "Key facts" table — highly extractable by answer engines. */
  keyFacts?: FactRow[];

  stats?: { title?: string; intro?: string; items: Stat[] };
  pains?: { title: string; intro?: string; items: PainPoint[] };
  offerings?: { title: string; intro?: string; items: Card[] };
  process?: { title: string; intro?: string; items: Step[] };
  table?: TableBlock;
  pricing?: { title: string; intro?: string; note?: string; tiers: PriceTier[] };
  prose?: { title?: string; blocks: ProseBlock[] };
  faqs?: Faq[];
  related?: { title: string; items: RelatedLink[] };

  cta?: { title: string; body: string; primary?: { label: string; href: string }; secondary?: { label: string; href: string } };

  /** Schema helpers */
  schema?: {
    /** "Service" | "SoftwareApplication" | "CollectionPage" */
    type?: "Service" | "SoftwareApplication" | "CollectionPage";
    serviceType?: string;
    serviceName?: string;
    serviceDescription?: string;
    audienceType?: string;
    areaServed?: string[];
    /** For SoftwareApplication */
    applicationCategory?: string;
    offersFrom?: string;
    offersCurrency?: string;
  };
}
