import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Mobile Marketing Services",
  description:
    "Mobile web performance, the honest app-versus-website decision, app store optimisation, install campaigns and WhatsApp, for a mobile-first market.",
  keywords: [
    "mobile marketing agency India",
    "app store optimisation",
    "app install campaigns",
    "mobile web performance",
    "Core Web Vitals India",
    "WhatsApp Business API marketing",
    "mobile app growth agency",
  ],
  alternates: { canonical: "/services/mobile-marketing" },
  openGraph: {
    title: "Mobile Marketing Services | Monk Mantra",
    description:
      "In India every campaign is a mobile campaign. The distinct work is app growth and mobile web performance — and knowing which one you need.",
    url: "/services/mobile-marketing",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/services/mobile-marketing",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Mobile Marketing", path: "/services/mobile-marketing" },
  ],
  eyebrow: "Mobile marketing",
  h1: "Mobile marketing, when almost every visit is already mobile",
  answer:
    "Mobile marketing is the set of practices for reaching people on phones: mobile web performance, app store optimisation, install and re-engagement campaigns, deep linking and messaging channels. In India the mobile-first part is simply how marketing works, so the genuinely distinct work is app growth and site speed.",
  subhead:
    "If an agency sells you mobile marketing as a separate discipline, ask what is in it that is not already table stakes. The honest answer is usually two things: your app, and how fast your site loads on a mid-range Android.",
  heroBullets: [
    "Core Web Vitals treated as a conversion problem, not a technical one",
    "A straight answer on whether you need an app at all",
    "Cost per activated user, not cost per install",
    "WhatsApp as the channel Indian customers actually reply on",
  ],
  primaryCta: { label: "Get a mobile performance review", href: "/get-started" },
  secondaryCta: { label: "See all services", href: "/services" },

  keyFacts: [
    { label: "What it covers", value: "Mobile web performance, app store optimisation, install and re-engagement campaigns, deep linking, attribution, push strategy, WhatsApp messaging" },
    { label: "Starting from", value: "₹15,000 per month; app install media budgets sit on top" },
    { label: "Time to signal", value: "Performance fixes show in 3–6 weeks; store listing changes need 4–8 weeks to read reliably" },
    { label: "Reported on", value: "Mobile conversion rate, Core Web Vitals field data, cost per activated user, day-7 and day-30 retention" },
    { label: "Best fit", value: "Businesses with a real app and a retention motive, or a slow mobile site quietly losing enquiries" },
    { label: "Poor fit", value: "A business that wants an app because competitors have one — that is usually a website problem in disguise" },
  ],

  pains: {
    title: "Where mobile budgets get wasted",
    intro:
      "Four patterns account for most of it, and three of them are decisions made before any media is bought.",
    items: [
      {
        problem: "An app is built to avoid fixing the website",
        fix:
          "An app costs lakhs to build, needs continuous maintenance across two platforms, and starts with zero users who must each be persuaded to install it. A slow, confusing mobile site costs far less to fix and reaches everyone. We will tell you which problem you have before anyone writes a specification.",
      },
      {
        problem: "The mobile site is judged on a fast laptop",
        fix:
          "Your site was signed off on a desktop over office broadband. Your customer is on a three-year-old Android on patchy 4G in a lift. Those are different products. We test on real devices at throttled network speeds and treat the field data, not the lab score, as the truth.",
      },
      {
        problem: "Install campaigns are optimised to cost per install",
        fix:
          "Cost per install is the easiest number to make look good and the least connected to revenue. Incentivised and low-quality traffic drives it down while retention collapses. We optimise to an activation event that actually indicates value — a first booking, a first order, a completed profile — and accept a higher headline cost per install.",
      },
      {
        problem: "Push notifications are used until the permission is revoked",
        fix:
          "Notification permission is a finite resource. Ask at the wrong moment and you lose it permanently; over-send and users disable notifications or uninstall. We treat the permission prompt as a conversion event with its own timing and framing, and cap send frequency by segment.",
      },
    ],
  },

  offerings: {
    title: "What the work consists of",
    intro:
      "Some of this is app-specific. Much of it applies whether or not you ever ship an app, which is rather the point.",
    items: [
      {
        icon: "Zap",
        title: "Mobile web performance",
        body: "Core Web Vitals measured on field data, image and font strategy, third-party script audit, and a prioritised fix list handed to your developers with the expected conversion impact attached.",
        href: "/services/web-design-development",
      },
      {
        icon: "Smartphone",
        title: "The app or mobile web decision",
        body: "A written recommendation with the cost of each path, based on how often your customers return, whether you need device features, and whether the value can be delivered in a browser.",
      },
      {
        icon: "Search",
        title: "App store optimisation",
        body: "Title, subtitle and keyword field work, screenshot and preview testing, category selection, review response and ratings prompts. Store search is a large share of organic installs and most listings are written once and never revisited.",
      },
      {
        icon: "Target",
        title: "Install and re-engagement campaigns",
        body: "Google App campaigns and Meta app promotion configured against an activation event rather than an install, with creative variation supplied at the volume those systems need to learn.",
        href: "/services/ppc-management",
      },
      {
        icon: "Share2",
        title: "Deep linking",
        body: "Links that open the right screen in the app for people who have it and a working web page for people who do not, so campaign traffic does not land on a store page or a home screen.",
      },
      {
        icon: "LineChart",
        title: "Attribution that survives ATT",
        body: "An MMP or first-party setup configured with realistic expectations. Since App Tracking Transparency, deterministic cross-app attribution on iOS is largely gone; we read modelled and aggregated data honestly rather than pretending the old numbers still exist.",
        href: "/services/analytics-reporting",
      },
      {
        icon: "Send",
        title: "Push and in-app messaging",
        body: "Permission prompt timing, segmentation, frequency caps and a content standard. The measure is retention and re-engagement, not sends.",
      },
      {
        icon: "MessageSquare",
        title: "WhatsApp messaging",
        body: "Business API set up for transactional messaging — confirmations, reminders, reschedules, order and report updates — with template approval and opt-in handled properly rather than bulk-blasting from a personal number.",
        href: "/custom-tools/whatsapp-automation-for-clinics",
      },
      {
        icon: "PhoneCall",
        title: "Click-to-call and mobile conversion paths",
        body: "Phone and WhatsApp prominence, tap targets, form length, and autofill behaviour. On mobile the majority of service enquiries are a call or a message, and most sites bury both.",
        href: "/services/conversion-optimization",
      },
    ],
  },

  process: {
    title: "How a mobile engagement runs",
    intro: "Measure the real device experience first, decide the app question second, then buy media.",
    items: [
      {
        duration: "Weeks 1–2",
        title: "Real-device audit",
        body:
          "Field Core Web Vitals from your actual traffic, a walkthrough on mid-range Android at throttled speed, and a mobile conversion analysis by template. This alone often explains a gap between traffic and enquiries.",
      },
      {
        duration: "Weeks 2–3",
        title: "The app question, answered in writing",
        body:
          "Return frequency, feature requirements, retention economics and the cost of both paths. If the answer is that you do not need an app, we say so and the engagement gets cheaper.",
      },
      {
        duration: "Weeks 3–8",
        title: "Fix, instrument, then acquire",
        body:
          "Performance fixes shipped, activation events defined and firing, deep links and attribution configured. Media only starts once the events being optimised toward are trustworthy.",
      },
      {
        duration: "Ongoing",
        title: "Retention over acquisition",
        body:
          "Cohort retention at day 7 and day 30, store listing testing, push and messaging tuned against uninstalls and opt-outs. Acquisition scales only once retention holds; otherwise it fills a bucket with a hole in it.",
      },
    ],
  },

  table: {
    caption: "App or mobile web, by what you are trying to achieve",
    columns: ["Goal", "App or mobile web?", "Why", "What it costs to get wrong"],
    rows: [
      [
        "Get found by people searching for a service near them",
        "Mobile web",
        "Search and maps deliver these people to a page; an app is a barrier between them and an enquiry",
        "An app nobody installs, while the enquiry form stays broken",
      ],
      [
        "Let patients book and reschedule appointments",
        "Mobile web first",
        "Booking is occasional; nobody installs an app for two visits a year. A fast web booking path converts better",
        "Lakhs spent, plus every booking lost to an install prompt",
      ],
      [
        "Daily or weekly repeat usage with a logged-in account",
        "App is defensible",
        "Return frequency justifies the install friction, and push becomes a genuine retention channel",
        "Retention left on the table, and higher paid re-acquisition costs forever",
      ],
      [
        "Need camera, background location, offline use or device sensors",
        "App",
        "These are the cases the browser genuinely cannot serve",
        "A web build that fails at the one thing the product exists to do",
      ],
      [
        "Sell a considered purchase people research before buying",
        "Mobile web",
        "Research happens in search and on the open web, not inside an app they have not installed yet",
        "Invisible during the exact phase the decision is made",
      ],
      [
        "Reduce no-shows and keep customers informed",
        "Neither — use WhatsApp",
        "In India it is where messages get read and replied to, with no install required",
        "Paying for push infrastructure to reach people who never installed anything",
      ],
    ],
  },

  prose: {
    title: "How we think about mobile in the Indian market",
    blocks: [
      {
        heading: "Site speed is a conversion problem wearing a technical costume",
        paragraphs: [
          "Core Web Vitals get discussed as a ranking factor, which undersells them. Their real effect is on abandonment: every additional second before a page becomes usable removes a share of people who were prepared to enquire. That loss happens quietly, shows up as a low conversion rate, and gets misdiagnosed as a traffic quality problem.",
          "The Indian browsing condition is specific and worth designing for. A mid-range Android handset, an intermittent mobile connection, a device that has been running for two years without a factory reset, and often a browser with several tabs already open. A site that feels instant on a review laptop can take eight seconds to become interactive there.",
          "So we test what your visitors experience rather than what a lab tool reports, and we hand developers a list ordered by conversion impact rather than by score.",
        ],
        bullets: [
          "Use field data from real users, not only lab scores",
          "Audit third-party scripts — chat widgets, tag managers and pixels are usually the largest single cost",
          "Set image and font strategy before layout, not after",
          "Measure the fix in enquiries, not in the performance number",
        ],
      },
      {
        heading: "Most businesses should not build an app",
        paragraphs: [
          "An app makes sense when people come back often, when you need device capabilities a browser cannot reach, or when a logged-in relationship is central to the product. Outside those cases it is the most expensive way to avoid fixing a website.",
          "The cost is not only the build. It is two platforms to maintain, store review cycles, version fragmentation, a permanent acquisition problem because every user must be persuaded to install, and the ongoing engineering attention that stops going to the website everyone else arrives on.",
          "We have talked clients out of apps more often than into them. When the answer genuinely is an app, we will say that too — and the same team can build it.",
        ],
      },
      {
        heading: "Installs are not the goal, and attribution is harder than it was",
        paragraphs: [
          "Cost per install is a vanity metric. It is trivially manipulated by low-quality inventory, and a cheap install that never opens the app twice has negative value once you count the push infrastructure and support cost behind it. The number worth optimising toward is cost per activated user — someone who reached the moment where the product delivers its value.",
          "Attribution also needs an honest framing. Since App Tracking Transparency, deterministic user-level attribution across apps on iOS largely does not exist, and Android is moving in a similar direction. What remains is aggregated and modelled reporting, incrementality testing and holdouts. Anyone presenting you with confident user-level iOS attribution is presenting a model as a measurement.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not run install campaigns on incentivised or low-quality inventory to make the cost per install look good. We will not recommend an app to a business whose customers visit twice a year. We will not send bulk WhatsApp marketing from an unapproved setup — it risks the number, breaches platform policy, and annoys the exact people you want to keep.",
          "We will also not treat notification permission as free inventory. Push is a channel you can spend once. Used with restraint it holds for years; used as a broadcast tool it is gone in a fortnight along with the install.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Do we actually need a mobile app?",
      answer:
        "Usually not. An app earns its cost when customers return weekly or more, when you need device capabilities a browser cannot provide, or when a logged-in account is central to the product. For a clinic, a local service business or a considered purchase people research before buying, a fast mobile website reaches everyone with no install friction and costs far less to maintain. We give this answer in writing with the cost of both paths, before anyone commissions a build.",
    },
    {
      question: "How much does app store optimisation cost in India?",
      answer:
        "ASO as an ongoing workstream starts from about ₹12,000 per month, rising with how many locales and how much creative testing is involved. A one-off listing overhaul — title, subtitle, keyword field, screenshots and preview video direction — starts from about ₹20,000. Changes need four to eight weeks before results can be read reliably, because store algorithms respond slowly and seasonality distorts short windows.",
    },
    {
      question: "What is a reasonable cost per install?",
      answer:
        "It varies far too much by category to quote usefully, and the number is the wrong target anyway. A cheap install from low-quality inventory that never opens the app twice has negative value once you count support and messaging costs. Define an activation event — a first booking, first order or completed profile — and measure cost per activated user. That number is higher, harder to reduce, and actually predicts revenue.",
    },
    {
      question: "Is WhatsApp marketing legal and effective in India?",
      answer:
        "Transactional and utility messaging through the WhatsApp Business API is both permitted and highly effective, with read rates far above email for confirmations, reminders and status updates. It requires opt-in, approved message templates, and a verified business account. Bulk promotional blasting from a personal number breaches platform policy and risks the number being banned. We set up the API path and treat WhatsApp primarily as a service channel, which is also where it performs best.",
    },
    {
      question: "How do we track app installs now that iOS restricts tracking?",
      answer:
        "With aggregated and modelled data rather than user-level certainty. App Tracking Transparency ended reliable deterministic cross-app attribution on iOS, and Android privacy changes are heading the same way. The practical setup is a mobile measurement partner configured for aggregated reporting, conversion values mapped to activation events, plus incrementality tests and geo holdouts to sanity-check what platforms claim. We will show you the uncertainty rather than smoothing it over.",
    },
    {
      question: "Our mobile traffic is high but conversions are low. What is usually wrong?",
      answer:
        "Most often three things together: the page takes too long to become interactive on a mid-range Android, the form asks for more than a stranger will give, and the phone or WhatsApp option is buried below the fold. On mobile a large share of service enquiries are a tap-to-call or a message rather than a form submission. Fixing load time and making contact obvious usually moves the number more than any change to traffic sources.",
    },
  ],

  related: {
    title: "Related services",
    items: [
      { title: "Web design & development", href: "/services/web-design-development", body: "Where mobile performance is actually built or lost." },
      { title: "Conversion optimisation", href: "/services/conversion-optimization", body: "Form length, contact paths and the mobile funnel." },
      { title: "PPC management", href: "/services/ppc-management", body: "Install campaigns and paid acquisition, run properly." },
      { title: "Analytics & reporting", href: "/services/analytics-reporting", body: "Attribution you can defend after ATT." },
      { title: "Marketing automation", href: "/services/marketing-automation", body: "Messaging sequences behind reminders and re-engagement." },
      { title: "Custom tools", href: "/custom-tools", body: "Booking, reminders and WhatsApp workflows built to fit." },
    ],
  },

  cta: {
    title: "Find out what your site does on a real Indian phone",
    body: "We will test your site on mid-range Android at throttled speeds, pull your field performance data, and send you a fix list ranked by likely conversion impact — plus a straight answer on the app question.",
    primary: { label: "Get the mobile review", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Mobile Marketing Services",
    serviceType: "Mobile Marketing and App Growth",
    audienceType: "Healthcare providers, D2C brands, app publishers and service businesses",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
