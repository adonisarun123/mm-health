import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Education Marketing",
  description:
    "Enrolment marketing for schools, colleges, coaching and edtech — built around the CCPA 2024 coaching advertising rules and measured in enrolled students.",
  keywords: [
    "education marketing agency India",
    "school admission marketing",
    "coaching institute marketing",
    "edtech marketing agency",
    "college enrolment marketing",
    "CCPA coaching advertisement guidelines",
  ],
  alternates: { canonical: "/industries/education" },
  openGraph: {
    title: "Education Marketing | Monk Mantra",
    description:
      "Enrolment marketing built inside the CCPA coaching advertising rules, measured in enrolled students not enquiries.",
    url: "/industries/education",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/industries/education",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Education", path: "/industries/education" },
  ],
  eyebrow: "Education",
  h1: "Education marketing measured in enrolments, not enquiries",
  answer:
    "Education marketing works to an admission calendar, sells to a parent while persuading a student, and is now explicitly regulated for coaching institutes. Monk Mantra builds enrolment programmes around that reality — season-aware pacing, dual-audience content, compliant result claims, and reporting on enrolled students rather than form fills.",
  subhead:
    "The CCPA's coaching sector guidelines, issued in November 2024, ended the era of unqualified success claims. Institutes still using rank photographs without the required disclosures are carrying a live consumer-law exposure.",
  heroBullets: [
    "Built to the CCPA coaching advertising guidelines",
    "Dual-audience: the parent decides, the student vetoes",
    "Season-aware pacing against the admission calendar",
    "Reported on enrolled and retained students",
  ],
  primaryCta: { label: "Get a free enrolment audit", href: "/get-started" },
  secondaryCta: { label: "See all industries", href: "/industries" },

  keyFacts: [
    { label: "Who this is for", value: "Schools, colleges and universities, coaching and test-prep, skilling institutes, edtech platforms" },
    { label: "Primary channels", value: "Search, Meta and YouTube, WhatsApp counselling, local SEO, alumni and referral" },
    { label: "Regulatory layer", value: "CCPA Guidelines for Prevention of Misleading Advertisement in Coaching Sector, 13 November 2024" },
    { label: "Metrics that matter", value: "Cost per enquiry, enquiry to counselling, counselling to enrolment, cost per enrolled student" },
    { label: "Starting from", value: "₹15,000 per month, scaling with campus count and programme range" },
    { label: "Seasonality", value: "Demand concentrates sharply around admission and results cycles; pacing matters more than in most sectors" },
    { label: "Where we say no", value: "Guaranteed selection or assured placement claims — these are specifically prohibited" },
  ],

  pains: {
    title: "What holds enrolment back",
    intro:
      "Four issues recur across schools, coaching centres and edtech alike.",
    items: [
      {
        problem: "The campaign sells to the wrong person",
        fix:
          "For school and coaching admissions the parent controls the decision and the budget, but a student who refuses to attend ends it. The two audiences want different things — outcomes, safety and value for the parent; environment, peers and credibility for the student — and a single message serves neither well. We build parallel content and creative rather than a compromise.",
      },
      {
        problem: "Result claims that no longer comply",
        fix:
          "The CCPA's 2024 coaching guidelines require that where a successful candidate is used in advertising, the institute discloses the student's name and rank, the specific course taken, and whether it was paid for — with consent taken after the result rather than at enrolment. Guaranteed selection, assured scores and job placement promises are prohibited. Most existing creative in this sector fails this test.",
      },
      {
        problem: "Enquiries pile up during the season and nobody follows up",
        fix:
          "Admission demand is compressed into a few weeks, counselling teams are overwhelmed, and a large share of enquiries are never contacted twice. Automated acknowledgement, WhatsApp counselling flows and a structured follow-up sequence recover more enrolments than an increase in media budget would.",
      },
      {
        problem: "Spending is flat across a sharply seasonal year",
        fix:
          "Budget spread evenly across twelve months underspends when parents are actually deciding and wastes money when nobody is. We pace against the admission and results calendar, front-load brand and content work in the quiet months, and hold acquisition budget for the windows that convert.",
      },
    ],
  },

  offerings: {
    title: "What an education engagement covers",
    items: [
      {
        icon: "ShieldCheck",
        title: "Compliant claims framework",
        body: "A reviewed library of what can and cannot be said about results, placements and outcomes, with the disclosure format the CCPA guidelines require built into every creative template.",
      },
      {
        icon: "Search",
        title: "Search and local visibility",
        body: "Course, exam and locality demand captured properly, plus Google Business Profile management for every campus or centre.",
        href: "/services/seo-organic-growth",
      },
      {
        icon: "FileText",
        title: "Dual-audience content",
        body: "Parent-facing material on outcomes, fees, safety and value; student-facing material on environment, peers, faculty and daily reality. Published separately rather than blended.",
        href: "/services/content-marketing",
      },
      {
        icon: "Megaphone",
        title: "Paid search and social",
        body: "Campaigns paced to the admission calendar, targeted to realistic catchment for day schools and nationally for residential or online programmes.",
        href: "/services/ppc-management",
      },
      {
        icon: "Video",
        title: "Campus and faculty video",
        body: "Walkthroughs, a day-in-the-life, faculty explaining how they teach — the assets that answer what a brochure cannot, for both audiences at once.",
        href: "/services/video-marketing",
      },
      {
        icon: "MessageSquare",
        title: "WhatsApp counselling flows",
        body: "Instant acknowledgement, structured qualification, prospectus delivery, counselling appointment booking and follow-up on enquiries that stalled.",
        href: "/custom-tools/whatsapp-automation-for-clinics",
      },
      {
        icon: "Users",
        title: "Alumni and referral programmes",
        body: "Structured referral from current parents and alumni, consistently the highest-converting and cheapest enrolment source in this sector and almost always run informally.",
      },
      {
        icon: "CalendarCheck",
        title: "Admission funnel systems",
        body: "Enquiry capture, counselling scheduling, document collection and application tracking, built as a tool where your existing systems cannot.",
        href: "/custom-tools",
      },
      {
        icon: "LayoutDashboard",
        title: "Enrolment reporting",
        body: "Enquiry to counselling to application to enrolment, by source and by programme, with cost per enrolled student as the headline.",
        href: "/services/analytics-reporting",
      },
    ],
  },

  process: {
    title: "How an enrolment engagement runs",
    items: [
      {
        duration: "Weeks 1–2",
        title: "Compliance and funnel audit",
        body:
          "Existing creative reviewed against the CCPA coaching guidelines and consumer law generally, plus a baseline of conversion at each stage from enquiry through to enrolled student.",
      },
      {
        duration: "Weeks 2–5",
        title: "Fix follow-up before adding volume",
        body:
          "WhatsApp acknowledgement, counselling scheduling and structured follow-up live. During season this alone typically recovers enrolments that were already paid for once.",
      },
      {
        duration: "Off-season months",
        title: "Build the durable assets",
        body:
          "Search visibility, campus and faculty video, parent and student content, alumni proof. Built when demand is low so it is working when demand arrives.",
      },
      {
        duration: "Admission season",
        title: "Pace hard, then stop",
        body:
          "Acquisition budget concentrated into the decision windows, monitored daily against seat availability by programme, and cut when a cohort fills rather than continuing to generate enquiries you cannot serve.",
      },
    ],
  },

  table: {
    caption: "What the CCPA coaching guidelines require of your advertising",
    columns: ["If you advertise…", "You must disclose…", "You cannot…"],
    rows: [
      [
        "A successful candidate or ranker",
        "Name, rank, the specific course taken, and whether the student paid for it",
        "Use the image or result without consent obtained after the result was declared",
      ],
      [
        "Selection or success rates",
        "The basis of the figure, in font size comparable to the rest of the claim",
        "State a rate that cannot be substantiated on request",
      ],
      [
        "Courses and faculty",
        "Accurate duration, fees, refund policy and faculty qualifications",
        "Misrepresent infrastructure, facilities or who actually teaches",
      ],
      [
        "Outcomes",
        "Any material conditions attached",
        "Promise guaranteed admission, assured scores or assured job placement",
      ],
      [
        "Limited-time offers",
        "Genuine terms and a real deadline",
        "Manufacture artificial urgency to force a decision",
      ],
      [
        "Anything, via an endorser",
        "That the endorsement is paid, where it is",
        "Rely on the endorser having not verified the claim; both carry accountability",
      ],
    ],
  },

  prose: {
    title: "How enrolment actually gets won",
    blocks: [
      {
        heading: "Two audiences, one decision",
        paragraphs: [
          "A parent is buying an outcome and managing a risk: will this improve my child's prospects, is it safe, is it worth the money, and will I be able to talk to someone when I have a concern. A student is deciding whether they can imagine themselves there: who else goes, what the day feels like, whether the faculty seem credible, whether they will be miserable.",
          "Campaigns that average these two into one message land weakly on both. The stronger approach is parallel: parent-facing pages on outcomes, fees, transport and pastoral care; student-facing video and social on environment, peers and teaching. The parent converts the enquiry, the student prevents the veto.",
        ],
        bullets: [
          "Publish fee structures rather than hiding them behind an enquiry form",
          "Answer transport, safety and pastoral questions directly — parents ask these first",
          "Let students hear from students, not from the marketing department",
          "Make the counselling appointment easy to book without a phone call",
        ],
      },
      {
        heading: "The season is short and follow-up is the constraint",
        paragraphs: [
          "Admission demand is compressed. In the weeks around results and application deadlines, an institute may receive more enquiries than its counselling team can process, and the surplus is simply lost — not because the marketing failed but because nobody called back.",
          "Fixing this before the season starts is the single highest-return piece of work in education marketing. Automated acknowledgement within seconds, structured qualification so counsellors spend their time on serious prospects, appointment booking that does not require a phone call, and a follow-up sequence for the enquiries that went quiet. It is unglamorous and it converts enquiries you have already paid for.",
        ],
      },
      {
        heading: "Compliance changed in 2024 and much of the sector has not caught up",
        paragraphs: [
          "The Central Consumer Protection Authority issued its Guidelines for Prevention of Misleading Advertisement in the Coaching Sector on 13 November 2024. They require that where a successful candidate appears in advertising, the institute discloses the student's name and rank, the course actually taken, and whether the student paid for it — with consent obtained only after the result was declared. Guaranteed selection, assured ranks and assured placement claims are prohibited, disclaimers must be as legible as the claim itself, and endorsers carry accountability for verifying what they promote.",
          "Institutes still running rank walls without these disclosures are exposed under the Consumer Protection Act, 2019. We treat this as a creative-system problem: build the disclosure into the template once, and the exposure disappears without slowing production every season.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not write guaranteed selection, assured score or assured placement claims. We will not use a student's photograph or result without consent taken after the result. We will not manufacture urgency around an admission deadline that is not real.",
          "We also will not keep generating enquiries once a cohort has filled. Continuing to advertise seats that no longer exist produces refunds, complaints and reviews that cost more than the enquiries were worth.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Can coaching institutes advertise their toppers and results?",
      answer:
        "Yes, with mandatory disclosures. Under the CCPA's November 2024 coaching sector guidelines, any advertisement featuring a successful candidate must disclose the student's name and rank, the specific course they took, and whether that course was paid for. Consent to use their name, image or result must be obtained after the result is declared, not at the time of enrolment. Claims of guaranteed selection, assured rank or assured placement are prohibited outright.",
    },
    {
      question: "How should an education budget be spread across the year?",
      answer:
        "Not evenly. Demand concentrates sharply around results announcements and application deadlines, so acquisition budget should be paced into those windows and reduced substantially outside them. The quieter months are best used for the durable assets — search visibility, campus and faculty video, parent-facing content, alumni proof — which are then working when the season arrives. Spending flat across twelve months underserves the weeks that decide the year.",
    },
    {
      question: "What is a reasonable cost per enrolled student?",
      answer:
        "It depends entirely on fee level and programme length, so there is no transferable benchmark. The useful calculation is against the total fee value of a student across their time with you, less delivery cost. A three-year programme can justify far higher acquisition spend than a six-week course. We establish your enquiry-to-enrolment rate at each stage first, because most institutes know their cost per enquiry and not their cost per enrolment.",
    },
    {
      question: "Do schools need marketing, or is word of mouth enough?",
      answer:
        "Word of mouth remains the strongest source in this sector and it is not enough on its own for most institutions, because it only reaches families already connected to your community. Digital presence matters at the moment a parent who has heard your name searches for you and finds either a credible answer or nothing. For most schools the priority is not campaigns but findability, transparency on fees and admissions, and structured referral from existing parents.",
    },
    {
      question: "Does this apply to edtech platforms as well as physical institutes?",
      answer:
        "The coaching sector guidelines are framed around coaching centres, and a platform providing coaching or test preparation should assume they apply to its advertising. Beyond that, the CCPA's 2022 misleading advertisement guidelines apply to every business, so outcome and success claims need substantiation regardless of delivery model. Edtech also carries a distinct problem the guidelines do not address: completion and outcome rates that are far weaker than advertising implies.",
    },
    {
      question: "Can you help with international student recruitment?",
      answer:
        "Yes, though it is a different discipline. Country-specific content, visa and accommodation information, fee transparency in the student's own currency, agent and counsellor relationships, and enquiry handling across time zones all matter more than campaign creative. It is also a long-horizon channel that works best alongside a healthy domestic pipeline rather than as a rescue for weak local enrolment.",
    },
  ],

  related: {
    title: "Related",
    items: [
      { title: "SEO & organic growth", href: "/services/seo-organic-growth", body: "Course, exam and locality demand." },
      { title: "PPC management", href: "/services/ppc-management", body: "Season-paced paid acquisition." },
      { title: "Video marketing", href: "/services/video-marketing", body: "Campus and faculty video for both audiences." },
      { title: "Custom tools", href: "/custom-tools", body: "Admission funnel, counselling scheduling and follow-up." },
      { title: "Analytics & reporting", href: "/services/analytics-reporting", body: "Cost per enrolled student, by source." },
      { title: "All industries", href: "/industries", body: "The other sectors we work in." },
    ],
  },

  cta: {
    title: "Have your admission creative reviewed before the season",
    body: "We will audit your live advertising against the CCPA coaching guidelines, map your enquiry-to-enrolment funnel, and tell you where the season is leaking.",
    primary: { label: "Get the free enrolment audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Education Marketing",
    serviceType: "Education and Enrolment Marketing",
    audienceType: "Schools, colleges, coaching institutes and edtech platforms",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
