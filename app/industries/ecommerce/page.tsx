import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "E-commerce & D2C Marketing",
  description:
    "D2C growth built on contribution margin, not revenue: RTO and COD economics, retention over acquisition, and conversion without dark patterns.",
  keywords: [
    "D2C marketing agency India",
    "ecommerce marketing agency",
    "Shopify marketing India",
    "reduce RTO ecommerce",
    "D2C retention marketing",
    "marketplace vs own website D2C",
  ],
  alternates: { canonical: "/industries/ecommerce" },
  openGraph: {
    title: "E-commerce & D2C Marketing | Monk Mantra",
    description:
      "Growth measured in contribution margin — COD and RTO economics, retention, and conversion that does not rely on dark patterns.",
    url: "/industries/ecommerce",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/industries/ecommerce",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "E-commerce & D2C", path: "/industries/ecommerce" },
  ],
  eyebrow: "E-commerce and D2C",
  h1: "D2C growth measured in contribution margin, not revenue",
  answer:
    "Indian D2C marketing succeeds or fails on unit economics rather than traffic. Cash on delivery, return-to-origin losses, shipping costs and discounting can turn a profitable-looking campaign into a loss at the bank. Monk Mantra runs acquisition and retention against contribution margin per order, not revenue or ROAS.",
  subhead:
    "A brand can grow revenue thirty percent and lose more money doing it. In Indian e-commerce this is not a rare failure mode — it is the default one, and it is almost always visible in the RTO and discount lines.",
  heroBullets: [
    "Reported on contribution margin per order",
    "COD and RTO treated as a marketing problem",
    "Retention weighted over pure acquisition",
    "No dark patterns, by policy and by law",
  ],
  primaryCta: { label: "Get a free growth audit", href: "/get-started" },
  secondaryCta: { label: "See all industries", href: "/industries" },

  keyFacts: [
    { label: "Who this is for", value: "D2C brands, online-first retail, subscription products, marketplace sellers scaling to own-site" },
    { label: "Primary channels", value: "Paid social, Google Shopping and search, marketplace ads, email and WhatsApp retention, influencer" },
    { label: "The metric that decides", value: "Contribution margin per order after CAC, shipping, RTO, payment fees and discount" },
    { label: "Biggest hidden cost", value: "Return to origin on cash-on-delivery orders" },
    { label: "Regulatory layer", value: "CCPA Dark Patterns Guidelines 2023 (13 named practices); Consumer Protection (E-Commerce) Rules; DPDP Act 2023" },
    { label: "Starting from", value: "₹20,000 per month, scaling with catalogue size and channel count" },
    { label: "Where we say no", value: "Brands whose only lever is deeper discounting — that is a product or pricing problem" },
  ],

  pains: {
    title: "Where D2C brands lose money while appearing to grow",
    intro:
      "Four leaks account for most of the gap between a good-looking dashboard and a disappointing bank balance.",
    items: [
      {
        problem: "ROAS looks healthy and the business is unprofitable",
        fix:
          "Return on ad spend ignores cost of goods, shipping, payment gateway fees, returns and discounts. A 3x ROAS on a product with a thirty percent gross margin loses money before a single parcel comes back. We model contribution margin per order and set the target ROAS from that, per product, rather than adopting a number someone read in a newsletter.",
      },
      {
        problem: "Cash on delivery quietly funds the losses",
        fix:
          "COD orders convert better and are returned far more often, and a return-to-origin order costs you forward shipping, reverse shipping, packaging and handling while producing nothing. We treat RTO as a marketing lever — prepaid incentives, address quality checks, order confirmation flows, and excluding the audience segments and pin codes that consistently return.",
      },
      {
        problem: "Everything is spent on acquisition and nothing on the second order",
        fix:
          "In most consumable and repeat-purchase categories the first order is at best break-even and profit lives in orders two and three. Brands that do not run structured retention are permanently buying customers at a loss. Email, WhatsApp and replenishment timing usually produce more contribution than an equivalent increase in ad budget.",
      },
      {
        problem: "Discounting has become the entire growth strategy",
        fix:
          "Continuous discounting trains customers to wait for the next sale and permanently resets the reference price. We would rather work on offer construction, bundling, value communication and shipping thresholds than run the brand into a margin floor it cannot recover from.",
      },
    ],
  },

  offerings: {
    title: "What a D2C engagement covers",
    items: [
      {
        icon: "Wallet",
        title: "Unit economics model",
        body: "Contribution margin per product and per order after CAC, COGS, shipping, RTO, payment fees, returns and discount — the model everything else is then judged against.",
      },
      {
        icon: "Megaphone",
        title: "Paid social acquisition",
        body: "Creative-led scaling on Meta and Instagram, because creative volume rather than targeting is the real lever, with structured testing and honest incrementality checks.",
        href: "/services/social-media-marketing",
      },
      {
        icon: "Search",
        title: "Google Shopping and search",
        body: "Feed hygiene, title and attribute optimisation, campaign structure segmented by margin, and capturing the branded and category demand that paid social creates.",
        href: "/services/ppc-management",
      },
      {
        icon: "TrendingUp",
        title: "Organic and category SEO",
        body: "Category and collection pages that rank, comparison and buying-guide content, and the technical work most storefront themes get wrong.",
        href: "/services/seo-organic-growth",
      },
      {
        icon: "Send",
        title: "Retention: email and WhatsApp",
        body: "Welcome, abandoned cart, post-purchase, replenishment and winback flows — with WhatsApp treated as the primary channel for transactional messaging in India and email for depth.",
        href: "/services/email-marketing",
      },
      {
        icon: "AlarmClock",
        title: "RTO and COD reduction",
        body: "Prepaid nudges, address verification, order confirmation on WhatsApp, risk scoring by pin code and audience, and suppression of segments that reliably return.",
      },
      {
        icon: "BarChart3",
        title: "Conversion optimisation",
        body: "Product page, cart and checkout work on mid-range Android over patchy connections, which is the actual condition most Indian purchases happen under.",
        href: "/services/conversion-optimization",
      },
      {
        icon: "Building2",
        title: "Marketplace and own-site strategy",
        body: "How to use Amazon and Flipkart for discovery and volume without surrendering margin and the customer relationship permanently.",
      },
      {
        icon: "LineChart",
        title: "Measurement and incrementality",
        body: "Deduplicated conversions, blended CAC alongside platform-claimed ROAS, and geo or holdout tests when a channel's real contribution is genuinely in dispute.",
        href: "/services/analytics-reporting",
      },
    ],
  },

  process: {
    title: "How a D2C engagement runs",
    intro: "Build the economic model first. Every later decision is only as good as that model.",
    items: [
      {
        duration: "Weeks 1–2",
        title: "Model the unit economics",
        body:
          "Contribution margin per SKU after every real cost, including RTO and reverse logistics. Brands frequently discover here that their best-selling product is their least profitable one.",
      },
      {
        duration: "Weeks 2–4",
        title: "Fix measurement and the obvious leaks",
        body:
          "Deduplicate conversions, establish blended CAC, cut the audiences and geographies with unrecoverable return rates, and repair the checkout friction that is losing paid traffic.",
      },
      {
        duration: "Months 2–3",
        title: "Retention before scale",
        body:
          "Flows built and live before acquisition budget increases, because scaling acquisition into a brand with no repeat purchase mechanism simply buys losses faster.",
      },
      {
        duration: "Ongoing",
        title: "Scale on contribution",
        body:
          "Budget moves toward the products and channels that produce margin, capped by inventory and fulfilment capacity. Creative production runs continuously, because creative fatigue is the usual reason a scaling account stalls.",
      },
    ],
  },

  table: {
    caption: "Where the money actually goes on a typical D2C order",
    columns: ["Line", "Why it is often missed", "What we do about it"],
    rows: [
      [
        "Customer acquisition cost",
        "Reported per platform, so the same customer is claimed twice",
        "Blended CAC across all spend, reconciled to orders in your own system",
      ],
      [
        "Return to origin",
        "Sits in a logistics report nobody sends to marketing",
        "Treated as a campaign metric; audiences and pin codes suppressed accordingly",
      ],
      [
        "Forward and reverse shipping",
        "Averaged, so heavy or bulky SKUs hide inside the mean",
        "Modelled per SKU, with free-shipping thresholds set from real weight bands",
      ],
      [
        "Discounts and coupon stacking",
        "Applied at checkout, after the campaign report was generated",
        "Discount included in contribution margin; stacking rules tightened",
      ],
      [
        "Payment gateway fees",
        "Small per order, material at volume",
        "Included in the model; prepaid incentives sized against it",
      ],
      [
        "Repeat purchase value",
        "Ignored entirely, so acquisition looks worse than it is",
        "Cohort LTV tracked so acquisition budgets can be set honestly",
      ],
    ],
  },

  prose: {
    title: "What actually works in Indian D2C",
    blocks: [
      {
        heading: "RTO is a marketing problem, not just a logistics one",
        paragraphs: [
          "Most brands treat return to origin as an operations issue and hand it to the fulfilment team. But the decision that produced the return was made in the ad, the offer and the checkout — an impulse-led creative shown to a low-intent audience with a cash-on-delivery option and no confirmation step will generate returns no warehouse can fix.",
          "Treating it as a marketing metric changes what you optimise. Prepaid conversion rate becomes a campaign objective. Order confirmation on WhatsApp becomes part of the funnel. Audiences and geographies with structurally poor delivery success get suppressed rather than scaled. None of this is glamorous and it moves contribution margin faster than a creative refresh.",
        ],
        bullets: [
          "Incentivise prepaid rather than banning COD outright, which usually costs more volume than it saves",
          "Confirm every COD order on WhatsApp before dispatch",
          "Validate addresses at checkout, not at the warehouse",
          "Track RTO rate by campaign and audience, not only by courier",
        ],
      },
      {
        heading: "The second order is where the business is",
        paragraphs: [
          "For consumables, personal care, supplements, pet products and most repeat categories, first-order contribution after acquisition cost is thin or negative by design. The brand becomes viable when a meaningful share of customers order again without being paid for a second time.",
          "That makes retention infrastructure a growth investment rather than a nice-to-have. Replenishment timing built from actual consumption cycles, post-purchase sequences that reduce buyer's remorse, and a genuine reason to return before the habit lapses. Brands that scale acquisition before this exists are not growing, they are accelerating.",
        ],
      },
      {
        heading: "Marketplaces are a channel, not a strategy",
        paragraphs: [
          "Amazon and Flipkart offer demand you cannot easily replicate and a customer relationship you never own. The commission, the advertising cost to stay visible, and the inability to build a direct relationship all compound over time, and a brand that is entirely marketplace-dependent has limited control over its own pricing and margin.",
          "The workable position for most brands is deliberate mix management: use marketplaces for discovery, trial and volume on hero SKUs, while building own-site share on the products with the best margin and the strongest repeat behaviour. What matters is that the split is a decision rather than an accident.",
        ],
      },
      {
        heading: "We do not build dark patterns",
        paragraphs: [
          "Fake countdown timers, invented stock scarcity, confirm-shaming decline buttons, pre-ticked add-ons, hidden charges revealed only at the final step and subscription traps all lift short-term conversion. They also produce refunds, chargebacks, one-star reviews and customers who never return.",
          "They are also specifically regulated. The Central Consumer Protection Authority's 2023 guidelines on dark patterns identify thirteen named practices — including false urgency, basket sneaking, confirm shaming, drip pricing and subscription traps — and in June 2025 the CCPA advised e-commerce platforms to self-audit for them within three months. We will not build these, and if your store currently uses them we will flag them in the audit.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "What ROAS should a D2C brand target?",
      answer:
        "There is no universal number, and adopting someone else's is how brands lose money confidently. The target follows from your contribution margin: if a product has a forty percent margin after COGS, shipping and payment fees, you need roughly 2.5x just to break even on that order before returns. Factor in a realistic RTO rate and the break-even target rises further. We calculate it per product rather than setting one account-wide figure.",
    },
    {
      question: "How do I reduce RTO on cash-on-delivery orders?",
      answer:
        "Start by measuring it per campaign and audience rather than only per courier, because that reveals which acquisition sources are generating unserious orders. Then work the sequence: incentivise prepaid with a small discount or free shipping, confirm every COD order on WhatsApp before dispatch, validate addresses and phone numbers at checkout, and suppress the pin codes and audience segments with consistently poor delivery success. Banning COD outright usually costs more volume than it recovers.",
    },
    {
      question: "Should I sell on Amazon and Flipkart or focus on my own website?",
      answer:
        "Both, with a deliberate split. Marketplaces give you discovery and trial volume that is hard to replicate, but take commission, require ongoing ad spend to stay visible, and keep the customer relationship. Your own site holds the margin and the data that make retention possible. A common working approach is hero SKUs on marketplaces for reach, with margin-rich and repeat-purchase products pushed to own-site, and retention flows used to migrate marketplace buyers across where the terms allow.",
    },
    {
      question: "How much should a D2C brand spend on marketing?",
      answer:
        "Set it from contribution margin and payback period rather than a percentage of revenue. If you can afford a CAC of ₹600 on a first order and your payback across two orders is under ninety days, spend is limited mainly by inventory and working capital. If payback runs beyond a couple of quarters, aggressive spending is a cash-flow risk regardless of how good the ROAS looks. Cohort payback is the number that should govern the budget conversation.",
    },
    {
      question: "Is Meta advertising still viable for D2C in India?",
      answer:
        "Yes, though the discipline has shifted. Targeting has been substantially automated, which means creative volume and quality are now the primary lever rather than audience construction. Brands that produce and test a steady stream of new creative continue to scale; brands running the same three assets for six months stall and conclude the platform stopped working. Attribution has also become less reliable post-ATT, so blended CAC matters more than platform-reported ROAS.",
    },
    {
      question: "Do you work with brands that are pre-launch?",
      answer:
        "Sometimes, but honestly it is often the wrong time to hire an agency. Before there is product-market fit, the useful work is talking to customers, testing offers cheaply and getting the first hundred orders — none of which needs a retainer. We would rather tell you that and stay in touch than take a fee for scaling something not yet worth scaling. Where we do help pre-launch, it is usually store build, tracking and the retention foundation.",
    },
  ],

  related: {
    title: "Related",
    items: [
      { title: "PPC management", href: "/services/ppc-management", body: "Paid search and shopping run on margin, not ROAS." },
      { title: "Conversion optimisation", href: "/services/conversion-optimization", body: "Checkout and product page work." },
      { title: "Email marketing", href: "/services/email-marketing", body: "The retention flows that make acquisition viable." },
      { title: "SEO & organic growth", href: "/services/seo-organic-growth", body: "Category and comparison demand." },
      { title: "All industries", href: "/industries", body: "The other sectors we work in." },
      { title: "Custom tools", href: "/custom-tools", body: "When the missing piece is software, not a campaign." },
    ],
  },

  cta: {
    title: "Find out what an order actually earns you",
    body: "Send us your product costs, shipping and return rates. We will model contribution margin per order and show you which products and channels are genuinely paying for themselves.",
    primary: { label: "Get the free growth audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "E-commerce and D2C Marketing",
    serviceType: "E-commerce Marketing",
    audienceType: "D2C brands, online retailers and marketplace sellers",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
