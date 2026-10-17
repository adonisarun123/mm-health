import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Real Estate Marketing",
  description:
    "RERA-compliant property marketing for developers, brokers and channel partners — qualified site visits rather than lead volume, and portal dependence reduced.",
  keywords: [
    "real estate marketing agency India",
    "RERA compliant advertising",
    "property marketing agency",
    "real estate lead generation",
    "site visit conversion",
    "developer marketing India",
  ],
  alternates: { canonical: "/industries/real-estate" },
  openGraph: {
    title: "Real Estate Marketing | Monk Mantra",
    description:
      "Property marketing measured in qualified site visits and bookings, built inside RERA advertising rules.",
    url: "/industries/real-estate",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/industries/real-estate",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Real Estate", path: "/industries/real-estate" },
  ],
  eyebrow: "Real estate",
  h1: "Real estate marketing measured in site visits, not lead counts",
  answer:
    "Property marketing generates enormous lead volume and very few buyers, so the only metrics worth managing are cost per qualified site visit and cost per booking. Monk Mantra builds RERA-compliant campaigns, qualifies hard before the sales team is involved, and reduces dependence on lead portals over time.",
  subhead:
    "A campaign that produces four hundred leads and eleven site visits is not a good campaign with a sales problem. It is a targeting and qualification problem being passed downstream.",
  heroBullets: [
    "RERA registration and disclosures built into every asset",
    "Qualification before the lead reaches sales",
    "Portal dependence reduced deliberately",
    "Reported on site visits and bookings",
  ],
  primaryCta: { label: "Get a free project audit", href: "/get-started" },
  secondaryCta: { label: "See all industries", href: "/industries" },

  keyFacts: [
    { label: "Who this is for", value: "Developers, channel partners, brokerages, plotted development and commercial leasing" },
    { label: "Primary channels", value: "Google search, Meta, YouTube, portals, WhatsApp qualification, project microsites" },
    { label: "Metrics that matter", value: "Cost per qualified site visit, visit-to-booking rate, cost per booking" },
    { label: "Regulatory layer", value: "RERA Section 3 and 11(2); registration number and authority website mandatory in advertising" },
    { label: "Starting from", value: "₹25,000 per month plus media, scaling with project count" },
    { label: "Where we say no", value: "Unregistered projects — we will not advertise a project before RERA registration" },
  ],

  pains: {
    title: "Why property marketing budgets underperform",
    intro:
      "The channel mix is rarely the issue. The qualification layer and the follow-up are.",
    items: [
      {
        problem: "Lead volume is the reported metric, so lead volume is what you get",
        fix:
          "Optimising for cheap form fills produces students, brokers, competitors and people researching a purchase three years away. We optimise toward qualified site visits, which requires defining qualification honestly — budget band, timeline, location intent, financing readiness — and feeding that back into the campaigns.",
      },
      {
        problem: "Portals own the buyer and resell them to your competitors",
        fix:
          "Lead portals deliver volume and sell the same enquiry to several projects, so you are paying to compete on response speed. They have a place, but a project that is entirely portal-dependent has no pricing power over its own acquisition. We build direct channels — search, project microsites, brand — so the mix shifts over time.",
      },
      {
        problem: "Speed to lead is measured in hours when it should be seconds",
        fix:
          "In a market where the same buyer enquired with four projects, the first meaningful response usually wins the site visit. Automated acknowledgement, WhatsApp qualification and routing to an available sales person within minutes changes the conversion rate more than any creative change.",
      },
      {
        problem: "Advertising is created without regard to RERA",
        fix:
          "Section 3 of the Act prohibits advertising or marketing a project before it is registered, and Section 11(2) requires advertisements to be consistent with sanctioned plans and approvals. Registration number and the state authority's website must appear in advertising, with penalties under Section 61 reaching up to five percent of estimated project cost. We build the disclosure layer into every template rather than adding it as an afterthought.",
      },
    ],
  },

  offerings: {
    title: "What a real estate engagement covers",
    items: [
      {
        icon: "ShieldCheck",
        title: "RERA-compliant creative system",
        body: "Ad templates, microsites and collateral carrying registration number, authority website and the disclosures your state requires, reviewed before anything goes live.",
      },
      {
        icon: "Search",
        title: "Intent-led paid search",
        body: "Campaigns built on locality, configuration, budget band and project-name demand, with aggressive negatives against rental, resale and job-seeking queries.",
        href: "/services/ppc-management",
      },
      {
        icon: "Megaphone",
        title: "Paid social and video",
        body: "Meta and YouTube for demand creation in the catchment, with walkthrough and locality video doing the work a static rendering cannot.",
        href: "/services/video-marketing",
      },
      {
        icon: "MessageSquare",
        title: "WhatsApp qualification",
        body: "Instant acknowledgement, a short structured qualification exchange, and routing only genuinely qualified enquiries to the sales team.",
        href: "/custom-tools/whatsapp-automation-for-clinics",
      },
      {
        icon: "Globe",
        title: "Project microsites",
        body: "Fast, mobile-first project sites with floor plans, honest pricing context, locality information, RERA disclosures and a booking or visit path that works on a phone.",
        href: "/services/web-design-development",
      },
      {
        icon: "MapPin",
        title: "Locality and micro-market SEO",
        body: "Content built around how buyers actually search — locality plus configuration plus budget — rather than around the project's brand name, which nobody searches before launch.",
        href: "/services/seo-organic-growth",
      },
      {
        icon: "PhoneCall",
        title: "Call tracking and lead routing",
        body: "Per-channel and per-project numbers, response-time monitoring, and visibility into how many enquiries rang out unanswered.",
        href: "/services/analytics-reporting",
      },
      {
        icon: "Users",
        title: "Channel partner enablement",
        body: "Compliant collateral, co-branded assets and lead attribution that keeps direct and broker-sourced enquiries separable rather than blended into one number.",
      },
      {
        icon: "LayoutDashboard",
        title: "Site visit and booking dashboard",
        body: "Enquiry to qualified to visit to booking, per project and per source, with cost per booking as the headline — built as a tool where your CRM cannot produce it.",
        href: "/custom-tools",
      },
    ],
  },

  process: {
    title: "How a project engagement runs",
    items: [
      {
        duration: "Week 1",
        title: "Compliance and baseline",
        body:
          "We confirm registration status and required disclosures for your state, audit existing creative for RERA and CCPA exposure, and record current cost per lead, per visit and per booking.",
      },
      {
        duration: "Weeks 2–4",
        title: "Fix qualification and speed",
        body:
          "Qualification criteria agreed with sales, WhatsApp acknowledgement and routing live, call tracking installed. This usually improves visit conversion before any change in media spend.",
      },
      {
        duration: "Months 2–3",
        title: "Build direct demand",
        body:
          "Search and locality content, microsite live, video walkthroughs produced, and paid campaigns rebuilt around qualified-visit conversions rather than form fills.",
      },
      {
        duration: "Ongoing",
        title: "Shift the mix",
        body:
          "Portal spend reduced as direct channels prove out, budget reallocated by cost per booking, and inventory-aware pacing so you are not generating demand for a configuration that has sold out.",
      },
    ],
  },

  table: {
    caption: "What RERA requires before and during a campaign",
    columns: ["Requirement", "Source", "What it means in practice"],
    rows: [
      [
        "No advertising before registration",
        "Section 3",
        "Pre-launch teaser campaigns for an unregistered project are not available to you",
      ],
      [
        "Advertising consistent with sanctioned plans",
        "Section 11(2)",
        "Renderings, amenities and timelines must match approvals; misleading claims allow buyer withdrawal with refund and interest",
      ],
      [
        "Registration number in advertisements",
        "State RERA rules",
        "Number and the authority website displayed prominently across every format, including social and video",
      ],
      [
        "Carpet area, not super built-up",
        "RERA definitions",
        "Area claims in advertising and collateral stated on the statutory basis",
      ],
      [
        "Penalty exposure",
        "Section 61",
        "Up to five percent of estimated project cost for contraventions, which sits with the promoter",
      ],
      [
        "Substantiable claims",
        "CCPA guidelines 2022",
        "Investment return claims, appreciation forecasts and rental yield promises need evidence or should not be made",
      ],
    ],
  },

  prose: {
    title: "What actually moves bookings",
    blocks: [
      {
        heading: "Qualify before sales, not after",
        paragraphs: [
          "The standard arrangement is that marketing generates leads and sales sorts them out. In property this fails badly, because a sales team spending its day calling unqualified enquiries has less time for the few that were real, and morale collapses when the majority of contacts are pointless.",
          "Moving qualification upstream — a short structured exchange on WhatsApp covering budget band, timeline, configuration and locality preference before a human is involved — cuts the volume reaching sales substantially while raising the visit rate. It also produces data that improves targeting, because you finally know which campaigns generate real buyers rather than which generate cheap forms.",
        ],
        bullets: [
          "Agree qualification criteria with sales in writing before launch",
          "Acknowledge every enquiry within seconds, automatically",
          "Route only qualified enquiries to a human, with context attached",
          "Feed qualification outcomes back into campaign optimisation",
        ],
      },
      {
        heading: "Buyers search localities, not project names",
        paragraphs: [
          "Before launch nobody is searching your project's name, so brand campaigns reach an audience that does not exist yet. What people do search is locality plus configuration plus budget, alongside the practical questions that decide a purchase: schools, commute, water supply, builder reputation, possession timelines and resale prospects.",
          "Content that answers those questions honestly earns the visit long before the brochure does. It also compounds across projects in the same micro-market, which makes it one of the few assets in property marketing that survives the end of a campaign.",
        ],
      },
      {
        heading: "Video does the work photography cannot",
        paragraphs: [
          "A rendering shows the flat. A walkthrough shows the light at four in the afternoon, the actual size of the second bedroom, the road outside and how far the metro really is. For a purchase of this size, buyers are looking for reasons to trust and reasons to disqualify, and video gives them both faster than a site visit can be scheduled.",
          "It also filters. A buyer who watches a full walkthrough and still books a visit is materially more likely to convert than one who filled a form to see the price list, which improves the economics of the sales team's time.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not run advertising for a project that is not RERA registered. We will not publish appreciation or rental yield projections that cannot be substantiated, because the CCPA guidelines require substantiation and the exposure sits with the promoter. We will not use renderings or amenity claims that are inconsistent with sanctioned plans.",
          "We will also not optimise toward lead volume because it makes a monthly report look better. If cost per lead falls and cost per booking rises, the campaign got worse, and we will report it that way.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Can I advertise a project before RERA registration?",
      answer:
        "No. Section 3 of the Real Estate (Regulation and Development) Act prohibits advertising, marketing, booking, selling or offering to sell a project in a notified planning area without registering it with the state authority. That rules out pre-launch teaser campaigns for unregistered projects. Once registered, advertisements must carry the registration number and the authority's website, and must be consistent with the sanctioned plans under Section 11(2).",
    },
    {
      question: "What is a realistic cost per site visit?",
      answer:
        "It varies enormously by ticket size, city and configuration, so a single benchmark would mislead. The useful discipline is working backwards: if your visit-to-booking rate is one in twelve and a booking contributes a known margin, that tells you what a qualified visit can be worth and therefore what you can afford to pay for it. We establish both numbers from your own historical data in the first fortnight rather than quoting an industry figure.",
    },
    {
      question: "Are property portals worth the money?",
      answer:
        "They deliver volume that is genuinely hard to replace, particularly at launch, but the same enquiry is typically sold to several competing projects, so you are paying to compete on response speed rather than on proposition. The reasonable position is to use them deliberately while building direct channels that you own, and to track cost per booking by source so the trade-off is visible rather than assumed. Portal dependence is a commercial risk, not a moral failing.",
    },
    {
      question: "How quickly should we respond to an enquiry?",
      answer:
        "Within seconds for acknowledgement, and within minutes for meaningful contact. Property buyers routinely enquire with several projects in one session, and the first substantive response frequently determines who gets the site visit. Automated WhatsApp acknowledgement with a short qualification exchange closes the gap when your sales team is with a walk-in customer, which is exactly when the highest-intent digital enquiries tend to arrive.",
    },
    {
      question: "Do you work with channel partners and brokers or only developers?",
      answer:
        "Both. For developers we usually build the compliance and creative system, run direct demand generation, and provide channel partners with approved collateral so brand and RERA disclosures stay consistent. For brokerages we focus on locality authority content, qualification systems and reducing portal dependence. The one thing we insist on either way is attribution that keeps direct and partner-sourced enquiries separate, since blending them makes budget decisions impossible.",
    },
    {
      question: "Can marketing help with a project that is not selling?",
      answer:
        "Sometimes, and sometimes the honest answer is that the problem is price, location, configuration or possession delay, none of which a campaign fixes. We would rather establish that in the audit than take a retainer to spend media against a proposition the market has already rejected. Where marketing genuinely is the constraint, it is usually visible as a strong visit-to-booking rate paired with low visit volume.",
    },
  ],

  related: {
    title: "Related",
    items: [
      { title: "PPC management", href: "/services/ppc-management", body: "Paid search built on qualified-visit conversions." },
      { title: "Video marketing", href: "/services/video-marketing", body: "Walkthroughs that pre-qualify buyers." },
      { title: "Web design & development", href: "/services/web-design-development", body: "Project microsites that load and convert." },
      { title: "Analytics & reporting", href: "/services/analytics-reporting", body: "Call tracking and cost per booking." },
      { title: "Custom tools", href: "/custom-tools", body: "Qualification, routing and site-visit dashboards." },
      { title: "All industries", href: "/industries", body: "The other sectors we work in." },
    ],
  },

  cta: {
    title: "Find out what a site visit is really costing you",
    body: "Send us your current lead volume, visit rate and booking rate. We will model cost per qualified visit and cost per booking by source, and flag any RERA exposure in your live creative.",
    primary: { label: "Get the free project audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Real Estate Marketing",
    serviceType: "Real Estate and Property Marketing",
    audienceType: "Developers, brokerages and channel partners",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
