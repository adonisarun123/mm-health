import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Manufacturing Marketing",
  description:
    "Industrial B2B marketing built on specification depth — technical documentation, part-level search, export enquiries and patient multi-touch attribution.",
  keywords: [
    "manufacturing marketing agency India",
    "industrial B2B marketing",
    "technical content marketing",
    "engineering SEO",
    "export lead generation India",
    "IndiaMART alternative strategy",
    "B2B manufacturer marketing",
  ],
  alternates: { canonical: "/industries/manufacturing" },
  openGraph: {
    title: "Manufacturing Marketing | Monk Mantra",
    description:
      "Specification depth beats campaigns in industrial B2B. Technical documentation, part-level search, distributor alignment and export demand.",
    url: "/industries/manufacturing",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/industries/manufacturing",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Manufacturing", path: "/industries/manufacturing" },
  ],
  eyebrow: "Industrial and B2B manufacturing",
  h1: "In industrial B2B, documentation outperforms campaigns",
  answer:
    "Manufacturing marketing works by being findable and verifiable at specification level, because the buyer is a technical person searching part numbers, materials and tolerances rather than reading advertising. Monk Mantra builds the documentation layer — specs, drawings, application notes, compliance evidence — and measures it across a sales cycle counted in quarters.",
  subhead:
    "The buying population for an industrial component is small, technical and patient. You do not persuade it with a campaign. You get shortlisted by being the supplier whose specification is easiest to verify.",
  heroBullets: [
    "Findable at part number and specification level",
    "Technical documentation as the competitive moat",
    "Multi-touch attribution across cycles of six months and longer",
    "Export and distributor demand handled without channel conflict",
  ],
  primaryCta: { label: "Get an industrial demand audit", href: "/get-started" },
  secondaryCta: { label: "See all services", href: "/services" },

  keyFacts: [
    { label: "Best fit", value: "Component and equipment manufacturers, precision engineering, contract manufacturing, industrial consumables and capital equipment" },
    { label: "The buyer", value: "Design engineers, maintenance engineers, quality teams and procurement — usually three to six people, rarely one" },
    { label: "The winning asset", value: "Specification depth: datasheets, drawings, material and tolerance detail, application notes, certifications" },
    { label: "Typical cycle", value: "Three months for a consumable, six to eighteen for capital equipment or a qualified component" },
    { label: "Starting from", value: "₹18,000 per month, scaling with catalogue size and whether technical writing sits with us" },
    { label: "Poor fit", value: "Anyone expecting monthly lead targets from a market with a few hundred realistic buyers" },
  ],

  pains: {
    title: "Why industrial marketing budgets get written off",
    intro:
      "Usually because the programme was measured on a consumer timescale, or because the website was built to impress visitors rather than to answer engineers.",
    items: [
      {
        problem: "The site describes capabilities but publishes no specifications",
        fix:
          "An engineer evaluating a supplier wants dimensions, materials, tolerances, load ratings, operating ranges, finish options and the standards you comply with. A page saying you deliver quality and precision tells them nothing and is invisible to the searches they run. We publish the specification layer as indexable pages, with the PDF as a supplement rather than the only version.",
      },
      {
        problem: "Every useful document is behind a long form",
        fix:
          "Gating a datasheet suppresses exactly the traffic worth having. Engineers comparing suppliers will simply use the competitor whose specification is visible, and the form fills you do collect are heavily weighted toward students, competitors and people who will never buy. Publish the specification openly, gate only genuinely high-effort assets, and let the enquiry come from someone who has already qualified themselves.",
      },
      {
        problem: "Attribution kills the programme before it matures",
        fix:
          "A cycle that runs eighteen months and involves five people will always look poor under last-click reporting, which credits the final brand search and calls everything else waste. We record first touch as well as last, track opportunities and quoted value rather than form fills, and agree in month one what a reasonable early signal looks like.",
      },
      {
        problem: "Digital marketing quietly competes with your own distributors",
        fix:
          "Publishing prices, taking direct enquiries or bidding on terms your dealers rely on creates conflict that surfaces later as an angry phone call. We define the rules up front: what the manufacturer site owns, where enquiries route by territory, what co-branded material distributors get, and which search terms are theirs rather than yours.",
      },
    ],
  },

  offerings: {
    title: "What a manufacturing engagement covers",
    intro:
      "Nine workstreams. The first three carry most of the value; the rest depend on whether you export, sell through distributors, or exhibit.",
    items: [
      {
        icon: "FileText",
        title: "Technical documentation as content",
        body: "Datasheets, specification tables, material and tolerance data, application notes and installation guidance published as indexable pages. This is the asset competitors cannot copy quickly, because it requires your engineers.",
      },
      {
        icon: "Search",
        title: "Part and specification level search",
        body: "Pages built around how engineers actually search: part numbers, standards, material grades, dimensions, tolerances and application phrases, plus the supplier-and-location queries procurement runs.",
        href: "/services/seo-organic-growth",
      },
      {
        icon: "Database",
        title: "Product catalogue architecture",
        body: "A structured, filterable catalogue where every variant is a real URL with its own specification, so long-tail technical queries land on the exact part rather than a category page.",
      },
      {
        icon: "ShieldCheck",
        title: "Compliance and certification content",
        body: "Quality certifications, test reports, material traceability and standards conformance presented so a quality engineer can verify you without an email exchange. In regulated supply chains this is frequently the shortlisting criterion.",
      },
      {
        icon: "Globe",
        title: "Export and international demand",
        body: "Country and standard-specific content, capability documentation aimed at foreign buyers evaluating Indian suppliers, and enquiry handling built for time zones and language differences.",
      },
      {
        icon: "Share2",
        title: "Distributor and dealer alignment",
        body: "Territory-based enquiry routing, co-branded material, a clear split of which search terms and which enquiry types belong to the channel, and a portal if the network is large enough to need one.",
        href: "/custom-tools",
      },
      {
        icon: "Building2",
        title: "Marketplace strategy",
        body: "IndiaMART and TradeIndia handled deliberately — useful for volume and discovery, weak on margin and buyer quality. We treat them as one input measured on converted value, not as the demand engine.",
      },
      {
        icon: "CalendarCheck",
        title: "Trade show amplification",
        body: "Digital work before, during and after an exhibition: targeted outreach to attendee accounts, meeting booking, on-stand capture that does not rely on a paper form, and structured follow-up in the fortnight afterwards.",
      },
      {
        icon: "LineChart",
        title: "Long-cycle measurement",
        body: "Multi-touch attribution, opportunity and quote-value reporting, and a view of which technical pages appear in the journeys that end in an order.",
        href: "/services/conversion-optimization",
      },
    ],
  },

  process: {
    title: "How a manufacturing engagement runs",
    intro: "Understand the technical buyer, publish what they need to verify, then measure patiently.",
    items: [
      {
        duration: "Weeks 1–4",
        title: "Buyer and catalogue audit",
        body:
          "Interviews with your sales and applications engineers on what buyers actually ask, an audit of what the site publishes against what a specifier needs, and a query map covering part numbers, standards and application searches.",
      },
      {
        duration: "Weeks 4–12",
        title: "Publish the specification layer",
        body:
          "Catalogue architecture rebuilt so every variant has a URL, specifications published as structured pages, certifications made visible, and gating removed from documents that are suppressing qualified traffic.",
      },
      {
        duration: "Months 3–8",
        title: "Application depth and channels",
        body:
          "Application notes and selection guidance written with your engineers, export-facing material where relevant, distributor rules implemented, and trade show programmes built around the exhibition calendar.",
      },
      {
        duration: "Ongoing",
        title: "Maintain and extend",
        body:
          "Specifications updated when products change, new parts added to the catalogue as they launch, and quarterly review of which pages appear in journeys that became orders. A catalogue that drifts out of date loses trust faster than it loses rankings.",
      },
    ],
  },

  table: {
    caption: "What the buyer searches at each stage, and who inside your company owns the answer",
    columns: ["Buyer stage", "What they search", "The asset that wins", "Who inside the company owns it"],
    rows: [
      [
        "Problem definition",
        "Application and failure phrases — how to prevent a specific wear mode, why a component fails in a given condition",
        "Application notes and troubleshooting content written by an applications engineer",
        "Applications or service engineering, with marketing editing",
      ],
      [
        "Solution research",
        "Material grades, standards, comparison of two methods or two materials",
        "Selection guides, material comparison tables, standards explainers",
        "Design or product engineering",
      ],
      [
        "Specification",
        "Part numbers, dimensions, tolerances, load and operating ranges, finish options",
        "Indexable specification pages, downloadable drawings and CAD files, complete datasheets",
        "Product engineering and technical documentation",
      ],
      [
        "Supplier qualification",
        "Manufacturer in India, supplier near me, certification and audit questions",
        "Certification and quality pages, plant and capacity detail, traceability documentation",
        "Quality assurance and plant management",
      ],
      [
        "Commercial evaluation",
        "Company name plus reviews, lead time, minimum order quantity, capacity",
        "Clear commercial terms, lead time honesty, capacity statements, references",
        "Sales, with marketing keeping the pages current",
      ],
      [
        "Procurement and approval",
        "Company name, GST and registration details, compliance documents, vendor forms",
        "A vendor registration pack that is easy to find and complete",
        "Finance and commercial",
      ],
      [
        "Post-order and repeat",
        "Spare part numbers, service intervals, manuals, replacement equivalents",
        "Manuals, spares catalogues and service documentation published openly",
        "Service and after-sales",
      ],
    ],
  },

  prose: {
    title: "How we think about industrial marketing",
    blocks: [
      {
        heading: "The buying population is small, so precision beats reach",
        paragraphs: [
          "For a specialised component there may be a few hundred organisations in the world that could realistically buy it, and within each of those perhaps three people who influence the decision. Impressions are close to meaningless at that scale. What matters is whether the right engineer, at the moment they are specifying, can find and verify you.",
          "That reframes the whole programme. Instead of campaigns aimed at volume, the work is coverage: every part, every standard, every application phrase, every question a specifier asks, answered somewhere findable. It is slower and less visible than advertising, and it is the only version that holds up when the buying population is this narrow.",
        ],
        bullets: [
          "Every product variant should be its own URL with its own specification",
          "Publish the numbers, not adjectives about the numbers",
          "Answer the question an engineer would otherwise email your sales team",
          "Assume the reader is more technical than you are, not less",
        ],
      },
      {
        heading: "Gating specifications suppresses the traffic you are paying to attract",
        paragraphs: [
          "The instinct to put a datasheet behind a form is understandable, and in industrial markets it backfires more than in most. An engineer comparing four suppliers will not fill four forms; they will use the two who published openly and forget the others. The form fills you do capture skew heavily toward people who are not buying.",
          "Publish specifications, drawings and datasheets openly. Reserve gating for assets that genuinely justify an exchange — a custom selection tool, a sizing calculation, a sample request. The enquiries that then arrive come from people who have already read the specification and concluded it fits, which is a materially better conversation for your sales engineers.",
        ],
      },
      {
        heading: "Marketplaces and trade shows both still work, differently",
        paragraphs: [
          "IndiaMART and TradeIndia produce real enquiry volume and are a legitimate discovery channel, particularly for standard products and smaller orders. They also compress margin, put you on a comparison screen against every competitor, and generate a heavy share of price-only enquiries. Use them for what they do, measure them on converted value rather than enquiry count, and do not let them become the entire demand engine.",
          "Trade shows remain among the most efficient ways to meet a technical buyer face to face, and most exhibitors leave most of the value on the floor. The digital work around a show — targeted outreach to attending accounts beforehand, booked meetings, structured capture on the stand, and disciplined follow-up in the fortnight after — usually costs a fraction of the stand and changes what the stand returns.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not promise a monthly lead target in a market with a few hundred realistic buyers, because the only way to hit it is to loosen the definition of a lead until the number stops meaning anything. We will not gate your specifications to manufacture that number either.",
          "We will not publish technical content without an engineer of yours reviewing it. Industrial buyers detect a plausible-sounding technical page written by someone who does not understand the subject almost immediately, and the credibility cost is difficult to recover. If nobody internally can spare a few hours a month for review, we would rather scope the engagement smaller than publish content that damages your standing with the exact audience you want.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "How do engineers and procurement actually search?",
      answer:
        "Very literally, and rarely in the language of marketing. Design engineers search part numbers, material grades, dimensions, tolerances, standards and application phrases describing the problem they are solving. Procurement searches differently again — manufacturer in India, supplier near me, company names plus certification or capacity questions. Neither searches for phrases like innovative engineering solutions. The practical implication is that your catalogue and specification pages, not your capability copy, carry almost all of the findable demand.",
    },
    {
      question: "Should we gate our datasheets and drawings?",
      answer:
        "Generally no. Gating suppresses the traffic you most want, because an engineer comparing several suppliers will use the ones who published openly rather than filling multiple forms. It also degrades lead quality, since the people who do complete forms skew toward students and competitors. Publish specifications, drawings and datasheets openly and reserve gating for genuinely high-effort assets like a custom sizing tool or a sample request. The enquiries that follow come from people who have already verified the fit.",
    },
    {
      question: "Our sales cycle is over a year. How do we know marketing is working?",
      answer:
        "By measuring leading indicators rather than waiting for revenue attribution to close the loop. Within a few months you should see traffic from specification and part-level queries, downloads of technical documents, quote requests from a wider set of accounts, and your sales engineers reporting that enquiries arrive better informed. Then track opportunities and quoted value by first touch as well as last, because last-click reporting on a long multi-person cycle reliably credits brand search and understates everything that created the demand.",
    },
    {
      question: "Are IndiaMART and TradeIndia worth using?",
      answer:
        "They are real channels and worth using deliberately, particularly for standard products, smaller orders and discovery in markets where you have no presence. They also put you on a comparison screen with every competitor, compress margin and generate a high proportion of price-only enquiries. Use them as one input, measure them on converted value rather than enquiry volume, and build your own findability in parallel so you are not renting your entire demand from a platform that can change its terms at any time.",
    },
    {
      question: "How do we market digitally without upsetting our distributors?",
      answer:
        "By agreeing the rules before publishing anything. Decide what the manufacturer site owns — brand, specifications, application content, certifications — and what belongs to the channel, typically pricing, local availability and the transaction. Route enquiries by territory to the right dealer with a response commitment attached. Give distributors co-branded material so they benefit from the demand rather than competing with it, and be explicit about which search terms you will not bid on. Conflict almost always comes from ambiguity rather than from digital marketing itself.",
    },
    {
      question: "We want to start exporting. What does that need?",
      answer:
        "Content that answers what a foreign buyer worries about when evaluating an Indian supplier: which international standards you comply with, what your quality system and audit history look like, real capacity and lead times, packaging and export documentation experience, and how communication works across time zones. Country-specific pages help where standards genuinely differ. Enquiry handling matters as much as the content — a buyer in another time zone who waits two days for a first reply usually has three other quotes by then.",
    },
  ],

  related: {
    title: "Related pages",
    items: [
      { title: "All industries", href: "/industries", body: "The other sectors we work across." },
      { title: "SEO & organic growth", href: "/services/seo-organic-growth", body: "Part-level and specification search, where industrial demand lives." },
      { title: "Content marketing", href: "/services/content-marketing", body: "How technical documentation gets produced and reviewed." },
      { title: "Custom tools", href: "/custom-tools", body: "Product selectors, dealer portals and enquiry routing built to fit." },
      { title: "Conversion optimisation", href: "/services/conversion-optimization", body: "Turning specification traffic into qualified enquiries." },
      { title: "Talk to us", href: "/contact", body: "Tell us what you make and who specifies it." },
    ],
  },

  cta: {
    title: "Find out what your specifiers cannot find",
    body: "We will audit your catalogue and technical content against the way engineers and procurement actually search, and send you the gaps ranked by what they are costing you in enquiries.",
    primary: { label: "Get the industrial audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Manufacturing and Industrial Marketing",
    serviceType: "Industry Digital Marketing",
    audienceType: "Component and equipment manufacturers, precision engineering and industrial suppliers",
    areaServed: ["India"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
