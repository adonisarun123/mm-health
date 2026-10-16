import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Patient Appointment Booking System",
  description:
    "A custom online appointment booking system for doctors, clinics and hospitals in India. Real slot rules, multi-doctor and multi-branch",
  keywords: [
    "patient appointment booking system",
    "online appointment booking for clinics",
    "doctor appointment software India",
    "clinic booking system",
    "custom appointment scheduling software",
  ],
  alternates: { canonical: "/custom-tools/patient-appointment-booking-system" },
  openGraph: {
    title: "Patient Appointment Booking System — Built to Your Slot Rules",
    description:
      "Booking that respects how your practice actually schedules: per doctor, per service, per room, with reminders and waitlist.",
    url: "/custom-tools/patient-appointment-booking-system",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/custom-tools/patient-appointment-booking-system",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Custom Tools", path: "/custom-tools" },
    { name: "Appointment Booking System", path: "/custom-tools/patient-appointment-booking-system" },
  ],
  eyebrow: "Most requested build",
  h1: "A patient appointment booking system built to your slot rules",
  answer:
    "A patient appointment booking system lets people book a real, available slot online without calling. It works only if it understands how your practice actually schedules — per doctor, per service, per room, with buffers and leave. Monk Mantra builds that to your rules, live in two to four weeks.",
  subhead:
    "Generic booking widgets fail for one reason: they force you to describe your schedule in their model. Then the front desk overrides it, and the calendar stops being true.",
  heroBullets: [
    "Rules per doctor, service, room and location",
    "WhatsApp confirmation, reminders and one-tap reschedule",
    "Waitlist that automatically fills cancelled slots",
    "Feeds your existing calendar or records system",
  ],
  primaryCta: { label: "Get a fixed-price scope", href: "/get-started" },
  secondaryCta: { label: "See all custom tools", href: "/custom-tools" },

  keyFacts: [
    { label: "What it is", value: "A public booking page plus an internal schedule that reflects your real availability" },
    { label: "Built for", value: "Solo consultants, clinics, multi-branch groups and hospital consultant panels" },
    { label: "Timeline", value: "2–4 weeks from signed scope to live" },
    { label: "Starting from", value: "₹15,000 one-time, rising with rule complexity and integrations" },
    { label: "Channels", value: "Website, Google Business Profile booking link, WhatsApp, ads landing pages" },
    { label: "Handles", value: "Buffers, leave, holidays, deposits, waitlist, cancellation windows, multi-location" },
  ],

  pains: {
    title: "Why most booking systems get switched off within a quarter",
    items: [
      {
        problem: "The system does not understand your schedule",
        fix:
          "Consultations are twenty minutes but a first visit is forty. A particular procedure needs the treatment room and a fifteen-minute clean-down. One doctor takes new patients only on Tuesdays. If the booking tool cannot express that, the front desk starts blocking slots manually and the online calendar becomes fiction.",
      },
      {
        problem: "Double bookings destroy trust in a single week",
        fix:
          "The moment a patient arrives for a slot that was also given to someone else, the staff stop trusting the system and revert to the register. Availability has to be computed from a single source of truth, with proper locking, not synchronised between two calendars on a timer.",
      },
      {
        problem: "Booking without reminders just relocates the no-show",
        fix:
          "Online booking makes it easier to book and no easier to remember. Without confirmation, reminders and frictionless rescheduling, an accessible booking page can increase your no-show rate rather than your attendance.",
      },
      {
        problem: "Cancellations leave holes nobody fills",
        fix:
          "A cancellation at 9am for a 2pm slot is recoverable if there is a waitlist and an automatic offer. Without one, it is simply a lost session, and in a slot-limited practice that is the most expensive kind of empty.",
      },
    ],
  },

  offerings: {
    title: "What the booking system does",
    items: [
      {
        icon: "Settings2",
        title: "Real availability rules",
        body: "Per doctor, per service, per room, per location. Buffers, leave, holidays, session caps, lead time and how far ahead people can book.",
      },
      {
        icon: "Smartphone",
        title: "A booking page that works on a phone",
        body: "Three taps to a confirmed slot. No account creation, no app download, no form that resets when the keyboard opens.",
      },
      {
        icon: "MessageSquare",
        title: "Confirmation and reminders",
        body: "WhatsApp confirmation on booking, reminder the day before and the morning of, with the correct address and preparation instructions for that appointment type.",
      },
      {
        icon: "Send",
        title: "One-tap reschedule and cancel",
        body: "A link that lets the patient move themselves within your rules, so a change does not require a phone call your desk cannot take.",
      },
      {
        icon: "AlarmClock",
        title: "Waitlist and automatic backfill",
        body: "When a slot frees, the waitlist is offered it in order, automatically, before it becomes an empty session.",
      },
      {
        icon: "CreditCard",
        title: "Deposits where you need them",
        body: "Optional booking deposit or full prepayment for the appointment types where no-shows are most costly, with refund rules you define.",
      },
      {
        icon: "ClipboardList",
        title: "Intake attached to the booking",
        body: "History and consent collected between booking and arrival, arriving as a structured summary rather than a clipboard.",
      },
      {
        icon: "Database",
        title: "Integration with what you run",
        body: "Pushes into your existing calendar or records system where an API exists, so nobody maintains two schedules.",
      },
      {
        icon: "LineChart",
        title: "Booking analytics",
        body: "Where bookings come from, when they happen, which slots go unfilled, and your no-show rate by doctor and service.",
      },
    ],
  },

  process: {
    title: "From scheduling rules to live booking",
    items: [
      {
        duration: "Days 1–2",
        title: "Write down the rules",
        body:
          "We extract every scheduling rule that currently lives in someone's head — including the exceptions, which are always where generic tools break.",
      },
      {
        duration: "Day 3",
        title: "Fixed scope and price",
        body: "A written specification of the rules, the channels and the integrations, with a fixed price and a delivery date.",
      },
      {
        duration: "Weeks 1–3",
        title: "Build and test against a real week",
        body:
          "We test the rule engine against an actual week of your schedule, including the awkward days, before anyone books through it.",
      },
      {
        duration: "Launch",
        title: "Parallel run, then cut over",
        body:
          "A short parallel period alongside the existing process, then full cutover with staff training, documentation and support.",
      },
    ],
  },

  table: {
    caption: "What the booking system needs to handle, by practice type",
    columns: ["Practice type", "Critical rules", "Usual extras", "Indicative cost"],
    rows: [
      [
        "Solo consultant",
        "Multiple hospital locations, session-based availability, first visit versus follow-up duration",
        "Referral capture at booking",
        "From ₹15,000",
      ],
      [
        "Single clinic",
        "Multiple doctors, service durations, room dependency, buffers",
        "Waitlist, deposits, intake forms",
        "From ₹20,000",
      ],
      [
        "Multi-branch group",
        "Per-branch calendars, doctors who rotate across branches, per-branch holidays",
        "Branch-level reporting, per-branch booking links",
        "From ₹30,000",
      ],
      [
        "Diagnostic centre",
        "Test durations, fasting and preparation rules, home collection windows",
        "Preparation instructions in reminders, report delivery",
        "From ₹22,000",
      ],
      [
        "Hospital consultant panel",
        "Many consultants, department structure, integration with the HIS scheduler",
        "Enquiry routing, department reporting",
        "From ₹60,000",
      ],
    ],
  },

  prose: {
    title: "Getting booking right",
    blocks: [
      {
        heading: "Availability must be computed, not synchronised",
        paragraphs: [
          "The most common cause of double bookings is an architecture where two calendars are kept in step by periodic synchronisation. Between one sync and the next there is a window in which the same slot can be given away twice, and that window will eventually be hit on your busiest day.",
          "The fix is structural: one authoritative store of appointments, with availability derived from it at the moment of request and the slot locked during checkout. It is a boring engineering decision that determines whether your staff trust the system after month one.",
        ],
      },
      {
        heading: "The booking page is the highest-value page you have",
        paragraphs: [
          "It sits at the end of every channel you pay for. Search, ads, your Google Business Profile, the link in your Instagram bio — all of it terminates here. A booking flow that loses a third of the people who reach it silently taxes every rupee of marketing spend upstream.",
          "So it gets treated as a conversion surface, not an admin screen: minimum fields, no forced account creation, availability visible before any personal details are requested, and a confirmation that arrives on a channel the patient actually reads.",
        ],
        bullets: [
          "Show real availability before asking for a phone number",
          "Never require an account, a password or an app",
          "Confirm on WhatsApp, because email confirmation goes unread",
          "Make rescheduling one tap — the alternative is a no-show, not a phone call",
        ],
      },
      {
        heading: "Deposits work, but only where they are proportionate",
        paragraphs: [
          "For high-value or long appointments — an aesthetic procedure, a ninety-minute assessment, a specialist consultation with a long waiting list — a small booking deposit meaningfully changes attendance behaviour and is generally accepted by patients.",
          "For a routine consultation it introduces friction that costs more bookings than it saves sessions. We usually recommend applying deposits selectively by appointment type rather than across the board, and measuring the effect on booking volume rather than assuming it.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "How is this different from a booking plugin or a generic scheduling tool?",
      answer:
        "Generic tools model a simple resource with a fixed duration. Healthcare scheduling is not that: durations vary by service and by whether it is a first visit, some appointments need a room as well as a person, buffers differ by procedure, doctors rotate across locations, and leave is irregular. When a tool cannot express those rules, the front desk works around it and the online calendar stops matching reality. A custom system encodes your rules directly, so the calendar stays trustworthy.",
    },
    {
      question: "Can it work alongside our existing practice management software?",
      answer:
        "Yes, and that is usually the intent. Where your existing system exposes an API, confirmed appointments are pushed into it so your team continues working in one place. Where it does not, we can operate the booking layer as the source of truth for online bookings with a scheduled export, or provide a simple internal view. We settle which approach applies during scoping rather than after.",
    },
    {
      question: "Will online booking actually reduce our phone load?",
      answer:
        "It reduces a specific part of it — the routine new booking, which is also the most interruptible. What it consistently does is capture demand outside working hours, when nobody was answering the phone at all. Some patient demographics continue to prefer calling, and that is fine; the point is not to eliminate the phone but to stop losing the patient who was searching at eleven at night.",
    },
    {
      question: "How do you prevent double bookings?",
      answer:
        "By computing availability from a single authoritative record at the moment of the request, and locking the slot while the patient completes booking. Systems that keep two calendars in step by periodic synchronisation always leave a window where the same slot can be issued twice. This is an architectural decision made at the start, not a setting.",
    },
    {
      question: "Can patients pay or leave a deposit when booking?",
      answer:
        "Yes, through standard Indian payment gateways, with rules you define per appointment type. We generally recommend applying deposits selectively — to long, high-value or historically high-no-show appointment types — rather than universally, because a deposit on a routine consultation usually costs more bookings than it recovers sessions. The system supports either approach, and reports the effect so you can decide on evidence.",
    },
    {
      question: "What happens to bookings if the site goes down?",
      answer:
        "Bookings live in a database that is backed up on a schedule and is independent of the marketing site, so a website problem does not put appointments at risk. Staff retain an internal view they can use directly. For practices where this matters most, we also send each confirmed booking to a nominated address or channel so there is always an external record.",
    },
  ],

  related: {
    title: "Related",
    items: [
      { title: "WhatsApp automation", href: "/custom-tools/whatsapp-automation-for-clinics", body: "The reminder layer that makes booking pay off." },
      { title: "Tools for clinics", href: "/custom-tools/for-clinics", body: "The wider front-desk toolset." },
      { title: "Tools for individual doctors", href: "/custom-tools/for-doctors", body: "The lighter set for a single practice." },
      { title: "Patient CRM and recall", href: "/custom-tools/patient-crm", body: "What happens after the first appointment." },
      { title: "Marketing for clinics", href: "/healthcare-marketing/clinics", body: "Getting people to the booking page in the first place." },
      { title: "All custom tools", href: "/custom-tools", body: "The full range of builds." },
    ],
  },

  cta: {
    title: "Send us your scheduling rules — including the awkward ones",
    body: "The exceptions are the point. Tell us how your practice really schedules and we will come back with a scope, a fixed price and a date.",
    primary: { label: "Get a fixed-price scope", href: "/get-started" },
    secondary: { label: "Book a 30-minute call", href: "/contact" },
  },

  schema: {
    type: "SoftwareApplication",
    serviceName: "Patient Appointment Booking System",
    applicationCategory: "HealthApplication",
    audienceType: "Doctors, clinics and hospitals",
    offersFrom: "40000",
    offersCurrency: "INR",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
