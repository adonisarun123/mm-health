import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "PPC Management Services",
  description:
    "Google and Meta ads managed to buy customers, not clicks. Account restructure, wasted-spend removal, conversion quality over volume, and reporting you can audit.",
  keywords: [
    "PPC management agency India",
    "Google Ads management",
    "paid search agency",
    "Meta ads management",
    "reduce wasted ad spend",
    "cost per acquisition optimisation",
  ],
  alternates: { canonical: "/services/ppc-management" },
  openGraph: {
    title: "PPC Management Services | Monk Mantra",
    description:
      "Paid search and paid social managed against cost per acquired customer — with the wasted spend cut before the budget goes up.",
    url: "/services/ppc-management",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/services/ppc-management",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "PPC Management", path: "/services/ppc-management" },
  ],
  eyebrow: "Paid search and paid social",
  h1: "PPC management that buys customers, not clicks",
  answer:
    "PPC management is the ongoing work of structuring, targeting and optimising paid advertising so spend produces profitable customers. Monk Mantra rebuilds accounts around conversion quality rather than volume, removes the waste before proposing any budget increase, and reports on cost per acquired customer instead of cost per click.",
  subhead:
    "Almost every account we audit is buying some traffic that could never convert. Finding that first is cheaper than scaling, and it is the part most agencies skip because it shrinks the managed spend their fee is based on.",
  heroBullets: [
    "Waste audit before any budget increase",
    "Conversions defined as revenue events, not form views",
    "Fees not tied to a percentage of your spend",
    "You own the accounts and the data",
  ],
  primaryCta: { label: "Get a free account audit", href: "/get-started" },
  secondaryCta: { label: "See all services", href: "/services" },

  keyFacts: [
    { label: "Platforms", value: "Google Ads, Microsoft Ads, Meta, LinkedIn, YouTube; Amazon where relevant" },
    { label: "Starting from", value: "₹12,000 per month, scoped to account complexity not to your ad spend" },
    { label: "Fee model", value: "Flat retainer. We do not charge a percentage of ad spend" },
    { label: "Time to signal", value: "Days once tracking is correct; meaningful optimisation from week 3" },
    { label: "Reported on", value: "Cost per acquired customer, conversion quality, wasted spend removed" },
    { label: "Account ownership", value: "Yours, under your billing, from day one" },
  ],

  pains: {
    title: "Where paid budgets actually leak",
    intro:
      "In most audits the problem is not the creative and not the bidding. It is four structural issues that quietly tax every rupee.",
    items: [
      {
        problem: "The conversion being optimised for is not a customer",
        fix:
          "If the conversion event fires on a page view, a form open or a scroll depth, the platform's algorithm learns to find people who do those things and never buy. We define conversions as the actual commercial event — a qualified call, a confirmed booking, a purchase — and where possible feed the downstream outcome back so the platform optimises toward revenue rather than activity.",
      },
      {
        problem: "Broad match and automated campaigns running unsupervised",
        fix:
          "Broad match with a weak conversion signal and no negative discipline will find you students, job seekers, competitors and researchers. Automated campaign types compound this by hiding where the money went. We rebuild the query control layer — negatives, audience exclusions, brand separation, placement exclusions — and insist on visibility into search terms.",
      },
      {
        problem: "Brand and non-brand mixed into one number",
        fix:
          "Brand search converts cheaply because those people were already coming to you. Blending it with prospecting inflates the account's apparent performance and hides that acquisition is unprofitable. We separate them permanently and report them apart, which is often the moment a client sees the real picture for the first time.",
      },
      {
        problem: "The agency is paid a percentage of spend",
        fix:
          "That model rewards increasing your budget and penalises cutting waste — the incentives are directly opposed to your interests. We charge a flat retainer scoped to the work, so recommending a spend reduction costs us nothing.",
      },
    ],
  },

  offerings: {
    title: "What PPC management covers",
    items: [
      {
        icon: "Search",
        title: "Account audit and restructure",
        body: "Campaign and ad group architecture rebuilt around intent and margin, with brand separated, budgets allocated by contribution rather than habit, and a documented list of what was wasting money.",
      },
      {
        icon: "Target",
        title: "Intent-led keyword strategy",
        body: "Query sets built from how buyers actually describe their problem, mapped to funnel stage, with an aggressive and continuously maintained negative list.",
      },
      {
        icon: "Settings2",
        title: "Conversion tracking that survives audit",
        body: "Events defined as real commercial outcomes, deduplicated, tested end to end, and where the sales cycle allows, offline conversion import so the platform learns from closed revenue.",
        href: "/services/analytics-reporting",
      },
      {
        icon: "Megaphone",
        title: "Ad copy and creative testing",
        body: "Structured testing with enough volume behind each variant to mean something, rather than declaring a winner on forty clicks.",
      },
      {
        icon: "MapPin",
        title: "Geo and audience targeting",
        body: "Radius and location targeting built on where customers genuinely travel from, plus exclusions for regions that consume budget and never convert.",
      },
      {
        icon: "PhoneCall",
        title: "Call campaigns and call tracking",
        body: "For businesses where the phone is the conversion — clinics, services, high-consideration purchases — call-only formats and tracked numbers so calls are attributable and quality is reviewable.",
      },
      {
        icon: "Wallet",
        title: "Shopping and feed management",
        body: "For retail and D2C: product feed hygiene, title and attribute optimisation, and campaign structure segmented by margin rather than by category.",
      },
      {
        icon: "Users",
        title: "Remarketing with limits",
        body: "Sequenced remarketing with frequency caps and exclusion of converters, because the fastest way to make a brand irritating is to follow people around after they have already bought.",
      },
      {
        icon: "LineChart",
        title: "Reporting you can interrogate",
        body: "Brand and non-brand separated, cost per acquired customer by campaign, wasted spend identified, and direct access to the account so nothing is filtered through us.",
      },
    ],
  },

  process: {
    title: "How a paid engagement runs",
    intro: "Fix the measurement, cut the waste, then scale what proves out. Increasing budget is the last step, not the first.",
    items: [
      {
        duration: "Week 1",
        title: "Audit and tracking repair",
        body:
          "We review search terms, conversion definitions, account structure and geography, and repair tracking before touching campaigns. Optimising against a broken conversion signal makes the account worse, faster.",
      },
      {
        duration: "Weeks 2–3",
        title: "Cut the waste",
        body:
          "Negative lists, audience and placement exclusions, geography corrections, brand separation and pausing what cannot convert. This usually reduces spend before it increases performance, and we will say so upfront.",
      },
      {
        duration: "Weeks 3–8",
        title: "Rebuild and test",
        body:
          "Restructured campaigns, new query sets, creative testing with adequate sample, and landing page alignment so the ad promise and the page match.",
      },
      {
        duration: "Ongoing",
        title: "Scale against capacity",
        body:
          "Budget moves toward what converts profitably, capped by what your business can actually service. Generating demand you cannot fulfil creates refunds, bad reviews and exhausted staff.",
      },
    ],
  },

  table: {
    caption: "What to measure instead of what platforms report by default",
    columns: ["Platform default", "Why it misleads", "What we report instead"],
    rows: [
      ["Impressions and reach", "Costs nothing to inflate, means nothing commercially", "Qualified clicks from intent-matched queries"],
      ["Click-through rate", "Rises when you attract curiosity rather than buyers", "Conversion rate from click to commercial event"],
      ["Cost per click", "A cheap click from the wrong person is not a saving", "Cost per acquired customer"],
      ["Conversions (platform-counted)", "Counts form views, duplicates and assisted claims generously", "Deduplicated conversions verified against your own records"],
      ["Blended ROAS", "Brand search and remarketing flatter the average", "Non-brand prospecting ROAS, reported separately"],
      ["Conversion value (declared)", "Often a static estimate someone typed in years ago", "Actual revenue where the systems allow it to be joined"],
    ],
  },

  prose: {
    title: "How we run paid media",
    blocks: [
      {
        heading: "Automation is useful, unsupervised automation is expensive",
        paragraphs: [
          "Smart bidding and automated campaign types genuinely outperform manual management — but only when the conversion signal is clean and the query control layer is disciplined. Given a weak signal, automation optimises efficiently toward the wrong thing, and given no negatives it will spend into whatever the model finds cheapest.",
          "So our position is not anti-automation. It is that automation amplifies the quality of your inputs, which makes tracking accuracy and query control the highest-leverage work in the account rather than a setup task you do once.",
        ],
        bullets: [
          "Clean, deduplicated conversions defined as commercial events",
          "Enough conversion volume for the bid strategy to actually learn",
          "Negatives, audience and placement exclusions maintained continuously",
          "Brand separated so it cannot subsidise unprofitable prospecting",
        ],
      },
      {
        heading: "Paid media cannot fix a business problem",
        paragraphs: [
          "If your price is uncompetitive, your reviews are poor, your booking path is broken or your team does not answer the phone, more traffic makes the loss bigger rather than smaller. We audit the destination as well as the account, and we will tell you when the honest recommendation is to spend less on ads and fix the funnel first.",
          "This costs us managed spend and it is still the right call. A clinic with a three-star rating buying more clicks is paying to send people to a page that will talk them out of booking.",
        ],
      },
      {
        heading: "Regulated categories need the policy layer designed in",
        paragraphs: [
          "Healthcare, financial services, real estate and education all carry advertising constraints that sit on top of platform policy. For healthcare specifically, the Drugs and Magic Remedies Act bars advertising treatment to the public for a long schedule of conditions, and doctors are separately restricted by Regulation 6.1 of the MCI Code of Ethics. Platform certification requirements add another layer for some categories.",
          "Getting this wrong does not just risk a disapproved ad. Repeated policy violations can suspend an account, and in regulated sectors the underlying legal exposure sits with the client. We build campaigns to the stricter standard from the start, which also happens to avoid the review delays that stall launches.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not charge a percentage of your ad spend, because it rewards us for the opposite of what you want. We will not run campaigns in an account we cannot give you full access to. We will not promise a cost per lead before seeing your data, and we will be sceptical of anyone who does.",
          "We will also not keep scaling a channel that has stopped working just because the retainer is comfortable. If paid search has hit its ceiling in your category, the useful advice is to say so and shift the argument to organic, retention or conversion.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "How much should I spend on Google Ads?",
      answer:
        "Enough that the campaign can gather sufficient conversion data to optimise, and no more than your business can service. As a practical floor, a campaign generating fewer than about fifteen to thirty conversions a month gives automated bidding too little to learn from. Beyond that, the ceiling should be set by capacity and by cost per acquired customer against what a customer is worth — not by a percentage of revenue or a competitor's budget.",
    },
    {
      question: "How do you charge — is it a percentage of ad spend?",
      answer:
        "No. We charge a flat monthly retainer scoped to the complexity of the account and the work involved, starting from about ₹12,000. Percentage-of-spend pricing creates a direct conflict: the agency earns more by increasing your budget and loses income by cutting waste. Since removing waste is usually the highest-value thing we do in the first month, we price so that recommending it costs us nothing.",
    },
    {
      question: "How quickly will I see results from PPC?",
      answer:
        "Traffic and enquiries can appear within days of launch, which is the main reason to use paid search at all. Meaningful optimisation takes longer: bid strategies need conversion volume before they perform, and we generally expect three to six weeks before an account settles into a reliable cost per acquisition. Accounts that need tracking repaired first take longer to reach that point, but the wait is what makes every later number trustworthy.",
    },
    {
      question: "Who owns the ad account?",
      answer:
        "You do. We work inside accounts created under your own billing, or we transfer accounts to you if we set them up. You keep full administrative access throughout, so you can see everything we do in real time and take the account elsewhere without negotiation. Agencies that hold client accounts hostage are relying on switching friction rather than performance, and it is worth checking this before signing with anyone.",
    },
    {
      question: "Should I run Google Ads or Meta ads?",
      answer:
        "They serve different jobs. Google captures existing demand — someone is already searching for what you sell, so intent is high and the conversion path is short. Meta creates demand among people who were not looking, which works well for visually demonstrable products, elective and aesthetic services, and local awareness, but usually needs more touches to convert. If budget forces a choice and your category has real search volume, start with Google.",
    },
    {
      question: "My cost per lead went up after you took over. Why?",
      answer:
        "Usually because we changed what counts as a lead. If the previous setup counted form views, duplicate submissions or unqualified enquiries, the old number was flattering rather than accurate. Cost per lead often rises while cost per acquired customer falls, which is the trade you want. We record the baseline definitions before changing anything precisely so this comparison can be made honestly rather than argued about later.",
    },
  ],

  related: {
    title: "Related services",
    items: [
      { title: "SEO & organic growth", href: "/services/seo-organic-growth", body: "Reducing dependence on paid over time." },
      { title: "Conversion optimisation", href: "/services/conversion-optimization", body: "When the traffic is fine and the page is not." },
      { title: "Analytics & reporting", href: "/services/analytics-reporting", body: "The tracking that makes paid media measurable." },
      { title: "Google Ads for doctors", href: "/healthcare-marketing/google-ads-for-doctors", body: "The healthcare-specific version of this work." },
      { title: "Social media marketing", href: "/services/social-media-marketing", body: "Paid social alongside paid search." },
      { title: "How we measure results", href: "/case-studies", body: "Our reporting method, stated plainly." },
    ],
  },

  cta: {
    title: "Find the spend that was never going to convert",
    body: "Give us read access to your ad account. We will send back a written audit of wasted spend, tracking faults and structural problems — before you commit to anything.",
    primary: { label: "Get the free account audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "PPC Management Services",
    serviceType: "Pay Per Click Advertising Management",
    audienceType: "Healthcare providers, D2C brands, SaaS and service businesses",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
