import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Custom Software for Clinics & Hospitals",
  description:
    "We build custom productivity tools for doctors, clinics and hospitals: booking, WhatsApp reminders, patient CRM, intake, referral portals and dashboards",
  keywords: [
    "custom software for clinics",
    "clinic management software India",
    "custom healthcare software development",
    "hospital software development",
    "appointment booking system for doctors",
    "patient CRM",
    "affordable clinic software",
  ],
  alternates: { canonical: "/custom-tools" },
  openGraph: {
    title: "Custom Software for Doctors, Clinics & Hospitals — Built in Weeks",
    description:
      "Narrow, well-built tools that fit your actual workflow. Booking, reminders, CRM, intake and dashboards — weeks, not quarters.",
    url: "/custom-tools",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/custom-tools",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Custom Tools", path: "/custom-tools" },
  ],
  eyebrow: "Custom software",
  h1: "Custom tools for doctors, clinics and hospitals",
  answer:
    "Custom healthcare tools are small, purpose-built applications that solve one workflow properly instead of replacing your whole system. Monk Mantra builds them for individual doctors, clinics and hospitals — booking, reminders, patient CRM, intake, referral portals and dashboards — typically in two to eight weeks, at a fraction of enterprise software cost.",
  subhead:
    "Most practices are stuck between hospital software that costs lakhs and takes a year, and generic SaaS that almost fits. The gap between those two is where the actual productivity is, and it is a surprisingly cheap gap to fill.",
  heroBullets: [
    "Two to eight weeks from brief to live, in most cases",
    "Priced for a clinic, not for a hospital procurement cycle",
    "Integrates with what you already run — no rip and replace",
    "Your data stays yours, built to DPDP expectations",
  ],
  primaryCta: { label: "Describe the problem you have", href: "/get-started" },
  secondaryCta: { label: "See MedDeskOS", href: "/platform" },

  keyFacts: [
    { label: "What we build", value: "Booking, reminders, patient CRM, intake, referral portals, dashboards, recall and queue tools" },
    { label: "Who it is for", value: "Individual doctors, clinics, multi-branch groups, hospitals and diagnostic chains" },
    { label: "Typical timeline", value: "2–4 weeks for a single tool; 6–10 weeks for a connected set" },
    { label: "Starting from", value: "₹15,000 one-time for a single tool; a connected set from ₹50,000, plus light hosting" },
    { label: "Approach", value: "Fits around your existing software; replaces nothing that already works" },
    { label: "Data handling", value: "Built to DPDP Act 2023 expectations — consent, retention, access control, breach process" },
  ],

  pains: {
    title: "Why practices end up doing admin work by hand",
    intro:
      "Almost every clinic we audit is running at least three processes on WhatsApp, a spreadsheet and someone's memory. It is not incompetence — it is that nobody sells the tool they actually need.",
    items: [
      {
        problem: "Enterprise hospital systems are priced and scoped for hospitals",
        fix:
          "A full HIS implementation means a long procurement cycle, a large licence, months of configuration and a change management project. That is rational for a 300-bed facility and absurd for a four-doctor clinic that just needs bookings and reminders to work.",
      },
      {
        problem: "Off-the-shelf SaaS fits eighty percent and the last twenty percent is the job",
        fix:
          "Your slot rules, your referral pattern, your billing quirk, your report handover — the parts that are specific to you are exactly the parts generic software cannot do. So the staff work around it, and the workaround becomes the process.",
      },
      {
        problem: "Custom development is assumed to be expensive and slow",
        fix:
          "It is, when someone tries to rebuild an entire hospital system. A narrow tool that does one job well is a different proposition entirely — small surface area, clear acceptance criteria, and no need to reinvent anything that already works.",
      },
      {
        problem: "Nobody owns the join between marketing and operations",
        fix:
          "Your agency reports leads. Your software reports appointments. Nothing connects them, so nobody can say what a patient actually cost. Because we do both sides, we build the join — and it is usually the single most valuable thing we deliver.",
      },
    ],
  },

  offerings: {
    title: "The tools practices ask us for most",
    intro:
      "Each of these is a self-contained build. Take one, or take a set that talks to each other.",
    items: [
      {
        icon: "CalendarCheck",
        title: "Appointment booking system",
        body: "A booking flow that respects real slot rules — per doctor, per procedure, per room — with buffers, holiday handling and a public page patients can use at midnight.",
        href: "/custom-tools/patient-appointment-booking-system",
      },
      {
        icon: "MessageSquare",
        title: "WhatsApp reminders and follow-up",
        body: "Confirmation on booking, reminder the day before and the morning of, one-tap reschedule, and follow-up on enquiries that never booked. The cheapest fix for no-shows there is.",
        href: "/custom-tools/whatsapp-automation-for-clinics",
      },
      {
        icon: "Users",
        title: "Patient CRM and recall",
        body: "One record per patient across visits and channels, with automatic recall for reviews, repeat cycles and follow-up scans — the cheapest patient you will ever book.",
        href: "/custom-tools/patient-crm",
      },
      {
        icon: "ClipboardList",
        title: "Digital intake and consent",
        body: "Forms patients complete before arriving, mapped to your record fields instead of a clipboard and a re-typing job, with consent captured properly.",
      },
      {
        icon: "Share2",
        title: "Referral portal",
        body: "For hospitals and specialists: a way for referring doctors to send a patient in under a minute, get an instant acknowledgement, and receive the outcome back.",
      },
      {
        icon: "LayoutDashboard",
        title: "Operations and marketing dashboard",
        body: "Enquiries, bookings, attendance, no-shows and cost per attended patient in one view, per branch and per department. The join nobody else builds.",
      },
      {
        icon: "AlarmClock",
        title: "Queue and token management",
        body: "Live queue visibility, token display and delay notifications — the difference between a full waiting room and a furious one.",
      },
      {
        icon: "FileText",
        title: "Report delivery and access",
        body: "For diagnostics: secure report delivery to patients and referring doctors, with access control, expiry and an audit trail rather than a WhatsApp forward.",
      },
      {
        icon: "Wallet",
        title: "Billing, package and TPA tracking",
        body: "Package utilisation, outstanding balances and insurance or TPA claim status tracked where your team can actually see it.",
      },
    ],
  },

  process: {
    title: "How a build runs",
    intro:
      "We scope narrow deliberately. A tool that ships in three weeks and gets used beats a platform that ships in nine months and does not.",
    items: [
      {
        duration: "Days 1–3",
        title: "Watch the actual workflow",
        body:
          "We sit with the people doing the work — the front desk, the coordinator, the technician — and map what really happens, including the workarounds. The brief you started with is almost never the problem worth solving.",
      },
      {
        duration: "Week 1",
        title: "Fixed scope and fixed price",
        body:
          "You get a written specification, a fixed price and a delivery date before anything is built. If the scope changes later, we tell you what it costs before we do it.",
      },
      {
        duration: "Weeks 2–6",
        title: "Build with a live preview",
        body:
          "You see a working version from the first week and give feedback against something real rather than a document. Integrations with your existing software are built and tested against actual data.",
      },
      {
        duration: "Launch and after",
        title: "Train, hand over, support",
        body:
          "Staff training, written documentation, and a support window. You own the code and the data. If you want to take it in-house later, nothing stops you.",
      },
    ],
  },

  table: {
    caption: "Enterprise system, generic SaaS, or a custom tool",
    columns: ["", "Enterprise HIS/HMS", "Off-the-shelf SaaS", "Custom tool from Monk Mantra"],
    rows: [
      ["Time to live", "6–18 months", "Days to weeks", "2–8 weeks"],
      ["Typical cost", "Lakhs, plus annual licence", "Low monthly, rising per user", "From ₹15,000 one-time"],
      ["Fits your workflow", "After heavy configuration", "Roughly, until it does not", "Built to it"],
      ["Replaces existing systems", "Usually yes", "Often partially", "No — it fills the gap"],
      ["Who owns the data", "Vendor-controlled export", "Vendor platform", "You"],
      ["Best for", "Large hospitals with an IT function", "Standard needs, small teams", "The specific job nothing else does"],
    ],
  },

  prose: {
    title: "How we keep custom software affordable",
    blocks: [
      {
        heading: "Scope narrow, and refuse to build what already exists",
        paragraphs: [
          "Custom software gets expensive when someone tries to rebuild the world. The cost is not in the code, it is in the surface area — every additional module multiplies the testing, the edge cases and the maintenance for years afterwards.",
          "So we start by deleting. If your practice management software already handles billing competently, we do not touch billing. If your records system works, we integrate with it. What is left is usually a small, sharply defined tool: the booking layer, the reminder engine, the referral intake, the dashboard. Small tools are cheap to build, quick to test and easy to change when your practice changes.",
        ],
        bullets: [
          "One job per tool, with clear acceptance criteria written before development starts",
          "Integrate with existing systems rather than replacing anything that works",
          "Fixed price and fixed date, agreed before the first line of code",
          "Boring, well-supported technology — nothing that needs a specialist to maintain",
        ],
      },
      {
        heading: "Speed comes from the discovery, not from cutting corners",
        paragraphs: [
          "Most software projects overrun because the requirements were wrong, not because the engineering was slow. Three days spent watching a front desk actually work — including every workaround and every WhatsApp message that should have been a system event — prevents the six-week rebuild that comes from building the wrong thing beautifully.",
          "That is why we insist on observing before scoping. The brief a clinic owner writes is a description of the symptom. The thing worth building is usually one layer beneath it.",
        ],
      },
      {
        heading: "Data protection is a build requirement, not a policy page",
        paragraphs: [
          "Patient data in India is governed by the Digital Personal Data Protection Act, 2023, with its Rules notified in November 2025 and obligations phasing in around consent notices, breach reporting and children's data. HIPAA is United States law and does not apply to a practice operating in India — be wary of vendors who quote it as their credential.",
          "Practically, this means the tools we build capture consent explicitly and record it, hold only the data the workflow needs, apply role-based access so the front desk cannot read clinical notes, retain records against a defined policy rather than forever, and log access so a breach can actually be investigated. None of that adds meaningful cost when it is designed in. All of it is expensive to retrofit.",
        ],
      },
      {
        heading: "Why a marketing agency builds software",
        paragraphs: [
          "Because the two problems are the same problem. A practice that generates forty enquiries a week and converts twelve of them does not have a marketing problem, it has a follow-up problem. Telling the client to buy a CRM and wishing them luck is where most agencies stop.",
          "Having engineering in the same team means we can measure the whole path — from the search query to the attended appointment — and fix whichever part is actually broken. Sometimes that is a campaign. Often it is a missed call at seven in the evening, and no amount of ad spend fixes that.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "How much does custom software for a clinic cost in India?",
      answer:
        "A single well-scoped tool — a booking system, a reminder engine, an intake flow — starts from around ₹15,000 as a one-time build, plus modest hosting. A connected set covering booking, reminders, CRM and a dashboard starts from about ₹50,000. Hospital-scale work with multiple integrations goes higher. We quote a fixed price against a written scope before any development begins, so there is no open-ended meter running.",
    },
    {
      question: "How long does it take to build?",
      answer:
        "Most single tools are live in two to four weeks from the point the scope is signed off, including a few days of observing the actual workflow first. A connected set of tools generally takes six to ten weeks. Integrations with an existing practice management or records system add time depending on whether that system has a usable API — that is the main variable, and we establish it during scoping rather than discovering it halfway through.",
    },
    {
      question: "Will it work with the software we already use?",
      answer:
        "That is the intent. We do not try to replace systems that work; we fill the gap around them. Where your existing software has an API, we integrate directly. Where it does not, we look at scheduled exports, webhooks or a lightweight bridge. If a system is genuinely closed with no route in, we will say so during scoping rather than promising an integration that turns into a synchronisation problem later.",
    },
    {
      question: "Who owns the code and the patient data?",
      answer:
        "You do. The code is handed over, documented, and yours to take elsewhere if you ever want a different partner. The data sits in infrastructure you control or that is contracted to you, not pooled into a platform we own. This matters more than most practices realise — it is the difference between owning a tool and renting one that can be repriced or discontinued.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. Every build includes staff training, written documentation and a support window after launch for fixes and adjustments. Beyond that, ongoing support and enhancements are available on a light monthly arrangement, but it is optional — a well-scoped tool built on stable technology should not need constant intervention, and we would rather it did not.",
    },
    {
      question: "Can you build a tool for a single doctor rather than a clinic?",
      answer:
        "Yes, and these are often the most satisfying builds because the scope is clean. A consultant typically needs three things: a booking path patients can use without calling, reminders that reduce no-shows, and a simple record of who was referred by whom. That set is inexpensive, quick to build and removes a genuine daily irritation.",
    },
  ],

  related: {
    title: "Explore by practice type",
    items: [
      { title: "Tools for individual doctors", href: "/custom-tools/for-doctors", body: "Booking, reminders and referral tracking for a single practice." },
      { title: "Tools for clinics", href: "/custom-tools/for-clinics", body: "Front desk, queue, CRM and multi-branch dashboards." },
      { title: "Tools for hospitals", href: "/custom-tools/for-hospitals", body: "Referral portals, department dashboards and enquiry routing." },
      { title: "Appointment booking system", href: "/custom-tools/patient-appointment-booking-system", body: "The most requested build, in detail." },
      { title: "WhatsApp automation", href: "/custom-tools/whatsapp-automation-for-clinics", body: "Confirmations, reminders and follow-up that cut no-shows." },
      { title: "Healthcare marketing", href: "/healthcare-marketing", body: "The demand side — search, ads, local and reputation." },
    ],
  },

  cta: {
    title: "Tell us the thing your staff does by hand every day",
    body: "Describe the workflow that keeps breaking. We will tell you honestly whether it needs custom software, an existing product, or just a change in process — and what it would cost either way.",
    primary: { label: "Describe the problem", href: "/get-started" },
    secondary: { label: "Book a 30-minute call", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Custom Healthcare Software Development",
    serviceType: "Custom Software Development for Healthcare",
    audienceType: "Doctors, clinics, hospitals and diagnostic centres",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
