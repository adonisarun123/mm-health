import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "SEO for Doctors & Clinics",
  description:
    "Medical SEO for doctors and clinics in India: YMYL-grade content, clinician review bylines, entity building, condition page architecture",
  keywords: [
    "SEO for doctors",
    "medical SEO",
    "healthcare SEO agency India",
    "SEO for clinics",
    "medical website SEO",
    "YMYL medical content",
    "structured data for doctors",
  ],
  alternates: { canonical: "/healthcare-marketing/seo-for-doctors" },
  openGraph: {
    title: "SEO for Doctors — Medical SEO That Survives Scrutiny",
    description:
      "Medical content is graded harder than everything else on the web. Here is how doctors and clinics rank, and get cited by AI answers.",
    url: "/healthcare-marketing/seo-for-doctors",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/healthcare-marketing/seo-for-doctors",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Healthcare Marketing", path: "/healthcare-marketing" },
    { name: "SEO for Doctors", path: "/healthcare-marketing/seo-for-doctors" },
  ],
  eyebrow: "Medical SEO",
  h1: "SEO for doctors: content that survives a stricter grade",
  answer:
    "Medical SEO is search optimisation held to a higher evidentiary bar. Health pages are classified as YMYL — Your Money or Your Life — so search engines weigh author credentials, factual accuracy and site trust far more heavily than on ordinary topics. Ranking therefore depends on verifiable authorship, correct structure and technical health.",
  subhead:
    "You are not competing on keyword density. You are competing on whether a system can confirm that a qualified clinician stands behind the page, and whether the page answers the question cleanly enough to be quoted.",
  heroBullets: [
    "Named clinician review byline and review date on every clinical page",
    "Condition, symptom and procedure pages built as separate architectures",
    "MedicalWebPage, Physician and FAQPage structured data applied correctly",
    "Written to be extractable by AI overviews, ChatGPT and Perplexity",
  ],
  primaryCta: { label: "Get a free medical SEO audit", href: "/get-started" },
  secondaryCta: { label: "See the healthcare marketing overview", href: "/healthcare-marketing" },

  keyFacts: [
    { label: "What it is", value: "Search optimisation for health content, graded under YMYL quality standards" },
    { label: "Applies to", value: "Individual consultants, clinics, multi-branch groups and hospital service lines" },
    { label: "Decisive factor", value: "Verifiable authorship and review — a named, credentialled clinician with a review date" },
    { label: "Core architecture", value: "Symptom pages, condition pages and procedure pages linked hub-and-spoke" },
    { label: "Structured data used", value: "MedicalWebPage, Physician, MedicalCondition, MedicalProcedure, FAQPage, LocalBusiness" },
    { label: "Realistic timeline", value: "Movement on long-tail condition queries in 3–4 months, competitive terms 6–12" },
    { label: "Starting from", value: "₹15,000 per month, scaling with how many conditions you want covered" },
  ],

  pains: {
    title: "Why medical sites plateau",
    intro:
      "Health sites rarely fail for exotic reasons. They fail on four repeatable things, and all four are fixable without publishing more.",
    items: [
      {
        problem: "Nobody can tell who wrote the page",
        fix:
          "An unattributed article on a treatment decision is exactly what YMYL grading is designed to demote. Every clinical page needs a named author or reviewer, their qualifications and registration, a linked biography page, and a visible review date. This one change moves more medical sites than any keyword work.",
      },
      {
        problem: "The site has no entity footprint",
        fix:
          "Search engines resolve a doctor or clinic as an entity by cross-referencing the same details in many places. If your registration number, qualifications, hospital affiliations and address appear inconsistently across your site, your profiles and third-party directories, you stay a string of text rather than a known entity.",
      },
      {
        problem: "Everything is a procedure page",
        fix:
          "Most medical sites are a list of treatments they sell. Patients search symptoms and worries months before they search a procedure name. Without a symptom and condition layer feeding the procedure layer, you only reach people who already decided — the smallest and most expensive part of the market.",
      },
      {
        problem: "The page ranks but never gets quoted",
        fix:
          "AI overviews and assistants lift short, self-contained answers from clearly structured pages with a verifiable author. A page that buries its answer in paragraph nine, uses vague headings and carries no attribution can rank and still be invisible in the answer layer that increasingly sits above it.",
      },
    ],
  },

  offerings: {
    title: "What a medical SEO engagement covers",
    items: [
      {
        icon: "ClipboardList",
        title: "YMYL content audit",
        body: "Every clinical page assessed for accuracy, attribution, citation quality, currency and claim risk. We flag what must be corrected before it can be optimised, including anything that breaches Regulation 6.1 or the Drugs and Magic Remedies Act schedule.",
      },
      {
        icon: "BadgeCheck",
        title: "Author and reviewer system",
        body: "Clinician biography pages with qualifications, registration number, affiliations and publications, wired to a review byline and review date that appears on every clinical page and in the structured data.",
      },
      {
        icon: "Search",
        title: "Entity and knowledge panel work",
        body: "Consistent name, address and phone across site, profiles and directories, cross-linked professional profiles, and structured data that ties the practice, the doctors and the locations into one resolvable entity.",
      },
      {
        icon: "FileText",
        title: "Condition and symptom architecture",
        body: "A hub for each condition with symptom, cause, diagnosis, treatment and cost spokes, then a distinct procedure layer for the patient who has already decided. Each layer written for a different stage of intent.",
      },
      {
        icon: "Cpu",
        title: "Structured data implementation",
        body: "MedicalWebPage with reviewedBy, MedicalCondition and MedicalProcedure where appropriate, Physician for clinician pages, FAQPage for genuine question blocks, and LocalBusiness per location.",
      },
      {
        icon: "Zap",
        title: "Technical health",
        body: "Core Web Vitals, mobile rendering, crawl budget, index bloat, canonical hygiene, redirect chains and internal link depth. Most healthcare sites we audit have a third of their pages either uncrawled or duplicated.",
      },
      {
        icon: "Share2",
        title: "Internal linking and topical depth",
        body: "Hub-and-spoke linking so authority concentrates on the pages that earn appointments, with contextual links written into the prose rather than bolted on as a related list.",
      },
      {
        icon: "Bot",
        title: "AEO — answer engine optimisation",
        body: "Pages restructured so an answer engine can lift a clean, correct, attributed answer: direct definition in the first two sentences, question-shaped headings, extractable tables and a named reviewer.",
      },
      {
        icon: "LineChart",
        title: "Reporting on outcomes",
        body: "Rankings by intent stage, non-branded organic enquiries, appointments attributed to organic, and citation appearances in AI answers. Not a traffic chart.",
      },
    ],
  },

  process: {
    title: "How the work is sequenced",
    intro:
      "Fix what is holding the site down before adding to it. Publishing on a broken foundation just makes the problem larger.",
    items: [
      {
        duration: "Weeks 1–3",
        title: "Audit and risk pass",
        body:
          "Technical crawl, index and Core Web Vitals review, content inventory graded against YMYL criteria, entity consistency check across every directory, and a compliance sweep of existing claims. You get a prioritised list, not a PDF of warnings.",
      },
      {
        duration: "Weeks 3–8",
        title: "Foundation and trust layer",
        body:
          "Clinician biography pages, review bylines, structured data, NAP correction, internal link restructure and the technical fixes that block crawling. Existing pages are rewritten or consolidated before anything new is published.",
      },
      {
        duration: "Months 3–7",
        title: "Topical build",
        body:
          "Condition clusters published one at a time, each drafted by us, reviewed by your clinician, and shipped with schema and internal links in place. Depth on one condition beats a thin page on ten.",
      },
      {
        duration: "Ongoing",
        title: "Refresh, measure and defend",
        body:
          "Quarterly re-review of clinical pages with an updated review date, refresh of pages losing position, expansion into the queries you now rank adjacent to, and monitoring of which pages get cited in AI answers.",
      },
    ],
  },

  table: {
    caption: "Generic SEO tactic versus what medical SEO actually requires",
    columns: ["Objective", "Generic SEO approach", "What medical SEO requires", "Reason for the difference"],
    rows: [
      [
        "Establish authority",
        "Build backlinks, publish frequently",
        "Named clinician author or reviewer with qualifications, registration and a visible review date",
        "Health pages are YMYL, so authorship and accuracy are graded before popularity",
      ],
      [
        "Write a page",
        "Target one keyword, hit a word count",
        "Answer the patient's real question first, cite guidance, state when to seek care",
        "Thin or unsourced health advice is the exact profile quality raters are told to demote",
      ],
      [
        "Site structure",
        "Service pages plus a blog",
        "Symptom, condition and procedure layers linked hub-and-spoke",
        "Patients search symptoms months before procedure names; each stage needs its own page",
      ],
      [
        "Structured data",
        "Organization and Article",
        "MedicalWebPage with reviewedBy, Physician, MedicalCondition, FAQPage, LocalBusiness",
        "Medical schema communicates credentials and page type that generic markup cannot",
      ],
      [
        "Trust signals",
        "Testimonials and badges",
        "Registration number, affiliations, sourcing, editorial and correction policy",
        "Testimonial advertising is restricted for practitioners and is unverifiable to a crawler",
      ],
      [
        "Content refresh",
        "Update when traffic drops",
        "Scheduled clinical re-review with a new reviewer date on the page",
        "Clinical guidance changes, and staleness is itself a quality signal on health topics",
      ],
      [
        "Winning the answer box",
        "Add a summary paragraph",
        "Direct answer in two sentences, question headings, extractable table, verifiable author",
        "Answer engines quote self-contained, attributable passages, not whole articles",
      ],
    ],
  },

  prose: {
    title: "The mechanics, in detail",
    blocks: [
      {
        heading: "YMYL: why your page is graded harder",
        paragraphs: [
          "Search quality guidelines classify pages that could affect a person's health, finances or safety as Your Money or Your Life. That classification does not add a ranking factor so much as raise the pass mark on the ones that already exist. A mediocre page about a holiday destination is acceptable. A mediocre page about a drug interaction is not.",
          "In practice this means three things are weighted unusually heavily on medical sites: who produced the content and whether they are qualified to, whether the site as a whole has a reputation that supports that claim, and whether the information is accurate and current. Volume of publishing does not compensate for weakness in any of them. This is why clinics that publish two articles a week often lose to a consultant with fourteen well-attributed pages.",
        ],
        bullets: [
          "Name the author or reviewer, with qualifications, on every clinical page",
          "Link the byline to a full biography carrying registration and affiliations",
          "Show a review date, and actually re-review on that cycle",
          "Cite recognised clinical sources rather than other marketing blogs",
          "Publish an editorial and correction policy the reader can find",
        ],
      },
      {
        heading: "Entity building: becoming a known thing rather than a string",
        paragraphs: [
          "Search engines want to resolve you into an entity — a specific doctor or clinic with attributes they can confirm. That happens through repetition and consistency. Your registration number, qualifications, specialty, hospital affiliations, address and phone number should be identical wherever they appear, and they should appear in enough independent places to corroborate each other.",
          "The most common failure is small and invisible: a suite number present on the site and absent from a directory, an old landline still live on three listings, a clinic name written two ways. Individually trivial, collectively enough to keep an entity unresolved. Cleaning this up is unglamorous work that reliably outperforms a quarter of content production.",
          "For groups, the same logic extends to structure. Each location must be its own resolvable entity with its own page, its own profile and its own consistent details, tied back to the parent organisation in markup rather than merged into it.",
        ],
      },
      {
        heading: "Condition pages and procedure pages are not the same page",
        paragraphs: [
          "A procedure page serves someone who has already decided what they need and is choosing where to have it done. It should carry cost context, what the appointment involves, who performs it, recovery expectations and how to book. It is a short page with commercial intent, and it converts.",
          "A condition or symptom page serves someone months earlier, frightened and searching in plain language. It should explain what the symptom commonly indicates, what would make it urgent, how it is usually diagnosed, what the general treatment options are, and when to see someone. It rarely converts on the first visit, and it is the entire reason the procedure page has an audience.",
          "The architecture that works is a hub per condition, with spokes for symptoms, causes, diagnosis, treatment options and cost, all linking down into the relevant procedure pages and across to the clinician who treats it. Authority collects on the hub, intent flows to the procedure page, and the internal linking does the work that a larger content budget would otherwise be spent on.",
        ],
      },
      {
        heading: "AEO: getting cited when the answer appears above the results",
        paragraphs: [
          "AI overviews, ChatGPT and Perplexity do not rank pages so much as select passages. They favour content that is self-contained, unambiguous, attributable and easy to extract. A page can rank third and never be quoted, and a page can be quoted while ranking below the fold. These are related but separate outcomes and they need separate work.",
          "The structural rules are consistent across engines. Put the direct answer in the first two sentences under the heading, in complete sentences that make sense with no surrounding context. Use headings phrased as the questions people actually ask. Put comparative information in a real table rather than prose, because tables extract cleanly. Keep each answer block to a single idea. And make the author verifiable, because an assistant asked a health question is disproportionately likely to prefer a source it can attribute to a named clinician.",
        ],
        bullets: [
          "Direct answer within the first two sentences, no preamble",
          "Headings written as questions, matching real search phrasing",
          "One idea per block, self-contained enough to quote alone",
          "Comparisons in tables, not paragraphs",
          "Named, credentialled reviewer with a date",
          "Consistent facts across the page, the profile and third-party sources",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "What is medical SEO and how is it different from normal SEO?",
      answer:
        "Medical SEO is search optimisation for health content, which search engines classify as YMYL — Your Money or Your Life — and grade against a stricter quality bar. The tactics overlap with ordinary SEO, but the weighting changes: who wrote the page, whether they are qualified, whether the site has a supporting reputation and whether the information is current all matter more than publishing volume or keyword placement. In practice a small, well-attributed, accurate medical site routinely outranks a large unattributed one.",
    },
    {
      question: "Does a doctor need to write the content personally?",
      answer:
        "No, but a qualified clinician must review it and be named on the page. The workable division of labour is that we draft from clinical sources and patient search behaviour, the doctor reviews for accuracy and adds the judgement only a practitioner has, and the page ships with that clinician's name, qualifications and the review date. This typically takes fifteen to twenty minutes of a doctor's time per page and is the single highest-return input in the whole programme.",
    },
    {
      question: "How long does SEO take for a medical website in India?",
      answer:
        "Expect early movement on long-tail condition and symptom queries within three to four months, and six to twelve months for competitive commercial terms like a procedure plus a major city. Local map pack results usually move faster, often within six to ten weeks, because that is a different ranking system. A site with existing technical problems or thin unattributed content spends the first two months getting to a clean baseline before any of that clock starts.",
    },
    {
      question: "What structured data should a doctor or clinic website use?",
      answer:
        "Use MedicalWebPage on clinical content with the reviewedBy property naming the clinician, Physician on doctor biography pages with qualifications and affiliations, MedicalCondition or MedicalProcedure where the page is genuinely about one, FAQPage only where visible questions and answers exist on the page, and LocalBusiness or MedicalClinic per physical location. Markup must describe what is actually on the page — schema that overstates credentials or invents ratings is a liability, not an advantage.",
    },
    {
      question: "How do I get my clinic cited in AI answers and ChatGPT?",
      answer:
        "Structure the page so a passage can be lifted safely. Put the direct answer in the first two sentences under a heading phrased as the question people ask, keep each block to one self-contained idea, put comparisons in tables rather than prose, and carry a named clinician reviewer with a date. Then make the same facts consistent across your site, your Google Business Profile and third-party directories, because assistants corroborate before they cite. Ranking well helps but does not guarantee citation; extractability and attributability do most of the work.",
    },
    {
      question: "Is medical SEO allowed under Indian medical advertising rules?",
      answer:
        "Yes. Regulation 6.1 of the MCI Code of Ethics 2002 restricts soliciting patients and self-promotional puffery, not the publication of factual information or health education — and it remains the operative rule, since the NMC's 2023 conduct regulations were placed in abeyance after notification. Where SEO gets a practice into trouble is superlatives, guaranteed outcomes, testimonial advertising, and content promoting treatment for conditions listed in the Drugs and Magic Remedies Act 1954 schedule. We write to that boundary deliberately.",
    },
  ],

  related: {
    title: "Related pages",
    items: [
      { title: "Local SEO for clinics", href: "/healthcare-marketing/local-seo-for-clinics", body: "The map pack is a separate ranking system with its own rules." },
      { title: "Marketing for individual doctors", href: "/healthcare-marketing/doctors", body: "The full programme for a consultant building a personal practice." },
      { title: "Marketing for clinics", href: "/healthcare-marketing/clinics", body: "Local search, ads and booking for a practice with a front desk." },
      { title: "Marketing for hospitals", href: "/healthcare-marketing/hospitals", body: "Service-line SEO across a large site with many stakeholders." },
      { title: "Google Ads for doctors", href: "/healthcare-marketing/google-ads-for-doctors", body: "What to do while the organic work compounds." },
      { title: "Patient acquisition systems", href: "/healthcare-marketing/patient-acquisition", body: "Tracking organic visits through to attended appointments." },
    ],
  },

  cta: {
    title: "Find out what is actually holding your site back",
    body: "We will crawl your site, grade your clinical pages against YMYL criteria, check your entity consistency across directories, and send you a prioritised list of what to fix first.",
    primary: { label: "Request the SEO audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Medical SEO for Doctors and Clinics",
    serviceType: "Healthcare Search Engine Optimisation",
    serviceDescription:
      "YMYL-grade medical SEO covering authorship and review systems, entity building, condition and procedure architecture, structured data, technical health and answer engine optimisation.",
    audienceType: "Doctors, clinics, multi-branch groups and hospitals",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
