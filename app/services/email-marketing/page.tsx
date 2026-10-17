import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Email Marketing Services",
  description:
    "Lifecycle email built on real deliverability engineering: SPF, DKIM and DMARC, list hygiene, behavioural segmentation and flows that earn revenue.",
  keywords: [
    "email marketing agency India",
    "email marketing services",
    "lifecycle email marketing",
    "email deliverability DMARC",
    "abandoned cart email flow",
    "retention marketing agency",
    "CRM email automation",
  ],
  alternates: { canonical: "/services/email-marketing" },
  openGraph: {
    title: "Email Marketing Services | Monk Mantra",
    description:
      "Authentication, list hygiene, behavioural segmentation and lifecycle flows — the unglamorous work that decides whether email earns anything.",
    url: "/services/email-marketing",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/services/email-marketing",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Email Marketing", path: "/services/email-marketing" },
  ],
  eyebrow: "Email and lifecycle",
  h1: "Email that reaches the inbox and earns its place there",
  answer:
    "Email marketing is the practice of communicating with an audience you own, through automated lifecycle flows and periodic campaigns. It only works if messages actually reach the inbox, which now requires authenticated sending, disciplined list hygiene and behavioural segmentation. Monk Mantra builds all three, then measures revenue per recipient rather than open rate.",
  subhead:
    "Most email problems are not creative problems. They are deliverability problems wearing a creative disguise, and the fix is technical.",
  heroBullets: [
    "SPF, DKIM and DMARC configured and monitored",
    "Sunset policies that protect the sending domain",
    "Segmentation by behaviour, not by demographics",
    "Flows first, campaigns second",
  ],
  primaryCta: { label: "Get a deliverability audit", href: "/get-started" },
  secondaryCta: { label: "See all services", href: "/services" },

  keyFacts: [
    { label: "What it covers", value: "Authentication and deliverability, list hygiene, segmentation, lifecycle flows, campaign calendar, testing and reporting" },
    { label: "Starting from", value: "₹10,000 per month, scaling with list size, flow count and design volume" },
    { label: "Platform cost", value: "From about ₹1,500 per month on top — a third-party charge, not ours — scaling with contacts and send volume" },
    { label: "Time to signal", value: "Deliverability fixes within two to four weeks; flow revenue from month two" },
    { label: "Reported on", value: "Revenue per recipient, flow revenue share, deliverability and complaint rate, list health" },
    { label: "Poor fit", value: "Businesses with no owned list and no plan to build one ethically — email cannot manufacture an audience" },
  ],

  pains: {
    title: "Why email underperforms",
    intro:
      "In almost every audit, the causes are the same four, and only one of them has anything to do with the writing.",
    items: [
      {
        problem: "Mail is authenticated badly or not at all",
        fix:
          "Gmail and Yahoo now enforce bulk-sender requirements: valid SPF and DKIM, a DMARC record on the sending domain, alignment between them, one-click unsubscribe, and a spam complaint rate held below 0.3 percent. Senders who miss these get throttled or filtered silently. We configure and monitor all of it, then watch DMARC reports rather than assuming it stayed fixed.",
      },
      {
        problem: "The list is never cleaned, so the domain reputation erodes",
        fix:
          "Sending to addresses that have not opened anything in a year teaches mailbox providers that your mail is unwanted, and that judgement then applies to the people who do want it. We implement a sunset policy: identify the disengaged, run a win-back attempt, then suppress. A smaller list that engages is worth far more than a large one that drags.",
      },
      {
        problem: "Everyone receives the same message",
        fix:
          "Segmenting by age, city or job title tells you almost nothing about intent. Behaviour does: what someone browsed, what they bought, how recently, how often, which emails they engage with, where they stopped. We build segments from behaviour and let the flows do the targeting, which is why a well-built flow programme routinely out-earns the campaign calendar.",
      },
      {
        problem: "Campaigns are running but the flows were never built",
        fix:
          "A campaign is a one-off broadcast; a flow is triggered by something the recipient did and reaches them at the moment it is relevant. Flows require building once and then earn continuously. Most accounts we inherit have a busy campaign calendar and two half-configured flows, which is precisely backwards.",
      },
    ],
  },

  offerings: {
    title: "What an email engagement includes",
    intro:
      "The deliverability layer comes first, because everything else is worthless if the message lands in spam.",
    items: [
      {
        icon: "ShieldCheck",
        title: "Authentication and deliverability",
        body: "SPF, DKIM and DMARC set up with proper alignment, a dedicated or correctly shared sending domain, one-click unsubscribe headers, seed testing across major providers, and ongoing DMARC report monitoring.",
      },
      {
        icon: "Database",
        title: "List hygiene and sunset policy",
        body: "Duplicate and role-address cleanup, bounce handling, engagement tiers, a documented sunset rule, and re-permission campaigns where a legacy list needs it before you can safely send to it.",
      },
      {
        icon: "Users",
        title: "Behavioural segmentation",
        body: "Segments built from recency, frequency, monetary value, browse and cart behaviour, category affinity and engagement tier — reviewed quarterly so they reflect how people actually behave now.",
      },
      {
        icon: "Workflow",
        title: "Lifecycle flow build",
        body: "Welcome, browse abandonment, cart abandonment, post-purchase, replenishment, winback, review request and re-engagement — built in the order that matches where your revenue actually leaks.",
        href: "/services/marketing-automation",
      },
      {
        icon: "CalendarCheck",
        title: "Campaign programme",
        body: "A calendar with a reason behind each send rather than a weekly habit. Segment-aware sending, so the people least likely to engage are excluded rather than degrading your reputation.",
      },
      {
        icon: "Monitor",
        title: "Templates and rendering",
        body: "Modular templates that render correctly in Gmail, Outlook and mobile clients, accessible contrast and text sizing, dark-mode checks, and a plain-text alternative that is not an afterthought.",
      },
      {
        icon: "MessageSquare",
        title: "WhatsApp and channel fit",
        body: "For Indian consumer audiences, transactional and reminder messages usually perform better on WhatsApp. We will say so, integrate the two, and aim email at the depth it is genuinely good at.",
        href: "/services/mobile-marketing",
      },
      {
        icon: "Lock",
        title: "Consent and record-keeping",
        body: "Explicit consent capture, purpose stated at the point of collection, verifiable consent records and a working withdrawal path — the operating requirements under the DPDP Act 2023, whose rules were notified in November 2025.",
      },
      {
        icon: "LineChart",
        title: "Testing and reporting",
        body: "Structured tests on subject lines, send timing, offer and flow entry conditions, reported against revenue per recipient and flow contribution rather than open rate, which Apple Mail Privacy Protection made unreliable.",
        href: "/services/analytics-reporting",
      },
    ],
  },

  process: {
    title: "How an email engagement runs",
    intro: "Fix the plumbing, clean the list, build the flows, then worry about the calendar.",
    items: [
      {
        duration: "Weeks 1–2",
        title: "Deliverability and consent audit",
        body:
          "DNS records checked and corrected, DMARC monitoring switched on, seed tests across major inboxes, complaint and bounce history reviewed, and consent provenance established — where each contact came from and what they agreed to.",
      },
      {
        duration: "Weeks 2–4",
        title: "Clean the list, warm the domain",
        body:
          "Suppress the unreachable and the long-disengaged, set the sunset rule, and if the domain is new or damaged, warm it gradually against the most engaged segment. Sending volume follows reputation, not ambition.",
      },
      {
        duration: "Weeks 3–8",
        title: "Build the flows in revenue order",
        body:
          "Welcome and cart abandonment usually first because they earn fastest, then post-purchase and winback. Each flow is built with entry rules, exit conditions, suppression logic and a holdout where volume allows us to measure it honestly.",
      },
      {
        duration: "Ongoing",
        title: "Campaign calendar and iteration",
        body:
          "A monthly calendar tied to real reasons to write, continuous testing on the flows that carry the most revenue, quarterly segment review, and a standing deliverability check so a regression is caught in weeks rather than after a quarter of lost revenue.",
      },
    ],
  },

  table: {
    caption: "Lifecycle flows, what triggers them and what they typically contribute",
    columns: ["Flow", "Trigger", "What it earns", "Typical share of email revenue"],
    rows: [
      [
        "Welcome series",
        "New subscriber or first account creation",
        "First purchase, expectation setting, and the engagement signal that protects deliverability",
        "Commonly one of the two largest flows",
      ],
      [
        "Browse abandonment",
        "Product or service page viewed, no cart or enquiry",
        "Recovered consideration from people who showed intent but were not ready",
        "Modest, but among the cheapest revenue in the account",
      ],
      [
        "Cart or enquiry abandonment",
        "Cart created or form started, not completed",
        "Directly recovered orders, usually the highest revenue per recipient in the programme",
        "Typically the single largest flow for ecommerce",
      ],
      [
        "Post-purchase",
        "Order confirmed or service delivered",
        "Fewer support tickets, more reviews, and the setup for a second purchase",
        "Small in direct revenue, large in retention effect",
      ],
      [
        "Replenishment",
        "Estimated consumption point for a consumable product",
        "Repeat orders timed to when the customer actually runs out",
        "Meaningful only for consumables, where it can be substantial",
      ],
      [
        "Winback and re-engagement",
        "No purchase or engagement within a defined window",
        "Reactivated customers, and a clean decision on who to sunset",
        "Small, but it protects the list health everything else depends on",
      ],
    ],
  },

  prose: {
    title: "How we think about email",
    blocks: [
      {
        heading: "Deliverability is engineering, not copywriting",
        paragraphs: [
          "Since Gmail and Yahoo began enforcing bulk-sender requirements, the entry ticket is technical: authenticated sending with SPF and DKIM, a DMARC record with alignment, one-click unsubscribe in the headers, and a spam complaint rate kept below 0.3 percent. Fail these and your mail is throttled or filtered without any notification that it happened.",
          "The reason this matters commercially is that the failure is invisible. Open rates drift down, revenue drifts down, and the instinct is to redesign the template or hire a better copywriter. We check the plumbing first in every audit, because in most accounts that is where the loss is.",
        ],
        bullets: [
          "Publish SPF, DKIM and DMARC, and check alignment rather than assuming it",
          "Read DMARC aggregate reports monthly — they tell you who is sending as you",
          "Keep complaint rate under 0.3 percent, and treat 0.1 percent as the working ceiling",
          "Honour unsubscribes within two days and make the link obvious rather than hidden",
        ],
      },
      {
        heading: "Buying a list destroys the asset you were trying to build",
        paragraphs: [
          "A purchased list contains people who never agreed to hear from you, a proportion of dead addresses, and often spam traps placed specifically to catch this behaviour. Sending to it produces complaints and hard bounces immediately, and mailbox providers attribute that to your domain — not to the vendor who sold you the file.",
          "The damage is not limited to marketing mail. A burned sending domain also affects transactional messages and, depending on configuration, ordinary business correspondence. Recovering takes months of careful sending at low volume. Under the DPDP Act 2023 you also cannot demonstrate the consent you are required to hold, because it never existed. There is no version of this that is worth the shortcut.",
        ],
      },
      {
        heading: "The honest India note: WhatsApp often beats email",
        paragraphs: [
          "For many Indian consumer audiences, WhatsApp outperforms email for anything time-sensitive — order updates, appointment reminders, delivery notifications, payment prompts. It is read within minutes rather than hours, and the behaviour of the audience simply favours it. Insisting on email for these messages because email is what the agency sells is a disservice.",
          "That does not make email redundant; it clarifies what it is for. Email is the channel for depth with an audience you own — the longer explanation, the considered offer, the newsletter someone actually wants, the sequence that carries a complex decision. In a well-designed programme WhatsApp handles urgency and email handles substance, and the two share the same consent record and suppression logic rather than operating as separate silos.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not buy, rent or scrape lists, and we will not send to a legacy list of unknown provenance without a re-permission step. We will not hide the unsubscribe link, use a false sender name, or write a subject line that misrepresents what is inside — beyond the reputational cost, misleading commercial messaging sits squarely within the CCPA's 2022 guidelines on misleading advertisements.",
          "We will also not increase send frequency to hit a revenue target. Frequency increases produce a short lift followed by a durable rise in complaints and unsubscribes, and the account is worse off within a quarter. If the revenue target requires more sends than the audience will tolerate, the honest answer is that the list needs to grow or the offer needs to change.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Why are our emails going to spam?",
      answer:
        "Usually authentication, list quality or complaint rate, in that order. Check that SPF and DKIM are published and aligned with your sending domain, that a DMARC record exists, and that one-click unsubscribe is present in the headers — Gmail and Yahoo now require all of these from bulk senders. Then look at who you are sending to: mailing long-disengaged contacts teaches providers your mail is unwanted. Content and design matter far less than most people assume, and are rarely the actual cause.",
    },
    {
      question: "How often should we send marketing emails?",
      answer:
        "Send when you have a reason, not on a fixed habit. For most ecommerce brands two to four campaigns a month plus a full flow programme is a sustainable baseline; for considered B2B purchases, two a month is often plenty. Watch unsubscribe and complaint rates as your ceiling — if either rises as you add sends, you have found the limit. Frequency increases reliably produce a short revenue lift followed by a durable decline in list health.",
    },
    {
      question: "Is open rate still a useful metric?",
      answer:
        "Not as a primary one. Apple Mail Privacy Protection pre-loads tracking pixels for a large share of recipients, which inflates opens and makes comparisons across segments unreliable. Use it directionally within a single segment over time, and judge the programme on revenue per recipient, click-to-conversion rate, flow revenue share and list health instead. Any agency still reporting open rate as the headline number is reporting on something it cannot measure accurately.",
    },
    {
      question: "Should we use WhatsApp instead of email in India?",
      answer:
        "For transactional and time-sensitive messaging, usually yes — Indian consumer audiences read WhatsApp within minutes, and order updates, appointment reminders and payment prompts belong there. Email remains the better channel for depth: the longer explanation, the considered offer, the sequence supporting a complex decision, and any communication you want to own rather than rent from a platform. Run both, sharing one consent record and one suppression list, rather than treating them as competing channels.",
    },
    {
      question: "What does the DPDP Act 2023 mean for email marketing?",
      answer:
        "It requires that consent be free, specific, informed and unambiguous, that the purpose be stated at the point of collection, and that withdrawal be as easy as giving consent was. In practice that means a genuine opt-in rather than a pre-ticked box, a record of when and how each contact consented, a working unsubscribe honoured promptly, and deletion when someone asks. The Rules were notified in November 2025, so the compliance path is now defined rather than speculative.",
    },
    {
      question: "How large does our list need to be for this to be worth doing?",
      answer:
        "Flows are worth building at almost any size, because they are built once and triggered by behaviour — a list of two thousand engaged buyers with a proper cart and post-purchase flow can out-earn a list of fifty thousand disengaged addresses receiving broadcasts. Campaign programmes need more scale to justify the production effort. If you have no list at all, the first job is ethical list building through genuine value exchange, not a send calendar.",
    },
  ],

  related: {
    title: "Related services",
    items: [
      { title: "Marketing automation", href: "/services/marketing-automation", body: "The wider system flows sit inside." },
      { title: "Content marketing", href: "/services/content-marketing", body: "The material worth sending to an owned audience." },
      { title: "Conversion optimisation", href: "/services/conversion-optimization", body: "Fixing what happens after the click." },
      { title: "Mobile marketing", href: "/services/mobile-marketing", body: "WhatsApp, SMS and push, and when each beats email." },
      { title: "Analytics & reporting", href: "/services/analytics-reporting", body: "Revenue attribution beyond open rate." },
      { title: "Custom tools", href: "/custom-tools", body: "When the platform cannot do what your workflow needs." },
    ],
  },

  cta: {
    title: "Find out whether your email is actually reaching the inbox",
    body: "We will check your authentication records, run seed tests across the major providers, review list health and send you the findings in writing before you commit to anything.",
    primary: { label: "Get the free deliverability audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Email Marketing Services",
    serviceType: "Email and Lifecycle Marketing",
    audienceType: "D2C brands, healthcare providers, SaaS and service businesses",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
