import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "SEO & Organic Growth Services",
  description:
    "Technical SEO, topical authority and entity building that compounds — plus the AI-citation work that keeps you visible when the answer never becomes a click.",
  keywords: [
    "SEO agency India",
    "SEO services",
    "technical SEO audit",
    "organic growth agency",
    "topical authority SEO",
    "AI search optimisation",
    "healthcare SEO agency",
  ],
  alternates: { canonical: "/services/seo-organic-growth" },
  openGraph: {
    title: "SEO & Organic Growth Services | Monk Mantra",
    description:
      "Technical health, topical authority and entity building — measured in qualified traffic and enquiries, not rankings screenshots.",
    url: "/services/seo-organic-growth",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/services/seo-organic-growth",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "SEO & Organic Growth", path: "/services/seo-organic-growth" },
  ],
  eyebrow: "SEO and organic growth",
  h1: "SEO that compounds, measured in enquiries rather than rankings",
  answer:
    "SEO is the work of making a site technically retrievable, topically authoritative and demonstrably credible, so search engines and answer engines both surface it. Monk Mantra runs that as three parallel tracks — technical health, content depth and entity authority — and reports on qualified enquiries rather than keyword positions.",
  subhead:
    "A ranking screenshot is not a business outcome. We track positions because they are diagnostic, but the number that decides whether the work continues is enquiries from organic search.",
  heroBullets: [
    "Technical, content and authority run in parallel",
    "Built for AI answers as well as blue links",
    "YMYL-grade sourcing where the topic demands it",
    "Reported in qualified enquiries, not positions",
  ],
  primaryCta: { label: "Get a free SEO audit", href: "/get-started" },
  secondaryCta: { label: "See all services", href: "/services" },

  keyFacts: [
    { label: "What it covers", value: "Technical SEO, content architecture, on-page, internal linking, entity and authority building, digital PR" },
    { label: "Starting from", value: "₹15,000 per month, scaling with site size and competition" },
    { label: "Time to signal", value: "Technical fixes in 4–8 weeks; content compounding from month 4" },
    { label: "Reported on", value: "Qualified organic sessions, enquiries, assisted revenue, share of AI citations" },
    { label: "Best fit", value: "Businesses with a genuine service or product depth to document, and patience past month three" },
    { label: "Poor fit", value: "Anyone needing volume this quarter — that is a paid search problem" },
  ],

  pains: {
    title: "Why most SEO retainers quietly fail",
    intro:
      "Not because the tactics are wrong. Because the sequence is wrong, or because nobody agreed what success looks like before the invoicing started.",
    items: [
      {
        problem: "Content is published onto a broken technical base",
        fix:
          "If pages are slow, thin, duplicated, orphaned or blocked, publishing more of them compounds the problem rather than the authority. We fix crawlability, indexation, speed and internal linking first, because that work also lifts the pages you already have.",
      },
      {
        problem: "Keywords are chosen by volume rather than by intent",
        fix:
          "A high-volume head term with no commercial intent generates traffic that never enquires. We map every target to a stage of the buying decision and accept much smaller volumes where the intent is right — a term with forty searches a month that converts at eight percent beats one with four thousand that converts at nothing.",
      },
      {
        problem: "Nobody built the entity, so nothing is trusted",
        fix:
          "Search engines and language models both try to establish who you are before deciding whether to surface you. Consistent structured data, a resolvable organisation identity, named and credentialled authors, and corroborating mentions elsewhere are what make that possible. Most sites have none of it.",
      },
      {
        problem: "Reporting is a rankings screenshot",
        fix:
          "Positions move for reasons unrelated to the work, vary by location and device, and increasingly do not correspond to traffic at all when the answer appears above the results. We report sessions from qualifying queries, enquiries attributed to organic, and citation share in AI answers.",
      },
    ],
  },

  offerings: {
    title: "The three tracks, run in parallel",
    intro:
      "Technical work unblocks. Content earns relevance. Authority earns trust. Running one without the others is why so many retainers stall at month five.",
    items: [
      {
        icon: "Settings2",
        title: "Technical foundation",
        body: "Crawl and indexation audit, log-file review on larger sites, Core Web Vitals, rendering, canonical and pagination logic, hreflang where relevant, and a fixed list handed to your developers with priorities attached.",
      },
      {
        icon: "Workflow",
        title: "Information architecture",
        body: "How the site is structured, which page owns which query territory, and internal linking that concentrates authority rather than diluting it across near-duplicate pages.",
      },
      {
        icon: "FileText",
        title: "Topical authority content",
        body: "Clusters that cover a subject completely rather than one page per keyword — because both search engines and language models reward demonstrated depth over isolated pages.",
        href: "/services/content-marketing",
      },
      {
        icon: "BadgeCheck",
        title: "Entity and E-E-A-T",
        body: "Organisation and author identity made machine-verifiable: consistent structured data, named authors with real credentials, review bylines on clinical or financial content, and corroboration on third-party sources.",
      },
      {
        icon: "Search",
        title: "AI answer optimisation",
        body: "Answer-first page structure, extractable fact blocks, clean tables and FAQ schema, so you are the source quoted when the query is resolved inside an AI overview or a chat assistant.",
      },
      {
        icon: "MapPin",
        title: "Local SEO where it applies",
        body: "For any business with a physical location, the map pack usually matters more than the organic result. Profile management, service mapping, review velocity and grid rank tracking.",
        href: "/healthcare-marketing/local-seo-for-clinics",
      },
      {
        icon: "Share2",
        title: "Digital PR and links",
        body: "Earned mentions from sources that genuinely cover your sector. We do not buy link packages, participate in private blog networks, or exchange links at scale — those carry risk that lands on you, not on us.",
      },
      {
        icon: "Database",
        title: "Structured data",
        body: "Organisation, Service, Article, FAQ, HowTo, Physician, Product and Breadcrumb markup implemented properly and validated, so eligible pages can win enhanced results.",
      },
      {
        icon: "LineChart",
        title: "Measurement",
        body: "Search Console and analytics wired to distinguish branded from non-branded, tracking of enquiries by landing page, and a monthly view of which clusters are actually earning revenue.",
        href: "/services/analytics-reporting",
      },
    ],
  },

  process: {
    title: "How an SEO engagement runs",
    intro: "Diagnose, unblock, then build. The order matters more than the tactics.",
    items: [
      {
        duration: "Weeks 1–3",
        title: "Audit and territory map",
        body:
          "Full technical crawl, an indexation and cannibalisation review, competitor gap analysis, and a keyword-to-page map that assigns every commercial query an owner. You get the findings in writing regardless of what happens next.",
      },
      {
        duration: "Weeks 3–8",
        title: "Unblock and consolidate",
        body:
          "Technical fixes shipped, thin and duplicate pages merged or removed, internal linking rebuilt, structured data implemented. This phase usually lifts the pages you already have before a single new one is published.",
      },
      {
        duration: "Months 2–6",
        title: "Build the clusters",
        body:
          "One topic cluster at a time, published to completion rather than scattered. Each is reviewed by someone qualified where the subject requires it, and refreshed on a schedule rather than abandoned at publication.",
      },
      {
        duration: "Ongoing",
        title: "Refresh, expand, defend",
        body:
          "Decaying pages updated, new territory taken where the gap analysis shows an opening, and technical regressions caught before they cost you indexation. Most organic decline is a maintenance failure, not an algorithm.",
      },
    ],
  },

  table: {
    caption: "What SEO can and cannot do for you",
    columns: ["Situation", "Is SEO the right tool?", "What we would do instead"],
    rows: [
      [
        "You need enquiries this month",
        "No",
        "Paid search, which produces volume within days once tracking is right",
      ],
      [
        "You have a physical location and no map presence",
        "Partly",
        "Local SEO first — it moves in weeks, not months, and costs no media spend",
      ],
      [
        "Your cost per lead on ads has become unsustainable",
        "Yes",
        "Organic to reduce dependence, run alongside paid rather than replacing it overnight",
      ],
      [
        "You have a genuinely complex product people research first",
        "Yes — strongest case",
        "Topical authority content, because the research phase is where the decision is made",
      ],
      [
        "Your site gets traffic but no enquiries",
        "Not primarily",
        "Conversion work and funnel diagnosis before buying more traffic",
      ],
      [
        "You were hit by a core update or a manual action",
        "Yes, with caution",
        "Diagnose first; recovery timelines are honest guesses and we will say so",
      ],
    ],
  },

  prose: {
    title: "How we think about search in 2026",
    blocks: [
      {
        heading: "A growing share of answers never become clicks",
        paragraphs: [
          "AI overviews, chat assistants and answer boxes increasingly resolve a query without the user visiting anyone. That does not make SEO obsolete, but it does change the objective: for informational queries the win is being the cited source rather than the clicked result, and for commercial queries the click is still there but the competition for it has narrowed.",
          "Practically, this means writing so a machine can lift a clean answer — a direct response in the first two sentences, facts in structured blocks and tables rather than buried in narrative, a named and credentialled author, and claims that can be corroborated elsewhere. It also means accepting that some traffic is simply gone, and shifting the measurement toward commercial queries and brand-name search, which is where the revenue was anyway.",
        ],
        bullets: [
          "Lead every page with the direct answer, then justify it",
          "Put facts in tables and definition lists, not only in prose",
          "Name the author, their credentials, and the review date",
          "Track branded search volume as a proxy for the awareness AI answers create",
        ],
      },
      {
        heading: "Topical depth beats keyword count",
        paragraphs: [
          "The old approach was one page per keyword variation, which produced hundreds of thin, cannibalising pages competing with each other. What works now is covering a subject to the point of completeness: the core explainer, the specific sub-questions, the comparisons, the costs, the objections and the edge cases, internally linked into a coherent cluster with one clear entry point.",
          "This is slower and it is why so many agencies avoid it. It also produces the compounding effect people expect from SEO but rarely get, because authority accrues to the cluster rather than being spread thinly across unrelated pages.",
        ],
      },
      {
        heading: "Where the topic is YMYL, the standard is higher",
        paragraphs: [
          "For health, finance, legal and safety topics, search engines apply visibly stricter quality expectations, and language models are more conservative about which sources they will name. Anonymous content on those subjects does not rank and does not get cited, regardless of how well it is written.",
          "So we build the credibility layer as part of the content process rather than after it: a named clinician or qualified reviewer on every page that requires one, the review date visible, primary sources cited rather than paraphrased from competitor blogs, and clear statements of when a reader should seek professional advice instead of acting on a web page.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We do not buy links, run private blog networks, or trade links at scale. We do not publish AI-generated content at volume without a subject expert reviewing it. We do not create doorway pages for every city in India when you serve three of them.",
          "This is not primarily a principle, it is a risk calculation. The penalty for those tactics lands on your domain and it outlasts the agency relationship by years. If a competitor is out-ranking you using them, we will tell you that is what is happening rather than matching it.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "How long does SEO take to work?",
      answer:
        "Technical fixes often show within four to eight weeks because they unblock pages that already had earned relevance. New content typically takes three to six months to reach meaningful position, longer in competitive or YMYL categories where trust signals accumulate slowly. Local SEO is the fastest branch, frequently moving within six to ten weeks. Anyone promising first-page rankings in thirty days is either targeting terms nobody searches or describing something that will not hold.",
    },
    {
      question: "How much should SEO cost in India?",
      answer:
        "Retainers start from about ₹15,000 per month and scale with site size, competition and how much content production is included. Below roughly ₹10,000 a month you are usually buying a report rather than work. The more useful frame is what an enquiry is worth to you: if an organic enquiry converts at twenty percent into a customer worth ₹80,000, the arithmetic answers the budget question far better than a market average does.",
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer:
        "No, and a guarantee should be treated as a warning sign. Rankings depend on competitors, algorithm changes and personalisation that nobody outside the search engine controls, and results vary by location and device for the same query. What we commit to is a measurement plan agreed before work starts, monthly reporting against it whether the numbers moved or not, and telling you plainly when a target is not winnable at your current authority.",
    },
    {
      question: "Is SEO still worth it now that AI answers so many queries?",
      answer:
        "Yes, but the objective has shifted. Informational queries increasingly resolve without a click, so the win there is being the source the model cites — which builds awareness that shows up later as branded search. Commercial queries, where someone is choosing a provider or a product, still produce clicks and still convert. We now measure both: qualified organic sessions and enquiries, plus citation share in AI answers for the topics that matter to you.",
    },
    {
      question: "Can you do SEO for a site you did not build?",
      answer:
        "Yes, that is the normal case. What changes is the first phase: we audit what exists, and if the platform imposes hard constraints — an architecture that cannot produce clean URLs, a rendering approach search engines struggle with, a CMS that blocks structured data — we will tell you what it costs to work around versus to fix at source, and let you decide. We would rather have that conversation in week two than in month six.",
    },
    {
      question: "Do I need content and SEO, or can I do one?",
      answer:
        "Technical SEO alone will make an existing site perform better, and for a site with real depth already published that can be enough for a while. But past a point you cannot rank for subjects you have not covered, and technical work has a ceiling. Content without technical foundations is worse — publishing into a site that cannot be crawled or that cannibalises itself wastes the production budget. If you can only fund one, fix the technical base first.",
    },
  ],

  related: {
    title: "Related services",
    items: [
      { title: "Content marketing", href: "/services/content-marketing", body: "The editorial system behind topical authority." },
      { title: "PPC management", href: "/services/ppc-management", body: "When you need volume before organic compounds." },
      { title: "Analytics & reporting", href: "/services/analytics-reporting", body: "The measurement that makes SEO defensible." },
      { title: "Conversion optimisation", href: "/services/conversion-optimization", body: "Traffic without conversion is a different problem." },
      { title: "SEO for doctors and clinics", href: "/healthcare-marketing/seo-for-doctors", body: "The healthcare-specific version of this work." },
      { title: "Web design & development", href: "/services/web-design-development", body: "When the platform itself is the constraint." },
    ],
  },

  cta: {
    title: "Find out what is actually holding your rankings back",
    body: "We will crawl your site, check indexation and cannibalisation, and send you a written audit with the fixes ranked by impact — before you commit to anything.",
    primary: { label: "Get the free SEO audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "SEO and Organic Growth Services",
    serviceType: "Search Engine Optimization",
    audienceType: "Healthcare providers, D2C brands, SaaS and service businesses",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
