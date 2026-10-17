import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Industries We Work In",
  description:
    "Ten sectors, each with its own buying journey, channel mix and Indian regulatory layer — from RERA and SEBI to the MCI code and the CCPA coaching rules.",
  keywords: [
    "industry marketing specialists India",
    "healthcare marketing agency",
    "D2C marketing agency",
    "real estate marketing agency",
    "regulated industry marketing",
    "B2B marketing agency India",
  ],
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries We Work In | Monk Mantra",
    description:
      "How marketing actually differs by sector — buying journeys, channel economics and the Indian rules that constrain each one.",
    url: "/industries",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/industries",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
  ],
  eyebrow: "Industries",
  h1: "Ten sectors, ten genuinely different problems",
  answer:
    "Marketing tactics transfer across industries; economics and regulation do not. A property developer, a D2C brand and a law firm face different buying journeys, different channel economics and, in India, different advertising rules. These pages set out how the work actually differs, sector by sector.",
  subhead:
    "The regulatory layer is the part most agencies skip. It is also where the exposure sits with you rather than with your agency, which is why we treat it as the starting point rather than a footnote.",
  heroBullets: [
    "Indian regulation covered specifically, not generically",
    "Sector economics before sector tactics",
    "Honest statements of where we are the wrong fit",
    "Healthcare covered deepest, in its own cluster",
  ],
  primaryCta: { label: "Get a free growth audit", href: "/get-started" },
  secondaryCta: { label: "Browse by service", href: "/services" },

  keyFacts: [
    { label: "Deepest specialisation", value: "Healthcare — with a dedicated cluster for doctors, clinics and hospitals" },
    { label: "Sectors covered", value: "Healthcare, D2C and ecommerce, SaaS, hospitality, real estate, professional services, education, financial, manufacturing, nonprofit" },
    { label: "Common thread", value: "Reported on the commercial event — patient, order, booking, admission, enrolment — not on leads" },
    { label: "Regulatory frameworks we work inside", value: "MCI Code of Ethics, Drugs and Magic Remedies Act, RERA, SEBI advertisement code, CCPA guidelines, FCRA, BCI Rule 36" },
    { label: "Data law throughout", value: "Digital Personal Data Protection Act 2023, Rules notified November 2025" },
    { label: "Starting from", value: "₹10,000 per month depending on sector; every engagement is scoped, not packaged" },
    { label: "Where we say no", value: "Any sector where the only available lever is a claim we cannot substantiate" },
  ],

  pains: {
    title: "What generic agencies get wrong about sectors",
    intro:
      "Sector expertise is claimed constantly and demonstrated rarely. These are the four failures that give it away.",
    items: [
      {
        problem: "The playbook is copied from a US template",
        fix:
          "HIPAA quoted at Indian clinics, GDPR at Indian fintechs, and channel assumptions built for markets where cash on delivery and WhatsApp barely exist. We write to the rules that actually apply here: the DPDP Act 2023, the MCI code, RERA, SEBI, the CCPA guidelines.",
      },
      {
        problem: "The metric is borrowed from ecommerce and applied everywhere",
        fix:
          "ROAS makes sense for a D2C brand and almost none for a hospital service line, a law firm or a school. Each sector has a commercial event that matters — an attended appointment, a site visit, an enrolled student, a funded account — and reporting has to end there.",
      },
      {
        problem: "Regulation is treated as legal's problem",
        fix:
          "In healthcare, property, finance, education and the regulated professions, the advertising exposure sits with the client's registration or licence, not with the agency. We build to the stricter standard by default, because the asymmetry of consequence makes that the only defensible position.",
      },
      {
        problem: "Seasonality and capacity are ignored",
        fix:
          "Education demand concentrates into a few weeks. Hospitality demand swings by segment and lead time. A clinic can only see so many patients. Marketing that ignores capacity generates complaints, refunds and bad reviews rather than growth.",
      },
    ],
  },

  offerings: {
    title: "Choose your sector",
    intro:
      "Each page covers the buying journey, the channel economics, the regulatory layer and the metrics we would hold ourselves to.",
    items: [
      {
        icon: "HeartPulse",
        title: "Healthcare providers",
        body: "Our deepest practice. Doctors, clinics and hospitals: compliant patient acquisition, the front desk on MedDeskOS, and reporting in attended patients.",
        href: "/healthcare-marketing",
      },
      {
        icon: "HeartPulse",
        title: "Healthcare brands",
        body: "Pharma, medtech, diagnostics, telehealth, insurance and wellness brands, inside the DMR Act and CCPA rules.",
        href: "/industries/healthcare",
      },
      {
        icon: "Wallet",
        title: "E-commerce & D2C",
        body: "Contribution margin over revenue: COD and RTO economics, retention before scale, and no dark patterns.",
        href: "/industries/ecommerce",
      },
      {
        icon: "Cpu",
        title: "SaaS & technology",
        body: "Product-led versus sales-led motion, bottom-of-funnel content that converts, and why MQL misleads.",
        href: "/industries/saas",
      },
      {
        icon: "Globe",
        title: "Hospitality & travel",
        body: "The OTA commission trade-off, the billboard effect, and shifting mix toward direct bookings.",
        href: "/industries/hospitality",
      },
      {
        icon: "Building2",
        title: "Real estate",
        body: "RERA-compliant advertising, qualification before sales, and cost per site visit rather than per lead.",
        href: "/industries/real-estate",
      },
      {
        icon: "BadgeCheck",
        title: "Professional services",
        body: "Growth for firms whose regulators prohibit advertising outright — advocates, chartered accountants, architects.",
        href: "/industries/professional-services",
      },
      {
        icon: "Users",
        title: "Education",
        body: "Enrolment against an admission calendar, dual-audience content, and the CCPA coaching advertising rules.",
        href: "/industries/education",
      },
      {
        icon: "ShieldCheck",
        title: "Financial services",
        body: "Acquisition inside the SEBI advertisement code, RBI digital lending rules and IRDAI requirements.",
        href: "/industries/financial",
      },
      {
        icon: "Settings2",
        title: "Manufacturing",
        body: "Industrial B2B where specification depth beats campaigns, and the buying population is small and technical.",
        href: "/industries/manufacturing",
      },
      {
        icon: "Share2",
        title: "Nonprofit",
        body: "Donor retention economics, recurring giving infrastructure, CSR funding and the FCRA compliance layer.",
        href: "/industries/nonprofit",
      },
    ],
  },

  process: {
    title: "How a sector engagement starts",
    items: [
      {
        duration: "Week 1",
        title: "Compliance and constraint mapping",
        body:
          "What your sector and licence category actually permit, and whether anything currently live carries exposure. In regulated sectors this comes before any growth conversation.",
      },
      {
        duration: "Weeks 1–2",
        title: "Economics before tactics",
        body:
          "What a customer is worth, what your capacity is, and which commercial event reporting should end on. Everything afterwards is measured against this.",
      },
      {
        duration: "Weeks 2–4",
        title: "Fix measurement and the obvious leaks",
        body:
          "Tracking repaired, phone calls made visible, response times measured, and the friction removed from whatever path a customer actually takes.",
      },
      {
        duration: "Months 2–6",
        title: "Build the sector-appropriate assets",
        body:
          "Which assets those are differs sharply: condition pages for a clinic, specification documentation for a manufacturer, locality content for a developer, education content for a lender.",
      },
    ],
  },

  table: {
    caption: "What differs by sector",
    columns: ["Sector", "The commercial event", "The binding constraint", "First move"],
    rows: [
      ["Healthcare providers", "Attended appointment", "MCI Reg. 6.1 and the Drugs and Magic Remedies Act", "Local search and profile"],
      ["E-commerce & D2C", "Profitable order after RTO", "Contribution margin, and CCPA dark pattern rules", "Unit economics model"],
      ["SaaS", "Activated or paying account", "Long payback and global keyword competition", "Bottom-of-funnel content"],
      ["Hospitality", "Direct booking", "OTA commission and rate parity", "Direct booking path and reviews"],
      ["Real estate", "Qualified site visit, then booking", "RERA Sections 3 and 11(2)", "Qualification before sales"],
      ["Professional services", "Instruction or engagement", "BCI Rule 36 and ICAI conduct rules", "Findability and referral systems"],
      ["Education", "Enrolled student", "CCPA coaching guidelines 2024", "Follow-up capacity before season"],
      ["Financial services", "Funded account or disbursal", "SEBI advertisement code, RBI and IRDAI rules", "Approved claims library"],
      ["Manufacturing", "Qualified RFQ", "Small technical buying population", "Specification documentation"],
      ["Nonprofit", "Recurring donor", "FCRA and reporting obligations", "Retention over acquisition"],
    ],
  },

  prose: {
    title: "Why sector matters more than most agencies admit",
    blocks: [
      {
        heading: "The tactics transfer; the economics do not",
        paragraphs: [
          "Keyword research works the same way for a hospital and a hotel. What differs completely is what a customer is worth, how long they take to decide, how many you can serve, and what you are legally permitted to say to them. Those four variables determine the strategy, and none of them is visible in a tactics deck.",
          "So our industry pages lead with economics and constraints rather than channel lists. A campaign structure that is correct for a D2C brand with a ₹900 order value and instant purchase is actively wrong for a developer selling a ₹90 lakh apartment over nine months to a buyer who will visit three times.",
        ],
      },
      {
        heading: "In regulated sectors the exposure is yours",
        paragraphs: [
          "This is the asymmetry that should decide how you choose an agency. If a campaign breaches the Drugs and Magic Remedies Act, the MCI code, RERA advertising provisions, the SEBI advertisement code or the CCPA coaching guidelines, the consequence attaches to your registration, your licence or your project — not to the agency that wrote the copy.",
          "An agency carrying no downside has every incentive to use the persuasive language that converts and no incentive to refuse it. We build to the stricter reading by default and put the constraint in the brief rather than in the approval step, which also removes most of the rework that otherwise eats regulated-sector budgets.",
        ],
        bullets: [
          "The compliance boundary agreed in writing before production starts",
          "A pre-approved claim and disclaimer library, built once",
          "Formats designed to carry mandatory disclosures legibly",
          "A standing review of anything partners, creators or affiliates publish on your behalf",
        ],
      },
      {
        heading: "Healthcare is where we go deepest",
        paragraphs: [
          "We work across all ten sectors, and healthcare is the one where we have built the most specific capability — a dedicated set of pages for individual doctors, clinics and hospitals, covering compliant patient acquisition, local search, reputation and the software that turns enquiries into attended appointments.",
          "If you are a provider, that cluster is the right starting point rather than the healthcare industry page, which covers the rest of the sector: pharmaceutical and OTC brands, medical devices, diagnostics chains, telehealth platforms, insurers and wellness D2C.",
        ],
      },
      {
        heading: "Where we are the wrong fit",
        paragraphs: [
          "We are a poor fit for businesses whose only remaining lever is a claim they cannot substantiate, and for sectors where the growth model depends on practices we would not build — undisclosed fees, misleading benefit illustrations, dark patterns, or advertising into a regulated category without the licence to do it.",
          "We are also the wrong choice for a business that needs volume this quarter and wants to buy SEO to get it, or for a pre-launch brand that has not yet found product-market fit. In both cases the honest advice costs us the retainer, and we would still rather give it.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Do you actually specialise, or do you just have a page per industry?",
      answer:
        "Healthcare is a genuine specialisation, with a dedicated cluster of pages covering doctors, clinics and hospitals, and software we have built specifically for practices. The other nine sectors are ones we work in and have written honestly about — the regulatory detail on each page is specific and checkable, which is the fairest test you can apply. If a page reads like it could have been written about any sector, it should not persuade you.",
      },
    {
      question: "Which sector do you get the best results in?",
      answer:
        "Healthcare providers, because we go deepest there and because we can fix the operational side as well as the marketing. Beyond that, the pattern is less about sector than about fit: we do best where the buying decision involves genuine research, where the client can articulate what a customer is worth, and where there is capacity to serve additional demand. We do worst where the only lever available is deeper discounting.",
    },
    {
      question: "My industry is not listed. Can you still help?",
      answer:
        "Often yes. The underlying discipline — measure properly, fix the leaks, build assets that compound, report on the commercial event — transfers to most businesses. What we would not do is claim sector expertise we do not have. In an unfamiliar sector we would spend the first weeks understanding your economics and constraints properly, and we would price and scope that honestly rather than pretending it is already known.",
    },
    {
      question: "Why do you write so much about regulation?",
      answer:
        "Because in most of these sectors it is the binding constraint on strategy, and because the consequences fall on the client. A healthcare campaign that breaches the Drugs and Magic Remedies Act, a property advertisement without a RERA number, or a SEBI-registered adviser using superlatives all create exposure that an agency does not share. Working out what you are allowed to do is not a compliance footnote — it defines the space the strategy has to operate in.",
    },
    {
      question: "Do you work with clients outside India?",
      answer:
        "Yes, in the UAE, UK and US alongside our Indian base. The regulatory guidance across these pages is written for India specifically, and for clients elsewhere the applicable advertising and data protection rules differ — that gets scoped separately at the start of an engagement rather than assumed. The economic and measurement discipline is the same everywhere.",
    },
    {
      question: "Can you handle several sectors for one group?",
      answer:
        "Yes, and diversified groups are a common case — a hospital group with a diagnostics arm, or a developer with a hospitality property. What matters is that each business unit is measured on its own commercial event and reported separately rather than blended into a group average, because averages consistently hide the unit that is losing money.",
    },
  ],

  related: {
    title: "Where to go next",
    items: [
      { title: "Healthcare marketing", href: "/healthcare-marketing", body: "Our deepest specialisation — doctors, clinics and hospitals." },
      { title: "All services", href: "/services", body: "Twelve services and which problem each one solves." },
      { title: "Custom tools", href: "/custom-tools", body: "Software built where a campaign is not the answer." },
      { title: "How we measure results", href: "/case-studies", body: "Our reporting method, stated plainly." },
      { title: "About Monk Mantra", href: "/about", body: "Who we are and how we work." },
      { title: "Get started", href: "/get-started", body: "The free written audit we do before any engagement." },
    ],
  },

  cta: {
    title: "Tell us your sector and your constraint",
    body: "We will come back with what your competitors are capturing, what your regulatory position allows, and where the fastest recoverable loss is in your funnel.",
    primary: { label: "Get a free growth audit", href: "/get-started" },
    secondary: { label: "Book a 30-minute call", href: "/contact" },
  },

  schema: {
    type: "CollectionPage",
    serviceName: "Industries Monk Mantra Works In",
    serviceDescription:
      "How marketing differs across healthcare, ecommerce, SaaS, hospitality, real estate, professional services, education, financial services, manufacturing and nonprofit sectors in India.",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
