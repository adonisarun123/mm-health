import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Hospital Marketing Agency",
  description:
    "Hospital marketing that grows specific service lines: department-level demand capture, doctor profiles that rank, referral marketing",
  keywords: [
    "hospital marketing agency",
    "hospital marketing India",
    "healthcare marketing for hospitals",
    "service line marketing",
    "hospital SEO",
    "patient acquisition for hospitals",
    "medical tourism marketing",
  ],
  alternates: { canonical: "/healthcare-marketing/hospitals" },
  openGraph: {
    title: "Hospital Marketing Agency — Service Line Growth & Patient Demand",
    description:
      "Department-level demand, doctor profiles that rank, referral marketing and board-grade reporting for hospitals and health systems.",
    url: "/healthcare-marketing/hospitals",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/healthcare-marketing/hospitals",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Healthcare Marketing", path: "/healthcare-marketing" },
    { name: "For Hospitals", path: "/healthcare-marketing/hospitals" },
  ],
  eyebrow: "For hospitals and health systems",
  h1: "Hospital marketing built around service lines, not brand campaigns",
  answer:
    "Hospitals do not have one marketing problem. They have a cardiology problem, an orthopaedics problem and an oncology problem, each with different economics, competitors and patient journeys. Monk Mantra runs hospital marketing at the service line level — capturing department-specific demand, ranking your consultants, and reporting in admissions rather than reach.",
  subhead:
    "A brand campaign that lifts general awareness cannot tell you whether the new cath lab will fill. Service line marketing can, and it is the only version a finance committee can actually evaluate.",
  heroBullets: [
    "Demand modelled per department and per procedure",
    "Consultant profiles that rank for their own specialties",
    "Referral marketing to GPs and feeder clinics",
    "Reporting to enquiries, appointments and admissions",
  ],
  primaryCta: { label: "Request a service line audit", href: "/get-started" },
  secondaryCta: { label: "See hospital tooling", href: "/custom-tools/for-hospitals" },

  keyFacts: [
    { label: "Best suited to", value: "Multi-specialty hospitals, single-specialty chains, health systems and large diagnostic networks" },
    { label: "Unit of work", value: "The service line — cardiology, ortho, oncology, maternity, transplant, emergency" },
    { label: "Key channels", value: "Organic search, consultant profiles, local search per branch, paid search, referral marketing, reputation" },
    { label: "Main internal blocker", value: "Approval cycles across marketing, clinical and legal — we plan around it" },
    { label: "Realistic horizon", value: "4–6 months to meaningful service line movement" },
    { label: "Starting from", value: "₹45,000 per month, scaling with the number of service lines and facilities" },
    { label: "Also built in-house", value: "Referral portals, enquiry routing, department dashboards, patient feedback systems" },
  ],

  pains: {
    title: "Why hospital marketing underperforms its budget",
    intro:
      "Hospitals usually spend more than clinics and see less per rupee. The reasons are structural rather than creative.",
    items: [
      {
        problem: "The budget buys brand awareness nobody can attribute",
        fix:
          "Hoardings and mass media build recall but cannot tell you which department benefited. We shift the majority of measurable spend to service line demand capture, where a query maps to a procedure, a procedure maps to a margin, and the board can see the line.",
      },
      {
        problem: "Your consultants are invisible and patients choose doctors, not buildings",
        fix:
          "Most patients pick a cardiologist and accept the hospital attached. Hospital sites bury consultants in a directory with a photo and three lines of text. Each consultant should have a genuinely rankable profile — conditions treated, procedures, publications, languages, timings and a direct booking path.",
      },
      {
        problem: "Departments compete internally for the same page",
        fix:
          "Oncology, haematology and surgery all want the same query. Without a deliberate content architecture the site fights itself and none of the three ranks. We map every service line to an owned keyword territory and enforce it in the internal linking.",
      },
      {
        problem: "Referral flow from GPs and feeder clinics is unmanaged",
        fix:
          "For most tertiary service lines, referrals matter more than consumer marketing. That means a referral portal that is faster than a phone call, response-time commitments the referrer can see, and material that tells a GP exactly what you take and how quickly.",
      },
    ],
  },

  offerings: {
    title: "What hospital engagements cover",
    items: [
      {
        icon: "HeartPulse",
        title: "Service line demand programmes",
        body: "One programme per department: condition and procedure pages, cost transparency, patient journey content, and campaigns targeted at the specific intent that leads to that admission.",
      },
      {
        icon: "Stethoscope",
        title: "Consultant profile architecture",
        body: "Individually rankable, structured doctor pages with Physician schema, real credential detail, conditions treated and direct appointment booking — so the hospital ranks when the patient searches the doctor.",
      },
      {
        icon: "Building2",
        title: "Multi-branch local search",
        body: "A managed Google Business Profile per facility, department-level attributes, per-branch review flow and grid rank tracking across each catchment.",
      },
      {
        icon: "Share2",
        title: "Referral marketing",
        body: "A referral portal, referrer-facing service line material, turnaround commitments and reporting on which feeder practices actually send patients.",
      },
      {
        icon: "Megaphone",
        title: "Paid search at department level",
        body: "Separate accounts structure per service line so budget and cost per admission are visible individually rather than averaged into meaninglessness.",
      },
      {
        icon: "Globe",
        title: "Medical value travel",
        body: "For hospitals taking international patients: country-targeted content, cost comparison pages, visa and logistics information, and enquiry handling that works across time zones.",
      },
      {
        icon: "Star",
        title: "Reputation across facilities",
        body: "Review generation at discharge, structured response workflow with clinical governance sign-off, and alerting when a facility or department rating shifts.",
      },
      {
        icon: "LayoutDashboard",
        title: "Department dashboards",
        body: "Enquiry to appointment to admission by service line and facility, with cost per admission — built as a tool if your existing stack cannot produce it.",
        href: "/custom-tools/for-hospitals",
      },
      {
        icon: "ShieldCheck",
        title: "Compliance and governance",
        body: "Every asset reviewed against the Drugs and Magic Remedies Act schedule, CCPA advertising guidelines and DPDP data handling before it goes live.",
      },
    ],
  },

  process: {
    title: "How we run a hospital engagement",
    intro:
      "Hospitals have approval cycles. We plan for them instead of complaining about them, and start where sign-off is fastest.",
    items: [
      {
        duration: "Weeks 1–4",
        title: "Service line diagnostic",
        body:
          "Which departments have open capacity, which have margin, which have demand you are currently losing and to whom. We prioritise the intersection of capacity, margin and winnable search demand.",
      },
      {
        duration: "Weeks 3–8",
        title: "Foundations and quick wins",
        body:
          "Tracking and enquiry routing fixed, facility profiles rebuilt, consultant profile template built and rolled out, and compliance risks removed from live assets. Most of this needs no clinical sign-off, so it moves fast.",
      },
      {
        duration: "Months 2–6",
        title: "Service line rollout",
        body:
          "One department at a time, in priority order: content architecture, procedure and condition pages, paid search, referral material. Each line goes live before the next begins so results stay attributable.",
      },
      {
        duration: "Ongoing",
        title: "Governance and reallocation",
        body:
          "Monthly review at department level, quarterly reallocation toward the lines that are converting, and a standing compliance pass over everything published.",
      },
    ],
  },

  table: {
    caption: "Service line marketing versus hospital brand marketing",
    columns: ["Dimension", "Brand campaign", "Service line programme"],
    rows: [
      ["Unit of measurement", "Reach, recall, impressions", "Enquiries, appointments, admissions per department"],
      ["Attribution", "Weak — cannot isolate a department", "Direct — query maps to procedure maps to admission"],
      ["Budget decision", "Annual, negotiated on faith", "Quarterly, reallocated on evidence"],
      ["Time to signal", "Months, and ambiguous when it arrives", "6–16 weeks per line, unambiguous"],
      ["Best use", "New facility launch, sustained trust building", "Filling capacity and growing a specific department"],
      ["Risk", "Spend continues without a feedback loop", "Requires operational readiness in that department"],
    ],
  },

  prose: {
    title: "What changes when you market a hospital properly",
    blocks: [
      {
        heading: "Start where capacity and margin overlap",
        paragraphs: [
          "The instinct is to market the flagship department. The better move is to find where three things overlap: a department with genuinely open capacity, a procedure with sustainable margin, and search demand you are currently losing to a competitor. That intersection is where marketing spend converts fastest and where the internal case for continuing is easiest to make.",
          "It also protects you from the classic failure: generating demand a department cannot absorb. A campaign that produces sixty orthopaedic enquiries a week into a department that can see twenty creates angry patients, exhausted staff and a marketing function everyone resents.",
        ],
      },
      {
        heading: "Patients choose a doctor; the hospital comes along",
        paragraphs: [
          "For anything beyond emergency care, the decision sequence usually runs doctor first, hospital second. Yet most hospital websites treat consultants as a staff directory — a headshot, a designation, a list of degrees, no depth, no structured data, and no way to book.",
          "Treating each consultant profile as a landing page changes the economics of the whole site. It gives you hundreds of genuinely distinct, rankable pages, it captures name searches that currently land on aggregator profiles, and it lets you win specialty-plus-city queries that a single department page never could. It also gives your consultants something they value, which makes the internal cooperation you need much easier to get.",
        ],
        bullets: [
          "Physician structured data on every profile, with affiliation and specialty",
          "Conditions treated in patient language, not just procedure names",
          "Languages spoken, consulting timings and a direct booking link",
          "Publications, fellowships and teaching roles — the verifiable authority layer",
        ],
      },
      {
        heading: "Referrals are marketing, and almost nobody treats them that way",
        paragraphs: [
          "For tertiary and quaternary care, the referring physician is the customer. Yet referral relationships are typically run on personal contacts and phone calls, with no visibility into which practices send patients, which stopped, and why.",
          "A referral portal that acknowledges a referral instantly, commits to a response time, and closes the loop back to the referring doctor with an outcome summary is worth more than most consumer campaigns in these lines — and it is exactly the kind of narrow, high-value tool that never justifies an enterprise procurement cycle but can be built in weeks.",
        ],
      },
      {
        heading: "Reporting the board will actually accept",
        paragraphs: [
          "Marketing loses hospital budget arguments because it reports in vocabulary the finance committee does not price. Impressions and engagement rate are not decision inputs. Enquiries by department, conversion to consultation, conversion to admission, and cost per admission against contribution margin are.",
          "Getting there usually needs plumbing that does not exist yet — enquiry routing tagged by service line, tracking numbers per department, and a join between the marketing record and the appointment system. Because we build software as well as run campaigns, we can put that plumbing in rather than apologising for its absence.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "What is service line marketing for hospitals?",
      answer:
        "Service line marketing treats each clinical department as its own business with its own demand, competitors, economics and patient journey. Instead of one hospital brand campaign, you run separate programmes for cardiology, orthopaedics, oncology and so on, each measured on enquiries, appointments and admissions for that department. It is the only structure that lets you tell which marketing spend produced which admission, and therefore the only one a finance committee can evaluate properly.",
    },
    {
      question: "How long does hospital marketing take to show results?",
      answer:
        "Local search and profile work usually moves within eight to ten weeks. Paid search at department level produces enquiries within days once tracking is correct. Organic service line content typically takes four to six months to reach meaningful volume, because medical content competes against established institutional sites. Hospitals also carry internal approval cycles that add time, which is why we begin with the work that needs no clinical sign-off.",
    },
    {
      question: "How much do hospitals spend on marketing?",
      answer:
        "Hospital marketing budgets in India commonly land between two and six percent of revenue, varying widely with competitive intensity and whether the hospital is in growth or steady state. Rather than benchmarking a percentage, we would size against the departments you actually want to grow: the cost of filling twenty additional orthopaedic slots a month is a knowable number, and it is a far better basis for a budget conversation than an industry average.",
    },
    {
      question: "Can hospitals advertise in India?",
      answer:
        "Clinical establishments have more latitude than individual registered practitioners, whose advertising is directly restricted by the MCI Code of Ethics. There is an ongoing regulatory debate about whether that asymmetry should continue, and an NMC panel has recommended uniform norms. Regardless, the Drugs and Magic Remedies Act still prohibits advertising treatment to the public for its scheduled conditions, and the CCPA's misleading advertisement guidelines require every claim to be substantiable. We run hospital campaigns to the stricter standard by default.",
    },
    {
      question: "Do you work with hospital marketing teams or replace them?",
      answer:
        "We work alongside them. Most hospitals already have a marketing team that understands the institution far better than any agency will; what is usually missing is search and performance depth, plus the engineering capacity to build the measurement plumbing. We fill those gaps and hand over documented systems rather than creating a dependency.",
    },
    {
      question: "Can you help with international patient acquisition?",
      answer:
        "Yes. Medical value travel needs a different content set — country-specific pages, transparent cost comparisons, treatment timelines, visa and accommodation logistics, and enquiry handling that responds across time zones. It also needs realistic expectations: it is a long-horizon channel and it competes with well-funded facilitator platforms, so it works best as an addition to a healthy domestic programme rather than a rescue for a weak one.",
    },
  ],

  related: {
    title: "Related pages",
    items: [
      { title: "Marketing for clinics", href: "/healthcare-marketing/clinics", body: "Local demand for single and multi-branch clinics." },
      { title: "Marketing for individual doctors", href: "/healthcare-marketing/doctors", body: "Building a consultant's own patient flow." },
      { title: "Custom tools for hospitals", href: "/custom-tools/for-hospitals", body: "Referral portals, dashboards and enquiry routing." },
      { title: "SEO for doctors and clinics", href: "/healthcare-marketing/seo-for-doctors", body: "How medical content earns rankings and AI citations." },
      { title: "Patient acquisition systems", href: "/healthcare-marketing/patient-acquisition", body: "Measuring search through to admission." },
      { title: "Healthcare marketing overview", href: "/healthcare-marketing", body: "The full picture across provider types." },
    ],
  },

  cta: {
    title: "Which of your departments is losing demand right now?",
    body: "Name two or three service lines. We will come back with what patients in your catchment are searching for, who is currently capturing it, and what it would take to win it.",
    primary: { label: "Request the service line audit", href: "/get-started" },
    secondary: { label: "Speak to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Hospital Marketing Services",
    serviceType: "Hospital and Health System Marketing",
    audienceType: "Hospitals, health systems and specialty chains",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
