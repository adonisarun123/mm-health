import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Marketing Automation Services",
  description:
    "Automation multiplies whatever process you already have, including a broken one. We map it, fix the data, then automate scoring, nurture and handoff.",
  keywords: [
    "marketing automation agency India",
    "marketing automation services",
    "lead scoring model",
    "CRM implementation India",
    "lead nurturing sequences",
    "HubSpot implementation partner",
    "DPDP Act consent automation",
  ],
  alternates: { canonical: "/services/marketing-automation" },
  openGraph: {
    title: "Marketing Automation Services | Monk Mantra",
    description:
      "Process mapping before tooling, lead scoring on real buying signals, CRM hygiene, sales handoff SLAs and DPDP-compliant consent.",
    url: "/services/marketing-automation",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/services/marketing-automation",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Marketing Automation", path: "/services/marketing-automation" },
  ],
  eyebrow: "Marketing automation",
  h1: "Automation multiplies your process, including a broken one",
  answer:
    "Marketing automation is the use of software to run repeatable marketing and sales tasks — scoring leads, sending triggered sequences, routing enquiries and syncing records — without manual effort. It amplifies whatever process already exists, so Monk Mantra maps and fixes the process before automating any part of it.",
  subhead:
    "Buying a platform does not give you a process. It gives you a faster, more expensive version of the one you were already running badly.",
  heroBullets: [
    "Process mapped and agreed before anything is built",
    "Lead scoring based on buying signals, not pageviews",
    "CRM hygiene treated as a precondition",
    "A written sales handoff SLA both teams accept",
  ],
  primaryCta: { label: "Get an automation audit", href: "/get-started" },
  secondaryCta: { label: "See all services", href: "/services" },

  keyFacts: [
    { label: "What it covers", value: "Process mapping, CRM setup and hygiene, lead scoring, nurture sequences, routing and handoff, lifecycle reporting" },
    { label: "Implementation from", value: "₹40,000 one-off, rising with system count and the condition of your data" },
    { label: "Ongoing from", value: "₹18,000 per month for operation and iteration" },
    { label: "Time to value", value: "Routing and handoff within four to six weeks; scoring accuracy needs a full sales cycle to validate" },
    { label: "Reported on", value: "Lead-to-opportunity rate, response time, sales acceptance rate, pipeline by source" },
    { label: "Poor fit", value: "Low enquiry volume or high-value relationship sales, where a spreadsheet and a disciplined salesperson beat a platform" },
  ],

  pains: {
    title: "Why automation projects disappoint",
    intro:
      "Almost never because the software could not do it. Usually because nobody agreed what it should be doing.",
    items: [
      {
        problem: "The tool was bought before the process was defined",
        fix:
          "A platform encodes decisions: what counts as a lead, when it goes to sales, what happens if nobody calls. If those decisions have not been made, the implementation makes them by default and nobody notices for a quarter. We map the current process on one page, mark where it fails, agree the target state in writing, then configure.",
      },
      {
        problem: "Lead scoring measures curiosity rather than intent",
        fix:
          "Scoring built on pageviews and email opens promotes researchers, students and competitors while a genuine buyer who visited the pricing page twice and requested a demo sits in the same bucket. We score on demonstrated buying signals — pricing and comparison pages, repeat sessions, form depth, firmographic fit — and recalibrate against closed deals rather than assumptions.",
      },
      {
        problem: "The CRM data is unreliable, so every automation misfires",
        fix:
          "Duplicate contacts, unowned records, half-populated fields and free-text values where a picklist belongs will break routing, scoring and reporting simultaneously. Deduplication, required-field rules, a defined lifecycle stage model and a person accountable for hygiene are preconditions, not phase two.",
      },
      {
        problem: "Marketing passes leads across and nothing happens",
        fix:
          "Without an agreed definition of a qualified lead, a response time commitment and a route back for rejections, marketing reports leads and sales reports rubbish, both sincerely. We write an SLA both teams sign: what qualifies, how fast contact happens, how many attempts, and what a rejection must state so scoring can learn from it.",
      },
    ],
  },

  offerings: {
    title: "What an automation engagement includes",
    intro:
      "Sequenced deliberately. Every item below depends on the ones above it actually being true.",
    items: [
      {
        icon: "Workflow",
        title: "Process mapping",
        body: "The current path from first touch to closed deal on one page, with the drop-off points and manual workarounds marked. Almost every engagement finds a step nobody knew was there and a step nobody was actually doing.",
      },
      {
        icon: "Database",
        title: "CRM setup and hygiene",
        body: "Deduplication, field standardisation, lifecycle stage definitions, required fields at each stage, ownership rules, and an audit view that makes decay visible before it corrupts reporting.",
      },
      {
        icon: "Target",
        title: "Lead scoring",
        body: "A model built on demonstrated buying behaviour and fit, validated against deals that actually closed, with negative scoring for disqualifying signals and a scheduled recalibration rather than a set-and-forget number.",
      },
      {
        icon: "Send",
        title: "Nurture sequences",
        body: "Built only where the consideration cycle genuinely warrants them, with exit conditions that stop the sequence the moment someone converts or a salesperson makes contact. Nothing damages trust faster than a drip that ignores a live conversation.",
        href: "/services/email-marketing",
      },
      {
        icon: "UserPlus",
        title: "Routing and handoff",
        body: "Assignment rules by territory, service line or capacity, an escalation path when nobody responds, and a written SLA covering response time, attempt count and the reason codes required on a rejection.",
      },
      {
        icon: "Settings2",
        title: "Integration",
        body: "Website forms, ad platforms, call tracking, WhatsApp, billing and support connected so a record exists once rather than four times. Where an off-the-shelf connector does not exist, we build the integration.",
        href: "/custom-tools",
      },
      {
        icon: "Lock",
        title: "Consent architecture",
        body: "Consent captured with a stated purpose, stored against the record, respected by every automated channel, and withdrawable as easily as it was given — the operating requirements under the DPDP Act 2023, with Rules notified in November 2025.",
      },
      {
        icon: "LayoutDashboard",
        title: "Lifecycle reporting",
        body: "Volume and conversion rate at each stage, by source, so you can see where the funnel actually leaks instead of debating it. Built once and maintained, rather than rebuilt manually each month.",
        href: "/services/analytics-reporting",
      },
      {
        icon: "Bot",
        title: "Custom automation where platforms stop",
        body: "Some workflows do not fit any product — an appointment recall rule, a branch-level routing quirk, a reconciliation between two systems. We build software, so the honest answer is sometimes a small custom tool rather than a bigger licence.",
        href: "/custom-tools",
      },
    ],
  },

  process: {
    title: "How an automation engagement runs",
    intro: "Map, clean, build, then iterate. Skipping the first two steps is why most implementations are rebuilt within eighteen months.",
    items: [
      {
        duration: "Weeks 1–3",
        title: "Map the process and audit the data",
        body:
          "Interviews with marketing and sales separately, because they describe different processes. Current-state map, data quality assessment, system inventory and a written target state with the decisions made explicit and signed off.",
      },
      {
        duration: "Weeks 3–6",
        title: "Clean and configure",
        body:
          "Deduplication, field and stage standardisation, ownership assigned, consent provenance established, then core configuration: lifecycle stages, routing rules and the first version of the scoring model.",
      },
      {
        duration: "Weeks 6–12",
        title: "Build and pilot",
        body:
          "Sequences, alerts and handoff built, then piloted on one segment or one team before switching everything over. A pilot surfaces the edge cases that would otherwise reach every contact you have at once.",
      },
      {
        duration: "Ongoing",
        title: "Validate and recalibrate",
        body:
          "Scoring recalibrated against closed-won and closed-lost after a full sales cycle, sequences pruned where engagement decays, SLA compliance reported honestly, and automations retired when they stop earning their complexity.",
      },
    ],
  },

  table: {
    caption: "Each automation and the precondition it depends on",
    columns: ["Automation", "Precondition that must be true first", "What breaks without it"],
    rows: [
      [
        "Lead scoring",
        "An agreed definition of a qualified lead, validated against deals that actually closed",
        "Sales stops trusting the score within a month and reverts to working the list by gut feel",
      ],
      [
        "Lead routing",
        "Clean ownership rules, current territory or capacity data, and a named fallback owner",
        "Leads land on people who have left, sit unworked, and surface weeks later as a complaint",
      ],
      [
        "Nurture sequences",
        "Enough content worth sending, and exit conditions that fire on conversion or sales contact",
        "Prospects receive drip emails during live negotiations, which damages deals in progress",
      ],
      [
        "Behavioural triggers",
        "Reliable tracking and identity resolution across web, forms and CRM",
        "Triggers fire on the wrong person or not at all, and nobody can reproduce the failure",
      ],
      [
        "Sales handoff alerts",
        "A written SLA covering response time, attempt count and rejection reason codes",
        "Alerts become noise, get muted, and the fastest-decaying leads are the ones lost",
      ],
      [
        "Lifecycle reporting",
        "Consistent stage definitions and mandatory fields enforced at each transition",
        "Every report disagrees with every other one and the meeting becomes an argument about data",
      ],
    ],
  },

  prose: {
    title: "How we think about automation",
    blocks: [
      {
        heading: "Map the process before you automate it",
        paragraphs: [
          "An automation is a decision written down and executed thousands of times without supervision. If the decision is wrong, you have not saved effort — you have industrialised the error and removed the human who used to catch it. This is why implementations that start with software selection so reliably disappoint.",
          "The first deliverable is therefore a one-page map of how an enquiry actually travels today: who touches it, what they do, where it waits, where it dies. Sales and marketing are interviewed separately because they invariably describe different processes, and the gap between the two accounts is usually the most valuable finding of the engagement.",
        ],
        bullets: [
          "Write down what qualifies a lead before configuring anything that scores one",
          "Find the manual workaround people rely on — it is load-bearing and undocumented",
          "Decide what happens when nobody responds, because that path fires more often than you expect",
          "Automate the step that is repetitive and correct, not the step that is unclear",
        ],
      },
      {
        heading: "When automation is the wrong answer",
        paragraphs: [
          "At low volume, automation costs more than it returns. If you receive thirty enquiries a month and a salesperson can personally contact each one within an hour, a scored, routed, nurtured pipeline adds licence cost, configuration overhead and a layer of indirection between you and the buyer. A shared inbox with discipline is a better system at that scale, and we will say so.",
          "The same applies to high-value relationship sales. Where deals are large, buying committees are small and the relationship is the product, a generic nurture sequence signals that the prospect is being processed. The right automation there is administrative — reminders, meeting notes, data capture, next-step prompts — leaving all outbound communication personal and human-sent.",
          "Short consideration cycles also do not need nurturing. If someone typically decides within seventy-two hours, a nine-email sequence spread over six weeks is not nurture, it is a delay dressed up as a strategy. Speed of response is worth more than any sequence you could build.",
        ],
      },
      {
        heading: "Build versus buy, and consent under the DPDP Act",
        paragraphs: [
          "Buy the platform when your process resembles the process the product was designed around — standard lifecycle stages, standard channels, standard reporting. You get maintenance, integrations and support you would otherwise fund yourself. Build only where a specific workflow is genuinely yours and the product cannot express it: a clinical recall rule, a branch-level routing quirk, a reconciliation between two systems nobody has connected before. In practice the right answer is usually a bought platform with one or two small custom components attached, and we can build either side of that line.",
          "Whichever route you take, consent has to be architectural rather than a checkbox on a form. The DPDP Act 2023, with Rules notified in November 2025, requires consent to be free, specific, informed and unambiguous, tied to a stated purpose, and as easy to withdraw as to give. For automation that means the consent record travels with the contact, every automated channel checks it before sending, withdrawal propagates across all systems rather than one, and you can produce evidence of what each person agreed to and when. Retrofitting this after an implementation is considerably more expensive than designing it in.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not automate a process nobody has agreed on, and we will not configure a platform on top of a CRM we have not cleaned. We will not build a nurture sequence for a purchase that is decided in three days, or add scoring to an account receiving too few enquiries for the score to mean anything.",
          "We will not send automated messages to contacts whose consent provenance cannot be established, however large the list. And if the honest recommendation is that you need one salesperson responding faster rather than a platform, we will make that recommendation, even though it is worth considerably less to us than an implementation project.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "What is marketing automation, in practical terms?",
      answer:
        "It is software that runs repeatable marketing and sales tasks without someone doing them manually: scoring leads by behaviour and fit, sending sequences triggered by what a person did, routing enquiries to the right owner, syncing records between systems, and reporting on each lifecycle stage. The practical value is consistency and speed, not creativity. It cannot decide what makes a good lead, and it cannot rescue a process that does not work when a human runs it.",
    },
    {
      question: "Which marketing automation platform should we use?",
      answer:
        "Pick by the process you mapped, not by feature comparison. Most Indian mid-market businesses are well served by a mainstream CRM with automation built in, and the deciding factors are usually integration with the systems you already run, admin effort, and per-contact cost as the database grows. The commonest mistake is buying enterprise tooling for a process still being defined — you pay for capability you cannot yet use and complexity that slows every change.",
    },
    {
      question: "How should we score leads?",
      answer:
        "Score on demonstrated buying signals and fit, not general interest. Pricing page visits, comparison page visits, repeat sessions within a short window, form depth, demo or callback requests and company fit are real signals. Blog visits and email opens are weak, and an open is not even reliably measurable now. Apply negative scoring for students, job seekers and competitors, and recalibrate against closed-won and closed-lost deals after a full sales cycle rather than trusting the initial weights.",
    },
    {
      question: "When is marketing automation the wrong tool?",
      answer:
        "At low volume, where a person can personally handle every enquiry faster than a system routes it. In high-value relationship sales, where a generic sequence signals the prospect is being processed. And where the consideration cycle is short — if buyers decide in three days, a six-week drip is a delay, not nurture. In all three cases the money is better spent on response speed and on the people having the conversations.",
    },
    {
      question: "How long does an implementation take?",
      answer:
        "Routing, handoff alerts and basic lifecycle reporting are commonly live within four to six weeks. Scoring takes longer to be trustworthy because validating it requires a full sales cycle of closed deals to compare against. Where CRM data is in poor condition, the cleanup phase often takes longer than the configuration — and shortening it is a false economy, because every automation built on unreliable data will misfire in ways that are hard to diagnose later.",
    },
    {
      question: "What does the DPDP Act 2023 require for automated messaging?",
      answer:
        "Consent must be free, specific, informed and unambiguous, tied to a purpose stated at the point of collection, and as easy to withdraw as it was to give. For automation this means the consent record lives on the contact, every automated channel checks it before sending, withdrawal propagates across all connected systems rather than just the one where it was received, and you can evidence what each person agreed to and when. The Rules were notified in November 2025, so this is now an operating requirement rather than a future concern.",
    },
  ],

  related: {
    title: "Related services",
    items: [
      { title: "Email marketing", href: "/services/email-marketing", body: "The channel most automation runs through." },
      { title: "Custom tools", href: "/custom-tools", body: "When the workflow does not fit any platform." },
      { title: "Analytics & reporting", href: "/services/analytics-reporting", body: "Lifecycle reporting that both teams trust." },
      { title: "Conversion optimisation", href: "/services/conversion-optimization", body: "Fixing the forms that feed the system." },
      { title: "AI marketing strategy", href: "/services/ai-marketing-strategy", body: "Where AI genuinely helps, and where it does not." },
      { title: "Mobile marketing", href: "/services/mobile-marketing", body: "WhatsApp and SMS inside an automated lifecycle." },
    ],
  },

  cta: {
    title: "Find out what your automation is actually doing",
    body: "We will map your current enquiry-to-close process, audit CRM data quality and consent provenance, and send you the gaps in writing before anything is built.",
    primary: { label: "Get the free automation audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Marketing Automation Services",
    serviceType: "Marketing Automation and CRM Implementation",
    audienceType: "Healthcare providers, SaaS, D2C brands and service businesses",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
