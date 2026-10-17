import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Professional Services Marketing",
  description:
    "Expertise-led growth for law, accountancy and consulting firms — built inside the advertising bans that bind advocates and chartered accountants.",
  keywords: [
    "professional services marketing India",
    "law firm marketing India",
    "chartered accountant marketing rules",
    "consulting firm marketing",
    "B2B services lead generation",
    "Bar Council Rule 36 advertising",
  ],
  alternates: { canonical: "/industries/professional-services" },
  openGraph: {
    title: "Professional Services Marketing | Monk Mantra",
    description:
      "Expertise-led growth for firms whose professional bodies restrict or prohibit advertising outright.",
    url: "/industries/professional-services",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/industries/professional-services",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Professional Services", path: "/industries/professional-services" },
  ],
  eyebrow: "Professional services",
  h1: "Growth for firms that are not allowed to advertise",
  answer:
    "Several Indian professions — advocates and chartered accountants among them — are barred by their own regulators from soliciting work or advertising. Growth therefore has to come from demonstrated expertise, referral and findability rather than promotion. Monk Mantra builds that for law, accountancy, consulting and architecture firms.",
  subhead:
    "For advocates this is not a grey area. Rule 36 of the Bar Council of India Rules prohibits soliciting work or advertising directly or indirectly, and a 2008 amendment permits only a narrow, factual website presence.",
  heroBullets: [
    "Built inside the professional conduct rules that bind you",
    "Expertise and authority rather than promotion",
    "Referral flow treated as a marketing channel",
    "Partner time protected — under two hours a month",
  ],
  primaryCta: { label: "Get a free visibility audit", href: "/get-started" },
  secondaryCta: { label: "See all industries", href: "/industries" },

  keyFacts: [
    { label: "Who this is for", value: "Law firms and advocates, chartered accountants, consultancies, architects, HR and recruitment firms, agencies" },
    { label: "Binding rules", value: "BCI Rules Rule 36 for advocates; ICAI conduct rules for chartered accountants; Council of Architecture conduct rules" },
    { label: "What is permitted for advocates", value: "A factual website: name, contact details, enrolment, qualifications and practice areas, with a disclaimer" },
    { label: "Primary growth channels", value: "Referral systems, thought leadership, search visibility for the questions clients ask, speaking and publishing" },
    { label: "Starting from", value: "₹15,000 per month, scaling with firm size and publishing cadence" },
    { label: "Where we say no", value: "Any solicitation or promotional claim that would put a professional registration at risk" },
  ],

  pains: {
    title: "Why professional firms struggle to grow deliberately",
    intro:
      "The constraint is real, but it is not the reason most firms are invisible. These four are.",
    items: [
      {
        problem: "The regulator prohibits exactly what agencies propose",
        fix:
          "Rule 36 of the Bar Council of India Rules bars advocates from soliciting work or advertising, whether by circulars, advertisements, touts or personal communication — extending even to signboards and stationery indicating specialisation. A 2008 amendment permits a passive website carrying name, contact details, enrolment information, qualifications and practice areas with a disclaimer. Most agency proposals to law firms are unusable as written.",
      },
      {
        problem: "Referrals are the whole pipeline and entirely unmanaged",
        fix:
          "Professional firms overwhelmingly grow by referral, and almost none of them track where referrals come from, which relationships have gone quiet, or what happens to a referral once made. Treating that as a channel — with visibility, a follow-up loop and material referrers can actually forward — is usually worth more than any campaign.",
      },
      {
        problem: "Expertise is real and completely undocumented",
        fix:
          "The firm has spent twenty years accumulating judgement that exists only in partners' heads and closed matter files. Clients searching for help with exactly those problems find nothing. Publishing that expertise as substantive answers is permitted, differentiating and the single most durable asset a firm can build.",
      },
      {
        problem: "Any programme that needs partner time dies by month three",
        fix:
          "Partners bill by the hour and marketing loses to billable work every time. We design around a small fixed commitment — one recording or interview session per quarter, asynchronous review of drafts — with everything else handled without them.",
      },
    ],
  },

  offerings: {
    title: "What we build for professional firms",
    items: [
      {
        icon: "ShieldCheck",
        title: "Conduct-rule review",
        body: "An assessment of what your specific professional body permits, and a written boundary for what the firm will and will not publish, agreed before anything goes live.",
      },
      {
        icon: "FileText",
        title: "Expertise documentation",
        body: "The questions clients actually ask, answered substantively — process, timelines, what it costs, what usually goes wrong — extracted from partners efficiently rather than written by someone who has never done the work.",
        href: "/services/content-marketing",
      },
      {
        icon: "Search",
        title: "Findability for problem-led search",
        body: "Clients search their problem, not your practice area. Being the clearest answer to that problem is permitted, and it is where the enquiries come from.",
        href: "/services/seo-organic-growth",
      },
      {
        icon: "BadgeCheck",
        title: "Verifiable credential layer",
        body: "Enrolment and membership numbers, qualifications, reported matters, publications, teaching and speaking — structured so both clients and search engines can confirm them.",
      },
      {
        icon: "Share2",
        title: "Referral systems",
        body: "Tracking where referrals originate, material referrers can forward without embarrassment, and a loop that closes back to them on outcome.",
      },
      {
        icon: "Users",
        title: "LinkedIn and professional presence",
        body: "Individual partner presence built on commentary and analysis rather than promotion — usually the highest-return channel for B2B professional work, and generally within conduct rules.",
        href: "/services/social-media-marketing",
      },
      {
        icon: "Globe",
        title: "Website that meets the standard",
        body: "Fast, credible and factual, structured to the constraints your council imposes, with the disclaimer where it is required.",
        href: "/services/web-design-development",
      },
      {
        icon: "Send",
        title: "Client and alumni communication",
        body: "Regulatory updates and briefings to existing clients and contacts — permitted communication to an existing relationship, and consistently the best source of repeat instruction.",
        href: "/services/email-marketing",
      },
      {
        icon: "LineChart",
        title: "Enquiry and source reporting",
        body: "Where enquiries actually originate, which practice areas they map to, and which relationships are producing work — the visibility most firms have never had.",
        href: "/services/analytics-reporting",
      },
    ],
  },

  process: {
    title: "How a firm engagement runs",
    items: [
      {
        duration: "Week 1",
        title: "Conduct rules and current position",
        body:
          "We establish what your professional body permits, review anything currently published for exposure, and map where the firm appears when someone searches its name or its practice areas.",
      },
      {
        duration: "Weeks 2–5",
        title: "Foundations",
        body:
          "Website corrected or rebuilt to the permitted standard, credential layer structured, referral tracking established, and enquiry capture instrumented so sources become visible.",
      },
      {
        duration: "Months 2–6",
        title: "Publish the expertise",
        body:
          "One practice area at a time, extracted from partners in structured sessions and published to completion, so the firm becomes the substantive answer for the problems it wants to be instructed on.",
      },
      {
        duration: "Ongoing",
        title: "Maintain and compound",
        body:
          "Regulatory updates published as they happen, referral relationships tracked and revisited, content refreshed. Partner input stays at roughly an hour a month.",
      },
    ],
  },

  table: {
    caption: "What is permitted, by profession",
    columns: ["Profession", "Governing rules", "Generally permitted", "Not permitted"],
    rows: [
      [
        "Advocates",
        "BCI Rules, Rule 36 (as amended 2008)",
        "Factual website: name, contact, enrolment, qualifications, practice areas, with disclaimer",
        "Soliciting work, advertising directly or indirectly, touting, claims of specialisation on signage",
      ],
      [
        "Chartered accountants",
        "ICAI Code of Ethics and Council guidelines",
        "Website and permitted directory listings within ICAI's prescribed limits",
        "Solicitation, advertising, and claims that amount to canvassing for work",
      ],
      [
        "Architects",
        "Council of Architecture conduct rules",
        "Factual professional information and published work",
        "Self-laudatory claims and advertising for work",
      ],
      [
        "Management consultants",
        "No statutory advertising bar",
        "Full marketing, subject to CCPA substantiation rules",
        "Unsubstantiated outcome or savings claims",
      ],
      [
        "Recruitment and HR firms",
        "No statutory advertising bar",
        "Full marketing, subject to consumer law",
        "Misleading placement or salary claims",
      ],
    ],
  },

  prose: {
    title: "How constrained firms actually grow",
    blocks: [
      {
        heading: "Being findable is not soliciting",
        paragraphs: [
          "The distinction the conduct rules draw is between approaching a client and being available to one who is looking. Circulars, touts, personal solicitation and promotional advertising sit on the wrong side of that line. A factual, informative presence that a searching client can find sits on the right side, and for advocates the 2008 amendment made that explicit.",
          "This is a narrower channel than most businesses enjoy and it is sufficient, because in professional services the client is almost always actively searching. Someone facing a tax notice, a construction dispute or a compliance deadline is looking for help. The firm that has published a clear explanation of that exact problem is the one they contact.",
        ],
        bullets: [
          "Answer the client's problem, do not promote the firm",
          "State qualifications and enrolment factually; avoid superlatives entirely",
          "Carry the disclaimer your council requires where it requires it",
          "Never claim outcomes, success rates or guaranteed results",
        ],
      },
      {
        heading: "Referral is a channel, so manage it like one",
        paragraphs: [
          "Most professional firms would say referrals are their main source of work and could not tell you which relationships produced instructions last year, which have gone quiet, or what happened to the referrals they made to others. That is an unmanaged channel, not a strategy.",
          "Managing it does not mean incentivising it, which would raise its own conduct problems. It means visibility — recording where enquiries came from, noticing when a reliable source stops referring, giving referrers material they can forward without embarrassment, and closing the loop with an outcome so the referrer knows their client was looked after.",
        ],
      },
      {
        heading: "The expertise already exists; extracting it is the work",
        paragraphs: [
          "Every established firm holds enormous practical knowledge that no competitor can replicate: what a process actually costs, how long it really takes, where matters typically go wrong, what the counterparty usually argues. Almost none of it is written down anywhere a prospective client could find it.",
          "The efficient way to publish it is not to ask partners to write. It is to interview them, transcribe, draft, and return it for a correctness review. An hour of partner time yields several substantive pieces, and because the material comes from real practice it carries a specificity that generic legal or financial content cannot match — which is also precisely what search engines and answer engines are trying to identify.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not run advertising for a firm whose professional body prohibits it. We will not write claims of specialisation, seniority or success where the conduct rules bar them, and we will not add outcome statistics to a law firm's website.",
          "Where a competitor is visibly breaching those rules and taking work as a result, we will tell you that is what is happening rather than proposing you match it. The exposure sits with your registration, not with us, and that asymmetry should decide the answer.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Can lawyers advertise in India?",
      answer:
        "No. Rule 36 of the Bar Council of India Rules prohibits advocates from soliciting work or advertising, whether directly or indirectly, through circulars, advertisements, touts or personal communications, and the restriction extends to signboards and stationery indicating specialisation or past positions. A 2008 amendment permits a passive website carrying the advocate's name, contact details, enrolment information, professional qualifications and areas of practice, accompanied by a declaration that the information is accurate. Anything beyond that risks proceedings under Section 35 of the Advocates Act, 1961.",
    },
    {
      question: "Then how is a law firm supposed to grow?",
      answer:
        "Through being findable and demonstrably expert rather than promotional. Publishing substantive explanations of the legal problems your clients face is information, not solicitation, and it is what someone searching at the point of need will find. Add to that a factual and credible website, individual partner presence built on analysis rather than self-promotion, structured referral relationships, speaking and writing for professional audiences, and communication with existing clients — which is a permitted relationship, not a cold approach.",
    },
    {
      question: "Do the same rules apply to chartered accountants?",
      answer:
        "Similar in spirit, differing in detail. The ICAI Code of Ethics restricts solicitation and advertising by members, with Council guidelines setting out what a firm may put on a website and in directory listings. The permitted scope has been liberalised over time but remains materially narrower than for unregulated businesses. We establish the current position for your specific membership at the start of an engagement rather than assuming, because these guidelines are revised periodically.",
    },
    {
      question: "Is LinkedIn activity by partners allowed?",
      answer:
        "Generally yes, where it is commentary and analysis rather than solicitation. A partner explaining the implications of a new regulation is contributing professional discourse; a partner posting that the firm has capacity and clients should get in touch is soliciting. The line is not always obvious, so we set a written boundary with the firm at the outset covering tone, claims and what is never posted, and work within it consistently.",
    },
    {
      question: "How much partner time will this take?",
      answer:
        "We design for roughly one to two hours a month at steady state, with a slightly heavier first month. Content is extracted through structured interviews rather than written by partners — an hour of conversation typically yields several publishable pieces after drafting — and everything returns for a correctness review that can be done asynchronously. Any programme demanding weekly partner input will be abandoned by the third month, so we do not build one.",
    },
    {
      question: "Can you help a firm with no website at all?",
      answer:
        "Yes, and it is often cleaner than correcting one built without regard to conduct rules. We would start by establishing what your professional body permits, then build a factual, fast and credible site within those limits, with the required disclaimer and a structured credential layer. For a firm starting from nothing, being properly findable for the problems you handle usually produces more enquiries in the first year than any amount of redesign would for a firm that already ranks.",
    },
  ],

  related: {
    title: "Related",
    items: [
      { title: "Content marketing", href: "/services/content-marketing", body: "Extracting and publishing partner expertise." },
      { title: "SEO & organic growth", href: "/services/seo-organic-growth", body: "Findability for problem-led search." },
      { title: "Financial services", href: "/industries/financial", body: "The adjacent regulated-sector playbook." },
      { title: "Web design & development", href: "/services/web-design-development", body: "A site that meets the conduct standard." },
      { title: "Email marketing", href: "/services/email-marketing", body: "Client briefings and regulatory updates." },
      { title: "All industries", href: "/industries", body: "The other sectors we work in." },
    ],
  },

  cta: {
    title: "Find out what you are allowed to do, and what you are missing",
    body: "We will review your current presence against the conduct rules that bind your profession, and show you which client problems you could be the answer to and currently are not.",
    primary: { label: "Get the free visibility audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Professional Services Marketing",
    serviceType: "Professional Services and B2B Marketing",
    audienceType: "Law firms, chartered accountants, consultancies and architects",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
