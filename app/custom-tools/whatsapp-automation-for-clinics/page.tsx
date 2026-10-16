import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "WhatsApp Automation for Clinics",
  description:
    "WhatsApp automation for clinics and doctors in India: appointment confirmations, reminders, one-tap reschedule, missed-call recovery and recall",
  keywords: [
    "WhatsApp automation for clinics",
    "WhatsApp appointment reminders",
    "reduce no shows clinic",
    "WhatsApp Business API healthcare",
    "patient reminder system India",
  ],
  alternates: { canonical: "/custom-tools/whatsapp-automation-for-clinics" },
  openGraph: {
    title: "WhatsApp Automation for Clinics — Reminders That Cut No-Shows",
    description:
      "Confirmations, reminders, reschedule links, missed-call recovery and recall on the channel Indian patients actually read.",
    url: "/custom-tools/whatsapp-automation-for-clinics",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/custom-tools/whatsapp-automation-for-clinics",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Custom Tools", path: "/custom-tools" },
    { name: "WhatsApp Automation", path: "/custom-tools/whatsapp-automation-for-clinics" },
  ],
  eyebrow: "The cheapest no-show fix",
  h1: "WhatsApp automation for clinics and doctors",
  answer:
    "WhatsApp automation sends appointment confirmations, reminders, reschedule links and follow-ups through the official WhatsApp Business Platform, using approved templates and recorded consent. For Indian practices it is the highest-return small build available, because it is the one channel patients reliably read.",
  subhead:
    "Email confirmations go unread. SMS gets filtered. WhatsApp gets opened. That is the entire argument, and it is why this is usually the first tool we recommend.",
  heroBullets: [
    "Official WhatsApp Business Platform, not an unofficial workaround",
    "Consent captured and recorded before any message is sent",
    "Transactional templates only — no promotional drift",
    "Connects to your existing booking or records system",
  ],
  primaryCta: { label: "Get a fixed-price scope", href: "/get-started" },
  secondaryCta: { label: "See all custom tools", href: "/custom-tools" },

  keyFacts: [
    { label: "What it does", value: "Confirmations, reminders, reschedule, missed-call recovery, recall, review requests" },
    { label: "Platform", value: "Official WhatsApp Business Platform with pre-approved message templates" },
    { label: "Timeline", value: "1–3 weeks from signed scope to live" },
    { label: "Starting from", value: "₹9,000 one-time, plus per-conversation platform charges" },
    { label: "Consent", value: "Explicit opt-in captured at booking and recorded, per DPDP Act 2023 expectations" },
    { label: "Not for", value: "Promotional broadcasts, treatment advertising or anything a patient did not opt into" },
  ],

  pains: {
    title: "Why reminders are the highest-return build in a clinic",
    items: [
      {
        problem: "A large share of no-shows are forgetting, not deciding",
        fix:
          "The patient who consciously decides not to come is hard to influence. The patient who booked three weeks ago and forgot is trivially recoverable with a message on a channel they read. That second group is usually the larger one.",
      },
      {
        problem: "Cancelling requires a phone call, so patients just do not turn up",
        fix:
          "When the only way to cancel is to ring a busy front desk during working hours, patients avoid the awkwardness by disappearing. A one-tap reschedule link converts silent no-shows into recoverable slot changes with notice.",
      },
      {
        problem: "Enquiries outside working hours die overnight",
        fix:
          "A missed call at seven in the evening, or a WhatsApp message on a Sunday, is a patient who calls someone else on Monday. An instant templated acknowledgement with a booking link holds them until a human is available.",
      },
      {
        problem: "Practices use personal WhatsApp and create a compliance and continuity problem",
        fix:
          "Patient conversations on a receptionist's personal number are unauditable, unrecoverable when she leaves, and impossible to govern under data protection obligations. The official platform gives you templates, consent records, logs and continuity.",
      },
    ],
  },

  offerings: {
    title: "What the automation covers",
    items: [
      {
        icon: "CalendarCheck",
        title: "Booking confirmation",
        body: "Sent the moment an appointment is made, with date, time, doctor, address, fee expectation and any preparation instructions for that appointment type.",
      },
      {
        icon: "AlarmClock",
        title: "Two-stage reminders",
        body: "The evening before and the morning of, because a single reminder at either point misses a different set of patients.",
      },
      {
        icon: "Send",
        title: "One-tap reschedule and cancel",
        body: "A link that lets the patient move themselves within your rules, freeing the slot with enough notice for the waitlist to fill it.",
      },
      {
        icon: "PhoneCall",
        title: "Missed-call recovery",
        body: "Any call your desk could not answer triggers an immediate message with a booking link and an expected callback time.",
      },
      {
        icon: "MessageSquare",
        title: "Enquiry auto-response and routing",
        body: "An instant acknowledgement to inbound messages, with routing to the right person and a visible response clock so nothing sits unanswered.",
      },
      {
        icon: "Users",
        title: "Recall and follow-up",
        body: "Six-month reviews, repeat treatment cycles, post-procedure check-ins and lapsed-patient reactivation, triggered from your patient record.",
        href: "/custom-tools/patient-crm",
      },
      {
        icon: "Star",
        title: "Review requests",
        body: "A uniform post-visit request to every patient, sent a day after the visit, with no filtering or gating of who gets asked.",
      },
      {
        icon: "FileText",
        title: "Report and prescription delivery",
        body: "Secure, access-controlled delivery notifications rather than forwarding files through a personal chat.",
      },
      {
        icon: "Lock",
        title: "Consent and opt-out management",
        body: "Opt-in captured at the point of booking, recorded with purpose and timestamp, with a working opt-out honoured across all message types.",
      },
    ],
  },

  process: {
    title: "Getting it live",
    items: [
      {
        duration: "Days 1–2",
        title: "Map the triggers",
        body:
          "Which events should send which message, to whom, at what time, in which language. Most clinics need six to ten templates, not fifty.",
      },
      {
        duration: "Week 1",
        title: "Platform setup and template approval",
        body:
          "Business verification, number setup and template submission. Template approval is the main external dependency and we submit early because it is the item we do not control.",
      },
      {
        duration: "Weeks 1–2",
        title: "Build the triggers and connect the source",
        body:
          "Wiring into your booking system or records so messages fire from real events rather than someone remembering to send them.",
      },
      {
        duration: "Launch",
        title: "Baseline, launch, measure",
        body:
          "We record your current no-show rate before switching on, so the change is measured against something rather than asserted.",
      },
    ],
  },

  table: {
    caption: "Which message does what",
    columns: ["Message", "When it sends", "What it prevents", "Consent basis"],
    rows: [
      ["Booking confirmation", "Immediately on booking", "Uncertainty and duplicate calls to confirm", "Transactional, opted in at booking"],
      ["Reminder, day before", "Evening before, fixed time", "Forgotten appointments booked well in advance", "Transactional"],
      ["Reminder, morning of", "Two to three hours prior", "Same-day forgetting and late arrivals", "Transactional"],
      ["Reschedule link", "Attached to both reminders", "Silent no-shows with no notice", "Transactional"],
      ["Missed-call recovery", "Within a minute of an unanswered call", "Enquiries lost to the next clinic on the list", "Initiated by the patient's own call"],
      ["Recall", "On a schedule set by treatment type", "Patients who never return despite being due", "Explicit opt-in required"],
      ["Review request", "One day after the visit", "A review profile that never grows", "Explicit opt-in required"],
    ],
  },

  prose: {
    title: "Doing this properly rather than quickly",
    blocks: [
      {
        heading: "Use the official platform, not an unofficial bridge",
        paragraphs: [
          "There is a persistent market in tools that automate a normal WhatsApp account through unofficial means. They are cheaper, they work for a while, and they periodically get the number banned — usually at the worst possible moment, taking your entire patient conversation history with it.",
          "The official WhatsApp Business Platform costs a small per-conversation fee and requires templates to be approved in advance. In exchange you get a number that will not disappear, delivery you can rely on, message logs you can audit, and a consent model that stands up under data protection scrutiny.",
        ],
      },
      {
        heading: "Keep transactional and promotional strictly separate",
        paragraphs: [
          "Appointment confirmations and reminders are transactional: the patient asked for the appointment, the message serves it, and nobody objects. Offers, package promotions and treatment marketing are a different category entirely — they need separate explicit consent, and for a medical practice they also raise questions under the advertising rules that govern doctors.",
          "The practical risk of mixing them is that patients block the number, and when they do you lose the reminder channel too. Protecting the transactional channel is worth far more than any promotional campaign you could run through it.",
        ],
        bullets: [
          "Never send treatment advertising to a patient who opted in for reminders",
          "Recall and review requests need their own opt-in, captured separately",
          "Honour opt-out immediately and across every message type",
          "Remember the Drugs and Magic Remedies Act applies to messages, not just ads",
        ],
      },
      {
        heading: "Measure the baseline before you switch it on",
        paragraphs: [
          "The most common mistake is launching reminders and then having no idea whether they worked. Clinics rarely track their no-show rate accurately before automation, so afterwards the improvement is a matter of impression rather than evidence.",
          "We record the baseline first — no-show rate by doctor, by service and by day of week — so that four weeks later there is a real comparison. It also tells you where the remaining no-shows are concentrated, which is usually more useful than the headline number.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Is WhatsApp automation for patients legal in India?",
      answer:
        "Yes, for transactional messages the patient has consented to receive, sent through the official WhatsApp Business Platform using approved templates. Under the Digital Personal Data Protection Act, 2023 you need a lawful basis and a record of consent, and you must honour withdrawal. Where it becomes a problem is promotional messaging: pushing treatment offers raises both consent issues and medical advertising issues, particularly for conditions listed under the Drugs and Magic Remedies Act.",
    },
    {
      question: "How much does WhatsApp automation cost to run?",
      answer:
        "There are two costs. The build starts from around ₹9,000 one-time, rising with how many triggers and integrations you need. Ongoing, Meta charges per conversation on the WhatsApp Business Platform, at rates that vary by conversation category and are revised periodically. For a clinic sending confirmations and two reminders per appointment, the running cost is usually a small fraction of the value of a single recovered appointment.",
    },
    {
      question: "How much do reminders actually reduce no-shows?",
      answer:
        "Reminders reliably reduce no-shows, and the effect is largest where the booking-to-appointment gap is long. We will not quote you a specific percentage, because it depends entirely on your baseline, your patient mix and how easy you make rescheduling. What we do is measure your current rate before launch, so you can see the actual movement rather than accept an industry figure that was never about your clinic.",
    },
    {
      question: "Can we use our existing clinic phone number?",
      answer:
        "Usually yes, but it must be migrated onto the WhatsApp Business Platform, and a number can only be registered on one WhatsApp product at a time. If your staff currently use that number on the regular WhatsApp app, they will lose that access when it migrates. Many clinics prefer to move to a dedicated number and keep the old one for voice. We work through this during setup because it is the decision most likely to cause disruption if rushed.",
    },
    {
      question: "What if a patient replies to an automated message?",
      answer:
        "Replies land in a shared inbox your team works from, not on someone's personal phone. Common replies can be handled with templated responses, and anything needing a human is routed to the right person with a visible response clock. This is one of the main advantages of the official platform: conversations belong to the practice and survive staff changes, rather than leaving with whoever owned the handset.",
    },
    {
      question: "Can it send messages in regional languages?",
      answer:
        "Yes. Templates are submitted for approval per language, so you can maintain parallel sets in English, Hindi, Kannada, Tamil or whatever your patient base needs, with language selected from the patient record. This matters more than it sounds for reminder effectiveness — a message read in the patient's first language gets acted on more reliably than one that has to be translated in their head.",
    },
  ],

  related: {
    title: "Related",
    items: [
      { title: "Appointment booking system", href: "/custom-tools/patient-appointment-booking-system", body: "The booking layer these messages fire from." },
      { title: "Patient CRM and recall", href: "/custom-tools/patient-crm", body: "The record that drives recall campaigns." },
      { title: "Tools for clinics", href: "/custom-tools/for-clinics", body: "The wider front-desk toolset." },
      { title: "Reputation management", href: "/healthcare-marketing/reputation-management", body: "Turning post-visit messages into a review engine." },
      { title: "Patient acquisition", href: "/healthcare-marketing/patient-acquisition", body: "Where no-shows sit in the funnel economics." },
      { title: "All custom tools", href: "/custom-tools", body: "The full range of builds." },
    ],
  },

  cta: {
    title: "What is your current no-show rate?",
    body: "If you do not know, that is the first thing worth fixing. We will help you measure it, then build the reminder layer and show you what changed.",
    primary: { label: "Get a fixed-price scope", href: "/get-started" },
    secondary: { label: "Book a 30-minute call", href: "/contact" },
  },

  schema: {
    type: "SoftwareApplication",
    serviceName: "WhatsApp Automation for Clinics",
    applicationCategory: "HealthApplication",
    audienceType: "Clinics, doctors and hospitals",
    offersFrom: "25000",
    offersCurrency: "INR",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
