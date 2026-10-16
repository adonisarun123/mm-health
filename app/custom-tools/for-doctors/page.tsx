import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Custom Tools for Doctors",
  description:
    "Affordable custom software for solo doctors and consultants: online booking that respects your slot rules, WhatsApp reminders",
  keywords: [
    "software for doctors",
    "appointment booking software for doctors India",
    "practice management software for solo doctor",
    "custom software for consultants",
    "doctor productivity tools",
  ],
  alternates: { canonical: "/custom-tools/for-doctors" },
  openGraph: {
    title: "Custom Tools for Individual Doctors",
    description:
      "Booking, reminders, intake and referral tracking built around a single consultant's practice — in weeks, at clinic prices.",
    url: "/custom-tools/for-doctors",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/custom-tools/for-doctors",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Custom Tools", path: "/custom-tools" },
    { name: "For Doctors", path: "/custom-tools/for-doctors" },
  ],
  eyebrow: "Tools for individual doctors",
  h1: "Custom tools for a single doctor's practice",
  answer:
    "A solo consultant needs three things software should handle: patients booking without calling, appointments confirmed and reminded so fewer are missed, and a record of who referred whom. Monk Mantra builds exactly that set for individual doctors — usually live in two to four weeks, for a fraction of practice management licence costs.",
  subhead:
    "You are not running a hospital. You should not be paying hospital software prices, and you should not be spending your evenings chasing confirmations on WhatsApp.",
  heroBullets: [
    "Live in two to four weeks",
    "One-time build cost, no per-user licence creep",
    "Works whether you consult at one hospital or five",
    "Nothing for you to administer day to day",
  ],
  primaryCta: { label: "Get a fixed-price scope", href: "/get-started" },
  secondaryCta: { label: "See all custom tools", href: "/custom-tools" },

  keyFacts: [
    { label: "Built for", value: "Consultants, specialists, surgeons and visiting doctors" },
    { label: "Core set", value: "Booking page, WhatsApp confirmations and reminders, digital intake, referral log" },
    { label: "Typical timeline", value: "2–4 weeks from signed scope to live" },
    { label: "Starting from", value: "₹15,000 one-time for a single tool; the full set from ₹35,000, plus light hosting" },
    { label: "Your daily effort", value: "None — the point is to remove work, not add a system to maintain" },
    { label: "Data", value: "Yours, held to DPDP Act 2023 expectations with explicit consent capture" },
  ],

  pains: {
    title: "What actually costs a consultant time and money",
    items: [
      {
        problem: "Bookings run through a phone that is busy when you are consulting",
        fix:
          "The patient who cannot get through calls the next name on their list. A booking page that reflects your real availability — per location, per session, with the buffers you actually need — captures those people at eleven at night without anyone answering a phone.",
      },
      {
        problem: "No-shows in a slot-limited practice are pure loss",
        fix:
          "A missed consultation cannot be resold later that day. Confirmation at booking, a reminder the evening before and one on the morning of, plus one-tap rescheduling, addresses the largest and cheapest-to-fix category of no-show: the patient who simply forgot.",
      },
      {
        problem: "The same history gets written down three times",
        fix:
          "Digital intake sent when the appointment is confirmed means the patient fills in history, medications and allergies before arriving, and it lands in a structured form rather than on a clipboard someone re-types.",
      },
      {
        problem: "You cannot say which referrers actually send patients",
        fix:
          "Most consultants run on referrals and track none of it. A simple referral log — who sent whom, when, what came of it — tells you where to spend your limited relationship-building time, and lets you close the loop back to the referring doctor.",
      },
    ],
  },

  offerings: {
    title: "What a doctor's build usually includes",
    items: [
      {
        icon: "CalendarCheck",
        title: "Booking page",
        body: "Your locations, sessions, consultation types and durations, with buffers, leave blocks and a cap on how far ahead patients can book.",
      },
      {
        icon: "MessageSquare",
        title: "WhatsApp confirmations and reminders",
        body: "Confirmation immediately, reminder the day before and the morning of, and a reschedule link that does not require a phone call.",
      },
      {
        icon: "ClipboardList",
        title: "Pre-visit intake",
        body: "History, medications, allergies and reason for visit collected before arrival, with consent recorded, delivered to you in a readable summary.",
      },
      {
        icon: "Share2",
        title: "Referral log",
        body: "Capture the referring doctor at booking, see the pattern over time, and send a structured outcome summary back without retyping it.",
      },
      {
        icon: "Users",
        title: "Patient list and recall",
        body: "One record per patient across visits, with automatic recall for reviews and follow-up scans that would otherwise be forgotten.",
      },
      {
        icon: "PhoneCall",
        title: "Missed-call recovery",
        body: "Any call you could not take triggers an automatic message with your booking link, so a busy afternoon does not become a lost week.",
      },
      {
        icon: "FileText",
        title: "Prescription and report handover",
        body: "Secure delivery of prescriptions and reports with an access log, instead of forwarding files through a personal chat.",
      },
      {
        icon: "LineChart",
        title: "A single simple view",
        body: "Bookings, attendance, no-shows and referral sources for the month. One page, no dashboard training required.",
      },
    ],
  },

  process: {
    title: "How it gets built",
    items: [
      {
        duration: "Days 1–2",
        title: "One conversation about how you actually work",
        body:
          "Where you consult, on which days, how long each consultation type takes, what your assistant currently does by hand, and what you refuse to be interrupted for.",
      },
      {
        duration: "Day 3",
        title: "Fixed scope, fixed price, fixed date",
        body: "Written specification and a firm quote before anything is built. No open-ended hourly billing.",
      },
      {
        duration: "Weeks 1–3",
        title: "Build with a working preview",
        body: "You see it running from the first week and react to something real. Adjustments happen while they are cheap.",
      },
      {
        duration: "Launch",
        title: "Go live and hand over",
        body:
          "Your assistant is trained, documentation is written, and a support window follows. You own the code and the data.",
      },
    ],
  },

  table: {
    caption: "What a solo consultant typically needs, and what it costs",
    columns: ["Tool", "Problem it removes", "Indicative one-time cost", "Build time"],
    rows: [
      ["Booking page", "Phone unavailable during consulting hours", "From ₹15,000", "1–2 weeks"],
      ["WhatsApp reminders", "Forgotten appointments in a slot-limited day", "From ₹9,000", "1 week"],
      ["Digital intake and consent", "History written and re-typed repeatedly", "From ₹9,000", "1–2 weeks"],
      ["Referral log and outcome loop", "No visibility on who sends patients", "From ₹12,000", "1–2 weeks"],
      ["The connected set", "All of the above, sharing one patient record", "From ₹35,000", "3–4 weeks"],
    ],
  },

  prose: {
    title: "Why this is cheaper than you expect",
    blocks: [
      {
        heading: "A single practice has a small surface area",
        paragraphs: [
          "The reason healthcare software is expensive is that most of it is built to serve every practice in the country. Every configuration option, every role, every billing model and every regulatory variant has to exist and be tested. You pay for all of it and use a fraction.",
          "A tool built for one consultant needs one set of slot rules, one referral pattern and one workflow. That is a small, well-understood build, and small builds are inexpensive. The saving is not a discount, it is an absence of complexity you were never going to use.",
        ],
      },
      {
        heading: "It should require nothing from you after launch",
        paragraphs: [
          "The test of a good tool for a doctor is whether you can ignore it. If it needs you to log in daily, mark things complete or maintain a calendar in two places, it will be abandoned within a quarter and you will be back to WhatsApp.",
          "So the default is automation with a human override: reminders send themselves, intake arrives summarised, recall fires on schedule, and the only thing that reaches you is something that genuinely needs a decision.",
        ],
      },
      {
        heading: "Consent and confidentiality, handled properly",
        paragraphs: [
          "Collecting patient history through a form means you are processing personal and health data, which falls under the Digital Personal Data Protection Act, 2023, whose Rules were notified in November 2025. That is not a reason to avoid digital intake — it is a reason to build it correctly the first time.",
          "In practice: explicit consent captured and recorded at the point of collection, only the fields the consultation actually needs, access limited to you and anyone you designate, a defined retention period rather than indefinite storage, and an access log. Designed in, this costs almost nothing. Retrofitted, it is a project.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "I consult at three different hospitals. Can one system handle that?",
      answer:
        "Yes, and it is a common requirement. Each location gets its own sessions, durations and consultation fees, and the booking page shows the patient only the locations and slots that genuinely exist. Reminders include the correct address for that appointment. Your single view shows all three together, which is usually the first time a visiting consultant can see their whole week in one place.",
    },
    {
      question: "Will this replace my existing practice management software?",
      answer:
        "Not unless you want it to. If you already run something that handles records or billing adequately, we build around it and integrate where an API exists. Most consultants who come to us are not unhappy with their records system — they are unhappy that booking, reminders and intake sit outside it and are done manually. That gap is what we fill.",
    },
    {
      question: "What happens if I want to change something in six months?",
      answer:
        "You own the code, so you have real options. Small changes are usually quick and inexpensive, and we quote them individually rather than requiring a retainer. If you would rather have someone else maintain it, or bring it in-house, the codebase is documented and portable. Nothing is locked to us.",
    },
    {
      question: "Do patients actually use online booking, or do they still call?",
      answer:
        "Both, and the split depends heavily on your patient demographic. What consistently changes is the shape of the demand: bookings appear at night and on Sundays, when nobody was ever answering the phone. Even practices where most patients still call typically find that the booking page captures a meaningful volume that was previously lost entirely, and it reduces the interruption load on whoever answers.",
    },
    {
      question: "Is WhatsApp messaging to patients allowed?",
      answer:
        "Yes, for transactional messages the patient has consented to receive — appointment confirmations, reminders and reschedules — sent through the official WhatsApp Business Platform with approved templates. What is not appropriate is using that same channel to push promotional offers or treatment advertising, which raises both platform policy and medical advertising issues. We build the consent capture and the template set to keep the distinction clean.",
    },
    {
      question: "How do I know the cost will not escalate mid-project?",
      answer:
        "Because the price is fixed against a written scope before development starts. If you ask for something outside that scope later, we tell you what it costs and you decide before we build it. The reason we can commit to a fixed price is that we spend the first days understanding the workflow properly — most overruns come from wrong requirements, not slow engineering.",
    },
  ],

  related: {
    title: "Related",
    items: [
      { title: "Appointment booking system", href: "/custom-tools/patient-appointment-booking-system", body: "The booking layer in detail." },
      { title: "WhatsApp automation", href: "/custom-tools/whatsapp-automation-for-clinics", body: "Confirmations, reminders and follow-up." },
      { title: "Tools for clinics", href: "/custom-tools/for-clinics", body: "When you have a front desk and multiple providers." },
      { title: "Marketing for doctors", href: "/healthcare-marketing/doctors", body: "The demand side — visibility, reputation and referrals." },
      { title: "All custom tools", href: "/custom-tools", body: "The full range of builds." },
      { title: "Patient acquisition", href: "/healthcare-marketing/patient-acquisition", body: "Measuring search through to attended appointment." },
    ],
  },

  cta: {
    title: "Tell us what your assistant does by hand",
    body: "Describe a normal week. We will come back with a written scope, a fixed price and a date — or an honest recommendation that you buy something off the shelf instead.",
    primary: { label: "Get a fixed-price scope", href: "/get-started" },
    secondary: { label: "Book a 30-minute call", href: "/contact" },
  },

  schema: {
    type: "SoftwareApplication",
    serviceName: "Custom Practice Tools for Individual Doctors",
    applicationCategory: "HealthApplication",
    audienceType: "Individual doctors and consultants",
    offersFrom: "60000",
    offersCurrency: "INR",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
