import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Patient Acquisition Strategy",
  description:
    "Patient acquisition systems for Indian healthcare: calculate true patient acquisition cost, fix the funnel stages that leak, cut no-shows, run recall",
  keywords: [
    "patient acquisition",
    "patient acquisition cost",
    "how to get more patients",
    "patient acquisition strategy",
    "healthcare lead generation",
    "cost per patient healthcare marketing",
    "patient acquisition India",
  ],
  alternates: { canonical: "/healthcare-marketing/patient-acquisition" },
  openGraph: {
    title: "Patient Acquisition — Cost Per Attended Patient, Not Per Enquiry",
    description:
      "Calculate real patient acquisition cost, find the funnel stage that leaks, and instrument marketing all the way to an attended appointment.",
    url: "/healthcare-marketing/patient-acquisition",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/healthcare-marketing/patient-acquisition",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Healthcare Marketing", path: "/healthcare-marketing" },
    { name: "Patient Acquisition", path: "/healthcare-marketing/patient-acquisition" },
  ],
  eyebrow: "Patient acquisition",
  h1: "Patient acquisition measured to the attended appointment",
  answer:
    "Patient acquisition is the measured path from a search to an attended appointment, and its only honest metric is cost per new attended patient — total marketing spend divided by patients who actually arrived, not enquiries. Monk Mantra builds the instrumentation and fixes the funnel stages where patients quietly leak away.",
  subhead:
    "Most practices cannot state their real acquisition cost, because nobody has joined the marketing record to the appointment system. Until that join exists, every optimisation decision is a guess dressed as data.",
  heroBullets: [
    "True patient acquisition cost, calculated on attended patients",
    "Stage-by-stage funnel diagnosis from impression to treatment accepted",
    "Speed-to-lead and missed-call recovery",
    "Recall and reactivation, the cheapest patients you already own",
  ],
  primaryCta: { label: "Get a funnel audit", href: "/get-started" },
  secondaryCta: { label: "See the custom tools", href: "/custom-tools" },

  keyFacts: [
    { label: "Core metric", value: "Patient acquisition cost — total marketing spend divided by new attended patients" },
    { label: "Include in spend", value: "Media, agency retainer, tooling, call tracking, creative production — not media alone" },
    { label: "Denominator", value: "New patients who attended, never enquiries, form fills or calls" },
    { label: "Usual biggest leak", value: "Enquiry to contact made — response time and unanswered calls outside consulting hours" },
    { label: "Second biggest leak", value: "Booked to attended — no-shows, commonly a fifth to a third of bookings" },
    { label: "Starting from", value: "₹18,000 per month, or ₹20,000 one-time for the measurement build alone" },
    { label: "Required plumbing", value: "Call tracking, per-channel tagging and a join between marketing records and the appointment system" },
  ],

  pains: {
    title: "Why owners and agencies disagree about performance",
    intro:
      "The disagreement is almost always a measurement boundary problem, not a dishonesty problem.",
    items: [
      {
        problem: "Reporting stops at the enquiry",
        fix:
          "An agency measures what it controls, so the report ends at form fills and calls. That number can rise while attended patients fall — cheaper, worse enquiries do exactly that. We extend measurement past the boundary to attendance, which is the only place the two parties' interests genuinely align.",
      },
      {
        problem: "Cost per lead is quoted without the retainer or the tooling",
        fix:
          "Media spend divided by leads is a media metric, not a business one. Real acquisition cost includes the retainer, the call tracking, the landing page build and the creative. When practices see the fully loaded figure for the first time, the channel ranking usually changes.",
      },
      {
        problem: "Every patient is treated as worth the same",
        fix:
          "A general physician consultation and an implant case are not the same acquisition. Without segmenting acquisition cost against realistic lifetime value per service, you will underspend on the treatments that could carry ten times the cost and overspend on the ones that cannot.",
      },
      {
        problem: "Enquiries arrive when nobody is there to answer",
        fix:
          "A large share of healthcare enquiries land in the evening and at weekends. If the phone rings out at 7pm and nobody calls back until Monday, the patient has already booked elsewhere. Missed-call recovery and out-of-hours handling routinely recover more patients than a budget increase would buy.",
      },
    ],
  },

  offerings: {
    title: "What a patient acquisition engagement includes",
    items: [
      {
        icon: "LineChart",
        title: "Acquisition cost model",
        body: "A fully loaded calculation per channel and per service line, with new attended patients as the denominator, so you can see what a patient actually costs rather than what a lead appears to cost.",
      },
      {
        icon: "Workflow",
        title: "Full-funnel instrumentation",
        body: "Per-channel tagging, dynamic call tracking numbers, WhatsApp and form attribution, and a join between the marketing record and the appointment system so a booking can be traced back to its source.",
      },
      {
        icon: "Target",
        title: "Stage-by-stage leak diagnosis",
        body: "Conversion rate measured at every step from impression through to treatment accepted, so the weakest stage is identified before any budget decision is made.",
      },
      {
        icon: "PhoneCall",
        title: "Speed to lead and missed-call recovery",
        body: "Instant acknowledgement on every enquiry, automatic callback tasks, missed-call alerts, and out-of-hours WhatsApp handling so an evening enquiry does not wait until morning.",
      },
      {
        icon: "CalendarCheck",
        title: "No-show reduction",
        body: "Confirmation at booking, a reminder the day before and on the morning, one-tap rescheduling, and a waitlist that backfills freed slots automatically.",
      },
      {
        icon: "UserPlus",
        title: "Recall and reactivation",
        body: "Campaigns run against your own records — patients due for review, lapsed treatment plans, annual checks. The cheapest patient available and the one almost every practice ignores entirely.",
      },
      {
        icon: "Wallet",
        title: "Lifetime value segmentation",
        body: "Value modelled by service so spend can be allocated against what a patient is genuinely worth over their relationship with you rather than against the first invoice.",
      },
      {
        icon: "Users",
        title: "Front-desk conversion training",
        body: "Call handling reviewed against recordings, scripts for the common objections, and a booking-rate figure per person. The enquiry-to-appointment step is a human skill, and it is measurable.",
      },
      {
        icon: "LayoutDashboard",
        title: "Acquisition dashboard",
        body: "One view of enquiries, contact rate, bookings, attendance and cost per attended patient by channel, service and branch — built as a tool where your existing systems cannot produce it.",
        href: "/custom-tools",
      },
    ],
  },

  process: {
    title: "How we build an acquisition system",
    intro: "Measure the whole path first. Fix the worst stage second. Buy more traffic last.",
    items: [
      {
        duration: "Weeks 1–3",
        title: "Instrument the funnel",
        body:
          "Call tracking installed, channels tagged, enquiry sources captured consistently, and the marketing record joined to the appointment system. Until this exists there is no basis for any spending decision, so nothing else starts first.",
      },
      {
        duration: "Weeks 3–6",
        title: "Baseline and leak diagnosis",
        body:
          "Conversion measured at every stage, call recordings reviewed, out-of-hours enquiry volume quantified, and no-show rate established by service and by day. The output is a ranked list of where patients are lost.",
      },
      {
        duration: "Weeks 4–12",
        title: "Fix the largest leak",
        body:
          "Usually response time and missed calls, sometimes attendance, occasionally the booking path itself. These fixes raise attended patients without increasing media spend, which changes acquisition cost immediately.",
      },
      {
        duration: "Ongoing",
        title: "Scale against capacity and value",
        body:
          "Budget moves toward the channels and services proving out on attended patients and lifetime value, and pulls back where the schedule is already full. Marketing that outruns capacity produces waiting lists and complaints.",
      },
    ],
  },

  table: {
    caption: "Patient acquisition funnel — where it leaks and who owns the fix",
    columns: ["Stage", "Typical drop-off cause", "What fixes it", "Who owns it"],
    rows: [
      [
        "Impression to click",
        "Weak listing, poor rating visible in results, no relevance to the query asked",
        "Better titles and profile relevance, honest review volume, matching the search intent rather than the service name",
        "Marketing",
      ],
      [
        "Click to enquiry",
        "Slow mobile page, no clear next action, form asking for too much, no phone number visible",
        "Fast pages, one obvious action, short forms, click-to-call and click-to-WhatsApp on every view",
        "Marketing and web",
      ],
      [
        "Enquiry to contact made",
        "Response measured in hours or days; calls unanswered after consulting hours and at weekends",
        "Instant acknowledgement, callback within minutes, missed-call alerts, out-of-hours WhatsApp cover",
        "Front desk, with marketing supplying the alerting",
      ],
      [
        "Contact made to appointment booked",
        "Untrained call handling, no availability offered on the call, price question handled defensively",
        "Scripts for common objections, live calendar access at the desk, booking rate tracked per person",
        "Front desk and practice manager",
      ],
      [
        "Appointment booked to attended",
        "No confirmation, no reminders, long gap to the slot, rescheduling requires a phone call",
        "Confirmation at booking, day-before and morning-of reminders, one-tap reschedule, waitlist backfill",
        "Operations",
      ],
      [
        "Attended to treatment accepted",
        "Plan explained in clinical language, cost introduced late, no written estimate or payment options",
        "Written treatment plan, transparent costs presented during the consultation, financing options offered upfront",
        "Clinical team",
      ],
      [
        "Treatment to recall or repeat",
        "No recall list, no reactivation contact, patient simply forgets and drifts",
        "Recall campaigns off your own records, review reminders, structured reactivation of lapsed patients",
        "Marketing and operations jointly",
      ],
    ],
  },

  prose: {
    title: "Getting the numbers right",
    blocks: [
      {
        heading: "How to calculate patient acquisition cost properly",
        paragraphs: [
          "Patient acquisition cost is total marketing spend for a period divided by the number of new patients who attended in that period. Both halves of that sentence are where practices go wrong.",
          "Total spend means everything: media, the agency retainer, call tracking and software subscriptions, creative production, the landing page build amortised across its useful life, and any commission paid to aggregator platforms. Media spend alone understates the real figure substantially, and it is the version most commonly quoted.",
          "New attended patients means people who walked in and were seen for the first time. Not enquiries. Not form fills. Not calls. Not bookings. An enquiry is a request; a booking is an intention; only attendance is a patient. The gap between enquiry count and attendance count is frequently large enough to double the true cost figure, which is exactly why the enquiry-level version is the one that gets reported.",
        ],
        bullets: [
          "Numerator: media plus retainer plus tooling plus production plus platform commissions",
          "Denominator: new patients attended, counted from the appointment system",
          "Segment by channel and by service — a blended average hides both the winner and the loser",
          "Allow for the lag between spend and attendance, especially for high-consideration treatments",
        ],
      },
      {
        heading: "Lifetime value decides what you can afford to spend",
        paragraphs: [
          "Acquisition cost means nothing on its own. It only becomes a decision once you set it against what a patient is worth, and that is where healthcare differs sharply from most sectors, because the spread between service lines is enormous.",
          "A general physician earning a consultation fee on a first visit, with sporadic repeat visits, can justify only a modest acquisition cost. A dental practice where a first visit routinely leads to a multi-visit treatment plan operates in an entirely different band. An IVF clinic, where a single cycle carries a substantial fee and often leads to further cycles, can rationally spend an order of magnitude more per acquired patient than the GP down the corridor — and will be bidding against them for some of the same keywords.",
          "This is why a benchmark cost per lead borrowed from another practice is useless. The right question is never whether ₹1,800 per enquiry is expensive; it is what proportion of the patient's realistic lifetime value that represents in your specialty.",
        ],
      },
      {
        heading: "Speed to lead is the cheapest improvement available",
        paragraphs: [
          "Conversion from enquiry to contact collapses with elapsed time. The steepest fall happens inside the first hour, and by the time a day has passed the patient has usually contacted two or three other practices and booked with whoever answered first. Healthcare is not special here, except that the decision is often urgent, which makes the decay steeper still.",
          "The practical reality in most clinics we audit is a phone that rings out at 7pm, a WhatsApp message read the next morning, and a form enquiry from Saturday that is called on Tuesday. None of that shows in the marketing report, because the enquiry was recorded. It only shows in attendance, which nobody was measuring.",
          "The fixes are unglamorous and cheap: an instant automated acknowledgement so the patient knows they have been heard, a missed-call alert that creates a callback task, a templated WhatsApp response outside hours, and a service-level target the front desk is actually measured against. Practices routinely recover more attended patients from this than from a proportionate increase in ad budget.",
        ],
      },
      {
        heading: "No-show economics and the patient you already paid for",
        paragraphs: [
          "A no-show rate of a fifth to a third is common in Indian outpatient settings, and it is an acquisition problem disguised as an operations statistic. If you acquired a patient for ₹2,000 and a quarter of them never arrive, your real cost per attended patient is ₹2,667. Cutting no-shows from twenty-five percent to twelve is arithmetically identical to a substantial reduction in media cost, and it is usually faster to achieve.",
          "Then there is recall, which is the cheapest patient available and the one most practices ignore completely. A patient due for a six-month review, a lapsed treatment plan, an annual health check — you have already paid to acquire these people once, you already hold their contact details lawfully under the DPDP Act 2023 as long as you have a proper basis and honour withdrawal of consent, and reaching them costs a message. Practices that build a recall programme frequently find it produces attended patients at a fraction of the cost of any paid channel.",
        ],
        bullets: [
          "Model no-shows into acquisition cost rather than treating them as an operational footnote",
          "Waitlist backfill converts a cancellation into an attended patient at zero media cost",
          "Recall lists should be generated from clinical records, not from a marketing database",
          "Honour consent withdrawal and keep contact preferences current under the DPDP Act 2023",
        ],
      },
      {
        heading: "Spend against capacity, not against ambition",
        paragraphs: [
          "The last discipline is capacity awareness. Demand generation that exceeds what the schedule can absorb creates long waits, rushed consultations and a spike in negative reviews — which then raises acquisition cost across every channel, because reviews gate conversion everywhere.",
          "The correct planning unit is open slots by service and by day. If Tuesday afternoons in periodontics are empty and Saturday mornings are booked three weeks out, that is a targeting and scheduling instruction, not a reason to raise the whole budget. Marketing that respects the schedule performs better on cost per attended patient than marketing that simply buys more of everything.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "What is patient acquisition cost and how do I calculate it?",
      answer:
        "Patient acquisition cost is your total marketing spend for a period divided by the number of new patients who actually attended in that period. Total spend includes media, agency retainer, software and call tracking, creative production and any platform commissions — not media alone. The denominator must be attended patients, taken from your appointment system, not enquiries or bookings. Most practices quote a number based on media spend divided by leads, which can understate the real figure by more than half once unanswered enquiries and no-shows are accounted for.",
    },
    {
      question: "Why does my agency report leads but I do not see more patients?",
      answer:
        "Because the report stops at the measurement boundary the agency controls. Enquiry counts can rise while attended patients fall, and that happens routinely when broader targeting produces cheaper, lower-intent enquiries. It also happens when enquiries arrive outside consulting hours and nobody calls back. Neither shows up in a leads report, because the lead was recorded. The fix is to extend measurement to attendance by joining marketing records to the appointment system, at which point both sides are looking at the same number and the argument disappears.",
    },
    {
      question: "What is a good patient acquisition cost?",
      answer:
        "There is no universal figure, because the answer depends entirely on what a patient is worth in your specialty. A general physician consultation supports only a small acquisition cost; a dental practice with multi-visit treatment plans supports a much larger one; an IVF or transplant programme can rationally spend an order of magnitude more than either. The useful test is the proportion of realistic lifetime value that your acquisition cost consumes, evaluated per service line rather than as a blended average across the whole practice.",
    },
    {
      question: "How fast should we respond to a patient enquiry?",
      answer:
        "Within minutes, not hours. Conversion from enquiry to contact falls sharply inside the first hour and continues falling, and healthcare enquiries are often urgent enough that the patient contacts several practices at once and books with whoever answers first. Set an instant automated acknowledgement, create a callback task on every missed call, cover evenings and weekends with templated WhatsApp responses, and measure the front desk against a response-time target. This is consistently one of the cheapest improvements available to a practice.",
    },
    {
      question: "How do I reduce no-shows and what are they costing me?",
      answer:
        "No-shows commonly run between a fifth and a third of booked appointments in Indian outpatient settings, and they directly inflate your cost per attended patient — a twenty-five percent no-show rate raises a ₹2,000 acquisition cost to ₹2,667. Confirm at the moment of booking, remind the day before and again on the morning, make rescheduling one tap rather than a phone call, and run a waitlist that automatically offers freed slots. Cutting the rate in half is arithmetically the same as a large media saving and is usually quicker to deliver.",
    },
    {
      question: "What tracking do I need to measure patient acquisition properly?",
      answer:
        "Three things. Per-channel tagging so every enquiry carries its source through to the end. Call tracking with dynamic numbers, since a large share of healthcare enquiries are phone calls and untracked calls make paid search impossible to evaluate. And a join between the marketing record and the appointment system, so an attended appointment can be traced back to the campaign that produced it. Where practice management software cannot support that join, the connecting layer can be built. Without all three you are optimising on enquiry counts and hoping.",
    },
  ],

  related: {
    title: "Related pages",
    items: [
      { title: "Marketing for clinics", href: "/healthcare-marketing/clinics", body: "Local demand for single and multi-branch clinics." },
      { title: "Marketing for hospitals", href: "/healthcare-marketing/hospitals", body: "Acquisition measured through to admission by service line." },
      { title: "Google Ads for doctors", href: "/healthcare-marketing/google-ads-for-doctors", body: "The paid channel that most needs attended-patient measurement." },
      { title: "SEO for doctors", href: "/healthcare-marketing/seo-for-doctors", body: "The channel with the lowest long-run acquisition cost." },
      { title: "Reputation management", href: "/healthcare-marketing/reputation-management", body: "The checkpoint every acquisition channel has to pass through." },
      { title: "Custom tools", href: "/custom-tools", body: "Call tracking, dashboards and the join between marketing and the appointment system." },
    ],
  },

  cta: {
    title: "Find out what a patient actually costs you",
    body: "Send us your last quarter of spend and your appointment data. We will return a fully loaded cost per attended patient by channel, and a ranked list of the funnel stages losing you the most patients.",
    primary: { label: "Get the funnel audit", href: "/get-started" },
    secondary: { label: "Book a 30-minute call", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Patient Acquisition Systems",
    serviceType: "Healthcare Patient Acquisition and Funnel Measurement",
    serviceDescription:
      "Full-funnel patient acquisition for healthcare providers: acquisition cost modelling on attended patients, call tracking and channel attribution, speed-to-lead and missed-call recovery, no-show reduction and recall programmes.",
    audienceType: "Doctors, clinics, hospitals and diagnostic centres",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
