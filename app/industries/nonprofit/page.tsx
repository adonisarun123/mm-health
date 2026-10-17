import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Nonprofit Marketing",
  description:
    "Donor acquisition, retention and compliance for Indian NGOs — recurring giving infrastructure, FCRA and 80G realities, CSR funding and Google Ad Grants.",
  keywords: [
    "nonprofit marketing agency India",
    "NGO digital marketing",
    "donor acquisition India",
    "recurring donation NACH UPI autopay",
    "FCRA compliance marketing",
    "CSR funding proposals",
    "Google Ad Grants India",
  ],
  alternates: { canonical: "/industries/nonprofit" },
  openGraph: {
    title: "Nonprofit Marketing | Monk Mantra",
    description:
      "Recurring giving is the entire game. Donor retention, NACH and UPI autopay infrastructure, CSR funding and compliance-aware storytelling for Indian NGOs.",
    url: "/industries/nonprofit",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/industries/nonprofit",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Nonprofit", path: "/industries/nonprofit" },
  ],
  eyebrow: "For Indian NGOs and foundations",
  h1: "Nonprofit marketing is a retention problem wearing an acquisition problem's clothes",
  answer:
    "Nonprofit marketing works by converting one-time givers into recurring donors, because acquiring a donor costs far more than keeping one. Monk Mantra builds the recurring giving path — the mandate infrastructure, the reporting that earns the second gift, and the separate CSR motion — inside what FCRA, 80G and consent rules actually permit.",
  subhead:
    "Most Indian NGOs run a strong first-gift campaign and then lose the donor to silence. The money is in the second year, and the second year is won operationally rather than creatively.",
  heroBullets: [
    "Recurring giving treated as infrastructure, not a campaign",
    "NACH and UPI autopay mandates built into the donation path",
    "CSR funding run as a separate B2B motion",
    "Storytelling with beneficiary dignity and documented consent",
  ],
  primaryCta: { label: "Get a donor programme audit", href: "/get-started" },
  secondaryCta: { label: "See all services", href: "/services" },

  keyFacts: [
    { label: "Best fit", value: "Registered Indian NGOs, trusts, societies, section 8 companies and foundations with an active programme to report on" },
    { label: "The core economics", value: "Acquiring a donor costs far more than retaining one, so recurring giving decides whether the programme funds itself" },
    { label: "Domestic giving", value: "Retail appeals commonly reference 80G tax deduction eligibility" },
    { label: "Foreign donations", value: "Require FCRA registration; all foreign contribution must first be received into a designated FCRA account at State Bank of India, New Delhi Main Branch" },
    { label: "Starting from", value: "₹10,000 per month; smaller organisations are often better served by a fixed-scope setup project" },
    { label: "Data law", value: "DPDP Act 2023, Rules notified November 2025 — donor and beneficiary data both need a lawful basis and a consent record" },
  ],

  pains: {
    title: "Where nonprofit fundraising leaks money",
    intro:
      "Almost always after the first gift. The campaign works, the donor gives once, and nothing is built to bring them back.",
    items: [
      {
        problem: "Everything is spent on acquisition and nothing on the second gift",
        fix:
          "A donor acquired at considerable cost and then never contacted again is a loss dressed up as a success. The programme that works funds a modest, steady acquisition effort and puts the rest into onboarding, reporting and renewal — which means an email sequence after the first gift, a genuine account of what the money did, and an explicit invitation to make it monthly.",
      },
      {
        problem: "Recurring giving fails at the mandate, not at the ask",
        fix:
          "Plenty of donors agree to give monthly and then never complete the mandate. NACH registration and UPI autopay both introduce steps where people drop out, and mandates fail silently when a card expires or a bank changes something. This is an operations problem more than a marketing one: reduce the steps, offer both routes, and monitor failed mandates as a weekly task rather than discovering the attrition at year end.",
      },
      {
        problem: "The storytelling trades beneficiary dignity for donation rate",
        fix:
          "Distressing imagery raises money in the short term and costs the organisation its standing with the community it serves, its staff and increasingly its institutional funders. We work to consent-documented, dignity-first storytelling: people named and photographed only with informed permission, agency shown rather than helplessness, and children handled with particular care.",
      },
      {
        problem: "CSR proposals are sent as retail donor appeals",
        fix:
          "A corporate CSR committee is evaluating a partner, not responding to an appeal. It needs a defined project with a budget, a monitoring and evaluation framework, governance and compliance documentation, and a reporting cadence it can present internally. Emotional appeal material aimed at retail donors reads as unserious in that room, and it is one of the most common reasons a good organisation gets passed over.",
      },
    ],
  },

  offerings: {
    title: "What a nonprofit engagement covers",
    intro:
      "Nine workstreams. Most organisations need the first four before anything else is worth funding.",
    items: [
      {
        icon: "CreditCard",
        title: "Recurring giving infrastructure",
        body: "The donation path rebuilt around monthly giving: NACH and UPI autopay both offered, the smallest possible number of steps, failed mandate monitoring, and recovery communication when a mandate lapses.",
      },
      {
        icon: "Users",
        title: "Donor retention programmes",
        body: "Onboarding after the first gift, impact reporting on a schedule, upgrade and renewal asks timed rather than random, and lapsed donor recovery. This is where the return on a fundraising budget is highest and where it is usually not spent.",
      },
      {
        icon: "FileText",
        title: "Impact reporting as an acquisition asset",
        body: "Annual reports, programme updates and financial transparency published as web content rather than buried PDFs. Prospective donors and CSR teams both check this before giving, and it doubles as the retention material you already owe existing donors.",
      },
      {
        icon: "Building2",
        title: "CSR partnership material",
        body: "Project proposals with budgets and monitoring frameworks, governance and compliance packs, due diligence documentation, and reporting formats a corporate committee can present internally without rewriting it.",
      },
      {
        icon: "Search",
        title: "Organic visibility",
        body: "Cause and issue content that reaches people already searching the subject, local search where you run centres, and the credibility signals that make a first-time donor trust an unfamiliar organisation.",
        href: "/services/seo-organic-growth",
      },
      {
        icon: "Megaphone",
        title: "Google Ad Grants management",
        body: "For eligible nonprofits the grant provides search advertising at no media cost, with account structure and policy requirements that need active management. Poorly run grant accounts spend the allowance on traffic that never donates.",
        href: "/services/ppc-management",
      },
      {
        icon: "MessageSquare",
        title: "Consent-first storytelling",
        body: "A photography and story consent process, a house standard for representing beneficiaries with dignity, and editorial review before publication — particularly where children or vulnerable adults are involved.",
      },
      {
        icon: "Lock",
        title: "Donor data and DPDP compliance",
        body: "Consent capture, purpose limitation, retention rules and a working withdrawal route for donor and beneficiary data alike. Built into the donation flow rather than written as a policy nobody implements.",
        href: "/custom-tools",
      },
      {
        icon: "LineChart",
        title: "Fundraising measurement",
        body: "Cost to acquire a donor, retention and lapse rates by cohort, lifetime value of a recurring donor, and mandate success rate — the four numbers that decide where the next rupee of fundraising budget should go.",
      },
    ],
  },

  process: {
    title: "How a nonprofit engagement runs",
    intro: "Fix the giving path, keep the donors you already have, then acquire deliberately.",
    items: [
      {
        duration: "Weeks 1–3",
        title: "Donor and compliance audit",
        body:
          "Current donor base by cohort and lapse rate, a step-by-step test of the donation and mandate flow on a phone, a review of what compliance obligations shape your messaging, and an honest read of what your reporting currently gives a donor.",
      },
      {
        duration: "Weeks 3–8",
        title: "Fix the giving path",
        body:
          "Donation flow shortened, monthly giving made the default option, NACH and UPI autopay both available, 80G receipting automated, and failed mandate monitoring put in place. This usually improves income before any new donor is acquired.",
      },
      {
        duration: "Months 2–6",
        title: "Retention and CSR in parallel",
        body:
          "Onboarding and impact reporting cadence established for retail donors, and separately a CSR pack built with project budgets, monitoring frameworks and governance documentation for corporate committees.",
      },
      {
        duration: "Ongoing",
        title: "Acquire, report, renew",
        body:
          "Steady acquisition through organic, Ad Grants and campaign moments, with reporting and renewal running as a permanent cycle rather than a year-end scramble. Compliance deadlines mapped into the same calendar.",
      },
    ],
  },

  table: {
    caption: "Funding source, what it needs from marketing, and its compliance layer",
    columns: ["Funding source", "What it needs from marketing", "Compliance layer", "Typical horizon"],
    rows: [
      [
        "Retail one-time donors",
        "A clear cause, a specific ask, a donation path that completes on a phone, instant receipting",
        "80G eligibility commonly referenced; CCPA 2022 requires every claim made to be substantiable",
        "Days from first contact to first gift",
      ],
      [
        "Recurring retail donors",
        "An explicit monthly ask, working NACH or UPI autopay mandates, and reporting that earns the next month",
        "80G, plus DPDP consent for ongoing communication and mandate data",
        "Weeks to convert, then measured in years of retention",
      ],
      [
        "Major individual donors",
        "Named relationship material, programme depth, financial transparency and direct access to leadership",
        "Governance documentation and audited accounts on request",
        "Months of relationship before a first substantial gift",
      ],
      [
        "Corporate CSR",
        "A defined project proposal with budget, monitoring and evaluation framework, governance pack and reporting formats",
        "Corporate due diligence, statutory registrations, and reporting the company can use internally",
        "One to three quarters, aligned to the corporate financial year",
      ],
      [
        "Foreign contributions",
        "English-language institutional material, programme evidence and international-standard reporting",
        "FCRA registration required; all foreign contribution must first be received into the designated FCRA account at State Bank of India, New Delhi Main Branch; Form FC-4 annual return due by 31 December for the preceding financial year, even where nothing was received; registration valid five years and renewable; administrative expenses capped at 20% of foreign contributions",
        "Long — registration requires the organisation to have existed for at least three years",
      ],
      [
        "Institutional and foundation grants",
        "Written proposals, a theory of change, evidence of outcomes and a credible evaluation approach",
        "Grant-specific reporting obligations, plus FCRA where the funder is foreign",
        "Two to four quarters per cycle",
      ],
      [
        "Events and campaign moments",
        "Time-bound creative, a matching or milestone mechanic, and a plan to convert attendees into recurring donors",
        "80G receipting at volume, and consent capture at the point of registration",
        "Weeks around the moment, with the retention work beginning immediately after",
      ],
    ],
  },

  prose: {
    title: "How we think about nonprofit fundraising",
    blocks: [
      {
        heading: "Retention is the whole strategy",
        paragraphs: [
          "Acquiring a new donor is substantially more expensive than keeping an existing one, and in most Indian NGOs the acquisition budget is many times the retention budget. That is backwards. A donor who gives monthly for three years is worth many times a one-time gift, and the cost of keeping them is a few emails and an honest account of where the money went.",
          "So the sequence we recommend is almost always the same: fix the recurring giving path, build the reporting that earns a second gift, then acquire. Acquiring into a leaky programme raises the total spent without raising what the organisation actually receives over time.",
        ],
        bullets: [
          "Make monthly the default option, not a secondary choice",
          "Send an impact report before you send the next ask",
          "Monitor failed mandates weekly rather than annually",
          "Measure lifetime value by cohort, not gifts by campaign",
        ],
      },
      {
        heading: "The recurring donation problem in India is operational",
        paragraphs: [
          "The barrier is rarely willingness. Donors agree to give monthly and then fall out during mandate setup, because NACH registration adds steps and bank-side verification, and UPI autopay has its own approval flow that people abandon on a slow connection. Mandates then fail quietly later when a card expires, a bank changes something, or an account is closed, and nobody notices until the year-end numbers look wrong.",
          "Treat it as infrastructure. Offer both NACH and UPI autopay so the donor can use whichever their bank handles well, cut the steps between deciding and confirming, and run a weekly check on failed mandates with a short recovery message attached. This is unglamorous work and it usually recovers more income than a new campaign would.",
        ],
      },
      {
        heading: "CSR is a business development motion, not fundraising",
        paragraphs: [
          "A corporate CSR committee is choosing an implementation partner it can defend internally. It wants a defined project with a budget, a monitoring and evaluation framework, evidence you can deliver at the stated scale, statutory documentation, and reporting it can put into its own disclosures without rewriting.",
          "This needs completely different material from a retail donor appeal, produced on a different calendar — corporate budgets are decided in a cycle, and arriving after that cycle means waiting a year. We build the CSR pack as a separate asset set and treat the pipeline as B2B business development, with named accounts, follow-up discipline and a proposal library rather than a campaign.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not use distressing imagery of beneficiaries, particularly children, to raise donation rates. We will not publish a person's story or photograph without documented informed consent from them or their guardian. We will not overstate the proportion of a donation reaching programme work, or attach a specific outcome to a specific rupee amount where that is not how the programme actually works — CCPA 2022 guidelines require claims to be substantiable, and a donor who discovers an inflated claim is lost permanently along with everyone they tell.",
          "We will also say when an organisation is too early for a retainer. If your reporting, programme evidence and financial documentation are not ready for a donor to inspect, spending on acquisition is premature. A fixed-scope project to fix the giving path, the receipting and the reporting is a better use of the money, and we would rather do that and stop than bill monthly for campaigns into a programme that cannot hold the donors.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Why is recurring giving so much more important than one-time donations?",
      answer:
        "Because the cost of acquiring a donor is incurred once and the revenue from a recurring donor accrues for years. A monthly donor retained for three years is worth a multiple of a single gift, and the marginal cost of keeping them is a handful of emails and an honest impact report. Most Indian NGOs invert this, spending heavily on acquisition campaigns and almost nothing on the onboarding and reporting that turn a first-time giver into a monthly one. Fixing that order usually raises income without raising the budget.",
    },
    {
      question: "Why do our monthly donation sign-ups not convert into actual payments?",
      answer:
        "Almost always the mandate step. NACH registration involves bank-side verification and several screens where people drop out, and UPI autopay has its own approval flow that fails on a poor connection. Mandates also lapse silently later when a card expires or an account changes. The fix is operational rather than creative: offer both NACH and UPI autopay so donors can use whichever their bank handles well, reduce the steps between deciding and confirming, and check failed mandates weekly with a short recovery message rather than discovering the attrition at year end.",
    },
    {
      question: "What does FCRA actually require before we can accept foreign donations?",
      answer:
        "FCRA registration, which requires the organisation to have existed for at least three years. All foreign contribution must first be received into a designated FCRA account at State Bank of India, New Delhi Main Branch, regardless of where your organisation is based. The annual return, Form FC-4, is due by 31 December for the preceding financial year, and it must be filed even in a year when no foreign contribution was received. Registration is valid for five years and must be renewed, and administrative expenses are capped at 20% of foreign contributions.",
    },
    {
      question: "Is the Google Ad Grants programme worth applying for?",
      answer:
        "For eligible nonprofits, yes — it provides search advertising at no media cost, which is a meaningful asset for an organisation with a small budget. It also comes with account structure and policy requirements, and grant accounts that are set up once and left alone tend to spend the allowance on broad informational traffic that never donates. The value comes from managing it like any other search account: tight query control, landing pages built for the donation path, and measurement on donations rather than clicks.",
    },
    {
      question: "How should we handle beneficiary photographs and stories?",
      answer:
        "With documented informed consent, and with the person shown as someone with agency rather than as an object of pity. In practice that means a written consent process covering what the image will be used for and for how long, an explicit route to withdraw it, extra care where children or vulnerable adults are involved, and an internal editorial review before publication. It is also a data question — beneficiary information falls under the DPDP Act 2023 like any other personal data, so consent, purpose limitation and retention rules apply to your archive as well as to your campaigns.",
    },
    {
      question: "When are you the wrong fit for an NGO?",
      answer:
        "When the fundamentals a donor would inspect are not in place. If your programme evidence, financial reporting and receipting are not ready, acquisition spending is premature and we will say so. We are also the wrong fit where the brief is to raise the donation rate through distressing imagery, or to publish claims about fund allocation or outcomes that cannot be substantiated. And for very small organisations a monthly retainer often makes no sense — a fixed-scope project to fix the giving path, receipting and reporting is better value, and we would rather do that and stop.",
    },
  ],

  related: {
    title: "Related pages",
    items: [
      { title: "All industries", href: "/industries", body: "The other sectors we work across." },
      { title: "SEO & organic growth", href: "/services/seo-organic-growth", body: "Reaching people already searching your cause." },
      { title: "PPC management", href: "/services/ppc-management", body: "Including Google Ad Grants account management." },
      { title: "Conversion optimisation", href: "/services/conversion-optimization", body: "The donation path is where most fundraising is lost." },
      { title: "Content marketing", href: "/services/content-marketing", body: "Impact reporting that doubles as acquisition material." },
      { title: "Custom tools", href: "/custom-tools", body: "Donor portals, mandate monitoring and receipting built to fit." },
    ],
  },

  cta: {
    title: "Find out where your donors are leaking",
    body: "We will test your donation and mandate flow on a phone, review your retention by cohort, and send you the fixes ranked by what they are worth in recurring income.",
    primary: { label: "Get the donor audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Nonprofit and NGO Marketing",
    serviceType: "Industry Digital Marketing",
    audienceType: "Registered Indian NGOs, trusts, societies, section 8 companies and foundations",
    areaServed: ["India"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
