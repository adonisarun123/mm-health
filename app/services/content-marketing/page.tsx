import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Content Marketing Services",
  description:
    "Content run as an editorial system: topic clusters, briefs before writing, expert review, scheduled refreshes and distribution — measured in enquiries.",
  keywords: [
    "content marketing agency India",
    "content marketing services",
    "topic cluster strategy",
    "B2B content marketing",
    "healthcare content marketing",
    "content refresh strategy",
    "editorial calendar agency",
  ],
  alternates: { canonical: "/services/content-marketing" },
  openGraph: {
    title: "Content Marketing Services | Monk Mantra",
    description:
      "Topic clusters, briefs, expert review, refresh cycles and distribution — content built as a system rather than a blog.",
    url: "/services/content-marketing",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/services/content-marketing",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Content Marketing", path: "/services/content-marketing" },
  ],
  eyebrow: "Content marketing",
  h1: "Content as an editorial system, not a blog",
  answer:
    "Content marketing is the practice of publishing material that answers the questions buyers actually ask, structured so search engines and answer engines can use it. Monk Mantra runs it as a system — cluster architecture, briefs before writing, expert review, scheduled refreshes and distribution — reported in assisted enquiries rather than pageviews.",
  subhead:
    "Most content programmes fail at the same two points: nothing is planned before the writing starts, and nothing is maintained after it publishes. Both are process problems, not talent problems.",
  heroBullets: [
    "Clusters that cover a subject, not one page per keyword",
    "A written brief before anyone drafts",
    "Named, credentialled review on YMYL topics",
    "A refresh calendar, because decay is a maintenance failure",
  ],
  primaryCta: { label: "Get a content audit", href: "/get-started" },
  secondaryCta: { label: "See all services", href: "/services" },

  keyFacts: [
    { label: "What it covers", value: "Topic research, cluster architecture, briefs, writing, expert review, on-page structure, refresh cycles, distribution" },
    { label: "Starting from", value: "₹15,000 per month, scaling with volume, review depth and subject difficulty" },
    { label: "Output range", value: "Commonly four to twelve substantial pieces a month, fewer where clinical or technical review is required" },
    { label: "Time to payback", value: "Bottom-funnel pages from month two to three; pillar and educational content from month four to eight" },
    { label: "Reported on", value: "Assisted enquiries, entry-page enquiries, cluster-level organic growth, AI citation share" },
    { label: "Poor fit", value: "Anyone who needs volume this quarter, or who will not give access to a subject expert" },
  ],

  pains: {
    title: "Why content programmes stall",
    intro:
      "The pattern repeats across almost every audit we run. It is rarely the writing that is at fault.",
    items: [
      {
        problem: "One page per keyword instead of one cluster per subject",
        fix:
          "Publishing a separate page for every keyword variation produces thin pages that cannibalise each other and never accumulate authority. We map a subject once, decide which page owns which query territory, and build a pillar with genuine supporting pages linked into it. Depth beats page count, and it is the only route to being cited rather than skimmed.",
      },
      {
        problem: "Writing starts before anyone agrees what the page must do",
        fix:
          "Without a brief, the writer guesses the intent, the depth, the audience and the angle, and the review turns into a rewrite. Every piece we produce starts from a brief that names the query, the reader stage, the competing pages, the required sections, the sources, the internal links and the conversion action. It takes an hour and saves three rounds.",
      },
      {
        problem: "Nothing is refreshed, so everything quietly decays",
        fix:
          "Most organic decline is not an algorithm change, it is content that aged out — prices moved, guidance changed, competitors published something more complete. We keep a refresh calendar and treat updating a page that already ranks as higher-return work than publishing a new one, because it usually is.",
      },
      {
        problem: "Publication is treated as the finish line",
        fix:
          "A page nobody sees earns nothing while it waits for search to notice it. Distribution is roughly half the job: email to the owned list, the sales team using it in replies, social where the format fits, internal links from pages that already have authority, and outreach where the piece genuinely warrants a mention.",
      },
    ],
  },

  offerings: {
    title: "What a content engagement includes",
    intro:
      "The value is in the system around the writing. Anyone can produce words; very few programmes produce words that keep earning two years later.",
    items: [
      {
        icon: "Workflow",
        title: "Cluster architecture",
        body: "We map the subject completely, then decide which page owns which query territory before a word is written. One pillar, genuine supporting pages, internal links that concentrate authority rather than spreading it thin.",
      },
      {
        icon: "ClipboardList",
        title: "Briefs before drafting",
        body: "Each piece gets a written brief: the query and intent, the reader stage, what the current top results cover and miss, required sections, source list, internal links and the conversion action the page is responsible for.",
      },
      {
        icon: "Microscope",
        title: "Subject-matter review",
        body: "Clinical, financial and legal content goes to a named, credentialled reviewer whose name and review date appear on the page. On YMYL subjects this is not a nicety — anonymous content on those topics does not rank and does not get cited.",
      },
      {
        icon: "FileText",
        title: "Production",
        body: "Long-form explainers, comparison pages, cost and pricing pages, condition and use-case pages, case studies where a client will genuinely go on record, and thought leadership written from an actual point of view.",
      },
      {
        icon: "Search",
        title: "Answer-first structure",
        body: "A direct answer in the first two sentences, facts in tables and definition lists rather than buried in narrative, FAQ and Article markup, and a visible author with credentials — the structure that gets a page quoted in an AI answer.",
        href: "/services/seo-organic-growth",
      },
      {
        icon: "AlarmClock",
        title: "Refresh cycle",
        body: "A calendar of what gets reviewed when, driven by decay signals rather than by age alone. Prices, guidance, screenshots, statistics and competitor coverage all get checked, and the review date on the page is honest.",
      },
      {
        icon: "Send",
        title: "Distribution",
        body: "Owned email, sales enablement, social formats that suit the piece, internal linking from authoritative pages, and selective outreach. Publishing is the middle of the process, not the end.",
        href: "/services/email-marketing",
      },
      {
        icon: "Database",
        title: "Content operations",
        body: "A live inventory of every page with its owner, review date, target query, current position and enquiry contribution — so the programme can be audited by anyone, including a new marketing head six months from now.",
      },
      {
        icon: "LineChart",
        title: "Measurement",
        body: "Assisted enquiries by entry page, cluster-level growth, scroll and engagement as diagnostics rather than KPIs, and citation share in AI answers for the queries that matter commercially.",
        href: "/services/analytics-reporting",
      },
    ],
  },

  process: {
    title: "How a content engagement runs",
    intro: "Plan the territory, build one cluster properly, then maintain it. Scattered publishing is the most common and most expensive mistake.",
    items: [
      {
        duration: "Weeks 1–3",
        title: "Audit and territory map",
        body:
          "Inventory of what exists and what it earns, cannibalisation check, competitor gap analysis, interviews with sales and with your subject experts, and a cluster map that sequences the next two quarters by commercial value rather than by ease.",
      },
      {
        duration: "Weeks 3–6",
        title: "Fix and consolidate first",
        body:
          "Merge or remove thin and duplicate pages, refresh the pages already ranking on page two, rebuild internal links. This routinely produces the first movement, before a single new piece is published.",
      },
      {
        duration: "Months 2–6",
        title: "Build clusters to completion",
        body:
          "One subject at a time, finished before the next starts. Brief, draft, expert review, structure, publish, distribute. A half-built cluster ranks like nothing at all, which is why we resist spreading production across five topics.",
      },
      {
        duration: "Ongoing",
        title: "Refresh, expand, retire",
        body:
          "Scheduled updates on decaying pages, new territory where the gap analysis shows an opening, and removal of pages that will never earn. Pruning is part of the job and most programmes never do it.",
      },
    ],
  },

  table: {
    caption: "Content types, what each is for, and how we judge it",
    columns: ["Content type", "What it is for", "Realistic time to payback", "How we measure it"],
    rows: [
      [
        "Pillar explainer",
        "Owning the head subject and anchoring the cluster it links to",
        "Four to eight months",
        "Cluster-level organic sessions and assisted enquiries, plus citation share in AI answers",
      ],
      [
        "Comparison page",
        "Catching buyers already choosing between named options, including you",
        "Two to four months",
        "Entry-page enquiries and win rate on deals that touched the page",
      ],
      [
        "Cost or pricing page",
        "Qualifying buyers and removing the single biggest unanswered objection",
        "One to three months",
        "Enquiry rate from the page and lead quality reported by sales",
      ],
      [
        "Condition or use-case page",
        "Matching a specific problem the reader is searching in their own words",
        "Three to six months",
        "Enquiries by page, and appointment or demo requests attributed to it",
      ],
      [
        "Case study",
        "Providing proof at the decision stage, once a client agrees to go on record",
        "Immediate in sales, slow in search",
        "Use in sales conversations and influence on deals, not organic traffic",
      ],
      [
        "Thought leadership",
        "Building the brand entity, earning mentions and attracting the right hires",
        "Six to twelve months, indirect",
        "Branded search volume, earned mentions and inbound conversations it starts",
      ],
    ],
  },

  prose: {
    title: "How we think about content",
    blocks: [
      {
        heading: "Clusters, not keyword pages",
        paragraphs: [
          "The old model was a page for every keyword variant. It produced hundreds of near-identical pages that competed with each other, diluted internal authority and gave the reader nothing they could not get in the first result. It stopped working some years ago and it works even less now that answers are increasingly assembled rather than listed.",
          "The model that works is completeness. Cover the core subject, then the specific sub-questions, the comparisons, the costs, the objections, the edge cases and what happens after the purchase — all internally linked with one clear entry point. It is slower, which is exactly why fewer agencies do it, and it is the only version of content marketing that compounds.",
        ],
        bullets: [
          "Decide which page owns which query before writing anything",
          "Finish one cluster before starting the next",
          "Link supporting pages up to the pillar and across to each other",
          "Prune pages that will never earn rather than leaving them to dilute the cluster",
        ],
      },
      {
        heading: "The brief is the work",
        paragraphs: [
          "A brief costs about an hour and decides whether the piece is useful. It names the query and the intent behind it, the stage the reader is at, what the current results cover and where they are thin, the sections the piece must contain, the sources to cite, the internal links to place and the action the page is responsible for producing.",
          "Without it you get competent writing aimed at nothing in particular, and a review cycle that turns into a rewrite because the disagreement is about the plan rather than the prose. Where the subject is clinical or technical, the brief also captures a short interview with your expert, which is usually the difference between a page that reads like everyone else's and one that could only have come from you.",
        ],
      },
      {
        heading: "AI volume without expertise does not rank and does not get cited",
        paragraphs: [
          "Language models are useful in this process — for research synthesis, outlining, first drafts of routine sections, and finding gaps in a draft. They are not useful for producing publishable volume unsupervised, because what comes out is an average of what already exists, which is precisely the thing that cannot outrank what already exists.",
          "The practical test is whether the page contains something only your organisation could say: a clinician's actual view on when a procedure is not appropriate, a real price range, an operational detail, a limitation stated plainly. We use AI where it saves time and we put a named human expert in front of anything that carries a claim, because under the CCPA's 2022 guidelines on misleading advertisements every claim you publish must be substantiable.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not publish AI-generated volume without expert review. We will not write clinical, financial or legal content without a named credentialled reviewer, and we will not put a reviewer's name on a page they did not actually read. We will not invent statistics, client results or case studies to make a page more persuasive, and we will not write a case study without the client's written agreement to the numbers in it.",
          "We also will not accept a brief for thirty pages a month on a subject that only warrants eight. Volume targets are the most reliable way to destroy a content programme, because the moment the target outruns the expertise available to review it, quality collapses and so does everything the earlier work earned.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "How long does content marketing take to work?",
      answer:
        "It depends heavily on where in the funnel the page sits. Bottom-funnel pages — cost, comparison, specific service pages — commonly show enquiries within two to four months because the competition on those queries is thinner and the intent is immediate. Pillar and educational content typically takes four to eight months, longer on YMYL subjects where trust signals accumulate slowly. Refreshing pages that already rank is usually the fastest win available, which is why we start there rather than with new production.",
    },
    {
      question: "How much does content marketing cost in India?",
      answer:
        "Programmes start from about ₹15,000 per month and scale with volume, subject difficulty and whether credentialled review is required. Individually commissioned long-form pieces with expert input start from about ₹4,000 each. Below roughly ₹10,000 a month you are usually buying generic articles that will not outrank anything. The more useful frame is cost per assisted enquiry once the cluster matures, which is the only number that tells you whether to continue.",
    },
    {
      question: "Should we use AI to write our content?",
      answer:
        "Use it for research synthesis, outlines, first drafts of routine sections and gap-checking a draft. Do not use it to produce publishable volume unsupervised. Models generate an average of what already exists, and average material cannot displace the pages it was averaged from. The pages that rank and get cited contain something only you could say — a practitioner's judgement, a real price, an operational detail, an honest limitation. Our rule is simple: AI can assist, a named human expert signs off.",
    },
    {
      question: "How often should we refresh existing content?",
      answer:
        "Drive it by signal rather than by calendar age. Review anything whose impressions or position have been sliding for two consecutive months, anything containing prices, statistics, screenshots or regulatory guidance, and anything where a competitor has published something more complete. In practice most substantial pages need a real update every nine to eighteen months, and pages covering fast-moving subjects need it more often. Refreshing a page that already has authority almost always returns more than publishing a new one.",
    },
    {
      question: "How do you measure content if it does not convert directly?",
      answer:
        "By assisted contribution rather than last click. We track which pages appear in the paths of people who eventually enquire, enquiry rate by entry page, cluster-level organic growth, and branded search volume as a proxy for awareness that content created but never got credit for. Pageviews and time on page are diagnostics — useful for spotting a page that is failing its reader — but they are not the number we ask you to judge the programme on.",
    },
    {
      question: "Do we need a subject expert internally, or can you supply one?",
      answer:
        "For general commercial content we can write from research and interviews alone. For clinical, financial or legal subjects you need a named reviewer with real credentials, and it is far better if that person is yours — their name on the page builds your entity, not ours. We will structure the review so it costs your expert twenty to thirty minutes per piece rather than an afternoon. If no reviewer is available at all, we will decline the YMYL portion of the brief rather than publish it unreviewed.",
    },
  ],

  related: {
    title: "Related services",
    items: [
      { title: "SEO & organic growth", href: "/services/seo-organic-growth", body: "The technical and authority work content depends on." },
      { title: "Email marketing", href: "/services/email-marketing", body: "Where content reaches the audience you already own." },
      { title: "Social media marketing", href: "/services/social-media-marketing", body: "Distribution formats that suit each platform." },
      { title: "Video marketing", href: "/services/video-marketing", body: "When the subject is better shown than written." },
      { title: "Analytics & reporting", href: "/services/analytics-reporting", body: "Attribution that makes content defensible." },
      { title: "Healthcare marketing", href: "/healthcare-marketing", body: "How this works when the subject is YMYL." },
    ],
  },

  cta: {
    title: "Find out what your existing content is actually earning",
    body: "We will inventory every page, identify cannibalisation and decay, and send you a written map of what to refresh, what to merge and what to write next.",
    primary: { label: "Get the free content audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Content Marketing Services",
    serviceType: "Content Marketing",
    audienceType: "Healthcare providers, D2C brands, SaaS and service businesses",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
