import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Analytics & Reporting Services",
  description:
    "GA4 done properly, server-side tracking, honest attribution and reporting that survives a finance review — plus the plumbing that joins marketing to revenue.",
  keywords: [
    "GA4 setup agency",
    "marketing analytics services",
    "server side tracking GTM",
    "marketing attribution India",
    "conversion tracking audit",
    "marketing dashboard reporting",
  ],
  alternates: { canonical: "/services/analytics-reporting" },
  openGraph: {
    title: "Analytics & Reporting Services | Monk Mantra",
    description:
      "Tracking you can trust, attribution stated honestly, and reporting that connects marketing spend to actual revenue.",
    url: "/services/analytics-reporting",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/services/analytics-reporting",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Analytics & Reporting", path: "/services/analytics-reporting" },
  ],
  eyebrow: "Analytics and reporting",
  h1: "Analytics that answers the only question that matters",
  answer:
    "Marketing analytics is the work of measuring which activity produces revenue, accurately enough to act on. That requires correct event tracking, a defensible attribution model, and a join between marketing records and your actual sales data. Monk Mantra builds that plumbing and reports against it monthly.",
  subhead:
    "Almost every business we audit is reporting numbers that are wrong in a specific, identifiable way — and making budget decisions on them. Fixing the measurement usually changes the strategy before we change a single campaign.",
  heroBullets: [
    "Tracking audited and repaired before anything is reported",
    "Attribution limits stated, not hidden",
    "Consent handled under the DPDP Act 2023",
    "Dashboards you own, in tools you already pay for",
  ],
  primaryCta: { label: "Get a free tracking audit", href: "/get-started" },
  secondaryCta: { label: "See all services", href: "/services" },

  keyFacts: [
    { label: "What it covers", value: "GA4, Tag Manager, server-side tracking, call tracking, CRM join, dashboards, attribution modelling" },
    { label: "Setup from", value: "₹20,000 one-time, rising with the number of systems involved" },
    { label: "Ongoing reporting from", value: "₹10,000 per month, or included within a wider retainer" },
    { label: "Timeline", value: "2–5 weeks for a full implementation and validation pass" },
    { label: "Tools", value: "GA4, Google Tag Manager, Looker Studio, BigQuery where volume justifies it" },
    { label: "Ownership", value: "All properties, containers and dashboards under your accounts" },
  ],

  pains: {
    title: "The measurement faults we find almost every time",
    intro:
      "These are not exotic. They are present in the majority of accounts we audit, and each one distorts budget decisions in a predictable direction.",
    items: [
      {
        problem: "Conversions counted more than once",
        fix:
          "The same enquiry fires a GA4 event, a Google Ads conversion and a Meta conversion, and all three are added together in a summary deck. Reported leads exceed what the sales team actually received, and cost per lead looks better than it is. We deduplicate against a single source of truth and reconcile against your CRM.",
      },
      {
        problem: "The conversion event is not a commercial outcome",
        fix:
          "Tracking fires on a thank-you page view, a form field focus, a scroll or a click that may not have submitted anything. The bid algorithms then optimise toward that behaviour. We redefine conversions as verified commercial events and test them end to end rather than assuming the tag works.",
      },
      {
        problem: "Phone calls are invisible",
        fix:
          "In healthcare, services, real estate and most local businesses the phone is the primary conversion, and it appears nowhere in the analytics. Every channel is then judged on the minority of enquiries that happened to use a form. Call tracking numbers per channel and per location fix this, and often reverse the apparent ranking of channels.",
      },
      {
        problem: "Last-click attribution treated as truth",
        fix:
          "Last click systematically over-credits brand search and remarketing — the channels that catch people already coming to you — and under-credits everything that created the demand. We report multiple models side by side and state plainly what each can and cannot support.",
      },
    ],
  },

  offerings: {
    title: "What we implement",
    items: [
      {
        icon: "Settings2",
        title: "Tracking audit",
        body: "A full inventory of what fires, when, how often, and whether it corresponds to a real business event — including the tags that have been silently broken since the last site change.",
      },
      {
        icon: "BarChart3",
        title: "GA4 implementation",
        body: "Event and conversion architecture designed around your actual funnel rather than default recommended events, with proper channel grouping, internal traffic exclusion and cross-domain handling.",
      },
      {
        icon: "Database",
        title: "Tag Manager and server-side tracking",
        body: "A clean container with documented naming, and server-side tagging where ad blockers, browser restrictions and data quality justify the additional infrastructure.",
      },
      {
        icon: "PhoneCall",
        title: "Call tracking",
        body: "Dynamic number insertion by channel, static numbers per branch or campaign, call recording where lawful and consented, and call outcome fed back as a conversion.",
      },
      {
        icon: "Workflow",
        title: "CRM and offline conversion join",
        body: "The step almost nobody takes: pushing closed revenue back into the ad platforms so bidding optimises toward customers rather than form fills, and marketing can report on revenue rather than leads.",
      },
      {
        icon: "LayoutDashboard",
        title: "Dashboards",
        body: "Looker Studio reporting built for the people who will actually read it — one view for the owner, one for the channel operator — with definitions documented so numbers are not re-litigated monthly.",
      },
      {
        icon: "LineChart",
        title: "Attribution modelling",
        body: "Multiple models reported side by side, with a clear statement of which decisions each can support and which it cannot.",
      },
      {
        icon: "Lock",
        title: "Consent and data governance",
        body: "Consent capture and honouring under the DPDP Act 2023, retention policies, PII kept out of analytics properties, and access control on who can see what.",
      },
      {
        icon: "ShieldCheck",
        title: "Monitoring",
        body: "Alerting when a tag breaks or conversion volume falls off a cliff, because the most expensive tracking failure is the one nobody notices for two months.",
      },
    ],
  },

  process: {
    title: "How an analytics engagement runs",
    items: [
      {
        duration: "Week 1",
        title: "Audit and reconcile",
        body:
          "We compare what the platforms report against what your CRM and finance records show. The gap between those two numbers is the finding, and it is usually large enough to change how you feel about last quarter.",
      },
      {
        duration: "Weeks 1–2",
        title: "Design the measurement plan",
        body:
          "Which events matter, what each is called, what counts as a qualified enquiry, and which metric each decision will be made on — documented and agreed before implementation so it cannot be renegotiated when the numbers are inconvenient.",
      },
      {
        duration: "Weeks 2–4",
        title: "Implement and validate",
        body:
          "Tags built, server-side deployed where justified, call tracking installed, CRM join established. Then everything is tested end to end with real submissions rather than assumed to work.",
      },
      {
        duration: "Ongoing",
        title: "Report and maintain",
        body:
          "Monthly reporting against the agreed plan, plus monitoring so breakages surface immediately. Tracking decays every time the site changes; treating it as a one-time project is why so much of it is broken.",
      },
    ],
  },

  table: {
    caption: "What each attribution model is actually good for",
    columns: ["Model", "Systematically over-credits", "Reasonable use", "Do not use it for"],
    rows: [
      [
        "Last click",
        "Brand search, remarketing, direct",
        "Judging bottom-of-funnel efficiency",
        "Deciding whether awareness spend works",
      ],
      [
        "First click",
        "Top-of-funnel discovery channels",
        "Understanding what starts demand",
        "Judging closing efficiency or ROAS",
      ],
      [
        "Data-driven (platform)",
        "Whatever the platform itself sells",
        "In-platform optimisation decisions",
        "Comparing one platform against another",
      ],
      [
        "Position-based",
        "Nothing badly; it is a compromise",
        "A default board-level view",
        "Precise channel-level budget cuts",
      ],
      [
        "Incrementality testing",
        "Nothing — it measures causation",
        "Settling whether a channel is worth anything",
        "Weekly optimisation; it is slow and costly",
      ],
    ],
  },

  prose: {
    title: "What honest measurement looks like",
    blocks: [
      {
        heading: "Attribution is an estimate, and should be described as one",
        paragraphs: [
          "No attribution model tells you what caused a purchase. Every one of them applies a rule to an incomplete record of touchpoints, and the rule is chosen rather than discovered. Cookie restrictions, cross-device journeys, offline conversations and word of mouth mean a meaningful share of the path is simply unobserved.",
          "That does not make attribution useless. It makes it directional. The mature approach is to use modelled attribution for day-to-day optimisation, hold a healthy scepticism about small differences between channels, and settle genuinely expensive questions with a holdout or geo test rather than an argument about which model is correct.",
        ],
        bullets: [
          "Report the model used, every time, rather than a single unattributed number",
          "Never compare a platform's self-reported conversions with another platform's",
          "Reconcile against finance monthly; the gap is the honest error bar",
          "Use incrementality tests for the decisions that actually cost money",
        ],
      },
      {
        heading: "The join to revenue is the whole point",
        paragraphs: [
          "Most marketing reporting stops at the lead because that is where the marketing systems stop. The result is a permanent argument between marketing, which reports plenty of leads, and sales or operations, which reports that the leads were poor.",
          "Joining the two — a key that follows an enquiry into the CRM or appointment system and comes back with an outcome — ends that argument with evidence. It is unglamorous plumbing and it is consistently the highest-value thing we build, because every subsequent budget decision improves once it exists.",
        ],
      },
      {
        heading: "Consent is now a design constraint",
        paragraphs: [
          "The Digital Personal Data Protection Act, 2023, with its Rules notified in November 2025, requires informed consent for processing personal data, with clear notice of purpose and a working withdrawal mechanism. Analytics and advertising tags are squarely within scope where they process personal data.",
          "Practically this means consent state has to be captured and honoured by the tag layer rather than bolted on as a banner that does nothing, personally identifiable information must be kept out of analytics properties entirely, and retention needs a defined policy. Designed in, this costs little. Retrofitted after a complaint, it is a project.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not build a dashboard that makes our own work look better than it is. We will not report platform-claimed conversions as though they were verified. We will not put personal data into an analytics property to make a report easier to build.",
          "And we will not present a number without its definition attached. Most disputes about marketing performance are actually disputes about what a word meant, and they disappear the moment the measurement plan is written down and agreed in advance.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Why do Google Ads, Meta and GA4 all report different numbers?",
      answer:
        "Because they count different things by different rules. Each ad platform credits conversions to itself using its own attribution window and view-through logic, so if two platforms both touched a customer, both will claim the conversion. GA4 applies its own model and its own session logic. None of them is lying; they are answering different questions. The only reconcilable number is the one in your own CRM or finance system, which is why we join to that.",
    },
    {
      question: "Do I need server-side tracking?",
      answer:
        "Not always. It genuinely helps where ad blockers, browser privacy restrictions or poor connectivity are eroding data quality, and where you need control over what is sent to third parties — which is also useful for data protection. But it adds infrastructure, cost and a maintenance burden. For a small site with modest traffic, a well-built client-side implementation with clean events is usually the better trade. We would rather fix your event definitions first and revisit server-side later.",
    },
    {
      question: "How much does analytics setup cost?",
      answer:
        "A focused GA4 and Tag Manager implementation with proper event design starts from about ₹20,000 as a one-time build. Adding call tracking, server-side tagging and a CRM join takes it higher, depending on whether your CRM has a usable API. Ongoing reporting is either a small monthly retainer or folded into a wider engagement. We quote against a written measurement plan rather than hourly.",
    },
    {
      question: "Can you fix tracking without rebuilding our website?",
      answer:
        "In most cases yes. Tag Manager lets us deploy and correct a great deal without touching the site's codebase, and call tracking sits alongside rather than inside it. The exceptions are single-page applications with no meaningful route or state events, and checkout flows that expose nothing to work with — there, some development is unavoidable. We establish which situation you are in during the first week rather than discovering it later.",
    },
    {
      question: "What is a reasonable set of KPIs to report on?",
      answer:
        "Few, defined, and tied to money. For most businesses: qualified enquiries by channel, conversion rate from enquiry to customer, cost per acquired customer, and revenue or contribution by channel. Everything else is diagnostic and belongs one level down, available when someone asks why a headline number moved. Dashboards with forty metrics are usually a sign that nobody decided what the business is actually optimising.",
    },
    {
      question: "Is Google Analytics legal to use in India?",
      answer:
        "Yes. Unlike some European jurisdictions, India has not restricted Google Analytics specifically. What does apply is the DPDP Act 2023, which requires a lawful basis and informed consent for processing personal data, with proper notice and a functioning withdrawal mechanism. In practice that means implementing consent so it actually gates the tags, keeping identifiers and personal data out of analytics properties, and setting a defined retention period rather than keeping everything indefinitely.",
    },
  ],

  related: {
    title: "Related services",
    items: [
      { title: "PPC management", href: "/services/ppc-management", body: "Paid media is only as good as its conversion signal." },
      { title: "Conversion optimisation", href: "/services/conversion-optimization", body: "Testing depends entirely on trustworthy measurement." },
      { title: "SEO & organic growth", href: "/services/seo-organic-growth", body: "Proving organic's contribution to revenue." },
      { title: "Custom tools", href: "/custom-tools", body: "Dashboards and the CRM join, built when off-the-shelf cannot." },
      { title: "Patient acquisition", href: "/healthcare-marketing/patient-acquisition", body: "Measuring search through to attended appointment." },
      { title: "How we measure results", href: "/case-studies", body: "Our reporting method, stated plainly." },
    ],
  },

  cta: {
    title: "Find out how wrong your current numbers are",
    body: "We will audit your tracking, reconcile the platforms against each other, and send you a written list of what is being double-counted, mis-defined or missed entirely.",
    primary: { label: "Get the free tracking audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Marketing Analytics and Reporting Services",
    serviceType: "Marketing Analytics and Attribution",
    audienceType: "Healthcare providers, D2C brands, SaaS and service businesses",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
