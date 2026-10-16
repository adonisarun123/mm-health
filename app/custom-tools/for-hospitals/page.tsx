import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Custom Hospital Software",
  description:
    "Custom software for hospitals that fills the gaps your HIS leaves: referral portals, enquiry routing, department dashboards",
  keywords: [
    "hospital software development India",
    "custom hospital software",
    "referral management system hospital",
    "hospital dashboard software",
    "patient feedback system hospital",
    "hospital enquiry management",
  ],
  alternates: { canonical: "/custom-tools/for-hospitals" },
  openGraph: {
    title: "Custom Hospital Software — Referral Portals, Dashboards, Routing",
    description:
      "The narrow, high-value tools an enterprise HIS never covers — built around your existing systems in weeks.",
    url: "/custom-tools/for-hospitals",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/custom-tools/for-hospitals",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Custom Tools", path: "/custom-tools" },
    { name: "For Hospitals", path: "/custom-tools/for-hospitals" },
  ],
  eyebrow: "Tools for hospitals",
  h1: "Custom hospital software for the gaps your HIS does not cover",
  answer:
    "Every hospital runs a core information system, and every hospital runs several critical processes outside it on spreadsheets, email and phone calls. Referral intake, enquiry routing, department-level reporting and patient feedback are the usual four. Monk Mantra builds those as focused tools around your existing stack, in weeks.",
  subhead:
    "We are not proposing to replace your HIS. We are proposing to stop your referral coordinator from running a tertiary service line out of a shared inbox.",
  heroBullets: [
    "Integrates with your existing HIS, EMR and PACS",
    "Scoped and priced without a procurement cycle",
    "Department-level visibility your board can act on",
    "Built to DPDP Act 2023 access, consent and audit expectations",
  ],
  primaryCta: { label: "Scope a hospital build", href: "/get-started" },
  secondaryCta: { label: "See hospital marketing", href: "/healthcare-marketing/hospitals" },

  keyFacts: [
    { label: "Built for", value: "Multi-specialty hospitals, single-specialty chains, health systems and diagnostic networks" },
    { label: "Most requested", value: "Referral portal, enquiry routing, department dashboards, feedback capture, report delivery" },
    { label: "Typical timeline", value: "4–10 weeks per tool depending on integration depth" },
    { label: "Starting from", value: "₹75,000 for a single focused tool; deep multi-system integration work runs higher" },
    { label: "Integration approach", value: "API, HL7 or scheduled export against your existing HIS, EMR, LIS or PACS" },
    { label: "Governance", value: "Role-based access, consent records, retention policy, access logs, breach process" },
  ],

  pains: {
    title: "Where hospital processes leave the system",
    intro:
      "The HIS covers admissions, orders, billing and records. It rarely covers the processes that decide whether a service line grows.",
    items: [
      {
        problem: "Referrals arrive by phone, WhatsApp and email, and vanish",
        fix:
          "For tertiary service lines the referring physician is the customer, yet most referral flow is untracked. A portal that lets a referrer send a case in under a minute, acknowledges instantly, commits to a response time and closes the loop with an outcome summary changes both conversion and the relationship.",
      },
      {
        problem: "Enquiries land in a shared inbox with no owner and no clock",
        fix:
          "International enquiries, insurance queries and second opinions sit for days because nobody owns them. Routing by service line with an assigned owner, an escalation timer and visible ageing turns an inbox into a pipeline.",
      },
      {
        problem: "Reporting exists at hospital level, decisions happen at department level",
        fix:
          "A board cannot evaluate marketing or capacity from a single aggregate. Enquiries, appointments, admissions and cost per admission need to exist per service line and per facility — which usually requires joining the marketing record to the appointment system, a join no vendor ships.",
      },
      {
        problem: "Patient feedback is collected on paper and read by nobody",
        fix:
          "Feedback that arrives as a stack of forms is a compliance artefact, not an operations input. Digital capture at discharge, routed to the responsible department, with themes surfaced weekly, is what actually moves a rating and a readmission conversation.",
      },
    ],
  },

  offerings: {
    title: "What hospitals ask us to build",
    items: [
      {
        icon: "Share2",
        title: "Referral portal and outcome loop",
        body: "A minute-long submission for referring doctors, instant acknowledgement, response-time commitment, status visibility and a structured outcome summary sent back.",
      },
      {
        icon: "Workflow",
        title: "Enquiry routing and SLA tracking",
        body: "Every enquiry tagged by service line and source, assigned an owner, with escalation timers and visible ageing so nothing sits unanswered.",
      },
      {
        icon: "LayoutDashboard",
        title: "Department and service line dashboards",
        body: "Enquiry to appointment to admission, with cost per admission, per department and per facility — joined across marketing and clinical systems.",
      },
      {
        icon: "MessageSquare",
        title: "Patient feedback and NPS capture",
        body: "Digital capture at discharge, routed to the responsible department, with theme analysis and alerting when a score moves.",
      },
      {
        icon: "FileText",
        title: "Report and discharge delivery",
        body: "Secure delivery of reports and discharge summaries to patients and referring doctors, with access control, expiry and a full audit trail.",
      },
      {
        icon: "Globe",
        title: "International patient coordination",
        body: "Enquiry handling across time zones, estimate generation, document collection, travel and visa checklists and a status view the patient can see.",
      },
      {
        icon: "CalendarCheck",
        title: "Consultant appointment layer",
        body: "Public booking against real consultant availability across facilities, feeding into your existing scheduling rather than duplicating it.",
      },
      {
        icon: "Database",
        title: "Integration and data plumbing",
        body: "The unglamorous work of joining HIS, EMR, LIS, PACS, call tracking and marketing data so a single number can be trusted.",
      },
      {
        icon: "ShieldCheck",
        title: "Access governance and audit",
        body: "Role-based access, consent records, retention policies and access logs designed in from the start rather than retrofitted before an audit.",
      },
    ],
  },

  process: {
    title: "How a hospital engagement runs",
    intro: "Hospitals have approval cycles and integration realities. We plan around both instead of pretending they do not exist.",
    items: [
      {
        duration: "Weeks 1–2",
        title: "Process and systems discovery",
        body:
          "We map the actual process with the people running it, and separately establish what your HIS, EMR and LIS can expose. Integration feasibility is settled before anything is promised.",
      },
      {
        duration: "Week 2",
        title: "Scope, price, and a governance plan",
        body:
          "Written specification, fixed price, delivery date, plus the data protection and access model documented so IT and legal review can run in parallel rather than at the end.",
      },
      {
        duration: "Weeks 3–8",
        title: "Build, integrate and pilot",
        body:
          "We build against a live preview and pilot with one department or one facility before rolling wider. A pilot exposes the process gaps a specification never will.",
      },
      {
        duration: "Rollout",
        title: "Train, roll out, hand over",
        body:
          "Department-by-department rollout, staff training, documentation and a support window. Code and data are yours, and your IT team gets a full handover.",
      },
    ],
  },

  table: {
    caption: "Where a custom tool beats extending the HIS",
    columns: ["Need", "Extend the HIS", "Buy a point product", "Custom tool"],
    rows: [
      [
        "Referral intake from external doctors",
        "Rarely supported; heavy change request",
        "Few options built for Indian referral patterns",
        "Best fit — small, external-facing, quick",
      ],
      [
        "Marketing-to-admission reporting",
        "Not in scope; no marketing data",
        "Analytics tools cannot see clinical systems",
        "Best fit — the join is the whole product",
      ],
      [
        "Core admissions, orders, billing",
        "Correct place for it",
        "Sometimes viable",
        "Do not build this",
      ],
      [
        "Patient feedback at discharge",
        "Possible but slow to change",
        "Generic survey tools, poor routing",
        "Good fit if routing to departments matters",
      ],
      [
        "Report delivery to patients",
        "Often exists but unusable externally",
        "Available, variable security",
        "Good fit where access control and audit matter",
      ],
    ],
  },

  prose: {
    title: "What makes hospital builds succeed or fail",
    blocks: [
      {
        heading: "Integration feasibility decides the timeline",
        paragraphs: [
          "The difference between a four-week build and a four-month one is almost never the application logic. It is whether your existing systems can be read from and written to. A HIS with a documented API is straightforward. One where the vendor charges for every integration point, or where the only route is a nightly database export, changes both the design and the schedule.",
          "So we establish that in the first fortnight, in writing, before quoting a date. A project that promises a live integration and then discovers a closed system halfway through is how hospital IT departments learn to distrust every vendor that follows.",
        ],
      },
      {
        heading: "Pilot in one department, not across the hospital",
        paragraphs: [
          "Hospital-wide rollouts fail for organisational reasons more often than technical ones. A single department pilot gives you a real test with a manageable blast radius, surfaces the process assumptions that were wrong, and produces internal advocates who will do more for adoption than any training session.",
          "It also gives you a decision point. If the pilot does not demonstrably improve the thing it was meant to improve, you stop — having spent a fraction of the budget rather than all of it.",
        ],
      },
      {
        heading: "Data protection is a design constraint, not a sign-off",
        paragraphs: [
          "Under the Digital Personal Data Protection Act, 2023, with Rules notified in November 2025, a hospital is a data fiduciary with obligations around consent notices, purpose limitation, retention, breach notification and children's data. HIPAA is United States law and has no application to an Indian facility except where you serve US patients under a specific arrangement.",
          "Practically, every tool we build carries role-based access from the first commit, records consent with its purpose and timestamp, applies an explicit retention policy rather than keeping everything indefinitely, and logs access so an incident can actually be reconstructed. Designed in, this is inexpensive. Added after a security review, it is a second project.",
        ],
      },
      {
        heading: "Why the marketing join matters more than it sounds",
        paragraphs: [
          "The most common request we get from hospital leadership is not a new feature. It is a number: what did an orthopaedic admission cost us to acquire. Almost no hospital can answer it, because the marketing record and the appointment record live in systems that have never spoken.",
          "Building that join is unglamorous plumbing — tracking numbers per department, enquiry tagging, a matching key into the appointment system — and it changes the quality of every budget conversation that follows. It is the piece we most often recommend building first.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Will custom tools integrate with our existing HIS or EMR?",
      answer:
        "That is the design intent, and feasibility is the first thing we establish. Where your system exposes a REST API or supports HL7 messaging, integration is direct. Where it does not, we look at scheduled exports, database views or a lightweight bridge, each of which has different latency and reliability characteristics. We document which route applies and what it implies before quoting a date, rather than discovering a closed system mid-project.",
    },
    {
      question: "How much does custom hospital software cost?",
      answer:
        "A single focused tool such as a referral portal or a feedback system starts from around ₹75,000. Work involving deep integration across HIS, marketing systems and multiple facilities runs higher, and we scope that against what your systems can actually expose. That remains materially below a full enterprise module licence, and it is scoped and fixed-price rather than open-ended. Hosting and support are quoted separately and are usually modest.",
    },
    {
      question: "How long does a hospital project take?",
      answer:
        "Four to ten weeks per tool is typical, with the range driven almost entirely by integration depth rather than application complexity. We build in a pilot department first, which usually adds two to three weeks before wider rollout but substantially reduces the risk of a failed launch. Your internal approval cycles run in parallel because we produce the data protection and access documentation during scoping, not at the end.",
    },
    {
      question: "Do we own the code and the data?",
      answer:
        "Yes to both. The code is handed over with documentation and is yours to maintain, extend or move elsewhere. Data sits in infrastructure you control or that is contracted directly to you, which matters for both DPDP accountability and for avoiding the vendor lock-in that makes hospital IT expensive over a ten-year horizon.",
    },
    {
      question: "Can you work with our internal IT team rather than around them?",
      answer:
        "That is the preferred arrangement. Your IT team knows the estate, the integration constraints and the internal politics far better than we will. We typically take the application build and the integration design, while your team retains infrastructure and security governance, and we hand over documentation built for engineers rather than for procurement.",
    },
    {
      question: "What is the single highest-value tool to build first?",
      answer:
        "In most hospitals it is the reporting join — connecting enquiries and their sources to appointments and admissions by service line. It is unglamorous, it is usually cheap relative to the rest, and it is the thing that makes every subsequent budget and capacity decision evidence-based instead of anecdotal. Where a specific service line depends on external referrals, the referral portal usually comes first instead.",
    },
  ],

  related: {
    title: "Related",
    items: [
      { title: "Hospital marketing", href: "/healthcare-marketing/hospitals", body: "Service line demand and department-level growth." },
      { title: "Tools for clinics", href: "/custom-tools/for-clinics", body: "Booking, queue, CRM and branch dashboards." },
      { title: "Patient CRM and recall", href: "/custom-tools/patient-crm", body: "One patient record and the recall engine on it." },
      { title: "Patient acquisition", href: "/healthcare-marketing/patient-acquisition", body: "Measuring the path to an attended appointment." },
      { title: "All custom tools", href: "/custom-tools", body: "The full range of builds." },
      { title: "Healthcare marketing overview", href: "/healthcare-marketing", body: "The demand side across provider types." },
    ],
  },

  cta: {
    title: "Which process is running outside your HIS?",
    body: "Name the one your team manages in a spreadsheet or a shared inbox. We will assess integration feasibility and come back with a scope, a price and a date.",
    primary: { label: "Scope a hospital build", href: "/get-started" },
    secondary: { label: "Book a 30-minute call", href: "/contact" },
  },

  schema: {
    type: "SoftwareApplication",
    serviceName: "Custom Hospital Software",
    applicationCategory: "HealthApplication",
    audienceType: "Hospitals, health systems and diagnostic networks",
    offersFrom: "200000",
    offersCurrency: "INR",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
