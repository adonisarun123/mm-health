import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Clinic Marketing Agency",
  description:
    "Marketing for clinics in India: dominate the local map pack, run geofenced ads that buy appointments",
  keywords: [
    "clinic marketing",
    "marketing for clinics",
    "clinic marketing agency India",
    "local SEO for clinics",
    "how to get more patients for a clinic",
    "dental clinic marketing",
    "multi location clinic marketing",
  ],
  alternates: { canonical: "/healthcare-marketing/clinics" },
  openGraph: {
    title: "Clinic Marketing Agency — Fill Appointment Slots, Not Dashboards",
    description:
      "Local search, geofenced ads and booking systems that turn clinic marketing spend into attended appointments.",
    url: "/healthcare-marketing/clinics",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/healthcare-marketing/clinics",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Healthcare Marketing", path: "/healthcare-marketing" },
    { name: "For Clinics", path: "/healthcare-marketing/clinics" },
  ],
  eyebrow: "For clinics",
  h1: "Clinic marketing that fills slots, not dashboards",
  answer:
    "Clinic marketing works when a patient within a few kilometres of you finds you first, trusts what they see, and can book without calling. That is a local search problem, a reputation problem and a front-desk problem — in that order. Monk Mantra fixes all three, for single clinics and multi-branch groups.",
  subhead:
    "Your catchment is small. That is an advantage, not a limitation: you are not competing with the whole internet, you are competing with eleven other clinics inside a five-kilometre radius. Winning that pool is a solvable problem.",
  heroBullets: [
    "Map pack visibility across your real catchment",
    "Ads geofenced to where patients will actually travel from",
    "No-show reduction built into the follow-up",
    "Per-branch reporting for multi-location groups",
  ],
  primaryCta: { label: "Get a free clinic audit", href: "/get-started" },
  secondaryCta: { label: "See the custom tools", href: "/custom-tools/for-clinics" },

  keyFacts: [
    { label: "Best suited to", value: "Single-location clinics, multi-branch groups, dental, derma, physio, IVF, eye and polyclinics" },
    { label: "Highest-return channel", value: "Google Business Profile and local search — usually before anything else" },
    { label: "Second channel", value: "Tightly geofenced Google Ads on symptom and near-me intent" },
    { label: "Common leak", value: "Missed calls and unanswered WhatsApp outside consulting hours" },
    { label: "First signal", value: "Calls and direction requests move in 6–10 weeks" },
    { label: "Starting from", value: "₹18,000 per month plus ad spend, scaling with catchment and branch count" },
    { label: "Reported in", value: "Enquiries, booked appointments, attended appointments and cost per attended patient" },
  ],

  pains: {
    title: "Where clinic marketing budgets leak",
    intro:
      "We have audited enough clinics to know the leaks repeat. Almost none of them are about creative quality.",
    items: [
      {
        problem: "You rank on the website but not in the map",
        fix:
          "For a clinic, the map pack sits above the organic results and takes the majority of clicks on any near-me query. Ranking tenth organically while invisible in the map means your website traffic is mostly competitors and job seekers. Local proximity, prominence and relevance are a separate discipline, and we treat them as one.",
      },
      {
        problem: "Ads run to a whole city when patients travel four kilometres",
        fix:
          "Nobody crosses Bengaluru for a routine dental cleaning. Broad radius targeting spends most of the budget on people who will never attend. We rebuild geo-targeting around realistic travel behaviour by service — routine care tight, high-value specialist procedures wider.",
      },
      {
        problem: "Multi-branch sites where every location page is the same page",
        fix:
          "Duplicated location pages with a swapped address do not rank and often cannibalise each other. Each branch needs its own genuine page — its doctors, its services, its timings, its parking, its embedded profile — and its own profile management.",
      },
      {
        problem: "Between 20 and 40 percent of booked patients never arrive",
        fix:
          "No-shows quietly cost more than most ad accounts. Confirmation at booking, a reminder the day before, a reminder the morning of, an easy reschedule link and a waitlist that fills the gap. Where your booking software cannot do this, we build the layer that can.",
      },
    ],
  },

  offerings: {
    title: "What a clinic engagement includes",
    items: [
      {
        icon: "MapPin",
        title: "Local search and map pack",
        body: "Profile optimisation per branch, category and service mapping, geo-tagged photos, Q&A, posts, citation consistency and monthly local rank tracking by grid, not by a single point.",
        href: "/healthcare-marketing/local-seo-for-clinics",
      },
      {
        icon: "Megaphone",
        title: "Geofenced paid search",
        body: "Campaigns built on symptom, service and near-me intent, with call-only variants for the queries that convert best on a phone, and negative lists that keep you out of job and academic searches.",
        href: "/healthcare-marketing/google-ads-for-doctors",
      },
      {
        icon: "Building2",
        title: "Location page architecture",
        body: "A real page per branch with unique content, correct LocalBusiness structured data, and internal linking that stops branches competing with each other.",
      },
      {
        icon: "FileText",
        title: "Service and condition content",
        body: "Pages for each treatment you offer with honest pricing context, what the appointment involves, recovery expectations and when to come in.",
      },
      {
        icon: "Star",
        title: "Review engine",
        body: "Automated post-visit invitations sent to every patient, response templates that stay clinically discreet, and alerting when a rating drops.",
        href: "/healthcare-marketing/reputation-management",
      },
      {
        icon: "MessageSquare",
        title: "WhatsApp capture and follow-up",
        body: "Click-to-WhatsApp from ads and profile, templated first response so nothing waits until morning, and structured follow-up on enquiries that did not book.",
      },
      {
        icon: "CalendarCheck",
        title: "Booking and reminder system",
        body: "A booking flow matched to your slot rules and doctor availability, with confirmations and reminders that measurably cut no-shows.",
        href: "/custom-tools/patient-appointment-booking-system",
      },
      {
        icon: "PhoneCall",
        title: "Call tracking and front-desk visibility",
        body: "Which campaign produced which call, how many rang out, and what happened next. Most clinics discover their biggest problem at 1pm and 7pm.",
      },
      {
        icon: "LayoutDashboard",
        title: "One dashboard per branch",
        body: "Enquiries, bookings, attendance and cost per attended patient, broken out by location so you can see which branch actually needs help.",
        href: "/custom-tools/for-clinics",
      },
    ],
  },

  process: {
    title: "The first hundred days",
    intro: "Front-load the cheap fixes. Build the compounding assets behind them.",
    items: [
      {
        duration: "Weeks 1–2",
        title: "Audit, tracking and the map",
        body:
          "We grid-map your local rankings across the catchment, audit every branch profile, install call tracking and conversion measurement properly, and rebuild profiles. This alone usually moves call volume.",
      },
      {
        duration: "Weeks 3–6",
        title: "Close the front-desk leak",
        body:
          "Missed-call recovery, WhatsApp auto-response, booking path simplified, reminder sequence live. There is no point buying more enquiries until the ones you have stop escaping.",
      },
      {
        duration: "Months 2–4",
        title: "Demand build",
        body:
          "Service pages, branch pages, review engine at volume, and paid search scaled only on the campaigns proving out on attended appointments rather than form fills.",
      },
      {
        duration: "Ongoing",
        title: "Optimise against capacity",
        body:
          "Push spend toward the services with open capacity and good margin, pull back where you are already full. Marketing that ignores your schedule just creates a waiting list and angry patients.",
      },
    ],
  },

  table: {
    caption: "Where a clinic's next patient realistically comes from",
    columns: ["Channel", "Speed", "Cost behaviour", "Best used for"],
    rows: [
      [
        "Google Business Profile / map pack",
        "6–10 weeks",
        "No media cost; effort compounds",
        "The default channel for every clinic with a physical address",
      ],
      [
        "Google Ads (search)",
        "Days",
        "Stops the moment you stop paying",
        "Filling specific open capacity, launching a new branch or service",
      ],
      [
        "Organic content",
        "3–6 months",
        "Compounds; lowest long-run cost per patient",
        "Conditions with a long research phase and higher treatment value",
      ],
      [
        "Reviews and word of mouth",
        "Continuous",
        "Operational effort only",
        "The multiplier on every other channel — nothing converts without it",
      ],
      [
        "Meta / Instagram",
        "Days",
        "Cheap reach, weaker intent",
        "Awareness for new locations, elective and aesthetic services",
      ],
      [
        "Aggregator platforms",
        "Immediate",
        "Per-lead or commission",
        "Supplementary volume — never the foundation, since they own the patient",
      ],
    ],
  },

  prose: {
    title: "How clinic growth actually compounds",
    blocks: [
      {
        heading: "Proximity, prominence, relevance — in that order",
        paragraphs: [
          "Local ranking is governed by three things: how close you are to the searcher, how well known and well reviewed you are, and how clearly your profile matches what they asked for. You cannot change proximity, which is why so many clinics conclude local SEO does not work for them. What you can change is the other two, and they are usually the reason a clinic four hundred metres further away is beating you.",
          "Prominence is review count and velocity, mention across the web, and consistency of your name, address and phone number everywhere they appear. Relevance is whether your profile actually names the service someone searched for. A dental clinic that lists \"Dentist\" and nothing else will lose every root canal, aligner and implant query to the clinic that mapped its services properly.",
        ],
        bullets: [
          "Track local rankings on a grid across your catchment, not from one office location",
          "Review velocity matters more than lifetime count — a steady trickle beats a burst",
          "Every service you want queries for must exist as a named service on the profile",
          "Name, address and phone inconsistency across directories quietly suppresses ranking",
        ],
      },
      {
        heading: "Multi-branch groups fail differently",
        paragraphs: [
          "Once you pass three locations, the failure mode changes. Branches start competing for the same query, one strong location masks three weak ones in aggregate reporting, and a single shared phone number makes it impossible to tell which branch a campaign is actually feeding.",
          "The fix is architectural. Distinct location pages with genuinely different content, per-branch profiles with their own review flow, per-branch tracking numbers, and reporting that never averages. Averages are how a group runs profitable marketing in one city and burns money in another for two years without noticing.",
        ],
      },
      {
        heading: "The cheapest patient is the one who already booked",
        paragraphs: [
          "Clinics spend enormous effort on acquisition and almost none on the two places the same money goes further: attendance and recall. A twenty-five percent no-show rate means a quarter of your acquisition spend bought nothing. A patient due for a six-month review who never gets contacted is a booking you already paid to acquire once.",
          "Both are systems problems, not marketing problems, which is why most agencies leave them alone. We do not, because we build software. Reminder sequences, waitlist backfill, recall campaigns off your own records, and a dashboard that makes the leak visible are usually worth more in the first quarter than any increase in ad budget.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "How do I get more patients for my clinic?",
      answer:
        "Start with local search, because most clinic enquiries begin with a near-me or symptom-plus-location query and the map pack sits above everything else. Get your Google Business Profile complete and actively maintained, map every service you offer, build steady honest review velocity, and make the booking path work on a phone. Add geofenced paid search to fill specific open capacity. Only then invest in broader content. Clinics that reverse this order spend a year on blog posts while losing the patient standing four hundred metres away.",
    },
    {
      question: "How much should a clinic spend on marketing?",
      answer:
        "As a rough frame, established clinics in India commonly run between five and ten percent of revenue on marketing, with newer clinics going higher for the first year. In absolute terms a single-location clinic can start a serious programme from about ₹18,000 per month in retainer plus ad spend, scaling as coverage widens. The more useful question is your cost per attended patient against the lifetime value of that patient — a dental practice with a ₹60,000 average treatment plan can justify spend a general physician cannot.",
    },
    {
      question: "Is local SEO or Google Ads better for a clinic?",
      answer:
        "They solve different problems. Local SEO is slower to start but has no media cost and compounds, which makes it the right foundation for every clinic. Google Ads produces enquiries within days but stops instantly when you pause it, which makes it the right tool for filling specific gaps — a new branch, a new service, an underused afternoon slot. Most clinics should run both, with the paid budget sized to actual open capacity rather than ambition.",
    },
    {
      question: "How do I reduce no-shows at my clinic?",
      answer:
        "Confirm at the moment of booking, remind the day before and again on the morning of the appointment, make rescheduling one tap rather than a phone call, and maintain a waitlist that automatically offers freed slots. Clinics that implement this properly typically see a meaningful drop within a couple of months. If your existing practice management software cannot do it, that layer can be built cheaply — it is one of the most common tools we are asked for.",
    },
    {
      question: "Can you handle marketing for a clinic with multiple branches?",
      answer:
        "Yes, and the approach changes materially past three locations. Each branch gets its own page with genuinely distinct content, its own Google Business Profile management, its own tracking number and its own line in reporting. We never report a group average, because averages hide the branch that is quietly losing money.",
    },
    {
      question: "Do clinics have the same advertising restrictions as individual doctors?",
      answer:
        "Clinical establishments have somewhat more latitude than individual registered practitioners, whose conduct is governed directly by the MCI Code of Ethics. That said, the Drugs and Magic Remedies Act still prohibits advertising treatment for its long schedule of conditions to the public regardless of who is advertising, and the CCPA's 2022 guidelines on misleading advertisements apply to every business. In practice we run clinic campaigns to the stricter standard — it costs nothing in performance and removes the exposure entirely.",
    },
  ],

  related: {
    title: "Related pages",
    items: [
      { title: "Local SEO for clinics", href: "/healthcare-marketing/local-seo-for-clinics", body: "The map pack playbook in detail." },
      { title: "Marketing for hospitals", href: "/healthcare-marketing/hospitals", body: "When the problem is service lines rather than a catchment." },
      { title: "Marketing for individual doctors", href: "/healthcare-marketing/doctors", body: "For consultants building a personal practice." },
      { title: "Custom tools for clinics", href: "/custom-tools/for-clinics", body: "Booking, reminders, CRM and dashboards built for your workflow." },
      { title: "Patient acquisition systems", href: "/healthcare-marketing/patient-acquisition", body: "Measuring the full path to an attended appointment." },
      { title: "Reputation management", href: "/healthcare-marketing/reputation-management", body: "Review generation, response and repair." },
    ],
  },

  cta: {
    title: "Find out which four kilometres you are losing",
    body: "We will grid-map your local rankings across your real catchment and send you the picture — which queries you win, which you lose, and to whom.",
    primary: { label: "Get the free clinic audit", href: "/get-started" },
    secondary: { label: "Book a 30-minute call", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Clinic Marketing Services",
    serviceType: "Clinic and Medical Practice Marketing",
    audienceType: "Single and multi-location clinics",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
