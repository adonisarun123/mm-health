import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Patient CRM & Recall System",
  description:
    "A custom patient CRM for clinics and hospitals: one record per patient across visits and branches, enquiry pipeline",
  keywords: [
    "patient CRM",
    "healthcare CRM India",
    "patient recall system",
    "clinic CRM software",
    "patient retention software",
    "lapsed patient reactivation",
  ],
  alternates: { canonical: "/custom-tools/patient-crm" },
  openGraph: {
    title: "Patient CRM & Recall System",
    description:
      "One record per patient, an enquiry pipeline with an owner and a clock, and recall campaigns that bring back patients you already paid to acquire.",
    url: "/custom-tools/patient-crm",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/custom-tools/patient-crm",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Custom Tools", path: "/custom-tools" },
    { name: "Patient CRM", path: "/custom-tools/patient-crm" },
  ],
  eyebrow: "Retention, not acquisition",
  h1: "Patient CRM and recall — the cheapest patient you will ever book",
  answer:
    "A patient CRM holds one record per patient across every visit, branch and enquiry channel, and uses it to bring people back when they are due. It is the least glamorous system in a practice and usually the highest-return, because contacting an existing patient costs a message rather than a click.",
  subhead:
    "Every clinic has a list of satisfied patients who were due for a review and were never contacted. That list is the cheapest growth available, and almost nobody works it.",
  heroBullets: [
    "One record across visits, branches and channels",
    "Enquiry pipeline with an owner and a response clock",
    "Recall rules per treatment type, fired automatically",
    "Role-based access, so the front desk cannot read clinical notes",
  ],
  primaryCta: { label: "Get a fixed-price scope", href: "/get-started" },
  secondaryCta: { label: "See all custom tools", href: "/custom-tools" },

  keyFacts: [
    { label: "What it is", value: "A single patient record plus an enquiry pipeline and a recall engine on top of it" },
    { label: "Built for", value: "Clinics, multi-branch groups, hospitals and diagnostic chains" },
    { label: "Timeline", value: "3–6 weeks depending on data migration and integrations" },
    { label: "Starting from", value: "₹25,000 one-time, rising with data migration and integration scope" },
    { label: "Highest-return feature", value: "Recall and lapsed-patient reactivation" },
    { label: "Data handling", value: "Role-based access, purpose-bound consent, defined retention, access logs" },
  ],

  pains: {
    title: "What a missing patient record actually costs",
    items: [
      {
        problem: "The same patient exists four times under three phone numbers",
        fix:
          "Enquiries arrive by call, WhatsApp, form and walk-in, and each creates a separate trace. Without deduplication and a single identity, you cannot tell a new patient from a returning one, which makes every acquisition number you report wrong.",
      },
      {
        problem: "Enquiries have no owner and no clock",
        fix:
          "An enquiry in a shared inbox belongs to nobody. Assignment, a visible response timer and ageing turn a pile of messages into a pipeline where the ones going cold are obvious before they are lost.",
      },
      {
        problem: "Patients due for a review are never contacted",
        fix:
          "A six-month dental review, an annual eye check, a physio follow-up cycle, a post-procedure scan — all knowable from the record, all routinely forgotten. Recall rules per treatment type fire these automatically instead of relying on someone remembering.",
      },
      {
        problem: "Nobody knows which patients stopped coming, or when",
        fix:
          "Lapsed-patient reactivation is the single cheapest campaign a practice can run, and it requires only a definition of what lapsed means for each service and a channel patients read. Most clinics have never run it once.",
      },
    ],
  },

  offerings: {
    title: "What the CRM includes",
    items: [
      {
        icon: "Users",
        title: "Unified patient record",
        body: "One identity across visits, branches, doctors and channels, with deduplication on phone number and name so the same person stops appearing four times.",
      },
      {
        icon: "Workflow",
        title: "Enquiry pipeline",
        body: "Every enquiry captured with its source, assigned an owner, moved through defined stages, with ageing visible and escalation when it stalls.",
      },
      {
        icon: "AlarmClock",
        title: "Recall engine",
        body: "Rules per treatment type — review intervals, repeat cycles, follow-up scans — firing automatically through WhatsApp or a call task list.",
      },
      {
        icon: "TrendingUp",
        title: "Lapsed-patient reactivation",
        body: "A defined lapse window per service, and a structured campaign to bring back patients who simply drifted rather than left.",
      },
      {
        icon: "MessageSquare",
        title: "Conversation history",
        body: "Every message, call outcome and note against the patient record, so the next person to speak to them is not starting from nothing.",
      },
      {
        icon: "BarChart3",
        title: "Source and cohort reporting",
        body: "Which channel produced which patient, first-visit value versus lifetime value, and retention by cohort, doctor and service.",
      },
      {
        icon: "Star",
        title: "Review and feedback triggers",
        body: "Post-visit review requests and feedback capture fired from the same record, uniformly, without filtering who gets asked.",
      },
      {
        icon: "Lock",
        title: "Role-based access",
        body: "Front desk sees contact and scheduling, clinicians see clinical notes, management sees aggregates. Access is logged.",
      },
      {
        icon: "Database",
        title: "Migration and integration",
        body: "Existing patient data cleaned, deduplicated and imported, with ongoing sync to your records or billing system where an API exists.",
      },
    ],
  },

  process: {
    title: "How it gets built",
    items: [
      {
        duration: "Days 1–3",
        title: "Define a patient and an enquiry",
        body:
          "Sounds trivial, is not. What counts as the same person, what counts as a new enquiry versus a follow-up, and what lapsed means for each service — these definitions determine whether every later number is meaningful.",
      },
      {
        duration: "Week 1",
        title: "Audit and clean the existing data",
        body:
          "We assess what you already hold, how duplicated it is and what can realistically be migrated. This is usually the least pleasant week and the one that decides the quality of everything after.",
      },
      {
        duration: "Weeks 2–5",
        title: "Build, migrate, integrate",
        body:
          "Record model, pipeline, recall rules and access control built, historical data migrated and deduplicated, integrations connected and tested against real records.",
      },
      {
        duration: "Launch",
        title: "Run the first recall campaign together",
        body:
          "We run the first reactivation campaign with your team so the process is proven and documented before it is handed over. It is also usually the moment the value becomes obvious.",
      },
    ],
  },

  table: {
    caption: "Recall rules by practice type",
    columns: ["Practice type", "Typical recall trigger", "Interval", "Why it is usually missed"],
    rows: [
      ["Dental", "Routine review and scaling", "6 months", "No system holds the date; the patient assumes they will remember"],
      ["Ophthalmology", "Annual eye examination, post-operative review", "6–12 months", "Follow-up scheduled verbally at discharge and never recorded"],
      ["Physiotherapy", "Incomplete treatment cycle", "1–4 weeks", "Patient stops mid-course when symptoms improve; nobody follows up"],
      ["Dermatology", "Repeat procedure cycle, chronic condition review", "4–12 weeks", "Treated as episodic when it is actually cyclical"],
      ["Diagnostics", "Repeat test for a monitored condition", "3–12 months", "The referring doctor owns the recall and the lab never asks"],
      ["General practice", "Chronic disease review, vaccination", "3–12 months", "No register of who is due, so it depends on the patient"],
    ],
  },

  prose: {
    title: "Why retention beats acquisition on cost, always",
    blocks: [
      {
        heading: "The arithmetic is not close",
        paragraphs: [
          "Acquiring a new patient means paying for visibility, competing for a click, converting an enquiry and hoping they attend. Contacting a patient who has already been to you, was satisfied, and is due for a review costs the price of a WhatsApp message and a few seconds of someone's attention.",
          "Even at low response rates, recall campaigns typically produce appointments at a small fraction of the cost per patient of any acquisition channel. The reason practices do not run them is not economics — it is that nobody owns the list, and the data needed to run it is scattered across a records system, a booking sheet and someone's memory.",
        ],
      },
      {
        heading: "Lifetime value should decide your ad budget",
        paragraphs: [
          "A practice that measures only first-visit value will systematically underspend on acquisition and misjudge which channels are working. A dental patient who returns twice a year for a decade, or an IVF patient whose journey spans multiple cycles, is worth an order of magnitude more than the first appointment suggests.",
          "You cannot compute that without a unified patient record. Once you have one, the budget conversation changes entirely: you stop asking what a lead costs and start asking what a patient is worth, which is the only version of the question that leads to a correct answer.",
        ],
        bullets: [
          "Track first-visit value and lifetime value separately, per service",
          "Report retention by cohort, not as a single overall figure",
          "Attribute the whole patient relationship to the original acquisition source",
          "Let the highest-lifetime-value services carry the highest acquisition budgets",
        ],
      },
      {
        heading: "Consent is what keeps the channel usable",
        paragraphs: [
          "Recall messaging is not transactional in the way an appointment reminder is — the patient did not ask for it at that moment. That makes explicit, recorded, purpose-bound consent essential, both under the Digital Personal Data Protection Act, 2023 and as a practical matter of not getting your number blocked.",
          "The discipline that follows is simple and worth stating plainly: capture recall consent separately at the first visit, tell the patient what it is for, honour withdrawal immediately, and never let a recall message drift into treatment advertising. The channel is only valuable while patients still read it.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "How is a patient CRM different from our practice management software?",
      answer:
        "Practice management software is built around the visit: scheduling, records, billing. A CRM is built around the relationship: every enquiry whether or not it became a patient, every channel they came through, where they are in a pipeline, and when they are next due. Most practice management systems have no concept of an enquiry that never converted, and no recall engine. The two are complementary, and we integrate rather than replace.",
    },
    {
      question: "What does a patient CRM cost to build?",
      answer:
        "From around ₹25,000 as a one-time build, with the final figure driven mainly by how much historical data needs cleaning and migrating and how many systems it must integrate with. Data migration is usually the largest single variable — a clean export is straightforward, whereas reconciling three overlapping spreadsheets and a records system takes real work and we scope it honestly rather than discovering it later.",
    },
    {
      question: "Can you migrate our existing patient data?",
      answer:
        "Usually yes, and we start by auditing what you actually hold. Most practices have significant duplication — the same patient under different phone numbers, name spellings and branches — so migration involves deduplication rules you sign off on rather than a straight import. Where records are on paper or in a closed system, we will tell you plainly what is and is not recoverable rather than promising a clean migration and delivering a mess.",
    },
    {
      question: "Is it appropriate to send recall messages to patients?",
      answer:
        "It is appropriate and generally welcomed when it is a genuine clinical reminder — a review that is due, a treatment cycle that was left incomplete — and when the patient consented to receive it. It stops being appropriate the moment it becomes promotional. We build recall as a clinical reminder with its own explicit consent, separate from any marketing consent, and with an opt-out that is honoured immediately across all message types.",
    },
    {
      question: "Who in the practice can see what?",
      answer:
        "Access is role-based by design. The front desk sees contact details, appointments and enquiry status but not clinical notes. Clinicians see the clinical record for their patients. Management sees aggregates and pipeline without needing individual clinical detail. Every access is logged, which matters both for internal trust and for your obligations as a data fiduciary under the DPDP Act.",
    },
    {
      question: "Will this work across multiple branches?",
      answer:
        "Yes, and it is one of the main reasons multi-branch groups ask for it. A patient who visits two branches should be one record, not two, and reporting should show retention and value per branch without fragmenting the person. Recall rules can differ by branch and by service, and the pipeline shows which branch owns each open enquiry so nothing falls between them.",
    },
  ],

  related: {
    title: "Related",
    items: [
      { title: "WhatsApp automation", href: "/custom-tools/whatsapp-automation-for-clinics", body: "The channel recall campaigns actually run on." },
      { title: "Appointment booking system", href: "/custom-tools/patient-appointment-booking-system", body: "Where new records originate." },
      { title: "Tools for clinics", href: "/custom-tools/for-clinics", body: "The wider front-desk toolset." },
      { title: "Patient acquisition", href: "/healthcare-marketing/patient-acquisition", body: "Cost per patient, lifetime value and funnel leaks." },
      { title: "Tools for hospitals", href: "/custom-tools/for-hospitals", body: "Referral portals and department-level reporting." },
      { title: "All custom tools", href: "/custom-tools", body: "The full range of builds." },
    ],
  },

  cta: {
    title: "How many patients are due back and have not been asked?",
    body: "Most practices cannot answer that. We will help you find the number, then build the system that stops it happening again.",
    primary: { label: "Get a fixed-price scope", href: "/get-started" },
    secondary: { label: "Book a 30-minute call", href: "/contact" },
  },

  schema: {
    type: "SoftwareApplication",
    serviceName: "Patient CRM and Recall System",
    applicationCategory: "HealthApplication",
    audienceType: "Clinics, hospitals and diagnostic chains",
    offersFrom: "80000",
    offersCurrency: "INR",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
