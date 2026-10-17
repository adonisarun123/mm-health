import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "Web Design & Development",
  description:
    "Websites built as conversion instruments and search assets: migration without losing traffic, fast on real Indian mobile, and handed over in full.",
  keywords: [
    "web design company Bengaluru",
    "website development India",
    "website redesign without losing traffic",
    "Core Web Vitals optimisation",
    "conversion focused web design",
    "healthcare website development",
    "Next.js website development India",
  ],
  alternates: { canonical: "/services/web-design-development" },
  openGraph: {
    title: "Web Design & Development | Monk Mantra",
    description:
      "Most redesigns lose traffic and conversions because they were run as a visual project. We run them as a migration and a conversion problem.",
    url: "/services/web-design-development",
    type: "website",
  },
};

const data: ContentPageData = {
  path: "/services/web-design-development",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Web Design & Development", path: "/services/web-design-development" },
  ],
  eyebrow: "Web design and development",
  h1: "A website is a conversion instrument and a search asset before it is a design",
  answer:
    "Web design and development is the work of building a site that converts visitors into enquiries and remains technically retrievable by search engines. Monk Mantra treats a redesign as a migration and a conversion problem first, because most rebuilds lose rankings and enquiries by changing URLs and structure cosmetically.",
  subhead:
    "The most expensive sentence in this business is we are refreshing the site. Run as a visual project, a redesign routinely costs a business the organic traffic and conversion rate it spent years accumulating.",
  heroBullets: [
    "Redirect mapping and migration checklist before design begins",
    "Fast on a mid-range Android over patchy mobile data",
    "Conversion architecture, not decoration",
    "You get the code, the accounts and the documentation",
  ],
  primaryCta: { label: "Get a website audit", href: "/get-started" },
  secondaryCta: { label: "See all services", href: "/services" },

  keyFacts: [
    { label: "What it covers", value: "Design, build, migration and redirect mapping, performance, conversion architecture, accessibility, structured data, CMS and handover" },
    { label: "Starting from", value: "₹25,000 for a business or clinic site; multi-location and multi-service builds go higher" },
    { label: "Typical timeline", value: "6–12 weeks for a business site; 12–20 weeks where migration and content restructuring are involved" },
    { label: "Stack", value: "Next.js or WordPress depending on who maintains it — chosen for your team, not our preference" },
    { label: "Handover", value: "Repository, hosting, domain, analytics and documentation transferred to you at launch" },
    { label: "Poor fit", value: "A rebuild wanted only because the current site looks dated, with no conversion or technical case behind it" },
  ],

  pains: {
    title: "Why redesigns destroy what they were meant to improve",
    intro:
      "The pattern is consistent and preventable. In almost every case the damage was done in decisions taken before a single page was designed.",
    items: [
      {
        problem: "URLs and structure were treated as cosmetic",
        fix:
          "Tidying URLs, merging sections and dropping pages that looked unimportant discards years of accumulated relevance and every inbound link pointing at them. We inventory every indexed URL before design starts and map each one to a destination or a deliberate 410, with the redirects tested in staging.",
      },
      {
        problem: "The site was designed on a fast laptop for an audience on phones",
        fix:
          "Heavy hero images, autoplaying video, animation libraries and a stack of third-party scripts feel elegant on office broadband and unusable on a two-year-old Android on a weak connection. We set a performance budget before the design is approved, because performance cannot be added afterwards without redoing the design.",
      },
      {
        problem: "Nobody defined what a page is supposed to make someone do",
        fix:
          "Pages get reviewed on whether they look good, not on whether a stranger can tell in five seconds what you do, where you are, what it costs and how to reach you. We write the job of each template first — the decision it supports and the action it should produce — and review designs against that.",
      },
      {
        problem: "The agency keeps the code, the hosting and the accounts",
        fix:
          "This is common and it is how a website becomes a hostage. You should own the repository, the domain, the hosting account, the analytics property and the documentation. We hand all of it over at launch as a matter of course, not on request.",
      },
    ],
  },

  offerings: {
    title: "What building a site properly involves",
    intro:
      "Design is one of these. The others are what determine whether the site earns anything.",
    items: [
      {
        icon: "Workflow",
        title: "Migration planning and redirect mapping",
        body: "A full crawl of the existing site, an inventory of indexed and linked URLs, a one-to-one destination map, redirects tested before launch and monitored after. The single highest-value part of any rebuild.",
      },
      {
        icon: "Target",
        title: "Conversion architecture",
        body: "What each template must establish above the fold, how long forms are allowed to be, where phone and WhatsApp sit, and how the booking path works. Written before layout, reviewed against real behaviour after.",
        href: "/services/conversion-optimization",
      },
      {
        icon: "Zap",
        title: "Performance engineering",
        body: "A performance budget agreed up front, image and font strategy, third-party script discipline, and Core Web Vitals measured on field data from real visitors rather than a lab score.",
        href: "/services/mobile-marketing",
      },
      {
        icon: "Monitor",
        title: "Design and design system",
        body: "A consistent component set rather than bespoke pages, so your team can build new pages later without the design drifting and without calling us each time.",
      },
      {
        icon: "Database",
        title: "Structured data built in",
        body: "Organisation, Service, Article, FAQ, Breadcrumb, Physician and Product markup generated from the content model, so it stays correct when content changes instead of decaying as a bolt-on.",
        href: "/services/seo-organic-growth",
      },
      {
        icon: "Users",
        title: "Accessibility",
        body: "Keyboard operability, colour contrast, focus states, semantic headings, labelled forms and alt text. Built to WCAG 2.1 AA as the working standard rather than retrofitted after a complaint.",
      },
      {
        icon: "Settings2",
        title: "CMS and stack selection",
        body: "Chosen for whoever maintains the site day to day. A marketing team that publishes weekly needs different tooling from a clinic that updates twice a year, and we will recommend the boring option when it is right.",
      },
      {
        icon: "ShieldCheck",
        title: "Forms, consent and data handling",
        body: "Enquiry data captured with a lawful basis, stored where you control it, retained against a stated policy and routed to the people who act on it — built to DPDP Act 2023 expectations rather than a US template.",
      },
      {
        icon: "BarChart3",
        title: "Analytics and tracking, configured at build",
        body: "Events, goals and call and WhatsApp tracking implemented as part of the build so the site is measurable from day one, with a pre-launch and post-launch comparison baseline recorded.",
        href: "/services/analytics-reporting",
      },
    ],
  },

  process: {
    title: "How a build runs",
    intro: "Inventory what exists, define what each page must do, then design. Not the other way around.",
    items: [
      {
        duration: "Weeks 1–2",
        title: "Audit and inventory",
        body:
          "Crawl of the current site, every indexed URL and its performance recorded, inbound links noted, conversion paths analysed and a baseline captured. This is what makes it possible to prove after launch whether the rebuild helped.",
      },
      {
        duration: "Weeks 2–4",
        title: "Structure, templates and the redirect map",
        body:
          "Information architecture, the job of each template written down, and a URL-level destination map signed off. Content restructuring decisions happen here, where they are cheap.",
      },
      {
        duration: "Weeks 4–10",
        title: "Design and build against a budget",
        body:
          "Component-based design reviewed on real devices, built with a performance budget enforced during development, structured data generated from the content model, and accessibility checked as work proceeds.",
      },
      {
        duration: "Launch and after",
        title: "Migrate, monitor, hand over",
        body:
          "Redirects verified in staging, launch during a low-traffic window, then daily monitoring of indexation, crawl errors and conversion rate for the first month. Code, accounts and documentation transferred to you.",
      },
    ],
  },

  table: {
    caption: "The decisions that determine what a site costs you later",
    columns: ["Decision", "The cheap option", "What it costs later", "What we recommend"],
    rows: [
      [
        "Existing URLs during a redesign",
        "Change them for tidiness, add a blanket redirect to the homepage",
        "Rankings and inbound link value lost, often permanently; recovery takes months if it happens",
        "A one-to-one redirect map, tested in staging and monitored for a month after launch",
      ],
      [
        "Page speed",
        "Add a caching plugin after launch",
        "Abandonment on mobile that shows up as a low conversion rate and gets blamed on traffic quality",
        "A performance budget agreed before the design is approved, verified on field data",
      ],
      [
        "Enquiry forms",
        "A long form capturing everything sales might want",
        "A large share of interested visitors abandon; the data you gain is from people who were converting anyway",
        "Ask for the minimum needed to make first contact, and gather the rest in the follow-up",
      ],
      [
        "Structured data",
        "A plugin bolted on after the content is written",
        "Markup that silently drifts out of sync with the page and loses eligibility for enhanced results",
        "Generated from the content model so it cannot go stale",
      ],
      [
        "Accessibility",
        "Skip it and address complaints if they arrive",
        "A share of users excluded outright, plus expensive retrofitting into a design that assumed sighted mouse use",
        "WCAG 2.1 AA as the working standard from the first component",
      ],
      [
        "Platform and stack",
        "Whatever the agency builds fastest, on their template licence",
        "Locked into one vendor; a rebuild required to change partners",
        "A stack matched to who maintains it, on code you own",
      ],
      [
        "Ownership of code and accounts",
        "Leave it with the agency",
        "No leverage in any future negotiation and no route out without starting again",
        "Repository, hosting, domain and analytics in your name from day one",
      ],
    ],
  },

  prose: {
    title: "How we think about building websites",
    blocks: [
      {
        heading: "A redesign is a migration project that happens to include design",
        paragraphs: [
          "The traffic loss after a redesign is rarely caused by the new design. It is caused by URLs changing without redirects, pages being consolidated without regard to what they ranked for, internal links being rebuilt so authority no longer flows where it did, and content being shortened because it looked long in a layout.",
          "The preventive work is unglamorous and it happens before design starts: crawl the existing site, record every indexed URL with its traffic and inbound links, decide the destination for each one, and treat that map as a requirement rather than a launch-week task. Where a page genuinely should not exist any more, it gets a deliberate 410 rather than a redirect to a homepage that answers nothing.",
          "We also record a pre-launch baseline of traffic, rankings and conversion rate. Without it, nobody can say afterwards whether the rebuild worked, and that argument is one we would rather settle with data.",
        ],
        bullets: [
          "Inventory every indexed URL before a single screen is designed",
          "Map each one to a destination, or retire it deliberately",
          "Rebuild internal linking intentionally, not as a by-product of the navigation",
          "Launch in a low-traffic window and monitor indexation daily for a month",
        ],
      },
      {
        heading: "Design for a mid-range Android on a weak connection",
        paragraphs: [
          "The realistic Indian browsing condition is a two or three year old Android handset, an intermittent mobile connection, limited memory and a browser with several tabs open. A site that feels immediate on a review laptop over office fibre can take many seconds to become usable there, and the visitor leaves before it does.",
          "Performance is a design constraint, not a development task. A full-bleed video hero, four webfont weights, a carousel library, a chat widget and a tag manager loading six pixels are decisions made in design and approval, and no amount of later optimisation fully recovers them.",
          "So we agree a performance budget before the design is signed off, enforce it during the build, and measure Core Web Vitals from field data rather than a lab score. The number that matters is what your actual visitors experience.",
        ],
      },
      {
        heading: "Conversion architecture, and accessibility as part of it",
        paragraphs: [
          "A stranger arriving on a service page needs four things settled almost immediately: what you do, whether you serve their situation, roughly what it involves or costs, and how to make contact. If any of those requires scrolling and interpretation, a share of visitors leave to find a competitor who made it obvious.",
          "On mobile, most service enquiries are a call or a message rather than a form submission, so phone and WhatsApp need to be prominent and tappable rather than tucked into a footer. Forms should ask for the minimum needed to make first contact; every additional field costs conversions and the data usually gets re-collected on the call anyway.",
          "Accessibility belongs in the same conversation. Keyboard operability, contrast, focus states, semantic structure and labelled forms are what make a site usable for people with disabilities, and they also make it more usable for everyone on a small screen in bright sunlight. In a healthcare context, where a site is a route to care, excluding users is a poor position to defend commercially as well as ethically.",
        ],
      },
      {
        heading: "What we will not do",
        paragraphs: [
          "We will not rebuild a site on a proprietary platform we control, or retain your hosting, domain or analytics accounts. We will not change URLs without a redirect map. We will not ship a design that cannot meet its performance budget on a mid-range phone, whatever it looks like in the review.",
          "We will also tell you when a rebuild is not the right spend. If the current site is technically sound and the problem is that pages do not convert, targeted conversion work costs a fraction of a rebuild and produces a faster answer. If the site is fine and the problem is that nobody arrives, the money belongs in acquisition. A rebuild is the right answer less often than agencies who sell rebuilds tend to find.",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "How much does a website cost in India?",
      answer:
        "A well-built business or clinic site starts from about ₹25,000, rising with how many templates and services it covers, how much content restructuring is involved, and whether it is a migration from an existing site. Multi-location or multi-speciality builds go higher. Below roughly ₹75,000 you are generally buying a theme with your logo on it, which can be a reasonable choice for a new business with no existing search presence to protect.",
    },
    {
      question: "Will a redesign hurt our search rankings?",
      answer:
        "It can, badly, and that is the most common outcome when a rebuild is run as a visual project. The damage comes from changed URLs without redirects, consolidated pages, rebuilt internal linking and shortened content. Done properly, with a URL inventory taken before design and a one-to-one redirect map verified in staging, rankings normally hold or improve. Expect a short fluctuation of two to four weeks after launch while pages are recrawled.",
    },
    {
      question: "WordPress or a custom build?",
      answer:
        "It depends on who maintains it. If your team publishes content weekly and wants to edit pages without a developer, WordPress with a disciplined setup is often the right answer. If the site is largely static, performance is critical, or it needs to integrate with booking and internal tools, a Next.js build is faster and cheaper to run long term. We recommend based on your team, not our preference, and we will say when the boring option is correct.",
    },
    {
      question: "How long does a website take to build?",
      answer:
        "Six to twelve weeks for a business site where content largely exists and the structure is settled. Twelve to twenty weeks where there is a migration from a substantial existing site, significant content restructuring, or integrations with booking and practice systems. The variable that most often extends a timeline is content and approvals on your side, so we schedule those as dated deliverables rather than assuming they will arrive.",
    },
    {
      question: "Do we own the website when it is finished?",
      answer:
        "Yes, entirely. The repository, the hosting account, the domain and the analytics property are in your name, and you get written documentation covering how the site is built and deployed. You can take it to another developer at any point without asking us. This matters more than most businesses realise until they want to change partners and discover the site is not actually theirs.",
    },
    {
      question: "Is accessibility legally required for an Indian website?",
      answer:
        "The Rights of Persons with Disabilities Act 2016 places accessibility obligations on establishments, and Indian government digital standards reference WCAG. The enforcement position for private commercial websites is less settled than in some jurisdictions, so we frame it primarily as a commercial and ethical matter: a share of your visitors cannot use an inaccessible site, and retrofitting accessibility into a finished design costs several times what building it in does. We work to WCAG 2.1 AA.",
    },
  ],

  related: {
    title: "Related services",
    items: [
      { title: "SEO & organic growth", href: "/services/seo-organic-growth", body: "The technical foundation a rebuild either protects or destroys." },
      { title: "Conversion optimisation", href: "/services/conversion-optimization", body: "Often the cheaper answer when the site is technically sound." },
      { title: "Mobile marketing", href: "/services/mobile-marketing", body: "Core Web Vitals on the devices your visitors actually use." },
      { title: "Analytics & reporting", href: "/services/analytics-reporting", body: "Tracking configured during the build, not bolted on after." },
      { title: "Custom tools", href: "/custom-tools", body: "Booking, intake and dashboards that plug into the site." },
      { title: "Healthcare marketing", href: "/healthcare-marketing", body: "The compliance and consent layer for clinical sites." },
    ],
  },

  cta: {
    title: "Before you commission a rebuild, find out what it would put at risk",
    body: "We will crawl your current site, record what each page earns, and tell you whether a rebuild, a migration plan or targeted conversion work is the right spend — in writing, before you commit.",
    primary: { label: "Get the website audit", href: "/get-started" },
    secondary: { label: "Talk to a strategist", href: "/contact" },
  },

  schema: {
    type: "Service",
    serviceName: "Web Design and Development",
    serviceType: "Website Design and Development",
    audienceType: "Healthcare providers, D2C brands, SaaS and service businesses",
    areaServed: ["IN", "AE", "GB", "US"],
  },
};

export default function Page() {
  return <ContentPage data={data} />;
}
