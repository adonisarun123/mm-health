import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "SEO, PPC, content, email, social, CRO, automation, analytics and web — plus custom software. What each service is actually for, and when it is the wrong one.",
  keywords: [
    "digital marketing services India",
    "digital marketing agency Bengaluru",
    "SEO PPC content agency",
    "performance marketing services",
    "marketing agency for healthcare",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital Marketing Services | Monk Mantra",
    description:
      "Twelve services, and an honest account of which one solves which problem — including when the answer is none of them.",
    url: "/services",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/services",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ],
  eyebrow: "Services",
  h1: "Twelve services, and which problem each one actually solves",
  answer:
    "Monk Mantra runs the full marketing stack — search, paid media, content, email, social, conversion, automation, analytics and web — and builds custom software alongside it. The useful question is not which services we offer but which one fits the problem you have, so this page answers that first.",
  subhead:
    "Most agency service pages are a menu. This one is a diagnostic, because buying the wrong service is more expensive than buying nothing.",
  heroBullets: [
    "One team across marketing and engineering",
    "Flat retainers, never a percentage of ad spend",
    "You own every account, asset and line of code",
    "Reported in revenue events, not impressions",
  ],
  primaryCta: { label: "Get a free growth audit", href: "/get-started" },
  secondaryCta: { label: "Browse by industry", href: "/industries" },

  keyFacts: [
    { label: "Where we specialise deepest", value: "Healthcare — doctors, clinics and hospitals" },
    { label: "Other sectors", value: "D2C and ecommerce, SaaS, hospitality, real estate, education, financial, manufacturing, nonprofit" },
    { label: "Engagement shape", value: "Marketing on a flat monthly retainer; software on fixed-price scopes" },
    { label: "Starting from", value: "₹12,000 per month, scaling with scope and sector" },
    { label: "Minimum commitment", value: "Three months on marketing retainers, then month to month" },
    { label: "Based in", value: "Bengaluru, working with clients across India, UAE, UK and US" },
  ],

  pains: {
    title: "Buy the service that matches the problem",
    intro:
      "Four situations account for most of what businesses come to us with. Matching them correctly matters more than the quality of execution afterwards.",
    items: [
      {
        problem: "\"We need more leads, and we need them now\"",
        fix:
          "That is a paid media problem. Paid search produces enquiries within days once tracking is correct, and stops when the budget does. Buying SEO for an urgent revenue gap means paying for four months before anything arrives.",
      },
      {
        problem: "\"Our cost per lead keeps rising and we cannot keep up\"",
        fix:
          "That is an organic and conversion problem. You are renting all your demand. The fix is building assets that do not stop working when spend stops, while improving the rate at which existing traffic converts — which makes every channel cheaper simultaneously.",
      },
      {
        problem: "\"We get plenty of traffic and enquiries, but nothing converts\"",
        fix:
          "That is rarely a marketing problem at all. It is usually conversion architecture, response time or a broken booking path. Buying more traffic here makes the loss bigger. Start with conversion work and measurement, and fix the operational leak.",
      },
      {
        problem: "\"We do not know which of this is working\"",
        fix:
          "That is an analytics problem, and it should be solved before any budget decision. Almost every account we audit is reporting numbers that are wrong in a specific, identifiable way — usually double-counted conversions and invisible phone calls.",
      },
    ],
  },

  offerings: {
    title: "The full service list",
    intro:
      "Each page states what the service is for, what it costs, how it is measured, and when we would tell you not to buy it.",
    items: [
      {
        icon: "Search",
        title: "SEO & organic growth",
        body: "Technical health, topical authority and entity building — plus the work of being cited when the answer never becomes a click.",
        href: "/services/seo-organic-growth",
      },
      {
        icon: "Megaphone",
        title: "PPC management",
        body: "Paid search and paid social managed against cost per acquired customer, with the waste cut before any budget increase.",
        href: "/services/ppc-management",
      },
      {
        icon: "FileText",
        title: "Content marketing",
        body: "Content as an editorial system rather than a blog: clusters, briefs, expert review and a refresh cycle.",
        href: "/services/content-marketing",
      },
      {
        icon: "Send",
        title: "Email marketing",
        body: "Lifecycle and retention flows, plus the deliverability engineering that decides whether any of it arrives.",
        href: "/services/email-marketing",
      },
      {
        icon: "Share2",
        title: "Social media marketing",
        body: "Organic social as a trust asset, paid social as demand generation — run as two different disciplines, because they are.",
        href: "/services/social-media-marketing",
      },
      {
        icon: "BarChart3",
        title: "Conversion optimisation",
        body: "Research-led CRO with tests that are actually powered, and honest reporting on the ones that lost.",
        href: "/services/conversion-optimization",
      },
      {
        icon: "Workflow",
        title: "Marketing automation",
        body: "Workflows, scoring and CRM integration — after mapping the process, because automation multiplies whatever you already have.",
        href: "/services/marketing-automation",
      },
      {
        icon: "LineChart",
        title: "Analytics & reporting",
        body: "GA4 done properly, call tracking, attribution stated honestly, and the join between marketing and actual revenue.",
        href: "/services/analytics-reporting",
      },
      {
        icon: "Bot",
        title: "AI marketing strategy",
        body: "A deliberately deflationary account of what AI genuinely does well in marketing, and where it is still a liability.",
        href: "/services/ai-marketing-strategy",
      },
      {
        icon: "Smartphone",
        title: "Mobile marketing",
        body: "Mobile web performance, the honest app-versus-website decision, and app growth measured past the install.",
        href: "/services/mobile-marketing",
      },
      {
        icon: "Video",
        title: "Video marketing",
        body: "Batch production, hooks over polish, and short-form versus long-form doing genuinely different jobs.",
        href: "/services/video-marketing",
      },
      {
        icon: "Globe",
        title: "Web design & development",
        body: "Sites built as conversion instruments and SEO assets, with a migration plan that does not destroy your traffic.",
        href: "/services/web-design-development",
      },
    ],
  },

  process: {
    title: "How we work, whichever service you buy",
    items: [
      {
        duration: "Week 1",
        title: "Audit before opinions",
        body:
          "We look at what you rank for, what you pay for, what your measurement actually reports and where enquiries drop. You get the findings in writing whether or not you engage us.",
      },
      {
        duration: "Weeks 2–4",
        title: "Fix the leaks first",
        body:
          "Tracking repaired, obvious waste cut, conversion friction removed, compliance exposure taken out of live assets. Cheapest lift available and it comes before anything slow.",
      },
      {
        duration: "Months 2–4",
        title: "Build what compounds",
        body:
          "Content, authority, retention systems and the assets that keep working after the retainer ends. This is the part that changes the shape of the business.",
      },
      {
        duration: "Ongoing",
        title: "Report, reallocate, and say when something is not working",
        body:
          "Monthly reporting against metrics agreed up front, including the channels that underperformed. Budget moves on evidence rather than on habit.",
      },
    ],
  },

  table: {
    caption: "Which service fits which situation",
    columns: ["Your situation", "Start here", "Add next", "Time to first signal"],
    rows: [
      [
        "Need enquiries this quarter",
        "PPC management",
        "Conversion optimisation",
        "Days",
      ],
      [
        "Paid costs rising, want to reduce dependence",
        "SEO & organic growth",
        "Content marketing",
        "3–4 months",
      ],
      [
        "Traffic is fine, conversion is not",
        "Conversion optimisation",
        "Analytics & reporting",
        "4–8 weeks",
      ],
      [
        "Cannot tell what is working",
        "Analytics & reporting",
        "Everything else, afterwards",
        "2–4 weeks",
      ],
      [
        "Customers buy once and never return",
        "Email marketing",
        "Marketing automation",
        "6–10 weeks",
      ],
      [
        "Site is slow, dated or fights you",
        "Web design & development",
        "SEO & organic growth",
        "6–12 weeks",
      ],
      [
        "Enquiries arrive and die at the front desk",
        "Custom tools",
        "Analytics & reporting",
        "2–6 weeks",
      ],
    ],
  },

  prose: {
    title: "How we are structured, and why it matters",
    blocks: [
      {
        heading: "Marketing and engineering in the same team",
        paragraphs: [
          "Most agencies stop at the enquiry. That works until the bottleneck turns out to be operational — a missed call at seven in the evening, a booking flow that fails on a mid-range phone, a CRM nobody updates — at which point the agency's honest answer is that the problem is yours to solve.",
          "Because we build software as well, we can measure the whole path from search query to completed sale and fix whichever part is actually broken. Frequently the highest-value thing we deliver in the first quarter is not a campaign at all; it is the plumbing that finally shows what a customer costs.",
        ],
      },
      {
        heading: "How we charge, and why",
        paragraphs: [
          "Marketing runs on a flat monthly retainer scoped to the work, never a percentage of your advertising spend. Percentage-of-spend pricing rewards an agency for increasing your budget and penalises it for cutting waste, and since removing waste is usually the most valuable thing we do in month one, we price so that recommending it costs us nothing.",
          "Software is quoted as a fixed price against a written scope, agreed before development starts. If the scope changes, we tell you what it costs before we build it rather than after.",
        ],
        bullets: [
          "Flat retainer on marketing, fixed price on software",
          "Three-month initial term, then month to month with thirty days notice",
          "All accounts under your own billing and ownership",
          "Code, data and documentation handed over on exit without negotiation",
        ],
      },
      {
        heading: "What we will not sell you",
        paragraphs: [
          "We will not sell SEO to a business that needs revenue this quarter, a testing retainer to a site with too little traffic to test, or more advertising into a funnel that is visibly broken. We will not guarantee rankings or results, and we will not report a number we cannot substantiate — our own terms of service say as much, and the CCPA's 2022 guidelines require every claim a business makes to be capable of substantiation.",
          "The commercially awkward version of this is that a good audit sometimes concludes you should spend less, not more. We would rather have that conversation and keep the relationship than take a retainer for work that will not pay for itself.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Which service should I start with?",
      answer:
        "It depends on your constraint, not your preference. If you need enquiries this quarter, start with paid media. If your cost per lead is rising and you want to reduce dependence on ads, start with SEO and content. If you already get traffic and enquiries but few customers, start with conversion and analytics rather than buying more traffic. If you genuinely cannot tell what is working, fix measurement first — every other decision is guesswork until you do.",
    },
    {
      question: "Can I buy just one service, or do I have to take a bundle?",
      answer:
        "Single services are fine and often the right call. Some combinations are genuinely interdependent — conversion optimisation without reliable analytics produces unreliable conclusions, and content without a technical foundation wastes production budget — and where that applies we will say so rather than selling you the weaker half. But we do not require a bundle, and we would rather do one thing properly than four things thinly.",
    },
    {
      question: "What does a retainer typically cost?",
      answer:
        "Marketing retainers start from about ₹12,000 per month and scale with scope, sector and how much production is included. An individual consultant sits at the lower end, a multi-location group or a hospital service line programme at the higher. Custom software is quoted separately as a fixed-price build, starting from about ₹15,000 for a single tool. We scope against what your business can actually service rather than selling a package.",
    },
    {
      question: "Do you work with businesses outside healthcare?",
      answer:
        "Yes. Healthcare is where we specialise deepest, because the compliance constraints and the software gap reward specialisation, but the same search and performance discipline applies across D2C and ecommerce, SaaS, hospitality, real estate, education, financial services, manufacturing, professional services and nonprofits. Each of those has an industry page setting out how the work differs in that sector.",
    },
    {
      question: "What is the minimum commitment?",
      answer:
        "Three months on marketing retainers, because nothing meaningful can be demonstrated in less and we would rather not take a fee for a month of setup. After that, engagements run month to month with thirty days notice. Software builds are not retainers at all — they are fixed-price projects that end when the tool is delivered, documented and handed over.",
    },
    {
      question: "Do you take over work another agency started?",
      answer:
        "Frequently. The first step is always an audit of what exists, including whether the previous work created compliance exposure or technical debt that needs unwinding before anything new is built. Where accounts are held by the previous agency we will help you reclaim them. Occasionally recovering from an aggressive campaign takes longer than starting fresh, and we will tell you honestly which situation you are in.",
    },
  ],

  related: {
    title: "Where to go next",
    items: [
      { title: "Healthcare marketing", href: "/healthcare-marketing", body: "Our deepest specialisation — doctors, clinics and hospitals." },
      { title: "Custom tools", href: "/custom-tools", body: "Booking, reminders, CRM and dashboards built in weeks." },
      { title: "Industries", href: "/industries", body: "How the work differs sector by sector." },
      { title: "How we measure results", href: "/case-studies", body: "Our reporting method, stated plainly." },
      { title: "Contact", href: "/contact", body: "Costs, contracts, ownership and escalation, answered." },
      { title: "Get started", href: "/get-started", body: "The free written audit we do before any engagement." },
    ],
  },

  cta: {
    title: "Not sure which of these you actually need?",
    body: "Describe the problem rather than the service. We will tell you which one fits, and say so plainly if the answer is that you should not be buying marketing right now.",
    primary: { label: "Get a free growth audit", href: "/get-started" },
    secondary: { label: "Book a 30-minute call", href: "/contact" },
  },

  schema: {
    type: "CollectionPage",
    serviceName: "Digital Marketing Services",
    serviceDescription:
      "Monk Mantra's full service range across search, paid media, content, email, social, conversion, automation, analytics, video and web development.",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
