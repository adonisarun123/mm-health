import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Video Marketing Services",
  description:
    "Batch-produced video built for volume, hooks and clarity rather than production value: short-form, YouTube search, explainers and clinical video.",
  keywords: [
    "video marketing agency India",
    "YouTube SEO agency",
    "short form video production",
    "healthcare video marketing",
    "explainer video production India",
    "video content strategy",
    "reels and shorts for business",
  ],
  alternates: { canonical: "/services/video-marketing" },
  openGraph: {
    title: "Video Marketing Services | Monk Mantra",
    description:
      "The expensive brand film is usually the worst-value asset a business buys. Volume, hooks and clarity beat production value.",
    url: "/services/video-marketing",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/services/video-marketing",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Video Marketing", path: "/services/video-marketing" },
  ],
  eyebrow: "Video marketing",
  h1: "Video marketing built for volume and clarity, not production value",
  answer:
    "Video marketing is the use of video to generate demand, answer buying questions and build trust across social feeds, search and owned channels. The economics changed: hook quality, clarity and volume now outperform production budget, so we shoot in batches and measure assisted conversion rather than views.",
  subhead:
    "The single most common video mistake in India is spending eight lakh on one corporate film that runs on a homepage nobody scrolls, instead of forty assets that answer the questions customers actually ask.",
  heroBullets: [
    "One shoot day producing a quarter of assets",
    "Written for the first three seconds",
    "Short-form for discovery, YouTube for depth and search",
    "Healthcare video reviewed against MCI 6.1 and the DAMR Act",
  ],
  primaryCta: { label: "Get a video content plan", href: "/get-started" },
  secondaryCta: { label: "See all services", href: "/services" },

  keyFacts: [
    { label: "What it covers", value: "Video strategy, batch production, short-form vertical, YouTube long-form and SEO, explainers, editing, captions and distribution" },
    { label: "Starting from", value: "₹25,000 per batch shoot day including edit; from ₹18,000 per month for ongoing programmes" },
    { label: "Typical output", value: "One planned shoot day commonly yields 8–12 long-form pieces and 30–60 short-form cuts" },
    { label: "Time to signal", value: "Short-form reads within weeks; YouTube search performance compounds over 3–6 months" },
    { label: "Reported on", value: "Watch-through rate, retention curve at three seconds and thirty seconds, assisted conversions, enquiries citing video" },
    { label: "Poor fit", value: "A business wanting one prestige brand film and no ongoing programme" },
  ],

  pains: {
    title: "Why video budgets underperform",
    intro:
      "Almost always a planning failure rather than a craft failure. The footage is usually fine; the decisions around it were not.",
    items: [
      {
        problem: "The whole budget goes into one flagship film",
        fix:
          "A single high-production brand film is expensive, dated within eighteen months, and lives on a page most visitors never scroll to. The same budget spent on a batch programme produces dozens of assets that answer real questions and can be tested, retired and replaced. We would rather shoot four ordinary days than one cinematic one.",
      },
      {
        problem: "The first three seconds were an afterthought",
        fix:
          "In a feed, the opening frame decides whether anything else gets watched. Logo stings, slow establishing shots and a presenter clearing their throat are where most videos lose their audience. We script the hook before the rest of the piece exists, and shoot alternate openings for the same body.",
      },
      {
        problem: "One video is cut once and posted everywhere",
        fix:
          "A sixteen-by-nine talking head cropped to vertical with burnt-in subtitles at the bottom edge performs badly on every platform at once. Short-form and long-form serve genuinely different jobs, and each needs its own edit, framing, pacing and opening.",
      },
      {
        problem: "Success is measured in views",
        fix:
          "Views are cheap and largely uncorrelated with revenue. We measure the retention curve, watch-through, and assisted conversions — how often people who watched later enquired. In considered purchases, video usually shows up as an assist rather than a last click, and reporting that ignores this defunds the thing that was working.",
      },
    ],
  },

  offerings: {
    title: "What we produce and where it goes",
    intro:
      "Formats chosen by the job they do. Almost all of it comes off a small number of planned shoot days.",
    items: [
      {
        icon: "Video",
        title: "Batch production days",
        body: "A planned shoot day covering a quarter of content — a run sheet of questions, wardrobe and set changes, and a shot list built so the edit yields both long-form pieces and dozens of short cuts.",
      },
      {
        icon: "Zap",
        title: "Short-form vertical",
        body: "Reels, Shorts and vertical cuts written for discovery: hook in the first three seconds, single idea per asset, captions burnt in for silent viewing, and enough volume that the platform has something to distribute.",
        href: "/services/social-media-marketing",
      },
      {
        icon: "Search",
        title: "YouTube long-form and video SEO",
        body: "Depth pieces built against real search demand, with title and thumbnail as the primary variables, chapters, descriptions and transcripts. YouTube is a search engine first and a feed second, and it rewards the same things search does.",
        href: "/services/seo-organic-growth",
      },
      {
        icon: "Monitor",
        title: "Explainers and product walkthroughs",
        body: "The video equivalent of a good sales conversation: what it is, who it is for, what happens, what it costs. These earn their keep on service pages and in follow-up email rather than in a feed.",
      },
      {
        icon: "Stethoscope",
        title: "Procedure and practitioner videos",
        body: "For clinics, the pieces that reduce anxiety before a first visit: what the consultation involves, how preparation and recovery work, who you will meet. Scripted with the clinician and reviewed for compliance before publication.",
        href: "/healthcare-marketing",
      },
      {
        icon: "Users",
        title: "Founder and expert pieces",
        body: "The person behind the business, answering the questions they are asked in every enquiry call. Cheap to shoot, disproportionately effective in considered purchases, and the format most resistant to being copied.",
      },
      {
        icon: "Megaphone",
        title: "Paid social video creative",
        body: "Ad-specific cuts produced in variation, because paid platforms need multiple hooks and framings to learn. Creative volume is now the main lever in paid social performance.",
        href: "/services/ppc-management",
      },
      {
        icon: "FileText",
        title: "Captions, transcripts and repurposing",
        body: "Every asset captioned for silent viewing, transcribed for search, and cut down into stills, quotes and article sections. The transcript is often the cheapest article you will ever publish.",
        href: "/services/content-marketing",
      },
      {
        icon: "BarChart3",
        title: "Measurement and iteration",
        body: "Retention curves read per asset, hooks A/B tested, thumbnails and titles swapped on underperforming long-form, and assisted conversion tracked back to view events.",
        href: "/services/analytics-reporting",
      },
    ],
  },

  process: {
    title: "How a video programme runs",
    intro: "Plan a quarter, shoot it in a day or two, then edit and distribute continuously.",
    items: [
      {
        duration: "Weeks 1–2",
        title: "Demand and question mapping",
        body:
          "We collect the questions your team answers on enquiry calls, the searches with video results, and the objections that stall decisions. That list becomes the run sheet — it is far more reliable than a creative brainstorm.",
      },
      {
        duration: "Week 3",
        title: "Scripts, hooks and the shot list",
        body:
          "Every piece gets a written hook and a single clear idea. Alternate openings are scripted for the assets we intend to test. Compliance review happens here for anything clinical, not after the edit.",
      },
      {
        duration: "Week 4",
        title: "The batch shoot",
        body:
          "One or two consecutive days with a fixed run sheet, wardrobe changes to disguise the batching, and framing that supports both horizontal and vertical crops. The efficiency of the whole programme is decided here.",
      },
      {
        duration: "Ongoing",
        title: "Edit, publish, read, revise",
        body:
          "Assets released on a schedule rather than dumped at once. Retention curves reviewed weekly, hooks re-cut where the drop-off is early, and titles and thumbnails swapped on long-form that underperforms its topic.",
      },
    ],
  },

  table: {
    caption: "Video formats by the job they are doing",
    columns: ["Video type", "What it is for", "Where it lives", "Production effort"],
    rows: [
      [
        "Short-form vertical",
        "Discovery and reach among people who do not know you",
        "Instagram Reels, YouTube Shorts, Facebook",
        "Low — cut from batch footage, 30–60 per shoot day",
      ],
      [
        "YouTube long-form",
        "Depth and search demand; found months after publishing",
        "YouTube, embedded on service pages",
        "Medium — scripted, chaptered, thumbnail tested",
      ],
      [
        "Explainer or walkthrough",
        "Answering what happens, what it costs, what to expect",
        "Service pages, follow-up email, sales conversations",
        "Medium — scripted tightly, often with simple graphics",
      ],
      [
        "Founder or practitioner piece",
        "Trust before a first appointment or a large purchase",
        "About page, service pages, LinkedIn, YouTube",
        "Low — one person, one question list, batch shot",
      ],
      [
        "Paid social ad cuts",
        "Performance, in enough variation for platforms to learn",
        "Meta, YouTube, programmatic placements",
        "Low per asset, high in volume — many hooks, one body",
      ],
      [
        "Patient testimonial video",
        "Social proof — but heavily restricted in healthcare",
        "Restricted; often cannot be published at all",
        "High risk rather than high effort — see the compliance note",
      ],
      [
        "Prestige brand film",
        "Internal pride, occasionally events and pitches",
        "Homepage hero, where few visitors scroll",
        "Very high — usually the worst value per rupee",
      ],
    ],
  },

  prose: {
    title: "How the economics of video actually work now",
    blocks: [
      {
        heading: "Volume, hooks and clarity beat production value",
        paragraphs: [
          "Feed platforms distribute by watch behaviour, and watch behaviour is decided in the first seconds by whether the viewer understands what they are about to get. A well-lit phone video with a sharp opening and a single clear idea reliably outperforms a colour-graded production that takes fifteen seconds to arrive at its point.",
          "This inverts the traditional budget logic. Instead of one asset that has to work, you want many assets where most will not, because you cannot predict which hook lands. Volume is not carelessness; it is how you buy information about your audience cheaply.",
          "The batch model is what makes volume affordable. One planned day with a run sheet, wardrobe changes and framing that supports both crops commonly produces a quarter of material — a set of long-form pieces plus dozens of short cuts drawn from the same footage.",
        ],
        bullets: [
          "Script the hook before the rest of the video exists",
          "One idea per short-form asset — a second idea halves completion",
          "Shoot alternate openings for the same body and test them",
          "Burn in captions; a large share of feed viewing is silent",
        ],
      },
      {
        heading: "Short-form and YouTube do completely different jobs",
        paragraphs: [
          "Short-form vertical is a discovery channel. It reaches people who have never heard of you, and its value is measured in reach and in the branded search it creates later. It has almost no depth, and it decays fast.",
          "YouTube long-form is a search channel. It is the second-largest search destination on the web, and a video answering a genuine query keeps returning views for years. It supports depth, it supports considered purchases, and it can be optimised with the same discipline as a web page — real query demand, a title and thumbnail that earn the click, chapters, a full description and a transcript.",
          "Treating one as a substitute for the other is the usual error. Short-form without long-form generates awareness that has nowhere to go; long-form without short-form is depth nobody finds.",
        ],
      },
      {
        heading: "Testimonial video is where regulated sectors get caught",
        paragraphs: [
          "In finance, property and education, on-camera claims must stay inside the SEBI advertisement code, RERA and the CCPA coaching guidelines. Healthcare is the strictest case: doctor advertising in India is governed by the MCI Code of Ethics 2002, Regulation 6.1 — the National Medical Commission's 2023 replacement regulations were notified and then placed in abeyance, so they are not in force and should not be cited as though they were. The Drugs and Magic Remedies (Objectionable Advertisements) Act 1954 separately bars advertising treatment to the public for a schedule of more than fifty conditions. The CCPA's 2022 guidelines require every claim to be substantiable.",
          "Video is the format where these get breached most easily, because a patient speaking naturally on camera will say things a written page would never have printed — an outcome promise, a comparison, a cure claim. Testimonial-style video is therefore the highest-risk asset a clinic can commission, and the risk sits with the practice.",
          "Our position: no patient footage without documented, specific, revocable consent covering the exact usage; no outcome or cure claims in any format; no before-and-after sequences for conditions covered by the DAMR schedule. Educational video with the clinician explaining a condition or a procedure achieves most of the trust benefit and is defensible.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not sell a single expensive brand film as a marketing programme. We will not script customer or patient testimonials that promise outcomes, or produce before-and-after content for restricted conditions, regardless of what a competitor is publishing. We will not buy views to make a report look better — bought views distort the retention data that the entire optimisation process depends on.",
          "We will also tell you when video is the wrong investment. If your service pages do not convert the traffic they already have, video adds audience to a leaking funnel. Fix the conversion path first; the video will be worth more when it arrives.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "How much does video marketing cost in India?",
      answer:
        "A batch production day including planning, shooting and editing starts from about ₹25,000, rising with crew, location and how much graphics work the edit needs. Ongoing programmes covering scripting, editing, publishing and optimisation start from about ₹18,000 per month. A single prestige brand film can cost more than an entire year of batch production, which is the central argument of this page.",
    },
    {
      question: "How many videos do we need to see results?",
      answer:
        "Enough for the platform to learn and for you to find out which hooks work — realistically a few dozen short-form assets before the pattern is readable, and a handful of long-form pieces before YouTube search performance means anything. This is why we plan by the quarter and shoot in batches. A programme of four videos does not produce a signal; it produces a small sample and a premature conclusion.",
    },
    {
      question: "Do we need professional production or can we shoot on a phone?",
      answer:
        "Modern phone footage is entirely adequate for short-form, and the variables that decide performance — the hook, the clarity of the idea, the pacing, the captions — are free. What is worth paying for is sound, lighting and the editing craft that keeps retention high. If you have to choose, buy a decent microphone and reasonable lighting before you buy a better camera. Bad audio loses viewers faster than any visual flaw.",
    },
    {
      question: "Can a clinic use patient testimonial videos?",
      answer:
        "With considerable caution, and often not at all. Doctor advertising falls under MCI Regulation 6.1, and the Drugs and Magic Remedies Act 1954 bars advertising treatment to the public for a long schedule of conditions. Testimonials frequently contain outcome or cure claims, which is exactly the exposure. Where any patient footage is used it needs documented, specific and revocable consent for that usage. Educational video featuring the clinician achieves most of the trust benefit without the risk.",
    },
    {
      question: "Is YouTube worth the effort compared with Instagram?",
      answer:
        "They do different jobs, so the comparison is misleading. Instagram and Shorts are discovery channels with fast decay — good for reach, weak for depth. YouTube long-form behaves like search: a video answering a genuine question keeps earning views for years and supports considered purchases where people research first. Most programmes should run both, using short-form to create awareness and long-form to satisfy the research that awareness generates.",
    },
    {
      question: "How do you measure whether video is working?",
      answer:
        "By the retention curve rather than views. We look at the drop-off in the first three seconds, which tests the hook, and at thirty seconds, which tests whether the promise was kept. Beyond the platform, we track assisted conversions — how often people who watched later enquired or booked — and we ask on enquiry forms where people first came across you. In considered purchases video is usually an assist, and reporting that only counts last clicks defunds it wrongly.",
    },
  ],

  related: {
    title: "Related services",
    items: [
      { title: "Social media marketing", href: "/services/social-media-marketing", body: "Where short-form video is distributed and tested." },
      { title: "SEO & organic growth", href: "/services/seo-organic-growth", body: "YouTube search and video SEO run on the same logic." },
      { title: "Content marketing", href: "/services/content-marketing", body: "Transcripts and scripts feeding written coverage." },
      { title: "PPC management", href: "/services/ppc-management", body: "Paid video creative, produced in the volume platforms need." },
      { title: "Healthcare marketing", href: "/healthcare-marketing", body: "The compliance framing for clinical video." },
      { title: "Conversion optimisation", href: "/services/conversion-optimization", body: "Fix the funnel before you add audience to it." },
    ],
  },

  cta: {
    title: "Get a video plan built from the questions you already answer",
    body: "Send us the questions your team fields on enquiry calls. We will map them to formats, tell you what one batch day would produce, and flag anything that would carry compliance risk before it is shot.",
    primary: { label: "Request the video plan", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Video Marketing Services",
    serviceType: "Video Marketing and Production",
    audienceType: "Healthcare providers, D2C brands, SaaS and service businesses",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
