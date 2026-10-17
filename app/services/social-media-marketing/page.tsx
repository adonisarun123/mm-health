import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Social Media Marketing Services",
  description:
    "Organic social builds trust with poor attribution; paid social buys demand with good attribution. We run both properly and never confuse the two budgets.",
  keywords: [
    "social media marketing agency India",
    "social media marketing services",
    "paid social advertising",
    "Instagram marketing agency",
    "LinkedIn marketing B2B India",
    "influencer marketing ASCI",
    "creative testing paid social",
  ],
  alternates: { canonical: "/services/social-media-marketing" },
  openGraph: {
    title: "Social Media Marketing Services | Monk Mantra",
    description:
      "Platform-by-platform reality for India, creative volume as the real lever in paid social, and metrics beyond follower count.",
    url: "/services/social-media-marketing",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/services/social-media-marketing",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Social Media Marketing", path: "/services/social-media-marketing" },
  ],
  eyebrow: "Organic and paid social",
  h1: "Two different jobs that share a logo",
  answer:
    "Social media marketing covers two distinct disciplines: organic social, which builds brand familiarity and trust but attributes poorly, and paid social, which generates measurable demand at a controllable cost. Monk Mantra runs both, budgets them separately, and judges each on what it can genuinely be held responsible for.",
  subhead:
    "Conflating the two is the most expensive mistake in the channel. Organic gets judged on leads it cannot prove, paid gets judged on engagement it does not need, and both budgets underperform.",
  heroBullets: [
    "Separate briefs, budgets and metrics for organic and paid",
    "Creative volume as the primary lever in paid social",
    "Platform choice driven by audience, not by habit",
    "Compliance-aware publishing for regulated clients",
  ],
  primaryCta: { label: "Get a social audit", href: "/get-started" },
  secondaryCta: { label: "See all services", href: "/services" },

  keyFacts: [
    { label: "What it covers", value: "Organic strategy and publishing, community management, paid social buying, creative production and testing, creator partnerships" },
    { label: "Starting from", value: "₹15,000 per month, scaling with platform count, creative volume and whether paid is included" },
    { label: "Minimum useful paid budget", value: "From about ₹30,000 per month per platform — below that the algorithm struggles to exit the learning phase" },
    { label: "Time to signal", value: "Paid social within two to four weeks; organic brand effect over six to twelve months" },
    { label: "Reported on", value: "Paid: cost per qualified enquiry and creative-level performance. Organic: saves, shares, DMs, branded search and assisted conversions" },
    { label: "Poor fit", value: "Businesses expecting organic social to produce trackable leads on a monthly report" },
  ],

  pains: {
    title: "Where social budgets go wrong",
    intro:
      "Four failure patterns account for most of the waste we find, and none of them are solved by posting more often.",
    items: [
      {
        problem: "Organic is measured as though it were a performance channel",
        fix:
          "Organic social influences people who later search your name, ask a friend, or arrive through a channel that takes the credit. Judging it on last-click leads guarantees it looks like a failure and gets cut, usually right before the brand effect would have shown up. We measure it on saves, shares, DMs, branded search volume and assisted conversions, and we agree that framework before the first post.",
      },
      {
        problem: "Paid social is treated as a targeting problem",
        fix:
          "Platform targeting has been consolidating into broad, algorithm-led delivery for years. The lever that still moves performance is creative: how many distinct concepts you test, how fast you learn, and how quickly you retire fatigued assets. Accounts that produce four new creatives a month plateau; accounts that produce twenty find the winners.",
      },
      {
        problem: "The brand is on five platforms and present on none",
        fix:
          "Every additional platform divides the production budget and adds a channel maintained badly. We would rather run two platforms properly, chosen by where your buyers genuinely are, than maintain a token presence everywhere so the deck looks complete.",
      },
      {
        problem: "Follower count is the number everyone quotes",
        fix:
          "Followers are a lagging vanity metric that can be bought and that predicts almost nothing about revenue. Saves and shares indicate content worth keeping or passing on, DMs indicate intent, and branded search indicates the awareness the work created. Those are the numbers we put on the report.",
      },
    ],
  },

  offerings: {
    title: "What a social engagement includes",
    intro:
      "Organic and paid are run as separate workstreams with a shared creative pipeline, because that is the only part they genuinely have in common.",
    items: [
      {
        icon: "Target",
        title: "Channel strategy",
        body: "Which platforms your buyers actually use, what each one is capable of doing for you, and an explicit decision to ignore the rest. Documented so it can be argued with rather than assumed.",
      },
      {
        icon: "Video",
        title: "Creative production",
        body: "Short-form video, static and carousel formats, produced at the volume paid social needs rather than the volume a monthly calendar implies. Concepts are structured so results can be attributed to a variable, not a vibe.",
        href: "/services/video-marketing",
      },
      {
        icon: "Megaphone",
        title: "Paid social buying",
        body: "Campaign structure that consolidates rather than fragments learning, audience strategy weighted toward broad delivery with strong creative, budget pacing, and incrementality checks where volume allows.",
        href: "/services/ppc-management",
      },
      {
        icon: "Share2",
        title: "Organic publishing",
        body: "A calendar built around a real editorial point of view rather than reactive trend chasing, adapted per platform because a format that works on Instagram usually fails on LinkedIn unchanged.",
      },
      {
        icon: "MessageSquare",
        title: "Community and DM handling",
        body: "Response guidelines, escalation rules, and a route from a DM to an actual enquiry — for many businesses the DM is now the highest-intent inbound the channel produces, and it is usually unmanaged.",
      },
      {
        icon: "Users",
        title: "Creator and influencer partnerships",
        body: "Selection on audience fit and evidence of real engagement rather than follower count, briefs that leave the creator their voice, usage rights negotiated up front, and mandatory ASCI disclosure on every paid placement.",
      },
      {
        icon: "BarChart3",
        title: "Creative testing system",
        body: "A structured backlog of concepts, a defined test cadence, clear rules for scaling and retiring assets, and a creative library that records what worked so learning survives staff changes.",
      },
      {
        icon: "ShieldCheck",
        title: "Compliance review for regulated sectors",
        body: "For healthcare and financial clients, a pre-publication check against the Drugs and Magic Remedies Act, the applicable professional codes and the CCPA's 2022 misleading-advertisement guidelines — because social is where regulated brands most often slip.",
        href: "/healthcare-marketing",
      },
      {
        icon: "LineChart",
        title: "Measurement",
        body: "Separate reporting for paid and organic, creative-level performance breakdowns, branded search tracked as the organic proxy, and honest statements of what cannot be attributed.",
        href: "/services/analytics-reporting",
      },
    ],
  },

  process: {
    title: "How a social engagement runs",
    intro: "Decide the platforms, separate the two jobs, then let creative volume do the work in paid.",
    items: [
      {
        duration: "Weeks 1–2",
        title: "Audit and platform decision",
        body:
          "Review what has been published and what it earned, examine where your buyers actually spend attention, assess competitor and creator activity, and decide which platforms to run and which to drop. Dropping one is usually the highest-value decision in this phase.",
      },
      {
        duration: "Weeks 2–4",
        title: "Creative foundation",
        body:
          "Establish the editorial angles for organic and the concept backlog for paid, build the production workflow, and set up tracking, pixels and conversion events so paid results are measurable before spend starts.",
      },
      {
        duration: "Weeks 4–10",
        title: "Test at volume",
        body:
          "Paid campaigns launch with multiple distinct concepts rather than variations of one, budget consolidated enough to exit the learning phase, and a fixed review cadence where losers are cut and winners are iterated on.",
      },
      {
        duration: "Ongoing",
        title: "Scale, refresh, defend",
        body:
          "Winning concepts scaled until fatigue shows in frequency and cost, replacements queued before they are needed, organic calendar maintained against the editorial line, and community responses handled inside agreed timeframes.",
      },
    ],
  },

  table: {
    caption: "Platform reality for Indian audiences",
    columns: ["Platform", "What it is genuinely good for", "What people wrongly use it for", "Primary metric"],
    rows: [
      [
        "Instagram",
        "Visual brand building, short-form reach, and DM-led enquiries for local and consumer businesses",
        "Complex B2B explanation, and long-form education nobody stops to read",
        "Saves and shares organically; cost per qualified enquiry on paid",
      ],
      [
        "YouTube",
        "Considered research content and long-tail search visibility that keeps earning for years",
        "Reposted vertical clips with no search intent behind them",
        "Watch time and assisted conversions, not subscriber count",
      ],
      [
        "LinkedIn",
        "B2B credibility, recruitment, and reaching decision makers by role and company",
        "Consumer offers, and inflated reach claims used to justify expensive paid inventory",
        "Qualified pipeline influenced; engagement from target job titles",
      ],
      [
        "WhatsApp channels and broadcast",
        "Reaching an audience that already opted in, with high read rates and immediacy",
        "Cold acquisition, which is both ineffective and a compliance problem",
        "Read rate and reply rate, then downstream enquiries",
      ],
      [
        "X",
        "Real-time commentary, founder voice, and reaching narrow professional or technology communities",
        "Broad consumer reach in India, where audience scale rarely justifies the effort",
        "Reply and profile-visit quality, not impressions",
      ],
      [
        "Paid social across platforms",
        "Generating measurable demand at a controllable cost per enquiry",
        "Building brand affinity cheaply, which needs sustained frequency it is rarely funded for",
        "Cost per qualified enquiry and creative-level performance",
      ],
    ],
  },

  prose: {
    title: "How we think about social",
    blocks: [
      {
        heading: "Creative volume is the lever, not targeting",
        paragraphs: [
          "Meta, Google and the rest have spent years moving delivery decisions away from the advertiser and into the algorithm. Detailed interest stacking now mostly restricts the system without improving it. What remains under your control is what you show people, and how many genuinely different things you are willing to try.",
          "So the account structure we build is deliberately simple, and the effort goes into a creative pipeline that produces distinct concepts rather than colour variations. A concept is a different reason to care — a different objection answered, a different customer situation, a different format. Four of those a month is a slow experiment; twenty is a learning system.",
        ],
        bullets: [
          "Consolidate budget so campaigns exit the learning phase instead of stalling",
          "Test concepts, not button colours — variations on a losing idea stay losing",
          "Watch frequency and cost together to catch fatigue before it becomes expensive",
          "Keep a creative library recording what worked, so learning survives team changes",
        ],
      },
      {
        heading: "Organic social is a trust asset with honest attribution limits",
        paragraphs: [
          "Someone sees three of your posts over a month, does not click any of them, then searches your name when they need the service. Organic did that work and will get no credit for it in any analytics tool. Pretending otherwise leads to fabricated attribution, which is worse than admitting the gap.",
          "We measure organic on the signals that do correlate with that effect: saves and shares, meaningful DMs, branded search volume, and the assisted conversions where a social visit appears earlier in the path. We also set a plain expectation at the start — organic social is a six-to-twelve-month brand investment, and if you need enquiries this quarter, the budget should go to paid social or paid search instead.",
        ],
      },
      {
        heading: "Creators, disclosure and regulated categories",
        paragraphs: [
          "Creator partnerships work when the audience fit is real and the creator keeps their own voice. They fail when selection is based on follower count, when engagement is purchased, or when the brief is so tight the content reads as an advertisement the audience did not agree to watch. We select on evidence of genuine engagement and negotiate usage rights up front, because the best creator asset is often worth more as paid media than as an organic post.",
          "Every paid promotion must carry a clear ASCI-compliant disclosure — prominent, in the same language as the content, and impossible to miss in the first few seconds of a video. This is not optional and it is the brand, not only the creator, that carries the exposure. For healthcare and financial clients the stakes rise further: the Drugs and Magic Remedies Act restricts advertising treatment for a long schedule of conditions to the public, professional codes constrain what registered practitioners may say, and the CCPA's 2022 guidelines require every claim to be substantiable. Social is where those rules are most often broken, because posts are written quickly and published without review.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not buy followers or engagement, run giveaway mechanics that inflate an audience with people who will never buy, or report follower growth as a business result. We will not publish patient photographs, testimonials or before-and-after imagery for clinical clients where the applicable code prohibits it, however well it would perform.",
          "We will not take on a paid social budget too small to leave the learning phase and then report on statistically meaningless differences. And we will not run five platforms because a competitor does. If the honest answer is that your buyers are on one platform and everything else is theatre, we will say that, even though it reduces the size of the retainer.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "How much should we spend on social media marketing in India?",
      answer:
        "Management retainers start from about ₹15,000 per month and scale with platform count and creative volume. For paid social, budget from about ₹30,000 per month per platform as a working minimum — below that the delivery algorithm struggles to exit the learning phase and results become noise you cannot read. Creative production is a separate line and is usually underfunded; if you have to choose, spend less on management and more on producing distinct concepts to test.",
    },
    {
      question: "How many times a week should we post?",
      answer:
        "Consistency matters more than frequency, and quality matters more than both. Three to five substantial posts a week on one platform, maintained for a year, outperforms daily posting for two months followed by silence. The real constraint is production capacity: pick a cadence you can hold when the team is busy. For paid social the question is different — there the volume that matters is new creative concepts entering testing, not posts published on the profile.",
    },
    {
      question: "Is organic social worth it if we cannot attribute leads to it?",
      answer:
        "It depends on your time horizon. Organic social builds familiarity that shows up later as branded search, easier sales conversations and better response rates on every other channel — real effects that resist clean attribution. If you can commit six to twelve months and judge it on saves, shares, DMs and branded search, it is worth doing. If you need enquiries this quarter and will judge it on last-click leads, put the money into paid social or paid search and revisit organic when there is room to be patient.",
    },
    {
      question: "Should we work with influencers or creators?",
      answer:
        "Only where the audience fit is genuine and you can verify engagement is real — check comment quality, audience geography and whether follower growth looks organic rather than purchased. Nano and micro creators with an engaged niche audience usually outperform large accounts for direct response. Negotiate usage rights up front, because the strongest creator assets often earn more as paid media than as organic posts. Every paid promotion must carry a clear ASCI disclosure, and the brand shares that liability.",
    },
    {
      question: "Which platform is best for B2B in India?",
      answer:
        "LinkedIn for reaching decision makers by role and company, and YouTube for the research-stage content that shortens long consideration cycles. LinkedIn paid inventory is expensive relative to other platforms, so it is best used with tight targeting and a genuinely valuable offer rather than broad awareness spending. Instagram can work for B2B where the buyer is a founder or small-business owner, since that audience does not separate its professional and personal feeds.",
    },
    {
      question: "Can healthcare brands use social media in India?",
      answer:
        "Yes, with real constraints. The Drugs and Magic Remedies Act prohibits advertising treatment to the public for a long schedule of conditions, professional codes limit what registered practitioners may claim about themselves, and the CCPA's 2022 guidelines require every claim to be substantiable. Educational content, facility and team introductions, and general awareness work well. Outcome claims, patient testimonials and before-and-after imagery carry real exposure. We run clinical accounts to the stricter standard and review posts before they publish.",
    },
  ],

  related: {
    title: "Related services",
    items: [
      { title: "PPC management", href: "/services/ppc-management", body: "Paid search alongside paid social." },
      { title: "Video marketing", href: "/services/video-marketing", body: "The production engine paid social runs on." },
      { title: "Content marketing", href: "/services/content-marketing", body: "The editorial line behind organic social." },
      { title: "Analytics & reporting", href: "/services/analytics-reporting", body: "Separating what social can and cannot prove." },
      { title: "Healthcare marketing", href: "/healthcare-marketing", body: "Social under clinical advertising constraints." },
      { title: "Mobile marketing", href: "/services/mobile-marketing", body: "WhatsApp, push and the messaging layer." },
    ],
  },

  cta: {
    title: "Find out which platform is carrying your results",
    body: "We will review your organic and paid activity separately, show you what each is genuinely contributing, and tell you which channel to stop funding.",
    primary: { label: "Get the free social audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Social Media Marketing Services",
    serviceType: "Social Media Marketing and Paid Social",
    audienceType: "D2C brands, healthcare providers, SaaS and service businesses",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
