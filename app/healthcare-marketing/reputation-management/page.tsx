import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Reputation Management for Doctors",
  description:
    "Healthcare reputation management done ethically: honest review generation at the right moment, confidentiality-safe responses",
  keywords: [
    "online reputation management for doctors",
    "healthcare reputation management",
    "medical review management",
    "remove negative reviews doctor",
    "patient review management",
    "doctor reviews Google",
    "clinic reputation management India",
  ],
  alternates: { canonical: "/healthcare-marketing/reputation-management" },
  openGraph: {
    title: "Online Reputation Management for Doctors & Clinics — Monk Mantra",
    description:
      "Ethical review generation, confidentiality-safe responses, removal of policy-violating reviews and displacement of damaging search results.",
    url: "/healthcare-marketing/reputation-management",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/healthcare-marketing/reputation-management",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Healthcare Marketing", path: "/healthcare-marketing" },
    { name: "Reputation Management", path: "/healthcare-marketing/reputation-management" },
  ],
  eyebrow: "Reputation management",
  h1: "Reputation management for doctors and clinics",
  answer:
    "Healthcare reputation management is the ongoing work of generating honest patient reviews, responding without breaching confidentiality, and displacing damaging search results. For a doctor or clinic it decides both local ranking prominence and whether anyone converts. Monk Mantra runs it ethically, without gating, incentives or fake reviews.",
  subhead:
    "Every other channel you pay for ends at the same checkpoint: a patient reading your reviews before they call. A weak rating quietly taxes your SEO, your ads and your referrals at once.",
  heroBullets: [
    "Uniform review invitation at the moment of discharge or billing",
    "Response templates that never confirm a patient relationship",
    "Removal pursued only where a review genuinely breaches policy",
    "Monitoring across Google, Practo, JustDial and Facebook",
  ],
  primaryCta: { label: "Get a reputation audit", href: "/get-started" },
  secondaryCta: { label: "Talk to a strategist", href: "/contact" },

  keyFacts: [
    { label: "What it covers", value: "Review generation, response, monitoring, removal requests and search result displacement" },
    { label: "Why it matters most", value: "Reviews gate conversion on every channel and feed local ranking prominence simultaneously" },
    { label: "Right trigger point", value: "At discharge or billing, while the patient is still with you — not by email three days later" },
    { label: "Never acceptable", value: "Incentives, gating unhappy patients, staff-written reviews, buying ratings" },
    { label: "Realistically removable", value: "Fabricated reviews, non-patients, personal attacks, competitor sabotage, posts containing patient details" },
    { label: "Starting from", value: "₹8,000 per month for a single location, scaling with branch count" },
    { label: "Time to visible shift", value: "8–16 weeks for rating movement; longer for displacing an established search result" },
  ],

  pains: {
    title: "How reputations actually get damaged",
    intro:
      "In almost every audit we run, the rating is not the result of bad medicine. It is the result of an unmanaged feedback loop.",
    items: [
      {
        problem: "Only angry patients are motivated enough to write",
        fix:
          "A satisfied patient forgets by the time they reach the car park. An unhappy one writes from the waiting room. Without a systematic invitation to every patient, your public rating is a sample drawn entirely from your worst days. Uniform invitation is the single fix, and it is a process change rather than a marketing spend.",
      },
      {
        problem: "The clinic filters who gets asked",
        fix:
          "Surveying patients first and only inviting the happy ones to Google is review gating. It breaches Google's policies, it is the kind of selective presentation the CCPA's 2022 guidelines on misleading advertisements treat as deceptive, and platforms increasingly detect it. We invite every patient the same way and fix the causes of the bad ones instead.",
      },
      {
        problem: "Replies to reviews disclose clinical information",
        fix:
          "A doctor defending themselves publicly with treatment detail is the most common confidentiality failure we see. Even confirming that the reviewer was a patient is a disclosure. Responses must be warm, non-specific, and move the conversation offline within two sentences.",
      },
      {
        problem: "Nobody watches the platforms that are not Google",
        fix:
          "Practo, JustDial, Facebook and specialty directory listings often carry old ratings, wrong timings and reviews nobody has answered in three years. Patients check them, and search engines read them as part of your prominence signal. Monitoring has to cover every surface where your name appears.",
      },
    ],
  },

  offerings: {
    title: "What reputation management includes",
    items: [
      {
        icon: "Star",
        title: "Ethical review generation",
        body: "A uniform invitation to every patient through the channel they actually use, with no incentive, no filtering and no pre-survey. Steady honest velocity beats a burst of five-star reviews that platforms discount anyway.",
      },
      {
        icon: "AlarmClock",
        title: "Trigger point design",
        body: "The invitation fires at discharge or billing, while the patient is still on the premises and their experience is fresh. We work with your front desk to make it part of the exit routine rather than an afterthought.",
      },
      {
        icon: "MessageSquare",
        title: "Confidentiality-safe response workflow",
        body: "Approved templates for positive, mixed, negative and hostile reviews that never confirm a patient relationship or reference clinical detail, plus an escalation path for anything that needs the treating doctor.",
      },
      {
        icon: "ShieldCheck",
        title: "Removal and flagging",
        body: "We assess each complaint against platform policy, file properly evidenced removal requests for reviews that genuinely breach it, and tell you plainly when a review is a legitimate bad experience that will not come down.",
      },
      {
        icon: "Search",
        title: "Search result displacement",
        body: "When a damaging page ranks for your name, deletion is rarely available. Building and strengthening assets you control — profiles, publications, directory entries, a proper doctor page — pushes it down the first page instead.",
        href: "/healthcare-marketing/seo-for-doctors",
      },
      {
        icon: "Activity",
        title: "Monitoring and alerting",
        body: "Daily coverage across Google, Practo, JustDial, Facebook and specialty directories, with immediate alerts on one and two star reviews so the response window is hours rather than weeks.",
      },
      {
        icon: "Workflow",
        title: "Review bombing response",
        body: "A defined protocol for coordinated attacks: evidence capture, bulk reporting with a pattern argument rather than individual flags, and a communications position while the platform investigates.",
      },
      {
        icon: "BarChart3",
        title: "Theme analysis back to operations",
        body: "Every review coded by theme — waiting time, billing clarity, phone handling, staff conduct, clinical outcome — so you can see which recurring operational failure is actually generating the complaints.",
      },
      {
        icon: "LayoutDashboard",
        title: "Reputation dashboard",
        body: "Rating, volume, velocity, response rate and theme mix across every platform and every branch, so the trend is visible before it becomes a problem.",
        href: "/custom-tools/for-clinics",
      },
    ],
  },

  process: {
    title: "How we run it",
    intro: "Stabilise first, generate second, repair third. Doing it in the other order wastes months.",
    items: [
      {
        duration: "Weeks 1–2",
        title: "Audit and triage",
        body:
          "Full inventory of every listing and review across platforms, a themed read of the last two years of negative feedback, and a first-page search audit for your name and your clinic's name. We separate what is a marketing problem from what is an operations problem.",
      },
      {
        duration: "Weeks 2–4",
        title: "Response backlog and policy fixes",
        body:
          "Unanswered reviews get answered using confidentiality-safe templates, any existing gating mechanism is removed, and clearly policy-violating reviews are reported with proper evidence. Listings are corrected so patients stop arriving at the wrong timings.",
      },
      {
        duration: "Weeks 3–12",
        title: "Generation at volume",
        body:
          "The invitation becomes part of the discharge routine, staff are briefed on exactly what they may and may not say, and volume builds steadily. Rating moves as honest reviews accumulate and dilute the historical sample.",
      },
      {
        duration: "Ongoing",
        title: "Loop back to operations",
        body:
          "A monthly theme report goes to whoever runs the clinic, not just to marketing. If billing surprises drive a third of your complaints, no amount of review generation is the answer.",
      },
    ],
  },

  table: {
    caption: "Review problem, whether it can be removed, and what actually works",
    columns: ["Review problem", "Can it be removed", "What actually works"],
    rows: [
      [
        "Fabricated review from someone who was never a patient",
        "Often, with evidence",
        "Report as a policy violation and supply the pattern: no record of the name, no appointment, reviewer's history shows similar posts elsewhere",
      ],
      [
        "Competitor sabotage or a cluster from one source",
        "Sometimes",
        "Report as a coordinated pattern rather than individually, evidence the timing and account similarity, and keep honest volume flowing so the cluster loses weight",
      ],
      [
        "Personal attack, abuse or a review naming other patients",
        "Usually",
        "Flag for harassment or personal information; do not respond to the content publicly while the report is open",
      ],
      [
        "A genuine bad experience, accurately described",
        "No",
        "Respond within a day, without clinical detail, take it offline, fix the underlying cause, and outweigh it with honest volume",
      ],
      [
        "Complaint about cost or waiting time",
        "No",
        "Answer publicly with process, not defence; then fix the expectation setting that produced it — most of these are communication failures",
      ],
      [
        "Damaging news article, forum thread or complaint site page ranking for your name",
        "Almost never",
        "Displacement, not deletion: build and strengthen assets you control until the damaging result falls below the fold",
      ],
      [
        "Sudden burst of one-star reviews after an incident",
        "Partially",
        "Bulk report with a pattern argument, request platform review of the spike, hold a consistent public position, resume steady generation once the spike is assessed",
      ],
    ],
  },

  prose: {
    title: "What most practices get wrong",
    blocks: [
      {
        heading: "Reviews are the highest-leverage asset a provider has",
        paragraphs: [
          "Reputation is the only asset that works on both sides of the equation at once. It feeds prominence, which is one of the three factors governing local ranking, so a better review profile makes you more visible. It also gates conversion on every channel you already pay for — the patient who clicks your ad, reads your service page and then checks your rating before dialling.",
          "That double role is why a 3.2 rating is so expensive. It is not simply that some patients hesitate. It is that every rupee you spend on search, ads and content is being routed through a checkpoint that is failing. Fixing the checkpoint raises the return on all of it without increasing any budget.",
        ],
        bullets: [
          "Prominence is review count, velocity and response rate, not lifetime total alone",
          "A steady trickle of honest reviews outperforms an occasional burst",
          "Response rate is visible to patients and factored by platforms",
          "Recency matters — reviews from three years ago carry little weight with either audience",
        ],
      },
      {
        heading: "Ask everyone, incentivise nobody, filter no one",
        paragraphs: [
          "The only defensible review programme is a uniform one. Every patient gets the same invitation, at the same point in the visit, through the same channel. No selection, no pre-survey to identify the happy ones, no gift voucher, no discount on the next consultation.",
          "Gating — asking patients how they felt and only sending the satisfied ones to a public platform — is the practice most commonly sold to clinics and the one most likely to cause trouble. It violates Google's review policies, it produces a rating that misrepresents the service, and selective presentation of that kind sits squarely within what the CCPA's 2022 misleading advertisement guidelines are designed to catch. Incentivised reviews carry the same problem with a paper trail attached.",
          "The uncomfortable part is that a uniform programme surfaces your actual quality. That is the point. If uniform invitation produces a 3.4, you have learned something no dashboard was going to tell you.",
        ],
      },
      {
        heading: "The trigger point decides everything",
        paragraphs: [
          "The most common reason a review programme underperforms is timing. An email sent three days after the visit reaches a patient who has moved on, on a device where they are not signed in, competing with everything else in their inbox. Response rates in the low single digits are normal for that design.",
          "The alternative is to ask while the patient is still in front of you. At discharge or at billing, when the experience is minutes old and someone at the desk can hand over a QR code or send the link to a phone that is already in their hand. The same programme, moved to the right moment, routinely produces several times the response rate.",
          "This makes the front desk the most important part of reputation management, which is why we brief staff directly rather than sending a document. They need to know exactly what to say, what they must not say, and that they are asking everyone regardless of how the consultation went.",
        ],
      },
      {
        heading: "Responding without breaching confidentiality",
        paragraphs: [
          "There is a trap here that catches experienced doctors. A patient posts an inaccurate account of their treatment. The instinct is to correct the record. Doing so in public discloses clinical information, and the fact that responding at all confirms the person was a patient is itself a disclosure.",
          "The professional obligation of confidentiality under the MCI Code of Ethics does not lapse because the patient spoke first. Data handling in India is governed by the DPDP Act 2023, whose Rules were notified in November 2025 — not by HIPAA, which is US law and does not apply here, despite how often Indian clinics are sold compliance against it.",
          "The workable response acknowledges that the writer had a poor experience, states in general terms how the clinic handles concerns, gives a direct contact route, and stops. Four lines. It reads well to the hundred prospective patients who will see it, which is the audience that actually matters, and it discloses nothing.",
        ],
        bullets: [
          "Never confirm, deny or imply that the reviewer was a patient",
          "Never reference diagnosis, treatment, dates, fees or attendance",
          "Move to a private channel by the second sentence",
          "Answer within 24 hours — a fast, calm reply reads better than a perfect late one",
        ],
      },
      {
        heading: "A 3.2 rating is usually an operations problem in marketing clothing",
        paragraphs: [
          "Code a year of negative reviews by theme and the distribution is rarely random. It clusters: waiting time, billing surprises, the phone nobody answers, a specific staff member, discharge instructions nobody explained. Three or four themes typically account for most of the complaints.",
          "That list is the actual work. Review generation dilutes the historical sample and buys you time, but if forty percent of complaints concern waiting time, the durable fix is scheduling, not a better invitation SMS. This is why our monthly theme report goes to whoever runs the practice rather than staying inside the marketing conversation — the causes sit outside marketing's control, and marketing alone cannot fix them.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Can I get a negative Google review removed?",
      answer:
        "Only if it breaches Google's content policies. Reviews that are fabricated, posted by someone who was never a patient, contain personal attacks or abuse, disclose another patient's details, or form part of a coordinated attack can often be removed when reported with proper evidence. A genuine patient describing a genuine bad experience will not be removed, however unfair it feels, and paying someone who promises otherwise usually buys either a fake dispute or nothing at all. For those, the working strategy is a calm public response plus enough honest new reviews to change the overall picture.",
    },
    {
      question: "How do I get more patient reviews without breaking the rules?",
      answer:
        "Ask every patient, at the same point in the visit, in the same way, with nothing offered in return. The practical version is a QR code or an SMS link handed over at discharge or billing while the patient is still with you, backed by staff who know exactly what to say. Do not survey patients first and route only the happy ones to Google — that is gating, it breaches platform policy, and it produces a rating that misrepresents your service. Uniform invitation is both the compliant option and, in our experience, the higher-volume one.",
    },
    {
      question: "How should a doctor respond to a negative review?",
      answer:
        "Quickly, briefly, and without any clinical detail. Do not confirm the person was a patient — that alone is a confidentiality disclosure, and the obligation does not lapse because the patient posted first. Acknowledge that their experience fell short, state generally how the practice handles concerns, offer a direct phone number or email, and stop. Four lines is usually right. You are not writing for the reviewer, who has already decided; you are writing for the several hundred prospective patients who will read the exchange while choosing a doctor.",
    },
    {
      question: "Why do reviews affect my search ranking?",
      answer:
        "Local ranking is governed by proximity, relevance and prominence. Reviews are a substantial part of prominence — count, average rating, how recently they arrived, and whether the business responds. That means a stronger review profile makes you more visible in the map pack, not merely more persuasive once someone finds you. Reviews then also gate conversion on every other channel, since patients check ratings before calling a number they saw in an ad. Few investments in healthcare marketing affect visibility and conversion at the same time; this is one of them.",
    },
    {
      question: "What do I do if my clinic is review bombed?",
      answer:
        "Do not respond to each review individually while it is happening, and do not argue publicly. Capture evidence first: timestamps, account histories, any overlap between the accounts, and the incident that appears to have triggered it. Report the cluster to the platform as a coordinated pattern rather than filing separate flags, since the pattern is what gets acted on. Hold one consistent public position if the incident is known. Then resume steady honest review generation, because volume is what restores an average once the spike has been assessed.",
    },
    {
      question: "How much does healthcare reputation management cost in India?",
      answer:
        "As an entry point, a single-location clinic starts from about ₹8,000 per month for monitoring, generation and managed responses, while multi-branch groups and hospitals sit higher because each facility needs its own flow and its own reporting line. Active repair work — a damaging search result that needs displacing, or a review bombing incident — costs more in the first quarter and then settles. Prices are indicative only and depend on branch count, platform coverage and how much backlog exists on day one.",
    },
  ],

  related: {
    title: "Related pages",
    items: [
      { title: "Marketing for individual doctors", href: "/healthcare-marketing/doctors", body: "Building a consultant's own patient flow within the advertising rules." },
      { title: "Marketing for clinics", href: "/healthcare-marketing/clinics", body: "Local demand for single and multi-branch clinics." },
      { title: "Marketing for hospitals", href: "/healthcare-marketing/hospitals", body: "Reputation across facilities and departments." },
      { title: "Local SEO for clinics", href: "/healthcare-marketing/local-seo-for-clinics", body: "Where review prominence turns into map pack visibility." },
      { title: "Patient acquisition systems", href: "/healthcare-marketing/patient-acquisition", body: "What a review profile is worth once you measure the full funnel." },
      { title: "Custom tools for clinics", href: "/custom-tools/for-clinics", body: "Review invitation, monitoring and theme reporting built into your workflow." },
    ],
  },

  cta: {
    title: "Find out what your reviews are actually costing you",
    body: "We will audit every listing, code your last two years of negative reviews by theme, and show you the first page of search results for your name — with a plain assessment of what can be removed and what cannot.",
    primary: { label: "Get the reputation audit", href: "/get-started" },
    secondary: { label: "Book a 30-minute call", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Healthcare Reputation Management",
    serviceType: "Online Reputation and Review Management for Healthcare Providers",
    serviceDescription:
      "Ethical patient review generation, confidentiality-safe review responses, policy-based removal requests, review bombing response and search result displacement for doctors, clinics and hospitals.",
    audienceType: "Doctors, clinics, hospitals and diagnostic centres",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
