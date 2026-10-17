import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "AI Marketing Strategy",
  description:
    "An honest account of what AI does well in marketing, what it does badly, and where it quietly creates legal and reputational risk for regulated businesses.",
  keywords: [
    "AI marketing strategy",
    "AI marketing agency India",
    "AI content review",
    "generative engine optimisation",
    "AI marketing risk",
    "DPDP Act AI marketing",
    "AI in healthcare marketing",
  ],
  alternates: { canonical: "/services/ai-marketing-strategy" },
  openGraph: {
    title: "AI Marketing Strategy | Monk Mantra",
    description:
      "Where AI genuinely helps marketing, where it does not, and how to use it without publishing something you cannot defend.",
    url: "/services/ai-marketing-strategy",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/services/ai-marketing-strategy",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "AI Marketing Strategy", path: "/services/ai-marketing-strategy" },
  ],
  eyebrow: "AI marketing strategy",
  h1: "AI in marketing, described honestly rather than sold",
  answer:
    "AI marketing strategy is the work of deciding which marketing tasks a model should do, which it must not, and who reviews the output before it is published. Monk Mantra treats it as a scoping and governance problem rather than a product, because most of the commercial value sits in choosing correctly.",
  subhead:
    "The useful applications are real and mostly unglamorous. The dangerous ones are the ones being sold hardest. This page separates them.",
  heroBullets: [
    "A task-by-task view of what AI is actually good at today",
    "Human review mandatory on anything regulated or factual",
    "Built for a search landscape where the answer is often the destination",
    "Disclosure and data handling under the DPDP Act 2023",
  ],
  primaryCta: { label: "Get an AI readiness review", href: "/get-started" },
  secondaryCta: { label: "See all services", href: "/services" },

  keyFacts: [
    { label: "What it covers", value: "Task selection, tooling assessment, review workflow design, prompt and brief systems, AI-citation visibility, disclosure and data policy" },
    { label: "What it is not", value: "A platform, a licence, or a way to publish more pages faster" },
    { label: "Starting from", value: "₹25,000 for a scoped assessment; from ₹18,000 per month if we run the workflow" },
    { label: "Time to value", value: "Production workflow changes land in 3–6 weeks; visibility in AI answers moves on SEO timelines" },
    { label: "Best fit", value: "Teams producing a real volume of content or handling high enquiry volume, who want speed without publishing something indefensible" },
    { label: "Poor fit", value: "Anyone wanting content generated and published without a subject expert reading it" },
  ],

  pains: {
    title: "Why most AI marketing spending returns nothing",
    intro:
      "The failure is rarely the model. It is being sold a wrapper, applying it to the wrong task, and removing the review step that was doing the actual work.",
    items: [
      {
        problem: "The platform is a thin wrapper on a model API",
        fix:
          "A large share of tools marketed as AI marketing platforms are an interface, a prompt library and a subscription sitting on top of an API you could call directly. Before buying one, we establish what it adds beyond the underlying model — usually workflow, integrations or storage. If it adds none of those, the honest recommendation is to use the model directly and spend the difference on someone qualified to review the output.",
      },
      {
        problem: "Content is generated at volume and published unread",
        fix:
          "This is the single most common and most damaging pattern. Unreviewed content at scale does not rank, does not get cited, and in a regulated category it creates exposure that outlives the campaign. We treat generation as a first-draft step only, with a named human accountable for every published page.",
      },
      {
        problem: "Factual and clinical claims come out of a model unverified",
        fix:
          "Models produce fluent, confident text that is sometimes wrong, and they are wrong most convincingly in exactly the technical areas a lay reviewer cannot check. Anything asserting a medical, financial, legal or safety fact goes to a qualified reviewer with sources attached, or it does not get published.",
      },
      {
        problem: "Nobody decided what gets disclosed or what data goes in",
        fix:
          "Staff paste enquiry details, patient information and commercially sensitive material into consumer chat tools because no one told them not to. We write the policy: what may be pasted, into which tools, what is retained, and where AI involvement is disclosed to the reader.",
      },
    ],
  },

  offerings: {
    title: "Where we actually apply AI, and how",
    intro:
      "Each of these is a task we have judged worth automating or accelerating. The judgement, not the tool, is the deliverable.",
    items: [
      {
        icon: "Microscope",
        title: "Research synthesis",
        body: "Reading a large volume of source material — competitor pages, forum threads, review text, transcripts, guidelines — and returning the structure of an argument. Genuinely strong here, because a human is still reading the summary against the sources.",
      },
      {
        icon: "Megaphone",
        title: "Creative variation at volume",
        body: "Fifty headline variants, twenty ad descriptions, a dozen framings of the same offer. Ad platforms reward volume of variation, and this is the clearest cost saving AI offers marketing today.",
        href: "/services/ppc-management",
      },
      {
        icon: "Target",
        title: "Bid and budget optimisation inside ad platforms",
        body: "Smart Bidding, broad match with strong signals and automated placements work well when the conversion data feeding them is clean. Most of this work is fixing the inputs, not choosing the algorithm.",
      },
      {
        icon: "Workflow",
        title: "Classification and routing",
        body: "Sorting enquiries by intent, urgency and service line, tagging call transcripts, flagging complaints, routing to the right team. Reliable, testable against a ground truth, and immediately useful in high-volume front desks.",
        href: "/services/marketing-automation",
      },
      {
        icon: "FileText",
        title: "First-draft production",
        body: "Structured drafts from a detailed brief, with the outline, sources and angle set by a human first. The draft saves time on assembly; it never saves the review.",
        href: "/services/content-marketing",
      },
      {
        icon: "Activity",
        title: "Anomaly detection in analytics",
        body: "Catching the tracking break, the sudden cost-per-lead shift, the traffic drop confined to one template. Machines are better than humans at noticing a change in a dull number every day.",
        href: "/services/analytics-reporting",
      },
      {
        icon: "Search",
        title: "Visibility inside AI answers",
        body: "Structuring pages so a model can lift a clean, attributable answer: direct responses, extractable fact blocks, named credentialled authors, and claims that can be corroborated on independent sources.",
        href: "/services/seo-organic-growth",
      },
      {
        icon: "ShieldCheck",
        title: "Review workflow and accountability",
        body: "A named reviewer per content type, a checklist that includes source verification, a visible review date, and a record of who approved what. This is the part that makes the speed safe.",
      },
      {
        icon: "Lock",
        title: "Data handling and disclosure policy",
        body: "What may be entered into which tools, retention and training settings, vendor assessment, and where AI involvement is disclosed — written against the DPDP Act 2023 rather than borrowed from a US template.",
      },
    ],
  },

  process: {
    title: "How an AI engagement runs",
    intro: "Inventory the work, sort it by suitability, then rebuild the workflow around the sort.",
    items: [
      {
        duration: "Weeks 1–2",
        title: "Task inventory",
        body:
          "We list what your marketing function actually does each week, at the level of individual tasks rather than job titles. Most teams have never seen this written down, and the list itself usually changes the conversation.",
      },
      {
        duration: "Weeks 2–3",
        title: "Sort by suitability and risk",
        body:
          "Each task is scored on whether a model does it reliably today and what a bad output would cost. Anything with regulatory exposure or an unverifiable factual claim is marked human-only regardless of how well the model performs on a sample.",
      },
      {
        duration: "Weeks 3–6",
        title: "Build the workflow",
        body:
          "Briefs, prompt patterns, review checkpoints and tooling put in place for the tasks that passed. We prefer the smallest tool that does the job, and we test outputs against a set of cases you agree beforehand.",
      },
      {
        duration: "Ongoing",
        title: "Audit and revise",
        body:
          "Model behaviour changes, and so does what it is good at. We re-run the sort periodically, sample published output for quality drift, and remove automation that stopped earning its place.",
      },
    ],
  },

  table: {
    caption: "Marketing tasks against what AI can actually do today",
    columns: ["Task", "Is AI good at this today?", "What still needs a human", "Our position"],
    rows: [
      [
        "Synthesising research from many sources",
        "Yes, strong",
        "Checking the summary against the sources it claims",
        "Use it, with sources retained and spot-checked",
      ],
      [
        "Producing ad copy variants at volume",
        "Yes, strong",
        "Claim approval and brand judgement on the shortlist",
        "Use it — this is the clearest cost saving available",
      ],
      [
        "Bid and budget optimisation in ad platforms",
        "Yes, when signals are clean",
        "Conversion definitions, exclusions and margin logic",
        "Use it, but fix the inputs first or it optimises toward the wrong thing",
      ],
      [
        "Classifying and routing enquiries",
        "Yes, and measurable",
        "A sample audit and a fallback path for low confidence",
        "Use it — high value in high-volume front desks",
      ],
      [
        "Writing a published article on a technical subject",
        "Partly — first draft only",
        "Subject expert review, source verification, byline",
        "Draft with it, never publish without a qualified reviewer",
      ],
      [
        "Making claims about treatment, outcomes or medicines",
        "No",
        "A qualified clinician and a compliance check",
        "Human-authored and reviewed; the legal exposure is real",
      ],
      [
        "Deciding strategy, positioning and what not to do",
        "No",
        "Judgement about your market, margins and risk appetite",
        "Not delegated — a model has no stake in the outcome",
      ],
      [
        "Publishing content at volume without review",
        "No",
        "Everything",
        "We will not do this, and we will say so before you ask",
      ],
    ],
  },

  prose: {
    title: "What we think is true about AI in marketing right now",
    blocks: [
      {
        heading: "AI changed the marketing problem more than it changed the work",
        paragraphs: [
          "The important shift is not that copy is cheaper to produce. It is that a growing share of queries are answered without a click. Someone asks a question, reads a synthesised answer, and never visits a source. That has been the direction of travel for years with featured snippets, and generative answers have accelerated it.",
          "The commercial consequence is that being the cited source now matters in a way that being the tenth blue link never did. For informational queries, the objective moves from clicks to citations, and citations follow the same signals that always mattered: a clear direct answer, verifiable facts, a named author with real credentials, and corroboration elsewhere on the web. Commercial queries — someone choosing a provider — still produce clicks, and that is where we concentrate the conversion work.",
        ],
        bullets: [
          "Lead with the direct answer, then justify it with evidence",
          "Put facts in tables and structured blocks a model can lift cleanly",
          "Name authors and reviewers, with credentials and a review date",
          "Track branded search as a proxy for awareness created by answers you never got a click from",
        ],
      },
      {
        heading: "Content generated at volume does not rank or get cited",
        paragraphs: [
          "The pattern is consistent enough to state plainly. Sites that publish large quantities of unreviewed generated content see an initial indexation bump, then flat or declining performance, and in the worst cases a broad quality demotion that takes the rest of the site with it. Search engines are explicit that the problem is unhelpful content produced primarily for rankings, not the tool used to write it.",
          "Language models behave similarly when choosing what to cite. They favour sources that carry the markers of expertise — attribution, credentials, specificity, agreement with other credible sources. Generic generated prose has none of those markers, which is why the volume approach fails in both channels at once.",
          "The version that works is unglamorous: fewer pages, each one genuinely researched, drafted quickly with a model, then materially improved by someone who knows the subject and is willing to put their name on it.",
        ],
      },
      {
        heading: "Regulated categories are where this gets dangerous",
        paragraphs: [
          "In healthcare, the constraints are legal rather than stylistic. Doctor advertising in India is governed by the MCI Code of Ethics 2002, Regulation 6.1 — the National Medical Commission's 2023 replacement regulations were notified and then placed in abeyance, so they are not in force. The Drugs and Magic Remedies (Objectionable Advertisements) Act 1954 bars advertising treatment to the public for a schedule of more than fifty conditions. The CCPA's 2022 guidelines require that any claim be substantiable by the advertiser.",
          "A model does not know any of this about your specific page, and it will happily generate a confident sentence promising an outcome. That sentence is the liability, and it sits with the practice, not with the tool. So for healthcare clients, anything touching treatment, outcomes, comparisons or medicines is human-authored, clinician-reviewed and checked against those three instruments before it goes near a publish button.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not publish generated content without an expert reading it, and we will not run an arrangement where volume is the deliverable. We will not put patient data, enquiry records or identifiable personal information into consumer AI tools, and we will write the policy that stops your team doing it accidentally. We will not sell you a licence for a tool that is a wrapper on an API you could use directly.",
          "We will also tell you when the answer is that AI is not the constraint. A practice converting twelve enquiries out of forty does not have a content problem that faster drafting solves. It has a follow-up problem, and no model fixes a missed call at seven in the evening.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Can AI write our marketing content for us?",
      answer:
        "It can write a first draft quickly from a good brief, and that is a genuine saving on assembly time. It cannot be the last step. Unreviewed generated content performs poorly in search, is rarely cited by AI answers, and in a regulated category creates exposure the business carries. The workable model is a human-set brief, a model-produced draft, then substantial editing and verification by someone who knows the subject and will sign their name to it.",
    },
    {
      question: "Are AI marketing platforms worth paying for?",
      answer:
        "Sometimes, but check what you are buying. Many are an interface and a prompt library on top of a model API, priced as software. The ones worth paying for add something the model does not: integration with your ad accounts or CRM, workflow and approvals, retention controls, or genuine proprietary data. If a tool adds none of those, use the underlying model directly and spend the difference on the expert review that actually determines whether the output works.",
    },
    {
      question: "Will AI content hurt our search rankings?",
      answer:
        "The tool is not the issue; the quality and the review are. Search engines have said repeatedly that they assess whether content is helpful, original and demonstrably expert, not how it was produced. In practice, sites publishing large volumes of unreviewed generated pages tend to see an early indexation rise followed by decline, and sometimes a site-wide quality demotion. A small number of properly researched, expert-reviewed pages consistently outperforms a large number of generated ones.",
    },
    {
      question: "Is it safe to put customer or patient data into AI tools?",
      answer:
        "Not into consumer tools by default. Under the DPDP Act 2023, with its Rules notified in November 2025, you remain accountable for personal data you hand to a processor, including consent basis, purpose limitation and breach handling. Enterprise tiers with contractual retention and no-training commitments can be acceptable for some categories; consumer chat interfaces generally are not. We write the policy and the list of what may and may not be entered, per tool.",
    },
    {
      question: "Do we have to disclose that AI was involved?",
      answer:
        "There is no blanket Indian law requiring a disclosure label on AI-assisted marketing copy today, but two things still apply. Claims must be substantiable under the CCPA 2022 guidelines regardless of who wrote them, and where content carries a professional byline the reader is entitled to expect that named person actually reviewed it. Our position is to disclose AI assistance on editorial content, never to attach a clinician's name to something they did not read, and to keep an internal record of who approved what.",
    },
    {
      question: "What does an AI marketing engagement actually deliver?",
      answer:
        "A written task inventory scored for suitability and risk, a set of briefs and prompt patterns for the tasks that passed, a review workflow with named accountability, a tooling recommendation including what not to buy, and a data-handling and disclosure policy. If we then run the workflow, the ongoing deliverable is the output itself plus a periodic audit for quality drift. The judgement about what to automate is the substance of the engagement.",
    },
  ],

  related: {
    title: "Related services",
    items: [
      { title: "SEO & organic growth", href: "/services/seo-organic-growth", body: "Where AI-answer visibility is actually earned." },
      { title: "Content marketing", href: "/services/content-marketing", body: "The editorial process a draft has to survive." },
      { title: "Marketing automation", href: "/services/marketing-automation", body: "Classification and routing, put into production." },
      { title: "Analytics & reporting", href: "/services/analytics-reporting", body: "Clean signals, without which optimisation targets the wrong thing." },
      { title: "PPC management", href: "/services/ppc-management", body: "Where automated bidding genuinely earns its keep." },
      { title: "Custom tools", href: "/custom-tools", body: "When the sensible answer is a small piece of software instead." },
    ],
  },

  cta: {
    title: "Find out which of your marketing tasks AI should touch",
    body: "We will inventory the work your team does, score each task for suitability and risk, and tell you plainly where AI helps and where it would create a problem you do not want.",
    primary: { label: "Request the readiness review", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "AI Marketing Strategy",
    serviceType: "AI Marketing Strategy and Governance",
    audienceType: "Healthcare providers, D2C brands, SaaS and service businesses",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
