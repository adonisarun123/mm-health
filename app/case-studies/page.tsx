import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Case Studies & How We Measure",
  description:
    "How Monk Mantra diagnoses and fixes growth problems — the six engagement patterns we see most, the metrics we report against",
  keywords: [
    "healthcare marketing case studies",
    "clinic marketing results",
    "marketing agency case studies India",
    "patient acquisition results",
  ],
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies & How We Measure Results | Monk Mantra",
    description:
      "The engagement patterns we see most, the metrics we report against, and how we decide what to fix first.",
    url: "/case-studies",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/case-studies",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
  ],
  eyebrow: "Results and method",
  h1: "Case studies, and how we measure results",
  answer:
    "We publish our diagnostic method and the metrics we report against, rather than headline percentages you cannot verify. Below are the six growth problems we are hired to fix most often, what actually causes each one, and the number we hold ourselves to in each case.",
  subhead:
    "Named client results are published only with that client's written approval and only where the figures can be substantiated. If you want to speak to a current client before signing anything, ask and we will arrange it.",
  heroBullets: [
    "Method published, not just outcomes",
    "Reported in patients and revenue, not impressions",
    "Client references available on request",
    "No numbers we cannot evidence",
  ],
  primaryCta: { label: "Get a free growth audit", href: "/get-started" },
  secondaryCta: { label: "Ask for a client reference", href: "/contact" },

  keyFacts: [
    { label: "What we report", value: "Enquiries, booked appointments, attended appointments, cost per attended patient" },
    { label: "What we do not report", value: "Impressions, reach, engagement rate, or any figure we cannot evidence" },
    { label: "Reporting cadence", value: "Monthly, disaggregated by branch, service line and channel" },
    { label: "Attribution", value: "Call tracking, per-channel tagging and a join into the appointment record" },
    { label: "References", value: "Available on request — we will connect you with a current client" },
    { label: "Baselines", value: "Measured before launch, so change is evidenced rather than asserted" },
  ],

  pains: {
    title: "Why most agency case studies are worthless",
    intro:
      "You have read a hundred of them and learned nothing. There are four structural reasons for that, and they are worth naming plainly.",
    items: [
      {
        problem: "The percentage has no denominator",
        fix:
          "A 340% increase from three leads to thirteen is technically accurate and completely uninformative. We report absolute numbers alongside any rate, or we do not report the rate.",
      },
      {
        problem: "The metric chosen is the one that moved",
        fix:
          "Agencies pick whichever number looked best after the fact. A metric agreed at the start and reported every month, whether or not it moved, is the only kind worth reading.",
      },
      {
        problem: "The result is not attributable to the work",
        fix:
          "A clinic that opened a second branch, hired two consultants and ran a campaign will attribute the growth to the campaign. We instrument attribution before launch so the claim can survive scrutiny.",
      },
      {
        problem: "The client cannot be contacted",
        fix:
          "An anonymised case study with impressive figures and no verifiable source is a marketing asset, not evidence. Ask any agency for a reference call before you sign. We will provide one.",
      },
    ],
  },

  offerings: {
    title: "The six problems we are usually hired to fix",
    intro:
      "These are engagement patterns, not client stories. Each describes a diagnosis we make repeatedly and the sequence that follows.",
    items: [
      {
        icon: "MapPin",
        title: "Invisible in the map pack",
        body: "The clinic ranks organically but not locally, so it loses every near-me query to a competitor four hundred metres away. Fix sequence: profile rebuild, service mapping, review velocity, citation consistency. Reported on: calls and direction requests from the profile.",
        href: "/healthcare-marketing/local-seo-for-clinics",
      },
      {
        icon: "PhoneCall",
        title: "Enquiries arrive and die at the front desk",
        body: "Marketing works, conversion does not. Usually a missed call between one and three in the afternoon, and again after seven. Fix sequence: call tracking, missed-call recovery, WhatsApp response, booking path. Reported on: contact rate and booking rate.",
        href: "/healthcare-marketing/patient-acquisition",
      },
      {
        icon: "Megaphone",
        title: "Ad spend buying clicks, not appointments",
        body: "Broad radius targeting, procedure jargon as keywords, and conversion tracking pointed at form views. Fix sequence: geofencing to real travel behaviour, symptom-intent keywords, negative lists, call and booking conversions. Reported on: cost per attended patient.",
        href: "/healthcare-marketing/google-ads-for-doctors",
      },
      {
        icon: "Star",
        title: "A rating that gates every other channel",
        body: "A 3.4 rating suppresses conversion on paid, organic and local simultaneously. It is almost always an operations problem wearing a marketing costume. Fix sequence: uniform review invitation, response workflow, themes fed back to operations. Reported on: rating, review velocity and response rate.",
        href: "/healthcare-marketing/reputation-management",
      },
      {
        icon: "Building2",
        title: "A branch quietly losing money inside a group average",
        body: "Group reporting hides a location that has been unprofitable for two years. Fix sequence: per-branch tracking numbers, per-branch profiles and pages, disaggregated reporting by default. Reported on: cost per attended patient, by branch.",
        href: "/healthcare-marketing/clinics",
      },
      {
        icon: "Users",
        title: "Patients acquired once and never contacted again",
        body: "A list of satisfied patients due for review that nobody has ever worked. The cheapest available growth, universally ignored. Fix sequence: unified patient record, recall rules per treatment type, lapsed-patient reactivation. Reported on: recall bookings and cost per recalled patient.",
        href: "/custom-tools/patient-crm",
      },
    ],
  },

  process: {
    title: "How we establish whether the work is working",
    intro: "The measurement is designed before the campaign, not reverse-engineered from whatever happened.",
    items: [
      {
        duration: "Before anything launches",
        title: "Record the baseline",
        body:
          "Current enquiry volume, booking rate, attendance rate, no-show rate, rating and cost per patient where it can be computed. Without this there is nothing to compare against, and every later claim becomes an assertion.",
      },
      {
        duration: "Week 1",
        title: "Fix the instrumentation",
        body:
          "Call tracking per channel and per branch, conversion events on calls and confirmed bookings rather than page views, and a join from the marketing record into the appointment system.",
      },
      {
        duration: "Monthly",
        title: "Report the agreed metric, whether or not it moved",
        body:
          "The same metrics, disaggregated the same way, every month. Channels that are not working get named as such rather than quietly dropped from the deck.",
      },
      {
        duration: "Quarterly",
        title: "Reallocate on the evidence",
        body:
          "Budget moves toward what is converting and away from what is not. Where the bottleneck turns out to be operational rather than promotional, we say so, even when the fix is not something we bill for.",
      },
    ],
  },

  table: {
    caption: "What we report against, by engagement type",
    columns: ["Engagement", "Primary metric", "Supporting metrics", "Realistic horizon"],
    rows: [
      [
        "Individual doctor",
        "Booked consultations from first-party channels",
        "Name-search visibility, profile actions, review velocity",
        "6–10 weeks to first signal",
      ],
      [
        "Single clinic",
        "Cost per attended patient",
        "Map pack rank across the catchment, contact rate, no-show rate",
        "6–10 weeks",
      ],
      [
        "Multi-branch group",
        "Cost per attended patient, by branch",
        "Per-branch enquiry share, cannibalisation between location pages",
        "3–4 months",
      ],
      [
        "Hospital service line",
        "Cost per admission, by department",
        "Enquiry-to-consultation rate, referral volume by source",
        "4–6 months",
      ],
      [
        "Custom tool build",
        "The specific operational number it was built to move",
        "Adoption by staff, time saved, error rate",
        "Measured from the baseline taken pre-launch",
      ],
    ],
  },

  prose: {
    title: "Our position on published results",
    blocks: [
      {
        heading: "Why this page has no percentages on it",
        paragraphs: [
          "Our own terms of service state plainly that we cannot guarantee specific results or return on investment. A results page full of guaranteed-sounding figures would contradict that, and under the Central Consumer Protection Authority's 2022 guidelines on misleading advertisements, every claim a business makes must be capable of substantiation with credible evidence.",
          "For healthcare clients there is a second layer. Patient testimonials and outcome claims used promotionally sit close to what Regulation 6.1 of the MCI Code of Ethics restricts, and the consequence of getting that wrong falls on the doctor's registration, not on the agency. We would rather publish a method you can evaluate than numbers you have to take on faith.",
        ],
      },
      {
        heading: "What we will give you instead",
        paragraphs: [
          "Before you commit to anything, you can have a written audit of your current position — search visibility, ad waste, booking friction and reputation — specific to your practice and your catchment. It is the same document we would use to plan the first ninety days, and you keep it whether or not you hire us.",
          "You can also speak to a current client. That conversation will tell you more about how an agency actually behaves in month seven than any case study written by its own marketing team.",
        ],
        bullets: [
          "A written audit of your current position, yours to keep",
          "A reference call with a current client, arranged on request",
          "The measurement plan, agreed before any spend begins",
          "Monthly reporting on the agreed metrics, including the ones that did not move",
        ],
      },
      {
        heading: "When we will publish named results",
        paragraphs: [
          "As clients approve them, and only where the figures are attributable and evidenced. That means a baseline recorded before the work started, attribution instrumented rather than assumed, and the client's written consent to the specific numbers being published.",
          "It is a slower way to build a results page. It is also the only version that survives a prospect who reads carefully — which, in healthcare, is most of them.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Why do you not show client case studies with numbers?",
      answer:
        "Because we only publish figures that are attributable, evidenced and approved by the client in writing, and that takes time to accumulate honestly. Our terms of service state we cannot guarantee specific results, and the CCPA's 2022 guidelines require every advertising claim to be substantiable. A page of impressive percentages would contradict both. Named results will appear here as clients approve them; in the meantime we will arrange a reference call.",
    },
    {
      question: "Can I speak to one of your current clients?",
      answer:
        "Yes. Ask, and we will connect you with a client in a comparable situation — similar practice type, similar problem — so the conversation is actually useful. We would encourage you to ask this of every agency you are considering, and to notice which ones find a reason not to.",
    },
    {
      question: "What results should I realistically expect, and when?",
      answer:
        "Local search and profile work usually moves call volume within six to ten weeks. Paid search produces enquiries within days of correct tracking but stops when you stop paying. Organic content typically becomes the largest channel from month four onward. Operational fixes such as reminder systems tend to show up fastest of all, because they recover demand you have already paid for. Anyone promising ranked results in thirty days is describing something that will not hold.",
    },
    {
      question: "How do you attribute a patient to a marketing channel?",
      answer:
        "With call tracking numbers per channel and per branch, tagged links on every campaign, conversion events fired on calls and confirmed bookings rather than page views, and a key that joins the marketing record to the appointment record. Most practices have none of this when we arrive, which is why their existing reporting cannot answer the question. Building it is usually part of the first month.",
    },
    {
      question: "What if the marketing works but our conversion does not?",
      answer:
        "Then we will tell you that, and the fix will be operational rather than promotional. It is a common finding: enquiries arriving and dying at a busy front desk, or a booking path that fails on a phone. Because we build software as well as run campaigns, we can close that gap rather than handing it back to you as your problem. Spending more on ads into a broken funnel is the most expensive mistake available.",
    },
    {
      question: "Do you work on a performance or commission basis?",
      answer:
        "Generally no, and we would be cautious of anyone in healthcare who does. Performance arrangements create pressure toward whatever is cheapest to acquire rather than what is clinically or commercially right for the practice, and in a regulated advertising environment that pressure is exactly what produces compliance problems. We work on a retainer for marketing and fixed-price scopes for software.",
    },
  ],

  related: {
    title: "Where to go next",
    items: [
      { title: "Healthcare marketing", href: "/healthcare-marketing", body: "The full picture across doctors, clinics and hospitals." },
      { title: "Patient acquisition", href: "/healthcare-marketing/patient-acquisition", body: "Cost per patient, lifetime value and funnel leaks." },
      { title: "Marketing for clinics", href: "/healthcare-marketing/clinics", body: "Local demand and appointment volume." },
      { title: "Marketing for hospitals", href: "/healthcare-marketing/hospitals", body: "Service line growth and admissions." },
      { title: "Custom tools", href: "/custom-tools", body: "The operational side of the funnel." },
      { title: "MedDeskOS", href: "/platform", body: "The front desk and records layer we measure against." },
    ],
  },

  cta: {
    title: "Ask us for the audit, and for a reference",
    body: "Two things worth asking every agency you consider. We will give you a written audit of your current position, and put you on a call with a current client.",
    primary: { label: "Get the free audit", href: "/get-started" },
    secondary: { label: "Request a reference call", href: "/contact" },
  },

  schema: {
    type: "CollectionPage",
    serviceName: "Case Studies and Results Methodology",
    serviceDescription:
      "Monk Mantra's diagnostic method, the six growth problems we are most often hired to fix, and the metrics we report against.",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
