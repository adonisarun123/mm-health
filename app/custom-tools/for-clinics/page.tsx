import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Custom Clinic Software",
  description:
    "Custom software for clinics in India: booking that fits your slot rules, queue and token management, patient CRM with recall",
  keywords: [
    "clinic management software India",
    "custom clinic software",
    "clinic appointment software",
    "patient CRM for clinics",
    "queue management system clinic",
    "multi branch clinic software",
  ],
  alternates: { canonical: "/custom-tools/for-clinics" },
  openGraph: {
    title: "Custom Clinic Software — Booking, Queue, CRM & Branch Dashboards",
    description:
      "Fill the gap between enterprise HMS and generic SaaS. Booking, queue, CRM, reminders and per-branch reporting built to your workflow.",
    url: "/custom-tools/for-clinics",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/custom-tools/for-clinics",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Custom Tools", path: "/custom-tools" },
    { name: "For Clinics", path: "/custom-tools/for-clinics" },
  ],
  eyebrow: "Tools for clinics",
  h1: "Custom software for clinics that actually fits the front desk",
  answer:
    "Clinic software fails at the front desk, not in the feature list. The gaps that cost money are booking that ignores real slot rules, no reminder system, a waiting room with no queue visibility, and no single view across branches. Monk Mantra builds those pieces to fit your workflow, in weeks rather than quarters.",
  subhead:
    "We are not trying to sell you a clinic management system. We are trying to remove the four things your receptionist currently does on a notepad.",
  heroBullets: [
    "Built around your slot rules, not a vendor's defaults",
    "Works alongside the software you already run",
    "Per-branch reporting that never averages away a problem",
    "Fixed price, fixed date, code and data yours",
  ],
  primaryCta: { label: "Get a fixed-price scope", href: "/get-started" },
  secondaryCta: { label: "See all custom tools", href: "/custom-tools" },

  keyFacts: [
    { label: "Built for", value: "Single-location clinics and multi-branch groups — dental, derma, physio, IVF, eye, polyclinics" },
    { label: "Most requested", value: "Booking, WhatsApp reminders, queue and token, patient CRM with recall, branch dashboard" },
    { label: "Typical timeline", value: "3–6 weeks for a connected set" },
    { label: "Starting from", value: "₹15,000 one-time for a single tool; a connected clinic set from ₹50,000" },
    { label: "Integration", value: "Sits alongside your existing records or billing software rather than replacing it" },
    { label: "Data handling", value: "Consent capture, role-based access, defined retention, access logging — DPDP-aligned" },
  ],

  pains: {
    title: "The four leaks every clinic has",
    intro:
      "We have audited enough clinics to be confident these repeat. Each is small on its own and expensive in aggregate.",
    items: [
      {
        problem: "Booking software that does not understand your rules",
        fix:
          "Different doctors, different consultation lengths, procedures that need a room, a fifteen-minute buffer after a certain treatment, one doctor who only takes new patients on Tuesdays. Generic software forces you to simplify reality; the front desk then overrides it manually and the calendar stops being trustworthy.",
      },
      {
        problem: "Between twenty and forty percent of booked patients do not arrive",
        fix:
          "No-shows are usually the single largest recoverable loss in a clinic, and the largest share of them are forgetting rather than deciding. Confirmation, two reminders, one-tap reschedule and an automatic waitlist offer for freed slots addresses most of it.",
      },
      {
        problem: "The waiting room has no information and the front desk absorbs the anger",
        fix:
          "Patients tolerate delay; they do not tolerate not knowing. Live queue position, a token display and an automatic message when the doctor is running late changes the experience without changing the schedule — and it shows up in your reviews.",
      },
      {
        problem: "Nobody can say what a patient cost or which branch is struggling",
        fix:
          "Marketing reports enquiries, the clinic software reports appointments, and the two never meet. We build the join: enquiry to booking to attendance to cost per attended patient, per branch and per service, so a weak location cannot hide inside a group average.",
      },
    ],
  },

  offerings: {
    title: "What clinics ask us to build",
    items: [
      {
        icon: "CalendarCheck",
        title: "Booking engine with real rules",
        body: "Per doctor, per service, per room, with buffers, leave, holiday calendars, deposit capture where you need it, and a public page that works on a phone.",
        href: "/custom-tools/patient-appointment-booking-system",
      },
      {
        icon: "MessageSquare",
        title: "WhatsApp reminders and recovery",
        body: "Confirmation, day-before and morning-of reminders, reschedule links, and automated follow-up on enquiries that never converted.",
        href: "/custom-tools/whatsapp-automation-for-clinics",
      },
      {
        icon: "AlarmClock",
        title: "Queue and token management",
        body: "Live position for patients, a waiting-room display, and automatic delay notifications so people can step out instead of stewing.",
      },
      {
        icon: "Users",
        title: "Patient CRM and recall",
        body: "One record across visits and branches, with recall campaigns for six-month reviews, repeat cycles and lapsed patients.",
        href: "/custom-tools/patient-crm",
      },
      {
        icon: "ClipboardList",
        title: "Digital intake and consent",
        body: "Forms completed before arrival, mapped to your fields, with consent recorded properly rather than a signature on a photocopy.",
      },
      {
        icon: "PhoneCall",
        title: "Missed-call and enquiry routing",
        body: "Every unanswered call triggers a message with a booking link, and every enquiry lands in one queue with an owner and a response clock.",
      },
      {
        icon: "LayoutDashboard",
        title: "Per-branch dashboard",
        body: "Enquiries, bookings, attendance, no-show rate, revenue per session and cost per attended patient — by branch, by doctor, by service.",
      },
      {
        icon: "Wallet",
        title: "Package and balance tracking",
        body: "For clinics selling treatment packages: sessions used, sessions remaining, outstanding balances and expiry, visible at the desk.",
      },
      {
        icon: "Star",
        title: "Review request automation",
        body: "A uniform post-visit invitation to every patient, timed to the visit rather than a weekly batch, with no filtering or gating.",
      },
    ],
  },

  process: {
    title: "How a clinic build runs",
    items: [
      {
        duration: "Days 1–3",
        title: "Sit at the front desk",
        body:
          "We observe a normal day, including the busy hour. Every workaround the team has invented is a requirement nobody wrote down, and those are the ones that matter.",
      },
      {
        duration: "Week 1",
        title: "Scope, price and date, in writing",
        body:
          "A specification you can read, a fixed price, and a delivery date. We will also tell you which parts of your wish list are not worth building.",
      },
      {
        duration: "Weeks 2–5",
        title: "Build against live feedback",
        body:
          "A working preview from week one. Your receptionist tests it before your doctors ever see it, because if it does not survive the front desk it will not survive at all.",
      },
      {
        duration: "Launch and settle",
        title: "Train, run parallel, hand over",
        body:
          "Staff training, a short parallel run alongside the old process, then cutover. Documentation and a support window follow. Code and data are yours.",
      },
    ],
  },

  table: {
    caption: "The economics of the four common clinic tools",
    columns: ["Tool", "What it changes", "Indicative one-time cost", "Where the return comes from"],
    rows: [
      [
        "Booking engine",
        "Captures bookings outside working hours",
        "From ₹15,000",
        "Enquiries that previously hit a busy line and went elsewhere",
      ],
      [
        "Reminder and reschedule system",
        "Reduces forgotten appointments",
        "From ₹9,000",
        "Recovered slots — usually the fastest payback of the four",
      ],
      [
        "Queue and token display",
        "Removes waiting-room uncertainty",
        "From ₹18,000",
        "Review ratings and front-desk time spent managing complaints",
      ],
      [
        "CRM with recall",
        "Brings back patients you already paid to acquire",
        "From ₹25,000",
        "Repeat visits and reviews that would never have been asked for",
      ],
    ],
  },

  prose: {
    title: "What we have learned building for clinics",
    blocks: [
      {
        heading: "The receptionist is the real user",
        paragraphs: [
          "Clinic software is usually bought by the owner, demonstrated to the doctors and used by the front desk. That is why so much of it is abandoned. The person who will touch the system four hundred times a day is rarely consulted, and their workarounds are treated as bad habits rather than as unmet requirements.",
          "We build for that person first. If the busiest hour of the day is harder with the new tool than with the notepad, the tool has failed regardless of how good the reporting is.",
        ],
      },
      {
        heading: "Recall is the cheapest patient in the building",
        paragraphs: [
          "Almost every clinic has a list of patients who came once, were satisfied, were due for a review six months later and were never contacted. Acquiring a new patient costs marketing spend. Contacting one you already treated costs a message.",
          "A recall system is unglamorous and it is consistently among the highest-return things we build. It needs a clean patient record, a rule for each treatment type, and a channel patients actually read — which in India means WhatsApp far more than email.",
        ],
        bullets: [
          "Recall rules per treatment: six-month dental review, annual eye check, physio follow-up cycle",
          "Lapsed-patient reactivation for anyone who has not returned within an expected window",
          "Post-treatment check-ins that also generate review requests naturally",
          "Consent for these messages captured up front, so the channel stays usable",
        ],
      },
      {
        heading: "Reporting has to survive a group",
        paragraphs: [
          "The moment a clinic has more than two branches, aggregate reporting starts hiding problems. One strong location will carry a group average for years while another quietly burns marketing spend and loses patients at the door.",
          "So every number we build is available per branch, per doctor and per service, and the dashboard defaults to the disaggregated view. Averages are available if you want them, but they are never the first thing you see.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Do we have to replace our existing clinic management software?",
      answer:
        "No, and we would usually advise against it. If your current system handles records and billing acceptably, replacing it is a large, risky project with limited upside. What is typically missing is the layer around it — online booking that respects real slot rules, reminders, queue visibility and reporting. We build that layer and integrate with what you have wherever an API or export exists.",
    },
    {
      question: "How much does custom clinic software cost?",
      answer:
        "A single tool such as a booking engine or reminder system starts from around ₹15,000 as a one-time build. A connected set covering booking, reminders, CRM and a dashboard starts from about ₹50,000, with hosting costs that are usually a few thousand rupees a month. Multi-branch groups sit at the higher end because of the reporting and profile complexity, not because the core is different.",
    },
    {
      question: "How quickly can it be live?",
      answer:
        "A single tool is usually live in two to four weeks from signed scope. A connected set for a clinic typically takes three to six weeks. The main variable is integration: if your existing records system has a usable API, it is quick; if it is closed, we scope an alternative during the first week rather than discovering the problem later. We commit to a date because we scope properly before starting.",
    },
    {
      question: "Will this reduce no-shows, and by how much?",
      answer:
        "Reminder systems reliably reduce no-shows, because a large share of missed appointments are simple forgetting rather than deliberate cancellation. We will not quote you a percentage, because the honest answer depends on your baseline, your patient mix and how disciplined the follow-up is. What we will do is measure your current no-show rate before launch so you can see the actual change rather than take a number on faith.",
    },
    {
      question: "Is patient data safe in a custom-built system?",
      answer:
        "It is as safe as it is designed to be, which is why we treat data protection as a build requirement. Under the Digital Personal Data Protection Act, 2023 and its Rules notified in November 2025, you are responsible for consent, retention, access control and breach handling. Our builds capture consent explicitly, restrict access by role so the front desk cannot read clinical notes, apply a defined retention policy and log access. The data sits in infrastructure contracted to you, not pooled on a platform we own.",
    },
    {
      question: "Can it handle several branches with different doctors and timings?",
      answer:
        "Yes. Each branch carries its own doctors, sessions, services, rooms and holiday calendar, and the patient booking flow only ever shows what genuinely exists at the location they choose. Reporting is disaggregated by default so a weak branch cannot hide inside a group average, and a patient record follows the person across branches rather than fragmenting.",
    },
  ],

  related: {
    title: "Related",
    items: [
      { title: "Appointment booking system", href: "/custom-tools/patient-appointment-booking-system", body: "The booking engine in detail." },
      { title: "WhatsApp automation", href: "/custom-tools/whatsapp-automation-for-clinics", body: "Reminders, confirmations and follow-up." },
      { title: "Patient CRM and recall", href: "/custom-tools/patient-crm", body: "One record, and the recall engine on top of it." },
      { title: "Marketing for clinics", href: "/healthcare-marketing/clinics", body: "The demand side — local search, ads and reputation." },
      { title: "Tools for hospitals", href: "/custom-tools/for-hospitals", body: "Referral portals and department-level reporting." },
      { title: "All custom tools", href: "/custom-tools", body: "The full range of builds." },
    ],
  },

  cta: {
    title: "What does your front desk do on paper?",
    body: "Tell us the three things your receptionist tracks manually. We will scope them, price them, and tell you if any of them are better solved by an existing product.",
    primary: { label: "Get a fixed-price scope", href: "/get-started" },
    secondary: { label: "Book a 30-minute call", href: "/contact" },
  },

  schema: {
    type: "SoftwareApplication",
    serviceName: "Custom Clinic Software",
    applicationCategory: "HealthApplication",
    audienceType: "Clinics and multi-branch clinic groups",
    offersFrom: "150000",
    offersCurrency: "INR",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
