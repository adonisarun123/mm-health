import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Conversion Rate Optimisation",
  description:
    "CRO grounded in evidence rather than opinion: research first, tests powered properly, and honest reporting on the ones that lost. Most A/B tests are noise.",
  keywords: [
    "conversion rate optimisation",
    "CRO agency India",
    "A/B testing services",
    "landing page optimisation",
    "funnel optimisation",
    "website conversion audit",
  ],
  alternates: { canonical: "/services/conversion-optimization" },
  openGraph: {
    title: "Conversion Rate Optimisation | Monk Mantra",
    description:
      "Research-led CRO with tests that are actually powered, and honest reporting on the ones that lost.",
    url: "/services/conversion-optimization",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/services/conversion-optimization",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Conversion Optimisation", path: "/services/conversion-optimization" },
  ],
  eyebrow: "Conversion optimisation",
  h1: "Conversion optimisation, done with evidence instead of opinions",
  answer:
    "Conversion rate optimisation is the practice of increasing the share of visitors who take the action you want, using research and controlled testing rather than redesign instinct. Monk Mantra runs it research-first, powers tests properly so results mean something, and reports the failures alongside the wins.",
  subhead:
    "Most published CRO wins are statistical noise reported as insight. Roughly speaking, a majority of honestly run tests produce no detectable effect — an agency that shows you nothing but winners is either very lucky or not telling you everything.",
  heroBullets: [
    "Research before hypotheses, hypotheses before tests",
    "Sample size calculated before launch, not after",
    "Losing tests reported, not quietly dropped",
    "Fixes shipped where testing is not viable",
  ],
  primaryCta: { label: "Get a free conversion audit", href: "/get-started" },
  secondaryCta: { label: "See all services", href: "/services" },

  keyFacts: [
    { label: "What it covers", value: "Conversion research, funnel analysis, hypothesis design, A/B and multivariate testing, UX and copy fixes" },
    { label: "Starting from", value: "₹20,000 per month, scaling with traffic and test velocity" },
    { label: "Minimum viable traffic", value: "Roughly 1,000 conversions a month for reliable testing; below that we fix rather than test" },
    { label: "Test duration", value: "Usually 2–4 weeks minimum, covering full weekly cycles" },
    { label: "Reported on", value: "Conversion rate, revenue per visitor, test outcomes including losses" },
    { label: "Poor fit", value: "Low-traffic sites — the honest answer there is qualitative research and direct fixes" },
  ],

  pains: {
    title: "Why most CRO programmes produce nothing",
    intro:
      "The tactics are rarely the issue. The statistics and the sequencing are.",
    items: [
      {
        problem: "Tests are stopped the moment they look positive",
        fix:
          "Peeking at a running test and stopping when the line goes green is the single most common way to manufacture a false win. The variant then ships, the metric does not move, and nobody connects the two. We calculate the required sample before launch and hold the test to it regardless of what the dashboard looks like on day four.",
      },
      {
        problem: "There is not enough traffic for testing to ever work",
        fix:
          "A site with two hundred conversions a month cannot detect anything smaller than a very large effect, so any test will run for months or produce a meaningless answer. For those sites the honest programme is qualitative research, heuristic review and shipping obvious fixes directly — not a testing tool subscription.",
      },
      {
        problem: "Hypotheses come from opinion rather than research",
        fix:
          "Button colours and hero rewrites generated in a meeting are guesses. Research first — session recordings, form analytics, on-site polls, support and sales call themes, search queries — surfaces the actual friction, and hypotheses built from evidence have a far better hit rate than hypotheses built from taste.",
      },
      {
        problem: "The conversion being optimised is not the one that matters",
        fix:
          "Lifting form submissions by thirty percent is worthless if the extra submissions never become customers. We tie tests to the downstream outcome — qualified enquiries, attended appointments, paid orders — even when that means waiting longer for an answer.",
      },
    ],
  },

  offerings: {
    title: "What a CRO engagement includes",
    items: [
      {
        icon: "Search",
        title: "Conversion research",
        body: "Analytics funnel analysis, session recordings, form field drop-off, heatmaps used as a prompt rather than as evidence, on-site polling, and themes pulled from sales and support conversations.",
      },
      {
        icon: "ClipboardList",
        title: "Heuristic and usability review",
        body: "A structured expert walkthrough of the key paths on real devices, scoring clarity, friction, motivation and anxiety at each step.",
      },
      {
        icon: "Target",
        title: "Prioritised hypothesis backlog",
        body: "Every hypothesis stated as a testable claim with the evidence behind it, the expected mechanism, and an effort-versus-impact score so sequencing is defensible.",
      },
      {
        icon: "BarChart3",
        title: "Test design and power calculation",
        body: "Sample size and duration calculated before launch from your actual baseline rate and the smallest effect worth detecting, so we know in advance whether the test can answer the question.",
      },
      {
        icon: "Zap",
        title: "Implementation and QA",
        body: "Variants built and checked across devices and browsers, with flicker control, and validation that the test is not breaking tracking or personalisation.",
      },
      {
        icon: "FileText",
        title: "Landing page and form redesign",
        body: "Where testing is not viable, we ship evidence-based fixes directly — shorter forms, clearer above-the-fold propositions, visible phone and WhatsApp paths, honest pricing context.",
      },
      {
        icon: "Smartphone",
        title: "Mobile-first conversion work",
        body: "Most Indian traffic is mid-range Android on variable connections. We test under those conditions rather than on a desktop on office wifi, because that is where the drop-off actually happens.",
        href: "/services/mobile-marketing",
      },
      {
        icon: "CalendarCheck",
        title: "Booking and checkout flow",
        body: "The highest-value surface on most sites. Step reduction, guest checkout, payment options, error handling, and removing the fields nobody needed.",
        href: "/custom-tools/patient-appointment-booking-system",
      },
      {
        icon: "LineChart",
        title: "Honest test reporting",
        body: "A running record of every test — hypothesis, result, effect size, confidence, decision — including the ones that lost and the ones that were inconclusive.",
      },
    ],
  },

  process: {
    title: "How the programme runs",
    intro: "Research, prioritise, test properly, ship. The discipline is in refusing to skip the first step.",
    items: [
      {
        duration: "Weeks 1–3",
        title: "Research phase",
        body:
          "Quantitative funnel analysis plus qualitative research. We establish where people leave, and then work out why, because the analytics tell you the first and almost never the second.",
      },
      {
        duration: "Week 3",
        title: "Backlog and roadmap",
        body:
          "A prioritised hypothesis backlog with evidence attached, a view of which items are testable at your traffic level, and which should simply be fixed.",
      },
      {
        duration: "Ongoing, 2–4 week cycles",
        title: "Test and ship",
        body:
          "Tests run to their pre-calculated sample. Winners are implemented permanently, losers are documented, and inconclusive results are treated as inconclusive rather than reframed.",
      },
      {
        duration: "Quarterly",
        title: "Review what we have learned",
        body:
          "The compounding value of CRO is the accumulated understanding of your customers, not any single uplift. We revisit which hypotheses keep proving true and let that reshape the roadmap.",
      },
    ],
  },

  table: {
    caption: "Whether your site can support testing",
    columns: ["Monthly conversions", "Can you A/B test?", "What we would do"],
    rows: [
      ["Under 200", "No", "Qualitative research and direct fixes; testing would take months per result"],
      ["200–1,000", "Rarely", "Test only large structural changes; fix the rest without testing"],
      ["1,000–5,000", "Yes, carefully", "One test at a time, big hypotheses, 3–4 week cycles"],
      ["5,000+", "Yes", "Parallel testing on separate pages, faster cycles, smaller detectable effects"],
      ["Any volume, but seasonal", "With caution", "Run full weekly cycles and avoid testing across a promotion or festival period"],
    ],
  },

  prose: {
    title: "The statistics, stated plainly",
    blocks: [
      {
        heading: "Why most tests should be expected to fail",
        paragraphs: [
          "A well-run testing programme produces a lot of null results. That is not a failure of the programme, it is what honest experimentation looks like — most changes do not move behaviour much, and the ones that do are usually structural rather than cosmetic.",
          "The problem is that this is commercially inconvenient, so the industry has developed habits that manufacture wins: stopping tests early, running until significance appears, testing many variants and reporting the best one, or segmenting after the fact until some subgroup looks positive. Each of these reliably produces impressive numbers and no business improvement. We would rather report a quarter with two wins, four nulls and one loss than a quarter of fictional victories.",
        ],
        bullets: [
          "Fix sample size and duration before launch, then hold to them",
          "Run full weekly cycles — behaviour differs across days",
          "Do not declare a winner from post-hoc segment slicing",
          "Treat inconclusive as inconclusive, not as a small win",
        ],
      },
      {
        heading: "Big changes beat small ones",
        paragraphs: [
          "At realistic traffic levels you can only reliably detect reasonably large effects. This has a practical consequence: testing a button colour is a waste of a test slot, because even if it works the effect is too small to measure and too small to matter.",
          "So the backlog skews toward structural hypotheses — changing what the page leads with, removing a step, changing what is asked for and when, adding the reassurance that research showed people were missing. These are harder to build and they are the only ones worth the cycle.",
        ],
      },
      {
        heading: "Conversion is not only a page problem",
        paragraphs: [
          "A meaningful share of what looks like poor conversion is actually happening after the form is submitted. The enquiry arrives, nobody responds for six hours, and the customer has already booked elsewhere. No amount of landing page work fixes that.",
          "So our conversion research deliberately extends past the website into response time, follow-up and booking confirmation. Where the bottleneck turns out to be operational, we will say so — and because we build software as well, we can usually close that gap rather than handing it back as your problem.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not sell a testing retainer to a site that does not have the traffic to test. We will not report a result we would not defend to a statistician. We will not quietly bury the tests that lost, because the losses are where most of the learning is.",
          "We also will not implement dark patterns. False urgency, confirm-shaming, pre-ticked boxes, drip pricing and subscription traps do lift short-term conversion, and they are specifically named in the CCPA's 2023 guidelines on dark patterns — thirteen practices identified, with e-commerce platforms formally advised in June 2025 to self-audit for them. They also cost you refunds, chargebacks and reviews. We build for the second purchase.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "What is a good conversion rate?",
      answer:
        "There is no useful universal benchmark, because the number depends entirely on traffic source, intent, price point and what counts as a conversion. A branded search visitor to a clinic booking page and a cold social visitor to an ecommerce product page are not comparable at all. The only benchmark worth tracking is your own rate over time, segmented by source and device, which is why we record it properly before changing anything.",
    },
    {
      question: "How much traffic do I need for A/B testing?",
      answer:
        "As a working rule, around a thousand conversions a month across the page you want to test gives you enough power to detect realistic effects within a sensible timeframe. Below a few hundred conversions a month, testing produces answers so slowly and so noisily that it is not worth the tooling cost. That is not a reason to ignore conversion work — it is a reason to do research and ship fixes directly instead of testing them.",
    },
    {
      question: "How long should a test run?",
      answer:
        "Until it reaches the sample size calculated before launch, and never fewer than two full weeks so it covers complete weekly cycles including weekends. Stopping early because the result looks good is the most reliable way to ship a change that does nothing. We also avoid running tests across festival periods, major promotions or any window where visitor behaviour is atypical, since the result would not generalise.",
    },
    {
      question: "Is CRO better value than buying more traffic?",
      answer:
        "Usually, up to a point. Improving conversion lifts the return on every channel simultaneously and does not stop when you stop paying, whereas paid traffic stops the day the budget does. The caveat is traffic volume: if you have very few visitors, doubling a small number is still a small number, and acquisition is the more urgent problem. The two work best in sequence — fix conversion, then scale acquisition into a funnel that holds.",
    },
    {
      question: "Do you use heatmaps?",
      answer:
        "As a prompt, not as evidence. Heatmaps are good at making you curious about a page and bad at telling you why something happens — aggregated click density is easy to over-interpret, and scroll maps flatter pages that are simply short. We use them alongside session recordings, form analytics and direct user input, and we do not build hypotheses on a heatmap alone.",
    },
    {
      question: "What happens if a test loses?",
      answer:
        "We keep the original, document the result, and treat the loss as information about what your customers actually respond to. Losses are frequently more useful than wins because they contradict an assumption the whole team held. They appear in your reporting exactly as the wins do. Any agency whose test log contains only successes is either not running enough tests or not showing you all of them.",
    },
  ],

  related: {
    title: "Related services",
    items: [
      { title: "PPC management", href: "/services/ppc-management", body: "Conversion work makes every paid rupee go further." },
      { title: "Web design & development", href: "/services/web-design-development", body: "When the platform itself limits conversion." },
      { title: "Analytics & reporting", href: "/services/analytics-reporting", body: "The measurement CRO depends on." },
      { title: "SEO & organic growth", href: "/services/seo-organic-growth", body: "Traffic that converts is worth more per visit." },
      { title: "Patient acquisition", href: "/healthcare-marketing/patient-acquisition", body: "Funnel economics for healthcare providers." },
      { title: "Custom tools", href: "/custom-tools", body: "When the bottleneck is operational, not on the page." },
    ],
  },

  cta: {
    title: "Find out where your visitors are actually leaving",
    body: "We will analyse your funnel, review the key paths on a real mid-range phone, and send back a written list of the friction points ranked by likely impact.",
    primary: { label: "Get the free conversion audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Conversion Rate Optimisation Services",
    serviceType: "Conversion Rate Optimization",
    audienceType: "Healthcare providers, D2C brands, SaaS and service businesses",
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
