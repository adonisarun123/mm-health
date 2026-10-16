import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Local SEO for Clinics",
  description:
    "Local SEO for clinics in India: Google Business Profile optimisation, grid rank tracking, category and service mapping, review velocity",
  keywords: [
    "local SEO for clinics",
    "Google Business Profile for doctors",
    "map pack ranking clinic",
    "near me SEO healthcare",
    "GMB optimization for clinics",
    "clinic local search",
  ],
  alternates: { canonical: "/healthcare-marketing/local-seo-for-clinics" },
  openGraph: {
    title: "Local SEO for Clinics — Win the Map Pack in Your Catchment",
    description:
      "Proximity, prominence and relevance decide who appears in the map pack. Two of the three are yours to influence.",
    url: "/healthcare-marketing/local-seo-for-clinics",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/healthcare-marketing/local-seo-for-clinics",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Healthcare Marketing", path: "/healthcare-marketing" },
    { name: "Local SEO for Clinics", path: "/healthcare-marketing/local-seo-for-clinics" },
  ],
  eyebrow: "Local search",
  h1: "Local SEO for clinics: winning the three results that matter",
  answer:
    "Local SEO for clinics is the work of appearing in the Google map pack for nearby searches. Three factors decide it: proximity to the searcher, prominence of your practice, and relevance of your profile to the query. Proximity is fixed. Prominence and relevance are entirely within your control.",
  subhead:
    "On a near-me or symptom-plus-area query, three map results sit above everything else and take most of the clicks. Ranking well organically while missing from that block means the patient four hundred metres away never sees you.",
  heroBullets: [
    "Grid-based rank tracking across the real catchment, not one office pin",
    "Every service you offer mapped as a named service on the profile",
    "Review velocity systems, not one-off review drives",
    "Per-branch profile management for multi-location groups",
  ],
  primaryCta: { label: "Get a free local visibility grid", href: "/get-started" },
  secondaryCta: { label: "See the full clinic programme", href: "/healthcare-marketing/clinics" },

  keyFacts: [
    { label: "What it is", value: "Optimising for the Google map pack and near-me search within a clinic's catchment" },
    { label: "Ranking factors", value: "Proximity, prominence and relevance — you can influence the last two" },
    { label: "Primary asset", value: "Google Business Profile, one per physical location with a distinct front door" },
    { label: "Tracking method", value: "Grid scans across the catchment, because rank changes street by street" },
    { label: "Most common fault", value: "A single generic category with no services mapped and no service area logic" },
    { label: "Typical first movement", value: "Calls and direction requests shift in 6–10 weeks" },
    { label: "Starting from", value: "₹10,000 per month for a single location, scaling with branch count" },
  ],

  pains: {
    title: "What keeps clinics out of the map pack",
    intro:
      "The pattern is remarkably consistent across the clinics we audit, and almost none of it requires a bigger budget to fix.",
    items: [
      {
        problem: "You are checking your ranking from inside your own clinic",
        fix:
          "Local results change within a few hundred metres. Searching from your own desk shows you the one point where you are guaranteed to look strongest. We scan a grid across your catchment so you see where you actually drop out — which is usually the residential pockets your patients come from.",
      },
      {
        problem: "One category, no services, half the profile empty",
        fix:
          "A profile listing only Dentist will lose implant, aligner and root canal queries to a clinic that mapped its services. Primary category, correct secondary categories, every service named with a description, attributes, hours, holiday hours, photos and a booking link all feed relevance. Most clinics have completed under half of this.",
      },
      {
        problem: "Reviews arrived in a burst two years ago",
        fix:
          "A profile with two hundred reviews and none in eight months looks dormant next to one gaining four a month. Prominence responds to velocity and recency, and to whether you reply. We install a post-visit invitation that runs on every patient, with responses that stay clinically discreet.",
      },
      {
        problem: "Your details are written three different ways across the web",
        fix:
          "An old landline on a directory, a clinic name with and without the suffix, a suite number present in one place and absent in another. Each is trivial. Together they stop the profile resolving cleanly. Citation cleanup is dull, cheap and one of the more reliable levers we have.",
      },
    ],
  },

  offerings: {
    title: "What local SEO work actually involves",
    items: [
      {
        icon: "MapPin",
        title: "Profile rebuild per location",
        body: "Primary and secondary category selection, full service mapping with descriptions, attributes, opening and holiday hours, service areas, booking link and appointment URL, and a description written for patients rather than crawlers.",
      },
      {
        icon: "LayoutDashboard",
        title: "Grid rank tracking",
        body: "Scheduled scans of your rankings across a grid covering your true catchment, per keyword, so you can see the shape of your visibility rather than a single flattering number.",
      },
      {
        icon: "Star",
        title: "Review velocity engine",
        body: "Post-visit invitations sent to every patient without filtering or inducement, staff prompts at the front desk, response templates that never disclose clinical detail, and alerts when a rating slips.",
        href: "/healthcare-marketing/reputation-management",
      },
      {
        icon: "Database",
        title: "Citation and NAP cleanup",
        body: "A full audit of every place your name, address and phone number appear, corrections submitted to the directories that matter in India, and duplicate listings merged or removed.",
      },
      {
        icon: "MessageSquare",
        title: "Q&A seeding and management",
        body: "The questions your front desk answers twenty times a week, posted and answered on the profile so they appear before someone calls. Monitored so a competitor or a stranger does not answer for you.",
      },
      {
        icon: "Megaphone",
        title: "Google Posts programme",
        body: "Regular posts on services, timings, camps, new equipment and new consultants. Modest direct ranking effect, meaningful effect on whether a patient chooses you once they are looking at the profile.",
      },
      {
        icon: "Users",
        title: "Practitioner profile structure",
        body: "Handling multiple doctors at one address correctly — practitioner profiles where they are genuinely eligible, tied to the practice rather than duplicating it, so you gain coverage without triggering a suspension.",
      },
      {
        icon: "Building2",
        title: "Multi-branch management",
        body: "Location groups, bulk hour and holiday updates, per-branch review flows, distinct location pages with genuinely different content, and reporting that never averages branches together.",
      },
      {
        icon: "ShieldCheck",
        title: "Spam fighting and redressal",
        body: "Identifying fake listings, keyword-stuffed competitor names and virtual offices in your catchment, and filing redressal so the map pack reflects real clinics. Frequently the fastest ranking gain available.",
      },
      {
        icon: "CalendarCheck",
        title: "Booking link integration",
        body: "A booking path connected directly to the profile so the patient goes from map result to confirmed appointment without a phone call, with the source tracked through to attendance.",
        href: "/custom-tools/for-clinics",
      },
    ],
  },

  process: {
    title: "How we run a local programme",
    intro: "The first month is measurement and cleanup. Nothing else is worth doing until those are true.",
    items: [
      {
        duration: "Weeks 1–2",
        title: "Grid baseline and audit",
        body:
          "We scan your rankings across the catchment for your priority queries, audit every profile field, map every citation, identify duplicate and spam listings, and check that calls and direction requests are actually being tracked.",
      },
      {
        duration: "Weeks 2–5",
        title: "Rebuild and clean",
        body:
          "Categories corrected, services mapped, photos and hours completed, Q&A seeded, description rewritten, citations corrected, duplicates merged and redressal filed against clear spam. This block produces most of the early movement.",
      },
      {
        duration: "Weeks 4–12",
        title: "Prominence build",
        body:
          "Review engine live and running on every patient, posts on a regular cadence, location pages rewritten with genuinely distinct content and correct structured data, and local links built through real associations and community involvement.",
      },
      {
        duration: "Ongoing",
        title: "Monitor, defend, expand",
        body:
          "Monthly grid re-scan, review response within a day, profile change monitoring since edits can be suggested by anyone, ongoing spam redressal, and expansion into the queries where the grid shows you are close but not yet in the pack.",
      },
    ],
  },

  table: {
    caption: "Map pack ranking factors: what you can influence and how",
    columns: ["Factor", "Can you influence it", "How", "Practical note"],
    rows: [
      [
        "Proximity to the searcher",
        "No, not directly",
        "Only by opening a location closer, or by winning hard enough on the other two to appear from further out",
        "This is why a weaker clinic beats you on its own street and loses on yours",
      ],
      [
        "Relevance — categories",
        "Yes",
        "One accurate primary category, plus secondary categories that reflect real services only",
        "The primary category carries the most weight; over-adding secondaries dilutes and risks suspension",
      ],
      [
        "Relevance — services",
        "Yes",
        "Add every treatment you offer as a named service with its own description",
        "Most clinics leave this section empty and lose every specific treatment query",
      ],
      [
        "Relevance — profile completeness",
        "Yes",
        "Hours, holiday hours, attributes, photos, description, booking link, Q&A",
        "Completeness is cheap and correlates with both ranking and conversion on the profile",
      ],
      [
        "Prominence — reviews",
        "Yes",
        "Steady velocity from every patient, recency, replies, and reviews that mention the service by name",
        "Velocity and recency outweigh lifetime count; never gate or incentivise",
      ],
      [
        "Prominence — citations and NAP",
        "Yes",
        "Identical name, address and phone everywhere; merge duplicates; correct stale directories",
        "Unglamorous and reliably effective, especially for older clinics that have moved premises",
      ],
      [
        "Prominence — links and mentions",
        "Yes",
        "Local associations, hospital affiliations, press, community and camp coverage",
        "Local relevance beats domain authority here; a neighbourhood mention can outperform a national link",
      ],
      [
        "Behaviour on the profile",
        "Partly",
        "Better photos, clear hours, answered questions, a working booking link",
        "Clicks, calls and direction requests are signals; a profile that converts also ranks",
      ],
      [
        "Competitor spam",
        "Yes",
        "Report fake listings, keyword-stuffed names and virtual offices through redressal",
        "Removing two fake listings above you is faster than out-ranking them",
      ],
    ],
  },

  prose: {
    title: "The parts clinics get wrong",
    blocks: [
      {
        heading: "Grid tracking changes what you believe about your rankings",
        paragraphs: [
          "Almost every clinic owner who searches their own service name from their own reception concludes they rank first. They do — at that pin. Move eight hundred metres north into the residential block where most of their patients live and they are not in the pack at all.",
          "A grid scan runs the same query from dozens of points across your catchment and returns a map of where you appear and where you vanish. It converts local SEO from a vague monthly report into a picture you can act on: this pocket is lost to that clinic, this corridor is winnable, this direction is not worth pursuing because nobody would drive it anyway.",
          "It also changes how you judge progress. A clinic that moves from rank nine to rank four across two-thirds of its grid has had an excellent month, even though the single number it was watching did not change.",
        ],
      },
      {
        heading: "Categories, services and the difference between them",
        paragraphs: [
          "The primary category is the strongest relevance lever on the profile and the one clinics most often set carelessly. It should describe what the practice principally is, matched as specifically as the category list allows. A practice that is genuinely an orthodontic clinic should not sit under the generic dental category simply because it also does cleanings.",
          "Secondary categories extend coverage, but each one should reflect something the clinic actually does, staffed and available. Adding categories opportunistically dilutes relevance and, in healthcare, invites a suspension that takes weeks to reverse.",
          "Services are separate and far more granular. This is where every individual treatment belongs, each with its own short description in the words patients use. It is the single most commonly empty section on a clinic profile and the cheapest coverage available: a clinic that lists forty real services simply appears for queries a clinic listing none cannot.",
        ],
        bullets: [
          "One accurate primary category, chosen for what the practice principally is",
          "Secondary categories only for services genuinely offered on site",
          "Every treatment listed as a named service with a description",
          "Attributes completed — wheelchair access, parking, languages, payment options",
          "Holiday hours set in advance; wrong hours cost more than any ranking factor",
        ],
      },
      {
        heading: "Reviews: velocity, recency and never gating",
        paragraphs: [
          "Lifetime review count is the number clinics fixate on and the one that matters least once you are past a modest base. What moves prominence is a steady, recent flow — a handful every month, arriving continuously, with the practice replying. A dormant profile with a large historical count reads as a clinic that used to be busy.",
          "The correct system is uniform: every patient receives the same invitation after the visit, with no attempt to screen unhappy patients into a private feedback form first. Gating breaches platform policy and, framed as it usually is, sits badly against the CCPA's 2022 guidelines on misleading advertisement. Incentives are worse. Neither is necessary — a clinic that simply asks everyone, consistently, generates more than enough.",
          "Replies matter too, and this is where healthcare needs care. Never confirm that the reviewer was a patient, never reference their condition, treatment or visit specifics. Thank them, state the practice's general standard, and move the conversation offline. A reply that discloses clinical detail is a privacy problem under the DPDP Act 2023, whose rules were notified in November 2025 — not a marketing win.",
        ],
      },
      {
        heading: "Several doctors, one address, and multiple branches",
        paragraphs: [
          "Practitioner profiles are permitted alongside a practice profile where the doctor is a genuine public-facing practitioner at that address, and they are a real source of additional coverage — a patient searching a consultant by name lands on the doctor rather than a directory. What is not permitted is creating a profile per doctor as a way of multiplying listings for the same practice. That is duplication, and it ends in suspension.",
          "Multi-branch groups have a different problem. Once past three locations, branches begin to compete with each other, one strong location masks weak ones in aggregate reporting, and a shared phone number makes attribution impossible. Location groups, per-branch tracking numbers, genuinely distinct location pages and reporting that never averages are what keep a group honest about which branch is actually working.",
        ],
      },
      {
        heading: "Spam fighting is a legitimate ranking tactic",
        paragraphs: [
          "Healthcare map results in Indian cities carry a persistent volume of fake and manipulated listings: virtual offices with no practitioner present, clinics whose profile name is a keyword string rather than a business name, and defunct listings that never closed. Each one occupies a place in a three-result block.",
          "Redressal is a formal process, it works when the evidence is clear, and it is often the fastest movement available. We document the violation, file it, and follow up — because removing two fabricated listings sitting above you is faster and more durable than trying to out-rank them.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "What is local SEO for a clinic and why does it matter more than website SEO?",
      answer:
        "Local SEO is the work of appearing in the Google map pack — the three map results shown for near-me and location-based searches. It matters more for a clinic because that block sits above the organic results and absorbs most of the clicks on those queries, and because clinic demand is inherently local. A clinic ranking first organically but absent from the map pack loses the patient standing four hundred metres away, which is the patient it should never lose.",
    },
    {
      question: "How do I rank higher in the Google map pack for my clinic?",
      answer:
        "Work the two factors you control. For relevance, set an accurate primary category, add secondary categories only for services you truly offer, list every treatment as a named service with a description, and complete hours, attributes, photos and Q&A. For prominence, build steady review velocity from every patient, reply to all of them, make your name, address and phone identical everywhere online, merge duplicate listings, and earn genuinely local mentions. Then track on a grid so you can see where the gains are landing.",
    },
    {
      question: "How many Google Business Profiles should a clinic with several doctors have?",
      answer:
        "One profile for the practice at each physical address, plus practitioner profiles for doctors who genuinely see patients publicly at that address. Practitioner profiles are legitimate and useful — a patient searching a consultant by name reaches the doctor rather than an aggregator. What is not allowed is creating extra profiles per doctor to multiply listings for the same practice, or listing a doctor who does not actually consult there. That is duplication and it usually ends in suspension.",
    },
    {
      question: "How long does local SEO take to show results for a clinic?",
      answer:
        "Profile completeness and category corrections can move things within two to four weeks because they change relevance immediately. Prominence work — review velocity, citation cleanup, local mentions — typically shows in the grid over six to ten weeks and continues compounding. Successful spam redressal can produce movement within days, since it removes competitors rather than out-ranking them. A clinic in a dense, competitive catchment should plan for a full quarter before judging the programme.",
    },
    {
      question: "Do Google Posts and Q&A actually affect ranking?",
      answer:
        "Their direct ranking effect is modest. Their effect on whether a patient chooses you once they are looking at your profile is not. A profile with recent posts, twelve answered questions, current photos and clear timings converts materially better than a profile with none of that, and the resulting calls, clicks and direction requests are themselves signals. Seed Q&A with the questions your front desk answers every week — if you leave them blank, strangers and competitors will answer for you.",
    },
    {
      question: "Can I get fake competitor listings removed from Google Maps?",
      answer:
        "Often, yes. Listings using a keyword-stuffed name instead of the real business name, virtual offices with no practitioner present, and clinics that have closed but never updated are all reportable through the business redressal process. It requires documented evidence and follow-up rather than a single report, and it is not instant. But in a three-result map pack, removing two fabricated listings above you is frequently faster and more durable than trying to out-rank them.",
    },
  ],

  related: {
    title: "Related pages",
    items: [
      { title: "Marketing for clinics", href: "/healthcare-marketing/clinics", body: "The full programme around local search, ads and booking." },
      { title: "SEO for doctors", href: "/healthcare-marketing/seo-for-doctors", body: "The organic and content side, which is a separate ranking system." },
      { title: "Reputation management", href: "/healthcare-marketing/reputation-management", body: "Review generation, response systems and search result repair." },
      { title: "Google Ads for doctors", href: "/healthcare-marketing/google-ads-for-doctors", body: "Geofenced paid search while local rankings build." },
      { title: "Marketing for hospitals", href: "/healthcare-marketing/hospitals", body: "Local search across many locations and service lines." },
      { title: "Custom tools for clinics", href: "/custom-tools/for-clinics", body: "Booking, reminders and dashboards wired to your profile." },
    ],
  },

  cta: {
    title: "See your catchment as your patients see it",
    body: "We will run a grid scan of your local rankings across your real catchment for your priority services and send you the map — where you appear, where you vanish, and who is taking those results.",
    primary: { label: "Get my local visibility grid", href: "/get-started" },
    secondary: { label: "Book a 30-minute call", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Local SEO for Clinics",
    serviceType: "Local Search and Google Business Profile Optimisation",
    serviceDescription:
      "Map pack visibility for clinics: profile optimisation, category and service mapping, grid rank tracking, review velocity, citation cleanup, multi-branch management and spam redressal.",
    audienceType: "Single and multi-location clinics and medical practices",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
