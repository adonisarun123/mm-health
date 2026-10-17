import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Healthcare Marketing Agency",
  description:
    "Monk Mantra is a healthcare marketing agency for doctors, clinics and hospitals in India. Compliant SEO, Google Ads",
  keywords: [
    "healthcare marketing agency",
    "medical marketing agency India",
    "hospital marketing agency",
    "clinic marketing",
    "digital marketing for doctors",
    "patient acquisition marketing",
    "healthcare SEO agency",
  ],
  alternates: { canonical: "/healthcare-marketing" },
  openGraph: {
    title: "Healthcare Marketing Agency for Doctors, Clinics & Hospitals",
    description:
      "Compliant patient acquisition for Indian healthcare providers: SEO, Google Ads, local search, reputation and custom clinic tools.",
    url: "/healthcare-marketing",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/healthcare-marketing",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Healthcare Marketing", path: "/healthcare-marketing" },
  ],
  eyebrow: "Healthcare marketing",
  h1: "Healthcare marketing for doctors, clinics and hospitals",
  answer:
    "Healthcare marketing is the work of making a practice easy to find, easy to trust and easy to book — without breaking medical advertising law. Monk Mantra runs search, local, ads, content and reputation for Indian doctors, clinics and hospitals, and builds the software that turns those enquiries into filled appointment slots.",
  subhead:
    "We work inside the MCI Code of Ethics and the Drugs and Magic Remedies Act rather than pretending they do not exist. That constraint is not a handicap — it is why substance-led practices out-rank the ones buying hype.",
  heroBullets: [
    "Compliant by design, not by disclaimer",
    "Built for Indian search behaviour and local intent",
    "Marketing and software from one team",
    "Reporting in patients booked, not impressions",
  ],
  primaryCta: { label: "Get a free practice audit", href: "/get-started" },
  secondaryCta: { label: "See the front-desk tools", href: "/custom-tools" },

  keyFacts: [
    { label: "Who it is for", value: "Individual doctors, single and multi-location clinics, hospitals and diagnostic chains" },
    { label: "Core channels", value: "Local SEO, organic search, Google Ads, Meta, content, reputation, WhatsApp" },
    { label: "Governing rules", value: "MCI Code of Ethics 2002 (Reg. 6.1), Drugs and Magic Remedies Act 1954, CCPA 2022 guidelines, DPDP Act 2023" },
    { label: "Typical first results", value: "Local visibility and call volume shift in 6–10 weeks; organic compounding from month 4" },
    { label: "Also built in-house", value: "Booking systems, patient CRMs, WhatsApp reminders, dashboards" },
    { label: "Starting from", value: "₹12,000 per month for a doctor, ₹18,000 for a clinic; custom tools from ₹15,000" },
    { label: "Based in", value: "Bengaluru, India — working with practices across India, UAE, UK and US" },
  ],

  pains: {
    title: "Why healthcare marketing fails more often than it works",
    intro:
      "Most healthcare marketing is generic marketing with a stethoscope stock photo attached. The failures are predictable, and all four are fixable.",
    items: [
      {
        problem: "Agencies write cheques your medical council will not cash",
        fix:
          "Superlatives, before-and-after photos, cure guarantees and patient testimonials used as advertising are restricted under Regulation 6.1 of the MCI Code of Ethics, and over fifty conditions cannot be advertised to the public at all under the Drugs and Magic Remedies Act. We build campaigns that never rely on those levers.",
      },
      {
        problem: "The Google Business Profile is the real front door and nobody owns it",
        fix:
          "For a clinic, more first contacts start in the map pack than on the website. We treat the profile as a product: categories, services, hours, photos, Q&A, booking links, review velocity and response — reviewed every month, not set up once.",
      },
      {
        problem: "Ads run on brand names and specialty jargon patients never type",
        fix:
          "Patients search symptoms, cost, location and reassurance — not procedure codes. We rebuild keyword sets around how people actually describe their problem at 11pm, and cut the spend that only buys clicks from other clinics.",
      },
      {
        problem: "Enquiries arrive and then quietly die at the front desk",
        fix:
          "A missed call at 7pm is a lost patient. We instrument the whole path — call tracking, WhatsApp follow-up, booking confirmation, reminders — and where the off-the-shelf tools do not fit, we build the missing piece ourselves.",
      },
    ],
  },

  offerings: {
    title: "Pick the page that matches your practice",
    intro:
      "The playbook for a solo consultant is not the playbook for a 300-bed hospital. Each of these goes deep on one situation.",
    items: [
      {
        icon: "Stethoscope",
        title: "Marketing for individual doctors",
        body: "Reputation, personal authority and referral flow for consultants and specialists — inside what the ethics code actually allows.",
        href: "/healthcare-marketing/doctors",
      },
      {
        icon: "HeartPulse",
        title: "Marketing for clinics",
        body: "Local search, map pack dominance and appointment volume for single and multi-location clinics.",
        href: "/healthcare-marketing/clinics",
      },
      {
        icon: "Building2",
        title: "Marketing for hospitals",
        body: "Department-level demand, service line growth, brand trust and referral marketing for hospitals and health systems.",
        href: "/healthcare-marketing/hospitals",
      },
      {
        icon: "Search",
        title: "SEO for doctors and clinics",
        body: "Condition and symptom-led content, technical health, entity building and the medical review process that earns trust.",
        href: "/healthcare-marketing/seo-for-doctors",
      },
      {
        icon: "MapPin",
        title: "Local SEO and Google Business Profile",
        body: "The single highest-return channel for any practice with a physical address. Ranked in the map pack, not just on page one.",
        href: "/healthcare-marketing/local-seo-for-clinics",
      },
      {
        icon: "Megaphone",
        title: "Google Ads for healthcare",
        body: "Paid search that survives healthcare policy review and buys appointments instead of clicks.",
        href: "/healthcare-marketing/google-ads-for-doctors",
      },
      {
        icon: "Star",
        title: "Reputation management",
        body: "Review generation that stays ethical, response systems, and repair when a bad month lands on your profile.",
        href: "/healthcare-marketing/reputation-management",
      },
      {
        icon: "UserPlus",
        title: "Patient acquisition systems",
        body: "The full funnel — from first search to booked, attended and followed-up appointment — measured end to end.",
        href: "/healthcare-marketing/patient-acquisition",
      },
      {
        icon: "Cpu",
        title: "Custom tools for practices",
        body: "Booking, reminders, patient CRM, dashboards and intake — built to fit your workflow, priced for a clinic.",
        href: "/custom-tools",
      },
    ],
  },

  process: {
    title: "How an engagement actually runs",
    intro:
      "No ninety-day discovery phase. We find the leaks first, fix the cheap ones immediately, then build the compounding assets.",
    items: [
      {
        duration: "Week 1",
        title: "Audit and baseline",
        body:
          "We map what you rank for, what you pay for, what your profile looks like to a patient searching at midnight, and where enquiries drop. You get the findings in writing whether or not you hire us.",
      },
      {
        duration: "Weeks 2–4",
        title: "Fix the leaks",
        body:
          "Google Business Profile rebuilt, tracking installed properly, obvious ad waste cut, booking path unblocked, compliance risks removed from live copy. This is where most of the early lift comes from.",
      },
      {
        duration: "Months 2–4",
        title: "Build the demand engine",
        body:
          "Condition and location pages, medically reviewed content, structured data, review systems and campaigns that target intent rather than vanity keywords.",
      },
      {
        duration: "Ongoing",
        title: "Measure in patients, then compound",
        body:
          "Monthly reporting tied to enquiries, bookings and attended appointments. Where a tool is the bottleneck, our engineering side builds it rather than adding another subscription.",
      },
    ],
  },

  table: {
    caption: "What each type of practice should prioritise first",
    columns: ["Practice type", "Highest-return first move", "Main constraint", "Typical timeline to signal"],
    rows: [
      [
        "Solo doctor / consultant",
        "Google Business Profile, factual authority pages, review flow",
        "Regulation 6.1 limits self-promotion",
        "6–8 weeks",
      ],
      [
        "Single-location clinic",
        "Local SEO plus tightly geofenced Google Ads",
        "Small catchment; every wasted click hurts",
        "6–10 weeks",
      ],
      [
        "Multi-location clinic group",
        "Location page architecture and per-branch profiles",
        "Cannibalisation between branches",
        "3–4 months",
      ],
      [
        "Hospital / health system",
        "Service line pages and department-level demand capture",
        "Internal approvals; many stakeholders",
        "4–6 months",
      ],
      [
        "Diagnostic centre / lab",
        "Test and package pages, price transparency, home-collection intent",
        "Price-led competition",
        "8–12 weeks",
      ],
    ],
  },

  prose: {
    title: "What good healthcare marketing looks like in India",
    blocks: [
      {
        heading: "The legal frame most agencies skip",
        paragraphs: [
          "Advertising by doctors in India is governed primarily by Regulation 6.1 of the Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002. It prohibits soliciting patients directly or indirectly, and prohibits self-promotion that touts or exaggerates. The National Medical Commission notified a replacement — the Registered Medical Practitioner (Professional Conduct) Regulations, 2023 — in August 2023, but placed it in abeyance within weeks. The 2002 code therefore remains the operative standard, while the 2023 draft is a fair signal of where the regulator is heading, particularly on social media conduct.",
          "Two other instruments matter just as much. The Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954 makes it a criminal offence to advertise treatment to the public for a long schedule of conditions — infertility, obesity, diabetes, cancer, sexual disorders and many more. And the Central Consumer Protection Authority's 2022 guidelines on misleading advertisements require every claim to be capable of substantiation, with material limitations disclosed rather than buried.",
          "None of this stops a practice from growing. It stops a practice from growing the lazy way. Superlatives, cure guarantees, before-and-after galleries and testimonial-led ad campaigns are off the table. Being genuinely the most findable, best explained and most responsive option in your catchment is not.",
        ],
        bullets: [
          "Factual announcements of qualifications, location, conditions treated, hours and fees are permitted",
          "Health education content that explains a condition and general options is permitted",
          "Reviews earned without inducement, and answered professionally, are permitted",
          "\"Best\", \"number one\", \"100% cure\" and \"painless\" are not",
        ],
      },
      {
        heading: "Patients do not search the way clinics write",
        paragraphs: [
          "A clinic writes \"advanced arthroscopic intervention\". A patient types \"knee pain can't climb stairs doctor near me\". The gap between those two sentences is where most healthcare marketing budgets die. Every content and keyword decision we make starts from the patient's own language — symptom first, worry second, cost third, credential fourth.",
          "This is also why answer engines matter now. A growing share of health queries never reach a blue link: they are answered inside Google's AI overviews, ChatGPT or Perplexity. The pages that get cited in those answers are the ones that state a direct answer in the first paragraph, show a named clinician behind the content, structure facts so a machine can lift them, and avoid the promotional padding that models learn to discount.",
        ],
      },
      {
        heading: "Marketing that stops at the enquiry is half a service",
        paragraphs: [
          "Most agencies hand over a lead and call it a win. In a clinic, the lead is the easy part. The hard part is that the phone rang during a consultation, the receptionist was mid-billing, the patient called the next clinic on the list, and nobody ever knew.",
          "Because we build software as well as run campaigns, we can close that gap directly — a booking widget that actually reflects your slot rules, WhatsApp confirmations and reminders that cut no-shows, an intake form that populates your records instead of a spreadsheet, a dashboard that shows enquiries against attended appointments. Built for a specific practice, delivered in weeks, and priced far below enterprise hospital software.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Can doctors legally advertise in India?",
      answer:
        "Doctors cannot solicit patients or advertise themselves in a way that touts or exaggerates, under Regulation 6.1 of the MCI Code of Ethics 2002, which remains the operative rule after the NMC's 2023 replacement was placed in abeyance. Factual information is permitted: qualifications, registration, specialties, conditions treated, address, hours and fees. Clinical establishments have somewhat more latitude than individual practitioners, but the Drugs and Magic Remedies Act and CCPA misleading-advertisement guidelines still apply to everyone.",
    },
    {
      question: "How long before healthcare marketing produces patients?",
      answer:
        "Local search and Google Business Profile work usually moves call volume within six to ten weeks because you are competing in a small geographic pool. Paid search can produce enquiries in days but stops the moment you stop paying. Organic content compounds slowly and typically becomes the largest channel from month four onward. Any agency promising ranked results in thirty days is selling you something that will not hold.",
    },
    {
      question: "What does healthcare marketing cost for a clinic in India?",
      answer:
        "For a single-location clinic, a programme starts from about ₹18,000 per month in retainer, plus ad spend, and scales with catchment size and how many services you want visibility for. Hospitals and multi-location groups run higher because the work spans service lines and locations. We would rather scope against your catchment size and appointment capacity than quote a package blindly — a clinic that can only take forty new patients a month should not be buying demand for two hundred.",
    },
    {
      question: "Do you handle HIPAA compliance?",
      answer:
        "HIPAA is United States law and does not apply to a practice operating in India. The relevant framework here is the Digital Personal Data Protection Act, 2023, with its Rules notified in November 2025 and phasing in obligations around consent notices, breach reporting and children's data. If you also serve US patients, we structure the US-facing side to HIPAA expectations separately. Be cautious of any Indian agency that advertises HIPAA compliance as its main credential — it usually means the site copy was lifted from an American template.",
    },
    {
      question: "Can you work with a practice that has no website yet?",
      answer:
        "Yes, and it is often the cleaner starting point. We build the site and the booking layer together rather than retrofitting marketing onto a template that was never designed to convert. A practice launching from zero can be visible in local search well before a competitor finishes migrating an old site.",
    },
    {
      question: "Do you only work with healthcare clients?",
      answer:
        "No. Monk Mantra also works with D2C, ecommerce, SaaS, hospitality, real estate and other sectors. Healthcare is where we go deepest because the compliance constraints and the software gap reward specialisation, but the performance discipline is the same across sectors.",
    },
  ],

  related: {
    title: "Go deeper",
    items: [
      { title: "Marketing for individual doctors", href: "/healthcare-marketing/doctors", body: "Authority, reputation and referrals for consultants and specialists." },
      { title: "Marketing for clinics", href: "/healthcare-marketing/clinics", body: "Local demand and appointment volume for single and multi-branch clinics." },
      { title: "Marketing for hospitals", href: "/healthcare-marketing/hospitals", body: "Service line growth and department-level demand capture." },
      { title: "Custom tools for healthcare", href: "/custom-tools", body: "Booking, reminders, CRM and dashboards built for your workflow." },
      { title: "SEO for doctors and clinics", href: "/healthcare-marketing/seo-for-doctors", body: "How medical content earns rankings and citations in AI answers." },
      { title: "Patient acquisition systems", href: "/healthcare-marketing/patient-acquisition", body: "The measured path from search to attended appointment." },
    ],
  },

  cta: {
    title: "Find out what your practice is losing before you spend a rupee",
    body: "Send us your clinic name or website. We will send back a written audit of your local visibility, ad waste and booking friction — specific to your catchment, not a template.",
    primary: { label: "Get the free audit", href: "/get-started" },
    secondary: { label: "Book a 30-minute call", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Healthcare Marketing Services",
    serviceType: "Healthcare Digital Marketing",
    audienceType: "Doctors, clinics, hospitals and diagnostic centres",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
