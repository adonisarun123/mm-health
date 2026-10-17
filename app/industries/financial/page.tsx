import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Financial Services Marketing",
  description:
    "Compliant acquisition for fintech, advisers, lenders and insurers — built inside SEBI, RBI and IRDAI advertising rules rather than around them.",
  keywords: [
    "financial services marketing India",
    "fintech marketing agency",
    "SEBI advertisement code compliance",
    "wealth management marketing",
    "insurance marketing agency India",
    "lending app marketing",
  ],
  alternates: { canonical: "/industries/financial" },
  openGraph: {
    title: "Financial Services Marketing | Monk Mantra",
    description:
      "Acquisition for regulated financial brands, built inside SEBI, RBI and IRDAI advertising rules.",
    url: "/industries/financial",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/industries/financial",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Financial Services", path: "/industries/financial" },
  ],
  eyebrow: "Financial services",
  h1: "Financial services marketing that survives a regulator reading it",
  answer:
    "Marketing regulated financial products in India means every claim must be substantiable, superlatives and assured-return language are prohibited for several licence categories, and disclosures are mandatory. Monk Mantra builds acquisition for advisers, fintechs, lenders and insurers inside those constraints — which is also what builds trust in a low-trust category.",
  subhead:
    "The compliance layer is not the obstacle to growth in this sector. It is the moat. Competitors who ignore it get takedowns, penalties and licence risk; the ones who work within it accumulate the credibility the category is short of.",
  heroBullets: [
    "Built to SEBI, RBI and IRDAI advertising expectations",
    "No superlatives, no assured returns, no past-performance claims",
    "Disclosures designed in, not bolted on",
    "Reported on funded accounts, not sign-ups",
  ],
  primaryCta: { label: "Get a free compliance and growth audit", href: "/get-started" },
  secondaryCta: { label: "See all industries", href: "/industries" },

  keyFacts: [
    { label: "Who this is for", value: "SEBI-registered investment advisers and research analysts, wealth managers, fintech, NBFCs, insurance distributors, brokers" },
    { label: "Primary channels", value: "Search, content and comparison, YouTube education, LinkedIn for B2B, app install where relevant" },
    { label: "Governing frameworks", value: "SEBI advertisement code for IAs and RAs; RBI digital lending guidelines; IRDAI advertising rules; CCPA 2022" },
    { label: "Starting from", value: "₹25,000 per month, scaling with licence scope and approval overhead" },
    { label: "Metrics that matter", value: "Cost per funded account, cost per activated borrower, retention and AUM contribution" },
    { label: "Where we say no", value: "Guaranteed-return messaging, or any campaign the client's compliance team has not seen" },
  ],

  pains: {
    title: "Why financial marketing goes wrong",
    intro:
      "Rarely through malice. Usually because a growth team and a compliance team were never in the same conversation.",
    items: [
      {
        problem: "The copy that converts is the copy that is prohibited",
        fix:
          "Superlatives such as best, number one, top adviser and leading are expressly barred under SEBI's advertisement code for investment advisers and research analysts, along with assured-return promises and references to past performance. Growth teams reach for exactly this language because it works. We build persuasion out of specificity, transparency and education instead — which converts more slowly and survives review.",
      },
      {
        problem: "Sign-ups are celebrated and funded accounts are not measured",
        fix:
          "App installs and account registrations are cheap and largely meaningless in this sector. A funded account, a completed KYC, a disbursed loan or a policy in force is the commercial event. We define conversions at that point and accept a higher apparent cost per acquisition in exchange for a number that means something.",
      },
      {
        problem: "Compliance sees the campaign after it is built",
        fix:
          "Assets get produced, reviewed at the end, and rebuilt — burning the budget and the timeline. We bring compliance into the brief rather than the approval, maintain a pre-approved claims and disclaimer library, and design creative formats that carry mandatory disclosures legibly rather than as an afterthought.",
      },
      {
        problem: "Affiliate and influencer distribution creates uncontrolled claims",
        fix:
          "A creator promising returns on your behalf is your exposure, and the finfluencer space has been under sustained regulatory attention. We work with a controlled brief, approved claim language, mandatory disclosure of paid partnership, and monitoring of what actually gets published rather than what was agreed.",
      },
    ],
  },

  offerings: {
    title: "What a financial services engagement covers",
    items: [
      {
        icon: "ShieldCheck",
        title: "Compliance-first creative system",
        body: "A pre-approved claim and disclaimer library, formats built to carry mandatory disclosures legibly, and a review workflow agreed with your compliance function before production starts.",
      },
      {
        icon: "Search",
        title: "Education-led organic search",
        body: "The category's highest-value asset: content that explains products honestly and ranks for the research phase, where financial decisions are actually made.",
        href: "/services/seo-organic-growth",
      },
      {
        icon: "FileText",
        title: "Comparison and calculator content",
        body: "Transparent comparison pages, eligibility explainers and calculators — the formats people genuinely use before choosing a lender, adviser or policy.",
      },
      {
        icon: "Megaphone",
        title: "Paid search and app campaigns",
        body: "Campaigns built for platform financial-services certification requirements, optimising toward funded accounts and disbursals rather than installs.",
        href: "/services/ppc-management",
      },
      {
        icon: "Video",
        title: "YouTube and long-form education",
        body: "The channel where trust is actually built in this sector, run with the same claim discipline as every other asset.",
        href: "/services/video-marketing",
      },
      {
        icon: "Users",
        title: "LinkedIn for B2B and wealth",
        body: "For advisory, wealth and B2B fintech, where the audience is reachable and the buying decision is relationship-led.",
        href: "/services/social-media-marketing",
      },
      {
        icon: "Workflow",
        title: "Onboarding and drop-off analysis",
        body: "KYC and application flows leak heavily. Diagnosing where and why is usually worth more than an increase in acquisition budget.",
        href: "/services/conversion-optimization",
      },
      {
        icon: "Lock",
        title: "Consent and data governance",
        body: "DPDP Act 2023 obligations designed into the tracking and CRM layer, with personal and financial data kept out of analytics properties.",
        href: "/services/analytics-reporting",
      },
      {
        icon: "LineChart",
        title: "Reporting to funded outcomes",
        body: "Cost per funded account, per disbursal or per policy in force, joined from marketing systems into your core platform.",
      },
    ],
  },

  process: {
    title: "How an engagement runs",
    items: [
      {
        duration: "Weeks 1–2",
        title: "Compliance and measurement audit",
        body:
          "We review live creative against the frameworks that apply to your licence category, flag exposure, and establish what is currently being counted as a conversion versus what the business actually earns from.",
      },
      {
        duration: "Weeks 2–4",
        title: "Build the approved asset library",
        body:
          "Claim language, disclaimers, disclosure placements and format templates agreed with compliance once, so campaign production afterwards does not require a fresh legal debate every fortnight.",
      },
      {
        duration: "Months 2–4",
        title: "Education engine and paid rebuild",
        body:
          "Organic content clusters for the research phase, comparison and calculator assets, and paid campaigns rebuilt around funded-account conversions.",
      },
      {
        duration: "Ongoing",
        title: "Optimise and monitor",
        body:
          "Budget reallocated by cost per funded outcome, onboarding drop-off worked continuously, and a standing review of published partner and affiliate content.",
      },
    ],
  },

  table: {
    caption: "What the advertising rules mean for your copy",
    columns: ["Framework", "Applies to", "Key restrictions", "Practical effect"],
    rows: [
      [
        "SEBI advertisement code (2023)",
        "Registered investment advisers and research analysts",
        "No superlatives, no assured returns, no reference to past performance, no SEBI logo",
        "Name, address and registration number required, plus the standard market-risk disclaimer",
      ],
      [
        "RBI digital lending guidelines",
        "Lenders and lending service providers",
        "Transparency on APR, fees, recovery practice and who the actual lender is",
        "Cost of credit disclosed upfront; the regulated entity must be identified clearly",
      ],
      [
        "IRDAI advertising rules",
        "Insurers and distributors",
        "Benefit claims must reflect policy terms; misleading benefit illustration prohibited",
        "Exclusions and conditions cannot be buried below the fold",
      ],
      [
        "CCPA guidelines (2022)",
        "Everyone",
        "All claims capable of substantiation; material limitations disclosed",
        "Any performance figure needs evidence retained and retrievable",
      ],
      [
        "DPDP Act 2023",
        "Everyone processing personal data",
        "Consent, purpose limitation, retention, breach notification",
        "Financial data kept out of analytics; consent must actually gate the tags",
      ],
    ],
  },

  prose: {
    title: "Growing a regulated brand",
    blocks: [
      {
        heading: "Education compounds where advertising cannot",
        paragraphs: [
          "Because the persuasive shortcuts are unavailable, the durable advantage in this category is being the source that explains things clearly. People researching a home loan, a term policy or where to start investing are genuinely uncertain and looking for someone who does not appear to be selling. Content that answers the question honestly — including the parts that do not favour you — earns the relationship well before a product decision.",
          "This is slower than performance marketing and it produces an asset that keeps working. It is also, in practice, the only strategy that scales in a category where the regulator has removed most of the alternatives.",
        ],
        bullets: [
          "Explain the product category before positioning your product inside it",
          "Publish eligibility, fees and exclusions plainly rather than on request",
          "Answer the objection you would rather not raise",
          "Name the qualified author; anonymous financial content does not rank",
        ],
      },
      {
        heading: "Measure funded outcomes, not funnel activity",
        paragraphs: [
          "Financial acquisition funnels are unusually long and leaky: click, sign-up, KYC, verification, funding, activation. Optimising toward the top of that funnel produces enormous volumes of registrations that never fund, and the ad platform will happily learn to find more of exactly those people.",
          "Feeding the downstream event back — funded account, disbursed loan, policy in force — changes what the platform optimises for and usually reduces volume while improving economics. It requires joining marketing data to the core system, which is the piece most financial marketing teams have never been given engineering time for.",
        ],
      },
      {
        heading: "Onboarding is where acquisition budget dies",
        paragraphs: [
          "KYC and application flows in Indian financial services routinely lose a large share of users who had already decided to proceed. Document upload on a mid-range phone, verification failures, session timeouts and unexplained rejections all cause abandonment at the most expensive possible moment.",
          "Diagnosing and fixing that path is frequently worth more than any improvement in cost per click. It also sits outside what a conventional marketing agency will touch, which is why we treat it as in scope — the analytics work identifies the drop-off and, where the fix needs software, we can build it.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not write assured-return or guaranteed-outcome copy. We will not use superlatives for a SEBI-registered client where the advertisement code prohibits them. We will not run a campaign your compliance function has not reviewed, even under launch pressure, and we will not brief creators without approved claim language and paid-partnership disclosure.",
          "We will also decline work where the underlying product itself is the problem — undisclosed fees, misleading benefit illustrations, or recovery practices that would not withstand scrutiny. Marketing that succeeds in distributing those creates a larger liability, not a bigger business.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "What does SEBI's advertisement code prohibit?",
      answer:
        "For registered investment advisers and research analysts, the code issued in April 2023 prohibits superlative terms such as best, number one, top adviser and leading; false or misleading statements; promises of assured returns; references to past performance; and use of the SEBI logo. Advertisements must carry the entity's name, address and registration number, along with the standard disclaimer that investments in the securities market are subject to market risk. Copies must be retained for five years.",
    },
    {
      question: "Can fintech companies advertise on Google and Meta in India?",
      answer:
        "Yes, but financial services categories carry additional platform certification and verification requirements on top of the legal framework, and approval can take time. Lending, investing and insurance each have their own policy layer, and advertisers usually need to demonstrate the relevant licence or partnership. We factor certification lead time into launch planning rather than discovering it a week before a campaign was meant to go live.",
    },
    {
      question: "How do we market without making performance claims?",
      answer:
        "By competing on clarity rather than on outcome promises. Explain the product honestly, publish fees and eligibility openly, show the process, name qualified authors, and answer the objections competitors avoid. In a category where trust is scarce and most advertising sounds identical, transparency is genuinely differentiating. It converts more slowly than a returns claim would, and it does not create a liability that outlives the campaign.",
    },
    {
      question: "What should a financial brand actually measure?",
      answer:
        "The commercial event, not the funnel step. For a broker or wealth platform that is a funded account; for a lender, a disbursed loan; for insurance, a policy in force and persisting. Registrations, installs and KYC starts are diagnostic only. Getting there requires joining marketing data to your core system so the downstream outcome can be fed back into the ad platforms, which also improves what their bidding algorithms optimise toward.",
    },
    {
      question: "Do you work with finfluencers?",
      answer:
        "Only under a controlled brief. Creator distribution genuinely works in this category, but a creator making a returns claim on your behalf becomes your exposure, and the space has been under sustained regulatory scrutiny. That means approved claim language, mandatory and prominent paid-partnership disclosure, no performance or assured-return statements, and monitoring what is actually published rather than trusting what was agreed in the brief.",
    },
    {
      question: "Is HIPAA or GDPR relevant to Indian financial data?",
      answer:
        "Neither, unless you serve customers in those jurisdictions. HIPAA is US health legislation and irrelevant here. GDPR applies only if you process data of people in the EU. The framework that governs you is the Digital Personal Data Protection Act, 2023, with its Rules notified in November 2025, covering consent, purpose limitation, retention and breach notification. Sector-specific data and outsourcing requirements from RBI, SEBI or IRDAI apply on top depending on your licence.",
    },
  ],

  related: {
    title: "Related",
    items: [
      { title: "SEO & organic growth", href: "/services/seo-organic-growth", body: "Education content is the category's main asset." },
      { title: "PPC management", href: "/services/ppc-management", body: "Paid campaigns optimised to funded outcomes." },
      { title: "Conversion optimisation", href: "/services/conversion-optimization", body: "KYC and onboarding drop-off." },
      { title: "Analytics & reporting", href: "/services/analytics-reporting", body: "Joining marketing data to the core platform." },
      { title: "Professional services", href: "/industries/professional-services", body: "The adjacent regulated-profession playbook." },
      { title: "All industries", href: "/industries", body: "The other sectors we work in." },
    ],
  },

  cta: {
    title: "Have your live campaigns reviewed before a regulator does",
    body: "We will audit your current creative and landing pages against the frameworks that apply to your licence category, and model what your acquisition actually costs per funded outcome.",
    primary: { label: "Get the free audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Financial Services Marketing",
    serviceType: "Financial Services and Fintech Marketing",
    audienceType: "Investment advisers, fintech, NBFCs, insurers and brokers",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
