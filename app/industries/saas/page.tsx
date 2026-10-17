import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "SaaS & Technology Marketing",
  description:
    "SaaS marketing built on compounding content and product-led growth — bottom-of-funnel pages, review platforms and pipeline metrics instead of MQL counts.",
  keywords: [
    "SaaS marketing agency India",
    "product led growth marketing",
    "B2B SaaS SEO",
    "SaaS content marketing",
    "G2 review strategy",
    "SaaS demand generation",
    "technology marketing agency",
  ],
  alternates: { canonical: "/industries/saas" },
  openGraph: {
    title: "SaaS & Technology Marketing | Monk Mantra",
    description:
      "Compounding content, product-led growth and bottom-of-funnel pages that convert — for Indian SaaS competing on a global keyword set.",
    url: "/industries/saas",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/industries/saas",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "SaaS & Technology", path: "/industries/saas" },
  ],
  eyebrow: "For software and technology companies",
  h1: "SaaS marketing is a compounding-content problem, not a lead-generation problem",
  answer:
    "SaaS marketing works by building assets that keep converting after the campaign stops — bottom-of-funnel pages, product-led signup paths and third-party proof. Monk Mantra builds that engine around one clearly chosen motion, self-serve or sales-led, and reports on pipeline and product-qualified signals rather than MQL counts.",
  subhead:
    "The recurring failure is running a self-serve content strategy and an enterprise sales motion at the same time, from the same site, against the same metric. They pull in opposite directions and both underperform.",
  heroBullets: [
    "One motion chosen deliberately, not both by accident",
    "Bottom-of-funnel pages that convert years after publication",
    "Review platforms treated as an acquisition channel",
    "Measured in pipeline and product-qualified signals, not MQLs",
  ],
  primaryCta: { label: "Get a SaaS growth audit", href: "/get-started" },
  secondaryCta: { label: "See all services", href: "/services" },

  keyFacts: [
    { label: "Best fit", value: "B2B SaaS with a defined category, a working product and at least early revenue" },
    { label: "Core work", value: "Bottom-of-funnel content, category and comparison pages, PLG onboarding, review platform presence, lifecycle" },
    { label: "Starting from", value: "₹25,000 per month, scaling with content volume and how many motions you run" },
    { label: "Time to signal", value: "Bottom-of-funnel pages within 8–14 weeks; the compounding curve from month 5 onward" },
    { label: "Primary metrics", value: "Pipeline created, product-qualified signals, activation rate, payback period — not MQL count" },
    { label: "Poor fit", value: "Pre-product companies, and anyone whose plan depends on creating a new category on a small budget" },
  ],

  pains: {
    title: "Why SaaS marketing budgets underperform",
    intro:
      "Rarely because the tactics were wrong in isolation. Usually because two incompatible motions were funded from one budget and judged by one metric.",
    items: [
      {
        problem: "One content strategy is asked to serve both self-serve and enterprise buyers",
        fix:
          "A self-serve buyer wants to try the product in four minutes without talking to anyone. An enterprise buyer wants security documentation, an implementation plan and a reference call. The same page cannot do both, and the same call to action definitely cannot. We separate the paths at the information architecture level and let each have its own conversion definition.",
      },
      {
        problem: "The blog produces traffic that never signs up",
        fix:
          "Top-of-funnel explainers built for volume attract people researching a concept, not choosing a tool. They have a role, but they are not where revenue comes from. The pages that convert are alternatives pages, head-to-head comparisons, integration pages, use-case pages and honest pricing — the queries someone types when they have already decided to buy something.",
      },
      {
        problem: "MQL is the headline metric and it is telling you very little",
        fix:
          "An MQL is a definition your team invented, and definitions drift toward whatever is easy to produce. Volume goes up, sales complains about quality, and the argument repeats every quarter. We move reporting to pipeline created, product-qualified signals from actual usage, and win rate by source — numbers that cannot be gamed by loosening a score threshold.",
      },
      {
        problem: "Trials are running but nobody knows why activation is low",
        fix:
          "For any product-led motion the marketing job does not end at signup. If a user never reaches the moment the product becomes obviously useful, the acquisition spend is wasted regardless of how cheap the signup was. We instrument the path to first value, then fix onboarding, empty states and lifecycle messaging before spending more on the top of the funnel.",
      },
    ],
  },

  offerings: {
    title: "What a SaaS engagement covers",
    intro:
      "Nine workstreams. Which ones apply depends almost entirely on whether you are self-serve, sales-led, or genuinely both with the resources to fund both.",
    items: [
      {
        icon: "Target",
        title: "Motion definition",
        body: "The first deliverable: which motion you are actually running, what that implies for pricing, content, staffing and sales, and where the current site contradicts itself. Everything else follows from this.",
      },
      {
        icon: "FileText",
        title: "Bottom-of-funnel content",
        body: "Alternatives pages, head-to-head comparisons, integration pages, use-case pages and role pages — written honestly, including where a competitor is genuinely the better choice. These convert for years and are the highest-return asset in SaaS marketing.",
        href: "/services/content-marketing",
      },
      {
        icon: "Search",
        title: "Compounding organic",
        body: "Topic clusters covering a subject to completion, technical foundations that let a large content library actually index, and internal linking that concentrates authority instead of scattering it.",
        href: "/services/seo-organic-growth",
      },
      {
        icon: "Zap",
        title: "Product-led growth work",
        body: "Signup friction, path to first value, activation instrumentation, empty-state design, in-product prompts and the upgrade moment. Marketing that continues after the user is inside the product.",
      },
      {
        icon: "Star",
        title: "Review platform presence",
        body: "G2, Capterra and category directories are a genuine acquisition channel, not a vanity badge. Systematic review collection tied to product moments, category placement, and profile pages treated with the same care as landing pages.",
      },
      {
        icon: "Wallet",
        title: "Pricing page and packaging support",
        body: "Pricing transparency, plan structure that matches how customers actually grow, and the trial versus freemium versus demo decision made against your support load and sales capacity rather than against fashion.",
      },
      {
        icon: "Megaphone",
        title: "Paid acquisition",
        body: "Competitor and category search, retargeting against a documented funnel, and paid social where the audience is genuinely reachable. Budgeted against payback period rather than cost per lead.",
        href: "/services/ppc-management",
      },
      {
        icon: "Send",
        title: "Lifecycle and retention",
        body: "Onboarding sequences, expansion prompts, churn-risk signals and renewal communication. For subscription businesses retention moves revenue faster than acquisition does, and it is consistently underfunded.",
      },
      {
        icon: "LineChart",
        title: "Measurement that survives scrutiny",
        body: "Product analytics joined to marketing sources, product-qualified signal definitions agreed with sales, pipeline and win-rate reporting by source, and CAC payback by motion.",
        href: "/services/conversion-optimization",
      },
    ],
  },

  process: {
    title: "How a SaaS engagement runs",
    intro: "Decide the motion, build the assets that compound, then instrument what happens inside the product.",
    items: [
      {
        duration: "Weeks 1–3",
        title: "Motion and demand audit",
        body:
          "Which motion the business is genuinely running, where the site and pricing contradict it, what the existing content library earns, and the query landscape you can realistically win. Delivered in writing whether or not the engagement continues.",
      },
      {
        duration: "Weeks 3–10",
        title: "Bottom of the funnel first",
        body:
          "Comparison, alternatives, integration and use-case pages built before top-of-funnel volume, because they convert at a far higher rate and prove the model faster. Pricing page and signup path fixed alongside.",
      },
      {
        duration: "Months 3–6",
        title: "Compound and instrument",
        body:
          "Topic clusters published to completion, review collection running as a repeatable process, activation and lifecycle instrumented so product usage feeds back into marketing decisions.",
      },
      {
        duration: "Ongoing",
        title: "Defend and expand",
        body:
          "Comparison pages refreshed as competitors change their pricing and features, decaying content updated, new territory taken where the gap analysis supports it. A stale alternatives page is worse than none.",
      },
    ],
  },

  table: {
    caption: "Motion, fit, content and metric",
    columns: ["Motion", "Who it fits", "The content that works", "Primary metric"],
    rows: [
      [
        "Self-serve / product-led",
        "Low price point, fast time to value, a user who can adopt without procurement",
        "Use-case pages, integration pages, template and tool pages, transparent pricing, in-product onboarding",
        "Activation rate and product-qualified signals",
      ],
      [
        "Sales-led enterprise",
        "High contract value, multi-stakeholder buying, security and procurement review",
        "Security and compliance documentation, implementation detail, ROI models, customer proof, analyst-style material",
        "Pipeline created and win rate by source",
      ],
      [
        "Hybrid, run deliberately",
        "A self-serve tier feeding an enterprise tier, with the resources to staff both",
        "Two separate journeys with separate calls to action and a defined handover to sales",
        "Payback period per motion, tracked separately",
      ],
      [
        "Hybrid, run by accident",
        "Nobody — this is the common failure state",
        "One blog and one demo form trying to serve everybody",
        "MQL count, which is why nobody trusts the number",
      ],
      [
        "Free trial",
        "Products whose value is obvious inside a fortnight",
        "Trial landing pages, onboarding sequences, in-trial nudges toward first value",
        "Trial to paid conversion and time to first value",
      ],
      [
        "Freemium",
        "Products with network effects or genuinely low marginal serving cost",
        "Content aimed at the free use case, plus a clearly defined upgrade trigger",
        "Free to paid conversion and cost to serve free users",
      ],
      [
        "Demo-led",
        "Complex configuration, or a buyer who expects to be sold to",
        "Comparison and evaluation content, pricing guidance, pre-demo qualification material",
        "Demo to opportunity rate, not demo count",
      ],
    ],
  },

  prose: {
    title: "How we think about SaaS growth",
    blocks: [
      {
        heading: "Bottom-of-funnel content is the highest-return asset you can build",
        paragraphs: [
          "Someone searching for an alternative to a named product, or comparing two tools, or checking whether you integrate with the system they already run, has finished deciding to buy something. They are only deciding what. Those pages convert at a multiple of what an educational blog post does, and they keep converting long after they are published.",
          "They also demand honesty to work. A comparison page that says you win on every axis is read as marketing and discounted entirely. One that states plainly where a competitor is the better fit gets believed on the points where you do win. The same applies to alternatives pages: the reader already suspects the answer is biased, so the only way to be useful is to be accurate about the trade-offs.",
        ],
        bullets: [
          "Alternatives and comparison pages for every competitor you genuinely lose deals to",
          "An integration page per meaningful integration, each with a real use case",
          "Use-case and role pages that name the job rather than the feature",
          "Pricing published — hiding it filters out more good buyers than bad ones",
        ],
      },
      {
        heading: "MQL misleads because it is a definition, not a measurement",
        paragraphs: [
          "Every MQL threshold is invented internally, and any invented threshold drifts toward whatever produces a comfortable number. Marketing hits target, sales says the leads are poor, and the quarterly argument repeats without either side being able to prove anything.",
          "Replace it with things that are harder to bend. Product-qualified signals — the user invited a teammate, connected a data source, completed the action the product exists for — come from behaviour rather than from a scoring rule. Pipeline created and win rate by source come from the sales system rather than the marketing one. Both are less flattering and considerably more useful.",
        ],
      },
      {
        heading: "Category creation is usually the wrong ambition for a small company",
        paragraphs: [
          "Creating a category means funding the education of an entire market on the possibility that you own the resulting demand. It is expensive, slow and frequently ends with a better-funded competitor arriving to harvest the demand you paid to create.",
          "The alternative is almost always better for a company of modest size: compete inside an existing category where people are already searching, win a specific segment of it decisively, and let the positioning narrow rather than the category widen. Being the obvious choice for logistics companies in a crowded category beats being the only entrant in a category nobody searches for yet.",
        ],
      },
      {
        heading: "Indian SaaS selling globally competes on a global keyword set from day one",
        paragraphs: [
          "There is no protected home market in software search. An Indian SaaS company targeting global buyers is competing for exactly the same queries as well-funded incumbents from the first page it publishes, with none of the domain authority. Volume-based content strategies simply do not work from that starting position.",
          "What does work is depth in a narrow territory: a segment, a workflow or an integration ecosystem covered more completely than anyone else bothers to. Local advantages are real too — cost structure, support hours across time zones, and pricing that works in markets the incumbents ignore — and they belong on the page rather than being treated as something to hide.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "How long before SaaS content marketing produces pipeline?",
      answer:
        "Bottom-of-funnel pages typically show signal within eight to fourteen weeks, because the queries are low volume, low competition and high intent — a comparison page can start converting almost as soon as it indexes. Broader topical clusters take longer, usually from month five onward, and that is where the compounding effect people expect from content actually lives. If you need pipeline this quarter, paid search and outbound are the honest answer, with content built alongside rather than instead.",
    },
    {
      question: "Free trial, freemium or demo — which should we run?",
      answer:
        "It depends on time to value and cost to serve. A free trial suits products whose value is obvious inside a fortnight. Freemium suits products with network effects or genuinely low marginal cost per free user, and it fails badly when free users are expensive to support. Demo-led suits complex configuration or buyers who expect a sales conversation. The mistake is choosing based on what similar companies do rather than on your own support load, sales capacity and how long your product takes to prove itself.",
    },
    {
      question: "Are G2 and Capterra worth investing in?",
      answer:
        "Yes, as an acquisition channel rather than a badge. Buyers comparing tools go to these platforms during evaluation, and category placement plus review volume and recency directly affect who gets shortlisted. The work is systematic: ask for reviews at the moment a customer has just succeeded at something rather than in a quarterly blast, keep the profile as current as your own site, and respond to critical reviews properly. Treat the paid placements as media spend to be measured, not as a subscription to renew unexamined.",
    },
    {
      question: "Should we try to create a new category?",
      answer:
        "Almost certainly not, unless you are very well funded and have several years of patience. Category creation means paying to educate a market before anyone is searching for what you sell, and the risk is that a larger competitor arrives later and harvests demand you funded. For most companies the better play is to compete inside an existing category where buying intent already exists, then dominate a specific segment of it. Narrow the positioning rather than widening the category — it is cheaper, faster and considerably more defensible.",
    },
    {
      question: "We are an Indian SaaS company selling to the US and Europe. Does that change the approach?",
      answer:
        "It changes the difficulty rather than the method. You compete on the same global keyword set as funded incumbents from your first published page, without their domain authority, so broad volume plays are not available to you. Depth in a narrow territory is: one segment, workflow or integration ecosystem covered more completely than anyone else has bothered to. Your structural advantages — cost, support across time zones, pricing that fits markets incumbents ignore — should be stated openly on the site rather than treated as something to obscure.",
    },
    {
      question: "When are you the wrong agency for a SaaS company?",
      answer:
        "When there is no product yet, because there is nothing to demonstrate and no usage data to instrument. When the plan depends on category creation with a modest budget, since we will spend the first meeting arguing against it. When leadership wants MQL volume reported monthly and is not open to changing the metric, because we will keep producing numbers that contradict the dashboard. And when nobody internally can make product changes — if onboarding and pricing are frozen, a large part of SaaS marketing is simply unavailable.",
    },
  ],

  related: {
    title: "Related pages",
    items: [
      { title: "All industries", href: "/industries", body: "The other sectors we work across." },
      { title: "SEO & organic growth", href: "/services/seo-organic-growth", body: "The compounding engine underneath SaaS content." },
      { title: "Content marketing", href: "/services/content-marketing", body: "How the bottom-of-funnel library actually gets produced." },
      { title: "Conversion optimisation", href: "/services/conversion-optimization", body: "Signup friction, activation and the path to first value." },
      { title: "PPC management", href: "/services/ppc-management", body: "Competitor and category search while organic compounds." },
      { title: "Custom tools", href: "/custom-tools", body: "When the reporting you need does not exist off the shelf." },
    ],
  },

  cta: {
    title: "Find out which motion you are actually running",
    body: "We will audit your site, pricing and content against the motion your business really depends on, and send you the contradictions in writing with the fixes ranked by impact.",
    primary: { label: "Get the SaaS audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "SaaS and Technology Marketing",
    serviceType: "Industry Digital Marketing",
    audienceType: "B2B SaaS, product-led software companies and technology businesses",
    areaServed: ["India", "Global"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
