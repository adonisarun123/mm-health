import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

const data: ContentPageData = {
  path: "/industries/hospitality",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Hospitality & Travel", path: "/industries/hospitality" },
  ],
  eyebrow: "Hotels, resorts, homestays and boutique properties",
  h1: "Hospitality marketing is one decision repeated: how much of your demand do you rent from OTAs",
  answer:
    "Marketing a property is mostly about managing the trade-off between OTA-supplied demand and direct bookings. OTAs bring volume you cannot easily replace but take a commission and own the guest relationship. Monk Mantra works to shift the mix toward direct — capturing the brand search OTAs generate — without cutting your OTA visibility.",
  subhead:
    "The goal is not to leave the OTAs. It is to stop paying commission on the guests who were already looking for you by name, and to own the relationship for every stay after the first.",
  heroBullets: [
    "Shift booking mix toward direct without losing OTA reach",
    "Capture the brand search the billboard effect creates",
    "Rate parity respected — compete on value, not on price",
    "Built for homestays and boutique properties, not only chains",
  ],
  primaryCta: { label: "Get a direct booking audit", href: "/get-started" },
  secondaryCta: { label: "See all services", href: "/services" },

  keyFacts: [
    { label: "The central problem", value: "OTA commission versus direct booking share, and who owns the guest relationship afterwards" },
    { label: "Property types", value: "Hotels, resorts, service apartments, homestays, villas, boutique properties and small chains" },
    { label: "Core channels", value: "Brand and destination search, Google Hotel free booking links, metasearch, reviews, direct booking engine, email and messaging" },
    { label: "The constraint most people miss", value: "Rate parity clauses usually stop you undercutting the OTA price — value adds are the lever that remains" },
    { label: "Starting from", value: "₹15,000 per month, scaling with inventory, number of properties and whether the booking engine needs fixing first" },
    { label: "Time to signal", value: "Booking engine and profile fixes in 4–8 weeks; a durable shift in channel mix over two to three seasons" },
  ],

  pains: {
    title: "Why direct booking programmes stall",
    intro:
      "Not usually because the marketing was weak. Because the plumbing between the ad and the confirmed booking was never fixed.",
    items: [
      {
        problem: "Guests find you on an OTA, search your name, then still book on the OTA",
        fix:
          "This is the billboard effect, and it is the most valuable demand you have. Someone searching your property name has already chosen you. If your own site does not rank first for it, loads slowly on a phone, or hands them a booking engine that takes seven steps, you pay commission on a guest you had already won. Brand search defence plus a booking engine that completes in under a minute is the highest-return work in hospitality marketing.",
      },
      {
        problem: "The direct offer is just the same room at the same price",
        fix:
          "Rate parity clauses generally prevent you from publishing a lower rate than the OTA, so competing on price is not available. What is available is value: early check-in, a late checkout, breakfast included, a room upgrade subject to availability, airport pickup, a spa or dining credit, or a loyalty benefit. These cost far less than commission and are not covered by parity in the same way a rate cut is.",
      },
      {
        problem: "Reviews are treated as reputation admin rather than as the main conversion lever",
        fix:
          "In travel, review score and recency decide shortlists more than any creative asset does. A property one point higher on score can convert a materially larger share of the same traffic. We run review collection as a scheduled operational process tied to checkout, with a defined response standard for critical reviews, because a considered reply is read by every future guest who reaches that page.",
      },
      {
        problem: "One campaign is run for a property with four completely different demand segments",
        fix:
          "Leisure books weeks ahead and responds to imagery and destination content. Corporate books days ahead and cares about location, invoicing and a working desk. MICE and weddings are enquiry-led with lead times measured in months and a decision made by an organiser, not a guest. Each needs its own page, lead time assumption and channel. Averaging them produces a calendar that fits none of them.",
      },
    ],
  },

  offerings: {
    title: "What a hospitality engagement covers",
    intro:
      "Nine workstreams. Small properties usually need the first four; groups and resorts use most of them.",
    items: [
      {
        icon: "CalendarCheck",
        title: "Direct booking engine and path",
        body: "The booking flow audited end to end on a phone: step count, date picker behaviour, payment options including UPI, abandonment points and confirmation. Most direct booking programmes fail here rather than in the marketing.",
      },
      {
        icon: "Search",
        title: "Brand search defence",
        body: "Owning your own name across organic, the map result and paid where it pays for itself. This is where the billboard effect is either captured or handed to an OTA at full commission.",
        href: "/services/seo-organic-growth",
      },
      {
        icon: "MapPin",
        title: "Property-level local search",
        body: "Google Business Profile per property with accurate amenities, photography that reflects the actual rooms, Q&A managed, and the free booking links in Google Hotel results connected to your own engine.",
      },
      {
        icon: "Star",
        title: "Review programme",
        body: "Systematic collection tied to checkout, distribution across the platforms that matter for your segment, a response standard for critical reviews, and tracking of score movement against conversion rather than against sentiment.",
      },
      {
        icon: "Globe",
        title: "Destination and experience content",
        body: "The content guests actually search before choosing a property: what to do nearby, how to get there, when to visit, what a season is really like. It captures demand earlier than a rate comparison ever can.",
        href: "/services/content-marketing",
      },
      {
        icon: "BarChart3",
        title: "Metasearch and paid",
        body: "Metasearch placement where your direct rate can compete, destination and competitor search, and retargeting for abandoned bookings. Measured on contribution after commission, not on cost per click.",
        href: "/services/ppc-management",
      },
      {
        icon: "Users",
        title: "Segment programmes",
        body: "Separate journeys for leisure, corporate, MICE and weddings — each with its own landing pages, enquiry handling, lead time assumption and follow-up cadence.",
      },
      {
        icon: "Send",
        title: "Guest data and repeat stays",
        body: "The one advantage direct booking gives you: the guest's own contact details. Pre-arrival messaging, on-property upsell, post-stay review requests and a repeat-stay programme, all under DPDP Act consent rules.",
      },
      {
        icon: "LineChart",
        title: "Channel mix reporting",
        body: "Bookings, room nights and net revenue after commission by channel, so the direct programme can be evaluated on contribution rather than on booking count.",
      },
    ],
  },

  process: {
    title: "How a hospitality engagement runs",
    intro: "Fix the booking path, capture the demand you already generate, then build demand you do not yet have.",
    items: [
      {
        duration: "Weeks 1–3",
        title: "Channel mix and booking path audit",
        body:
          "Where bookings come from today, what each channel costs you after commission, and a step-by-step test of the direct booking flow on a phone. Almost every audit finds bookings being lost inside the engine rather than before it.",
      },
      {
        duration: "Weeks 3–8",
        title: "Capture what you already generate",
        body:
          "Brand search defended, Google Business Profile and Hotel free booking links connected, booking flow shortened, and a direct value proposition defined that respects rate parity. This phase converts existing demand more cheaply before any new demand is bought.",
      },
      {
        duration: "Months 2–6",
        title: "Build segment demand",
        body:
          "Destination and experience content, segment landing pages for corporate, MICE and weddings, metasearch where the economics work, and a review programme running as a routine rather than a campaign.",
      },
      {
        duration: "Ongoing",
        title: "Season, repeat and defend",
        body:
          "Calendar planned around lead time per segment rather than the calendar month, guest data used for repeat stays, and channel mix reviewed each season to check the shift toward direct is holding.",
      },
    ],
  },

  table: {
    caption: "What each channel costs you and what it is genuinely good for",
    columns: ["Channel", "What it costs you", "Who owns the guest", "What it is genuinely good for"],
    rows: [
      [
        "Online travel agencies",
        "A significant commission per booking, plus visibility pressure to keep discounting",
        "The OTA — you often do not get the guest's real contact details",
        "Reach into demand you cannot access alone, filling distressed inventory, and new-market discovery",
      ],
      [
        "Your own site and booking engine",
        "Payment gateway fees plus the cost of the engine and the marketing that drove the visit",
        "You, entirely, including the data for every future stay",
        "Repeat guests, brand searchers, direct enquiries and anything you want to upsell",
      ],
      [
        "Google Hotel free booking links",
        "Nothing per booking; the setup and connection effort only",
        "You, when the link points to your own engine",
        "Appearing beside OTA rates at the moment of comparison, at no commission",
      ],
      [
        "Metasearch paid placement",
        "Cost per click or a commission on the booking, depending on model",
        "You, if the click lands on your booking engine",
        "Competing on the comparison screen where the guest is already choosing between rates",
      ],
      [
        "Brand paid search",
        "Cost per click, usually low, and only worth it where you are being bid on",
        "You",
        "Defending your own name when OTAs or aggregators bid on it above your organic result",
      ],
      [
        "Review platforms",
        "Time, and an operational commitment to actually respond",
        "Shared — the platform owns the audience, you own the reputation",
        "Conversion. In travel this moves booking rates more than almost anything else you can change",
      ],
      [
        "Travel agents and corporate contracts",
        "Negotiated rates and relationship time",
        "The agent or the corporate account",
        "Base occupancy, midweek business and predictable volume through weak seasons",
      ],
      [
        "Email and messaging to past guests",
        "Almost nothing per send, plus consent management under DPDP",
        "You",
        "Repeat stays, which are the cheapest room nights any property can sell",
      ],
    ],
  },

  prose: {
    title: "How we think about hospitality",
    blocks: [
      {
        heading: "The billboard effect is the argument for direct, and most properties waste it",
        paragraphs: [
          "Guests routinely discover a property on an OTA, then search its name to see the website, the real photographs and the honest description before booking. That name search is the single most valuable query a property has, because the guest has already chosen and is only deciding where to complete the transaction.",
          "If your site ranks below the OTA for your own name, or the booking engine asks for a login, or the mobile date picker fights the guest, you have paid an OTA commission for a booking you had already won. Fixing that path is unglamorous, cheap relative to the return, and reliably the first thing worth doing.",
        ],
        bullets: [
          "Own the first screen for your own property name",
          "Complete a booking in under a minute on a phone, with UPI accepted",
          "Show the same rooms and rates the OTA shows, plus a reason to book direct",
          "Make the direct benefit visible before the guest reaches the payment step",
        ],
      },
      {
        heading: "Rate parity means you compete on value, not on price",
        paragraphs: [
          "Most OTA agreements include parity clauses that restrict publishing a lower public rate than the OTA displays. Properties that try to work around that with a visible discount usually find their OTA ranking suffers, which costs more volume than the direct bookings gained.",
          "The workable approach is to leave the rate alone and make the direct booking better. Breakfast, a late checkout, early check-in, an upgrade subject to availability, a dining or spa credit, airport transfer, or a member rate inside a signed-in programme. These typically cost a fraction of a commission, and they give the guest a concrete reason to complete the booking on your own site.",
        ],
      },
      {
        heading: "Lead time by segment should drive the calendar, not the calendar month",
        paragraphs: [
          "Leisure guests plan weeks or months ahead for a holiday season and days ahead for a weekend break. Corporate travel books close to the date and repeats. MICE enquiries arrive months ahead and are decided by an organiser weighing venue, capacity and logistics rather than by anyone who will sleep in the room. Weddings run on the longest horizon of all and are decided largely on site visits and trust.",
          "Planning one campaign calendar across all four produces work that arrives too late for MICE and too early for corporate. We build the calendar backwards from each segment's lead time, which usually means running several quiet, overlapping programmes rather than a few loud ones.",
        ],
      },
      {
        heading: "Homestays and boutique properties play a different game",
        paragraphs: [
          "A small property cannot outspend a chain and does not need to. Its advantages are specificity and the owner's own voice: a genuinely distinctive place, a location described honestly, photographs that show the real rooms rather than a wide-angle fantasy, and an owner who replies personally within the hour.",
          "The realistic aim is not to escape the OTAs but to make the second stay direct and to convert the guests who arrive through name search. That means capturing contact details at the first stay with consent, a booking path that works without a large engine, and reviews collected steadily. We will also say plainly when a property is small enough that a retainer cannot pay for itself, and what to do without one.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Should we leave the OTAs entirely?",
      answer:
        "Almost never. OTAs supply demand from travellers who would not otherwise find you, particularly in new source markets and during weak seasons, and delisting usually costs more occupancy than the commission saved. The workable goal is mix, not exit: keep OTA visibility for discovery, and capture the guests who search your name afterwards or who have stayed before. A property moving a meaningful share of bookings from OTA to direct improves net revenue per room night without touching rate or occupancy.",
    },
    {
      question: "Rate parity stops us discounting direct. What can we actually offer?",
      answer:
        "Value rather than price. Breakfast included, early check-in, a guaranteed late checkout, a room upgrade subject to availability, a dining or spa credit, airport transfer, or a member rate inside a signed-in loyalty programme where the rate is not publicly displayed. These usually cost a fraction of an OTA commission and give a guest a concrete reason to finish the booking on your site. The important part is making the benefit visible on the comparison screen and at the booking step, not burying it in a terms page.",
    },
    {
      question: "How much do reviews really matter?",
      answer:
        "In travel they are the strongest conversion lever most properties have. Score and recency shape which properties appear on a shortlist at all, and a guest comparing two similar options will nearly always resolve it on reviews rather than on copy. Treat collection as an operational routine tied to checkout rather than an occasional push, keep recent reviews flowing so the score reflects the property as it is now, and respond to critical reviews properly — that reply is read by every future guest who reaches the page.",
    },
    {
      question: "Are Google Hotel free booking links worth setting up?",
      answer:
        "Yes, and they are among the few genuinely no-commission opportunities available. When your rates and availability are connected, your own booking option appears alongside OTA rates at the exact moment a guest is comparing, and a click through to your own engine costs you nothing per booking. The work is technical rather than creative: connecting your booking engine or channel manager so rates and availability stay accurate. Inaccurate rates are worse than not appearing, so the connection has to be maintained, not just set up once.",
    },
    {
      question: "We are a homestay with six rooms. Is any of this relevant?",
      answer:
        "The principles are, the scale of the programme is not. For a small property the highest-return work is a Google Business Profile that is accurate and well photographed, honest listings, a steady flow of recent reviews, a booking path that works on a phone, and capturing guest contact details with consent so the second stay comes direct. That is a few weeks of setup plus an operational habit, not a monthly retainer. We would rather tell you that than sell you a programme your room count cannot support.",
    },
    {
      question: "When are you the wrong fit for a hospitality business?",
      answer:
        "When the property itself is the problem. Marketing cannot fix a two-point review score caused by cleanliness, maintenance or service, and driving more traffic to a property with poor recent reviews mostly increases the rate at which people decide against you. We also decline work where the brief is to suppress or offset genuine negative reviews rather than address what caused them. And where a property is small enough that fees would exceed the commission saved, we will say so and suggest what to do independently.",
    },
  ],

  related: {
    title: "Related pages",
    items: [
      { title: "All industries", href: "/industries", body: "The other sectors we work across." },
      { title: "SEO & organic growth", href: "/services/seo-organic-growth", body: "Brand and destination search, which carry most direct demand." },
      { title: "Conversion optimisation", href: "/services/conversion-optimization", body: "The booking engine work that decides whether marketing pays." },
      { title: "PPC management", href: "/services/ppc-management", body: "Metasearch, brand defence and seasonal demand capture." },
      { title: "Content marketing", href: "/services/content-marketing", body: "Destination and experience content that reaches guests earlier." },
      { title: "Talk to us", href: "/contact", body: "Tell us your current channel mix and what it costs you." },
    ],
  },

  cta: {
    title: "Find out what your channel mix actually costs",
    body: "We will map where your bookings come from, what each channel costs after commission, and test your direct booking path on a phone — then send you the fixes ranked by what they are worth.",
    primary: { label: "Get the direct booking audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Hospitality and Travel Marketing",
    serviceType: "Industry Digital Marketing",
    audienceType: "Hotels, resorts, homestays, boutique properties and travel businesses",
    areaServed: ["India"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
