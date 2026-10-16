import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Google Ads for Doctors & Clinics",
  description:
    "Google Ads for doctors and clinics in India: policy-safe campaign structure, call-only ads, realistic geofencing",
  keywords: [
    "Google Ads for doctors",
    "PPC for healthcare",
    "Google Ads for clinics",
    "healthcare PPC agency",
    "medical Google Ads",
    "call only ads for clinics",
  ],
  alternates: { canonical: "/healthcare-marketing/google-ads-for-doctors" },
  openGraph: {
    title: "Google Ads for Doctors — Healthcare PPC That Books Patients",
    description:
      "Policy-safe healthcare paid search: call-only campaigns, tight geofencing, negative keyword discipline and tracking on appointments rather than form views.",
    url: "/healthcare-marketing/google-ads-for-doctors",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/healthcare-marketing/google-ads-for-doctors",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Healthcare Marketing", path: "/healthcare-marketing" },
    { name: "Google Ads for Doctors", path: "/healthcare-marketing/google-ads-for-doctors" },
  ],
  eyebrow: "Healthcare paid search",
  h1: "Google Ads for doctors, run inside the policy",
  answer:
    "Google Ads for doctors is paid search built around two constraints: Google's healthcare and medicines policy limits what a medical advertiser may promote, and its personalised advertising rules prohibit targeting people by inferred health status. Within those limits, tightly geofenced search and call-only campaigns can fill specific open clinic capacity within days.",
  subhead:
    "Paid search is the fastest channel available to a clinic and the easiest to waste. Most of the waste is structural — wrong radius, wrong keyword intent, wrong conversion definition — not creative.",
  heroBullets: [
    "Campaigns built to Google's healthcare policy, not around it",
    "Call-only campaigns for the queries that convert on a phone",
    "Geofencing by realistic travel radius per service, not by city",
    "Conversion tracking on calls and bookings, never on form views",
  ],
  primaryCta: { label: "Get a free ad account audit", href: "/get-started" },
  secondaryCta: { label: "See the clinic programme", href: "/healthcare-marketing/clinics" },

  keyFacts: [
    { label: "What it is best at", value: "Filling specific open capacity fast — a new branch, a new service, an empty afternoon" },
    { label: "What it is bad at", value: "Building a durable practice on its own; demand stops the day you pause" },
    { label: "Hard constraint", value: "Google prohibits personalised targeting based on inferred health conditions" },
    { label: "Typical structure", value: "Search on procedure intent, call-only on urgent intent, remarketing limited to non-health pages" },
    { label: "Measured on", value: "Cost per booked appointment and per attended appointment, not cost per click or lead" },
    { label: "Starting from", value: "₹12,000 per month management, scoped to the account not to your ad spend" },
    { label: "Indian regulatory frame", value: "MCI Reg. 6.1, Drugs and Magic Remedies Act 1954, CCPA 2022 guidelines" },
  ],

  pains: {
    title: "Why most medical ad accounts lose money",
    intro:
      "Every underperforming healthcare account we inherit has at least three of these four. None of them are visible in a dashboard that reports clicks.",
    items: [
      {
        problem: "The radius is a city, the patient travels four kilometres",
        fix:
          "Nobody crosses Bengaluru for a dental cleaning or a routine consultation. City-wide targeting spends most of the budget on people who will never attend. We set the radius per service against realistic travel behaviour: tight for routine care, wider for high-value specialist procedures people genuinely travel for.",
      },
      {
        problem: "The account is buying information seekers, not patients",
        fix:
          "Symptom queries are cheap and mostly research. Procedure and provider queries cost more and book. Both belong in the account, but in separate campaigns with separate budgets and separate expectations — mixing them makes the whole account look mediocre and hides which half works.",
      },
      {
        problem: "No negative keyword list, so you fund a careers page",
        fix:
          "Medical terms attract students, job seekers and the merely curious. Without a maintained negative list — jobs, salary, vacancy, course, syllabus, meaning, definition, images, free, PDF — a meaningful share of a clinic's budget goes to people who will never book anything.",
      },
      {
        problem: "The conversion being optimised is a form view",
        fix:
          "If the account counts landing page visits or form loads as conversions, automated bidding optimises toward whatever produces those cheaply, which is rarely a patient. Conversions must be calls of qualifying duration, completed bookings and, where you can close the loop, attended appointments.",
      },
    ],
  },

  offerings: {
    title: "What we run in a healthcare ad account",
    items: [
      {
        icon: "ShieldCheck",
        title: "Policy and compliance review",
        body: "Every ad, extension and landing page checked against Google's healthcare and medicines policy, Regulation 6.1 of the MCI Code, the Drugs and Magic Remedies Act schedule and the CCPA 2022 misleading advertisement guidelines before anything goes live.",
      },
      {
        icon: "Target",
        title: "Intent-separated campaign structure",
        body: "Procedure intent, provider and brand intent, near-me intent and symptom research kept in separate campaigns with their own budgets, so a cheap research click never disguises an expensive procedure campaign that is actually working.",
      },
      {
        icon: "PhoneCall",
        title: "Call-only campaigns",
        body: "For urgent and near-me queries where the patient wants to speak to someone now. No landing page in the path, ad scheduling matched to when the phone is genuinely answered, and conversions counted only past a qualifying call duration.",
      },
      {
        icon: "MapPin",
        title: "Realistic geofencing",
        body: "Radius set per service against how far patients actually travel for it, with bid adjustments by area, and presence-based targeting so you pay for people in the catchment rather than people reading about it.",
      },
      {
        icon: "FileText",
        title: "Landing page match",
        body: "One page per ad group intent, answering the query it was matched to, with the booking action visible without scrolling and a phone number that is tracked. Sending every campaign to a homepage is the most expensive shortcut in paid search.",
      },
      {
        icon: "Settings2",
        title: "Negative keyword discipline",
        body: "Shared negative lists across the account covering employment, academic, definitional and DIY queries, plus a monthly search term review that keeps adding to them. This is maintenance work and it never stops paying.",
      },
      {
        icon: "BarChart3",
        title: "Conversion tracking that reflects reality",
        body: "Call tracking with duration thresholds, booking completions, WhatsApp conversation starts, and where your systems allow it, offline import so the account can optimise toward patients who actually attended.",
      },
      {
        icon: "Wallet",
        title: "Budget pacing against capacity",
        body: "Spend directed at services with open slots and viable margin, pulled back where you are already full. Generating demand you cannot serve produces a waiting list and poor reviews, not growth.",
      },
      {
        icon: "LineChart",
        title: "Honest reporting",
        body: "Cost per booked appointment and per attended appointment by campaign and service. If a campaign is not producing patients we will say so and recommend stopping it rather than restructuring it a fourth time.",
      },
    ],
  },

  process: {
    title: "How an account gets built",
    intro: "Measurement first. Launching before conversion tracking is correct means the first month teaches you nothing.",
    items: [
      {
        duration: "Week 1",
        title: "Audit, tracking and policy pass",
        body:
          "We review the existing account or start clean, install call tracking and booking conversions properly, verify what the front desk actually does with a call, and clear every planned ad and landing page against policy and Indian advertising rules.",
      },
      {
        duration: "Weeks 2–3",
        title: "Build and launch small",
        body:
          "Campaigns built by intent with tight geofencing, negative lists in place from day one, call-only variants where the query pattern justifies them, and landing pages matched per ad group. Launch on a controlled budget rather than the full one.",
      },
      {
        duration: "Weeks 4–8",
        title: "Search term discipline",
        body:
          "Weekly search term reviews, negatives added, bids and radii adjusted by area performance, ad copy tested on the campaigns with enough volume to learn from. Most of the account's efficiency gain happens in this phase.",
      },
      {
        duration: "Ongoing",
        title: "Scale only what proves out",
        body:
          "Budget moves toward campaigns producing attended appointments at a viable cost and away from the rest. We review against your actual capacity monthly, because an ad account that ignores the appointment book is just an expensive way to annoy patients.",
      },
    ],
  },

  table: {
    caption: "Campaign types for healthcare compared",
    columns: ["Campaign type", "Speed to results", "Control", "Risk in healthcare", "Best used for"],
    rows: [
      [
        "Google Search",
        "Days",
        "High — you choose keywords, match types, geography and schedule",
        "Low, provided negatives and policy review are in place",
        "The default for procedure, provider and near-me intent with genuine booking value",
      ],
      [
        "Call-only",
        "Immediate",
        "High, but limited to when the phone is answered",
        "Low; the main risk is unanswered calls, which is an operations problem",
        "Urgent and near-me queries, older patient demographics, clinics with a reliable front desk",
      ],
      [
        "Performance Max",
        "1–3 weeks after learning",
        "Low — placements, queries and audiences are largely automated",
        "Higher: limited query visibility and creative placed where you cannot fully review context",
        "Established accounts with clean conversion data and a broad service mix, never a starting point",
      ],
      [
        "Meta and Instagram",
        "Days",
        "Moderate on creative and geography, weak on intent",
        "Higher: health-adjacent targeting is restricted and creative review is stricter",
        "Awareness for a new branch, elective and aesthetic services, event and camp promotion",
      ],
      [
        "Remarketing",
        "Days",
        "Moderate",
        "High — lists built from condition or treatment pages fall foul of personalised advertising policy",
        "Limited to non-health pages such as general site or contact visitors, if used at all",
      ],
      [
        "Google Business Profile and map",
        "6–10 weeks",
        "Moderate",
        "Very low",
        "The compounding foundation every clinic should have running underneath the paid account",
      ],
    ],
  },

  prose: {
    title: "The constraints that shape a medical ad account",
    blocks: [
      {
        heading: "You cannot target people by their health",
        paragraphs: [
          "Google's personalised advertising policy places health conditions in its sensitive categories. In plain terms, you may not build or use audiences that segment people by an inferred medical condition — not for remarketing, not for similar audiences, not for interest targeting. This is a policy line, not a technical limitation, and accounts that cross it get restricted rather than warned.",
          "The practical consequence catches most clinics by surprise: a remarketing list built from visitors to your fertility, oncology, HIV, de-addiction or mental health pages is exactly the kind of list the policy exists to prevent. So is a customer list uploaded from patients of a particular department. The workable alternative is intent-based and non-personalised — target the search query, which reflects what someone is asking right now, rather than a profile of what you believe they have.",
          "Where remarketing is used at all in a healthcare account, it should be built from pages that carry no condition signal: the homepage, a contact page, a general about page. Even then, the creative must not reference a condition.",
        ],
        bullets: [
          "No audience segmentation on inferred health status",
          "No remarketing lists built from condition or treatment pages",
          "No customer match lists derived from a clinical department",
          "Target the query and the geography instead of the person",
        ],
      },
      {
        heading: "Symptom intent and procedure intent are different businesses",
        paragraphs: [
          "Someone searching a symptom is early, anxious and comparing nothing. Clicks are cheap, volume is high, and the conversion rate to a booked appointment is low. Someone searching a procedure plus a location has decided what they need and is choosing where. Clicks cost several times more and book at a far higher rate.",
          "Both have a place, but they must never share a campaign. Mixed together, automated bidding optimises against a blended average that represents neither, and reporting shows a mediocre cost per lead that hides an excellent procedure campaign subsidising a wasteful research one.",
          "For most clinics starting out, procedure and provider intent should carry the budget, near-me and urgent intent should run as call-only, and symptom intent belongs in organic content rather than paid search — it is the same audience at a tenth of the cost, if you are willing to wait for it.",
        ],
      },
      {
        heading: "Call-only campaigns suit clinics better than most agencies admit",
        paragraphs: [
          "A large share of healthcare search happens on a phone, from someone who wants to speak to a person rather than fill in a form. Call-only ads remove the landing page from that path entirely: the ad is a phone number, the click is a call.",
          "They work when three things are true. The phone is answered reliably during the hours the ads run, someone at the desk can actually book rather than just take a message, and conversions are counted only past a duration threshold that filters out wrong numbers. Where a clinic cannot answer the phone at 1pm and 7pm — and a great many cannot — call-only ads will fail, and the honest fix is a WhatsApp or booking fallback plus a change in staffing rather than a bigger budget.",
        ],
      },
      {
        heading: "What Indian rules add on top of Google's",
        paragraphs: [
          "Google's policy is not the only constraint. Regulation 6.1 of the MCI Code of Ethics 2002 remains the operative rule for registered practitioners — the NMC's 2023 professional conduct regulations were notified in August 2023 and then placed in abeyance, so they are not in force. Reg. 6.1 restricts soliciting patients and self-promotional puffery, which rules out superlatives and comparative claims in ad copy.",
          "The Drugs and Magic Remedies (Objectionable Advertisements) Act 1954 prohibits advertising treatment to the public for a schedule of more than fifty conditions, including several a clinic would very much like to advertise. The CCPA's 2022 guidelines on misleading advertisements apply on top, requiring that any claim be substantiable. And on the data side, the applicable law is the DPDP Act 2023, whose rules were notified in November 2025 — not HIPAA, which is US legislation and has no application to an Indian clinic.",
          "The combined effect is narrower ad copy than most industries: state what you do, where, by whom, and what it involves. No promises of outcome, no superlatives, no patient testimonials in ads, no before-and-after imagery.",
        ],
      },
      {
        heading: "When a doctor should not run ads at all",
        paragraphs: [
          "Paid search is not right for everyone and we would rather say so before taking a budget. If you have no capacity to absorb new patients, ads will produce a waiting list and a worse review profile. If nobody reliably answers the phone during the hours you would advertise, you are buying calls you will not take.",
          "If your average treatment value is low and the click prices in your specialty are high, the arithmetic may simply not work — a general physician consultation at a modest fee cannot always absorb a competitive click price plus a realistic booking rate. If your Google Business Profile is unclaimed, your reviews are thin and your booking path is broken, ads will amplify a bad first impression at cost, and the same money spent on local search will do more.",
          "And if your entire service line sits inside the Drugs and Magic Remedies schedule, paid promotion of that treatment to the public is not available to you regardless of budget. Education and organic visibility are, and that is the route we would recommend.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Can doctors run Google Ads in India?",
      answer:
        "Yes, with restrictions on both sides. Google's healthcare and medicines policy limits what may be promoted and requires certification for some categories, and its personalised advertising rules prohibit targeting people by inferred health conditions. On the Indian side, Regulation 6.1 of the MCI Code of Ethics 2002 restricts solicitation and puffery for registered practitioners, the Drugs and Magic Remedies Act 1954 bars advertising treatment for a long schedule of conditions, and CCPA guidelines require claims to be substantiable. Factual, geographically tight service ads sit comfortably inside all of it.",
    },
    {
      question: "How much do Google Ads cost for a clinic in India?",
      answer:
        "Click prices vary widely by specialty and city. Broad symptom queries can run in the low tens of rupees, while competitive procedure terms in a metro can reach several hundred rupees per click. A single-location clinic can start testing from about ₹15,000 a month in media, plus management, and scale once cost per attended appointment is known. The number that actually matters is cost per attended appointment against the value of that patient — a treatment plan worth ₹60,000 justifies spend that a routine consultation cannot.",
    },
    {
      question: "Why can't I run remarketing ads to people who visited my treatment pages?",
      answer:
        "Because Google treats health conditions as a sensitive category under its personalised advertising policy. A remarketing list built from visitors to a fertility, oncology, mental health or de-addiction page effectively segments people by an inferred medical condition, which the policy prohibits. Enforcement is account-level, so it is not a risk worth taking. If remarketing is used at all in a healthcare account, build the list from pages carrying no condition signal, and keep the creative free of any condition reference.",
    },
    {
      question: "Are call-only ads better than regular search ads for a clinic?",
      answer:
        "For urgent and near-me queries, usually yes, provided your phone is reliably answered during the hours the ads run and the person answering can actually book. Call-only removes the landing page from the path, which suits patients searching on a phone who want to speak to someone now. Set conversions to count only calls past a duration threshold, and match ad scheduling to real staffing. Where the desk cannot pick up at peak times, standard search ads with a booking page and a WhatsApp fallback perform better.",
    },
    {
      question: "What negative keywords should a medical Google Ads account use?",
      answer:
        "Start with employment terms — jobs, vacancy, salary, recruitment, hiring — then academic ones like course, syllabus, MBBS, notes, PDF, exam and student. Add definitional and research queries such as meaning, definition, symptoms of, causes of, images, and wikipedia, unless you are deliberately running a research campaign. Add free, home remedy and DIY terms, plus competitor names you do not want to bid on. Then review search terms weekly and keep adding; this list is never finished.",
    },
    {
      question: "When should a doctor not run Google Ads?",
      answer:
        "When you have no open capacity, since ads will only produce a waiting list and worse reviews. When nobody answers the phone during the hours you would advertise. When average treatment value cannot absorb competitive click prices in your specialty. When your Google Business Profile, reviews and booking path are still weak, because ads amplify a poor first impression at cost and the same money spent on local search will do more. And when the treatment you want to promote sits inside the Drugs and Magic Remedies schedule, where public advertising is not available regardless of budget.",
    },
  ],

  related: {
    title: "Related pages",
    items: [
      { title: "Marketing for clinics", href: "/healthcare-marketing/clinics", body: "Where paid search fits alongside local search and booking." },
      { title: "Local SEO for clinics", href: "/healthcare-marketing/local-seo-for-clinics", body: "The compounding channel that should run underneath your ads." },
      { title: "SEO for doctors", href: "/healthcare-marketing/seo-for-doctors", body: "Capturing symptom intent organically instead of paying for it." },
      { title: "Marketing for individual doctors", href: "/healthcare-marketing/doctors", body: "When a consultant should and should not buy traffic." },
      { title: "Patient acquisition systems", href: "/healthcare-marketing/patient-acquisition", body: "Tracking a click through to an attended appointment." },
      { title: "Healthcare marketing overview", href: "/healthcare-marketing", body: "How the channels fit together across doctors, clinics and hospitals." },
    ],
  },

  cta: {
    title: "Find out what your ad budget is actually buying",
    body: "We will audit your account against healthcare policy, check whether your conversions represent real patients, and tell you plainly whether paid search is the right spend for your practice right now.",
    primary: { label: "Request the ad account audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Google Ads for Doctors and Clinics",
    serviceType: "Healthcare Pay Per Click Advertising",
    serviceDescription:
      "Policy-compliant healthcare paid search: intent-separated campaign structure, call-only campaigns, realistic geofencing, negative keyword discipline and conversion tracking on booked and attended appointments.",
    audienceType: "Doctors, clinics and multi-location medical groups",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
