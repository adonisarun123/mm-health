import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

const data: ContentPageData = {
  path: "/industries/healthcare",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Healthcare & Medical", path: "/industries/healthcare" },
  ],
  eyebrow: "Pharma, medtech, diagnostics, telehealth, insurance and wellness",
  h1: "Healthcare marketing for everyone in the sector who is not a hospital or a clinic",
  answer:
    "Marketing across the healthcare sector is shaped less by channel choice than by what regulation permits you to say and to whom. Monk Mantra scopes each programme to the buyer who actually signs — a prescriber, a procurement committee, a payer or a consumer — and builds only the channels that buyer legitimately uses.",
  subhead:
    "If you are a doctor, a clinic or a hospital, this is the wrong page. Patient acquisition for providers lives at /healthcare-marketing, which covers local search, appointment demand, consultant profiles and reputation in far more depth than a sector overview can.",
  heroBullets: [
    "Providers should start at /healthcare-marketing instead",
    "Pharma, devices, diagnostics, telehealth, insurance, nutraceuticals",
    "Scoped to UCPMP, the Drugs and Magic Remedies Act, FSSAI and DPDP",
    "B2B demand generation where the buyer is a committee, not a consumer",
  ],
  primaryCta: { label: "Discuss your sub-sector", href: "/get-started" },
  secondaryCta: { label: "Provider marketing instead", href: "/healthcare-marketing" },

  keyFacts: [
    { label: "Who this page is for", value: "Pharmaceutical and OTC brands, medical devices and medtech, diagnostics and pathology labs, telehealth and health-tech platforms, health insurance, wellness and nutraceutical D2C, hospital supply B2B" },
    { label: "Who it is not for", value: "Doctors, clinics and hospitals — see /healthcare-marketing, which covers provider demand properly" },
    { label: "The governing constraint", value: "Prescription drug promotion in India is not direct-to-consumer; the UCPMP code governs promotion to healthcare professionals" },
    { label: "Second constraint", value: "The Drugs and Magic Remedies (Objectionable Advertisements) Act schedule blocks consumer advertising of remedies for 50+ listed conditions" },
    { label: "Data law", value: "DPDP Act 2023, with Rules notified in November 2025 — consent, purpose limitation and breach notification, not HIPAA or GDPR" },
    { label: "Starting from", value: "₹25,000 per month, scaling with sub-sector, number of markets and where medico-legal review sits" },
  ],

  pains: {
    title: "Where healthcare-sector marketing usually goes wrong",
    intro:
      "Almost none of it is a creative failure. It is a scoping failure — building a consumer funnel for a product that cannot be sold to consumers, or a lead-gen funnel for a buyer who does not generate leads.",
    items: [
      {
        problem: "A consumer campaign is built for a prescription product",
        fix:
          "Prescription medicines cannot be promoted direct-to-consumer in India, and the UCPMP code sets the boundaries for promotion to healthcare professionals. The workable programme is disease awareness that is genuinely unbranded, medical education and content aimed at prescribers, and a corporate brand presence that carries no product claim. We define that split in writing before any creative is commissioned.",
      },
      {
        problem: "Medical device marketing is run as if a consumer buys the device",
        fix:
          "A capital device is bought by a committee — the clinician who will use it, the biomedical engineer who will maintain it, the finance head who signs and the procurement officer who runs the process. Each wants different evidence. We build parallel material for each role and accept a sales cycle measured in quarters rather than pretending it is a two-week funnel.",
      },
      {
        problem: "Wellness and supplement claims are written like pharma claims",
        fix:
          "Nutraceuticals and supplements sit under FSSAI, and health claims must fit what that framework permits. Separately, CCPA 2022 misleading-advertisement guidelines require every claim to be substantiable on demand. We hold a claims register per SKU that records what is said, where it is said and what supports it, so the answer to a regulator is a document rather than a scramble.",
      },
      {
        problem: "Health data is collected as though the DPDP Act does not apply",
        fix:
          "Symptom checkers, teleconsultation sign-ups, lab test bookings and insurance quote forms all collect data that needs a lawful basis, a clear notice, purpose limitation and a route to withdraw consent. Most stacks leak it to ad platforms through unconfigured pixels. We audit the tag layer first, because a remarketing list built from a diagnostic booking is the kind of problem that outlasts the campaign.",
      },
    ],
  },

  offerings: {
    title: "What we build, by sub-sector",
    intro:
      "Nine workstreams. Most engagements use three or four of them, chosen by which buyer you are actually trying to reach.",
    items: [
      {
        icon: "Microscope",
        title: "Pharma and OTC brand programmes",
        body: "Unbranded disease awareness for the public, prescriber-facing medical education, corporate and pipeline communication, and OTC consumer work where the product is genuinely permitted to advertise. The scope document names what is and is not sayable before anything is written.",
      },
      {
        icon: "Cpu",
        title: "Medical device demand generation",
        body: "B2B programmes aimed at hospital and lab procurement: clinical evidence summaries, total-cost-of-ownership material, installation and service commitments, and account-based outreach to a named list of institutions rather than broad lead capture.",
      },
      {
        icon: "Activity",
        title: "Diagnostics and pathology growth",
        body: "Test-level search demand, home collection booking flows, package pages that are honest about what a panel does and does not detect, city-level local search for collection centres, and the referral motion that actually fills a lab.",
      },
      {
        icon: "Smartphone",
        title: "Telehealth and health-tech acquisition",
        body: "App and platform growth where the constraint is trust rather than reach: onboarding that survives a first consult, retention loops, teleconsultation compliance in the copy, and paid acquisition modelled on repeat usage instead of installs.",
      },
      {
        icon: "ShieldCheck",
        title: "Health insurance marketing",
        body: "Comparison and explainer content for a product almost nobody reads before buying, claim-process transparency as a differentiator, renewal and retention communication, and lead handling built for a regulated distribution chain.",
      },
      {
        icon: "HeartPulse",
        title: "Wellness and nutraceutical D2C",
        body: "Performance marketing, subscription economics, retention and a claims register that keeps the catalogue inside what FSSAI permits. We will rewrite a claim rather than run it, and we will say so when a hero claim is the reason the funnel works.",
      },
      {
        icon: "Building2",
        title: "Hospital supply and B2B distribution",
        body: "Selling consumables, equipment or services into hospital groups: distributor enablement, tender and empanelment support material, and content that reaches the administrator rather than the clinician.",
      },
      {
        icon: "Lock",
        title: "DPDP and consent engineering",
        body: "Consent notices, tag and pixel governance, retention rules, and a data map showing where health-adjacent data goes. Done as an implementation, not a policy PDF.",
        href: "/custom-tools",
      },
      {
        icon: "LineChart",
        title: "Measurement for long cycles",
        body: "Multi-touch attribution, pipeline and opportunity reporting rather than form fills, and dashboards a medical affairs or compliance reviewer can also read without translation.",
        href: "/services/conversion-optimization",
      },
    ],
  },

  process: {
    title: "How a healthcare-sector engagement runs",
    intro:
      "The first month is mostly about establishing what is permitted. That is not bureaucracy; it is what makes the remaining months usable.",
    items: [
      {
        duration: "Weeks 1–3",
        title: "Regulatory and buyer scoping",
        body:
          "We map every product or service to its regulatory regime, identify who legally signs the purchase, and produce a written scope stating which claims and channels are available. Where medico-legal review sits with your team, we agree turnaround times now rather than discovering them in month three.",
      },
      {
        duration: "Weeks 3–8",
        title: "Foundation and data hygiene",
        body:
          "Site architecture per sub-sector, structured data, consent and tag layer rebuilt to DPDP expectations, and a claims register created for every substantive statement. This phase usually improves what you already publish before anything new is commissioned.",
      },
      {
        duration: "Months 2–6",
        title: "Build the demand programme",
        body:
          "Content and campaigns for the specific buyer — prescriber education, procurement evidence, consumer acquisition where permitted — released in complete clusters rather than scattered posts, with review cycles built into the calendar rather than bolted on.",
      },
      {
        duration: "Ongoing",
        title: "Expand, defend and re-review",
        body:
          "New territory where the gap analysis shows an opening, claims re-checked when formulations or approvals change, and quarterly review of whether the buyer definition still holds. Regulatory guidance moves; content published two years ago does not update itself.",
      },
    ],
  },

  table: {
    caption: "Healthcare sub-sector, the buyer, the channel and the binding constraint",
    columns: ["Sub-sector", "Who actually buys", "Primary channel", "The binding constraint"],
    rows: [
      [
        "Prescription pharmaceuticals",
        "The prescribing clinician, with the patient as the end user",
        "Medical education, prescriber-facing content, conference and field enablement",
        "No direct-to-consumer promotion; UCPMP governs promotion to healthcare professionals",
      ],
      [
        "OTC and consumer health",
        "The consumer, sometimes via a pharmacist recommendation",
        "Retail media, search, social and e-commerce marketplaces",
        "The Drugs and Magic Remedies Act schedule blocks consumer advertising for 50+ listed conditions",
      ],
      [
        "Medical devices and medtech",
        "A procurement committee: clinician, biomedical, finance, purchase",
        "Account-based B2B, clinical evidence, trade events, targeted outbound",
        "Long cycles and multi-stakeholder sign-off; no single lead represents a decision",
      ],
      [
        "Diagnostics and pathology labs",
        "The consumer for wellness panels, the referring doctor for everything else",
        "Test-level organic search, local search per collection centre, referral programmes",
        "Claims about what a test detects must be accurate and substantiable under CCPA 2022",
      ],
      [
        "Telehealth and health-tech platforms",
        "The consumer, or an employer or insurer buying on their behalf",
        "App store and performance acquisition, content, plus enterprise sales for B2B2C",
        "DPDP Act 2023 consent and purpose limitation on everything the platform collects",
      ],
      [
        "Health insurance",
        "The consumer or the corporate HR buyer, through a regulated distribution chain",
        "Comparison content, search, aggregators, agent and broker enablement",
        "Product and claim representations must match policy wording exactly",
      ],
      [
        "Wellness and nutraceutical D2C",
        "The consumer, direct",
        "Performance marketing, marketplaces, creator content, subscription retention",
        "FSSAI governs permissible claims; CCPA 2022 requires each claim to be substantiable",
      ],
      [
        "Hospital supply and B2B distribution",
        "Hospital administration, materials management and tender committees",
        "Distributor enablement, empanelment material, direct institutional outreach",
        "Tender processes and empanelment cycles set the pace, not campaign timing",
      ],
    ],
  },

  prose: {
    title: "How we think about the healthcare sector",
    blocks: [
      {
        heading: "Start with who signs, not with which channel",
        paragraphs: [
          "The single most expensive mistake in this sector is building a consumer funnel for a product a consumer cannot buy, or a lead-generation funnel for a purchase that is made by a committee over three quarters. Both waste an entire budget cycle before anyone notices, because both produce activity metrics that look healthy.",
          "So the first question is always who signs. If it is a prescriber, the programme is medical education and field enablement and the metric is share of prescriber attention, not clicks. If it is a procurement committee, the programme is evidence for four different roles and the metric is opportunities created. If it is a consumer, then and only then does a conventional performance funnel apply — and even then the claims layer decides what the creative can say.",
        ],
        bullets: [
          "Name the signer before choosing a channel",
          "Where the signer is a committee, build one asset per role",
          "Where the signer is a prescriber, the consumer funnel is not available to you",
          "Where the signer is a consumer, the claim decides the creative, not the other way round",
        ],
      },
      {
        heading: "The claims layer is the product, not the paperwork",
        paragraphs: [
          "Across pharma, diagnostics, devices and nutraceuticals, the difference between a campaign that runs and one that gets pulled is usually a single sentence. CCPA 2022 guidelines on misleading advertisements require every claim to be substantiable, and the practical consequence is that substantiation has to exist before publication rather than after a notice arrives.",
          "We keep a claims register: each substantive statement, where it appears, what supports it, and who approved it. It sounds like admin. In practice it speeds work up, because the second campaign reuses approved language instead of restarting the review, and because a reviewer given a register approves far faster than a reviewer given a deck.",
        ],
      },
      {
        heading: "Long cycles need patient measurement",
        paragraphs: [
          "Medical device, hospital supply and enterprise health-tech sales run over quarters, involve several people, and rarely convert on the touch that gets credited. Last-click attribution on a cycle like this reliably concludes that brand search works and everything else is waste, which is how good programmes get cancelled in month five.",
          "We report opportunities and pipeline influenced rather than form fills, keep a consistent record of first touch as well as last, and set expectations in the first month about when the first genuine signal should appear. If your board needs quarterly proof of revenue from a nine-month cycle, that mismatch is worth naming before the engagement starts rather than after.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not run consumer campaigns for prescription products, or dress a branded product message as disease awareness. We will not write around the Drugs and Magic Remedies Act schedule by implying a cure the law does not allow you to claim. We will not publish a wellness claim we cannot point to a substantiation for, and we will not build remarketing audiences out of people who booked a diagnostic test.",
          "This is a risk calculation more than a moral position. The exposure from these tactics lands on your licence, your product approval and your brand, and it outlasts any agency relationship. Where a competitor is doing it and appears to be winning, we will tell you plainly that is what you are looking at, rather than matching it.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "I run a clinic or a hospital. Is this the right page?",
      answer:
        "No. Provider marketing is a different discipline and it has its own section at /healthcare-marketing, covering patient acquisition, local search and the map pack, consultant and doctor profiles, appointment demand, reputation management and referral flow from feeder practices. This page deliberately covers the rest of the sector — pharma, devices, diagnostics, telehealth, insurance, wellness brands and hospital supply — because those have different buyers, different regulation and almost no overlap in channel strategy with a clinic trying to fill Tuesday afternoons.",
    },
    {
      question: "Can we advertise our prescription medicine to patients in India?",
      answer:
        "No. Prescription drug promotion in India is not direct-to-consumer, and promotion to healthcare professionals is governed by the UCPMP code. Separately, the Drugs and Magic Remedies (Objectionable Advertisements) Act schedule blocks consumer advertising of remedies for more than fifty listed conditions, which catches a lot of adjacent categories people assume are open. What remains available is genuinely unbranded disease awareness, corporate communication that carries no product claim, and prescriber-facing medical education. We will map your portfolio against those boundaries in the first scoping phase.",
    },
    {
      question: "How is medical device marketing different from normal B2B?",
      answer:
        "The buying group is larger and more heterogeneous than in most B2B categories. A single purchase can involve the clinician who will use the device, a biomedical engineer assessing serviceability, a finance head assessing total cost over its life, and a procurement officer running a formal process with its own timetable. Each needs different evidence, and the person who first shows interest is frequently not the person who signs. The programme is therefore multi-asset and account-based, measured in opportunities created rather than leads captured, and paced to a cycle measured in quarters.",
    },
    {
      question: "What can a nutraceutical or supplement brand actually claim?",
      answer:
        "Nutraceuticals and supplements fall under FSSAI, and the claims you can make are limited to what that framework permits for your product category and composition. On top of that, CCPA 2022 misleading-advertisement guidelines require every claim to be substantiable if challenged. In practice this means the aggressive outcome claims that make performance creative easy are usually the ones that are not available. We maintain a claims register per SKU so approved language is reused rather than reinvented, which is also the fastest way to keep a high-volume creative calendar moving.",
    },
    {
      question: "Does the DPDP Act change how we run health-related campaigns?",
      answer:
        "Yes, mostly at the data layer rather than the creative layer. The DPDP Act 2023, with Rules notified in November 2025, requires a clear notice, a lawful basis, purpose limitation and a working route for someone to withdraw consent. The common failure is technical: symptom checkers, teleconsult sign-ups and test bookings pass identifiers to advertising platforms through pixels nobody configured deliberately. We audit the tag layer at the start of every engagement, because a remarketing audience built from health-adjacent behaviour is difficult to unwind later.",
    },
    {
      question: "What does a healthcare-sector engagement cost?",
      answer:
        "Retainers start from about ₹25,000 per month and scale considerably, because the drivers vary enormously: a single-market nutraceutical D2C brand is a different scope from a device manufacturer selling into hospital groups across six states, and whether medico-legal review sits inside your organisation or with us changes the timeline as much as the price. A more useful frame is the value of one outcome. If a single device placement is worth several lakhs in margin over its life, the budget question largely answers itself.",
    },
  ],

  related: {
    title: "Where to go next",
    items: [
      { title: "Healthcare marketing for providers", href: "/healthcare-marketing", body: "Doctors, clinics and hospitals — patient acquisition in depth." },
      { title: "All industries", href: "/industries", body: "The other sectors we work across." },
      { title: "SaaS & technology", href: "/industries/saas", body: "Relevant if you are a health-tech platform selling software." },
      { title: "SEO & organic growth", href: "/services/seo-organic-growth", body: "The organic engine underneath most of this work." },
      { title: "Custom tools", href: "/custom-tools", body: "Consent, routing and reporting built rather than bought." },
      { title: "Talk to us", href: "/contact", body: "Tell us which sub-sector you are in and who signs." },
    ],
  },

  cta: {
    title: "Tell us what you sell and who signs for it",
    body: "We will come back with a written scope of what is promotable, to whom, through which channels, and what the regulatory constraint means for the plan — before you commit to anything.",
    primary: { label: "Get a sector scope", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Healthcare and Medical Sector Marketing",
    serviceType: "Industry Digital Marketing",
    audienceType: "Pharmaceutical, medical device, diagnostics, telehealth, health insurance and wellness organisations",
    areaServed: ["India"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
