import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Digital Marketing for Doctors",
  description:
    "Digital marketing for individual doctors in India: build authority, earn reviews, rank for the conditions you treat and fill your consulting hours",
  keywords: [
    "digital marketing for doctors",
    "marketing for doctors India",
    "doctor marketing agency",
    "personal branding for doctors",
    "how to get more patients as a doctor",
    "SEO for doctors",
    "online reputation for doctors",
  ],
  alternates: { canonical: "/healthcare-marketing/doctors" },
  openGraph: {
    title: "Digital Marketing for Doctors — Ethical Patient Growth",
    description:
      "Authority, reputation and referral flow for individual consultants and specialists, inside medical advertising rules.",
    url: "/healthcare-marketing/doctors",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/healthcare-marketing/doctors",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Healthcare Marketing", path: "/healthcare-marketing" },
    { name: "For Doctors", path: "/healthcare-marketing/doctors" },
  ],
  eyebrow: "For individual doctors",
  h1: "Digital marketing for doctors, without breaching the ethics code",
  answer:
    "Marketing for an individual doctor is reputation engineering, not advertising. It means being findable for the conditions you treat, having a factual and credible presence patients can verify, earning reviews honestly, and making it effortless to book you. Monk Mantra builds that for consultants and specialists across India.",
  subhead:
    "Regulation 6.1 of the MCI Code of Ethics forbids soliciting patients and self-promotional puffery. It does not forbid being the clearest, most credible and most easily found doctor in your city. That distinction is the entire strategy.",
  heroBullets: [
    "No superlatives, no cure claims, no testimonial ads",
    "Built around the conditions you actually treat",
    "Referral and reputation flow, not lead-farm traffic",
    "Designed for a doctor's time budget — under two hours a month",
  ],
  primaryCta: { label: "Get a free visibility audit", href: "/get-started" },
  secondaryCta: { label: "Compare clinic and hospital plans", href: "/healthcare-marketing" },

  keyFacts: [
    { label: "Best suited to", value: "Consultants, specialists, surgeons and visiting doctors building a personal practice" },
    { label: "Primary channels", value: "Google Business Profile, condition-led content, professional profiles, reviews, referral network" },
    { label: "What we avoid", value: "Solicitation, superlatives, guaranteed outcomes, before-and-after imagery, testimonial advertising" },
    { label: "Your time commitment", value: "Roughly 60–120 minutes a month for clinical review and recording" },
    { label: "First signal", value: "Profile and branded search movement in 4–6 weeks" },
    { label: "Starting from", value: "₹12,000 per month, scaling with how many conditions you want covered" },
    { label: "Governing rule", value: "MCI Code of Ethics 2002, Regulation 6.1 (NMC 2023 regulations remain in abeyance)" },
  ],

  pains: {
    title: "The four things that hold individual doctors back",
    intro:
      "A consultant's growth problem is almost never a lack of skill. It is that the skill is invisible to everyone outside the referral circle.",
    items: [
      {
        problem: "You are excellent and completely unfindable",
        fix:
          "A patient searching your specialty and city sees aggregator listings, hospital pages and three competitors. You appear on page four, if at all. We fix the entity layer first: a complete Google Business Profile, consistent details across every directory, and pages that name the conditions you treat in the words patients use.",
      },
      {
        problem: "Your online identity is written by third parties",
        fix:
          "Aggregator platforms rank for your name, control your reviews and charge you for your own patients. We build a first-party presence strong enough to out-rank your own listing on those platforms, so the patient reaches you directly.",
      },
      {
        problem: "Every agency pitch would put your registration at risk",
        fix:
          "\"Best cardiologist in Bangalore\" is a Regulation 6.1 problem. Fertility, obesity and diabetes ads are a Drugs and Magic Remedies Act problem. We write to a compliance checklist and will tell you no when a tactic is not worth the exposure.",
      },
      {
        problem: "Referrals are your whole pipeline and entirely informal",
        fix:
          "Referring doctors also search. A clear, factual profile explaining what you take on, what you do not, and how to refer makes you the easy choice — and gives GPs something to send a patient to.",
      },
    ],
  },

  offerings: {
    title: "What we build for an individual practice",
    items: [
      {
        icon: "MapPin",
        title: "Google Business Profile as a product",
        body: "Correct primary and secondary categories, services mapped to conditions, hours, photos, booking link, Q&A seeded with real questions, and monthly review of what patients search to find you.",
      },
      {
        icon: "FileText",
        title: "Condition and procedure pages",
        body: "One page per condition you treat, answering what it is, when to see someone, what the options generally are, and what a consultation with you involves. Written for the patient, reviewed by you.",
      },
      {
        icon: "BadgeCheck",
        title: "Verifiable authority layer",
        body: "Registration number, qualifications, fellowships, hospital affiliations, publications and speaking — structured so both patients and search engines can confirm you are who you say you are.",
      },
      {
        icon: "Star",
        title: "Ethical review generation",
        body: "A post-consultation flow that invites feedback from every patient without inducement or filtering, plus professional responses that never disclose clinical detail.",
      },
      {
        icon: "Search",
        title: "Name and specialty search control",
        body: "Own the first page for your own name. Push aggregator profiles and stale listings below your site, and correct the ones you cannot displace.",
      },
      {
        icon: "Video",
        title: "Low-effort content production",
        body: "One recording session gives us a quarter of material — short explainers, article drafts you approve, and answers to the questions your front desk hears every week.",
      },
      {
        icon: "Share2",
        title: "Referral-facing material",
        body: "A clear referral page and a short PDF that tells other clinicians exactly what you take, your turnaround, and how to reach you without going through a switchboard.",
      },
      {
        icon: "CalendarCheck",
        title: "Frictionless booking",
        body: "A booking path that respects your real slot rules, sends WhatsApp confirmations and reminders, and stops enquiries dying on a missed call.",
        href: "/custom-tools/for-doctors",
      },
      {
        icon: "LineChart",
        title: "Reporting that means something",
        body: "Calls, direction requests, form fills, booked consultations and where each came from. Not impressions.",
      },
    ],
  },

  process: {
    title: "A doctor's engagement, start to steady state",
    intro: "Designed around the fact that your billable hour is worth more than any meeting we could book.",
    items: [
      {
        duration: "Week 1",
        title: "Audit and one conversation",
        body:
          "We review your current visibility, your name search results, aggregator listings and any live marketing for compliance risk. One 45-minute call establishes what you treat, what you want more of, and what you want less of.",
      },
      {
        duration: "Weeks 2–5",
        title: "Foundation build",
        body:
          "Profile rebuilt, site or landing presence live, authority and credential layer structured, review flow installed, booking path connected. You review clinical accuracy; we handle everything else.",
      },
      {
        duration: "Months 2–5",
        title: "Condition coverage",
        body:
          "We publish and refine one cluster of condition pages at a time, each medically reviewed by you, until you cover the full range of what you want to be found for.",
      },
      {
        duration: "Ongoing",
        title: "Maintain and compound",
        body:
          "Monthly profile maintenance, review responses, content refresh, and a short report. Your input stays at roughly an hour a month.",
      },
    ],
  },

  table: {
    caption: "Compliant versus non-compliant: the same goal, two approaches",
    columns: ["Goal", "What most agencies do", "What is actually permitted", "Why it matters"],
    rows: [
      [
        "Establish credibility",
        "\"Best cardiologist in the city\", award badges of unclear origin",
        "Stated qualifications, registration number, fellowships, verifiable affiliations",
        "Superlatives breach Reg. 6.1 and are unsubstantiable under CCPA guidelines",
      ],
      [
        "Show results",
        "Before-and-after galleries, patient success stories as ads",
        "General explanation of what a procedure involves and typical recovery",
        "Patient imagery and testimonial advertising are restricted",
      ],
      [
        "Attract fertility or weight patients",
        "Targeted ads promising conception or fat loss",
        "Educational content explaining causes and when to seek help",
        "Both conditions sit in the Drugs and Magic Remedies Act schedule",
      ],
      [
        "Collect reviews",
        "Incentivised reviews, filtering out unhappy patients",
        "Uniform post-visit invitation to every patient, professional replies",
        "Gating reviews breaches platform policy and consumer law",
      ],
      [
        "Get found for a symptom",
        "Keyword stuffing procedure names",
        "Answer the patient's actual question first, in their words",
        "This is also what gets you cited in AI answers",
      ],
    ],
  },

  prose: {
    title: "How doctors actually grow a practice online",
    blocks: [
      {
        heading: "Authority is a structure, not a claim",
        paragraphs: [
          "Search engines and answer engines both try to establish the same thing a patient does: is this person real, qualified, and the kind of clinician who should be answering this question. You cannot assert your way past that check. You build it — a registration number that resolves, qualifications that match the council register, hospital affiliations that appear on the hospital's own site, publications with DOIs, and content that carries a named reviewer with credentials.",
          "This is why generic \"personal branding\" packages fail doctors. A logo and a content calendar do not create verifiability. A consistent, cross-referenced identity does, and it is also what makes a large language model comfortable naming you in an answer rather than describing a category.",
        ],
      },
      {
        heading: "Write for the eleven o'clock at night search",
        paragraphs: [
          "Patients rarely search in clinical language. They search in fear and description: what a lump might mean, why a pain is worse at night, whether a symptom warrants an emergency visit, what a procedure will cost, whether they will be able to work the next day. Content that answers those questions plainly, and then says clearly when to see someone, does two things at once — it ranks, and it pre-qualifies the patient who walks in.",
          "It also does something the compliance code likes. Explaining a condition and its general options is health education, not solicitation. It is the one form of content a doctor can publish generously without approaching the line, and it happens to be the exact format that AI overviews and chat assistants lift answers from.",
        ],
        bullets: [
          "Lead with the direct answer in the first two sentences",
          "Say who should not act on the information and when to seek care",
          "Name the reviewing clinician and the review date on every clinical page",
          "Use plain language for the symptom and the clinical term alongside it",
        ],
      },
      {
        heading: "Protect the hour, automate the rest",
        paragraphs: [
          "The reason most doctor marketing stalls is not budget. It is that it requires the doctor, and the doctor is in theatre. Any programme that needs weekly content from you will quietly die by month three.",
          "So we build around a fixed, small time commitment: one recording session per quarter, one clinical review pass per content batch, and asynchronous approval for everything else. Where a workflow keeps stealing your attention — chasing confirmations, re-entering intake details, following up on reports — we build a tool to take it off your desk instead of adding another thing for you to log into.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Is it legal for a doctor in India to do digital marketing?",
      answer:
        "Yes, within limits. Regulation 6.1 of the MCI Code of Ethics 2002 prohibits soliciting patients and self-promotion that touts or exaggerates, and it remains the operative rule because the NMC's 2023 replacement regulations were placed in abeyance shortly after notification. Factual presence is expressly allowed: your name, qualifications, registration, specialty, conditions treated, address, hours and fees. Health education content, a professional website, an accurate Google Business Profile and genuinely earned reviews all sit on the permitted side of that line.",
    },
    {
      question: "How do doctors get more patients online without advertising themselves?",
      answer:
        "By being the most findable and best explained option rather than the loudest. In practice that means a complete and actively maintained Google Business Profile, a page for each condition you treat written in the patient's language, a verifiable credential layer, a steady flow of honestly earned reviews, and a booking path that works on a phone at midnight. None of that constitutes solicitation, and it consistently outperforms advertising for consultants because patients choosing a doctor are researching, not impulse buying.",
    },
    {
      question: "Should I list on Practo and similar platforms or build my own presence?",
      answer:
        "Both, but with a clear hierarchy. Aggregators give you reach you cannot ignore, so keep those profiles accurate. The problem is that they rank for your own name, own the patient relationship and charge you for it. The goal is to make your own site and Google Business Profile the top two results for your name and specialty, so the aggregator becomes a secondary channel rather than your landlord.",
    },
    {
      question: "How much does marketing cost for an individual doctor?",
      answer:
        "A focused programme for a single consultant starts from about ₹12,000 per month, rising with how many conditions you want coverage for and whether paid search is part of the mix. Website and booking build is usually a separate one-time cost. We would rather size this against your consulting capacity than sell a package — there is no point generating demand for slots you do not have.",
    },
    {
      question: "Can you help if a negative review or news item is ranking for my name?",
      answer:
        "Often, yes. The realistic outcome is displacement rather than deletion: we build enough credible, indexable first-party material that the negative item drops below the fold, and we make sure your response to it is professional and visible. Where a review breaches platform policy — it is fabricated, from a non-patient, or contains clinical detail — we handle the removal request. Anyone promising guaranteed deletion is overselling.",
    },
    {
      question: "Do I need my own website if I already practise at a hospital?",
      answer:
        "It helps considerably. The hospital page ranks for the hospital, follows the hospital's priorities, and disappears the day you move. A first-party presence is the asset you keep — and it is what allows you to build condition-level coverage and referral material the hospital would never publish for one consultant.",
    },
  ],

  related: {
    title: "Related pages",
    items: [
      { title: "Marketing for clinics", href: "/healthcare-marketing/clinics", body: "When you run a practice with a front desk and multiple providers." },
      { title: "SEO for doctors and clinics", href: "/healthcare-marketing/seo-for-doctors", body: "The mechanics of ranking medical content." },
      { title: "Reputation management", href: "/healthcare-marketing/reputation-management", body: "Reviews, response systems and search result repair." },
      { title: "Custom tools for doctors", href: "/custom-tools/for-doctors", body: "Booking, reminders and intake built around a single practice." },
      { title: "Google Ads for healthcare", href: "/healthcare-marketing/google-ads-for-doctors", body: "When paid search is worth it for a consultant, and when it is not." },
      { title: "Healthcare marketing overview", href: "/healthcare-marketing", body: "The full picture across doctors, clinics and hospitals." },
    ],
  },

  cta: {
    title: "See exactly where patients are losing you",
    body: "We will run your name, your specialty and your city, and send you a written breakdown of what a patient actually finds — and what it would take to change it.",
    primary: { label: "Request my visibility audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Digital Marketing for Doctors",
    serviceType: "Medical Practice Marketing",
    audienceType: "Individual doctors, consultants and specialists",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
